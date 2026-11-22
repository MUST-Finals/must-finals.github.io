/* MUST Finals platform - backend: Supabase auth, sync, community, reports, announcements, admin.
   Publishable key only; all access is enforced by Postgres row-level security server-side. */
'use strict';
const MFB = {
  url: 'https://ziczpsbryyjdwjoedtdb.supabase.co',
  key: 'sb_publishable_njRhgbia6C91Ce3RKg03Eg_vgnXxt7O',
  sb: null,
  user: null,
  profile: null,
  ready: false,
};
window.MFB = MFB;  // classic-script const doesn't attach to window; boot() guards on window.MFB

MFB._doInit = async function () {
  if (!window.supabase || !MFB.url || !MFB.key) return;
  MFB.sb = window.supabase.createClient(MFB.url, MFB.key);
  // OAuth returns to #/account#access_token=... : the router hash prefix breaks
  // the SDK's URL detection, so hand the fragment to setSession ourselves.
  const h = location.hash || '';
  if (/access_token=/.test(h)) {
    const p = new URLSearchParams(h.slice(h.indexOf('access_token=')));
    try {
      await MFB.sb.auth.setSession({
        access_token: p.get('access_token'),
        refresh_token: p.get('refresh_token') || ''
      });
    } catch (e) { /* leave signed out */ }
    history.replaceState(null, '', location.pathname + location.search + '#/account');
  }
  const { data: { session } } = await MFB.sb.auth.getSession();
  MFB.user = session ? session.user : null;
  if (MFB.user) await MFB.loadProfile();
  MFB.sb.auth.onAuthStateChange(async (_e, s) => {
    MFB.user = s ? s.user : null;
    MFB.profile = null;
    if (MFB.user) { await MFB.loadProfile(); await MFB.syncDown(); }
    MFB.paintNav();
    if (/^#\/account/.test(location.hash) && typeof MFB.viewAccount === 'function') MFB.viewAccount();
  });
  MFB.ready = true;
  MFB.paintNav();
  // If the router rendered the account view before init finished, re-render it.
  if (/^#\/account/.test(location.hash) && typeof MFB.viewAccount === 'function') MFB.viewAccount();
};

MFB.init = function () {
  if (!MFB._p) MFB._p = MFB._doInit().catch(() => { MFB._p = null; });
  return MFB._p;
};

MFB.loadProfile = async function () {
  const { data } = await MFB.sb.from('profiles').select('*').eq('id', MFB.user.id).maybeSingle();
  MFB.profile = data;
};

MFB.isAdmin = () => !!(MFB.profile && MFB.profile.role === 'admin');
MFB.lbSync = async function (xp) {
  if (!MFB.ready || !MFB.user || !Number.isFinite(xp) || xp < 0) return;
  try { if (Number(localStorage.getItem('mfb-lb-last')) === xp) return; } catch (e) {}
  try {
    const { data: row } = await MFB.sb.from('leaderboard_entries').select('user_id').eq('user_id', MFB.user.id).maybeSingle();
    if (!row) return; // not opted in: nothing is written anywhere
    const { error } = await MFB.sb.from('leaderboard_entries').update({ xp: Math.floor(xp), updated_at: new Date().toISOString() }).eq('user_id', MFB.user.id);
    if (!error) { try { localStorage.setItem('mfb-lb-last', String(xp)); } catch (e) {} }
  } catch (e) { console.warn('leaderboard sync failed', e); }
};
MFB.audit = async function (action, target, meta) {
  if (!MFB.ready || !MFB.user || !MFB.isAdmin()) return;
  try { await MFB.sb.from('admin_audit_log').insert({ actor: MFB.user.id, action, target: target == null ? null : String(target), meta: meta || null }); }
  catch (e) { console.warn('audit log write failed', e); }
};

/* ---- nav badge ---- */
MFB.paintNav = function () {
  const a = document.getElementById('nav-account');
  if (!a) return;
  a.innerHTML = MFB.user ? (MFB.isAdmin() ? 'Admin · ' : '') + 'Account' : 'Sign in';
  const ad = document.getElementById('nav-admin');
  if (ad) ad.style.display = MFB.isAdmin() ? '' : 'none';
};

/* ---- progress sync: per-key last-writer-wins against progress.state {data,ts} ---- */
const SYNC_SKIP = new Set(['syncedAt']);
// Apply a remote value locally. null is a deletion tombstone: drop the value
// but keep its timestamp so the delete is not resurrected by a later sync.
function applyRemote(k, val, ts) {
  try {
    if (val === null) { localStorage.removeItem('mf.' + k); localStorage.setItem('mf.t.' + k, String(ts)); }
    else { localStorage.setItem('mf.' + k, JSON.stringify(val)); localStorage.setItem('mf.t.' + k, String(ts)); }
    return true;
  } catch { return false; }
}
MFB.localState = function () {
  const data = {}, ts = {};
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!k.startsWith('mf.')) continue;
    const key = k.slice(3);
    if (key.startsWith('t.')) { ts[key.slice(2)] = JSON.parse(localStorage.getItem(k)); continue; }
    if (SYNC_SKIP.has(key)) continue;
    try { data[key] = JSON.parse(localStorage.getItem(k)); } catch {}
  }
  return { data, ts };
};
let pushTimer = null;
MFB.schedulePush = function () {
  if (!MFB.user) return;
  clearTimeout(pushTimer);
  pushTimer = setTimeout(() => MFB.syncUp(), 2500);
};
MFB.syncUp = async function () {
  if (!MFB.user) return;
  const local = MFB.localState();
  // Merge per-key against the remote before writing: a whole-blob replace would
  // let a stale device drop another device's newer keys. Per-key newer-ts wins.
  const { data: row } = await MFB.sb.from('progress').select('state').eq('user_id', MFB.user.id).maybeSingle();
  const remote = (row && row.state) || { data: {}, ts: {} };
  const merged = { data: Object.assign({}, remote.data), ts: Object.assign({}, remote.ts) };
  for (const k of Object.keys(local.data)) {
    const lts = local.ts[k] || 0, rts = (remote.ts && remote.ts[k]) || 0;
    if (lts >= rts) { merged.data[k] = local.data[k]; merged.ts[k] = lts; }
  }
  let changed = false;
  for (const k of Object.keys(merged.data)) {
    const rts = merged.ts[k] || 0, lts = local.ts[k] || 0;
    if (rts > lts) {
      if (applyRemote(k, merged.data[k], rts)) changed = true;
    }
  }
  const { error } = await MFB.sb.from('progress').upsert({ user_id: MFB.user.id, state: merged, updated_at: new Date().toISOString() });
  // Write syncedAt directly: store.set would re-schedule a push and loop forever.
  if (!error) { try { localStorage.setItem('mf.syncedAt', JSON.stringify(Date.now())); } catch {} MFB.paintSync && MFB.paintSync(); }
  if (changed && typeof render === 'function') render();
  return error;
};
MFB.syncDown = async function () {
  if (!MFB.user) return;
  const { data: row, error } = await MFB.sb.from('progress').select('state').eq('user_id', MFB.user.id).maybeSingle();
  if (error || !row || !row.state) { await MFB.syncUp(); return; }
  const remote = row.state, local = MFB.localState();
  let changed = false;
  for (const k of Object.keys(remote.data || {})) {
    const rts = (remote.ts && remote.ts[k]) || 0;
    const lts = local.ts[k] || 0;
    if (rts > lts) {
      if (applyRemote(k, remote.data[k], rts)) changed = true;
    }
  }
  await MFB.syncUp();
  // Never reload here: this runs on every signed-in load and a reload loops forever.
  // Views read localStorage through store on render, so a re-render picks changes up.
  if (changed && typeof render === 'function') render();
};
MFB.paintSync = function () {
  const el = document.getElementById('sync-status');
  if (el) store.get('syncedAt', null).then(t => { el.textContent = t ? 'Last synced ' + new Date(t).toLocaleString() : 'Not synced yet'; });
};

/* ---- account page ---- */
MFB.viewAccount = async function () {
  if (!MFB.ready) { $('#app').innerHTML = '<div class="empty"><div>Backend not configured.</div></div>'; return; }
  if (!MFB.user) {
    $('#app').innerHTML = `
    <section class="hero"><div class="eyebrow">Account</div><h1>Sign in to sync and join discussions</h1>
    <p class="sub">Your progress, planner and bookmarks sync across devices. Discussion posts show your display name to other students.</p></section>
    <div class="grid g2" style="align-items:start">
      <div class="card" style="padding:18px">
        <h2 style="margin-top:0">Sign in</h2>
        <button type="button" class="btn" id="google-go" style="width:100%;justify-content:center">${ic('play')} Continue with Google</button>
        <p class="hint" id="google-msg" style="margin-top:6px">Fastest way - uses your Google account securely. We only receive your name, email and profile picture.</p>
        <hr style="border-color:var(--stroke);margin:14px 0">
        <label class="hint">Email</label><input id="si-email" type="email" autocomplete="email" style="width:100%">
        <label class="hint">Password</label><input id="si-pass" type="password" autocomplete="current-password" style="width:100%">
        <button type="button" class="btn ghost" id="si-go" style="margin-top:12px">Sign in with email</button>
        <p class="hint" id="si-msg"></p>
      </div>
      <div class="card" style="padding:18px">
        <h2 style="margin-top:0">Create account</h2>
        <label class="hint">Display name (shown on discussion posts)</label><input id="su-name" maxlength="40" style="width:100%">
        <label class="hint">Email</label><input id="su-email" type="email" autocomplete="email" style="width:100%">
        <label class="hint">Password (8+ characters)</label><input id="su-pass" type="password" autocomplete="new-password" style="width:100%">
        <button type="button" class="btn" id="su-go" style="margin-top:12px">${ic('check')} Sign up</button>
        <p class="hint" id="su-msg"></p>
      </div>
    </div>`;
    $('#google-go').addEventListener('click', async () => {
      $('#google-msg').textContent = 'Opening Google sign-in...';
      const { error } = await MFB.sb.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: location.origin + location.pathname + '#/account', scopes: 'openid email profile' },
      });
      if (error) $('#google-msg').textContent = 'Could not start Google sign-in: ' + error.message;
    });
    $('#si-go').addEventListener('click', async () => {
      $('#si-msg').textContent = 'Signing in...';
      const { error } = await MFB.sb.auth.signInWithPassword({ email: $('#si-email').value.trim(), password: $('#si-pass').value });
      $('#si-msg').textContent = error ? ('Could not sign in: ' + error.message) : 'Signed in.';
      if (!error) MFB.viewAccount();
    });
    $('#su-go').addEventListener('click', async () => {
      const name = $('#su-name').value.trim();
      if (!name) { $('#su-msg').textContent = 'Pick a display name first.'; return; }
      $('#su-msg').textContent = 'Creating account...';
      const { error } = await MFB.sb.auth.signUp({
        email: $('#su-email').value.trim(), password: $('#su-pass').value,
        options: { data: { display_name: name } },
      });
      $('#su-msg').textContent = error ? ('Could not sign up: ' + error.message)
        : 'Account created. If email confirmation is on, confirm from your inbox, then sign in.';
      if (!error) { const { data: s } = await MFB.sb.auth.getSession(); if (s.session) MFB.viewAccount(); }
    });
    return;
  }
  const name = MFB.profile ? MFB.profile.display_name : '';
  $('#app').innerHTML = `
  <section class="hero"><div class="eyebrow">Account</div><h1>${esc(name || MFB.user.email)}</h1>
  <p class="sub">${esc(MFB.user.email)} · ${MFB.isAdmin() ? 'Admin' : 'Student'}</p></section>
  <div class="grid g2" style="align-items:start">
    <div class="card" style="padding:18px">
      <h2 style="margin-top:0">Sync</h2>
      <p class="hint" id="sync-status">...</p>
      <div class="rowflex" style="gap:8px">
        <button type="button" class="btn sm" id="sync-now">${ic('retry')} Sync now</button>
        <button type="button" class="btn ghost sm" id="pull-now">Pull from cloud</button>
      </div>
    </div>
    <div class="card" style="padding:18px">
      <h2 style="margin-top:0">Profile</h2>
      <label class="hint">Display name</label><input id="pf-name" maxlength="40" value="${esc(name)}" style="width:100%">
      <button type="button" class="btn sm" id="pf-save" style="margin-top:12px">${ic('check')} Save</button>
      <p class="hint" id="pf-msg"></p>
      <hr style="border-color:var(--stroke);margin:16px 0">
      <button type="button" class="btn ghost sm" id="sign-out">Sign out</button>
    </div>
  </div>`;
  MFB.paintSync();
  $('#sync-now').addEventListener('click', async () => { const e = await MFB.syncUp(); toast(e ? 'Sync failed: ' + e.message : 'Synced'); MFB.paintSync(); });
  $('#pull-now').addEventListener('click', async () => { await MFB.syncDown(); toast('Pulled'); });
  $('#pf-save').addEventListener('click', async () => {
    const v = $('#pf-name').value.trim();
    if (!v) return;
    const { error } = await MFB.sb.from('profiles').update({ display_name: v }).eq('id', MFB.user.id);
    $('#pf-msg').textContent = error ? ('Save failed: ' + error.message) : 'Saved.';
    if (!error) { await MFB.loadProfile(); MFB.paintNav(); }
  });
  $('#sign-out').addEventListener('click', async () => { await MFB.sb.auth.signOut(); MFB.viewAccount(); });
};

/* ---- announcements (public read) ---- */
MFB.announcementsHtml = async function () {
  if (!MFB.ready) return '';
  const { data } = await MFB.sb.from('announcements').select('title,body,created_at').order('created_at', { ascending: false }).limit(3);
  if (!data || !data.length) return '';
  return `<div class="blk"><div class="blk-h"><h2>${ic('flag')} Announcements</h2></div><div class="acts">` +
    data.map(a => `<div class="act"><span style="font-weight:700">${esc(a.title)}</span><span>${esc(a.body)}</span><time>${ago(new Date(a.created_at).getTime())}</time></div>`).join('') +
    `</div></div>`;
};

/* ---- community discussion per question ---- */
MFB.discussionHtml = function (qid) {
  return `<div class="disc" data-disc="${esc(qid)}"><button type="button" class="qtool disc-toggle">${ic('list')}<span>Discussion</span></button><div class="disc-body" style="display:none"></div></div>`;
};
MFB.loadDiscussion = async function (box, qid) {
  if (!MFB.ready) { box.innerHTML = '<p class="hint">Backend not configured.</p>'; return; }
  const { data, error } = await MFB.sb.from('posts').select('id,body,created_at,author,author_name').eq('question_id', qid).is('parent_id', null).order('created_at', { ascending: true }).limit(50);
  const list = error ? `<p class="hint">Could not load discussion${MFB.user ? '' : ' - sign in to read and post'}.</p>`
    : (data && data.length ? data.map(p => `<div class="act"><span style="font-weight:700">${esc(p.author_name || 'Student')}</span><span>${esc(p.body)}</span><time>${ago(new Date(p.created_at).getTime())}</time></div>`).join('')
      : '<p class="hint">No posts yet. Be the first to ask about this question.</p>');
  box.innerHTML = `<div class="acts" style="margin:8px 0">${list}</div>` + (MFB.user
    ? `<div class="rowflex" style="gap:8px"><input class="disc-in" maxlength="4000" placeholder="Ask or answer..." style="flex:1"><button type="button" class="btn sm disc-send">Post</button></div><p class="hint disc-msg"></p>`
    : `<p class="hint"><a href="#/account">Sign in</a> to join the discussion.</p>`);
  const send = box.querySelector('.disc-send');
  if (send) send.addEventListener('click', async () => {
    const inp = box.querySelector('.disc-in'), v = inp.value.trim();
    if (!v) return;
    const { error: e2 } = await MFB.sb.from('posts').insert({ question_id: qid, author: MFB.user.id, body: v });
    if (e2) box.querySelector('.disc-msg').textContent = (MFB.profile && MFB.profile.role === 'blocked')
      ? 'Your account is blocked from posting. Contact the site owner if you think this is a mistake.'
      : 'Post failed: ' + e2.message;
    else MFB.loadDiscussion(box, qid);
  });
};

/* ---- reports: send to backend when signed in (clipboard fallback stays) ---- */
MFB.sendReport = async function (qid, detail) {
  if (!MFB.user) return { error: { message: 'not signed in' } };
  return await MFB.sb.from('reports').insert({ question_id: qid, author: MFB.user.id, detail });
};

/* ---- admin page ---- */
MFB.viewAdmin = async function () {
  if (!MFB.ready || !MFB.user) { nav('/account'); return; }
  if (!MFB.isAdmin()) { $('#app').innerHTML = `<div class="empty">${ic('alert')}<div>Admins only. Your account has the student role.</div></div>`; return; }
  const [reps, postsN, usersN, posts, anns, profs, cont2, auds] = await Promise.all([
    MFB.sb.from('reports').select('id,question_id,detail,status,created_at,profiles(display_name)').order('created_at', { ascending: false }).limit(50),
    MFB.sb.from('posts').select('id', { count: 'exact', head: true }),
    MFB.sb.from('profiles').select('id', { count: 'exact', head: true }),
    MFB.sb.from('posts').select('id,question_id,body,created_at,author,profiles(display_name,role)').order('created_at', { ascending: false }).limit(50),
    MFB.sb.from('announcements').select('id,title,body,created_at').order('created_at', { ascending: false }).limit(20),
    MFB.sb.from('profiles').select('id,display_name,role,created_at').order('created_at', { ascending: false }).limit(50),
    MFB.sb.from('content_items').select('id,kind,subj,ref_id,payload,created_at').order('created_at', { ascending: false }).limit(100),
    MFB.sb.from('admin_audit_log').select('id,action,target,meta,created_at,profiles(display_name)').order('created_at', { ascending: false }).limit(50).then(r => r, () => ({ data: [] })),
  ]);
  const postList = (posts.data || []).map(p => {
    const name = (p.profiles && p.profiles.display_name) || 'student';
    const blocked = p.profiles && p.profiles.role === 'blocked';
    return `<div class="act"><span style="font-weight:700">${esc(name)}</span><span>${esc(p.body.slice(0, 120))}</span><time>${ago(new Date(p.created_at).getTime())}</time>
    <button type="button" class="btn ghost sm post-del" data-id="${p.id}">Delete</button>
    ${p.author === MFB.user.id ? '' : (blocked
      ? `<button type="button" class="btn ghost sm usr-unblock" data-id="${p.author}">Unblock</button>`
      : `<button type="button" class="btn ghost sm usr-block" data-id="${p.author}">Block</button>`)}</div>`;
  }).join('') || '<p class="hint">No discussion posts yet.</p>';
  const accList = (profs.data || []).map(pf => `<div class="act"><span style="font-weight:700">${esc(pf.display_name || 'student')}</span><span class="pill ${pf.role === 'blocked' ? 'warn' : ''}">${pf.role}</span><time>${ago(new Date(pf.created_at).getTime())}</time>
    ${pf.id === MFB.user.id || pf.role === 'admin' ? '' : (pf.role === 'blocked'
      ? `<button type="button" class="btn ghost sm usr-unblock" data-id="${pf.id}">Unblock</button>`
      : `<button type="button" class="btn ghost sm usr-block" data-id="${pf.id}">Block</button>`)}</div>`).join('') || '<p class="hint">No accounts yet.</p>';
  const annList = (anns.data || []).map(a => `<div class="act"><span style="font-weight:700">${esc(a.title)}</span><span>${esc(a.body.slice(0, 120))}</span><time>${ago(new Date(a.created_at).getTime())}</time>
    <button type="button" class="btn ghost sm ann-del" data-id="${a.id}">Delete</button></div>`).join('') || '<p class="hint">No announcements yet.</p>';
  const audList = (auds.data || []).map(a2 => `<div class="act"><span style="font-weight:700">${esc((a2.profiles && a2.profiles.display_name) || 'admin')}</span><span>${esc(a2.action)}${a2.target ? ' \u00b7 ' + esc(String(a2.target).slice(0, 60)) : ''}</span><time>${ago(new Date(a2.created_at).getTime())}</time></div>`).join('') || '<p class="hint">No admin actions recorded yet.</p>';
  const subjOpts = (window.DATA ? DATA.subjects : []).map(s2 => `<option value="${s2.key}">${s2.code} · ${s2.full}</option>`).join('');
  const contList = (cont2.data || []).map(c => {
    const label = c.kind === 'mcq' ? (c.payload.q || '') : (c.kind === 'written' ? (c.payload.q || '') : c.kind);
    return `<div class="act"><span class="pill">${c.kind}</span><span style="font-weight:700">${esc(c.subj)}</span><span>${esc((label || '').slice(0, 90))}${c.ref_id ? ' (edit of ' + esc(c.ref_id) + ')' : ''}</span><time>${ago(new Date(c.created_at).getTime())}</time>
    <button type="button" class="btn ghost sm cont-del" data-id="${c.id}">Delete</button></div>`;
  }).join('') || '<p class="hint">No managed content yet. Added questions appear here.</p>';
  const repList = (reps.data || []).map(r => `<div class="act"><span style="font-weight:700">${esc(r.question_id)}</span><span>${esc(r.detail)}</span><span class="pill ${r.status === 'open' ? 'warn' : ''}">${r.status}</span><time>${ago(new Date(r.created_at).getTime())}</time>
    ${r.status === 'open' ? `<button type="button" class="btn ghost sm rep-res" data-id="${r.id}">Resolve</button><button type="button" class="btn ghost sm rep-dis" data-id="${r.id}">Dismiss</button>` : ''}</div>`).join('') || '<p class="hint">No reports.</p>';
  $('#app').innerHTML = `
  <section class="hero"><div class="eyebrow">Admin</div><h1>Site administration</h1>
  <p class="sub">${usersN.count || 0} accounts · ${postsN.count || 0} discussion posts · ${(reps.data || []).filter(r => r.status === 'open').length} open reports</p></section>
  <div class="grid g2" style="align-items:start">
    <div class="card" style="padding:18px">
      <h2 style="margin-top:0">Post announcement</h2>
      <label class="hint">Title</label><input id="an-title" maxlength="200" style="width:100%">
      <label class="hint">Body</label><textarea id="an-body" rows="3" maxlength="4000" style="width:100%"></textarea>
      <button type="button" class="btn sm" id="an-go" style="margin-top:12px">${ic('check')} Publish</button>
      <p class="hint" id="an-msg"></p>
    </div>
    <div class="blk"><div class="blk-h"><h2>Question reports</h2></div><div class="acts">${repList}</div></div>
  </div>
  <div class="grid g2" style="align-items:start;margin-top:16px">
    <div class="blk"><div class="blk-h"><h2>Community moderation</h2></div><div class="acts">${postList}</div></div>
    <div class="blk"><div class="blk-h"><h2>Accounts</h2></div><div class="acts">${accList}</div></div>
  </div>
  <div class="blk" style="margin-top:16px"><div class="blk-h"><h2>Announcements</h2></div><div class="acts">${annList}</div></div>
  <div class="blk" style="margin-top:16px"><div class="blk-h"><h2>Admin audit log</h2><p class="hint">Append-only record of admin actions. Entries cannot be edited or removed.</p></div><div class="acts">${audList}</div></div>
  <div class="grid g2" style="align-items:start;margin-top:16px">
    <div class="card" style="padding:18px">
      <h2 style="margin-top:0">Add course content</h2>
      <p class="hint">Added questions merge into the live site for everyone within seconds. Only add content from real course materials - never invented questions or answers.</p>
      <label class="hint">Subject</label><select id="cc-subj" style="width:100%">${subjOpts}</select>
      <label class="hint">Type</label><select id="cc-kind" style="width:100%"><option value="mcq">MCQ</option><option value="written">Written question</option></select>
      <label class="hint">Source label (e.g. Lecture 6 · name, or Section 3)</label><input id="cc-src" maxlength="120" style="width:100%">
      <label class="hint">Question</label><textarea id="cc-q" rows="2" maxlength="2000" style="width:100%"></textarea>
      <div id="cc-opts">
        <label class="hint">Option A</label><input id="cc-o0" maxlength="500" style="width:100%">
        <label class="hint">Option B</label><input id="cc-o1" maxlength="500" style="width:100%">
        <label class="hint">Option C</label><input id="cc-o2" maxlength="500" style="width:100%">
        <label class="hint">Option D</label><input id="cc-o3" maxlength="500" style="width:100%">
        <label class="hint">Correct option</label><select id="cc-a" style="width:100%"><option value="0">A</option><option value="1">B</option><option value="2">C</option><option value="3">D</option></select>
      </div>
      <div id="cc-wr" style="display:none"><label class="hint">Model answer (from course materials)</label><textarea id="cc-wa" rows="3" maxlength="4000" style="width:100%"></textarea></div>
      <button type="button" class="btn sm" id="cc-go" style="margin-top:12px">${ic('check')} Add question</button>
      <p class="hint" id="cc-msg"></p>
    </div>
    <div class="blk"><div class="blk-h"><h2>Managed content</h2></div><div class="acts">${contList}</div></div>
  </div>`;
  $('#an-go').addEventListener('click', async () => {
    const t = $('#an-title').value.trim(), b = $('#an-body').value.trim();
    if (!t || !b) { $('#an-msg').textContent = 'Title and body required.'; return; }
    const { error } = await MFB.sb.from('announcements').insert({ author: MFB.user.id, title: t, body: b });
    $('#an-msg').textContent = error ? ('Failed: ' + error.message) : 'Published.';
    if (!error) { $('#an-title').value = ''; $('#an-body').value = ''; await MFB.audit('announcement.publish', null, { title: t }); }
  });
  $$('.rep-res').forEach(b => b.addEventListener('click', async () => { await MFB.sb.from('reports').update({ status: 'resolved' }).eq('id', b.dataset.id); await MFB.audit('report.resolve', b.dataset.id); MFB.viewAdmin(); }));
  $$('.rep-dis').forEach(b => b.addEventListener('click', async () => { await MFB.sb.from('reports').update({ status: 'dismissed' }).eq('id', b.dataset.id); await MFB.audit('report.dismiss', b.dataset.id); MFB.viewAdmin(); }));
  $$('.post-del').forEach(b => b.addEventListener('click', async () => { await MFB.sb.from('posts').delete().eq('id', b.dataset.id); await MFB.audit('post.delete', b.dataset.id); MFB.viewAdmin(); }));
  $$('.ann-del').forEach(b => b.addEventListener('click', async () => { await MFB.sb.from('announcements').delete().eq('id', b.dataset.id); await MFB.audit('announcement.delete', b.dataset.id); MFB.viewAdmin(); }));
  $$('.usr-block').forEach(b => b.addEventListener('click', async () => { await MFB.sb.from('profiles').update({ role: 'blocked' }).eq('id', b.dataset.id); await MFB.audit('user.block', b.dataset.id); MFB.viewAdmin(); }));
  $$('.usr-unblock').forEach(b => b.addEventListener('click', async () => { await MFB.sb.from('profiles').update({ role: 'student' }).eq('id', b.dataset.id); await MFB.audit('user.unblock', b.dataset.id); MFB.viewAdmin(); }));
  $$('.cont-del').forEach(b => b.addEventListener('click', async () => { await MFB.sb.from('content_items').delete().eq('id', b.dataset.id); await MFB.audit('content.delete', b.dataset.id); MFB.viewAdmin(); }));
  const kindSel = $('#cc-kind');
  if (kindSel) kindSel.addEventListener('change', () => {
    const mcq = kindSel.value === 'mcq';
    $('#cc-opts').style.display = mcq ? '' : 'none';
    $('#cc-wr').style.display = mcq ? 'none' : '';
  });
  const ccGo = $('#cc-go');
  if (ccGo) ccGo.addEventListener('click', async () => {
    const subj = $('#cc-subj').value, kind = kindSel.value, src = $('#cc-src').value.trim(), q = $('#cc-q').value.trim();
    if (!q || !src) { $('#cc-msg').textContent = 'Question and source label are required.'; return; }
    let payload;
    if (kind === 'mcq') {
      const opts = [0, 1, 2, 3].map(i => $('#cc-o' + i).value.trim());
      if (opts.some(o => !o)) { $('#cc-msg').textContent = 'All four options are required.'; return; }
      payload = { id: subj + '-admin-' + Date.now(), subj, kind: 'lec', n: 0, src, q, opts, a: parseInt($('#cc-a').value, 10) };
    } else {
      const wa = $('#cc-wa').value.trim();
      if (!wa) { $('#cc-msg').textContent = 'Model answer is required for a written question.'; return; }
      payload = { id: subj + '-admin-w' + Date.now(), subj, kind: 'lec', n: 0, src, q, a: wa };
    }
    const { error } = await MFB.sb.from('content_items').insert({ kind, subj, payload, author: MFB.user.id });
    $('#cc-msg').textContent = error ? ('Failed: ' + error.message) : 'Added. It is live for all students now.';
    if (!error) { $('#cc-q').value = ''; await MFB.audit('content.add', payload.id, { kind, subj }); MFB.viewAdmin(); }
  });
};

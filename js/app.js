/* MUST Finals platform - part 1: helpers, icons, store, router, dashboard */
'use strict';
const D = window.DATA;
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => [...(r || document).querySelectorAll(s)];
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* Lucide icons (ISC), inline stroke SVGs */
const IC = {
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  timer: '<line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/>',
  bookmark: '<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
  flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  al: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  ar: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',
  copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  chart: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
  alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  ext: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  dash: '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>',
  cap: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  cal: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  trend: '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  retry: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
  eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  flask: '<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/>',
  file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  list: '<line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/>',
  menu: '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
};
const ic = (n, cls) => `<svg class="ic ${cls || ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n] || ''}</svg>`;

/* ---- progress store: async interface over localStorage.
   A future backend can replace load/save with API calls; the UI only
   ever awaits store.get/store.set, so no UI rewrite is needed. ---- */
const store = {
  async get(key, fallback) {
    try { const v = localStorage.getItem('mf.' + key); return v === null ? fallback : JSON.parse(v); }
    catch { return fallback; }
  },
  async set(key, val) { try { localStorage.setItem('mf.' + key, JSON.stringify(val)); localStorage.setItem('mf.t.' + key, String(Date.now())); } catch {} if (window.MFB) MFB.schedulePush(); },
  async del(key) { try { localStorage.removeItem('mf.' + key); } catch {} },
};

const DEF_PROG = { completed: {}, mcq: {}, bookmarks: {}, activity: [], lastSubject: null, examHistory: [], mistakes: {} };
let PROG = null;
async function prog() { if (!PROG) PROG = Object.assign({}, DEF_PROG, await store.get('progress', {})); return PROG; }
async function saveProg() { await store.set('progress', PROG); }
async function logAct(text) {
  const p = await prog();
  p.activity.unshift({ ts: Date.now(), text });
  p.activity = p.activity.slice(0, 20);
  await saveProg();
}
function ago(ts) {
  const m = Math.floor((Date.now() - ts) / 60000);
  if (m < 1) return 'just now'; if (m < 60) return m + 'm ago';
  const h = Math.floor(m / 60); if (h < 24) return h + 'h ago';
  return Math.floor(h / 24) + 'd ago';
}

/* stats helpers */
function subjByKey(k) { return D.subjects.find(s => s.key === k); }
function mcqById(id) { return D.mcq.find(q => q.id === id); }
function wrById(id) { return D.written.find(q => q.id === id); }
function subjMcqs(k) { return D.mcq.filter(q => q.subj === k); }
function subjWritten(k) { return D.written.filter(q => q.subj === k); }
function subjAccuracy(p, k) {
  let t = 0, c = 0;
  for (const q of subjMcqs(k)) { const s = p.mcq[q.id]; if (s) { t += s.t; c += s.c; } }
  return t ? { t, c, pct: Math.round(100 * c / t) } : null;
}
function subjCompletion(p, k) {
  const s = subjByKey(k);
  const total = s.lectures.filter(l => !l.missing).length;
  const done = s.lectures.filter(l => !l.missing && p.completed[k + '-lec' + l.n]).length;
  return { done, total, pct: total ? Math.round(100 * done / total) : 0 };
}
async function recordMcq(qid, correct, pickedIdx) {
  const p = await prog();
  const s = p.mcq[qid] || { t: 0, c: 0 };
  s.t++; if (correct) s.c++;
  p.mcq[qid] = s;
  if (!p.mistakes) p.mistakes = {};
  const q = mcqById(qid);
  if (!correct && q) {
    const prevM = p.mistakes[qid];
    p.mistakes[qid] = { subj: q.subj, picked: (typeof pickedIdx === 'number' ? pickedIdx : null), ts: Date.now(), understood: false, sinceRight: false, n: ((prevM && prevM.n) || 0) + 1 };
  } else if (correct && p.mistakes[qid] && !p.mistakes[qid].understood) {
    p.mistakes[qid].sinceRight = true;
  }
  await saveProg();
}

/* toast */
function toast(msg) {
  let t = $('#toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('show');
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 2200);
}

/* router */
const routes = [];
function route(re, fn) { routes.push([re, fn]); }
function nav(hash) { location.hash = hash; }
async function render() {
  const h = location.hash.slice(1) || '/';
  for (const [re, fn] of routes) {
    const m = h.match(re);
    if (m) { await fn(...m.slice(1)); markNav(h); window.scrollTo(0, 0); return; }
  }
  await viewDashboard(); markNav(h);
}
function markNav(h) {
  $$('.snav a').forEach(a => {
    const href = a.getAttribute('href').slice(1);
    a.classList.toggle('on', href === h || (href !== '/' && h.startsWith(href)));
  });
}
window.addEventListener('hashchange', render);

/* ---- dashboard ---- */
async function viewDashboard() {
  const p = await prog();
  const hr = new Date().getHours();
  const greet = hr < 12 ? 'Good morning' : hr < 18 ? 'Good afternoon' : 'Good evening';
  const totalLecs = D.subjects.reduce((n, s) => n + s.lectures.length, 0);
  const totalQ = D.mcq.length + D.written.length;
  const doneLecs = Object.keys(p.completed).length;
  let att = 0, corr = 0;
  for (const k in p.mcq) { att += p.mcq[k].t; corr += p.mcq[k].c; }
  const acc = att ? Math.round(100 * corr / att) : null;
  const bms = Object.keys(p.bookmarks).length;

  let continueBtn = '';
  if (p.lastSubject) {
    const s = subjByKey(p.lastSubject);
    if (s) continueBtn = `<a class="btn" href="#/subject/${s.key}">${ic('play')} Continue ${esc(s.code)}</a>`;
  }
  const resumeExam = await store.get('exam', null);
  if (resumeExam && !resumeExam.submitted) {
    continueBtn += ` <a class="btn ghost" href="#/exam/${resumeExam.subj}/run">${ic('timer')} Resume exam in progress</a>`;
  }

  /* pastel subject cards (reference layout) - real completion data */
  const pastel = ['pc-a', 'pc-b', 'pc-c'];
  const subjCards = D.subjects.map((s, i) => {
    const comp = subjCompletion(p, s.key);
    const left = s.lectures.filter(l => !l.missing && !p.completed[s.key + '-lec' + l.n]).length;
    const nq = subjMcqs(s.key).length;
    const ac = subjAccuracy(p, s.key);
    return `<a class="dz-course ${pastel[i % 3]}" href="#/subject/${s.key}">
      <div class="dz-course-h"><span class="dz-course-t">${esc(s.full)}</span><span class="dz-course-ic">${ic('book')}</span></div>
      <div class="dz-course-m"><span>${left} lectures left</span><span>${nq} MCQs</span>${ac ? `<span>${ac.pct}% accuracy</span>` : '<span>No attempts yet</span>'}</div>
      <div class="dz-course-pct">${comp.pct}<span>%</span></div>
      <div class="dz-pbar"><i style="width:${comp.pct}%"></i></div>
    </a>`;
  }).join('');

  /* weekly activity bars - real activity log, current week (Mon start) */
  const now = new Date();
  const monday = new Date(now); monday.setHours(0, 0, 0, 0);
  monday.setDate(now.getDate() - ((now.getDay() + 6) % 7));
  const dayCounts = [0, 0, 0, 0, 0, 0, 0];
  for (const a of p.activity) {
    const d = Math.floor((a.ts - monday.getTime()) / 86400000);
    if (d >= 0 && d < 7) dayCounts[d]++;
  }
  const maxC = Math.max(1, ...dayCounts);
  const todayIdx = (now.getDay() + 6) % 7;
  const bars = dayCounts.map((c, i) =>
    `<div class="dz-bar ${i === todayIdx ? 'today' : ''}" style="height:${Math.max(6, Math.round(100 * c / maxC))}%"><title>${'MTWTFSS'[i]}: ${c} study action${c === 1 ? '' : 's'}</title></div>`).join('');

  /* purple reference: concentric completion rings + metric cards (real data) */
  const ringCols = ['#f0b64a', '#d4883a', '#4ade80'];
  const comps = D.subjects.map(s => ({ s, c: subjCompletion(p, s.key) }));
  const overallPct = totalLecs ? Math.round(100 * doneLecs / totalLecs) : 0;
  const ringSvg = (() => {
    const cx = 75, cy = 75, sw = 10;
    let rings = '';
    comps.forEach((o, i) => {
      const r = 60 - i * 14, C = 2 * Math.PI * r;
      const dash = (o.c.pct / 100 * C).toFixed(1);
      rings += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${ringCols[i % 3]}" stroke-width="${sw}" stroke-linecap="round" stroke-dasharray="${dash} ${C.toFixed(1)}" transform="rotate(-90 ${cx} ${cy})" opacity="0.95"><title>${esc(o.s.code)}: ${o.c.pct}% complete</title></circle>`;
    });
    return `<svg class="dz-rings" viewBox="0 0 150 150" role="img" aria-label="Completion rings per subject">
      <circle cx="75" cy="75" r="60" fill="none" stroke="var(--surface3)" stroke-width="10" opacity=".45"/>
      <circle cx="75" cy="75" r="46" fill="none" stroke="var(--surface3)" stroke-width="10" opacity=".3"/>
      <circle cx="75" cy="75" r="32" fill="none" stroke="var(--surface3)" stroke-width="10" opacity=".18"/>
      ${rings}
      <text x="75" y="71" text-anchor="middle" font-size="22" font-weight="800" fill="var(--ink)">${overallPct}%</text>
      <text x="75" y="88" text-anchor="middle" font-size="9.5" fill="var(--muted)">overall</text>
    </svg>`;
  })();
  const ringLegend = comps.map((o, i) => `<div class="dz-rl"><span class="dot" style="background:${ringCols[i % 3]}"></span><div><div style="font-weight:700">${esc(o.s.code)}</div><div class="hint" style="font-size:11.5px">${o.c.done}/${o.c.total} lectures</div></div><b>${o.c.pct}%</b></div>`).join('');
  const miniBars = dayCounts.map((c, i) => `<i class="${i === todayIdx ? 'today' : ''}" style="height:${Math.max(8, Math.round(100 * c / maxC))}%"><title>${'MTWTFSS'[i]}: ${c}</title></i>`).join('');

  /* improvement over time: real mock-exam percentages, chronological */
  const chrono = p.examHistory.slice().reverse();
  let trendHtml;
  if (chrono.length < 2) {
    trendHtml = `<div class="empty">${ic('chart')}<div>Take at least 2 mock exams and your score trend appears here.</div></div>`;
  } else {
    const W = 620, H = 170, padL = 38, padR = 14, padT = 16, padB = 26;
    const pcts = chrono.map(x => Math.round(100 * x.correct / x.count));
    const n = pcts.length;
    const xAt = i => padL + (n === 1 ? (W - padL - padR) / 2 : i * (W - padL - padR) / (n - 1));
    const yAt = v => padT + (100 - v) * (H - padT - padB) / 100;
    const pts = pcts.map((v, i) => `${xAt(i).toFixed(1)},${yAt(v).toFixed(1)}`).join(' ');
    const dots = pcts.map((v, i) => `<circle cx="${xAt(i).toFixed(1)}" cy="${yAt(v).toFixed(1)}" r="4" fill="#f0b64a"><title>${esc(subjByKey(chrono[i].subj).code)} mock ${i + 1}: ${v}% (${chrono[i].correct}/${chrono[i].count})</title></circle>`).join('');
    const grid = [0, 50, 100].map(v => `<line x1="${padL}" y1="${yAt(v)}" x2="${W - padR}" y2="${yAt(v)}" stroke="var(--stroke)" stroke-width="1"/><text x="${padL - 8}" y="${yAt(v) + 4}" text-anchor="end" font-size="11" fill="var(--muted)">${v}%</text>`).join('');
    const d0 = new Date(chrono[0].ts), d1 = new Date(chrono[chrono.length - 1].ts);
    const fmt = d => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
    const delta = pcts[pcts.length - 1] - pcts[0];
    const deltaTxt = delta === 0 ? 'No change so far' : (delta > 0 ? `Up ${delta} points since your first mock` : `Down ${Math.abs(delta)} points since your first mock`);
    trendHtml = `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto;display:block" role="img" aria-label="Mock exam scores over time">
      ${grid}
      <defs><linearGradient id="tpur" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f0b64a" stop-opacity=".32"/><stop offset="1" stop-color="#f0b64a" stop-opacity="0"/></linearGradient></defs>
      <path d="M${padL},${H - padB} L${pts.replace(/ /g, ' L')} L${W - padR},${H - padB} Z" fill="url(#tpur)"/>
      <polyline points="${pts}" fill="none" stroke="#f0b64a" stroke-width="2.5" stroke-linejoin="round"/>
      ${dots}
      <text x="${padL}" y="${H - 6}" font-size="11" fill="var(--muted)">${fmt(d0)}</text>
      <text x="${W - padR}" y="${H - 6}" text-anchor="end" font-size="11" fill="var(--muted)">${fmt(d1)}</text>
    </svg>
    <p class="hint" style="margin-top:6px">${n} mocks · last ${pcts[pcts.length - 1]}% · ${deltaTxt}. Real results only.</p>`;
  }

  /* upcoming: mini month calendar with real planner dates + upcoming tasks */
  const pl = Object.assign({ exams: {}, tasks: [] }, await store.get('plan', {}));
  const examDates = Object.values(pl.exams).filter(Boolean);
  const y = now.getFullYear(), mo = now.getMonth();
  const first = new Date(y, mo, 1);
  const lead = (first.getDay() + 6) % 7;
  const dim = new Date(y, mo + 1, 0).getDate();
  const moName = now.toLocaleDateString('en-GB', { month: 'long' });
  let calCells = '';
  for (let i = 0; i < lead; i++) calCells += '<span class="dz-cal-e"></span>';
  for (let dnum = 1; dnum <= dim; dnum++) {
    const iso = `${y}-${String(mo + 1).padStart(2, '0')}-${String(dnum).padStart(2, '0')}`;
    const isToday = dnum === now.getDate();
    const hasExam = examDates.includes(iso);
    const hasTask = pl.tasks.some(t => t.date === iso && !t.done);
    calCells += `<span class="dz-cal-d ${isToday ? 'today' : ''} ${hasExam ? 'exam' : ''} ${hasTask ? 'task' : ''}" ${hasExam ? 'title="Exam day (your planner)"' : hasTask ? 'title="Study task due"' : ''}>${dnum}</span>`;
  }
  const upcoming = [];
  for (const s of D.subjects) {
    const iso = pl.exams[s.key];
    if (iso) {
      const days = Math.ceil((new Date(iso + 'T09:00:00') - now) / 86400000);
      upcoming.push({ t: `${s.code} exam`, d: days >= 0 ? `in ${days} day${days === 1 ? '' : 's'}` : 'date passed', sub: new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) });
    }
  }
  pl.tasks.filter(t => !t.done && t.date && t.date >= todayKey2()).sort((a, b) => a.date < b.date ? -1 : 1).slice(0, 4)
    .forEach(t => upcoming.push({ t: t.text, d: new Date(t.date + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }), sub: t.subj ? subjByKey(t.subj).code : 'Task' }));
  const upcomingHtml = upcoming.length
    ? upcoming.slice(0, 6).map(u => `<div class="dz-up"><span class="dz-up-dot"></span><div><div class="dz-up-t">${esc(u.t)}</div><div class="hint">${esc(u.sub)} · ${esc(u.d)}</div></div></div>`).join('')
    : '<p class="hint">No dates yet - add your exam dates and tasks in the <a href="#/planner">Planner</a>.</p>';

  const examsHtml = D.exams.map(e => `
    <div class="act"><span style="font-weight:700">${esc(e.name)}</span>
    ${e.light ? '<span class="pill">Light review</span>' : ''}
    <span class="hint">${esc(e.window)} · ${esc(e.note)}</span></div>`).join('');

  const acts = p.activity.length
    ? p.activity.slice(0, 8).map(a => `<div class="act">${ic('check')}<span>${esc(a.text)}</span><time>${ago(a.ts)}</time></div>`).join('')
    : `<div class="empty">${ic('chart')}<div>No activity yet. Answer a question or finish a lecture and it shows up here.</div></div>`;

  const hist = p.examHistory.length
    ? p.examHistory.slice(0, 5).map(x => `<div class="act">${ic('target')}<span>${esc(subjByKey(x.subj).code)} mock · ${x.correct}/${x.count} correct</span><time>${ago(x.ts)}</time></div>`).join('')
    : `<div class="empty">${ic('target')}<div>No mock exams yet. Your results will appear here.</div></div>`;

  const bySrc = {};
  for (const q of D.mcq) {
    const s = p.mcq[q.id]; if (!s || !s.t) continue;
    const key = q.subj + '|' + q.src;
    bySrc[key] = bySrc[key] || { t: 0, c: 0, subj: q.subj, src: q.src };
    bySrc[key].t += s.t; bySrc[key].c += s.c;
  }
  const weak = Object.values(bySrc).filter(x => x.t >= 3).sort((a, b) => a.c / a.t - b.c / b.t).slice(0, 3);
  const weakHtml = weak.length
    ? weak.map(w => `<div class="act">${ic('alert')}<span>${esc(subjByKey(w.subj).code)} · ${esc(w.src)}</span><span class="pill warn">${Math.round(100 * w.c / w.t)}% · ${w.t} tries</span></div>`).join('')
    : `<div class="empty">${ic('trend')}<div>Answer at least 3 questions on a topic and weak spots show up here.</div></div>`;


  /* gold reference structure: stats mini-rings, big score ring, subject progress, recent-exam table (real data only) */
  const mocksChrono = p.examHistory.slice().reverse();
  const nMocks = mocksChrono.length;
  const nPass = mocksChrono.filter(x => x.correct / x.count >= 0.5).length;
  const nFail = nMocks - nPass;
  const ongoingN = (resumeExam && !resumeExam.submitted) ? 1 : 0;
  const avgScore = nMocks ? Math.round(mocksChrono.reduce((a, x) => a + 100 * x.correct / x.count, 0) / nMocks) : null;
  const miniRing = (pct, col, label, val) => {
    const r = 15.5, C = 2 * Math.PI * r;
    return `<div class="dz-mini"><svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="${r}" fill="none" stroke="var(--surface3)" stroke-width="5"/><circle cx="20" cy="20" r="${r}" fill="none" stroke="${col}" stroke-width="5" stroke-linecap="round" stroke-dasharray="${(pct / 100 * C).toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90 20 20)"/></svg><div><b>${val}</b><span>${label}</span></div></div>`;
  };
  const bigRingSvg = (() => {
    const pct = avgScore === null ? 0 : avgScore;
    const r = 52, C = 2 * Math.PI * r;
    return `<svg viewBox="0 0 120 120" class="dz-bigring"><defs><linearGradient id="goldg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f0b64a"/><stop offset="1" stop-color="#d4883a"/></linearGradient></defs><circle cx="60" cy="60" r="${r}" fill="none" stroke="var(--surface3)" stroke-width="9"/><circle cx="60" cy="60" r="${r}" fill="none" stroke="url(#goldg)" stroke-width="9" stroke-linecap="round" stroke-dasharray="${(pct / 100 * C).toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90 60 60)"/><text x="60" y="58" text-anchor="middle" font-size="24" font-weight="800" fill="var(--ink)">${avgScore === null ? '&mdash;' : avgScore + '%'}</text><text x="60" y="74" text-anchor="middle" font-size="9" fill="var(--muted)">avg mock score</text></svg>`;
  })();
  const subjProgRows = comps.map(o => `<a class="dz-sprog" href="#/subject/${o.s.key}">
    <div class="dz-sprog-h"><span class="pill ${o.c.pct > 0 ? 'goldpill' : ''}">${o.c.pct > 0 ? 'Active' : 'Not started'}</span><b>${esc(o.s.code)}</b><span class="hint">${o.c.pct}%</span></div>
    <div class="dz-pbar"><i style="width:${o.c.pct}%"></i></div></a>`).join('');
  const histTable = nMocks ? `<table class="dz-table"><thead><tr><th>Mock exam</th><th>Date</th><th>Score</th><th>Status</th></tr></thead><tbody>${mocksChrono.slice(-6).reverse().map(x => {
    const pc = Math.round(100 * x.correct / x.count);
    return `<tr><td>${esc(subjByKey(x.subj).code)} mock</td><td>${new Date(x.ts).toLocaleDateString('en-GB')}</td><td>${pc}%</td><td><span class="pill ${pc >= 50 ? 'ok' : 'bad'}">${pc >= 50 ? 'Passed' : 'Below 50%'}</span></td></tr>`;
  }).join('')}</tbody></table>` : `<div class="empty">${ic('target')}<div>No mock exams yet. Your results will appear here.</div></div>`;

  $('#app').innerHTML = `
  <section class="dz-top">
    <div class="dz-top-h">
      <div><div class="eyebrow">MUST · Finals Prep</div><h1>${greet}, Mazen</h1><p class="dz-sub">Your finals picture at a glance: subjects, practice and schedule.</p></div>
      <div class="rowflex">${continueBtn || '<span class="hint">Pick a subject in the sidebar to start.</span>'}</div>
    </div>
  </section>
  <div class="dz-ref">
    <div class="card dz-ref-stats">
      <div class="dz-big">${nMocks}<span class="u"> mocks</span></div>
      <div class="hint">mock exams taken</div>
      <div class="dz-minirow">
        ${miniRing(nMocks ? Math.round(100 * nPass / nMocks) : 0, '#4ade80', 'Passed', nPass)}
        ${ongoingN ? miniRing(100, '#f0b64a', 'In progress', ongoingN) : ''}
        ${miniRing(nMocks ? Math.round(100 * nFail / nMocks) : 0, '#f87171', 'Below 50%', nFail)}
      </div>
      <p class="hint" style="margin:6px 0 0;font-size:11px">Pass mark shown as 50% - check your faculty for official thresholds.</p>
    </div>
    <div class="card dz-ref-center">
      <p class="dz-cap" style="text-align:center">Overall Score</p>
      ${bigRingSvg}
      <div class="dz-minirow" style="justify-content:center">
        ${miniRing(overallPct, '#f0b64a', 'Lectures', overallPct + '%')}
        ${acc === null ? '' : miniRing(acc, '#d4883a', 'MCQ accuracy', acc + '%')}
        ${miniRing(Math.round(100 * doneLecs / Math.max(1, totalLecs)), '#4ade80', 'Done', doneLecs + '/' + totalLecs)}
      </div>
    </div>
    <div class="card dz-ref-subjects">
      <p class="dz-cap">Subjects in progress</p>
      ${subjProgRows}
    </div>
  </div>
  <div class="card" style="padding:16px;margin-bottom:14px">
    <div class="rowflex"><h2 style="margin:0;font-size:15px">Recent exam history</h2><span class="sp"></span><span class="hint">real results only</span></div>
    ${histTable}
  </div>
  <div class="card" style="padding:16px;margin-bottom:14px">
    <div class="rowflex"><h2 style="margin:0;font-size:15px">Activity this week</h2><span class="sp"></span><span class="hint">questions answered per day</span></div>
    <div class="dz-bars">${bars}</div>
    <div class="dz-bars-l">${'Mon Tue Wed Thu Fri Sat Sun'.split(' ').map((d, i) => `<span class="${i === todayIdx ? 'today' : ''}">${d[0]}</span>`).join('')}</div>
  </div>
  <div class="dz-low"><div class="dz-bottom">
    <div class="dz-col-main card" style="padding:18px"><h2 style="margin-top:0">${ic('trend')} Your progress</h2>${trendHtml}</div>
    <div class="dz-col-mid"><div id="dz-goal"></div><div id="dz-recs"></div></div>
    <div class="dz-col-right card" style="padding:18px">
      <div class="rowflex"><h2 style="margin:0;font-size:15px">Upcoming</h2><span class="sp"></span><span class="hint">${moName}</span></div>
      <div class="dz-cal"><div class="dz-cal-h">${'Mo Tu We Th Fr Sa Su'.split(' ').map(d => `<span>${d}</span>`).join('')}</div><div class="dz-cal-g">${calCells}</div></div>
      <div style="margin-top:10px;display:grid;gap:8px">${upcomingHtml}</div>
    </div>
  </div></div>
  <div class="grid g4" style="margin:16px 0">
    <div class="card stat"><span class="v">${D.subjects.length}</span><span class="l">${ic('book')} Subjects</span></div>
    <div class="card stat"><span class="v">${totalLecs}</span><span class="l">${ic('layers')} Lectures</span></div>
    <div class="card stat"><span class="v">${totalQ}</span><span class="l">${ic('file')} Practice questions</span></div>
    <div class="card stat"><span class="v">${doneLecs}</span><span class="l">${ic('check')} Lectures done</span></div>
    <div class="card stat"><span class="v">${att}</span><span class="l">${ic('zap')} MCQ attempts</span></div>
    <div class="card stat"><span class="v">${acc === null ? '—' : acc + '<span class="u">%</span>'}</span><span class="l">${ic('trend')} MCQ accuracy</span></div>
    <div class="card stat"><span class="v">${p.examHistory.length}</span><span class="l">${ic('timer')} Mock exams taken</span></div>
    <div class="card stat"><span class="v">${bms}</span><span class="l">${ic('bookmark')} Bookmarks</span></div>
  </div>
  <div id="dz-announce"></div>
  <div class="grid g2" style="align-items:start">
    <div class="blk"><div class="blk-h"><h2>Upcoming exams</h2></div><div class="acts">${examsHtml}</div>
      <p class="hint" style="margin-top:8px">Windows are general and unofficial until the university posts exact dates.</p></div>
    <div class="blk"><div class="blk-h"><h2>Weak topics</h2></div><div class="acts">${weakHtml}</div></div>
    <div class="blk"><div class="blk-h"><h2>Recent activity</h2></div><div class="acts">${acts}</div></div>
  </div>`;
}
function todayKey2() { return new Date().toISOString().slice(0, 10); }
/* MUST Finals platform - part 2: subject pages, practice, bookmarks */
const OPT_LETTERS = ['A', 'B', 'C', 'D'];

function qToolsHtml(qid, type) {
  return `<div class="qtools">
    <button type="button" class="qtool bm-btn" data-qid="${qid}" data-type="${type}">${ic('bookmark')}<span>Bookmark</span></button>
    <button type="button" class="qtool share-btn" data-qid="${qid}">${ic('share')}<span>Share</span></button>
    <button type="button" class="qtool report-btn" data-qid="${qid}" data-type="${type}">${ic('flag')}<span>Report error</span></button>
    <button type="button" class="qtool disc-btn" data-qid="${qid}">${ic('list')}<span>Discussion</span></button>
  </div><div class="disc-body" data-disc="${esc(qid)}" style="display:none"></div>`;
}

function mcqHtml(q) {
  const opts = q.opts.map((o, oi) =>
    `<button type="button" class="opt" data-c="${oi === q.a ? 1 : 0}"><span class="ol">${OPT_LETTERS[oi]}</span><span>${esc(o)}</span></button>`).join('');
  return `<div class="mcq" id="q-${q.id}" data-qid="${q.id}" data-search="${esc(q.q.toLowerCase() + ' ' + q.src.toLowerCase())}">
    <p class="q">${esc(q.q)} <span class="qid">${q.id}</span></p>
    <div class="opts">${opts}</div>
    <div class="ans"><span class="achip">Answer</span><span>${OPT_LETTERS[q.a]} · ${esc(q.opts[q.a])}</span></div>
    ${q.exp ? `<div class="ans" style="background:var(--primarySoft)"><span class="achip">Explanation</span><span dir="auto">${esc(q.exp)}</span></div>` : ''}
    ${qToolsHtml(q.id, 'mcq')}
  </div>`;
}
function wqHtml(w) {
  return `<div class="wq" id="q-${w.id}" data-search="${esc(w.q.toLowerCase() + ' ' + w.src.toLowerCase())}">
    <p class="q">${esc(w.q)} <span class="qid">${w.id}</span></p>
    <textarea placeholder="Type your answer here..." rows="3" aria-label="Your answer"></textarea>
    <button type="button" class="btn ghost sm revealbtn">${ic('eye')} Reveal model answer</button>
    <div class="model"><div class="inner"><span class="achip">Model answer</span><span>${esc(w.a)}</span></div></div>
    ${qToolsHtml(w.id, 'written')}
  </div>`;
}


// ---- In-page Drive PDF viewer (with open/download fallback) ----
function driveFileId(u) { const m = String(u || '').match(/drive\.google\.com\/file\/d\/([\w-]+)/); return m ? m[1] : null; }
function openDriveViewer(url, title) {
  const id = driveFileId(url); if (!id) return false;
  let ov = document.getElementById('pdfview');
  if (!ov) { ov = document.createElement('div'); ov.id = 'pdfview'; ov.className = 'pdfview'; document.body.appendChild(ov); }
  const dl = 'https://drive.google.com/uc?export=download&id=' + id;
  ov.innerHTML = '<div class="pv-backdrop" data-pvclose="1"></div>' +
    '<div class="pv-box" role="dialog" aria-modal="true" aria-label="' + esc(title || 'PDF') + '">' +
    '<div class="pv-head"><span class="pv-title">' + esc(title || 'PDF') + '</span><span class="pv-actions">' +
    '<a class="btn ghost sm" href="' + url + '" target="_blank" rel="noopener">Open in Drive</a>' +
    '<a class="btn ghost sm" href="' + dl + '" target="_blank" rel="noopener">Download</a>' +
    '<button type="button" class="btn ghost sm" data-pvclose="1">Close</button>' +
    '</span></div>' +
    '<iframe class="pv-frame" src="https://drive.google.com/file/d/' + id + '/preview" title="' + esc(title || 'PDF') + '"></iframe>' +
    '</div>';
  ov.style.display = 'block'; document.body.classList.add('noscroll');
  return true;
}
function closeDriveViewer() { const ov = document.getElementById('pdfview'); if (ov) { ov.style.display = 'none'; ov.innerHTML = ''; document.body.classList.remove('noscroll'); } }
document.addEventListener('click', (e) => {
  if (e.target.closest('[data-pvclose]')) { closeDriveViewer(); return; }
  if (e.target.closest('.pdfview')) return;
  const a = e.target.closest('a[href]');
  if (a && driveFileId(a.href) && !e.metaKey && !e.ctrlKey && !e.shiftKey) {
    e.preventDefault();
    openDriveViewer(a.href, a.dataset.pvtitle || (a.textContent || '').trim());
  }
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeDriveViewer(); });

async function viewSubject(key, focusQid) {
  const s = subjByKey(key);
  if (!s) { nav('/'); return; }
  const p = await prog();
  if (p.lastSubject !== key) { p.lastSubject = key; await saveProg(); }
  const comp = subjCompletion(p, key);
  const mcqs = subjMcqs(key), wrs = subjWritten(key);

  const pairs = s.lectures.map(l => {
    const sec = s.lectures.indexOf(l) < s.sections.length ? s.sections[s.lectures.indexOf(l)] : null;
    const doneId = key + '-lec' + l.n;
    const done = p.completed[doneId];
    const secHtml = sec === null ? '' : `<div class="half">
      <p class="kind">${esc(s.seckind)} ${sec.n}</p>
      <h3 class="lech">${esc(sec.title)}</h3>
      ${sec.missing ? `<span class="miss">${ic('alert')} Material missing from the folder</span>`
        : (sec.link ? `<a class="matbtn" href="${sec.link}" target="_blank" rel="noopener">${esc(s.seckind)} material ${ic('ext')}</a>` : '')}
    </div>`;
    return `<div class="card pair" data-search="lecture ${l.n} ${esc(l.topic.toLowerCase())}">
      <div class="half">
        <p class="kind">Lecture ${l.n}</p>
        <h3 class="lech">${esc(l.topic)}</h3>
        <div class="rowflex">
        ${l.missing ? `<span class="miss">${ic('alert')} Material missing from the folder</span>`
          : (l.link ? `<a class="matbtn" href="${l.link}" target="_blank" rel="noopener">Lecture material ${ic('ext')}</a>` : '')}
        ${l.missing ? '' : `<button type="button" class="btn ghost sm done-btn" data-lec="${doneId}">${done ? ic('check') + ' Done' : 'Mark done'}</button>`}
        </div>
      </div>${secHtml}
    </div>`;
  }).join('');

  const mcqGroups = {};
  mcqs.forEach(q => { (mcqGroups[q.src] = mcqGroups[q.src] || []).push(q); });
  const mcqHtmlAll = Object.entries(mcqGroups).map(([src, qs]) =>
    `<p class="cap" data-search="${esc(src.toLowerCase())}">${esc(src)} <span class="pill pri">${qs.length}</span></p>` + qs.map(mcqHtml).join('')).join('');
  const wrGroups = {};
  wrs.forEach(q => { (wrGroups[q.src] = wrGroups[q.src] || []).push(q); });
  const wrHtmlAll = Object.entries(wrGroups).map(([src, qs]) =>
    `<p class="cap" data-search="${esc(src.toLowerCase())}">${esc(src)} <span class="pill pri">${qs.length}</span></p>` + qs.map(wqHtml).join('')).join('');

  $('#app').innerHTML = `
  <section class="hero" style="padding:22px 24px">
    <div class="eyebrow">${esc(s.code)}</div>
    <h1 style="font-size:26px">${esc(s.full)}</h1>
    <div class="rowflex" style="margin-top:10px">
      <span class="pill pri">${comp.done}/${comp.total} lectures done</span>
      <span class="pill">${mcqs.length} MCQs</span>
      <span class="pill">${wrs.length} written</span>
    </div>
    <div class="pbar" style="margin-top:12px" role="progressbar" aria-valuenow="${comp.pct}" aria-valuemin="0" aria-valuemax="100"><i style="width:${comp.pct}%"></i></div>
    <div class="rowflex" style="margin-top:14px">
      <a class="btn" href="#/exam/${s.key}">${ic('timer')} Start mock exam</a>
      <a class="btn ghost" href="#/">${ic('al')} Dashboard</a>
    </div>
    ${(s.banks || []).length ? `<div class="rowflex" style="margin-top:10px">${s.banks.map(b => `<a class="matbtn" href="${b.link}" target="_blank" rel="noopener" data-pvtitle="${esc(b.title)}">${ic('doc') || ''} ${esc(b.title)}</a>`).join('')}</div>` : ''}
  </section>
  <div class="search">${ic('search')}<input id="subj-search" type="search" placeholder="Search lectures, sections and questions in ${esc(s.code)}..." aria-label="Search this subject"></div>
  <div class="blk"><div class="blk-h"><h2>Lectures &amp; ${s.seckind === 'Lab' ? 'Labs' : 'Sections'}</h2></div>${pairs}</div>
  <div class="blk"><div class="blk-h"><h2>MCQ Practice</h2><span class="sp"></span><span class="hint">Pick an option; the answer reveals after you answer.</span></div>
    <div id="mcq-area">${mcqHtmlAll}</div></div>
  <div class="blk"><div class="blk-h"><h2>Written Practice</h2><span class="sp"></span><span class="hint">Type your answer, then compare with the model answer.</span></div>
    <div id="wr-area">${wrHtmlAll}</div></div>`;

  // restore per-question practice state
  for (const q of mcqs) {
    const st = p.mcq[q.id];
    if (st && st.t) {
      const el = $('#q-' + q.id);
      if (el) { el.classList.add('answered'); paintMcq(el, null); }
    }
  }
  paintBookmarks(p);

  if (focusQid) {
    const el = document.getElementById('q-' + CSS.escape(focusQid));
    if (el) { el.scrollIntoView({ block: 'center' }); el.classList.add('flash'); setTimeout(() => el.classList.remove('flash'), 2400); }
  }

  $('#subj-search').addEventListener('input', e => {
    const t = e.target.value.trim().toLowerCase();
    $$('#app [data-search]').forEach(el => {
      el.classList.toggle('hidden-by-search', t !== '' && !el.dataset.search.includes(t));
    });
  });
}

function paintMcq(el, pickedBtn) {
  const opts = $$('.opt', el);
  opts.forEach(b => {
    b.disabled = true;
    if (b.dataset.c === '1') b.classList.add('right');
  });
  if (pickedBtn && pickedBtn.dataset.c !== '1') pickedBtn.classList.add('wrong');
}
function paintBookmarks(p) {
  $$('.bm-btn').forEach(b => {
    const on = !!p.bookmarks[b.dataset.qid];
    b.classList.toggle('on', on);
    b.querySelector('span:last-child').textContent = on ? 'Bookmarked' : 'Bookmark';
  });
}

async function viewBookmarks() {
  const p = await prog();
  const ids = Object.keys(p.bookmarks);
  const items = ids.map(id => {
    const q = mcqById(id); if (q) return { type: 'mcq', q };
    const w = wrById(id); if (w) return { type: 'written', q: w };
    return null;
  }).filter(Boolean);
  $('#app').innerHTML = `
  <section class="hero" style="padding:22px 24px">
    <div class="eyebrow">Saved</div><h1 style="font-size:26px">Bookmarks</h1>
    <p class="sub">Questions you saved for later review.</p>
  </section>
  <div class="blk">${items.length ? items.map(x => {
    const head = `<p class="cap">${esc(subjByKey(x.q.subj).code)} · ${esc(x.q.src)}</p>`;
    return head + (x.type === 'mcq' ? mcqHtml(x.q) : wqHtml(x.q));
  }).join('') : `<div class="card empty">${ic('bookmark')}<div>No bookmarks yet. Use the bookmark button on any question.</div></div>`}</div>`;
  const p2 = await prog();
  paintBookmarks(p2);
  $('#bf-q').addEventListener('input', e => {
    const t = e.target.value.trim().toLowerCase();
    let vis = 0;
    $$('#bank-list [data-search]').forEach(el => {
      const show = t === '' || el.dataset.search.includes(t);
      el.classList.toggle('hidden-by-search', !show);
      if (show) vis++;
    });
    $('#bf-count').textContent = t === '' ? `${list.length} question${list.length === 1 ? '' : 's'}` : `${vis} match${vis === 1 ? '' : 'es'}`;
  });
}

/* global click delegation for practice interactions */
document.addEventListener('click', async e => {
  const opt = e.target.closest('.opt');
  if (opt && !opt.disabled) {
    const box = opt.closest('.mcq');
    box.classList.add('answered');
    paintMcq(box, opt);
    const oi = Array.prototype.indexOf.call(box.querySelectorAll('.opt'), opt);
    await recordMcq(box.dataset.qid, opt.dataset.c === '1', oi);
    return;
  }
  const rev = e.target.closest('.revealbtn');
  if (rev) {
    const m = rev.parentElement.querySelector('.model');
    const open = m.style.display === 'block';
    m.style.display = open ? 'none' : 'block';
    rev.innerHTML = open ? ic('eye') + ' Reveal model answer' : ic('eye') + ' Hide model answer';
    return;
  }
  const done = e.target.closest('.done-btn');
  if (done) {
    const p = await prog();
    const id = done.dataset.lec;
    if (p.completed[id]) { delete p.completed[id]; done.textContent = 'Mark done'; }
    else {
      p.completed[id] = Date.now();
      done.innerHTML = ic('check') + ' Done';
      const [k] = id.split('-');
      await logAct(`Finished ${subjByKey(k).code} · ${id.replace(k + '-', '').replace('lec', 'Lecture ')}`);
    }
    await saveProg();
    return;
  }
  const bm = e.target.closest('.bm-btn');
  if (bm) {
    const p = await prog();
    if (p.bookmarks[bm.dataset.qid]) { delete p.bookmarks[bm.dataset.qid]; toast('Bookmark removed'); }
    else { p.bookmarks[bm.dataset.qid] = Date.now(); toast('Bookmarked'); }
    await saveProg(); paintBookmarks(p);
    return;
  }
  const sh = e.target.closest('.share-btn');
  if (sh) {
    const q = mcqById(sh.dataset.qid) || wrById(sh.dataset.qid);
    const url = location.origin + location.pathname + '#/subject/' + q.subj + '/q/' + q.id;
    try { await navigator.clipboard.writeText(url); toast('Link copied'); }
    catch { prompt('Copy this link:', url); }
    return;
  }
  const rp = e.target.closest('.report-btn');
  if (rp) {
    const q = mcqById(rp.dataset.qid) || wrById(rp.dataset.qid);
    const txt = `Question report\nID: ${q.id}\nSource: ${q.src}\nQuestion: ${q.q}\n\nWhat looks wrong: `;
    if (window.MFB && MFB.user) {
      const note = prompt('What looks wrong with this question?', '');
      if (note !== null) {
        const r = await MFB.sendReport(q.id, note || '(no detail)');
        toast(r && r.error ? 'Report failed: ' + r.error.message : 'Report sent - thank you');
      }
      return;
    }
    try { await navigator.clipboard.writeText(txt); toast('Question info copied - send it to Mazen'); }
    catch { prompt('Copy and send to Mazen:', txt); }
    return;
  }
  const db = e.target.closest('.disc-btn');
  if (db) {
    const body = document.querySelector(`.disc-body[data-disc="${db.dataset.qid}"]`);
    if (!body) return;
    const open = body.style.display === 'block';
    body.style.display = open ? 'none' : 'block';
    if (!open && window.MFB) MFB.loadDiscussion(body, db.dataset.qid);
    return;
  }
});
/* MUST Finals platform - part 3: exam simulator */
let examTimer = null;
function stopExamTimer() { if (examTimer) { clearInterval(examTimer); examTimer = null; } }
function shuffled(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

async function viewExamConfig(key) {
  stopExamTimer();
  const s = subjByKey(key);
  if (!s) { nav('/'); return; }
  const saved = await store.get('exam', null);
  const pool = subjMcqs(key);
  $('#app').innerHTML = `
  <section class="hero" style="padding:22px 24px">
    <div class="eyebrow">Mock exam</div>
    <h1 style="font-size:26px">${esc(s.code)} · ${esc(s.full)}</h1>
    <p class="sub">Random questions from the real ${esc(s.code)} practice bank. Options are shuffled, the timer grades automatically, and your state survives a refresh.</p>
  </section>
  ${saved && !saved.submitted && saved.subj === key ? `<div class="notice info">${ic('timer')}<span>You have an unfinished exam for this subject. <a href="#/exam/${key}/run"><b>Resume it</b></a> or configure a new one below (starting new discards the old one).</span></div>` : ''}
  <div class="card" style="padding:22px;max-width:560px">
    <div class="field"><label for="ex-count">Number of questions (bank: ${pool.length})</label>
      <select id="ex-count">
        <option value="10">10 questions</option>
        <option value="20" selected>20 questions</option>
        <option value="30">30 questions</option>
        <option value="${pool.length}">All ${pool.length} questions</option>
      </select></div>
    <div class="field"><label for="ex-src">Question source</label>
      <select id="ex-src">
        <option value="all" selected>Lectures + ${s.seckind === 'Lab' ? 'labs' : 'sections'}</option>
        <option value="lec">Lectures only</option>
        <option value="sec">${s.seckind === 'Lab' ? 'Labs' : 'Sections'} only</option>
      </select></div>
    <div class="field"><label for="ex-mins">Time limit (minutes)</label>
      <select id="ex-mins">
        <option value="1">1 minute per question</option>
        <option value="1.5" selected>1.5 minutes per question</option>
        <option value="2">2 minutes per question</option>
      </select></div>
    <p class="hint">No difficulty labels exist in the question bank, so none are invented here. Review shows the correct answer, plus the source explanation when the question has one.</p>
    <button type="button" class="btn" id="ex-start">${ic('play')} Start exam</button>
    <a class="btn ghost" href="#/subject/${key}" style="margin-left:8px">${ic('al')} Back</a>
  </div>`;
  $('#ex-start').addEventListener('click', async () => {
    const count = Math.min(parseInt($('#ex-count').value, 10), pool.length);
    const src = $('#ex-src').value;
    const mins = parseFloat($('#ex-mins').value);
    const filtered = pool.filter(q => src === 'all' || q.kind === src);
    if (!filtered.length) { toast('No questions in this source'); return; }
    const picked = shuffled(filtered).slice(0, Math.min(count, filtered.length));
    const exam = {
      subj: key, started: Date.now(),
      deadline: Date.now() + Math.round(picked.length * mins * 60000),
      qs: picked.map(q => {
        const order = shuffled(q.opts.map((_, i) => i));
        return { id: q.id, order, correctIdx: order.indexOf(q.a), picked: null, marked: false };
      }),
      cur: 0, submitted: false,
    };
    await store.set('exam', exam);
    nav('/exam/' + key + '/run');
  });
}

window.addEventListener('beforeunload', e => {
  try {
    const ex = JSON.parse(localStorage.getItem('mf.exam') || 'null');
    if (ex && !ex.submitted && location.hash.includes('/run')) { e.preventDefault(); e.returnValue = ''; }
  } catch {}
});
async function viewExamRun(key) {
  const exam = await store.get('exam', null);
  if (!exam || exam.subj !== key) { nav('/exam/' + key); return; }
  if (exam.submitted) { await viewExamResults(key); return; }
  stopExamTimer();
  const s = subjByKey(key);

  function fmt(ms) {
    if (ms < 0) ms = 0;
    const m = Math.floor(ms / 60000), sec = Math.floor(ms % 60000 / 1000);
    return String(m).padStart(2, '0') + ':' + String(sec).padStart(2, '0');
  }
  function palette() {
    return exam.qs.map((q, i) => {
      const cls = [i === exam.cur ? 'cur' : '', q.picked !== null ? 'ansd' : '', q.marked ? 'mkd' : ''].join(' ');
      return `<button type="button" class="${cls}" data-go="${i}" aria-label="Question ${i + 1}${q.picked !== null ? ', answered' : ''}${q.marked ? ', marked' : ''}">${i + 1}</button>`;
    }).join('');
  }
  function paintQ() {
    const q = exam.qs[exam.cur];
    const data = mcqById(q.id);
    $('#ex-qnum').textContent = `Question ${exam.cur + 1} of ${exam.qs.length}`;
    $('#ex-qsrc').textContent = data.src;
    $('#ex-qtext').textContent = data.q;
    $('#ex-opts').innerHTML = q.order.map((oi, pos) =>
      `<button type="button" class="opt ${q.picked === pos ? 'picked' : ''}" data-pos="${pos}"><span class="ol">${OPT_LETTERS[pos]}</span><span>${esc(data.opts[oi])}</span></button>`).join('');
    $('#ex-mark').innerHTML = (q.marked ? ic('flag') + ' Marked' : ic('flag') + ' Mark for review');
    $('#ex-mark').classList.toggle('on', q.marked);
    $('#ex-prev').disabled = exam.cur === 0;
    $('#ex-next').disabled = exam.cur === exam.qs.length - 1;
    $('#ex-pal').innerHTML = palette();
    const ansd = exam.qs.filter(x => x.picked !== null).length;
    $('#ex-counts').textContent = `${ansd} answered · ${exam.qs.length - ansd} left · ${exam.qs.filter(x => x.marked).length} marked`;
  }
  async function saveExam() { await store.set('exam', exam); }
  async function submit(auto) {
    stopExamTimer();
    const unanswered = exam.qs.filter(x => x.picked === null).length;
    if (!auto && unanswered > 0 && !confirm(`${unanswered} question(s) unanswered. Submit anyway?`)) { startTick(); return; }
    if (!auto && unanswered === 0 && !confirm('Submit exam now?')) { startTick(); return; }
    exam.submitted = true; exam.finishedAt = Date.now();
    let correct = 0;
    for (const q of exam.qs) { if (q.picked === q.correctIdx) correct++; }
    exam.correct = correct;
    await saveExam();
    const p = await prog();
    if (!p.mistakes) p.mistakes = {};
    for (const q of exam.qs) {
      const st = p.mcq[q.id] || { t: 0, c: 0 };
      st.t++; if (q.picked === q.correctIdx) st.c++;
      p.mcq[q.id] = st;
      const right = q.picked === q.correctIdx;
      if (!right) {
        const orig = mcqById(q.id);
        const prevE = p.mistakes[q.id];
        p.mistakes[q.id] = { subj: key, picked: q.picked === null ? null : q.order[q.picked], ts: Date.now(), understood: false, sinceRight: false, lec: orig && orig.lec, n: ((prevE && prevE.n) || 0) + 1 };
      } else if (p.mistakes[q.id] && !p.mistakes[q.id].understood) {
        p.mistakes[q.id].sinceRight = true;
      }
    }
    p.examHistory.unshift({ ts: Date.now(), subj: key, count: exam.qs.length, correct, secs: Math.round((exam.finishedAt - exam.started) / 1000) });
    p.examHistory = p.examHistory.slice(0, 50);
    await saveProg();
    await logAct(`Mock exam ${subjByKey(key).code}: ${correct}/${exam.qs.length} (${Math.round(100 * correct / exam.qs.length)}%)`);
    await viewExamResults(key);
  }
  function startTick() {
    stopExamTimer();
    const tEl = $('#ex-timer');
    const tick = async () => {
      const left = exam.deadline - Date.now();
      tEl.innerHTML = ic('clock') + ' ' + fmt(left);
      tEl.classList.toggle('low', left < 60000);
      if (left <= 0) { await submit(true); }
    };
    tick();
    examTimer = setInterval(tick, 1000);
  }

  $('#app').innerHTML = `
  <div class="exam-top">
    <a class="btn ghost sm" href="#/subject/${key}">${ic('al')} Exit</a>
    <span class="pill pri">${esc(s.code)} mock exam</span>
    <span class="timer" id="ex-timer" role="timer">${ic('clock')} --:--</span>
    <span class="sp" style="flex:1"></span>
    <span class="hint" id="ex-counts"></span>
    <button type="button" class="btn" id="ex-finish">${ic('check')} Finish</button>
  </div>
  <div class="examlay">
    <div class="card" style="padding:20px">
      <div class="rowflex" style="margin-bottom:6px"><span class="pill" id="ex-qnum"></span><span class="hint" id="ex-qsrc"></span></div>
      <p style="font-size:16.5px;font-weight:600" id="ex-qtext"></p>
      <div class="opts" id="ex-opts"></div>
      <div class="rowflex" style="margin-top:16px">
        <button type="button" class="btn ghost" id="ex-prev">${ic('al')} Previous</button>
        <button type="button" class="qtool" id="ex-mark"></button>
        <button type="button" class="btn ghost" id="ex-next">Next ${ic('ar')}</button>
      </div>
      <p class="hint" style="margin-top:10px">Keyboard: 1-4 pick an option, arrows move between questions.</p>
    </div>
    <div class="card" style="padding:16px">
      <div class="blk-h" style="margin-bottom:8px"><h2 style="font-size:15px">Questions</h2></div>
      <div class="qnav" id="ex-pal" role="navigation" aria-label="Question palette"></div>
      <div class="hint" style="font-size:12px">Filled = answered · amber = marked · ring = current</div>
    </div>
  </div>`;
  paintQ(); startTick();

  $('#ex-opts').addEventListener('click', async e => {
    const b = e.target.closest('.opt'); if (!b) return;
    exam.qs[exam.cur].picked = parseInt(b.dataset.pos, 10);
    await saveExam(); paintQ();
  });
  $('#ex-pal').addEventListener('click', async e => {
    const b = e.target.closest('button[data-go]'); if (!b) return;
    exam.cur = parseInt(b.dataset.go, 10); await saveExam(); paintQ();
  });
  $('#ex-prev').addEventListener('click', async () => { if (exam.cur > 0) { exam.cur--; await saveExam(); paintQ(); } });
  $('#ex-next').addEventListener('click', async () => { if (exam.cur < exam.qs.length - 1) { exam.cur++; await saveExam(); paintQ(); } });
  $('#ex-mark').addEventListener('click', async () => { exam.qs[exam.cur].marked = !exam.qs[exam.cur].marked; await saveExam(); paintQ(); });
  $('#ex-finish').addEventListener('click', () => { stopExamTimer(); submit(false); });
  document.addEventListener('keydown', examKeys);
}
async function examKeys(e) {
  if (!location.hash.includes('/run')) { document.removeEventListener('keydown', examKeys); return; }
  const exam = await store.get('exam', null);
  if (!exam || exam.submitted) return;
  if (e.key >= '1' && e.key <= '4') {
    const pos = parseInt(e.key, 10) - 1;
    const btn = $(`#ex-opts .opt[data-pos="${pos}"]`);
    if (btn) btn.click();
  } else if (e.key === 'ArrowRight') { const b = $('#ex-next'); if (b && !b.disabled) b.click(); }
  else if (e.key === 'ArrowLeft') { const b = $('#ex-prev'); if (b && !b.disabled) b.click(); }
}

async function viewExamResults(key) {
  stopExamTimer();
  document.removeEventListener('keydown', examKeys);
  const exam = await store.get('exam', null);
  const s = subjByKey(key);
  const pct = Math.round(100 * exam.correct / exam.qs.length);
  const mins = Math.floor((exam.finishedAt - exam.started) / 60000);
  const review = exam.qs.map((q, i) => {
    const data = mcqById(q.id);
    const ok = q.picked === q.correctIdx;
    const your = q.picked === null ? 'Unanswered' : OPT_LETTERS[q.picked] + ' · ' + data.opts[q.order[q.picked]];
    const corr = OPT_LETTERS[q.correctIdx] + ' · ' + data.opts[q.order[q.correctIdx]];
    return `<div class="mcq answered" data-filter="${ok ? 'ok' : 'no'}">
      <p class="q"><span class="pill ${ok ? 'good' : 'warn'}">${ok ? 'Correct' : (q.picked === null ? 'Skipped' : 'Wrong')}</span> Q${i + 1}. ${esc(data.q)}</p>
      <p class="hint" style="margin:4px 0">${esc(data.src)}</p>
      <div class="ans" style="display:flex"><span class="achip">Correct</span><span>${esc(corr)}</span></div>
      ${data.exp ? `<div class="ans" style="display:flex;background:var(--primarySoft)"><span class="achip">Explanation</span><span dir="auto">${esc(data.exp)}</span></div>` : ''}
      ${ok ? '' : `<div class="ans" style="display:flex;background:var(--badSoft);color:var(--bad)"><span class="achip" style="background:var(--bad);color:#fff">You</span><span>${esc(your)}</span></div>`}
    </div>`;
  }).join('');
  const byTopic = {};
  for (const q of exam.qs) {
    if (q.picked === q.correctIdx) continue;
    const data = mcqById(q.id);
    const src = data ? data.src : 'Unknown';
    byTopic[src] = (byTopic[src] || 0) + 1;
  }
  const topics = Object.entries(byTopic).sort((x, y) => y[1] - x[1]);
  const weakNext = topics.length ? `<div class="blk"><div class="blk-h"><h2>${ic('target')} Focus next</h2></div>
    <p class="hint" style="margin:0 0 8px">Topics you lost marks on in this attempt. They are also in your <a href="#/mistakes">mistakes notebook</a>.</p>
    <div class="acts">${topics.map(([src, n]) => `<div class="act">${ic('alert')}<span>${esc(src)}</span><span class="pill warn">${n} wrong</span></div>`).join('')}</div></div>` : '';
  const R = 54, C = 2 * Math.PI * R;
  $('#app').innerHTML = `
  <div class="card score-hero">
    <div class="eyebrow">${esc(s.code)} mock exam result</div>
    <svg width="140" height="140" viewBox="0 0 140 140" role="img" aria-label="Score ${pct} percent">
      <circle cx="70" cy="70" r="${R}" fill="none" stroke="var(--surface3)" stroke-width="12"/>
      <circle cx="70" cy="70" r="${R}" fill="none" stroke="url(#g1)" stroke-width="12" stroke-linecap="round"
        stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - pct / 100)}" transform="rotate(-90 70 70)"/>
      <defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7c6cf6"/><stop offset="1" stop-color="#38bdf8"/></linearGradient></defs>
      <text x="70" y="78" text-anchor="middle" font-size="30" font-weight="800" fill="var(--ink)">${pct}%</text>
    </svg>
    <p style="font-size:17px;font-weight:700;margin:6px 0">${exam.correct} of ${exam.qs.length} correct · ${mins} min</p>
    <div class="rowflex" style="justify-content:center;margin-top:10px">
      <a class="btn" href="#/exam/${key}">${ic('retry')} New attempt</a>
      <a class="btn ghost" href="#/subject/${key}">${ic('book')} Back to subject</a>
    </div>
  </div>
  ${weakNext}
  <div class="blk"><div class="blk-h"><h2>Review</h2><span class="sp"></span>
    <button type="button" class="qtool on" id="rv-all">All</button>
    <button type="button" class="qtool" id="rv-no">Wrong &amp; skipped</button></div>
    ${review}</div>`;
  $('#rv-all').addEventListener('click', () => {
    $$('#app [data-filter]').forEach(el => el.classList.remove('hidden-by-search'));
    $('#rv-all').classList.add('on'); $('#rv-no').classList.remove('on');
  });
  $('#rv-no').addEventListener('click', () => {
    $$('#app [data-filter]').forEach(el => el.classList.toggle('hidden-by-search', el.dataset.filter === 'ok'));
    $('#rv-no').classList.add('on'); $('#rv-all').classList.remove('on');
  });
}
/* MUST Finals platform - part 4: interactive tools, routes, init */

/* Boolean expression evaluator: vars A-D, ops AND(& * .) OR(| +) XOR(^) NOT(! ~ ') parens */
function boolEval(expr, env) {
  const toks = expr.match(/\bAND\b|\bOR\b|\bNOT\b|\bXOR\b|[ABCDabcd()!~'&|^*.+]/gi) || [];
  let pos = 0;
  const peek = () => toks[pos];
  function parseOr() {
    let v = parseXor();
    while (peek() && /^\||^\+$|^OR$/i.test(peek())) { pos++; const r = parseXor(); const l = v; v = l || r; }
    return v;
  }
  function parseXor() {
    let v = parseAnd();
    while (peek() && /^\^$|^XOR$/i.test(peek())) { pos++; const r = parseAnd(); const l = v; v = (l !== r); }
    return v;
  }
  function parseAnd() {
    let v = parseNot();
    while (peek() && (/^[&*.]$/.test(peek()) || /^AND$/i.test(peek()) || /^[ABCD(]/i.test(peek()))) {
      if (/^[ABCD(]/i.test(peek())) { const r = parseNot(); const l = v; v = l && r; }
      else { pos++; const r = parseNot(); const l = v; v = l && r; }
    }
    return v;
  }
  function parseNot() {
    if (peek() && (/^[!~']$/.test(peek()) || /^NOT$/i.test(peek()))) { pos++; return !parseNot(); }
    return parseAtom();
  }
  function parseAtom() {
    const t = peek();
    if (t === undefined) throw new Error('Unexpected end');
    if (t === '(') { pos++; const v = parseOr(); if (peek() !== ')') throw new Error('Missing )'); pos++; return v; }
    if (/^[ABCD]$/i.test(t)) { pos++; const v = !!env[t.toUpperCase()]; return v; }
    throw new Error('Bad token: ' + t);
  }
  const vars = [...new Set((expr.match(/[ABCD]/gi) || []).map(c => c.toUpperCase()))].sort();
  if (!vars.length || vars.length > 4) throw new Error('Use 1 to 4 variables named A, B, C, D');
  return { vars, val: parseOr() };
}

async function viewTools(which) {
  const tool = which || '';
  const cards = `
  <div class="grid g3">
    <a class="scard toolcard" href="#/tools/truthtable"><h3>${ic('cpu')} Truth Table Generator</h3><p>Type a Boolean expression with A, B, C, D and get the full truth table.</p></a>
    <a class="scard toolcard" href="#/tools/kmap"><h3>${ic('dash')} K-Map Viewer</h3><p>Enter minterms for 2 to 4 variables and see the Karnaugh map grid.</p></a>
    <a class="scard toolcard" href="#/tools/gates"><h3>${ic('zap')} Logic Gates</h3><p>Toggle inputs and watch AND, OR, XOR, NAND, NOR, XNOR and NOT outputs.</p></a>
    <a class="scard toolcard" href="#/tools/ds"><h3>${ic('layers')} Data Structures Visualizer</h3><p>Push, pop, enqueue, dequeue and grow a linked list step by step.</p></a>
    <a class="scard toolcard" href="#/tools/code"><h3>${ic('code')} Code Output Practice</h3><p>Predict what short C++ snippets print before revealing the output.</p></a>
  </div>`;
  const head = `<section class="hero" style="padding:22px 24px">
    <div class="eyebrow">Interactive tools</div>
    <h1 style="font-size:26px">Practice Lab</h1>
    <p class="sub">Extra interactive examples to experiment with. These are practice tools, not official course material.</p>
  </section>`;
  const notice = `<div class="notice info">${ic('alert')}<span>Practice tools and examples. For real exam content use the subject pages.</span></div>`;

  if (!tool) { $('#app').innerHTML = head + cards; return; }

  if (tool === 'truthtable') {
    $('#app').innerHTML = head + notice + `
    <div class="card" style="padding:22px;max-width:720px">
      <h3 style="margin-top:0">${ic('cpu')} Truth Table Generator</h3>
      <div class="field"><label for="tt-expr">Boolean expression (variables A-D; AND: & or · or space, OR: + or |, XOR: ^, NOT: ! or ~)</label>
      <input id="tt-expr" type="text" value="(A AND B) OR !C" style="width:100%;max-width:none;background:var(--surface2);border:1px solid var(--stroke);color:var(--ink);border-radius:9px;padding:10px 12px;font-family:ui-monospace,monospace;font-size:14px"></div>
      <button type="button" class="btn" id="tt-go">${ic('play')} Generate table</button>
      <div id="tt-out"></div>
    </div>`;
    $('#tt-go').addEventListener('click', () => {
      const expr = $('#tt-expr').value;
      try {
        const probe = boolEval(expr, { A: 0, B: 0, C: 0, D: 0 });
        const vars = probe.vars;
        const rows = [];
        for (let m = 0; m < (1 << vars.length); m++) {
          const env = {};
          vars.forEach((v, i) => env[v] = (m >> (vars.length - 1 - i)) & 1);
          rows.push({ env, r: boolEval(expr, env).val ? 1 : 0 });
        }
        $('#tt-out').innerHTML = `<table class="tt"><thead><tr>${vars.map(v => `<th>${v}</th>`).join('')}<th>Result</th></tr></thead>
          <tbody>${rows.map(r => `<tr>${vars.map(v => `<td>${r.env[v]}</td>`).join('')}<td class="res">${r.r}</td></tr>`).join('')}</tbody></table>`;
      } catch (err) { $('#tt-out').innerHTML = `<div class="notice">${ic('alert')}<span>${esc(err.message)}</span></div>`; }
    });
    $('#tt-go').click();
    return;
  }

  if (tool === 'kmap') {
    $('#app').innerHTML = head + notice + `
    <div class="card" style="padding:22px;max-width:720px">
      <h3 style="margin-top:0">${ic('dash')} K-Map Viewer</h3>
      <div class="field"><label for="km-vars">Variables</label>
        <select id="km-vars"><option value="2">2 (A, B)</option><option value="3" selected>3 (A, B, C)</option><option value="4">4 (A, B, C, D)</option></select></div>
      <div class="field"><label for="km-min">Minterms (comma separated, e.g. 0,2,5,7)</label>
      <input id="km-min" type="text" value="1,3,5,7" style="width:100%;max-width:none;background:var(--surface2);border:1px solid var(--stroke);color:var(--ink);border-radius:9px;padding:10px 12px;font-family:ui-monospace,monospace;font-size:14px"></div>
      <button type="button" class="btn" id="km-go">${ic('play')} Draw K-map</button>
      <div id="km-out"></div>
    </div>`;
    $('#km-go').addEventListener('click', () => {
      const nv = parseInt($('#km-vars').value, 10);
      const max = (1 << nv) - 1;
      const mins = $('#km-min').value.split(',').map(x => parseInt(x.trim(), 10)).filter(x => !isNaN(x));
      if (mins.some(x => x < 0 || x > max)) { $('#km-out').innerHTML = `<div class="notice">${ic('alert')}<span>Minterms must be between 0 and ${max} for ${nv} variables.</span></div>`; return; }
      const set = new Set(mins);
      const gray = n => n ^ (n >> 1);
      const rowVars = nv <= 2 ? 1 : 2, colVars = nv - rowVars;
      const rows = 1 << rowVars, cols = 1 << colVars;
      const rowLab = i => (gray(i) >>> 0).toString(2).padStart(rowVars, '0');
      const colLab = j => (gray(j) >>> 0).toString(2).padStart(colVars, '0');
      const rn = ['A', 'AB', 'AB'][rowVars - 1], cn = ['B', 'C', 'CD', 'CD'][colVars - 1] || (colVars === 1 ? (nv === 2 ? 'B' : 'C') : 'CD');
      let html = `<p class="hint" style="margin-top:14px">Rows: ${rn} · Columns: ${colVars === 1 ? (nv === 2 ? 'B' : 'C') : 'CD'} (Gray code order)</p><div class="kmap" style="grid-template-columns:repeat(${cols + 1},auto)"><div class="kc kh">${rn}\\${colVars === 1 ? (nv === 2 ? 'B' : 'C') : 'CD'}</div>`;
      for (let j = 0; j < cols; j++) html += `<div class="kc kh">${colLab(j)}</div>`;
      for (let i = 0; i < rows; i++) {
        html += `<div class="kc kh">${rowLab(i)}</div>`;
        for (let j = 0; j < cols; j++) {
          const m = (gray(i) << colVars) | gray(j);
          html += `<div class="kc ${set.has(m) ? 'one' : ''}">${set.has(m) ? 1 : 0}<small style="font-size:9px;color:var(--ink3);font-weight:400">${m}</small></div>`;
        }
      }
      html += '</div>';
      $('#km-out').innerHTML = html;
    });
    $('#km-go').click();
    return;
  }

  if (tool === 'gates') {
    $('#app').innerHTML = head + notice + `
    <div class="card" style="padding:22px;max-width:720px">
      <h3 style="margin-top:0">${ic('zap')} Logic Gates</h3>
      <div class="field"><label for="gt-sel">Gate</label>
        <select id="gt-sel"><option>AND</option><option>OR</option><option>XOR</option><option>NAND</option><option>NOR</option><option>XNOR</option><option>NOT</option></select></div>
      <div class="gatebox">
        <button type="button" class="btn ghost" id="gt-a">A = 0</button>
        <button type="button" class="btn ghost" id="gt-b">B = 0</button>
        <span class="pill pri" style="font-size:15px;padding:8px 16px" id="gt-out">OUT = 0</span>
      </div>
      <div id="gt-tt"></div>
    </div>`;
    let A = 0, B = 0;
    const FN = { AND: (a, b) => a & b, OR: (a, b) => a | b, XOR: (a, b) => a ^ b, NAND: (a, b) => 1 - (a & b), NOR: (a, b) => 1 - (a | b), XNOR: (a, b) => 1 - (a ^ b), NOT: a => 1 - a };
    function paint() {
      const g = $('#gt-sel').value;
      const single = g === 'NOT';
      $('#gt-b').style.display = single ? 'none' : '';
      $('#gt-a').textContent = 'A = ' + A;
      $('#gt-b').textContent = 'B = ' + B;
      $('#gt-out').textContent = 'OUT = ' + (single ? FN[g](A) : FN[g](A, B));
      const combos = single ? [[0], [1]] : [[0, 0], [0, 1], [1, 0], [1, 1]];
      $('#gt-tt').innerHTML = `<table class="tt"><thead><tr><th>A</th>${single ? '' : '<th>B</th>'}<th>OUT</th></tr></thead>
        <tbody>${combos.map(c => `<tr><td>${c[0]}</td>${single ? '' : `<td>${c[1]}</td>`}<td class="res">${single ? FN[g](c[0]) : FN[g](c[0], c[1])}</td></tr>`).join('')}</tbody></table>`;
    }
    $('#gt-a').addEventListener('click', () => { A = 1 - A; paint(); });
    $('#gt-b').addEventListener('click', () => { B = 1 - B; paint(); });
    $('#gt-sel').addEventListener('change', paint);
    paint();
    return;
  }

  if (tool === 'ds') {
    $('#app').innerHTML = head + notice + `
    <div class="card" style="padding:22px;max-width:760px">
      <h3 style="margin-top:0">${ic('layers')} Data Structures Visualizer</h3>
      <div class="field"><label for="ds-sel">Structure</label>
        <select id="ds-sel"><option value="stack">Stack (LIFO)</option><option value="queue">Queue (FIFO)</option><option value="list">Singly Linked List</option></select></div>
      <div class="rowflex">
        <input id="ds-val" type="text" placeholder="Value" style="width:110px;background:var(--surface2);border:1px solid var(--stroke);color:var(--ink);border-radius:9px;padding:9px 12px;font-size:14px">
        <button type="button" class="btn sm" id="ds-add">Push</button>
        <button type="button" class="btn ghost sm" id="ds-del">Pop</button>
        <button type="button" class="btn ghost sm" id="ds-reset">${ic('retry')} Reset</button>
      </div>
      <div class="dsv" id="ds-view" aria-live="polite"></div>
      <div class="oplog" id="ds-log">Ready.</div>
    </div>`;
    let items = [];
    const view = $('#ds-view'), log = $('#ds-log');
    function say(t) { log.innerHTML = esc(t) + '<br>' + log.innerHTML; }
    function paint() {
      const k = $('#ds-sel').value;
      let html = '';
      if (k === 'stack') {
        html = items.length ? items.map((v, i) => `<div class="node">${esc(v)}${i === items.length - 1 ? '<span class="pill" style="margin-left:6px">top</span>' : ''}</div>`).join('') : '<span class="hint">Empty stack</span>';
        html = `<span class="lbl">bottom → top</span>` + html;
      } else if (k === 'queue') {
        html = items.length ? items.map((v, i) => `<div class="node">${esc(v)}${i === 0 ? '<span class="pill" style="margin-left:6px">front</span>' : ''}${i === items.length - 1 ? '<span class="pill" style="margin-left:6px">rear</span>' : ''}</div>`).join('') : '<span class="hint">Empty queue</span>';
        html = `<span class="lbl">front → rear</span>` + html;
      } else {
        html = items.length ? items.map((v, i) => `<div class="node">${esc(v)}${i === 0 ? '<span class="pill" style="margin-left:6px">head</span>' : ''}${i < items.length - 1 ? ' →' : ' → null'}</div>`).join('') : '<span class="hint">head → null</span>';
        html = `<span class="lbl">head → tail</span>` + html;
      }
      view.innerHTML = html;
      const add = $('#ds-add'), del = $('#ds-del');
      add.textContent = k === 'stack' ? 'Push' : k === 'queue' ? 'Enqueue' : 'Insert at tail';
      del.textContent = k === 'stack' ? 'Pop' : k === 'queue' ? 'Dequeue' : 'Delete head';
    }
    $('#ds-sel').addEventListener('change', () => { items = []; paint(); say('Structure reset.'); });
    $('#ds-reset').addEventListener('click', () => { items = []; paint(); say('Cleared.'); });
    $('#ds-add').addEventListener('click', () => {
      const v = $('#ds-val').value.trim() || String(items.length + 1);
      const k = $('#ds-sel').value;
      if (k === 'stack') { items.push(v); say(`push(${v}) -> top is now ${v}`); }
      else if (k === 'queue') { items.push(v); say(`enqueue(${v}) -> rear is now ${v}`); }
      else { items.push(v); say(`insert(${v}) at tail; tail.next = null`); }
      $('#ds-val').value = ''; paint();
    });
    $('#ds-del').addEventListener('click', () => {
      const k = $('#ds-sel').value;
      if (!items.length) { say(k === 'list' ? 'List is empty - nothing to delete.' : (k === 'stack' ? 'Stack underflow: pop on empty stack.' : 'Queue underflow: dequeue on empty queue.')); return; }
      if (k === 'stack') say(`pop() -> removed ${items.pop()}`);
      else if (k === 'queue') say(`dequeue() -> removed ${items.shift()} from the front`);
      else say(`deleteHead() -> removed ${items.shift()}; head moved to the next node`);
      paint();
    });
    paint();
    return;
  }

  if (tool === 'code') {
    const items = D.codePractice.map(c => `
      <div class="card" style="padding:18px;margin-bottom:14px">
        <div class="rowflex"><h3 style="margin:0;font-size:15px">${ic('code')} ${esc(c.title)}</h3><span class="sp" style="flex:1"></span><span class="pill">${esc(subjByKey(c.subj).code)}</span><span class="pill">${esc(c.lang)}</span></div>
        <pre class="codeblock">${esc(c.code)}</pre>
        <div class="rowflex" style="gap:8px;flex-wrap:wrap">
          <button type="button" class="btn ghost sm revealout">${ic('eye')} Reveal output</button>
          ${c.steps ? `<button type="button" class="btn ghost sm revealsteps">${ic('list')} Step-by-step trace</button>` : ''}
        </div>
        <div class="model"><div class="inner"><span class="achip">Output</span><span style="font-family:ui-monospace,monospace">${esc(c.out)}</span></div></div>
        ${c.steps ? `<div class="model stepsmodel"><div class="inner"><span class="achip">Execution trace</span><p class="hint" style="margin:0 0 8px">Practice aid written for this platform - not official course material. The final line always matches the compiled output.</p><ol style="margin:0;padding-left:20px;display:grid;gap:6px">${c.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol></div></div>` : ''}
      </div>`).join('');
    $('#app').innerHTML = head + notice + `<div class="blk"><div class="blk-h"><h2>Code Output Practice</h2><span class="sp"></span><span class="hint">Predict the output, then reveal. Outputs verified by compiling.</span></div>${items}</div>`;
    $$('.revealout').forEach(b => b.addEventListener('click', () => {
      const m = b.parentElement.querySelector('.model');
      const open = m.style.display === 'block';
      m.style.display = open ? 'none' : 'block';
      b.innerHTML = open ? ic('eye') + ' Reveal output' : ic('eye') + ' Hide output';
    }));
    $$('.revealsteps').forEach(b => b.addEventListener('click', () => {
      const m = b.parentElement.parentElement.querySelector('.stepsmodel');
      const open = m.style.display === 'block';
      m.style.display = open ? 'none' : 'block';
      b.innerHTML = open ? ic('list') + ' Step-by-step trace' : ic('list') + ' Hide trace';
    }));
    return;
  }

  nav('/tools');
}

/* ---- mistakes notebook: auto-collected wrong answers (real attempts only) ---- */
let _mf = 'all';
async function viewMistakes() {
  const p = await prog();
  if (!p.mistakes) p.mistakes = {};
  const m = p.mistakes;
  const ids = Object.keys(m).filter(id => mcqById(id));
  const active = ids.filter(id => !m[id].understood);
  const done = ids.filter(id => m[id].understood);
  const list = (_mf === 'all' ? active : active.filter(id => mcqById(id).subj === _mf))
    .sort((x, y) => (m[y].ts || 0) - (m[x].ts || 0));
  const subjPills = ['all', ...D.subjects.map(s => s.key).filter(k => active.some(id => mcqById(id).subj === k))]
    .map(k => `<button type="button" class="chip${_mf === k ? ' on' : ''}" data-mf="${k}">${k === 'all' ? 'All' : esc(subjByKey(k).code)}</button>`).join('');
  const cards = list.map(id => {
    const q = mcqById(id), e = m[id];
    const opts = q.opts.map((o, oi) => {
      let cls = 'opt static', extra = '';
      if (oi === q.a) cls += ' right';
      if (e.picked === oi && oi !== q.a) cls += ' wrong';
      if (e.picked === oi) extra = ' <span class="hint">(your answer)</span>';
      return `<div class="${cls}"><span class="ol">${OPT_LETTERS[oi]}</span><span>${esc(o)}${extra}</span></div>`;
    }).join('');
    const note = (e.sinceRight ? `<span class="pill ok">answered correctly since</span>` : '') + (e.n > 1 ? `<span class="pill warn">wrong ${e.n} times</span>` : '');
    return `<div class="card" data-qid="${id}">
      <div class="row" style="gap:8px;flex-wrap:wrap">
        <span class="pill pri">${esc(subjByKey(q.subj).code)}</span>
        <span class="hint">${esc(q.src)}</span>${note}
        <span class="hint" style="margin-left:auto">${e.ts ? new Date(e.ts).toLocaleDateString() : ''}</span>
      </div>
      <p class="q">${esc(q.q)} <span class="qid">${q.id}</span></p>
      <div class="opts">${opts}</div>
      <div class="row" style="gap:8px;margin-top:10px">
        <button type="button" class="btn ghost sm" data-mretry="${id}">${ic('zap')} Retry</button>
        <button type="button" class="btn ghost sm" data-mgot="${id}">${ic('check')} Mark understood</button>
      </div>
    </div>`;
  }).join('');
  $('#app').innerHTML = `
  <div class="vhead"><h1>${ic('target')} Mistakes notebook</h1>
    <p class="hint">Every wrong answer from practice and mock exams lands here automatically. Retry them, then mark understood when the idea sticks.</p>
  </div>
  <div class="row" style="gap:8px;flex-wrap:wrap;margin-bottom:12px">
    <span class="pill">Active: ${active.length}</span><span class="pill ok">Understood: ${done.length}</span>${subjPills}
  </div>
  ${list.length ? cards : `<div class="empty">${ic('check')} No mistakes here${active.length ? ' for this subject' : ''}. ${ids.length ? 'Nice work.' : 'Answer practice questions or take a mock exam - anything you get wrong will show up here.'}</div>`}`;
  $$('#app [data-mf]').forEach(b => b.onclick = () => { _mf = b.dataset.mf; viewMistakes(); });
  $$('#app [data-mgot]').forEach(b => b.onclick = async () => {
    const qid = b.dataset.mgot, pp = await prog();
    if (pp.mistakes[qid]) { pp.mistakes[qid].understood = true; await saveProg(); }
    viewMistakes();
  });
  $$('#app [data-mretry]').forEach(b => b.onclick = () => {
    const qid = b.dataset.mretry, q = mcqById(qid), card = b.closest('.card');
    const opts = q.opts.map((o, oi) => `<button type="button" class="opt" data-c="${oi === q.a ? 1 : 0}"><span class="ol">${OPT_LETTERS[oi]}</span><span>${esc(o)}</span></button>`).join('');
    const box = card.querySelector('.opts');
    box.innerHTML = opts;
    box.querySelectorAll('.opt').forEach(o => o.addEventListener('click', async () => {
      const oi = Array.prototype.indexOf.call(box.querySelectorAll('.opt'), o);
      const right = o.dataset.c === '1';
      box.innerHTML = q.opts.map((x, xi) => {
        let cls = 'opt static';
        if (xi === q.a) cls += ' right';
        if (xi === oi && !right) cls += ' wrong';
        return `<div class="${cls}"><span class="ol">${OPT_LETTERS[xi]}</span><span>${esc(x)}</span></div>`;
      }).join('');
      await recordMcq(qid, right, oi);
      if (right) {
        const pp = await prog();
        if (pp.mistakes[qid] && !pp.mistakes[qid].understood) { pp.mistakes[qid].understood = true; await saveProg(); }
        viewMistakes();
      }
    }));
  });
}

/* ---- question bank: filter every question by subject, source, type and answer state ---- */
const _bankF = { subj: 'all', src: 'all', type: 'all', state: 'all', q: '' };
async function viewBank() {
  const p = await prog();
  const f = _bankF;
  const subjOpts = ['all', ...D.subjects.map(s => s.key)];
  const pool = [
    ...D.mcq.map(q => ({ q, type: 'mcq' })),
    ...D.written.map(q => ({ q, type: 'written' })),
  ];
  const srcs = [...new Set(pool.filter(x => f.subj === 'all' || x.q.subj === f.subj).map(x => x.q.src))];
  let list = pool.filter(x =>
    (f.subj === 'all' || x.q.subj === f.subj) &&
    (f.src === 'all' || x.q.src === f.src) &&
    (f.type === 'all' || x.type === f.type) &&
    (f.q === '' || (x.q.q + ' ' + x.q.src).toLowerCase().includes(f.q)));
  const stateOf = x => {
    if (x.type !== 'mcq') return 'unanswered';
    const s = p.mcq[x.q.id];
    if (!s || !s.t) return 'unanswered';
    return s.c > 0 ? 'correct' : 'incorrect';
  };
  if (f.state !== 'all') list = list.filter(x => stateOf(x) === f.state);
  const sel = (id, val, opts, label) => `<label class="hint" style="display:flex;flex-direction:column;gap:4px;font-size:11.5px">${label}
    <select id="${id}" class="in">${opts.map(o => `<option value="${esc(o)}"${o === val ? ' selected' : ''}>${esc(o === 'all' ? 'All' : (subjOpts.includes(o) ? subjByKey(o).code : o))}</option>`).join('')}</select></label>`;
  $('#app').innerHTML = `
  <div class="vhead"><h1>${ic('search')} Question bank</h1>
    <p class="hint">Every question on the platform, filterable. Answer state comes from your real attempts. Click an option to answer - wrong answers go to your mistakes notebook.</p>
  </div>
  <div class="row" style="gap:12px;flex-wrap:wrap;margin-bottom:14px">
    ${sel('bf-subj', f.subj, subjOpts, 'Subject')}
    ${sel('bf-src', f.src, ['all', ...srcs], 'Lecture / section')}
    ${sel('bf-type', f.type, ['all', 'mcq', 'written'], 'Type')}
    ${sel('bf-state', f.state, ['all', 'correct', 'incorrect', 'unanswered'], 'Your answer state')}
    <span class="pill" style="align-self:end" id="bf-count">${list.length} question${list.length === 1 ? '' : 's'}</span>
  </div>
  <div class="search" style="margin-bottom:12px">${ic('search')}<input id="bf-q" type="search" value="${esc(f.q)}" placeholder="Search all ${pool.length} questions..." aria-label="Search questions in the bank"></div>
  <div id="bank-list">${list.slice(0, 120).map(x => x.type === 'mcq' ? mcqHtml(x.q) : wqHtml(x.q)).join('')}</div>
  ${list.length > 120 ? `<p class="hint" style="margin-top:10px">Showing the first 120 - narrow the filters to see the rest.</p>` : ''}
  ${!list.length ? `<div class="empty">${ic('search')} No questions match these filters.</div>` : ''}`;
  for (const [id, key] of [['bf-subj', 'subj'], ['bf-src', 'src'], ['bf-type', 'type'], ['bf-state', 'state']]) {
    $('#' + id).addEventListener('change', e => { _bankF[key] = e.target.value; if (key === 'subj') _bankF.src = 'all'; viewBank(); });
  }
  const p2 = await prog();
  paintBookmarks(p2);
  let bfT;
  $('#bf-q').addEventListener('input', e => {
    const v = e.target.value;
    clearTimeout(bfT);
    bfT = setTimeout(async () => {
      _bankF.q = v.trim().toLowerCase();
      await viewBank();
      const i = $('#bf-q'); i.value = v; i.focus(); i.setSelectionRange(v.length, v.length);
    }, 250);
  });
}

/* routes */
route(/^\/$/, viewDashboard);
route(/^\/subject\/([a-z0-9]+)$/, viewSubject);
route(/^\/subject\/([a-z0-9]+)\/q\/([\w-]+)$/, viewSubject);
route(/^\/exam\/([a-z0-9]+)$/, viewExamConfig);
route(/^\/exam\/([a-z0-9]+)\/run$/, viewExamRun);
route(/^\/bookmarks$/, viewBookmarks);
route(/^\/mistakes$/, viewMistakes);
route(/^\/bank$/, viewBank);
route(/^\/tools(?:\/([a-z]+))?$/, viewTools);
function viewBackendSoon(kind) {
  $('#app').innerHTML = `<div class="card empty">${ic('user')}<div><b>${kind === 'admin' ? 'Admin' : 'Accounts'} are not available yet.</b><br>Sign-in, sync and community features are being set up. Everything on the site works offline without an account.</div></div>`;
}
route(/^\/account$/, () => {
  if (window.MFB && MFB.ready) return MFB.viewAccount();
  if (!window.MFB) return viewBackendSoon('account');
  $('#app').innerHTML = '<div class="card empty">Loading account\u2026</div>';
  MFB.init().then(() => {
    if (location.hash !== '#/account') return;
    MFB.ready ? MFB.viewAccount() : viewBackendSoon('account');
  });
});
route(/^\/admin$/, () => {
  if (window.MFB && MFB.ready) {
    if (MFB.user && !MFB.profile) {
      $('#app').innerHTML = '<div class="card empty">Loading account\u2026</div>';
      let tries = 0;
      const t = setInterval(() => {
        if (location.hash !== '#/admin') return clearInterval(t);
        if (MFB.profile || ++tries > 20) { clearInterval(t); MFB.isAdmin() ? MFB.viewAdmin() : MFB.viewAccount(); }
      }, 150);
      return;
    }
    return MFB.isAdmin() ? MFB.viewAdmin() : MFB.viewAccount();
  }
  if (!window.MFB) return viewBackendSoon('admin');
  $('#app').innerHTML = '<div class="card empty">Loading account\u2026</div>';
  MFB.init().then(() => {
    if (location.hash !== '#/admin') return;
    MFB.ready ? (MFB.isAdmin() ? MFB.viewAdmin() : MFB.viewAccount()) : viewBackendSoon('admin');
  });
});

/* theme */
async function applyTheme() {
  const t = await store.get('theme', 'dark');
  document.documentElement.dataset.theme = t;
  const b = $('#theme-btn');
  if (b) b.innerHTML = t === 'dark' ? ic('sun') : ic('moon');
}

/* ---- admin content overlay: merge DB content_items over baked data (public read, fail-silent) ---- */
async function loadContentOverlay() {
  const SB = 'https://ziczpsbryyjdwjoedtdb.supabase.co';
  const KEY = 'sb_publishable_njRhgbia6C91Ce3RKg03Eg_vgnXxt7O';
  try {
    const ctl = new AbortController(); const to = setTimeout(() => ctl.abort(), 3500);
    const res = await fetch(SB + '/rest/v1/content_items?select=kind,subj,ref_id,payload&order=id.asc', {
      headers: { apikey: KEY, Authorization: 'Bearer ' + KEY }, signal: ctl.signal });
    clearTimeout(to);
    if (!res.ok) return;
    const items = await res.json();
    let added = 0;
    for (const it of items) {
      const p = it.payload || {};
      if (it.kind === 'mcq') {
        if (it.ref_id) { const q = D.mcq.find(x => x.id === it.ref_id); if (q) Object.assign(q, p); }
        else if (p.id && p.q && Array.isArray(p.opts) && typeof p.a === 'number' && !D.mcq.find(x => x.id === p.id)) { D.mcq.push(p); added++; }
      } else if (it.kind === 'written') {
        if (it.ref_id) { const q = D.written.find(x => x.id === it.ref_id); if (q) Object.assign(q, p); }
        else if (p.id && p.q && p.a && !D.written.find(x => x.id === p.id)) { D.written.push(p); added++; }
      }
    }
    if (added) console.log('content overlay: ' + added + ' admin items merged');
  } catch (e) { /* offline or no backend: baked content stands */ }
}

async function boot() {
  if (window.MFB) MFB.init();
  await loadContentOverlay();
  await applyTheme();
  $('#theme-btn').addEventListener('click', async () => {
    const t = (await store.get('theme', 'dark')) === 'dark' ? 'light' : 'dark';
    await store.set('theme', t); applyTheme();
  });
  $('#menu-btn').addEventListener('click', () => document.body.classList.toggle('navopen'));
  $('#side').addEventListener('click', e => { if (e.target.closest('a')) document.body.classList.remove('navopen'); });
  await render();
  window.__MF_BOOTED = true;
  try { sessionStorage.removeItem('mf.reloaded'); } catch (e) {}
}
document.addEventListener('DOMContentLoaded', boot);

/* ============ MUST Finals - part 5: flashcards, retry, revision, goals, AR UI, notes, PWA ============ */

/* extra icons */
Object.assign(IC, {
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  compass: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  bookopen: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  sparkle: '<path d="M12 3v3m0 12v3M5.6 5.6l2.2 2.2m8.4 8.4 2.2 2.2M3 12h3m12 0h3M5.6 18.4l2.2-2.2m8.4-8.4 2.2-2.2"/>',
  notebook: '<path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M16 2v20"/>',
  clipb: '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12h6"/><path d="M9 16h6"/>',
  shuffle: '<path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.8-1.1 2-1.7 3.3-1.7H22"/><path d="m18 2 4 4-4 4"/><path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2"/><path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"/><path d="m18 14 4 4-4 4"/>',
  cards: '<rect width="14" height="18" x="7" y="3" rx="2"/><path d="M3 7v12a2 2 0 0 0 2 2h9"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
});

/* ---- daily goal ---- */
function todayKey() { return new Date().toISOString().slice(0, 10); }
async function dailyGet() { const d = await store.get('daily', null); return (d && d.date === todayKey()) ? d : { date: todayKey(), count: 0 }; }
async function dailyBump() { const d = await dailyGet(); d.count++; await store.set('daily', d); }
async function goalTarget() { return await store.get('goal', 20); }

const _recordMcq = recordMcq;
recordMcq = async function (qid, correct, pickedIdx) { await _recordMcq(qid, correct, pickedIdx); await dailyBump(); };

/* ---- recommendations from real state only ---- */
async function recommendations(p) {
  const recs = [];
  const last = p.examHistory[0];
  if (last) {
    const wrong = last.count - last.correct;
    if (wrong > 0) recs.push({ icon: 'retry', text: `Retry the ${wrong} question${wrong > 1 ? 's' : ''} you missed in your last ${subjByKey(last.subj).code} mock`, act: '#/exam/' + last.subj });
  }
  let worst = null, worstPct = 101;
  for (const s of D.subjects) {
    const a = subjAccuracy(p, s.key);
    if (a && a.t >= 5 && a.pct < worstPct) { worstPct = a.pct; worst = s; }
  }
  if (worst) recs.push({ icon: 'target', text: `Weakest practice area: ${worst.code} at ${worstPct}% accuracy - work its question bank`, act: '#/subject/' + worst.key });
  for (const s of D.subjects) {
    const c = subjCompletion(p, s.key);
    if (c.done > 0 && c.done < c.total) {
      const next = s.lectures.find(l => !l.missing && !p.completed[s.key + '-lec' + l.n]);
      if (next) { recs.push({ icon: 'bookopen', text: `Continue ${s.code} - Lecture ${next.n}: ${next.topic}`, act: '#/subject/' + s.key }); break; }
    }
  }
  if (!recs.length) recs.push({ icon: 'sparkle', text: 'Pick a subject and mark lectures done as you study them', act: '#/' });
  return recs.slice(0, 3);
}

/* ---- dashboard extras ---- */
const _viewDashboard = viewDashboard;
viewDashboard = async function () {
  await _viewDashboard();
  const p = await prog();
  const d = await dailyGet(), g = await goalTarget();
  const pct = Math.min(100, Math.round(100 * d.count / g));
  const recs = await recommendations(p);
  const goalEl = document.getElementById('dz-goal');
  if (!goalEl) return;
  goalEl.innerHTML = `<div class="card" style="padding:16px">
    <h2 style="margin:0 0 8px;font-size:15px">${ic('flame')} Today's goal</h2>
    <div class="pbar goalbar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><i style="width:${pct}%"></i></div>
    <p style="margin:10px 0 8px;font-weight:700">${d.count} / ${g} practice answers today</p>
    <div class="rowflex"><span class="hint">Daily target:</span>
      ${[10, 20, 40].map(n => `<button type="button" class="qtool goalchip ${g === n ? 'on' : ''}" data-g="${n}">${n}</button>`).join('')}
    </div></div>`;
  document.getElementById('dz-recs').innerHTML = `<div class="card" style="padding:16px">
    <h2 style="margin:0 0 8px;font-size:15px">${ic('compass')} Recommended next</h2>
    <div class="acts">${recs.map(r => `<a class="act rec" href="${r.act}">${ic(r.icon)}<span>${esc(r.text)}</span></a>`).join('')}</div></div>`;
  $$('.goalchip').forEach(b => b.addEventListener('click', async () => { await store.set('goal', +b.dataset.g); render(); }));
  if (window.MFB && MFB.ready) {
    const ann = await MFB.announcementsHtml();
    const slot = document.getElementById('dz-announce');
    if (slot && ann) slot.innerHTML = ann;
  }
};

/* ---- retry missed questions (reuses the real exam runner) ---- */
async function startRetryExam(key) {
  const p = await prog();
  const pool = subjMcqs(key).filter(q => { const st = p.mcq[q.id]; return st && st.t > 0 && st.c < st.t; });
  if (pool.length < 3) { toast('Fewer than 3 missed questions in this subject yet - practice more first'); return; }
  const picked = shuffled(pool).slice(0, Math.min(15, pool.length));
  const exam = {
    subj: key, started: Date.now(), deadline: Date.now() + picked.length * 90 * 1000,
    qs: picked.map(q => { const order = shuffled(q.opts.map((_, i) => i)); return { id: q.id, order, correctIdx: order.indexOf(q.a), picked: null, marked: false }; }),
    cur: 0, submitted: false,
  };
  await store.set('exam', exam);
  await logAct(`Started retry exam in ${subjByKey(key).code} (${picked.length} missed questions)`);
  nav('/exam/' + key + '/run');
}

const _viewExamConfig = viewExamConfig;
viewExamConfig = async function (key) {
  await _viewExamConfig(key);
  const p = await prog();
  const missed = subjMcqs(key).filter(q => { const st = p.mcq[q.id]; return st && st.t > 0 && st.c < st.t; }).length;
  if (missed >= 3) {
    const btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'btn ghost'; btn.style.marginTop = '10px';
    btn.innerHTML = ic('retry') + ` Retry my ${missed} missed questions`;
    btn.addEventListener('click', () => startRetryExam(key));
    $('#ex-start').parentElement.appendChild(btn);
  }
};

const _viewExamResults = viewExamResults;
viewExamResults = async function (key) {
  await _viewExamResults(key);
  const exam = await store.get('exam', null);
  if (!exam || !exam.qs) return;
  const missed = exam.qs.filter(q => q.picked !== q.correctIdx).length;
  if (missed > 0) {
    const row = $('.score-hero .rowflex');
    if (row) {
      const a = document.createElement('button');
      a.type = 'button'; a.className = 'btn ghost';
      a.innerHTML = ic('retry') + ` Retry the ${missed} I missed`;
      a.addEventListener('click', () => startRetryExam(key));
      row.appendChild(a);
    }
  }
};

/* ---- revision: bookmarked + missed, one place ---- */
async function viewRevision() {
  const p = await prog();
  const items = [];
  for (const q of D.mcq) {
    const st = p.mcq[q.id]; const missed = st && st.t > 0 && st.c < st.t;
    if (missed || p.bookmarks[q.id]) items.push({ q, missed, bm: !!p.bookmarks[q.id] });
  }
  $('#app').innerHTML = `
  <section class="hero" style="padding:22px 24px">
    <div class="eyebrow">Revision</div><h1 style="font-size:26px">Bookmarked &amp; missed questions</h1>
    <p class="sub">Everything you saved or got wrong, collected from your real practice history.</p>
  </section>
  <div class="blk">${items.length ? items.map(it =>
    `<p class="cap">${esc(subjByKey(it.q.subj).code)} · ${esc(it.q.src)} ${it.missed ? '<span class="pill warn">missed before</span>' : ''} ${it.bm ? '<span class="pill">bookmarked</span>' : ''}</p>` + mcqHtml(it.q)
  ).join('') : `<div class="card empty">${ic('bookmark')}<div>Nothing here yet. Bookmark questions or miss a few in practice and they collect here.</div></div>`}</div>`;
  const p2 = await prog();
  for (const it of items) { const st = p2.mcq[it.q.id]; if (st && st.t) { const el = $('#q-' + it.q.id); if (el) { el.classList.add('answered'); paintMcq(el, null); } } }
  paintBookmarks(p2);
}

/* ---- flashcards (real question bank only) ---- */
let FC = null;
async function viewFlashcards(key) {
  const s = subjByKey(key); if (!s) { nav('/'); return; }
  if (!FC || FC.key !== key) {
    const cards = [];
    subjMcqs(key).forEach(q => cards.push({ front: q.q, back: OPT_LETTERS[q.a] + ' · ' + q.opts[q.a], tag: 'MCQ · ' + q.src }));
    subjWritten(key).forEach(w => cards.push({ front: w.q, back: w.a, tag: 'Written · ' + w.src }));
    FC = { key, cards: shuffled(cards), i: 0, flipped: false };
  }
  const c = FC.cards[FC.i];
  $('#app').innerHTML = `
  <section class="hero" style="padding:22px 24px">
    <div class="eyebrow">${esc(s.code)} · Flashcards</div>
    <h1 style="font-size:26px">${esc(s.full)}</h1>
    <p class="sub">Built from the real ${esc(s.code)} question bank. Card ${FC.i + 1} of ${FC.cards.length}.</p>
  </section>
  <div class="fcwrap">
    <div class="fcard ${FC.flipped ? 'flipped' : ''}" id="fcard" role="button" tabindex="0" aria-label="Flashcard, activate to flip">
      <div class="fface ffront"><span class="pill pri">${esc(c.tag)}</span><p class="ftext">${esc(c.front)}</p><p class="hint">Click to flip</p></div>
      <div class="fface fback"><span class="pill good">Answer</span><p class="ftext">${esc(c.back)}</p><p class="hint">Click to flip back</p></div>
    </div>
    <div class="rowflex" style="justify-content:center;margin-top:14px">
      <button type="button" class="btn ghost" id="fc-prev">${ic('al')} Previous</button>
      <button type="button" class="btn ghost" id="fc-shuffle">${ic('shuffle')} Shuffle</button>
      <button type="button" class="btn" id="fc-next">Next ${ic('ar')}</button>
    </div>
  </div>`;
  const flip = () => { FC.flipped = !FC.flipped; viewFlashcards(key); };
  $('#fcard').addEventListener('click', flip);
  $('#fcard').addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); } });
  $('#fc-next').addEventListener('click', () => { FC.i = (FC.i + 1) % FC.cards.length; FC.flipped = false; viewFlashcards(key); });
  $('#fc-prev').addEventListener('click', () => { FC.i = (FC.i - 1 + FC.cards.length) % FC.cards.length; FC.flipped = false; viewFlashcards(key); });
  $('#fc-shuffle').addEventListener('click', () => { FC.cards = shuffled(FC.cards); FC.i = 0; FC.flipped = false; viewFlashcards(key); });
}

/* ---- subject page extras: flashcards button + real notes from the course pack ---- */
function notesBlockHtml(s) {
  let h = '';
  if (s.examForm && s.examForm.length) {
    h += `<div class="blk"><div class="blk-h"><h2>${ic('clipb')} Exam format &amp; past-exam notes</h2><span class="sp"></span><span class="hint">From your course pack, in Arabic</span></div>
      <div class="card" style="padding:16px"><ul class="notes" dir="rtl" lang="ar">${s.examForm.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
      ${s.sectionsNote ? `<p class="hint" dir="rtl" lang="ar" style="margin-top:8px">${esc(s.sectionsNote)}</p>` : ''}</div></div>`;
  }
  const withNotes = s.lectures.map((l, i) => ({ l, notes: (s.lecNotes && s.lecNotes[i]) || [] })).filter(x => x.notes.length);
  if (withNotes.length) {
    h += `<div class="blk"><div class="blk-h"><h2>${ic('notebook')} Study notes per lecture</h2><span class="sp"></span><span class="hint">Key points from the course pack, in Arabic</span></div>
      ${withNotes.map(x => `<details class="card notedet"><summary>Lecture ${x.l.n} · ${esc(x.l.topic)}</summary><ul class="notes" dir="rtl" lang="ar">${x.notes.map(n => `<li>${esc(n)}</li>`).join('')}</ul></details>`).join('')}</div>`;
  }
  return h;
}
const _viewSubject = viewSubject;
viewSubject = async function (key, focusQid) {
  await _viewSubject(key, focusQid);
  const s = subjByKey(key); if (!s) return;
  const hero = $('#app .hero .rowflex:last-of-type');
  if (hero && !$('#fc-link')) {
    const a = document.createElement('a');
    a.className = 'btn ghost'; a.href = '#/subject/' + key + '/flashcards'; a.id = 'fc-link';
    a.innerHTML = ic('cards') + ' Flashcards';
    hero.appendChild(a);
  }
  const mcqH = $$('#app .blk-h h2').find(h => h.textContent.startsWith('MCQ Practice'));
  if (mcqH) mcqH.closest('.blk').insertAdjacentHTML('beforebegin', notesBlockHtml(s));
};

/* ---- Arabic UI toggle: chrome only, course content stays English ---- */
const AR_NAV = {
  'Dashboard': 'الرئيسية', 'Subjects': 'المواد', 'Practice': 'التدريب', 'Lab': 'المعمل',
  'CS.212 · Data Structures': 'CS.212 · هياكل البيانات', 'ECE202 · Logic Design': 'ECE202 · التصميم المنطقي',
  'CS.211 · Concepts': 'CS.211 · مفاهيم لغات البرمجة',
  'Exam · CS.212': 'امتحان · CS.212', 'Exam · ECE202': 'امتحان · ECE202', 'Exam · CS.211': 'امتحان · CS.211',
  'Bookmarks': 'المحفوظات', 'Revision': 'المراجعة', 'Interactive tools': 'الأدوات التفاعلية',
};
async function applyLang() {
  const ar = (await store.get('lang', 'en')) === 'ar';
  document.documentElement.dir = ar ? 'rtl' : 'ltr';
  document.documentElement.lang = ar ? 'ar' : 'en';
  $$('.snav a, .snav .cat').forEach(el => {
    if (!el.dataset.en) el.dataset.en = el.textContent.trim();
    el.textContent = ar ? (AR_NAV[el.dataset.en] || el.dataset.en) : el.dataset.en;
  });
  const b = $('#lang-btn');
  if (b) { b.innerHTML = ic('globe') + '<span style="font-size:12px;font-weight:700">' + (ar ? 'EN' : 'ع') + '</span>'; b.setAttribute('aria-label', ar ? 'Switch to English' : 'التبديل إلى العربية'); }
  const note = $('#ar-note');
  if (note) note.style.display = ar ? 'block' : 'none';
}
async function toggleLang() {
  const cur = await store.get('lang', 'en');
  await store.set('lang', cur === 'ar' ? 'en' : 'ar');
  await applyLang(); await render();
}

/* wire the lang button + revision link once at load */
document.addEventListener('DOMContentLoaded', () => {
  const foot = $('#side .foot');
  if (foot && !$('#lang-btn')) {
    const lb = document.createElement('button');
    lb.type = 'button'; lb.className = 'iconbtn'; lb.id = 'lang-btn';
    lb.addEventListener('click', toggleLang);
    foot.insertBefore(lb, foot.firstChild);
  }
  if (foot && !$('#ar-note')) {
    const n = document.createElement('p');
    n.id = 'ar-note'; n.className = 'hint'; n.style.cssText = 'display:none;font-size:11px;margin:6px 8px 0';
    n.dir = 'rtl'; n.lang = 'ar'; n.textContent = 'واجهة عربية تجريبية - محتوى المواد يبقى بالإنجليزية.';
    foot.appendChild(n);
  }
  applyLang();
});

/* routes: add new ones and repoint existing registrations at the wrappers */
route(/^\/revision$/, viewRevision);
route(/^\/subject\/([a-z0-9]+)\/flashcards$/, viewFlashcards);
function patchRoute(src, fn) { for (const r of routes) { if (r[0].source === src) r[1] = fn; } }
patchRoute('^\\/$', viewDashboard);
patchRoute('^\\/subject\\/([a-z0-9]+)$', viewSubject);
patchRoute('^\\/subject\\/([a-z0-9]+)\\/q\\/([\\w-]+)$', viewSubject);
patchRoute('^\\/exam\\/([a-z0-9]+)$', viewExamConfig);

/* apply stored language after every render (repoint the live listener) */
const _render = render;
window.removeEventListener('hashchange', _render);
render = async function () { await _render(); await applyLang(); };
window.addEventListener('hashchange', render);

/* PWA service worker */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); });
}

/* ============ MUST Finals - part 6: SRS, planner, gamification, archive, global search ============ */

/* ---- spaced repetition (SM-2 lite, real scheduling in local store) ---- */
async function srsAll() { return await store.get('srs', {}); }
async function srsGrade(cardId, grade) { // grade: 0 again, 1 good, 2 easy
  const all = await srsAll();
  const c = all[cardId] || { ivl: 0, rep: 0 };
  const now = Date.now(), DAY = 86400000;
  if (grade === 0) { c.ivl = 0.5; c.rep = 0; }
  else if (grade === 1) { c.ivl = c.ivl ? c.ivl * 2 : 1; c.rep++; }
  else { c.ivl = c.ivl ? c.ivl * 3 : 3; c.rep++; }
  c.due = now + Math.round(c.ivl * DAY);
  c.last = grade;
  all[cardId] = c;
  await store.set('srs', all);
}
async function srsDue(key) {
  const all = await srsAll(), now = Date.now();
  return Object.keys(all).filter(id => all[id].due <= now && (!key || id.startsWith(key + ':')));
}
function fcId(s, kind, i) { return s + ':' + kind + ':' + i; }

/* extend flashcards with grading + due-review sessions */
const _viewFlashcards = viewFlashcards;
viewFlashcards = async function (key, dueOnly) {
  const s = subjByKey(key); if (!s) { nav('/'); return; }
  if (!FC || FC.key !== key || !!FC.dueOnly !== !!dueOnly) {
    let cards = [];
    subjMcqs(key).forEach((q, i) => cards.push({ id: fcId(key, 'm', i), front: q.q, back: OPT_LETTERS[q.a] + ' · ' + q.opts[q.a], tag: 'MCQ · ' + q.src }));
    subjWritten(key).forEach((w, i) => cards.push({ id: fcId(key, 'w', i), front: w.q, back: w.a, tag: 'Written · ' + w.src }));
    if (dueOnly) {
      const due = await srsDue(key);
      const set = new Set(due);
      cards = cards.filter(c => set.has(c.id));
      if (!cards.length) { toast('No cards due right now'); nav('/subject/' + key + '/flashcards'); return; }
      cards = shuffled(cards);
    } else cards = shuffled(cards);
    FC = { key, cards, i: 0, flipped: false, dueOnly: !!dueOnly };
  }
  const c = FC.cards[FC.i];
  const all = await srsAll();
  const st = all[c.id];
  const dueIn = st && st.due > Date.now() ? Math.max(1, Math.round((st.due - Date.now()) / 86400000)) : null;
  $('#app').innerHTML = `
  <section class="hero" style="padding:22px 24px">
    <div class="eyebrow">${esc(s.code)} · Flashcards${FC.dueOnly ? ' · Due review' : ''}</div>
    <h1 style="font-size:26px">${esc(s.full)}</h1>
    <p class="sub">Spaced repetition over the real ${esc(s.code)} bank. Card ${FC.i + 1} of ${FC.cards.length}.${dueIn ? ' Scheduled again in ~' + dueIn + ' day' + (dueIn > 1 ? 's' : '') + '.' : ''}</p>
  </section>
  <div class="fcwrap">
    <div class="fcard ${FC.flipped ? 'flipped' : ''}" id="fcard" role="button" tabindex="0" aria-label="Flashcard, activate to flip">
      <div class="fface ffront"><span class="pill pri">${esc(c.tag)}</span><p class="ftext">${esc(c.front)}</p><p class="hint">Click to flip</p></div>
      <div class="fface fback"><span class="pill good">Answer</span><p class="ftext">${esc(c.back)}</p><p class="hint">How well did you know it?</p></div>
    </div>
    ${FC.flipped ? `<div class="rowflex" style="justify-content:center;margin-top:14px" id="fc-grade">
      <button type="button" class="btn ghost" data-g="0">Again · &lt;1d</button>
      <button type="button" class="btn" data-g="1">Good · ${st && st.ivl ? Math.round(st.ivl * 2) : 1}d</button>
      <button type="button" class="btn" data-g="2">Easy · ${st && st.ivl ? Math.round(st.ivl * 3) : 3}d</button>
    </div>` : `<div class="rowflex" style="justify-content:center;margin-top:14px">
      <button type="button" class="btn ghost" id="fc-prev">${ic('al')} Previous</button>
      <button type="button" class="btn ghost" id="fc-shuffle">${ic('shuffle')} Shuffle</button>
      <button type="button" class="btn" id="fc-next">Flip ${ic('ar')}</button>
    </div>`}
  </div>`;
  const flip = () => { FC.flipped = !FC.flipped; viewFlashcards(key, dueOnly); };
  $('#fcard').addEventListener('click', flip);
  $('#fcard').addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); } });
  const next = () => { FC.i = (FC.i + 1) % FC.cards.length; FC.flipped = false; viewFlashcards(key, dueOnly); };
  const gr = $('#fc-grade');
  if (gr) gr.addEventListener('click', async e => {
    const b = e.target.closest('button[data-g]'); if (!b) return;
    await srsGrade(c.id, +b.dataset.g);
    next();
  });
  else {
    $('#fc-next').addEventListener('click', flip);
    $('#fc-prev').addEventListener('click', () => { FC.i = (FC.i - 1 + FC.cards.length) % FC.cards.length; FC.flipped = false; viewFlashcards(key, dueOnly); });
    $('#fc-shuffle').addEventListener('click', () => { FC.cards = shuffled(FC.cards); FC.i = 0; FC.flipped = false; viewFlashcards(key, dueOnly); });
  }
};

/* revision page: add due-review launcher at top */
const _viewRevision = viewRevision;
viewRevision = async function () {
  await _viewRevision();
  const due = await srsDue();
  const counts = {};
  due.forEach(id => { const k = id.split(':')[0]; counts[k] = (counts[k] || 0) + 1; });
  $('#app .hero').insertAdjacentHTML('afterend', `
  <div class="card" style="padding:16px;margin-bottom:14px">
    <div class="rowflex"><h3 style="margin:0;font-size:15px">${ic('cards')} Spaced repetition</h3><span class="sp" style="flex:1"></span>
    <span class="pill ${due.length ? 'warn' : 'good'}">${due.length} card${due.length === 1 ? '' : 's'} due</span></div>
    <p class="hint" style="margin:8px 0">Grade each card Again / Good / Easy and it comes back on its own schedule. Scheduled cards live in your browser only.</p>
    <div class="rowflex">${Object.keys(counts).map(k => `<a class="btn ghost sm" href="#/subject/${k}/flashcards/due">Review ${esc(subjByKey(k).code)} (${counts[k]})</a>`).join('') || '<span class="hint">Nothing due. Grade cards in any subject\'s flashcards to start scheduling.</span>'}</div>
  </div>`);
};

/* ---- smart study planner (user-entered dates, real tasks) ---- */
async function plan() { return Object.assign({ exams: {}, tasks: [] }, await store.get('plan', {})); }
async function savePlan(pl) { await store.set('plan', pl); }
function daysUntil(dateStr) { const d = new Date(dateStr + 'T00:00:00'); return Math.ceil((d - new Date(new Date().toDateString())) / 86400000); }

async function viewPlanner() {
  const pl = await plan();
  const p = await prog();
  const today = new Date(); const dow = (today.getDay() + 6) % 7; // Mon=0
  const weekStart = new Date(today); weekStart.setDate(today.getDate() - dow);
  const days = [...Array(7)].map((_, i) => { const d = new Date(weekStart); d.setDate(weekStart.getDate() + i); return d; });
  const iso = d => d.toISOString().slice(0, 10);

  const examCards = D.subjects.map(s => {
    const dstr = pl.exams[s.key];
    const du = dstr ? daysUntil(dstr) : null;
    return `<div class="card" style="padding:14px">
      <div class="rowflex"><b>${esc(s.code)}</b><span class="sp" style="flex:1"></span>
      ${du === null ? '' : (du < 0 ? '<span class="pill">passed</span>' : `<span class="pill ${du <= 3 ? 'bad' : du <= 7 ? 'warn' : 'pri'}">${du} day${du === 1 ? '' : 's'} left</span>`)}</div>
      <div class="rowflex" style="margin-top:8px"><input type="date" class="inp exam-date" data-k="${s.key}" value="${dstr || ''}" aria-label="${esc(s.code)} exam date"></div>
      <p class="hint" style="margin:6px 0 0;font-size:11px">You set this date. ${esc((D.exams.find(e => e.name.includes(s.code.replace('CS.', 'CS.'))) || {}).window || 'See dashboard for the general window')}</p>
    </div>`;
  }).join('');

  const taskRow = t => `<div class="act taskrow ${t.done ? 'done' : ''}">
    <button type="button" class="qtool task-check ${t.done ? 'on' : ''}" data-id="${t.id}" aria-label="Toggle done">${ic('check')}</button>
    <span style="flex:1">${esc(t.text)}</span>
    ${t.subj ? `<span class="pill">${esc(subjByKey(t.subj).code)}</span>` : ''}
    <button type="button" class="qtool task-del" data-id="${t.id}" aria-label="Delete task">${ic('x')}</button>
  </div>`;

  const cal = days.map(d => {
    const list = pl.tasks.filter(t => t.date === iso(d));
    const isToday = iso(d) === iso(today);
    return `<div class="calday ${isToday ? 'today' : ''}">
      <div class="calh">${d.toLocaleDateString('en-GB', { weekday: 'short' })} <b>${d.getDate()}</b></div>
      ${list.map(taskRow).join('') || '<div class="hint" style="font-size:11px">No tasks</div>'}
    </div>`;
  }).join('');

  const noDate = pl.tasks.filter(t => !t.date);
  const recs = [];
  for (const s of D.subjects) {
    const dstr = pl.exams[s.key];
    if (!dstr) continue;
    const du = daysUntil(dstr);
    if (du === null || du < 0) continue;
    const c = subjCompletion(p, s.key);
    const left = c.total - c.done;
    if (left > 0) recs.push(`${s.code}: ${left} lecture${left === 1 ? '' : 's'} left, ${du} day${du === 1 ? '' : 's'} - about ${Math.max(1, Math.ceil(left / Math.max(1, du)))} per day`);
  }

  $('#app').innerHTML = `
  <section class="hero" style="padding:22px 24px">
    <div class="eyebrow">Planner</div><h1 style="font-size:26px">Study planner</h1>
    <p class="sub">Enter your real exam dates when the university publishes them - nothing here invents dates for you.</p>
  </section>
  <div class="blk"><div class="blk-h"><h2>Exam countdown</h2><span class="sp"></span><span class="hint">Set each date yourself</span></div>
    <div class="grid g3">${examCards}</div></div>
  <div class="blk"><div class="blk-h"><h2>Add a study task</h2></div>
    <div class="card" style="padding:16px"><div class="rowflex">
      <input type="text" class="inp" id="task-text" placeholder="e.g. Revise Lecture 4 and do its MCQs" style="flex:2" aria-label="Task text">
      <select class="inp" id="task-subj" aria-label="Subject"><option value="">No subject</option>${D.subjects.map(s => `<option value="${s.key}">${esc(s.code)}</option>`).join('')}</select>
      <input type="date" class="inp" id="task-date" aria-label="Task date">
      <button type="button" class="btn" id="task-add">${ic('play')} Add</button>
    </div></div></div>
  <div class="blk"><div class="blk-h"><h2>This week</h2></div><div class="calweek">${cal}</div></div>
  ${noDate.length ? `<div class="blk"><div class="blk-h"><h2>Unscheduled</h2></div><div class="card" style="padding:8px 14px">${noDate.map(taskRow).join('')}</div></div>` : ''}
  ${recs.length ? `<div class="blk"><div class="blk-h"><h2>Revision recommendations</h2><span class="sp"></span><span class="hint">From your dates and real completion</span></div>
    <div class="card" style="padding:14px">${recs.map(r => `<div class="act">${ic('target')}<span>${esc(r)}</span></div>`).join('')}</div></div>` : ''}`;

  $$('.exam-date').forEach(inp => inp.addEventListener('change', async () => {
    const pl2 = await plan();
    if (inp.value) pl2.exams[inp.dataset.k] = inp.value; else delete pl2.exams[inp.dataset.k];
    await savePlan(pl2); viewPlanner();
  }));
  $('#task-add').addEventListener('click', async () => {
    const text = $('#task-text').value.trim(); if (!text) { toast('Write the task first'); return; }
    const pl2 = await plan();
    pl2.tasks.push({ id: 't' + Date.now(), text, subj: $('#task-subj').value || null, date: $('#task-date').value || null, done: false });
    await savePlan(pl2); viewPlanner();
  });
  $('#app').addEventListener('click', async e => {
    const chk = e.target.closest('.task-check');
    if (chk) { const pl2 = await plan(); const t = pl2.tasks.find(x => x.id === chk.dataset.id); if (t) { t.done = !t.done; await savePlan(pl2); viewPlanner(); } return; }
    const del = e.target.closest('.task-del');
    if (del) { const pl2 = await plan(); pl2.tasks = pl2.tasks.filter(x => x.id !== del.dataset.id); await savePlan(pl2); viewPlanner(); }
  });
}

/* ---- gamification: XP, streak, badges - all computed from real state ---- */
async function gameState() {
  const p = await prog();
  const days = await store.get('days', {});
  let att = 0, corr = 0;
  for (const k in p.mcq) { att += p.mcq[k].t; corr += p.mcq[k].c; }
  const lecs = Object.keys(p.completed).length;
  const exams = p.examHistory.length;
  const examCorr = p.examHistory.reduce((n, x) => n + x.correct, 0);
  const xp = corr * 2 + att + lecs * 5 + exams * 10 + examCorr * 2;
  // streak: consecutive days with activity ending today or yesterday
  let streak = 0;
  const d = new Date();
  if (!days[d.toISOString().slice(0, 10)]) d.setDate(d.getDate() - 1);
  while (days[d.toISOString().slice(0, 10)] > 0) { streak++; d.setDate(d.getDate() - 1); }
  // week answers
  const now = new Date(); const dow = (now.getDay() + 6) % 7;
  const ws = new Date(now); ws.setDate(now.getDate() - dow);
  let weekN = 0;
  for (let i = 0; i < 7; i++) { const dd = new Date(ws); dd.setDate(ws.getDate() + i); weekN += days[dd.toISOString().slice(0, 10)] || 0; }
  const badges = [
    { id: 'first', name: 'First steps', desc: 'Answer your first question', got: att >= 1 },
    { id: 'ten', name: 'Warming up', desc: 'Answer 25 questions', got: att >= 25 },
    { id: 'hundred', name: 'Centurion', desc: 'Answer 100 questions', got: att >= 100 },
    { id: 'sharp', name: 'Sharpshooter', desc: '80%+ accuracy over 20+ answers', got: att >= 20 && corr / att >= 0.8 },
    { id: 'exam', name: 'First mock', desc: 'Finish a mock exam', got: exams >= 1 },
    { id: 'perfect', name: 'Perfect paper', desc: 'Score 100% on a mock', got: p.examHistory.some(x => x.correct === x.count && x.count > 0) },
    { id: 'streak3', name: 'On fire', desc: '3-day study streak', got: streak >= 3 },
    { id: 'streak7', name: 'Unstoppable', desc: '7-day study streak', got: streak >= 7 },
    { id: 'half', name: 'Halfway there', desc: 'Finish half of all lectures', got: lecs >= Math.ceil(D.subjects.reduce((n, s) => n + s.lectures.filter(l => !l.missing).length, 0) / 2) },
  ];
  try { window.MFCurrentXP = xp; if (window.MFB && MFB.ready && MFB.user) MFB.lbSync(xp); } catch (e) {}
  return { xp, streak, weekN, badges, level: Math.floor(xp / 100) + 1 };
}
window.MFComputeXP = async function () { return (await gameState()).xp; };

async function gamifyCardHtml() {
  const on = await store.get('gamify', true);
  if (!on) return '';
  const g = await gameState();
  const goal = 40;
  return `<div class="blk"><div class="blk-h"><h2>${ic('flame')} Your momentum</h2><span class="sp"></span>
    <button type="button" class="qtool" id="gamify-off">Hide</button></div>
    <div class="grid g4">
      <div class="card stat"><span class="v">${g.xp}</span><span class="l">${ic('zap')} XP · level ${g.level}</span></div>
      <div class="card stat"><span class="v">${g.streak}</span><span class="l">${ic('flame')} day streak</span></div>
      <div class="card stat"><span class="v">${g.weekN}/${goal}</span><span class="l">${ic('target')} weekly challenge</span></div>
      <div class="card stat"><span class="v">${g.badges.filter(b => b.got).length}/${g.badges.length}</span><span class="l">${ic('cap')} badges</span></div>
    </div>
    <div class="badge-row">${g.badges.map(b => `<span class="badge ${b.got ? 'got' : ''}" title="${esc(b.desc)}">${b.got ? ic('check') : ic('x')} ${esc(b.name)}</span>`).join('')}</div>
    <p class="hint" style="margin-top:6px">XP, streaks and badges are computed only from your real practice on this device.</p></div>`;
}

/* record per-day counts for streaks (extends dailyBump) */
const _dailyBump = dailyBump;
dailyBump = async function () {
  await _dailyBump();
  const days = await store.get('days', {});
  const k = todayKey();
  days[k] = (days[k] || 0) + 1;
  await store.set('days', days);
};

/* ---- past-exam & assessment archive (real provenance only) ---- */
const PAST_PAPERS = {
  cs212: [
    { title: 'Fall 2024-25 written final', detail: 'University header dated 14 Jan 2025 · 60 marks · 2 hours · 2 pages', url: 'https://drive.google.com/file/d/19q6XVZHmDABVybQJBea48xSJ_JF-STry/view', kind: 'Official past final' },
    { title: 'Old Exams compilation (86 pages)', detail: 'Collected old exam questions for revision - not one standalone official final', url: 'https://drive.google.com/file/d/1drjDigx4bVYX6V46Aj2kFkYGRTDNTaDC/view', kind: 'Compilation / revision' },
  ],
  cs211: [
    { title: 'Fall 2025-26 practical (lab) final', detail: 'University header dated 14 Dec 2025 · 30 marks · 1 hour · 7 pages', url: 'https://drive.google.com/file/d/1tXMtQEcXwoykFt_EnV66dieXWuy4XwdN/view', kind: 'Official past final' },
  ],
  ece202: [],
};
async function viewPastExams() {
  $('#app').innerHTML = `
  <section class="hero" style="padding:22px 24px">
    <div class="eyebrow">Archive</div><h1 style="font-size:26px">Past exams &amp; assessment info</h1>
    <p class="sub">Everything verifiable about past assessments from your course pack and shared Drive folder. Papers below are historical: their dates are from past years and say nothing about your exam dates.</p>
    <div class="search" style="margin-top:12px">${ic('search')}<input id="pe-search" type="search" placeholder="Search assessment notes and related questions..." aria-label="Search the archive"></div>
  </section>
  ${D.subjects.map(s => `
  <div class="blk" data-pe="${esc((s.code + ' ' + s.full).toLowerCase())}">
    <div class="blk-h"><h2>${esc(s.code)} · ${esc(s.full)}</h2></div>
    <div class="card" style="padding:16px">
      <p class="cap">Real past papers (shared Drive folder)</p>
      ${(PAST_PAPERS[s.key] || []).length ? `<div class="acts">${PAST_PAPERS[s.key].map(pp => `<a class="act" href="${pp.url}" target="_blank" rel="noopener" data-pe="${esc((pp.title + ' ' + pp.kind).toLowerCase())}">${ic('file')}<span><b>${esc(pp.title)}</b><br><span class="hint" style="font-size:12px">${esc(pp.detail)}</span></span><span class="pill" style="margin-left:auto;flex:none">${esc(pp.kind)}</span></a>`).join('')}</div>` : `<p class="hint" data-pe="no standalone past final">No standalone past final found in the shared folder for this subject yet - the verified notes below still apply.</p>`}
      <p class="cap" style="margin-top:14px">Verified assessment notes (course pack, Fall 2026)</p>
      <ul class="notes" dir="rtl" lang="ar">${(s.examForm || []).map(x => `<li data-pe="${esc(x.toLowerCase())}">${esc(x)}</li>`).join('')}</ul>
      ${s.sectionsNote ? `<p class="hint" dir="rtl" lang="ar" data-pe="${esc(s.sectionsNote.toLowerCase())}">${esc(s.sectionsNote)}</p>` : ''}
      <div class="rowflex" style="margin-top:10px">
        <a class="btn ghost sm" href="#/subject/${s.key}">${ic('file')} Practice this subject's bank</a>
        <a class="btn ghost sm" href="#/exam/${s.key}">${ic('timer')} Mock exam from real questions</a>
      </div>
      <p class="hint" style="margin:8px 0 0;font-size:11px">Answer keys: only the solved items already inside the question bank and the solved quiz papers in the folder.</p>
    </div>
  </div>`).join('')}`;
  $('#pe-search').addEventListener('input', e => {
    const t = e.target.value.trim().toLowerCase();
    $$('#app [data-pe]').forEach(el => {
      if (el.classList.contains('blk')) { el.classList.toggle('hidden-by-search', t !== '' && !el.dataset.pe.includes(t) && ![...el.querySelectorAll('[data-pe]')].some(x => x.dataset.pe.includes(t))); }
      else el.classList.toggle('hidden-by-search', t !== '' && !el.dataset.pe.includes(t));
    });
  });
}

/* ---- global search across everything real ---- */
async function viewSearch(q) {
  q = (q || '').trim();
  const t = q.toLowerCase();
  const lecHits = [], qHits = [], noteHits = [];
  if (t) {
    for (const s of D.subjects) {
      s.lectures.forEach(l => { if (l.topic.toLowerCase().includes(t)) lecHits.push({ s, l }); });
      s.sections.forEach(x => { if (x.title.toLowerCase().includes(t)) lecHits.push({ s, l: { n: x.n, topic: s.seckind + ': ' + x.title } }); });
    }
    for (const qq of D.mcq) { if (qq.q.toLowerCase().includes(t)) qHits.push({ q: qq, type: 'MCQ' }); }
    for (const w of D.written) { if (w.q.toLowerCase().includes(t)) qHits.push({ q: w, type: 'Written' }); }
    for (const s of D.subjects) (s.examForm || []).forEach(x => { if (x.toLowerCase().includes(t)) noteHits.push({ s, x }); });
  }
  $('#app').innerHTML = `
  <section class="hero" style="padding:22px 24px">
    <div class="eyebrow">Search</div><h1 style="font-size:26px">Global search</h1>
    <div class="search" style="margin-top:12px">${ic('search')}<input id="gs" type="search" value="${esc(q)}" placeholder="Search lectures, questions and notes..." aria-label="Global search"></div>
  </section>
  ${t ? `
  <div class="blk"><div class="blk-h"><h2>Lectures &amp; sections</h2><span class="pill pri">${lecHits.length}</span></div>
    ${lecHits.slice(0, 12).map(h => `<a class="act rec" href="#/subject/${h.s.key}">${ic('book')}<span><b>${esc(h.s.code)}</b> · ${esc(h.l.topic)}</span></a>`).join('') || '<div class="empty">No matches</div>'}</div>
  <div class="blk"><div class="blk-h"><h2>Questions</h2><span class="pill pri">${qHits.length}</span></div>
    ${qHits.slice(0, 15).map(h => `<a class="act rec" href="#/subject/${h.q.subj}/q/${h.q.id}">${ic('file')}<span><b>${esc(subjByKey(h.q.subj).code)}</b> ${h.type} · ${esc(h.q.q.slice(0, 110))}${h.q.q.length > 110 ? '…' : ''}</span></a>`).join('') || '<div class="empty">No matches</div>'}</div>
  <div class="blk"><div class="blk-h"><h2>Assessment notes</h2><span class="pill pri">${noteHits.length}</span></div>
    ${noteHits.map(h => `<div class="act">${ic('clipb')}<span><b>${esc(h.s.code)}</b> · <span dir="rtl" lang="ar">${esc(h.x)}</span></span></div>`).join('') || '<div class="empty">No matches</div>'}</div>`
  : '<div class="empty" style="padding:30px">Type above to search the whole platform.</div>'}`;
  $('#gs').addEventListener('input', e => { const v = e.target.value; clearTimeout(window._gst); window._gst = setTimeout(() => { history.replaceState(null, '', '#/search/' + encodeURIComponent(v)); viewSearch(v); }, 250); });
}

/* dashboard: add global search box + gamification card */
const _viewDashboard2 = viewDashboard;
viewDashboard = async function () {
  await _viewDashboard2();
  const heroRow = $('#app .hero .rowflex');
  if (heroRow && !$('#gs-home')) {
    heroRow.insertAdjacentHTML('afterend', `<div class="search" style="margin-top:14px">${ic('search')}<input id="gs-home" type="search" placeholder="Search everything: lectures, questions, notes..." aria-label="Global search"></div>`);
    $('#gs-home').addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.value.trim()) nav('/search/' + encodeURIComponent(e.target.value.trim())); });
  }
  const gh = await gamifyCardHtml();
  if (gh) {
    $('#app').insertAdjacentHTML('beforeend', gh);
    const off = $('#gamify-off');
    if (off) off.addEventListener('click', async () => { await store.set('gamify', false); render(); });
  }
};

/* repoint existing registrations at p6 wrappers */
patchRoute('^\\/$', viewDashboard);
patchRoute('^\\/revision$', viewRevision);
patchRoute('^\\/subject\\/([a-z0-9]+)\\/flashcards$', viewFlashcards);
Object.assign(AR_NAV, { 'Planner': '\u0627\u0644\u0645\u062e\u0637\u0637', 'Past exams': '\u0627\u0645\u062a\u062d\u0627\u0646\u0627\u062a \u0633\u0627\u0628\u0642\u0629' });

/* routes */
route(/^\/planner$/, viewPlanner);
route(/^\/past-exams$/, viewPastExams);
route(/^\/search(?:\/(.*))?$/, (q) => viewSearch(decodeURIComponent(q || '')));
route(/^\/subject\/([a-z0-9]+)\/flashcards\/due$/, (k) => viewFlashcards(k, true));

/* sidebar links (added once) */
document.addEventListener('DOMContentLoaded', () => {
  const nav = $('.snav');
  if (nav && !nav.querySelector('a[href="#/planner"]')) {
    const anchor = nav.querySelector('a[href="#/revision"]') || nav.querySelector('a[href="#/bookmarks"]');
    anchor.insertAdjacentHTML('beforebegin', '<a href="#/planner">Planner</a><a href="#/past-exams">Past exams</a><a href="#/account" id="nav-account">Sign in</a><a href="#/admin" id="nav-admin" style="display:none">Admin</a>');
    if (window.MFB) MFB.paintNav();
  }
});

/* ============ MUST Finals - part 7: Boolean evaluator with steps, focus timer ============ */

/* Boolean expression -> RPN, with a real evaluation trace */
function boolTokens(expr) {
  const raw = expr.match(/\bAND\b|\bOR\b|\bNOT\b|\bXOR\b|[ABCDabcd()!~'&|^*.+]/gi) || [];
  const toks = raw.map(t => {
    const u = t.toUpperCase();
    if (u === 'AND' || t === '&' || t === '*' || t === '.') return { op: 'and' };
    if (u === 'OR' || t === '|' || t === '+') return { op: 'or' };
    if (u === 'XOR' || t === '^') return { op: 'xor' };
    if (u === 'NOT' || t === '!' || t === '~' || t === "'") return { op: 'not' };
    if (t === '(') return { op: 'lp' };
    if (t === ')') return { op: 'rp' };
    return { var: t.toUpperCase() };
  });
  // implicit AND between value/lp followed by value/not/lp
  const out = [];
  for (let i = 0; i < toks.length; i++) {
    const a = toks[i - 1], b = toks[i];
    if (a && (a.var || a.op === 'rp') && (b.var || b.op === 'lp' || b.op === 'not')) out.push({ op: 'and' });
    out.push(b);
  }
  return out;
}
function boolRPN(toks) {
  const prec = { or: 1, xor: 1, and: 2, not: 3 };
  const out = [], st = [];
  for (const t of toks) {
    if (t.var) out.push(t);
    else if (t.op === 'lp') st.push(t);
    else if (t.op === 'rp') { while (st.length && st[st.length - 1].op !== 'lp') out.push(st.pop()); st.pop(); }
    else { while (st.length && st[st.length - 1].op !== 'lp' && prec[st[st.length - 1].op] >= prec[t.op]) out.push(st.pop()); st.push(t); }
  }
  while (st.length) out.push(st.pop());
  return out;
}
function boolSteps(expr, env) {
  const rpn = boolRPN(boolTokens(expr));
  const st = [], steps = [];
  const fmt = t => t.var !== undefined ? t.var : t.op;
  for (const t of rpn) {
    if (t.var !== undefined) st.push({ v: env[t.var] ? 1 : 0, label: t.var });
    else if (t.op === 'not') { const a = st.pop(); const r = { v: a.v ? 0 : 1, label: 'NOT ' + a.label }; steps.push(`NOT ${a.label} = NOT ${a.v} = ${r.v}`); st.push(r); }
    else { const b = st.pop(), a = st.pop(); const sym = { and: 'AND', or: 'OR', xor: 'XOR' }[t.op];
      const r = { v: t.op === 'and' ? (a.v & b.v) : t.op === 'or' ? (a.v | b.v) : (a.v ^ b.v), label: `(${a.label} ${sym} ${b.label})` };
      steps.push(`${a.label} ${sym} ${b.label} = ${a.v} ${sym} ${b.v} = ${r.v}`); st.push(r); }
  }
  return { steps, result: st.length === 1 ? st[0].v : null };
}

/* add evaluator card into the truth table tool */
const _viewTools = viewTools;
viewTools = async function (which) {
  await _viewTools(which);
  if (which !== 'truthtable') return;
  const host = $('#app');
  if (!host || $('#be-card')) return;
  host.insertAdjacentHTML('beforeend', `
  <div class="card" id="be-card" style="padding:18px;margin-top:14px">
    <div class="blk-h"><h2>${ic('cpu')} Boolean evaluator with steps</h2><span class="sp"></span><span class="hint">Practice tool - not course material</span></div>
    <p class="hint">Enter an expression (variables A-D, AND OR NOT XOR, &, |, !, ^, parentheses), pick values, and see every real evaluation step.</p>
    <div class="rowflex"><input class="inp" id="be-expr" style="flex:2" placeholder="e.g. (A AND B) OR !C" value="(A AND B) OR !C" aria-label="Boolean expression"></div>
    <div class="rowflex" style="margin-top:8px" id="be-vars"></div>
    <div class="rowflex" style="margin-top:8px"><button type="button" class="btn" id="be-run">${ic('play')} Evaluate step by step</button></div>
    <div id="be-out" style="margin-top:10px"></div>
  </div>`);
  const paintVars = () => {
    const expr = $('#be-expr').value;
    const vars = [...new Set(boolTokens(expr).filter(t => t.var).map(t => t.var))].sort();
    $('#be-vars').innerHTML = vars.map(v => `<label class="hint">${v} = <select class="inp be-val" data-v="${v}"><option value="0">0</option><option value="1">1</option></select></label>`).join('') || '<span class="hint">No variables detected</span>';
  };
  $('#be-expr').addEventListener('input', paintVars);
  paintVars();
  $('#be-run').addEventListener('click', () => {
    const env = {};
    $$('.be-val').forEach(s => env[s.dataset.v] = s.value === '1' ? 1 : 0);
    try {
      const { steps, result } = boolSteps($('#be-expr').value, env);
      if (result === null) { $('#be-out').innerHTML = '<p class="hint">Could not parse the expression.</p>'; return; }
      $('#be-out').innerHTML = `<ol class="notes">${steps.map(s => `<li><code>${esc(s)}</code></li>`).join('')}</ol>
        <p style="font-weight:800;font-size:16px">Result: <span class="pill ${result ? 'good' : 'bad'}">${result}</span></p>`;
    } catch (e) { $('#be-out').innerHTML = '<p class="hint">Could not parse the expression.</p>'; }
  });
};

/* ---- focus timer (real stopwatch/countdown, logs completed sessions) ---- */
let FT = null;
function ensureFocusWidget() {
  if ($('#focus-widget')) return;
  const w = document.createElement('div');
  w.id = 'focus-widget';
  w.innerHTML = `<button type="button" class="qtool" id="fw-toggle" aria-label="Focus timer">${ic('timer')}<span id="fw-label">Focus</span></button>
    <div id="fw-panel" style="display:none">
      <div class="rowflex">${[15, 25, 50].map(m => `<button type="button" class="qtool fw-min" data-m="${m}">${m}m</button>`).join('')}</div>
      <div id="fw-clock">--:--</div>
      <div class="rowflex">
        <button type="button" class="btn sm" id="fw-start">Start</button>
        <button type="button" class="btn ghost sm" id="fw-reset">Reset</button>
      </div>
    </div>`;
  document.body.appendChild(w);
  const fmt = s => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
  const paint = () => {
    $('#fw-clock').textContent = FT && FT.left != null ? fmt(FT.left) : '--:--';
    $('#fw-label').textContent = FT && FT.running ? fmt(FT.left) : 'Focus';
    $('#fw-start').textContent = FT && FT.running ? 'Pause' : 'Start';
    document.body.classList.toggle('focusing', !!(FT && FT.running));
  };
  const tick = async () => {
    if (!FT || !FT.running) return;
    FT.left--;
    if (FT.left <= 0) {
      FT.running = false; FT.left = FT.mins * 60;
      clearInterval(FT.t); FT.t = null;
      await logAct(`Focus session: ${FT.mins} minutes`);
      toast('Focus session done - logged to your activity');
    }
    paint();
  };
  $('#fw-toggle').addEventListener('click', () => { const p = $('#fw-panel'); p.style.display = p.style.display === 'none' ? 'block' : 'none'; });
  $$('.fw-min').forEach(b => b.addEventListener('click', () => { FT = { mins: +b.dataset.m, left: +b.dataset.m * 60, running: false, t: null }; paint(); }));
  $('#fw-start').addEventListener('click', () => {
    if (!FT) FT = { mins: 25, left: 25 * 60, running: false, t: null };
    FT.running = !FT.running;
    if (FT.running && !FT.t) FT.t = setInterval(tick, 1000);
    if (!FT.running && FT.t) { clearInterval(FT.t); FT.t = null; }
    paint();
  });
  $('#fw-reset').addEventListener('click', () => { if (FT) { FT.running = false; if (FT.t) clearInterval(FT.t); FT.t = null; FT.left = FT.mins * 60; paint(); } });
}
document.addEventListener('DOMContentLoaded', ensureFocusWidget);

/* repoint tools route at the evaluator wrapper */
patchRoute('^\\/tools(?:\\/([a-z]+))?$', viewTools);

/* MUST Finals study setup, schedule generation, reminders and grounded tutor. */
'use strict';
(() => {
  const $s = (q, root = document) => root.querySelector(q);
  const escs = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
  const allSubjects = () => (window.DATA && DATA.subjects) || [];
  const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; };
  const dateObj = value => { const [y,m,d] = String(value || '').split('-').map(Number); return new Date(y, (m || 1)-1, d || 1); };
  const addDays = (date, n) => { const d = new Date(date); d.setDate(d.getDate()+n); return d; };
  const isoDate = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  const validDay = v => { if (!/^\d{4}-\d{2}-\d{2}$/.test(v)) return false; const d=dateObj(v); return !Number.isNaN(d.getTime()) && isoDate(d)===v; };
  const toMin = t => { const [h,m] = String(t || '').split(':').map(Number); return Number.isFinite(h) && Number.isFinite(m) ? h*60+m : 0; };
  const toTime = m => `${String(Math.floor(m/60)%24).padStart(2,'0')}:${String(m%60).padStart(2,'0')}`;
  const keySubject = key => allSubjects().find(s => s.key === key);
  const setupKey = () => 'studySetup:' + (MFB.user?.id || 'guest');
  const scheduleKey = () => 'studySessions:' + (MFB.user?.id || 'guest');
  const setupGet = async () => await store.get(setupKey(), null);

  function setupView() {
    const currentPromise = setupGet();
    currentPromise.then(async setup => {
      if (!MFB.user) { nav('/account'); return; }
      setup = setup || {};
      const selected = Array.isArray(setup.subjects) ? setup.subjects : allSubjects().map(s => s.key);
      const pl = await plan();
      const choices = allSubjects().map(s => `<label class="st-course"><input type="checkbox" name="st-course" value="${escs(s.key)}" ${selected.includes(s.key)?'checked':''}><span><b>${escs(s.code)}</b><small>${escs(s.full)}</small></span></label>`).join('');
      $('#app').innerHTML = `<section class="hero st-hero"><div class="eyebrow">MUST FINALS · YOUR STUDY PROFILE</div><h1>Make your study plan fit you</h1><p class="sub">Choose your courses and study routine. You can change these settings any time.</p></section>
        <form class="card st-setup" id="st-setup-form" novalidate>
          <section><h2>Your courses</h2><p class="hint">Pick at least one course to get relevant recommendations and tutoring.</p><div class="st-course-grid">${choices}</div></section>
          <section><h2>Exam dates</h2><p class="hint">Optional. Only enter dates confirmed by your faculty. Dates are used to prioritize study sessions.</p><div class="st-exams">${allSubjects().map(s=>`<label>${escs(s.code)}<input class="inp" type="date" data-exam="${escs(s.key)}" value="${escs(pl.exams[s.key] || setup.exams?.[s.key] || '')}"></label>`).join('')}</div></section>
          <section><h2>Time available</h2><div class="st-routine"><label>Daily study target<select class="inp" id="st-minutes"><option value="45">45 minutes</option><option value="60">1 hour</option><option value="90">1.5 hours</option><option value="120">2 hours</option><option value="180">3 hours</option></select></label><label>Preferred start time<input class="inp" id="st-start" type="time" value="${escs(setup.startTime || '17:00')}"></label></div></section>
          <section><h2>Optional reminder</h2><div class="st-reminder"><label class="st-check"><input type="checkbox" id="st-reminder" ${setup.reminderEnabled?'checked':''}> Remind me when I open the site around my chosen study time</label><label>Reminder time<input class="inp" type="time" id="st-reminder-time" value="${escs(setup.reminderTime || setup.startTime || '17:00')}"></label></div><p class="hint">Reminders are private to your account and appear while this site is open. Browser notifications are optional and require your permission.</p></section>
          <p class="st-error" id="st-error" role="alert"></p><div class="rowflex"><button class="btn" type="submit">Save preferences &amp; continue</button><a class="btn ghost" href="#/planner">Open planner</a></div>
        </form>`;
      $('#st-minutes').value = String([45,60,90,120,180].includes(+setup.dailyMinutes)?setup.dailyMinutes:60);
      $('#st-setup-form').addEventListener('submit', async e => {
        e.preventDefault();
        const subjects = [...document.querySelectorAll('[name="st-course"]:checked')].map(x=>x.value).filter(k=>keySubject(k));
        const err = $('#st-error');
        if (!subjects.length) { err.textContent = 'Choose at least one course.'; return; }
        const exams = {};
        document.querySelectorAll('[data-exam]').forEach(input => { if (input.value && validDay(input.value)) exams[input.dataset.exam] = input.value; });
        const startTime = $('#st-start').value || '17:00';
        const reminderTime = $('#st-reminder-time').value || startTime;
        let reminderEnabled = $('#st-reminder').checked;
        if (reminderEnabled && 'Notification' in window && Notification.permission === 'default') {
          try { await Notification.requestPermission(); } catch (_) {}
        }
        const prefs = { userId: MFB.user.id, completedAt: Date.now(), subjects, exams, dailyMinutes: +$('#st-minutes').value, startTime, reminderEnabled, reminderTime };
        await store.set(setupKey(), prefs);
        const updated = await plan();
        allSubjects().forEach(s => delete updated.exams[s.key]);
        updated.exams = Object.assign({}, updated.exams, exams);
        await savePlan(updated);
        const returnTo = (() => { try { return sessionStorage.getItem('mf.setup.returnTo'); } catch (_) { return null; } })();
        try { sessionStorage.removeItem('mf.setup.returnTo'); } catch (_) {}
        toast('Study preferences saved');
        if (returnTo && returnTo.startsWith('/') && returnTo !== '/setup' && returnTo !== '/account') nav(returnTo);
        else nav(setup?.completedAt ? '/planner' : '/');
      });
      await applyLang();
    });
  }

  route(/^\/setup$/, setupView);
  const renderBeforeStudySetup = render;
  render = async function () {
    if (!MFB.ready && !MFB._authFailed) await MFB.init();
    if (MFB.ready && MFB.user) {
      const h = location.hash.slice(1) || '/';
      const prefs = await setupGet();
      if (!prefs || !prefs.completedAt) {
        if (h !== '/setup') {
          try { sessionStorage.setItem('mf.setup.returnTo', h === '/account' ? '/' : h); } catch (_) {}
        }
        document.body.classList.remove('auth-pending','auth-gate','auth-error');
        setupView();
        return;
      }
      if (h === '/setup') { document.body.classList.remove('auth-pending','auth-gate','auth-error'); setupView(); return; }
    }
    await renderBeforeStudySetup();
  };
  window.render = render;

  const accountView = MFB.viewAccount;
  MFB.viewAccount = async function () {
    await accountView();
    if (!MFB.user || !$('#app .grid')) return;
    const profile = $('#app .grid > .card:last-child');
    if (profile && !$('#account-study-setup')) profile.insertAdjacentHTML('afterbegin', `<div class="st-account-link"><b>Study preferences</b><span class="hint">Update your courses, exam dates and reminders.</span><a class="btn ghost sm" id="account-study-setup" href="#/setup">Edit study setup</a></div>`);
  };

  async function candidateData(prefs, pl, p) {
    const chosen = new Set(prefs.subjects || allSubjects().map(s=>s.key));
    const tasks = (pl.tasks || []).filter(t=>!t.done).map(t=>({ id:'task:'+t.id, title:t.text, subj:t.subj, date:t.date, kind:'task', source:'#/planner', score:25 }));
    const assignments = (await store.get('x.assignments', []) || []).filter(a=>!['completed','submitted'].includes(String(a.status).toLowerCase())).map((a,i)=>({ id:'assignment:'+String(a.id||a.created||i), title:a.title, subj:(a.subject && (keySubject(a.subject)?.key || a.subject)) || null, date:a.due, kind:'assignment', source:'#/workspace/assignments', score:30 }));
    const list = [...tasks, ...assignments];
    const now = dateObj(today());
    for (const s of allSubjects()) {
      if (!chosen.has(s.key)) continue;
      const exam = pl.exams[s.key];
      const days = exam ? Math.round((dateObj(exam)-now)/86400000) : null;
      const completion = subjCompletion(p,s.key);
      const accuracy = subjAccuracy(p,s.key);
      const urgency = days !== null && days >= 0 ? Math.max(0, 48 - days*2.2) : 0;
      const weak = accuracy && accuracy.t >= 5 ? Math.max(0,(75-accuracy.pct)*0.65) : 0;
      for (const lec of s.lectures.filter(l=>!l.missing && !p.completed[s.key+'-lec'+l.n])) {
        list.push({id:'lecture:'+s.key+':'+lec.n,title:`Review Lecture ${lec.n}: ${lec.topic}`,subj:s.key,kind:'lecture',source:'#/subject/'+s.key,score:18+urgency+weak+Math.max(0,completion.total-completion.done)});
      }
      list.push({id:'practice:'+s.key,title:`Practice questions for ${s.code}`,subj:s.key,kind:'practice',source:'#/subject/'+s.key,score:12+urgency+weak});
    }
    return list;
  }
  function whyFor(item, prefs, pl) {
    const s = keySubject(item.subj);
    if (item.kind === 'task' || item.kind === 'assignment') {
      if (item.date) { const days = Math.round((dateObj(item.date)-dateObj(today()))/86400000); return days < 0 ? `Overdue by ${Math.abs(days)} day${days===-1?'':'s'}.` : days === 0 ? 'Due today.' : `Due in ${days} day${days===1?'':'s'}.`; }
      return 'You marked this as unfinished.';
    }
    const exam = item.subj && pl.exams[item.subj];
    if (exam) { const days = Math.round((dateObj(exam)-dateObj(today()))/86400000); if (days >= 0) return `Exam in ${days} day${days===1?'':'s'}; keep this course moving.`; }
    if (item.kind === 'lecture') return 'This lecture is still unmarked in your course progress.';
    return 'Practice helps check what you remember before the exam.';
  }
  async function makeSchedule() {
    const prefs = await setupGet();
    if (!prefs || !prefs.completedAt) { nav('/setup'); return; }
    const pl = await plan(), p = await prog();
    const candidates = await candidateData(prefs,pl,p);
    const timetable = await store.get('x.timetable',[]) || [];
    const sessions = [];
    const start = toMin(prefs.startTime || '17:00');
    const perDay = Math.max(1,Math.min(4,Math.floor((+prefs.dailyMinutes||60)/45)));
    const counts = {};
    for (let di=0; di<7; di++) {
      const date = addDays(dateObj(today()),di), dateText=isoDate(date), dow=date.getDay();
      let placed=0, cursor=start;
      for (let slot=0; slot<perDay && candidates.length; slot++) {
        let found=null, available=false;
        for (let tries=0; tries<16; tries++) {
          const end=cursor+45;
          const clash=(timetable||[]).some(e=>Number(e.day)===dow && toMin(e.start)<end && toMin(e.end)>cursor);
          const sessionClash=sessions.some(s=>s.date===dateText && toMin(s.start)<end && toMin(s.start)+s.duration>cursor);
          if (!clash && !sessionClash && end<=22*60) { available=true; break; }
          cursor+=60;
        }
        if (!available || cursor+45>22*60) break;
        const ranked=candidates.map((c,i)=>({c,i,score:c.score-(counts[c.subj]||0)*8-(c.date && validDay(c.date) ? Math.max(0,Math.round((dateObj(c.date)-date)/86400000))*2 : 0)})).sort((a,b)=>b.score-a.score);
        if (!ranked.length) break;
        found=ranked[0];
        const c=found.c, sub=keySubject(c.subj);
        sessions.push({id:'ss'+Date.now().toString(36)+sessions.length,date:dateText,start:toTime(cursor),duration:45,title:c.title,subj:c.subj||null,kind:c.kind,source:c.source,reason:whyFor(c,prefs,pl),done:false});
        if (c.subj) counts[c.subj]=(counts[c.subj]||0)+1;
        candidates.splice(found.i,1); placed++; cursor+=60;
      }
    }
    await store.set(scheduleKey(),{ownerId:MFB.user.id,generatedAt:Date.now(),sessions});
    plannerMonth=new Date(new Date().getFullYear(),new Date().getMonth(),1);
    return placedCount(sessions);
  }
  const placedCount = items => items.length;
  let plannerCalendarMode='week';
  let plannerMonth=new Date(new Date().getFullYear(),new Date().getMonth(),1);

  async function scheduleUi() {
    const data=await store.get(scheduleKey(),{sessions:[]}), sessions=Array.isArray(data.sessions)?data.sessions:[];
    const now=today(), todayDate=dateObj(now), weekStart=addDays(todayDate,-((todayDate.getDay()+6)%7)), weekEnd=isoDate(addDays(weekStart,6));
    const week=sessions.filter(s=>s.date>=now && s.date<=weekEnd), completed=week.filter(s=>s.done).length, pct=week.length?Math.round(completed/week.length*100):0;
    const prefs=await setupGet();
    const days=plannerCalendarMode==='week'
      ? Array.from({length:7},(_,i)=>addDays(weekStart,i))
      : (()=>{const first=new Date(plannerMonth.getFullYear(),plannerMonth.getMonth(),1),offset=first.getDay(),n=new Date(plannerMonth.getFullYear(),plannerMonth.getMonth()+1,0).getDate(),cells=Math.ceil((offset+n)/7)*7;return Array.from({length:cells},(_,i)=>addDays(first,i-offset));})();
    const monthLabel=plannerMonth.toLocaleDateString('en-US',{month:'long',year:'numeric'});
    const calendarHasSessions=days.some(d=>sessions.some(s=>s.date===isoDate(d)));
    const cards=days.map(d=>{
      const dt=isoDate(d), items=sessions.filter(s=>s.date===dt), outMonth=plannerCalendarMode==='month'&&d.getMonth()!==plannerMonth.getMonth();
      const dayItems=items.map(s=>plannerCalendarMode==='month'
        ? `<article class="st-session st-month-session ${s.done?'is-done':''}" draggable="true" data-session="${escs(s.id)}"><div class="st-session-title"><b>${escs(s.title)}</b><small>${escs(s.start)} · ${escs(keySubject(s.subj)?.code||s.subj||'Study')}</small></div><div class="st-session-controls"><button type="button" class="qtool st-done" data-done-id="${escs(s.id)}" aria-label="${s.done?'Mark pending':'Mark complete'}">${s.done?'↺':'✓'}</button><button type="button" class="qtool st-report" data-report-id="${escs(s.id)}">Report</button><button type="button" class="qtool st-delete" data-delete-id="${escs(s.id)}" aria-label="Delete session">×</button></div></article>`
        : `<article class="st-session ${s.done?'is-done':''}" draggable="true" data-session="${escs(s.id)}"><div class="st-session-title"><b>${escs(s.title)}</b><small>${escs(s.start)} · ${s.duration} min${s.subj?' · '+escs(keySubject(s.subj)?.code||s.subj):''}</small></div><p>${escs(s.reason||'Personalized from your study profile.')}</p><div class="st-session-controls"><label class="sr-only" for="dt-${escs(s.id)}">Reschedule date</label><input id="dt-${escs(s.id)}" class="inp st-date" type="date" data-date-id="${escs(s.id)}" value="${escs(s.date)}"><label class="sr-only" for="tm-${escs(s.id)}">Session time</label><input id="tm-${escs(s.id)}" class="inp st-time" type="time" data-time-id="${escs(s.id)}" value="${escs(s.start)}"><button type="button" class="qtool st-done" data-done-id="${escs(s.id)}" aria-label="${s.done?'Mark pending':'Mark complete'}">${s.done?'↺':'✓'}</button><button type="button" class="qtool st-report" data-report-id="${escs(s.id)}">Report</button><button type="button" class="qtool st-delete" data-delete-id="${escs(s.id)}" aria-label="Delete session">×</button></div></article>`).join('');
      return `<div class="st-day ${outMonth?'out-month':''}" data-drop-date="${dt}"><div class="st-day-head"><b>${d.toLocaleDateString('en-US',{weekday:'short'})}</b><span>${d.getDate()}</span></div>${dayItems||'<p class="hint">Drop a study session here.</p>'}</div>`;
    }).join('');
    const host=$('#app'); if(!host || !host.querySelector('.hero')) return;
    if($('#st-schedule')) $('#st-schedule').remove();
    const block=document.createElement('section'); block.id='st-schedule'; block.className='blk st-plan-block';
    block.innerHTML=`<div class="blk-h"><h2>AI Smart Study Plan</h2><span class="sp"></span><div class="st-calendar-tools"><button class="btn ghost sm ${plannerCalendarMode==='week'?'on':''}" data-calendar-view="week">Week</button><button class="btn ghost sm ${plannerCalendarMode==='month'?'on':''}" data-calendar-view="month">Month</button>${plannerCalendarMode==='month'?`<button class="qtool" data-month-shift="-1" aria-label="Previous month">‹</button><b class="st-month-label">${monthLabel}</b><button class="qtool" data-month-shift="1" aria-label="Next month">›</button>`:''}</div><a class="btn ghost sm" href="#/setup">Edit preferences</a><button class="btn sm" id="st-generate">${data.generatedAt?'Regenerate week':'Generate my week'}</button></div><div class="st-progress"><div><b>${completed} / ${week.length}</b><span>sessions completed this week</span></div><div class="st-bar"><i style="width:${pct}%"></i></div><span>${pct}%</span><p class="hint">${prefs ? `Built around ${prefs.dailyMinutes} min/day, your exam dates and course progress.` : 'Finish your study setup to personalize the plan.'} Drag a session to another day, or edit its date and time.</p></div><div class="st-week ${plannerCalendarMode==='month'?'month-mode':''}">${cards}</div>${calendarHasSessions?'<p class="hint">The weekly completion count updates as you mark sessions done.</p>':'<div class="st-empty"><b>No scheduled study sessions yet</b><p>Generate a schedule from upcoming exams, unfinished lectures and due tasks.</p></div>'}`;
    const hero=host.querySelector('.hero'); hero.insertAdjacentElement('afterend',block);
    $s('#st-generate',block).addEventListener('click',async()=>{const n=await makeSchedule();if(n===undefined)return;toast(`${n} study sessions scheduled`);await viewPlanner();});
    const saveSession=async(id,patch)=>{const d=await store.get(scheduleKey(),{sessions:[]});const item=(d.sessions||[]).find(x=>x.id===id);if(item)Object.assign(item,patch);await store.set(scheduleKey(),d);await viewPlanner();};
    block.addEventListener('click',async e=>{
      const view=e.target.closest('[data-calendar-view]');if(view){plannerCalendarMode=view.dataset.calendarView;viewPlanner();return;}
      const shift=e.target.closest('[data-month-shift]');if(shift){plannerMonth=new Date(plannerMonth.getFullYear(),plannerMonth.getMonth()+Number(shift.dataset.monthShift),1);viewPlanner();return;}
      const done=e.target.closest('[data-done-id]');if(done){const item=sessions.find(x=>x.id===done.dataset.doneId);if(item){const was=item.done;await saveSession(item.id,{done:!was});if(!was)studyNotify('Study session complete',item.title,'#/planner');}return;}
      const del=e.target.closest('[data-delete-id]');if(del){const d=await store.get(scheduleKey(),{sessions:[]});d.sessions=d.sessions.filter(x=>x.id!==del.dataset.deleteId);await store.set(scheduleKey(),d);viewPlanner();return;}
      const report=e.target.closest('[data-report-id]');if(report){await reportContent('study-material:'+report.dataset.reportId,'Study plan session: '+(sessions.find(x=>x.id===report.dataset.reportId)?.title||'Session'));return;}
    });
    const conflict=async(id,date,start,duration)=>{const day=dateObj(date).getDay(),end=toMin(start)+duration,events=await store.get('x.timetable',[])||[];if(events.some(t=>Number(t.day)===day&&toMin(t.start)<end&&toMin(t.end)>toMin(start)))return true;return sessions.some(x=>x.id!==id&&x.date===date&&toMin(x.start)<end&&toMin(x.start)+x.duration>toMin(start));};
    block.addEventListener('change',async e=>{const date=e.target.closest('[data-date-id]'),time=e.target.closest('[data-time-id]');if(date&&validDay(date.value)){const item=sessions.find(x=>x.id===date.dataset.dateId);if(item&&await conflict(item.id,date.value,item.start,item.duration)){toast('That date overlaps another scheduled activity');viewPlanner();return;}await saveSession(date.dataset.dateId,{date:date.value});}if(time&&/^([01]\d|2[0-3]):[0-5]\d$/.test(time.value)){const item=sessions.find(x=>x.id===time.dataset.timeId);if(item&&await conflict(item.id,item.date,time.value,item.duration)){toast('That time overlaps another scheduled activity');viewPlanner();return;}await saveSession(time.dataset.timeId,{start:time.value});}});
    let dragged=null;
    block.addEventListener('dragstart',e=>{const card=e.target.closest('[data-session]');if(card){dragged=card.dataset.session;e.dataTransfer.setData('text/plain',dragged);e.dataTransfer.effectAllowed='move';}});
    block.addEventListener('dragover',e=>{if(e.target.closest('[data-drop-date]')){e.preventDefault();e.dataTransfer.dropEffect='move';}});
    block.addEventListener('drop',async e=>{const day=e.target.closest('[data-drop-date]');if(!day)return;e.preventDefault();const id=e.dataTransfer.getData('text/plain')||dragged;if(id){const item=sessions.find(x=>x.id===id);if(item){if(await conflict(id,day.dataset.dropDate,item.start,item.duration)){toast('That day overlaps another scheduled activity');return;}await saveSession(id,{date:day.dataset.dropDate});}}});
  }
  const plannerBase=viewPlanner;
  viewPlanner=async function(){await plannerBase();await scheduleUi();await applyLang();};

  const recBase=recommendations;
  recommendations=async function(p){
    const base=await recBase(p), prefs=await setupGet(); if(!prefs)return base;
    const pl=await plan(), urgent=[];
    const pending=[...(pl.tasks||[]).filter(t=>!t.done).map(t=>({...t,_kind:'task'})),...(await store.get('x.assignments',[])||[]).filter(a=>!['completed','submitted'].includes(String(a.status).toLowerCase())).map(a=>({...a,_kind:'assignment'}))];
    pending.forEach(t=>{if(!t.due&&!t.date)return;const due=t.due||t.date;if(!validDay(due))return;const days=Math.round((dateObj(due)-dateObj(today()))/86400000);if(days<=3)urgent.push({icon:'alert',text:`${t.title||t.text} ${days<0?'is overdue':days===0?'is due today':`is due in ${days} day${days===1?'':'s'}`}. ${t._kind==='task'?'Open your planner to finish it.':'Open assignments to review it.'}`,act:t._kind==='task'?'#/planner':'#/workspace/assignments',score:100-days*4});});
    for(const s of allSubjects()){const date=pl.exams[s.key];if(!date||!prefs.subjects.includes(s.key))continue;const days=Math.round((dateObj(date)-dateObj(today()))/86400000);if(days<0||days>14)continue;const c=subjCompletion(p,s.key);urgent.push({icon:'timer',text:`${s.code} exam is in ${days} day${days===1?'':'s'}; ${c.total-c.done} lecture${c.total-c.done===1?'':'s'} remain. Prioritize its unfinished material.`,act:'#/subject/'+s.key,score:65-days});}
    urgent.sort((a,b)=>b.score-a.score);
    const selected=urgent.slice(0,2).concat(base).filter((v,i,a)=>a.findIndex(x=>x.act===v.act&&x.text===v.text)===i).slice(0,3);
    return selected;
  };

  const dashboardBeforeStudyPlan=viewDashboard;
  viewDashboard=async function(){
    await dashboardBeforeStudyPlan();
    const host=$('#dz-goal');if(!host)return;
    const data=await store.get(scheduleKey(),{sessions:[]}), todaySessions=(data.sessions||[]).filter(s=>s.date===today()), done=todaySessions.filter(s=>s.done).length, pct=todaySessions.length?Math.round(done/todaySessions.length*100):0;
    const next=todaySessions.find(s=>!s.done);
    host.insertAdjacentHTML('beforeend',`<div class="card st-today-card"><div class="st-session-title"><b>Today's study plan</b><small>${done} / ${todaySessions.length} sessions complete · ${pct}%</small></div><div class="st-bar"><i style="width:${pct}%"></i></div><p class="hint">${next?`Next: ${escs(next.start)} · ${escs(next.title)}`:'Add study dates and generate a weekly plan to see your next step.'}</p><a class="btn ghost sm" href="#/planner">Open study planner</a></div>`);
  };

  function tokenize(text){return String(text||'').toLowerCase().split(/[^a-z0-9]+/).filter(x=>x.length>2);}
  function retrieveCourseMaterial(query,subjectKey){
    const words=[...new Set(tokenize(query))];if(!words.length)return [];
    const bank=(window.DATA?.mcq||[]),written=(window.DATA?.written||[]),hits=[];
    const useSubject=subjectKey&&keySubject(subjectKey)?subjectKey:null;
    for(const q of bank){if(useSubject&&q.subj!==useSubject)continue;const text=[q.q,q.src,...(q.opts||[]),q.exp||''].join(' ');const score=words.reduce((n,w)=>n+(text.toLowerCase().includes(w)?1:0),0);if(score)hits.push({score,subj:q.subj,source:q.src||'Question bank',kind:'MCQ',question:q.q,answer:`Correct answer: ${q.opts?.[q.a]||''}${q.exp?'\n'+q.exp:''}`,url:'#/subject/'+q.subj});}
    for(const q of written){if(useSubject&&q.subj!==useSubject)continue;const text=[q.q,q.src,q.a].join(' ');const score=words.reduce((n,w)=>n+(text.toLowerCase().includes(w)?1:0),0);if(score)hits.push({score,subj:q.subj,source:q.src||'Question bank',kind:'Written question',question:q.q,answer:q.a||'',url:'#/subject/'+q.subj});}
    for(const s of allSubjects()){if(useSubject&&s.key!==useSubject)continue;for(const l of s.lectures||[]){const score=words.reduce((n,w)=>n+((s.code+' '+l.topic).toLowerCase().includes(w)?1:0),0);if(score)hits.push({score,subj:s.key,source:`Lecture ${l.n}: ${l.topic}`,kind:'Lecture',question:'',answer:'Open the lecture material to review this topic.',url:l.link});}}
    return hits.sort((a,b)=>b.score-a.score).slice(0,4);
  }
  async function reportContent(target,description){
    if(!MFB.user||!MFB.sendReport){toast('Sign in to send a content report');return;}
    const note=prompt('What is incorrect or needs review?', '');if(note===null)return;
    const result=await MFB.sendReport(target,`${description}\n\nReported issue: ${String(note||'No details added').slice(0,1000)}`);
    toast(result?.error?'Could not send report: '+result.error.message:'Report sent to the content review queue.');
  }
  async function localTutorReply(input,subjectKey){
    const hits=retrieveCourseMaterial(input,subjectKey);if(!hits.length)return {answer:'I could not find a direct match in the indexed question bank or lecture titles. Try the PDF chat for searchable lecture pages, or open your course materials below. I will not invent a course answer.',hits};
    const first=hits.find(h=>h.answer&&h.kind!=='Lecture')||hits[0];
    return {answer:first.kind==='Lecture'?`I found a related lecture topic: ${first.source}. Open the linked material to check the explanation; the indexed bank does not contain a direct answer for this wording.`:`A related verified ${first.kind.toLowerCase()} in the course bank is:\n\n${first.question}\n\n${first.answer}\n\nThis is a source-based match, not a generated explanation.`,hits};
  }
  async function studyTutor(){
    const prefs=await setupGet(), first=(prefs?.subjects||[])[0]||allSubjects()[0]?.key;
    const options=allSubjects().filter(s=>!prefs?.subjects?.length||prefs.subjects.includes(s.key)).map(s=>`<option value="${escs(s.key)}" ${s.key===first?'selected':''}>${escs(s.code)} · ${escs(s.full)}</option>`).join('');
    $('#app').innerHTML=`<section class="hero"><div class="eyebrow">COURSE-GROUNDED STUDY ASSISTANT</div><h1>AI Study Tutor</h1><p class="sub">Ask about your course. Answers include references to the verified material we can find, with a source-based fallback if the AI service is unavailable.</p></section><section class="blk"><div class="card st-tutor"><label for="st-tutor-subject">Course</label><select class="inp" id="st-tutor-subject">${options}</select><div class="rowflex st-modes" id="st-tutor-modes"><button type="button" class="btn sm" data-mode="explain">Explain</button><button type="button" class="btn ghost sm" data-mode="solve">Solve step by step</button><button type="button" class="btn ghost sm" data-mode="hint">Hint only</button></div><label for="st-tutor-input">Question</label><textarea id="st-tutor-input" class="inp" dir="auto" rows="5" maxlength="2000" placeholder="Ask about a lecture or paste a question"></textarea><div class="rowflex"><button type="button" class="btn" id="st-tutor-ask">Ask the tutor</button><span class="hint">Do not include personal information.</span></div><div id="st-tutor-output" aria-live="polite"></div></div></section>`;
    let mode='explain';
    $('#st-tutor-modes').addEventListener('click',e=>{const b=e.target.closest('[data-mode]');if(!b)return;mode=b.dataset.mode;$$('#st-tutor-modes [data-mode]').forEach(x=>x.classList.toggle('ghost',x!==b));});
    $('#st-tutor-ask').addEventListener('click',async()=>{
      const input=$('#st-tutor-input').value.trim(),subj=$('#st-tutor-subject').value,out=$('#st-tutor-output');if(input.length<3){toast('Enter a question of at least 3 characters');return;}
      let hits=retrieveCourseMaterial(input,subj);const answerHits=hits;const course=keySubject(subj);if(!hits.length&&course)hits=course.lectures.filter(l=>!l.missing).slice(0,4).map(l=>({subj,source:`Lecture ${l.n}: ${l.topic}`,kind:'Lecture',question:'',answer:'Open the lecture material to review this topic.',url:l.link}));out.innerHTML='<div class="notice info">Searching course materials…</div>';
      let answer=null,usedAI=false,serviceNote='';
      if(MFB.sb){try{const context=answerHits.filter(h=>h.kind!=='Lecture').slice(0,3).map(h=>({source:h.source,question:h.question,answer:h.answer}));const sourceText=context.map((m,i)=>`[${i+1}] ${m.source}\nQuestion: ${m.question}\nVerified answer: ${m.answer}`).join('\n\n').slice(0,6000);const serviceInput=sourceText?`Student question: ${input}\n\nRelevant verified course material follows. Answer using only this material; cite its source label. If it does not contain the answer, say so and do not guess.\n\n${sourceText}`:input;const {data,error}=await MFB.sb.functions.invoke('ai-proxy',{body:{action:'tutor',mode,input:serviceInput,subject:subj,materials:context}});if(!error&&data?.answer){answer=data.answer;usedAI=true;}else if(error){try{const body=await error.context.json();serviceNote=body.error==='ai_not_activated'?'The hosted AI service is still restricted by its server settings; showing a course-grounded fallback.':body.error==='daily_cap_reached'?'Daily AI limit reached; showing a course-grounded fallback.':'The hosted AI service is unavailable; showing a course-grounded fallback.';}catch(_){serviceNote='The hosted AI service is unavailable; showing a course-grounded fallback.';}}}catch(_){serviceNote='The hosted AI service is unavailable; showing a course-grounded fallback.';}}
      if(!answer){const local=await localTutorReply(input,subj);answer=local.answer;}
      const cards=hits.map(h=>`<a class="chip" href="${escs(h.url)}" ${/^https:\/\//.test(h.url)?'target="_blank" rel="noopener noreferrer"':''}>${escs(keySubject(h.subj)?.code||h.subj)} · ${escs(h.source)}</a>`).join('');
      out.innerHTML=`<article class="card st-answer"><div class="st-answer-label">${usedAI?'AI response · verify against the references':'Course-bank fallback'}</div><p dir="auto">${escs(answer)}</p>${serviceNote?`<p class="hint">${escs(serviceNote)}</p>`:''}<p class="hint">${usedAI?'AI may make mistakes. References shown are relevant course matches and are not a guarantee that each line was cited by the model.':'The fallback uses matching verified questions and answers, or points to related lecture material. It does not create a missing answer.'}</p>${cards?`<div class="st-citations"><b>Related course sources</b><div>${cards}</div></div>`:'<p class="hint">No matching course reference was found. Try a more specific phrase or choose another course.</p>'}<button type="button" class="btn ghost sm" id="st-tutor-report">Report this answer or source</button></article>`;
      $('#st-tutor-report').addEventListener('click',()=>reportContent('study-assistant:'+Date.now(),`Tutor response: ${answer.slice(0,300)}\nReferences: ${hits.map(h=>h.source).join('; ')||'none'}`));
    });
  }
  const tutorRoute=routes.find(r=>r[0].source==='^\\/workspace\\/tutor$');if(tutorRoute)tutorRoute[1]=studyTutor;

  async function studyNotify(title,body,target){
    const prefs=await setupGet();const list=await store.get('x.notifications',[]);list.unshift({id:'study-'+Date.now(),title,body,target,at:Date.now(),read:false});await store.set('x.notifications',list.slice(0,100));
    if(prefs?.reminderEnabled && 'Notification' in window && Notification.permission==='granted')try{new Notification(title,{body,tag:'must-'+today()});}catch(_){}
  }
  async function checkStudyReminder(){
    try{const prefs=await setupGet();if(!prefs?.reminderEnabled)return;const time=prefs.reminderTime||prefs.startTime;const [h,m]=time.split(':').map(Number),now=new Date(),delta=(now.getHours()*60+now.getMinutes())-(h*60+m);if(delta<0||delta>2)return;const flag='study-reminder-sent:'+MFB.user.id+':'+today();if(await store.get(flag,false))return;await store.set(flag,true);await studyNotify('Time for your study plan','Your planned study time is now. Open the planner to see what comes next.','#/planner');}catch(_){}
  }
  setInterval(checkStudyReminder,30000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)checkStudyReminder();});

  document.addEventListener('DOMContentLoaded',()=>{
    const nav=$s('.snav');if(nav&&!$s('[data-study-tools-nav]'))nav.insertAdjacentHTML('beforeend','<div class="cat" data-study-tools-nav>Study</div><a href="#/workspace/tutor" data-study-tools-nav>AI Study Tutor</a><a href="#/setup" data-study-tools-nav>Study preferences</a>');
  });

  if(typeof AR_NAV==='object')Object.assign(AR_NAV,{'Study preferences':'تفضيلات المذاكرة','AI Study Tutor':'المعلّم الذكي'});
  if(typeof AR_UI==='object')Object.assign(AR_UI,{
    'Make your study plan fit you':'جهّز خطة مذاكرة تناسبك','Your courses':'مقرراتك','Exam dates':'مواعيد الامتحانات','Time available':'الوقت المتاح','Optional reminder':'تذكير اختياري','Save preferences & continue':'احفظ التفضيلات وتابع','Edit study setup':'تعديل إعدادات المذاكرة','AI Smart Study Plan':'خطة المذاكرة الذكية','Generate my week':'أنشئ خطة الأسبوع','Regenerate week':'إعادة إنشاء خطة الأسبوع','sessions completed this week':'جلسات مكتملة هذا الأسبوع','AI Study Tutor':'المعلّم الذكي','Ask the tutor':'اسأل المعلّم','Report':'إبلاغ','Report this answer or source':'الإبلاغ عن الإجابة أو المصدر'
  });
})();

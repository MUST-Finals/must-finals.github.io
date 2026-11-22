/* MUST Finals expansion workspace — additive module, vanilla JS, local-first.
   AI, realtime collaboration and secure execution stay disabled until their server services are configured. */
'use strict';
(() => {
  const $x = (s, r = document) => r.querySelector(s);
  const escx = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const get = async (k, d) => store.get('x.' + k, d);
  const set = async (k, v) => store.set('x.' + k, v);
  const today = () => {const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');};
  const page = (title, subtitle, body) => {
    $('#app').innerHTML = `<section class="hero ex-hero"><div class="eyebrow">MUST FINALS · WORKSPACE</div><h1>${escx(title)}</h1><p class="sub">${escx(subtitle)}</p></section>${body}`;
  };
  const card = (title, desc, href, tag='Open') => `<a class="card ex-card" href="#${href}"><span class="pill pri">${escx(tag)}</span><h3>${escx(title)}</h3><p>${escx(desc)}</p><span class="ex-arrow">Explore →</span></a>`;
  const section = (title, html) => `<section class="blk"><div class="blk-h"><h2>${title}</h2></div>${html}</section>`;
  const subjects = () => (window.DATA?.subjects || []);
  const subjectOptions = (v='') => '<option value="">No subject</option>' + subjects().map(s => `<option value="${escx(s.key)}" ${s.key===v?'selected':''}>${escx(s.code)} · ${escx(s.full)}</option>`).join('');
  const statusNote = (text) => `<div class="notice info">${escx(text)}</div>`;

  async function home() {
    dailyReminders();
    page('Your academic workspace','A single place for your study routine, academic planning, and student resources.',
      `<div class="ex-grid">
        ${card('Chat With Your PDF','Ask questions about lecture PDFs with page citations. Requires secure AI document processing.','/workspace/pdf','AI service')}
        ${card('AI Study Tutor','Explain concepts, solve step by step, hints, and line-by-line code explanation via the secure proxy.','/workspace/tutor','AI service')}
        ${card('AI Quiz Generator','Generate practice questions from your course topics via the secure server-side proxy.','/workspace/quiz','AI service')}
                        ${card('Code Runner','Write and run real C, C++, Python, Java or JavaScript code with your own input, executed on the Judge0 CE service.','/workspace/code','Live execution')}
        ${card('Formula Sheets','Key formulas and laws extracted from the ingested lecture slides, with page citations.','/workspace/formulas','From lectures')}
        ${card('Exam Focus','Important topics and frequently tested concepts identified from verified past exams, with per-topic provenance.','/workspace/exam-focus','From past exams')}
        ${card('Interactive Labs','Hands-on visualizers: logic gates, stack, queue, linked list, and pointers with real memory addresses.','/workspace/labs','Interactive')}
        ${card('Performance Analytics','Scores, accuracy, difficult lectures, and recommendations from your real activity.','/workspace/analytics','From your activity')}
        ${card('Smart Revision','Review cards using your saved spaced-repetition schedule.','/revision','Ready')}
        ${card('Mind Map Studio','Create and edit a personal concept map.','/workspace/mindmap','Local')}
        ${card('Code Playground','Practice from the existing verified code-output exercises. Arbitrary execution is not enabled.','/tools/code','Practice')}
        ${card('GPA Calculator','Calculate semester and cumulative GPA with your chosen grading scale.','/workspace/gpa','Local')}
        ${card('Admin Dashboard','Manage content and moderation using the existing protected admin area.','/admin','Role protected')}
        ${card('Offline Learning','Review offline capabilities and save supported same-origin resources.','/workspace/offline','PWA')}
        ${card('Study Rooms','Subject-based study rooms with shared chat. Currently in private testing.','/workspace/rooms','Private test')}
        ${card('Leaderboard','Optional class ranking by XP. You appear only after you join, and only joined members can see the board.','/workspace/leaderboard','Opt-in')}
        ${card('Smart Timetable','Manage weekly lectures and personal study events.','/workspace/timetable','Local')}
        ${card('Campus Hub','View official announcements and add personal event links.','/workspace/campus','Community')}
        ${card('Assignment Tracker','Track deadlines, priorities, and submission status.','/workspace/assignments','Local')}
        ${card('Student Resources','Save useful learning links and notes on this device.','/workspace/resources','Local')}
        ${card('Student Profile','Manage your local academic profile and preferences.','/workspace/profile','Local')}
        ${card('Focus & Pomodoro','Run a focus session and save completed study time.','/workspace/focus','Local')}
        ${card('Daily Challenge','Try a daily question from the existing verified question bank.','/workspace/challenge','Ready')}
        ${card('Notifications Center','View reminders and updates generated by your workspace.','/workspace/notifications','Local')}
      </div>`);
  }

  async function gpa() {
    const state = await get('gpa',{scale:4,terms:[]});
    const terms = state.terms || [];
    const rows = terms.map((t,i)=>`<div class="act ex-row"><span><b>${escx(t.name)}</b><br><small class="hint">${t.courses.length} courses · GPA ${Number(t.gpa).toFixed(2)}</small></span><button class="qtool" data-del="${i}">Delete</button></div>`).join('');
    page('GPA Calculator','Choose your own grading scale. Results are estimates unless your faculty grading policy is verified.',
      `${statusNote('This calculator does not assume an official MUST grading scale. Confirm the grade-point mapping with your faculty.')}
      <div class="card ex-panel"><div class="ex-form"><label>Grade point maximum <select id="g-scale"><option value="4" ${state.scale===4?'selected':''}>4.0</option><option value="5" ${state.scale===5?'selected':''}>5.0</option><option value="100" ${state.scale===100?'selected':''}>100-point scale</option></select></label><label>Semester name <input id="g-name" placeholder="e.g. Fall 2026"></label></div>
      <div id="g-courses"><div class="ex-course"><input class="g-course" placeholder="Course name"><input class="g-grade" type="number" min="0" step=".01" placeholder="Grade points"><input class="g-credit" type="number" min=".5" step=".5" placeholder="Credit hours"></div></div>
      <div class="rowflex"><button class="btn ghost sm" id="g-add">Add course</button><button class="btn" id="g-save">Calculate & Save</button></div><p id="g-result" class="hint"></p></div>
      ${section('Saved semesters',`<div class="acts">${rows || '<p class="hint">No saved semesters yet.</p>'}</div>`)}
      ${section('What-if: required average',`<div class="card ex-panel"><div class="ex-form"><label>Current cumulative GPA <input id="w-cur" type="number" min="0" step=".01" placeholder="e.g. 3.10"></label><label>Completed credit hours <input id="w-done" type="number" min="0" step=".5" placeholder="e.g. 60"></label><label>Target GPA <input id="w-target" type="number" min="0" step=".01" placeholder="e.g. 3.50"></label><label>Upcoming credit hours <input id="w-next" type="number" min=".5" step=".5" placeholder="e.g. 15"></label></div><div class="rowflex"><button class="btn ghost sm" id="w-calc">Calculate required average</button></div><p id="w-result" class="hint"></p></div>`)}`);
    $('#g-add').onclick=()=>$('#g-courses').insertAdjacentHTML('beforeend','<div class="ex-course"><input class="g-course" placeholder="Course name"><input class="g-grade" type="number" min="0" step=".01" placeholder="Grade points"><input class="g-credit" type="number" min=".5" step=".5" placeholder="Credit hours"></div>');
    $('#g-save').onclick=async()=>{
      const scale=Number($('#g-scale').value), courses=[...document.querySelectorAll('.ex-course')].map(r=>({name:r.querySelector('.g-course').value.trim(),grade:Number(r.querySelector('.g-grade').value),credits:Number(r.querySelector('.g-credit').value)}));
      if(!courses.length||courses.some(c=>!c.name||!Number.isFinite(c.grade)||c.grade<0||c.grade>scale||!Number.isFinite(c.credits)||c.credits<=0)){ $('#g-result').textContent='Enter a course name, valid grade points, and positive credit hours for every row.';return;}
      const credits=courses.reduce((n,c)=>n+c.credits,0),score=courses.reduce((n,c)=>n+c.grade*c.credits,0)/credits;
      state.scale=scale;state.terms.unshift({name:$('#g-name').value.trim()||'Semester',courses,gpa:score,credits,created:Date.now()});await set('gpa',state);
      $('#g-result').textContent=`Semester GPA: ${score.toFixed(2)} / ${scale} · ${credits} credit hours`;toast('GPA saved');gpa();
    };
    $$('#app [data-del]').forEach(b=>b.onclick=async()=>{state.terms.splice(Number(b.dataset.del),1);await set('gpa',state);gpa();});
    $('#w-calc').onclick=()=>{
      const raw=['#w-cur','#w-done','#w-target','#w-next'].map(s=>$(s).value.trim());
      if(raw.some(v=>v==='')){$('#w-result').textContent='Fill all four fields with valid numbers.';return;}
      const cur=Number(raw[0]),doneC=Number(raw[1]),target=Number(raw[2]),nextC=Number(raw[3]),scale=Number($('#g-scale').value);
      if(![cur,doneC,target,nextC].every(Number.isFinite)||doneC<0||nextC<=0||cur<0||cur>scale||target<0||target>scale){$('#w-result').textContent='Enter valid values within the selected grading scale.';return;}
      const req=(target*(doneC+nextC)-cur*doneC)/nextC;
      $('#w-result').textContent = req<=0
        ? `You have already reached the target: current ${cur} meets or exceeds ${target}. Any non-negative average keeps you at or above it.`
        : req>scale
          ? `Required average ${req.toFixed(2)} is above the ${scale}-point maximum: the target is not reachable with only ${nextC} upcoming hours. More hours or a lower target would be needed.`
          : `You need an average of ${req.toFixed(2)} / ${scale} across the upcoming ${nextC} credit hours to reach ${target}.`;
    };
  }

  async function assignments() {
    const items=await get('assignments',[]);
    const rows=items.map((a,i)=>`<div class="act ex-row"><div><b dir="auto">${escx(a.title)}</b><br><small class="hint">${escx(a.subject||'General')} · Due ${escx(a.due||'No date')} · ${escx(a.priority)}</small><br><span class="pill">${escx(a.status)}</span></div><div class="rowflex"><button class="qtool" data-done="${i}">Next status</button><button class="qtool" data-remove="${i}">Delete</button></div></div>`).join('');
    page('Assignment Tracker','Keep coursework, projects, and deadlines organized.',
      `<div class="card ex-panel"><div class="ex-form"><label>Assignment title<input id="a-title" dir="auto" maxlength="120" placeholder="Assignment name"></label><label>Subject<select id="a-subject">${subjectOptions()}</select></label><label>Due date<input id="a-due" type="date"></label><label>Priority<select id="a-priority"><option>normal</option><option>high</option><option>low</option></select></label></div><button class="btn" id="a-add">Add assignment</button></div>${section('Your assignments',`<div class="acts">${rows||'<p class="hint">No assignments yet.</p>'}</div>`) }`);
    $('#a-add').onclick=async()=>{const title=$('#a-title').value.trim();if(!title){toast('Enter an assignment title');return;}items.unshift({title,subject:$('#a-subject').value,due:$('#a-due').value,priority:$('#a-priority').value,status:'not started',created:Date.now()});await set('assignments',items);await notify('Assignment added',title,'#/workspace/assignments');assignments();};
    $$('#app [data-done]').forEach(b=>b.onclick=async()=>{const states=['not started','in progress','completed','submitted'];const a=items[+b.dataset.done];a.status=states[(states.indexOf(a.status)+1)%states.length];await set('assignments',items);assignments();});
    $$('#app [data-remove]').forEach(b=>b.onclick=async()=>{items.splice(+b.dataset.remove,1);await set('assignments',items);assignments();});
  }

  async function timetable() {
    const events=await get('timetable',[]);
    const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const rows=events.map((e,i)=>({e,i})).sort((a,b)=>a.e.day-b.e.day||a.e.start.localeCompare(b.e.start)).map(({e,i})=>`<div class="act ex-row"><span><b>${days[e.day]}</b> · ${escx(e.start)}–${escx(e.end)}<br>${escx(e.title)} <small class="hint">${escx(e.location||'')}</small></span><button class="qtool" data-del="${i}">Delete</button></div>`).join('');
    page('Smart Timetable','Create a weekly schedule and check for overlapping sessions.',
      `<div class="card ex-panel"><div class="ex-form"><label>Event title<input id="t-title" maxlength="100" placeholder="Lecture / lab / study session"></label><label>Day<select id="t-day">${days.map((d,i)=>`<option value="${i}">${d}</option>`).join('')}</select></label><label>Start<input id="t-start" type="time" value="09:00"></label><label>End<input id="t-end" type="time" value="10:00"></label><label>Location<input id="t-location" maxlength="100" placeholder="Room / online"></label></div><div class="rowflex" style="gap:8px"><button class="btn" id="t-add">Add to timetable</button><button class="btn ghost" id="t-export" ${events.length?'':'disabled'}>Export calendar (.ics)</button></div></div>${section('Weekly events',`<div class="acts">${rows||'<p class="hint">No events scheduled.</p>'}</div>`) }`);
    $('#t-add').onclick=async()=>{const title=$('#t-title').value.trim(),day=+$('#t-day').value,start=$('#t-start').value,end=$('#t-end').value;if(!title||!start||!end||start>=end){toast('Enter a title and a valid time range');return;}const conflict=events.some(e=>e.day===day&&start<e.end&&end>e.start);if(conflict){toast('Time conflict: this overlaps an existing event');return;}events.push({title,day,start,end,location:$('#t-location').value.trim()});await set('timetable',events);timetable();};
    $$('#app [data-del]').forEach(b=>b.onclick=async()=>{events.splice(+b.dataset.del,1);await set('timetable',events);timetable();});
    const exBtn=$('#t-export');if(exBtn)exBtn.onclick=()=>{const ics=buildIcs(events);const blob=new Blob([ics],{type:'text/calendar'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='must-timetable.ics';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),5000);toast('Calendar file exported');};
  }

  async function profile() {
    const p=await get('profile',{name:'',year:'',semester:'',bio:''});
    page('Student Profile','Your local academic profile. Account-level identity and cloud sync remain managed by the existing account service.',
      `<div class="card ex-panel"><div class="ex-form"><label>Display name<input id="p-name" maxlength="60" value="${escx(p.name)}"></label><label>Academic year<input id="p-year" maxlength="30" value="${escx(p.year)}" placeholder="e.g. Year 2"></label><label>Semester<input id="p-sem" maxlength="30" value="${escx(p.semester)}"></label></div><label>About your study goals<textarea id="p-bio" maxlength="500" rows="4">${escx(p.bio)}</textarea></label><button class="btn" id="p-save">Save profile on this device</button></div>`);
    $('#p-save').onclick=async()=>{await set('profile',{name:$('#p-name').value.trim(),year:$('#p-year').value.trim(),semester:$('#p-sem').value.trim(),bio:$('#p-bio').value.trim()});toast('Profile saved');};
  }

  async function focus() {
    const cfg=await get('focusCfg',{focus:25,short:5,long:15,goal:60}), sessions=await get('focusSessions',[]);
    const todayMin=sessions.filter(s=>new Date(s.at).toDateString()===new Date().toDateString()).reduce((n,s)=>n+s.minutes,0);
    let actx=null;
    const beep=()=>{try{actx=actx||new (window.AudioContext||window.webkitAudioContext)();[0,.18].forEach((d,i)=>{const o=actx.createOscillator(),g=actx.createGain();o.connect(g);g.connect(actx.destination);o.frequency.value=i?880:660;g.gain.setValueAtTime(.15,actx.currentTime+d);g.gain.exponentialRampToValueAtTime(.001,actx.currentTime+d+.15);o.start(actx.currentTime+d);o.stop(actx.currentTime+d+.16);});}catch(e){}};
    page('Focus Mode & Pomodoro','A distraction-reduced timer. Keep sessions comfortable and take breaks when needed.',
      `<div class="card ex-focus"><div class="eyebrow">FOCUS SESSION</div><div id="focus-clock" class="ex-clock">${String(cfg.focus).padStart(2,'0')}:00</div><div id="focus-state" class="hint">Ready when you are</div><div class="rowflex" style="justify-content:center;margin:16px"><button class="btn" id="focus-start">Start</button><button class="btn ghost" id="focus-reset">Reset</button></div><div class="ex-form"><label>Focus minutes<input id="f-min" type="number" min="1" max="120" value="${cfg.focus}"></label><label>Break minutes<input id="f-break" type="number" min="1" max="60" value="${cfg.short}"></label><label>Daily goal (minutes)<input id="f-goal" type="number" min="5" max="480" step="5" value="${cfg.goal||60}"></label></div><p class="hint" id="f-stats">Completed sessions: ${sessions.length} · Total focus minutes: ${sessions.reduce((n,s)=>n+s.minutes,0)}</p><p class="hint" id="f-today">Today: ${todayMin} / ${cfg.goal||60} minutes toward your daily goal.</p></div>`);
    let left=cfg.focus*60,handle=null,running=false,armed=false,sessionDuration=cfg.focus;
    const paint=()=>$('#focus-clock').textContent=String(Math.floor(left/60)).padStart(2,'0')+':'+String(left%60).padStart(2,'0');
    $('#focus-start').onclick=()=>{if(running){clearInterval(handle);running=false;$('#focus-start').textContent='Resume';$('#focus-state').textContent='Paused';return;}if(!armed){sessionDuration=Math.max(1,Math.min(120,Number($('#f-min').value)||25));left=sessionDuration*60;armed=true;}running=true;$('#focus-start').textContent='Pause';$('#focus-state').textContent='Focus session in progress';handle=setInterval(async()=>{left--;paint();if(left<=0){clearInterval(handle);running=false;armed=false;const mins=sessionDuration;sessions.unshift({minutes:mins,at:Date.now()});await set('focusSessions',sessions);await notify('Focus session completed',mins+' minutes recorded','#/workspace/focus');beep();const newToday=sessions.filter(s=>new Date(s.at).toDateString()===new Date().toDateString()).reduce((n,s)=>n+s.minutes,0);const goalLine=$('#f-today');if(goalLine)goalLine.textContent=`Today: ${newToday} / ${cfg.goal||60} minutes toward your daily goal${newToday>= (cfg.goal||60) ? ' - goal reached!' : '.'}`;const st=$('#f-stats');if(st)st.textContent=`Completed sessions: ${sessions.length} · Total focus minutes: ${sessions.reduce((n,s)=>n+s.minutes,0)}`;$('#focus-state').textContent='Session complete — take a break';$('#focus-start').textContent='Start again';left=mins*60;paint();}},1000);};
    $('#focus-reset').onclick=()=>{clearInterval(handle);running=false;armed=false;left=Math.max(1,Math.min(120,+$('#f-min').value||25))*60;paint();$('#focus-start').textContent='Start';$('#focus-state').textContent='Ready when you are';};
    $('#f-min').onchange=async()=>{cfg.focus=Math.max(1,Math.min(120,+$('#f-min').value||25));await set('focusCfg',cfg);if(!running){armed=false;left=cfg.focus*60;paint();}};
    $('#f-break').onchange=async()=>{cfg.short=Math.max(1,Math.min(60,+$('#f-break').value||5));await set('focusCfg',cfg);};
    $('#f-goal').onchange=async()=>{cfg.goal=Math.max(5,Math.min(480,+$('#f-goal').value||60));await set('focusCfg',cfg);const tm=sessions.filter(s=>new Date(s.at).toDateString()===new Date().toDateString()).reduce((n,s)=>n+s.minutes,0);const gl=$('#f-today');if(gl)gl.textContent=`Today: ${tm} / ${cfg.goal} minutes toward your daily goal${tm>=cfg.goal?' - goal reached!':'.'}`;};
  }

  async function notify(title,body,target) {
    const list=await get('notifications',[]);list.unshift({id:'n'+Date.now()+Math.random().toString(16).slice(2),title,body,target,at:Date.now(),read:false});await set('notifications',list.slice(0,100));
  }

  async function dailyReminders(){
    try{
      const flag=await get('reminders-'+today(),null);if(flag)return;
      const now=new Date();now.setHours(0,0,0,0);
      const items=(await get('assignments',[])).filter(a=>a.status!=='completed'&&a.status!=='submitted'&&a.due);
      for(const a of items){
        const d=new Date(a.due+'T00:00:00');const diff=Math.round((d-now)/86400000);
        if(diff>=0&&diff<=2)await notify('Assignment due '+(diff===0?'today':diff===1?'tomorrow':'in 2 days'),a.title+(a.subject?' · '+a.subject:''),'#/workspace/assignments');
      }
      const dow=new Date().getDay();
      const todays=(await get('timetable',[])).filter(e=>e.day===dow).sort((a,b)=>a.start.localeCompare(b.start));
      if(todays.length)await notify('On your timetable today',todays.map(e=>e.start+' '+e.title).slice(0,4).join(' · '),'#/workspace/timetable');
      await set('reminders-'+today(),1);
    }catch(e){}
  }

  function buildIcs(events){
    const byday=['SU','MO','TU','WE','TH','FR','SA'];
    const escIcs=s=>String(s||'').replace(/\\/g,'\\\\').replace(/;/g,'\\;').replace(/,/g,'\\,').replace(/\n/g,'\\n');
    const stamp=new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d+Z$/,'Z');
    const pad=n=>String(n).padStart(2,'0');
    const nextDate=d=>{const t=new Date();t.setHours(0,0,0,0);t.setDate(t.getDate()+((d-t.getDay()+7)%7));return t;};
    const lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//MUST Finals//Smart Timetable//EN','CALSCALE:GREGORIAN'];
    events.forEach((e,i)=>{
      const d=nextDate(e.day);
      const ds=d.getFullYear()+pad(d.getMonth()+1)+pad(d.getDate());
      lines.push('BEGIN:VEVENT','UID:tt-'+i+'-'+Date.now()+'@must-finals','DTSTAMP:'+stamp,
        'DTSTART:'+ds+'T'+String(e.start||'00:00').replace(':','')+'00',
        'DTEND:'+ds+'T'+String(e.end||'00:00').replace(':','')+'00',
        'RRULE:FREQ=WEEKLY;BYDAY='+byday[e.day],
        'SUMMARY:'+escIcs(e.title));
      if(e.location)lines.push('LOCATION:'+escIcs(e.location));
      lines.push('END:VEVENT');
    });
    lines.push('END:VCALENDAR');
    return lines.join('\r\n');
  }
  async function notifications() {
    await dailyReminders();
    const list=await get('notifications',[]);
    page('Notifications Center','Local reminders and workspace updates. Browser push is not enabled until a push service is configured.',
      `${section('Inbox',`<div class="acts">`+list.map(n=>`<div class="act ex-row ${n.read?'':'ex-unread'}"><a href="#${escx(n.target||'/workspace')}" style="flex:1"><b dir="auto">${escx(n.title)}</b><br><span class="hint" dir="auto">${escx(n.body)} · ${new Date(n.at).toLocaleString()}</span></a><button class="qtool" data-read="${escx(n.id)}">${n.read?'Read':'Mark read'}</button></div>`).join('')||'<p class="hint">No notifications yet.</p>'+`</div>`)}
      <button class="btn ghost sm" id="n-clear">Clear all</button>`);
    $$('#app [data-read]').forEach(b=>b.onclick=async()=>{const n=list.find(x=>x.id===b.dataset.read);if(n)n.read=true;await set('notifications',list);notifications();});
    $('#n-clear').onclick=async()=>{await set('notifications',[]);notifications();};
  }

  async function challenge() {
    const key='challenge-'+today(),done=await get(key,null);
    const pool=window.DATA?.mcq||[];
    const q=pool.length?pool[Math.floor((new Date(today()).getTime()/86400000))%pool.length]:null;
    if(!q){page('Daily Challenge','No question bank available.','<p class="hint">Try again after course content loads.</p>');return;}
    page('Daily Challenge','One question selected from the existing course question bank.',
      `<div class="card ex-panel"><span class="pill pri">${escx(subjects().find(s=>s.key===q.subj)?.code||q.subj)} · ${escx(q.src)}</span><h3>${escx(q.q)}</h3><div class="ex-options">${q.opts.map((o,i)=>`<button class="opt" data-opt="${i}" ${done?'disabled':''}>${'ABCD'[i]} · ${escx(o)}</button>`).join('')}</div><p id="ch-result" class="hint">${done?(done.correct?'Correct answer!':'Challenge completed. Review the answer in the subject practice page.'):''}</p></div>`);
    if(!done)$$('#app [data-opt]').forEach(b=>b.onclick=async()=>{const correct=+b.dataset.opt===q.a;await set(key,{correct,choice:+b.dataset.opt});$$('#app [data-opt]').forEach(x=>x.disabled=true);$('#ch-result').textContent=correct?'Correct! Well done.':'Not quite. Review this question in the subject practice page.';await notify('Daily challenge completed',correct?'Correct answer':'Challenge attempted','#/workspace/challenge');});
  }

  async function resources() {
    const list=await get('resources',[]);
    page('Student Resources Hub','Save useful course links and personal learning notes. Shared publishing requires moderation backend.',
      `<div class="card ex-panel"><div class="ex-form"><label>Resource title<input id="r-title" dir="auto" maxlength="120"></label><label>Subject<select id="r-subject">${subjectOptions()}</select></label></div><label>URL (optional)<input id="r-url" type="url" placeholder="https://..."></label><label>Notes<textarea id="r-notes" dir="auto" rows="3" maxlength="1000"></textarea></label><button class="btn" id="r-add">Save resource</button></div>${section('Saved resources',list.map((r,i)=>`<div class="act ex-row"><span><b dir="auto">${escx(r.title)}</b><br><small class="hint">${escx(r.subject||'General')} · <span dir="auto">${escx(r.notes||'')}</span></small>${r.url?`<br><a href="${escx(r.url)}" target="_blank" rel="noopener">Open resource</a>`:''}</span><button class="qtool" data-del="${i}">Delete</button></div>`).join('')||'<p class="hint">No resources saved yet.</p>')}`);
    $('#r-add').onclick=async()=>{const title=$('#r-title').value.trim(),url=$('#r-url').value.trim();if(!title){toast('Add a title');return;}if(url&&!/^https:\/\//i.test(url)){toast('Use a secure https URL');return;}list.unshift({title,url,subject:$('#r-subject').value,notes:$('#r-notes').value.trim(),at:Date.now()});await set('resources',list);resources();};
    $$('#app [data-del]').forEach(b=>b.onclick=async()=>{list.splice(+b.dataset.del,1);await set('resources',list);resources();});
  }

  async function campus() {
    let announcements='';
    if(window.MFB?.ready){try{const {data}=await MFB.sb.from('announcements').select('title,body,created_at').order('created_at',{ascending:false}).limit(20);announcements=(data||[]).map(a=>`<div class="act"><b dir="auto">${escx(a.title)}</b><span dir="auto">${escx(a.body)}</span><time>${new Date(a.created_at).toLocaleDateString()}</time></div>`).join('');}catch{}}
    page('Campus Hub','A place for verified university announcements and your saved campus event links.',
      `${statusNote('Only announcements fetched from the configured university workspace are presented as official. Personal links are not official university notices.')}
      ${section('Official announcements',announcements||'<p class="hint">No official announcements are currently available from the connected service.</p>')}
      <div class="card ex-panel"><h3>Save a campus event link</h3><label>Event title<input id="c-title" maxlength="120"></label><label>Registration / information URL<input id="c-url" type="url" placeholder="https://..."></label><button class="btn" id="c-add">Save link</button><div id="c-list" class="acts" style="margin-top:12px"></div></div>`);
    const events=await get('campusLinks',[]);
    const paint=()=>$('#c-list').innerHTML=events.map((e,i)=>`<div class="act"><a href="${escx(e.url)}" target="_blank" rel="noopener">${escx(e.title)}</a><button class="qtool" data-del="${i}">Delete</button></div>`).join('');
    $('#c-add').onclick=async()=>{const title=$('#c-title').value.trim(),url=$('#c-url').value.trim();if(!title||!/^https:\/\//i.test(url)){toast('Enter a title and secure https URL');return;}events.unshift({title,url});await set('campusLinks',events);paint();};
    $('#c-list').onclick=async e=>{const b=e.target.closest('[data-del]');if(!b)return;events.splice(+b.dataset.del,1);await set('campusLinks',events);paint();};paint();
  }

  async function mindmap() {
    const maps=await get('mindmaps',[]);let active=maps[0]||{title:'My first mind map',nodes:['Main topic','Concept 1','Concept 2']};
    page('Mind Map Studio','Create an editable topic map with zoom and image export. AI extraction and automatic PDF parsing require the AI backend.',
      `<div class="card ex-panel"><label>Map title<input id="m-title" dir="auto" value="${escx(active.title)}" maxlength="100"></label><label>One concept per line - first line is the central topic<textarea id="m-nodes" dir="auto" rows="8">${escx(active.nodes.join('\n'))}</textarea></label><div class="rowflex" style="gap:8px;flex-wrap:wrap"><button class="btn" id="m-save">Save mind map</button><button class="btn ghost sm" id="m-zin">Zoom +</button><button class="btn ghost sm" id="m-zout">Zoom -</button><button class="btn ghost sm" id="m-zreset">Reset zoom</button><button class="btn ghost sm" id="m-export">Export as PNG</button></div><canvas id="m-canvas" width="900" height="560" style="width:100%;max-width:900px;border:1px solid var(--gold,#d4af37);border-radius:10px;margin-top:10px;background:var(--card,#14161d)"></canvas><p class="hint" id="m-msg"></p></div>`);
    let zoom=1,panX=0,panY=0;
    const paint=()=>{
      const cv=$('#m-canvas'),ctx=cv.getContext('2d');
      const nodes=$('#m-nodes').value.split('\n').map(x=>x.trim()).filter(Boolean);
      const dpr=window.devicePixelRatio||1,cssW=cv.clientWidth||900,cssH=Math.round(cssW*0.62);
      const pw=Math.round(cssW*dpr),ph=Math.round(cssH*dpr);
      if(cv.width!==pw||cv.height!==ph){cv.width=pw;cv.height=ph;}
      ctx.setTransform(dpr,0,0,dpr,0,0);ctx.fillStyle='#14161d';ctx.fillRect(0,0,cssW,cssH);
      if(!nodes.length){ctx.fillStyle='#9aa';ctx.font='16px sans-serif';ctx.fillText('Add concepts to see the map.',20,40);return;}
      ctx.translate(cssW/2+panX,cssH/2+panY);ctx.scale(zoom,zoom);
      const kids=nodes.slice(1),R=Math.min(cssW*0.24,90+kids.length*12);
      const pos=kids.map((n,i)=>{const a=-Math.PI/2+i*(2*Math.PI/kids.length);return {x:Math.cos(a)*R,y:Math.sin(a)*R*0.72};});
      ctx.strokeStyle='rgba(212,175,55,.5)';ctx.lineWidth=1.2;
      pos.forEach(p=>{ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(p.x,p.y);ctx.stroke();});
      const box=(x,y,text,main)=>{
        ctx.font=(main?'bold 15px':'13px')+' sans-serif';
        const w=Math.min(ctx.measureText(text).width+28,220),h=main?44:34;
        ctx.strokeStyle='#d4af37';ctx.fillStyle=main?'#3a2f10':'#1b1d27';ctx.lineWidth=1.4;
        ctx.beginPath();ctx.roundRect(x-w/2,y-h/2,w,h,9);ctx.fill();ctx.stroke();
        ctx.fillStyle='#e8e8ec';ctx.textAlign='center';ctx.textBaseline='middle';
        ctx.direction=/[\u0600-\u06FF]/.test(text)?'rtl':'ltr';
        let t=text;while(t.length>2&&ctx.measureText(t).width>w-16)t=t.slice(0,-2);
        if(t!==text)t+='\u2026';ctx.fillText(t,x,y);
      };
      box(0,0,nodes[0],true);
      kids.forEach((n,i)=>box(pos[i].x,pos[i].y,n,false));
      $('#m-msg').textContent=nodes.length+' concept(s) · zoom '+Math.round(zoom*100)+'% · drag to pan';
    };
    const cv0=()=>$('#m-canvas');
    let dragging=false,lx=0,ly=0;
    const canvasEl=$('#m-canvas');
    canvasEl.style.touchAction='none';canvasEl.style.cursor='grab';
    canvasEl.addEventListener('pointerdown',e=>{dragging=true;lx=e.clientX;ly=e.clientY;canvasEl.setPointerCapture(e.pointerId);canvasEl.style.cursor='grabbing';});
    canvasEl.addEventListener('pointermove',e=>{if(!dragging)return;panX+=e.clientX-lx;panY+=e.clientY-ly;lx=e.clientX;ly=e.clientY;paint();});
    const endDrag=()=>{dragging=false;canvasEl.style.cursor='grab';};
    canvasEl.addEventListener('pointerup',endDrag);canvasEl.addEventListener('pointercancel',endDrag);
    paint();
    $('#m-nodes').oninput=paint;
    window.addEventListener('resize',()=>{if($('#m-canvas'))paint();});
    $('#m-zin').onclick=()=>{zoom=Math.min(3,zoom*1.25);paint();};
    $('#m-zout').onclick=()=>{zoom=Math.max(.4,zoom/1.25);paint();};
    $('#m-zreset').onclick=()=>{zoom=1;panX=0;panY=0;paint();};
    $('#m-export').onclick=()=>{const a=document.createElement('a');a.download=($('#m-title').value.trim()||'mind-map')+'.png';a.href=$('#m-canvas').toDataURL('image/png');a.click();$('#m-msg').textContent='PNG exported: '+a.download;};
    $('#m-save').onclick=async()=>{active={title:$('#m-title').value.trim()||'Untitled map',nodes:$('#m-nodes').value.split('\n').map(x=>x.trim()).filter(Boolean)};maps.unshift(active);await set('mindmaps',maps.slice(0,30));toast('Mind map saved');};
  }

  async function offline() {
    const supported='serviceWorker' in navigator;
    const regs=supported?await navigator.serviceWorker.getRegistrations():[];
    const keys=await (window.caches?caches.keys():Promise.resolve([]));
    page('Offline Learning','The app shell is cached by the existing service worker. External Drive files may require internet and cannot be guaranteed offline.',
      `<div class="grid g2"><div class="card ex-panel"><h3>PWA status</h3><p>${supported?'Service Worker supported':'Service Worker unavailable'}</p><p class="hint">${regs.length} registration(s) · ${keys.length} cache(s)</p><button class="btn ghost sm" id="off-refresh">Check status</button></div><div class="card ex-panel"><h3>Offline safety</h3><p class="hint">Your practice progress and saved workspace data use local browser storage. Do not use public/shared devices for private study records.</p><p class="hint">Google Drive PDFs and external AI or realtime services need a connection unless explicitly downloaded through a supported provider.</p></div></div>`);
    $('#off-refresh').onclick=()=>offline();
  }

  async function analytics(){
    const p=await prog();
    const D=window.DATA||{subjects:[],mcq:[]};
    const mocks=(p.examHistory||[]).slice();
    const stats=p.mcq||{};
    const qById={};D.mcq.forEach(q=>qById[q.id]=q);
    let totT=0,totC=0;for(const k in stats){totT+=stats[k].t||0;totC+=stats[k].c||0;}
    const mockAvg=mocks.length?Math.round(100*mocks.reduce((s,x)=>s+(x.count?x.correct/x.count:0),0)/mocks.length):null;
    const acc=totT?Math.round(100*totC/totT):null;
    if(!mocks.length&&!totT){page('Performance Analytics','Your real study activity, visualized.',statusNote('Analytics appear after you answer practice questions or take a mock exam. No activity has been recorded yet, so there is nothing to estimate.')+`<p><a class="btn" href="#/bank">Open the question bank</a></p>`);return;}
    const perSubj=D.subjects.map(s=>{
      const sm=mocks.filter(x=>x.subj===s.key);
      const mavg=sm.length?Math.round(100*sm.reduce((a,x)=>a+(x.count?x.correct/x.count:0),0)/sm.length):null;
      let t=0,c=0;for(const qid in stats){const q=qById[qid];if(q&&q.subj===s.key){t+=stats[qid].t||0;c+=stats[qid].c||0;}}
      const a2=t?Math.round(100*c/t):null;
      const comp=s.lectures.filter(l=>!l.missing);const done=comp.filter(l=>p.completed[s.key+'-lec'+l.n]).length;
      return {s,mavg,mocks:sm.length,acc:a2,att:t,done,total:comp.length};
    });
    const subjRows=perSubj.map(r=>`<div class="act ex-row" style="display:block"><div style="display:flex;justify-content:space-between;align-items:baseline"><b>${escx(r.s.code)} · ${escx(r.s.full)}</b><small class="hint">${r.att} practice answers · ${r.mocks} mocks</small></div>
      <div class="pbar" role="progressbar" aria-valuenow="${r.acc??0}" aria-valuemin="0" aria-valuemax="100" title="Practice accuracy"><i style="width:${r.acc??0}%"></i></div>
      <small class="hint">Practice accuracy ${r.acc===null?'no answers yet':r.acc+'%'} · Mock average ${r.mavg===null?'no mocks yet':r.mavg+'%'} · Lectures ${r.done}/${r.total}</small></div>`).join('');
    const histRows=mocks.slice(0,10).map(x=>{const s=D.subjects.find(z=>z.key===x.subj);const pct=x.count?Math.round(100*x.correct/x.count):0;return `<div class="act"><span><b>${escx(s?s.code:x.subj)}</b> mock · ${x.correct}/${x.count} (${pct}%)</span><time>${new Date(x.ts).toLocaleDateString()}</time></div>`;}).join('');
    const chrono=mocks.slice().reverse().slice(-10);
    const bars=chrono.map(x=>{const pct=x.count?Math.round(100*x.correct/x.count):0;return `<div class="dz-bar" style="height:${Math.max(6,pct)}%"><title>${new Date(x.ts).toLocaleDateString()}: ${pct}%</title></div>`;}).join('');
    const byLec={};
    for(const qid in stats){const q=qById[qid];if(!q||q.kind!=='lec')continue;const key=q.subj+'|'+q.n;byLec[key]=byLec[key]||{t:0,c:0,subj:q.subj,n:q.n};byLec[key].t+=stats[qid].t||0;byLec[key].c+=stats[qid].c||0;}
    const lecList=Object.values(byLec).filter(l=>l.t>=3).map(l=>({...l,acc:Math.round(100*l.c/l.t)})).sort((a,b)=>a.acc-b.acc);
    const subjRank=perSubj.filter(r=>r.att>=5&&r.acc!==null).slice().sort((a,b)=>b.acc-a.acc);
    const strongest=subjRank.slice(0,2).map(r=>`${escx(r.s.code)} (${r.acc}% over ${r.att} answers)`).join(' · ');
    const weakest=subjRank.slice(-2).reverse().map(r=>`${escx(r.s.code)} (${r.acc}% over ${r.att} answers)`).join(' · ');
    const hardRows=lecList.slice(0,3).map(l=>{const s=D.subjects.find(z=>z.key===l.subj);return `<div class="act"><span><b>${escx(s?s.code:l.subj)} Lecture ${l.n}</b> · ${l.acc}% over ${l.t} answers</span></div>`;}).join('');
    const recs=[];
    if(lecList.length){const l=lecList[0];const s=D.subjects.find(z=>z.key===l.subj);recs.push(`Review ${s?s.code:l.subj} Lecture ${l.n}: your accuracy there is ${l.acc}% over ${l.t} answers.`);}
    const openMistakes=Object.values(p.mistakes||{}).filter(m=>!m.understood).length;
    if(openMistakes)recs.push(`You have ${openMistakes} unresolved mistake${openMistakes===1?'':'s'} in the Mistakes tab; review and retry those questions to lock in the material.`);
    const lowMock=perSubj.filter(r=>r.mavg!==null&&r.mavg<60).sort((a,b)=>a.mavg-b.mavg)[0];
    if(lowMock)recs.push(`Take another ${lowMock.s.code} mock after revising; your current mock average there is ${lowMock.mavg}%.`);
    if(!recs.length)recs.push('Keep answering practice questions; recommendations sharpen as more activity is recorded.');
    page('Performance Analytics','Calculated only from your recorded practice answers and mock exams on this device.',
      `<div class="ex-grid">
        <div class="card ex-card"><span class="pill pri">Practice</span><h3>${acc===null?'—':acc+'%'}</h3><p>Overall practice accuracy across ${totT} answers</p></div>
        <div class="card ex-card"><span class="pill pri">Mocks</span><h3>${mockAvg===null?'—':mockAvg+'%'}</h3><p>Average across ${mocks.length} mock exam${mocks.length===1?'':'s'}</p></div>
      </div>`+
      section('Subject-by-subject',`<div class="acts">${subjRows}</div>`)+
      section('Improvement over time (recent mocks)',chrono.length?`<div class="dz-bars" style="display:flex;align-items:flex-end;gap:6px;height:90px">${bars}</div><small class="hint">Bar height = mock score %, oldest to newest.</small>`:'<p class="hint">No mock exams yet.</p>')+
      section('Most difficult lectures',`<div class="acts">${hardRows||'<p class="hint">Answer more lecture questions to surface difficult lectures.</p>'}</div>`)+
      section('Strongest and weakest topics',`<div class="acts">${strongest?`<div class="act"><span><b>Strongest:</b> ${strongest}</span></div>`:''}${weakest?`<div class="act"><span><b>Weakest:</b> ${weakest}</span></div>`:''}${!strongest&&!weakest?'<p class="hint">Not enough answers yet to rank topics.</p>':''}</div>`)+
      section('Quiz history',`<div class="acts">${histRows||'<p class="hint">No mock exams taken yet.</p>'}</div>`)+
      section('Recommendations',`<div class="acts">${recs.map(r=>`<div class="act"><span dir="auto">${escx(r)}</span></div>`).join('')}</div>`));
  }

  async function rooms() {
    if(!window.MFB?.ready||(MFB.ready&&MFB.user&&!MFB.profile)){page('Study Rooms','Loading your account...','');let t=0;const h=setInterval(()=>{if(!location.hash.startsWith('#/workspace/rooms'))return clearInterval(h);if((MFB.ready&&(!MFB.user||MFB.profile))||++t>60){clearInterval(h);rooms();}},150);return;}
    if(!MFB.user){page('Study Rooms','Collaborative rooms require a signed-in account.',statusNote('Sign in through Account to use study rooms.'));return;}
    if(!MFB.isAdmin()){page('Study Rooms','Subject-based study rooms with shared chat.',statusNote('Study Rooms are in private testing and will open after a privacy review.'));return;}
    let data=[],error=null;try{({data,error}=await MFB.sb.from('study_rooms').select('id,title,subject_key,description,visibility,created_at').order('created_at',{ascending:false}).limit(50));}catch(e){error=e;}
    const list=(data||[]).map(r=>`<div class="act"><span><b dir="auto">${escx(r.title)}</b><br><small class="hint" dir="auto">${escx(r.description)}</small><small class="hint"> · ${escx(r.visibility)}</small></span><span style="display:flex;gap:6px"><a class="qtool" href="#/workspace/rooms/${escx(r.id)}">Open</a><button class="qtool" data-join="${escx(r.id)}">Join</button></span></div>`).join('');
    page('Study Rooms','Private testing: rooms open to students after the privacy review is approved.',`${error?statusNote('Study Rooms database is not ready. Apply the SQL migration and enable Realtime before using this feature.'):''}<div class="card ex-panel"><label>Room name<input id="room-title" dir="auto" maxlength="100"></label><label>Subject<select id="room-subj">${subjectOptions()}</select></label><label>Description<textarea id="room-desc" dir="auto" rows="2" maxlength="500"></textarea></label><label>Visibility<select id="room-vis"><option value="private">Private</option><option value="public">Public</option></select></label><button class="btn" id="room-create" ${error?'disabled':''}>Create room</button></div>${section('Available rooms',list||'<p class="hint">No rooms found.</p>')}`);
    if(error)return;
    $('#room-create').onclick=async()=>{const title=$('#room-title').value.trim();if(!title)return toast('Enter a room name');const {data:created,error:e}=await MFB.sb.from('study_rooms').insert({owner_id:MFB.user.id,title,subject_key:$('#room-subj').value||null,description:$('#room-desc').value.trim(),visibility:$('#room-vis').value}).select('id').single();if(e){toast(e.message);return;}const {error:memberError}=await MFB.sb.from('study_room_members').upsert({room_id:created.id,user_id:MFB.user.id,member_role:'owner'});if(memberError)toast('Room created, but owner membership failed: '+memberError.message);rooms();};
    $$('#app [data-join]').forEach(b=>b.onclick=async()=>{const {error:e}=await MFB.sb.from('study_room_members').upsert({room_id:b.dataset.join,user_id:MFB.user.id});toast(e?e.message:'Joined room');});
  }

  async function roomView(id){
    if(!window.MFB?.ready||(MFB.ready&&MFB.user&&!MFB.profile)){page('Study Rooms','Loading your account...','');let t=0;const h=setInterval(()=>{if(!location.hash.startsWith('#/workspace/rooms'))return clearInterval(h);if((MFB.ready&&(!MFB.user||MFB.profile))||++t>60){clearInterval(h);roomView(id);}},150);return;}
    if(!MFB.user){page('Study Rooms','Sign in required.',statusNote('Sign in through Account to use study rooms.'));return;}
    if(!MFB.isAdmin()){page('Study Rooms','Subject-based study rooms with shared chat.',statusNote('Study Rooms are in private testing and will open after a privacy review.'));return;}
    const {data:room,error:rErr}=await MFB.sb.from('study_rooms').select('*').eq('id',id).maybeSingle();
    if(rErr||!room){page('Study Rooms','Room unavailable.',statusNote('Room not found or not visible to your account.')+'<p><a class="btn ghost sm" href="#/workspace/rooms">Back to rooms</a></p>');return;}
    const [{data:msgs},{data:members}]=await Promise.all([
      MFB.sb.from('study_room_messages').select('id,user_id,body,created_at').eq('room_id',id).order('created_at',{ascending:true}).limit(200),
      MFB.sb.from('study_room_members').select('user_id,member_role,joined_at').eq('room_id',id)
    ]);
    const ids=[...new Set([...(msgs||[]).map(m=>m.user_id),...(members||[]).map(m=>m.user_id)])];
    const names={};
    if(ids.length){const {data:profs}=await MFB.sb.from('profiles').select('id,display_name').in('id',ids);(profs||[]).forEach(p=>names[p.id]=p.display_name);}
    const nameOf=u=>names[u]||'Student';
    const mrows=(members||[]).map(m=>`<div class="act"><span><b dir="auto">${escx(nameOf(m.user_id))}</b><br><small class="hint">${escx(m.member_role)} · joined ${new Date(m.joined_at).toLocaleDateString()}</small></span></div>`).join('');
    const chat=(msgs||[]).map(m=>`<div class="act"><span><b dir="auto">${escx(nameOf(m.user_id))}</b> <small class="hint">${new Date(m.created_at).toLocaleString()}</small><br><span dir="auto">${escx(m.body)}</span></span>${m.user_id===MFB.user.id?`<button class="qtool" data-delmsg="${escx(m.id)}">Delete</button>`:''}</div>`).join('');
    page(room.title,room.visibility+' room · '+(room.description||''),
      statusNote('Messages refresh on reload or via Refresh; live realtime updates are not enabled yet.')+
      `<p><a class="btn ghost sm" href="#/workspace/rooms">← Back to rooms</a></p>`+
      section('Members',`<div class="acts">${mrows||'<p class="hint">No members yet.</p>'}</div>`)+
      section('Chat',`<div class="acts">${chat||'<p class="hint">No messages yet. Say hello.</p>'}</div>
        <div class="card ex-panel"><div class="ex-form"><label>Message<textarea id="msg-body" dir="auto" rows="2" maxlength="4000"></textarea></label></div><div class="rowflex"><button class="btn" id="msg-send">Send</button><button class="btn ghost" id="msg-refresh">Refresh</button></div><p class="hint" id="msg-note"></p></div>`));
    $('#msg-send').onclick=async()=>{const body=$('#msg-body').value.trim();if(!body)return;const {error:e}=await MFB.sb.from('study_room_messages').insert({room_id:id,user_id:MFB.user.id,body});if(e){$('#msg-note').textContent=e.message;return;}roomView(id);};
    $('#msg-refresh').onclick=()=>roomView(id);
    $$('#app [data-delmsg]').forEach(b=>b.onclick=async()=>{const {error:e}=await MFB.sb.from('study_room_messages').delete().eq('id',b.dataset.delmsg);if(e)toast(e.message);roomView(id);});
  }

  function aiGate(title,detail) {
    page(title,'AI-powered learning tools are designed for verified course materials.',
      `${statusNote('AI processing is not configured on the current static frontend. No API key is stored in the browser, and no fake response is generated.')}
      <div class="card ex-panel"><h3>What is needed</h3><p>${escx(detail)}</p><p class="hint">Required: authenticated server-side endpoint, provider secret stored server-side, upload validation, request limits, and source-grounded output checks.</p></div>`);
  }


  /* Formula Sheets — static, grounded in ingested pdf_pages content.
     Only subjects with clean extraction get a sheet; others show an honest empty state. */
  const FORMULA_SHEETS = {
    ece202: {
      note: 'Extracted from the ingested lecture slides. Always verify against the original PDF.',
      groups: [
        { name: 'Huntington Postulates', src: 'L5 Boolean Algebra Theorems and Proofs · p.3', rows: [
          ['Post. 1', 'closure'],
          ['Post. 2(a)', 'x + 0 = x'], ['Post. 2(b)', 'x · 1 = x'],
          ['Post. 3(a)', 'x + y = y + x'], ['Post. 3(b)', 'x · y = y · x'],
          ['Post. 4(a)', 'x(y + z) = xy + xz'], ['Post. 4(b)', 'x + yz = (x + y)(x + z)'],
          ['Post. 5(a)', "x + x' = 1"], ['Post. 5(b)', "x · x' = 0"] ] },
        { name: 'Basic Theorems', src: 'L5 · pp.3, 6', rows: [
          ['Theorem 1(a)', 'x + x = x'], ['Theorem 1(b)', 'x · x = x'],
          ['Theorem 2(a)', 'x + 1 = 1'], ['Theorem 2(b)', 'x · 0 = 0  (by duality)'] ] },
        { name: "DeMorgan's Theorem", src: 'L5 · p.8', rows: [
          ['Theorem 5(a)', "(x + y)' = x'y'"], ['Theorem 5(b)', "(xy)' = x' + y'"] ] },
        { name: 'Absorption (Covering)', src: 'L5 · p.7', rows: [
          ['Theorem 6(a)', 'x + xy = x'], ['Theorem 6(b)', 'x(x + y) = x  (by duality)'] ] },
        { name: 'Consensus Theorem', src: 'L5 · p.10', rows: [
          ['(1)', "xy + x'z + yz = xy + x'z"],
          ['(2) dual', "(x + y)(x' + z)(y + z) = (x + y)(x' + z)"] ] },
        { name: 'Operator Precedence', src: 'L5 · p.11', rows: [
          ['Order', 'Parentheses → NOT → AND → OR'] ] },
        { name: 'Useful Simplifications (worked in lecture)', src: 'L5 · pp.16, 18', rows: [
          ['Ex. 1', "x(x' + y) = xy"], ['Ex. 2', "x + x'y = x + y"],
          ['Ex. 3', "(x + y)(x + y') = x"], ['Ex. 6', "xy + xy' = x"],
          ['Ex. 7', "(x + y)' + x = x + y'"], ['Ex. 8', "x + y + z'xy' + z'x' = x + y + z'"], ['Ex. 9', "(x + y)(x + y')(x' + z) = xz"],
          ['Ex. 10', "xy + xy'z + xz' = x"] ] },
        { name: 'Minterms and Maxterms', src: 'L6 Boolean Algebra and Canonical Forms (theory+lab deck) · p.3', rows: [
          ['Minterm', 'An AND term containing every variable, in normal or complemented form.'],
          ['Maxterm', 'An OR term containing every variable, in normal or complemented form.'],
          ['Count', 'n variables give 2^n minterms and 2^n maxterms.'],
          ['Complement relation', "Each maxterm is the complement of its minterm (m0 = x'y'z' pairs with M0 = x + y + z)."] ] },
        { name: 'Canonical Forms', src: 'L6 Boolean Algebra and Canonical Forms (theory+lab deck) · pp.4-6', rows: [
          ['Sum of minterms', "Read the truth-table rows where F = 1: F = Σ of those indices. Lecture example: F = A + B'C = Σ(1, 4, 5, 6, 7)."],
          ['Product of maxterms', "Read the rows where F = 0: F = Π of those indices. Lecture example: F = xy + x'z = Π(0, 2, 4, 5)."],
          ['Σ ↔ Π conversion', 'Interchange Σ and Π and list the indices missing from the original form.'],
          ['Complement', "F' takes the minterms missing from F."] ] }
      ]
    }
  };
  FORMULA_SHEETS.cs212 = {
    note: 'Extracted from the ingested lecture slides and checked against the original PDF. Always verify against the lecture itself.',
    groups: [
      { name: 'Tree Facts and Terminology', src: 'L6 Trees and Binary Search Trees · pp.11, 17, 19-21', rows: [
        ['Edges', 'A tree with n nodes has exactly (n-1) edges.'],
        ['Level', 'Number of edges in the path from the root to the node; the root is at level 0.'],
        ['Degree', 'Degree of a node = its number of children; degree of a tree = the highest node degree.'],
        ['Height', 'Height of a node = edges on the longest path from it to a leaf; height of a tree = height of the root; all leaves have height 0.'],
        ['Depth', 'Depth of a node = edges from the root to it; depth of a tree = edges from the root to the deepest leaf; root depth = 0. "Level" and "depth" are used interchangeably.'] ] },
      { name: 'Binary Tree Types', src: 'L6 Trees and Binary Search Trees · pp.29, 32-34', rows: [
        ['Binary tree', 'Each node can have at most two children (left and right).'],
        ['Full binary tree', 'Every node has either two or no children.'],
        ['Perfect binary tree', 'Every non-leaf node has exactly two children and all leaves are at the same level.'],
        ['Complete binary tree', 'All levels except possibly the last are completely filled, and nodes on the last level sit as far left as possible (the last leaf may lack a right sibling), so it does not have to be a full binary tree. Clarification: the slide says "every level must be completely filled", but its own p.34 example tree leaves the last level partially filled, so the standard definition is used here.'] ] },
      { name: 'Binary Search Tree (BST)', src: 'L6 Trees and Binary Search Trees · pp.36, 41', rows: [
        ['Main rule', 'For any node: all values in the left child and its descendants are smaller than the node value; all values in the right child and its descendants are greater.'],
        ['Node structure', 'Each node holds: data, a left-child pointer and a right-child pointer.'] ] },
      { name: 'Queue Operations (Array Implementation)', src: 'Lab 3 Queue deck (CS 212_Fall 2026-2027_Lab3.pdf) · pp.4-11 (slide-literal code; see caveat row)', rows: [
        ['Enqueue', 'Insert/add an element at the end of the queue. Overflow when rear == n - 1; on the first insert front is set to 0, then rear++ and queue[rear] = val.'],
        ['Dequeue', 'Remove/delete the element from the front. Underflow when front == -1 || front > rear; otherwise the front value is removed and front++.'],
        ['isEmpty', 'Returns true when front == -1 || front > rear, false otherwise.'],
        ['isFull', 'Returns true when rear == n - 1 (array of capacity n), false otherwise.'],
        ['Peek', 'Returns queue[front] without removing it; if empty it prints "queue is empty" and returns -1.'],
        ['getrear', 'Returns the rear element queue[rear] without removing it; prints "Queue is empty" and returns -1 when rear == -1.'],
        ['size', 'Slide code: 0 when front == -1, otherwise rear - front + 1.'],
        ['Caveat: slide-literal code', 'These rows reproduce the lab slides exactly, not universally correct queue code. getrear tests only rear == -1, so after the queue is fully drained (front > rear, rear unchanged) it returns the stale last-rear value instead of signaling empty; a correct getrear uses the same front == -1 || front > rear test the slide\'s own isEmpty and Peek use. size stays correct in the slide\'s own flow: the guarded dequeue stops at front = rear + 1, so a drained queue gives rear - front + 1 = 0.'] ] },
      { name: 'Linked List Operations', src: 'Lab 5 Linked List deck (CS 212_Fall 2026-2027_Lab5.pdf) · pp.3-9', rows: [
        ['Node structure', 'Each node holds data and a next pointer; HEAD points to the first node and the last node\'s next is NULL.'],
        ['Insert', 'Add a new element to the linked list.'],
        ['Delete', 'Remove the existing elements.'],
        ['Traversal', 'Traverse the linked list from start to end (access each element of the linked list).'],
        ['Display', 'Displays the complete list.'],
        ['Search', 'Searches an element using the given key (find a node in the linked list).'],
        ['Sort', 'Sort the nodes of the linked list.'] ] },
      { name: 'Stack Operations (Array Implementation)', src: 'Lab 2 deck (CS 212_Fall 2026-2027_Lab2.pdf) · pp.7-13 (slide-literal code; see caveat row)', rows: [
        ['Stack as ADT', 'An Abstract Data Type defines what data is stored and what operations can be performed, without specifying how it is implemented; the ADT does not say whether an array or a linked list is used.'],
        ['push(val)', 'Insert/add an element to the top of the stack. Slide code: overflow ("Stack Overflow") when top >= n - 1; otherwise top++ then stack[top] = val.'],
        ['pop()', 'Remove an element from the top. Slide code: underflow ("Stack Underflow") when top <= -1; otherwise the popped value is printed and top--.'],
        ['top()/peek()', 'Returns the top element stack[top] without removing it; prints "Stack is empty!" and returns -1 when top == -1.'],
        ['isEmpty', 'Checks if the stack is empty or not (true if empty, else false).'],
        ['isFull', 'Checks if the stack has reached its maximum capacity (array of size n).'],
        ['size', 'Returns the current number of elements in the stack.'],
        ['Caveat: slide-literal code', 'These rows reproduce the lab slides exactly. The slide code declares a global variable top AND a function top() with the same name, which collide in C++ (redeclaration); a compiling implementation must rename one, for example peek() for the function or topIndex for the variable.'] ] }
    ]
  };
  FORMULA_SHEETS.cs211 = {
    note: 'Extracted from the ingested lecture slides and checked against the original PDFs. Always verify against the lectures themselves.',
    groups: [
      { name: 'EBNF Extensions', src: 'L5 EBNF, Its Extensions and Converting from BNF · pp.5-11', rows: [
        ['Optional part [ ]', 'Brackets delimit an optional part of a right-hand side. Example: <if_stmt> → if (<expression>) <statement> [else <statement>].'],
        ['Repetition { }', 'Braces mean the enclosed part can be repeated indefinitely or left out altogether. Example: <ident_list> → <identifier> {, <identifier>}.'],
        ['Multiple choice ( )', 'When a single element must be chosen from a group, the options go in parentheses separated by the OR operator |.'],
        ['Metasymbols', 'The brackets, braces and parentheses of EBNF are metasymbols: notational tools, not terminal symbols of the syntax they describe.'] ] },
      { name: 'Axiomatic Semantics', src: 'L6 Axiomatic Semantics (Lectures 6-7 file) · pp.7, 17, 20-21', rows: [
        ['Hoare triple', '{P} C {Q}: P is the precondition (what must be true before command C), C is the command, Q is the postcondition (what will be true after executing C).'],
        ['Sequence rule', 'If {P} S1 {Q} and {Q} S2 {R}, then {P} S1; S2 {R}: the postcondition of S1 becomes the precondition of S2.'],
        ['Weakest precondition (Dijkstra)', 'wp(S, Q) is the least restrictive condition such that {wp(S, Q)} S {Q}: if wp(S, Q) is true before S, then Q will be true after S. Any weaker condition would not guarantee Q.'] ] },
      { name: 'Recursion in Grammars', src: 'L6 Axiomatic Semantics (Lectures 6-7 file) · p.34', rows: [
        ['Left recursion (LR)', 'A → Aα | β: the rule refers to itself at the left end of a right-hand side.'],
        ['Right recursion (RR)', 'A → β | αA: the self-reference sits at the right end.'] ] },
      { name: 'FIRST and FOLLOW (LL(1) Parsing)', src: 'L8 FIRST, FOLLOW and Predictive LL(1) Parsing · pp.9, 14-16, 46', rows: [
        ['FIRST(A)', 'The terminals that can appear first in a string derived from A; includes ε only if A can derive the empty string.'],
        ['FIRST rule R1 (lecture label)', 'Base contributions: FIRST(t) = {t} for a terminal t, and a direct production X → ε adds ε to FIRST(X). Contributions combine across alternatives.'],
        ['FIRST rule R2 (lecture label)', 'For X → Y1…Yn, add FIRST(Yi)−{ε} and advance to the next symbol only if ALL earlier symbols are nullable.'],
        ['FIRST rule R3 (lecture label)', 'ε enters FIRST(Y1…Yn) if and only if every Yi can derive ε.'],
        ['FOLLOW(A)', 'The terminals that can occur immediately after A in a sentential form derived from the start symbol; may include $ (end of input) but never ε.'],
        ['FOLLOW rule F1 (lecture label)', 'FOLLOW(start symbol) receives {$}.'],
        ['FOLLOW rule F2 (lecture label)', 'For X → αBβ, add FIRST(β)−{ε} to FOLLOW(B).'],
        ['FOLLOW rule F3 (lecture label)', 'If β derives ε (or B is the last symbol), copy FOLLOW(X) into FOLLOW(B). Repeat whole passes until no set grows; ε is never transferred.'] ] }
    ]
  };
  const FORMULA_EMPTY = {};

  function formulas() {
    const names = { cs212: 'CS.212 · Data Structures', ece202: 'ECE202 · Digital Logic Design', cs211: 'CS.211 · Concepts of Programming Languages' };
    const blocks = Object.keys(names).map(k => {
      const sheet = FORMULA_SHEETS[k];
      let inner;
      if (sheet) {
        inner = `<p class="muted">${escx(sheet.note)}</p>` + sheet.groups.map(g =>
          `<div class="card ex-card" style="margin:10px 0"><h3 style="margin:0 0 4px">${escx(g.name)}</h3>
           <div class="muted" style="font-size:12px;margin-bottom:8px">Source: ${escx(g.src)}</div>
           <table style="width:100%;border-collapse:collapse">${g.rows.map(r =>
             `<tr><td style="padding:6px 10px 6px 0;color:var(--mut,#9aa);white-space:nowrap;vertical-align:top">${escx(r[0])}</td>
                  <td dir="ltr" style="padding:6px 0;font-family:ui-monospace,monospace;text-align:left">${escx(r[1])}</td></tr>`).join('')}</table></div>`
        ).join('');
      } else {
        inner = `<div class="notice info">${escx(FORMULA_EMPTY[k] || 'No formula sheet available for this subject yet.')}</div>`;
      }
      return section(escx(names[k]), inner);
    }).join('');
    page('Formula Sheets', 'Key formulas and laws from your ingested lecture slides, with the lecture and page each came from.', blocks);
  }


  /* Exam Focus - topic analysis built ONLY from verified past papers (each row cites its paper + question).
     Historical description only; never a prediction of future exam content. */
  const EXAM_FOCUS = {
    cs212: {
      name: 'CS.212 · Data Structures',
      coverage: 'Fully analyzed: Fall 2024-25 written final (all 6 questions, 60 marks, 2 hours). Partially analyzed: Old Exams compilation (86 pages) - pages 1-15 checked from its text layer and pages 30-34 image-sampled, which cover a Spring 2022/23 final and another MCQ set; compilation pages 16-86 are scanned images that were not fully analyzed.',
      format: [
        'Fall 2024-25 written final: 60 marks, 2 hours, 6 questions - a 15-mark MCQ block, then written questions on stacks, linked lists, sorting, graphs and AVL trees.',
        'Spring 2022/23 final (inside compilation, sampled): 60 marks, 2 hours, answer-all format - MCQ block, stack/queue code outputs, tree traversals, sorting demonstrations.',
      ],
      topics: [
        ['Stacks', 'Push/pop operation output sequences; underflow; meaning of "ordered" entries; stack used for recursion and postfix evaluation.', 'Fall 24-25 final Q1 (multiple MCQs) + Q2 (8 marks); Spring 22/23 final Q1, Q2 and Q4 (sampled).'],
        ['Infix to postfix conversion and postfix evaluation', 'Convert expressions to postfix; evaluate postfix with values; count conversion steps.', 'Fall 24-25 final Q1 (2 MCQs); Spring 22/23 final Q1; compilation pp.31-32 Q4 (sampled).'],
        ['Queues and circular queues', 'FIFO property; circular rear increment (rear+1)%CAPACITY; full/empty conditions; BFS uses a queue.', 'Fall 24-25 final Q1; Spring 22/23 final Q1; compilation p.30 Q13-15 (sampled).'],
        ['Linked lists', 'Node fields; singly vs doubly vs circular; header nodes; outputs of list statements; valid/invalid pointer operations.', 'Fall 24-25 final Q1 + Q3 (10 marks); Spring 22/23 final Q1; compilation p.30 Q1-12 (sampled).'],
        ['Trees and traversals', 'Pre-order, in-order, post-order traversals; depth and height; parent/children/siblings; full binary tree definition.', 'Spring 22/23 final Q3 (14 marks, sampled); compilation p.31 Q5 (sampled); Fall 24-25 final Q1 (tree MCQs).'],
        ['Sorting algorithms', 'Demonstrate bubble, selection and insertion sorts step by step; merge and radix sort questions.', 'Fall 24-25 final Q4 (10 marks); Spring 22/23 final Q5 (9 marks, sampled).'],
        ['Graphs', 'Adjacency matrix construction; BFS and DFS traversal order; chromatic number.', 'Fall 24-25 final Q5 (8 marks).'],
        ['AVL trees', 'Build an AVL tree from an insertion sequence with rotations.', 'Fall 24-25 final Q6 (9 marks).'],
      ],
    },
    cs211: {
      name: 'CS.211 · Concepts of Programming Languages',
      coverage: 'Fully analyzed: Fall 2025-26 practical (lab) final (all 3 questions, 30 marks, 1 hour, 7 pages). This is the only verified past paper for this subject, so the topics below describe that one exam; no recurrence across papers can be claimed.',
      format: [
        'Fall 2025-26 practical final: 30 marks, 1 hour, 3 questions - LL(1) parsing, derivations and parse trees, then grammar transformations and lexical analysis.',
      ],
      topics: [
        ['LL(1) parsing', 'Construct the LL(1) parsing table from given FIRST/FOLLOW sets, then parse a token string showing the stack, remaining input and applied rule at each step.', 'Fall 25-26 practical Q1 (10 marks: table 5 + trace 5).'],
        ['Derivations and parse trees', 'Write leftmost and rightmost derivations and draw the parse trees for an if-then-else grammar.', 'Fall 25-26 practical Q2 (10 marks).'],
        ['Grammar transformations', 'Convert BNF to EBNF; eliminate left recursion; eliminate left factoring.', 'Fall 25-26 practical Q3.1-3.3 (7.5 marks).'],
        ['Lexical analysis', 'List the lexemes and token types of a code statement in order.', 'Fall 25-26 practical Q3.4 (2.5 marks).'],
      ],
    },
    ece202: {
      name: 'ECE202 · Digital Logic Design',
      coverage: 'No verified FINAL paper found in the shared course pack yet. Fully analyzed from verified model-answer papers: mid-semester Exam (1) Fall 2024-25 (26/10/2024, all 6 questions, 30 marks, 1 hour) and mid-semester Exam (2) Fall 2025-26 (22/11/2025, all 4 questions, 30 marks, 1 hour). Also fully analyzed: Quiz 1 Fall 2025-26 (Dr. Yara AlaaEldin, 3 questions, 30 marks, 1 hour, model answer). These are in-semester assessments, not the final, so they show assessed topics and question style only; no final-exam weighting can be claimed.',
      format: [
        'Exam (1) Fall 2024-25: 30 marks, 1 hour, 6 questions x 5 marks - True/False on digital basics, binary arithmetic, code conversions, circuit analysis with Boolean simplification, minimal-gate realization, and gate identification with NOR-only redesign. Answers on the question sheet; no calculator.',
        'Exam (2) Fall 2025-26: 30 marks, 1 hour, 4 questions - 5 MCQs on gates, two Boolean algebra proofs (10 marks), a 3-variable K-map simplification (5 marks), and a 4-variable Quine-McCluskey simplification (10 marks). No calculator.',
        'Quiz 1 Fall 2025-26: 30 marks, 1 hour, 3 questions - MCQs on digital basics (8 marks), number conversions (12 marks) and 2\'s complement subtraction (10 marks).',
      ],
      topics: [
        ['Logic gate fundamentals and identification', 'Read gate circuits and write F; identify a gate from its truth table; XNOR/NAND/NOR behavior; series switches as AND.', 'Exam (2) Fall 25-26 Q1 (5 MCQs); Exam (1) Fall 24-25 Q1 (T/F) and Q6 (identify NAND); Quiz 1 Fall 25-26 Q1 (MCQs on voltage levels, digital-vs-analog, AND behavior).'],
        ['Universal-gate implementation', 'Redesign a circuit using NOR gates only (and know NAND-only equivalents).', 'Exam (1) Fall 24-25 Q6 (5 marks).'],
        ['Number systems and codes', 'Add, subtract, multiply and divide in binary; convert between decimal, binary, hexadecimal, octal, Gray code, BCD and Excess-3, showing the steps; 2\'s complement subtraction in both directions with sign handling.', 'Exam (1) Fall 24-25 Q2 and Q3 (10 marks total); Quiz 1 Fall 25-26 Q2 (12 marks) and Q3 (10 marks).'],
        ['Boolean algebra proofs and simplification', "Prove identities such as A + A'B = A + B; analyze a drawn circuit to its expression and simplify with DeMorgan; realize a function with the fewest gates.", 'Exam (2) Fall 25-26 Q2 (10 marks); Exam (1) Fall 24-25 Q4 and Q5 (10 marks total).'],
        ['Karnaugh map simplification', 'Simplify a 3-variable sum-of-minterms function on a K-map.', 'Exam (2) Fall 25-26 Q3 (5 marks).'],
        ['Quine-McCluskey tabular method', 'Simplify a 4-variable function with the tabular method, including the prime-implicant chart.', 'Exam (2) Fall 25-26 Q4 (10 marks).'],
      ],
    },
  };

  function examFocus() {
    const blocks = Object.keys(EXAM_FOCUS).map(k => {
      const f = EXAM_FOCUS[k];
      let inner;
      if (!f.topics) {
        inner = '<div class="notice info">No verified past exam paper found in the shared course pack for this subject yet, so no exam-focus analysis is shown. The formula sheet for this subject (built from verified lecture slides) is on the Formula Sheets page. This analysis will be added only when a real paper is verified.</div>';
      } else {
        const rows = f.topics.map(t =>
          `<tr><td style="padding:8px 10px 8px 0;vertical-align:top;color:var(--gold,#d4af37);font-weight:600;white-space:normal">${escx(t[0])}</td>
               <td style="padding:8px 10px 8px 0;vertical-align:top">${escx(t[1])}</td>
               <td style="padding:8px 0;vertical-align:top" class="muted">${escx(t[2])}</td></tr>`).join('');
        inner =
          (f.coverage ? `<div class="notice info" style="margin-bottom:10px">Source coverage: ${escx(f.coverage)}</div>` : '') +
          section('Historical exam format', `<ul class="notes" style="margin:0;padding-left:18px">${f.format.map(x => `<li>${escx(x)}</li>`).join('')}</ul>`) +
          `<div class="card ex-card" style="margin:10px 0"><h3 style="margin:0 0 8px">Topics identified in verified past papers</h3>
           <table class="ex-tt" style="width:100%;border-collapse:collapse;font-size:14px">
           <tr><th style="text-align:left;padding-bottom:6px">Topic</th><th style="text-align:left;padding-bottom:6px">What was asked</th><th style="text-align:left;padding-bottom:6px">Evidence (paper · question)</th></tr>
           ${rows}</table></div>` +
          `<div class="rowflex" style="margin-top:8px">
            <a class="btn ghost sm" href="#/subject/${k}">Practice this subject's question bank</a>
            <a class="btn ghost sm" href="#/exam/${k}">Mock exam from real questions</a>
            <a class="btn ghost sm" href="#/workspace/formulas">Formula sheet</a>
            <a class="btn ghost sm" href="#/past-exams">Past exam archive</a>
          </div>`;
      }
      return section(escx(f.name), inner);
    }).join('');
    page('Exam Focus', 'Important topics and frequently tested concepts, identified only from verified past exams with the exact paper and question each came from.',
      `<div class="notice warn" style="margin-bottom:12px">This page describes past exams only. A topic appearing here is evidence that it appeared in those specific past papers - it is not a prediction, and nothing here guarantees or estimates what will be on your exam.</div>` + blocks);
  }


  /* Interactive Labs (B3 section 10): five client-side visualizers, no backend. */
  const LAB_BOX = 'display:inline-block;min-width:44px;padding:8px 10px;margin:3px;border:1px solid var(--gold,#d4af37);border-radius:8px;text-align:center;font-family:ui-monospace,monospace;background:rgba(212,175,55,.08)';
  const LAB_MSG = 'min-height:20px;margin:8px 0;font-size:13px;color:var(--gold,#d4af37)';

  function labs() {
    page('Interactive Labs', 'Hands-on visualizers for the logic and data-structure topics in your courses. Everything runs locally in your browser; nothing is sent anywhere.',
      section('Logic Gates Simulator (ECE202)', `
        <div class="rowflex" style="flex-wrap:wrap;gap:6px;margin-bottom:10px" id="lg-gates">
          ${['AND','OR','NOT','NAND','NOR','XOR','XNOR'].map(g=>`<button type="button" class="btn ghost sm" data-gate="${g}">${g}</button>`).join('')}
        </div>
        <div class="rowflex" style="gap:14px;align-items:center;flex-wrap:wrap">
          <button type="button" class="btn ghost sm" id="lg-a">A = 0</button>
          <button type="button" class="btn ghost sm" id="lg-b">B = 0</button>
          <span style="${LAB_BOX}" id="lg-out">OUT = 0</span>
        </div>
        <div style="${LAB_MSG}" id="lg-desc"></div>
        <table style="border-collapse:collapse;margin-top:8px;font-family:ui-monospace,monospace;font-size:13px" id="lg-tt"></table>`) +
      section('Stack Visualizer (CS.212)', `
        <div class="rowflex" style="gap:8px;flex-wrap:wrap;margin-bottom:8px">
          <input id="st-val" type="number" placeholder="value" style="width:90px;padding:6px 8px;border-radius:8px;border:1px solid var(--gold,#d4af37);background:transparent;color:inherit">
          <button type="button" class="btn ghost sm" id="st-push">Push</button>
          <button type="button" class="btn ghost sm" id="st-pop">Pop</button>
          <span class="muted">Capacity 8</span>
        </div>
        <div style="${LAB_MSG}" id="st-msg"></div>
        <div id="st-view" style="display:flex;flex-direction:column-reverse;align-items:flex-start"></div>`) +
      section('Queue Visualizer (CS.212)', `
        <div class="rowflex" style="gap:8px;flex-wrap:wrap;margin-bottom:8px">
          <input id="qu-val" type="number" placeholder="value" style="width:90px;padding:6px 8px;border-radius:8px;border:1px solid var(--gold,#d4af37);background:transparent;color:inherit">
          <button type="button" class="btn ghost sm" id="qu-enq">Enqueue</button>
          <button type="button" class="btn ghost sm" id="qu-deq">Dequeue</button>
          <span class="muted">Capacity 8 · dequeue removes the front</span>
        </div>
        <div style="${LAB_MSG}" id="qu-msg"></div>
        <div id="qu-view"></div>`) +
      section('Linked List Visualizer (CS.212)', `
        <div class="rowflex" style="gap:8px;flex-wrap:wrap;margin-bottom:8px">
          <input id="ll-val" type="number" placeholder="value" style="width:90px;padding:6px 8px;border-radius:8px;border:1px solid var(--gold,#d4af37);background:transparent;color:inherit">
          <button type="button" class="btn ghost sm" id="ll-ins">Insert at end</button>
          <button type="button" class="btn ghost sm" id="ll-del">Delete first match</button>
          <button type="button" class="btn ghost sm" id="ll-find">Search</button>
        </div>
        <div style="${LAB_MSG}" id="ll-msg"></div>
        <div id="ll-view" style="display:flex;align-items:center;flex-wrap:wrap;gap:4px"></div>`) +
      section('Pointer Visualizer (CS.212)', `
        <p class="muted" style="margin:0 0 8px">Step through real C++ pointer semantics. Variables live at fixed (illustrative) addresses; a pointer cell stores an address and its arrow shows what it points to.</p>
        <div class="rowflex" style="gap:8px;margin-bottom:8px">
          <button type="button" class="btn ghost sm" id="pt-prev">Back</button>
          <button type="button" class="btn ghost sm" id="pt-next">Next step</button>
          <span class="muted" id="pt-step"></span>
        </div>
        <div style="${LAB_MSG}" id="pt-code" dir="ltr"></div>
        <div id="pt-view"></div>
        <div class="muted" style="font-size:13px;margin-top:6px" id="pt-note"></div>`));
    bindLogicGates(); bindStack(); bindQueue(); bindList(); bindPointer();
  }

  function bindLogicGates() {
    const FN = { AND:(a,b)=>a&&b, OR:(a,b)=>a||b, NOT:(a)=>a?0:1, NAND:(a,b)=>(a&&b)?0:1, NOR:(a,b)=>(a||b)?0:1, XOR:(a,b)=>(a^b), XNOR:(a,b)=>(a^b)?0:1 };
    const DESC = { AND:'Output is 1 only when both inputs are 1.', OR:'Output is 1 when at least one input is 1.', NOT:'Single input inverter: output is the opposite of A.', NAND:'AND followed by NOT: 0 only when both inputs are 1.', NOR:'OR followed by NOT: 1 only when both inputs are 0.', XOR:'Output is 1 when the inputs differ.', XNOR:'Output is 1 when the inputs match.' };
    let gate = 'AND', A = 0, B = 0;
    const draw = () => {
      const one = gate === 'NOT';
      $('#lg-a').textContent = 'A = ' + A;
      $('#lg-b').textContent = 'B = ' + B;
      $('#lg-b').style.display = one ? 'none' : '';
      $('#lg-out').textContent = 'OUT = ' + (one ? FN[gate](A) : FN[gate](A, B));
      $('#lg-desc').textContent = DESC[gate];
      const rows = one ? [[0],[1]] : [[0,0],[0,1],[1,0],[1,1]];
      $('#lg-tt').innerHTML = '<tr>' + (one ? '<th style="padding:3px 12px">A</th>' : '<th style="padding:3px 12px">A</th><th style="padding:3px 12px">B</th>') + '<th style="padding:3px 12px;color:var(--gold,#d4af37)">' + gate + '</th></tr>' +
        rows.map(r => '<tr>' + r.map(v => `<td style="padding:3px 12px;text-align:center">${v}</td>`).join('') + `<td style="padding:3px 12px;text-align:center;color:var(--gold,#d4af37)">${one ? FN[gate](r[0]) : FN[gate](r[0], r[1])}</td></tr>`).join('');
      $$('#lg-gates [data-gate]').forEach(b => b.style.opacity = b.dataset.gate === gate ? '1' : '.55');
    };
    $$('#lg-gates [data-gate]').forEach(b => b.onclick = () => { gate = b.dataset.gate; draw(); });
    $('#lg-a').onclick = () => { A = A ? 0 : 1; draw(); };
    $('#lg-b').onclick = () => { B = B ? 0 : 1; draw(); };
    draw();
  }

  function bindStack() {
    const CAP = 8; let st = [];
    const msg = t => { $('#st-msg').textContent = t; };
    const draw = () => {
      $('#st-view').innerHTML = st.map((v, i) =>
        `<div style="display:flex;align-items:center;gap:8px"><span style="${LAB_BOX}">${v}</span>${i === st.length - 1 ? '<span style="color:var(--gold,#d4af37);font-size:12px">&larr; TOP</span>' : ''}</div>`).join('') || '<span class="muted">empty stack</span>';
    };
    $('#st-push').onclick = () => {
      const v = $('#st-val').value;
      if (v === '') { msg('Enter a value to push.'); return; }
      if (st.length >= CAP) { msg('Overflow: the stack is full (capacity ' + CAP + ').'); return; }
      st.push(+v); msg('Pushed ' + v + '. TOP is now ' + v + '.'); draw();
    };
    $('#st-pop').onclick = () => {
      if (!st.length) { msg('Underflow: cannot pop from an empty stack.'); return; }
      msg('Popped ' + st.pop() + '.'); draw();
    };
    draw();
  }

  function bindQueue() {
    const CAP = 8; let q = [];
    const msg = t => { $('#qu-msg').textContent = t; };
    const draw = () => {
      $('#qu-view').innerHTML = q.length
        ? q.map((v, i) => `<span style="${LAB_BOX}">${v}</span>${i === 0 ? '<span style="color:var(--gold,#d4af37);font-size:12px">&larr; FRONT&nbsp;</span>' : ''}${i === q.length - 1 ? '<span style="color:var(--gold,#d4af37);font-size:12px">&larr; REAR</span>' : ''}`).join(' ')
        : '<span class="muted">empty queue</span>';
    };
    $('#qu-enq').onclick = () => {
      const v = $('#qu-val').value;
      if (v === '') { msg('Enter a value to enqueue.'); return; }
      if (q.length >= CAP) { msg('Queue is full (capacity ' + CAP + ').'); return; }
      q.push(+v); msg('Enqueued ' + v + ' at the rear.'); draw();
    };
    $('#qu-deq').onclick = () => {
      if (!q.length) { msg('Cannot dequeue from an empty queue.'); return; }
      msg('Dequeued ' + q.shift() + ' from the front (FIFO).'); draw();
    };
    draw();
  }

  function bindList() {
    let list = [10, 20, 30]; let found = -1;
    const msg = t => { $('#ll-msg').textContent = t; };
    const draw = () => {
      const nodes = list.map((v, i) =>
        `<span style="${LAB_BOX}${i === found ? ';outline:2px solid var(--gold,#d4af37);background:rgba(212,175,55,.25)' : ''}">${v} | &bull;</span>${i < list.length - 1 ? '<span style="color:var(--gold,#d4af37)">&rarr;</span>' : ''}`).join('');
      $('#ll-view').innerHTML = list.length
        ? `<span style="color:var(--gold,#d4af37);font-size:12px">HEAD&nbsp;</span>` + nodes + '<span style="color:var(--gold,#d4af37)">&rarr;</span><span class="muted" style="margin-left:4px">NULL</span>'
        : '<span class="muted">HEAD &rarr; NULL (empty list)</span>';
    };
    $('#ll-ins').onclick = () => {
      const v = $('#ll-val').value;
      if (v === '') { msg('Enter a value to insert.'); return; }
      list.push(+v); found = -1; msg('Inserted ' + v + ' at the end.'); draw();
    };
    $('#ll-del').onclick = () => {
      const v = $('#ll-val').value; const i = list.indexOf(+v);
      if (v === '') { msg('Enter a value to delete.'); return; }
      if (i < 0) { msg(v + ' not found; nothing deleted.'); return; }
      list.splice(i, 1); found = -1; msg('Deleted first node holding ' + v + '; the previous node pointer now skips it.'); draw();
    };
    $('#ll-find').onclick = () => {
      const v = $('#ll-val').value; found = list.indexOf(+v);
      msg(found < 0 ? v + ' is not in the list (reached NULL).' : 'Found ' + v + ' at index ' + found + ' after ' + (found + 1) + ' pointer hop(s) from HEAD.');
      draw();
    };
    draw();
  }

  function bindPointer() {
    const AX = '0x7fff1000', AY = '0x7fff1004', AP = '0x7fff2000', APP = '0x7fff2008';
    const STEPS = [
      { code: 'int x = 5;   int y = 10;', mem: { x: 5, y: 10, p: null, pp: null }, note: 'x and y are declared. x lives at ' + AX + ', y at ' + AY + '. No pointers yet.' },
      { code: 'int *p = &x;', mem: { x: 5, y: 10, p: AX, pp: null }, note: 'p stores the ADDRESS of x (' + AX + '). The arrow from p points to x.' },
      { code: '*p = 7;', mem: { x: 7, y: 10, p: AX, pp: null }, note: 'Dereferencing: *p means "the variable p points to", which is x. x becomes 7, p itself does not change.' },
      { code: 'p = &y;', mem: { x: 7, y: 10, p: AY, pp: null }, note: 'Pointer reassignment: p now stores ' + AY + ' and points to y. Nothing happens to x.' },
      { code: '*p = *p + x;', mem: { x: 7, y: 17, p: AY, pp: null }, note: '*p is y (10), plus x (7) = 17, stored back through p into y.' },
      { code: 'int **pp = &p;', mem: { x: 7, y: 17, p: AY, pp: AP }, note: 'pp is a pointer to a pointer: it stores the address of p (' + AP + '). Its arrow points to p.' },
      { code: '**pp = 42;', mem: { x: 7, y: 42, p: AY, pp: AP }, note: 'Double dereference: **pp follows pp to p, then p to y. y becomes 42.' },
    ];
    let i = 0;
    const cell = (name, addr, val) => `<div style="${LAB_BOX};min-width:120px"><div style="font-size:11px;opacity:.7">${addr}</div><div><b>${name}</b> = ${val === null ? '?' : val}</div></div>`;
    const draw = () => {
      const s = STEPS[i], m = s.mem;
      $('#pt-step').textContent = 'Step ' + (i + 1) + ' of ' + STEPS.length;
      $('#pt-code').textContent = s.code;
      $('#pt-note').textContent = s.note;
      let html = '<div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap">';
      html += cell('x', AX, m.x) + cell('y', AY, m.y);
      if (m.p !== null) {
        html += '<span style="color:var(--gold,#d4af37);font-size:20px">' + (m.p === AX ? '&larr;' : '&darr;') + '</span>' + cell('p', AP, m.p);
      }
      if (m.pp !== null) html += '<span style="color:var(--gold,#d4af37);font-size:20px">&larr;</span>' + cell('pp', APP, m.pp);
      html += '</div>';
      if (m.p !== null) html += `<div class="muted" style="font-size:12px;margin-top:6px">p points to ${m.p === AX ? 'x' : 'y'} (${m.p})${m.pp ? ' · pp points to p (' + AP + ')' : ''}</div>`;
      $('#pt-view').innerHTML = html;
    };
    $('#pt-next').onclick = () => { if (i < STEPS.length - 1) { i++; draw(); } };
    $('#pt-prev').onclick = () => { if (i > 0) { i--; draw(); } };
    draw();
  }

  route(/^\/workspace$/,home);

  /* Code Runner — real execution via Judge0 CE public instance (ce.judge0.com).
     Only the code and stdin the student types are sent; nothing account-linked. */
  const CODE_LANGS = [
    ['105', 'C++ (GCC 14.1.0)', '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, MUST!" << endl;\n    return 0;\n}'],
    ['103', 'C (GCC 14.1.0)', '#include <stdio.h>\n\nint main(void) {\n    printf("Hello, MUST!\\n");\n    return 0;\n}'],
    ['113', 'Python (3.14.0)', 'print("Hello, MUST!")'],
    ['91', 'Java (JDK 17.0.6)', 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, MUST!");\n    }\n}'],
    ['102', 'JavaScript (Node.js 22)', 'console.log("Hello, MUST!");']
  ];
  const b64e = s => btoa(unescape(encodeURIComponent(s)));
  const b64d = s => { try { return decodeURIComponent(escape(atob(s || ''))); } catch (e) { return atob(s || ''); } };

  const OWNER_UID = '2ec4e4aa-e56d-4bd2-8fb9-68c5023ccd0a';
  function codeRunner() {
    const isOwner = !!(window.MFB && MFB.user && MFB.user.id === OWNER_UID);
    page('Code Runner', 'Write code, give it input, and run it for real. Currently activated for the site owner while the execution service terms are being reviewed.', '');
    if (!isOwner) {
      $('#app').insertAdjacentHTML('beforeend', `<section class="blk"><div class="card ex-panel">
        <p>Code Runner is not activated for everyone yet. It is being tested with the site owner first.</p>
      </div></section>`);
      return;
    }
    $('#app').insertAdjacentHTML('beforeend', `<section class="blk"><div class="card ex-panel">
      <p class="hint" style="margin:0 0 10px">Execution happens on the public Judge0 CE service (ce.judge0.com), directly from your browser. Nothing is added automatically: only the code and input you type below are sent, so anything you paste (including personal or course material) goes to that service, along with ordinary network metadata like your IP address. How long Judge0 keeps submissions on this public instance is not published. Do not paste personal data. This page is currently shown only to the site owner during testing; the service itself is public.</p>
      <label class="hint" for="cr-lang">Language</label>
      <select id="cr-lang" class="input" style="width:100%;margin:6px 0 10px">${CODE_LANGS.map((l, i) => `<option value="${i}">${escx(l[1])}</option>`).join('')}</select>
      <label class="hint" for="cr-src">Code</label>
      <textarea id="cr-src" dir="ltr" spellcheck="false" style="width:100%;min-height:220px;margin:6px 0 10px;font-family:ui-monospace,monospace;font-size:13.5px;line-height:1.55;text-align:left"></textarea>
      <label class="hint" for="cr-in">Input (stdin, optional)</label>
      <textarea id="cr-in" dir="ltr" spellcheck="false" style="width:100%;min-height:70px;margin:6px 0 12px;font-family:ui-monospace,monospace;font-size:13.5px;text-align:left" placeholder="Each value on its own line"></textarea>
      <button type="button" class="btn" id="cr-go">Run</button>
      <span class="hint" style="margin-inline-start:10px" id="cr-note">Free public service - heavy use may be rate-limited.</span>
      <div id="cr-out" style="margin-top:14px"></div>
    </div></section>`);
    const srcEl = $x('#cr-src'), langEl = $x('#cr-lang'), out = $x('#cr-out');
    const loadTemplate = () => { srcEl.value = CODE_LANGS[Number(langEl.value)][2]; };
    langEl.addEventListener('change', loadTemplate);
    loadTemplate();
    $x('#cr-go').addEventListener('click', async () => {
      const code = srcEl.value;
      if (!code.trim()) { out.innerHTML = statusNote('Write some code first.'); return; }
      out.innerHTML = statusNote('Compiling and running...');
      try {
        const ctl = new AbortController();
        const timer = setTimeout(() => ctl.abort(), 45000);
        const res = await fetch('https://ce.judge0.com/submissions?base64_encoded=true&wait=true', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ language_id: Number(CODE_LANGS[Number(langEl.value)][0]), source_code: b64e(code), stdin: b64e($x('#cr-in').value) }),
          signal: ctl.signal
        });
        clearTimeout(timer);
        if (!res.ok) {
          out.innerHTML = statusNote('The execution service rejected the request (HTTP ' + res.status + '). It may be rate-limited - wait a minute and try again.');
          return;
        }
        const d = await res.json();
        const status = d.status && d.status.description || 'Unknown';
        const stdout = b64d(d.stdout), stderr = b64d(d.stderr), comp = b64d(d.compile_output), msg = b64d(d.message);
        const block = (label, txt, cls) => txt ? `<div style="margin-top:10px"><div class="hint">${label}</div><pre dir="ltr" class="${cls}" style="text-align:left;white-space:pre-wrap;margin:4px 0 0;padding:10px;border-radius:8px;background:rgba(0,0,0,.25)">${escx(txt)}</pre></div>` : '';
        out.innerHTML = `<div class="card" style="margin-top:4px">
          <p style="margin:0"><strong>Status:</strong> ${escx(status)}${d.time ? ` &middot; <span class="hint">${escx(d.time)}s${d.memory ? ' · ' + escx(String(d.memory)) + ' KB' : ''}</span>` : ''}</p>
          ${block('Output (stdout)', stdout)}
          ${block('Errors (stderr)', stderr)}
          ${block('Compiler output', comp)}
          ${block('Service message', msg)}
          ${(!stdout && !stderr && !comp && !msg) ? '<p class="hint" style="margin-top:8px">Program finished with no output.</p>' : ''}
        </div>`;
      } catch (e) {
        out.innerHTML = statusNote('Could not reach the execution service (network error or timeout). Check your connection and try again.');
      }
    });
  }

  route(/^\/workspace\/formulas$/,formulas);
  route(/^\/workspace\/exam-focus$/,examFocus);
  route(/^\/workspace\/labs$/,labs);
  route(/^\/workspace\/code$/,codeRunner);
  route(/^\/workspace\/gpa$/,gpa);
  route(/^\/workspace\/assignments$/,assignments);
  async function leaderboard(){
    if(window.MFB&&!MFB.ready){
      $('#app').innerHTML='<div class="card empty">Loading account\u2026</div>';
      let t=0;const h=setInterval(()=>{if(location.hash!=='#/workspace/leaderboard')return clearInterval(h);if(MFB.ready||++t>30){clearInterval(h);leaderboard();}},150);
      return;
    }
    if(!(window.MFB&&MFB.ready&&MFB.user)){
      page('Leaderboard','An optional class ranking by study XP.',statusNote('The leaderboard is private by default: nobody is listed automatically. Only students who join can see the board, and you can leave anytime, which removes your row completely.')+`<div class="card ex-panel"><p class="hint">Sign in to join the optional leaderboard.</p><a class="btn" href="#/account">Sign in</a></div>`);
      return;
    }
    const {data:mine,error:mErr}=await MFB.sb.from('leaderboard_entries').select('user_id,display_name,xp').eq('user_id',MFB.user.id).maybeSingle();
    if(mErr&&mErr.code!=='PGRST116'){page('Leaderboard','An optional class ranking by study XP.',statusNote('Leaderboard database is not ready. Apply the SQL migration before using this feature.'));return;}
    let board='';
    if(mine){
      const {data,error}=await MFB.sb.from('leaderboard_entries').select('user_id,display_name,xp').order('xp',{ascending:false}).limit(50);
      if(error){board='<p class="hint">Could not load the board: '+escx(error.message)+'</p>';}
      else board=(data||[]).map((r,i)=>`<div class="act ex-row"><span><b>#${i+1} <span dir="auto">${escx(r.display_name)}</span></b>${r.user_id===MFB.user.id?' <span class="pill">you</span>':''}<br><small class="hint">${r.xp} XP</small></span></div>`).join('')||'<p class="hint">No members yet.</p>';
    }
    page('Leaderboard','An optional class ranking by study XP, computed from your real practice activity.',
      statusNote('Privacy: nobody is listed automatically. Only joined members can see this board. Your XP updates from your study activity while you use the site, and leaving removes your row completely.')+
      (mine
        ? `${section('Your membership',`<div class="card ex-panel"><p class="hint">Joined as <b dir="auto">${escx(mine.display_name)}</b> with ${mine.xp} XP. XP syncs automatically as you study.</p><div class="rowflex"><button class="btn ghost sm" id="lb-sync">Sync my XP now</button><button class="btn ghost sm" id="lb-leave">Leave leaderboard</button></div><p class="hint" id="lb-msg"></p></div>`)}${section('Board',`<div class="acts">${board}</div>`)}`
        : `<div class="card ex-panel"><label>Display name on the board<input id="lb-name" dir="auto" maxlength="40" value="${escx((MFB.profile&&MFB.profile.display_name)||'')}"></label><button class="btn" id="lb-join">Join leaderboard</button><p class="hint" id="lb-msg"></p></div>`));
    if(mine){
      $('#lb-sync').onclick=async()=>{let xp=Number(window.MFCurrentXP);if(window.MFComputeXP){try{xp=await window.MFComputeXP();}catch(e){}}if(!Number.isFinite(xp)){$('#lb-msg').textContent='Could not compute your XP right now.';return;}xp=Math.max(0,Math.floor(xp));const {error}=await MFB.sb.from('leaderboard_entries').update({xp,updated_at:new Date().toISOString()}).eq('user_id',MFB.user.id);$('#lb-msg').textContent=error?('Failed: '+error.message):('Synced: '+xp+' XP');if(!error)setTimeout(leaderboard,700);};
      $('#lb-leave').onclick=async()=>{const {error}=await MFB.sb.from('leaderboard_entries').delete().eq('user_id',MFB.user.id);if(error){$('#lb-msg').textContent='Failed: '+error.message;return;}try{localStorage.removeItem('mfb-lb-last');}catch(e){}toast('You left the leaderboard');leaderboard();};
    }else{
      $('#lb-join').onclick=async()=>{const name=$('#lb-name').value.trim();if(!name){$('#lb-msg').textContent='Enter a display name.';return;}let xp=Number(window.MFCurrentXP);if(window.MFComputeXP){try{xp=await window.MFComputeXP();}catch(e){}}xp=Number.isFinite(xp)?Math.max(0,Math.floor(xp)):0;const {error}=await MFB.sb.from('leaderboard_entries').insert({user_id:MFB.user.id,display_name:name.slice(0,40),xp});if(error){$('#lb-msg').textContent='Failed: '+error.message;return;}toast('Joined the leaderboard');leaderboard();};
    }
  }
  route(/^\/workspace\/leaderboard$/,leaderboard);
  route(/^\/workspace\/timetable$/,timetable);
  route(/^\/workspace\/profile$/,profile);
  route(/^\/workspace\/focus$/,focus);
  route(/^\/workspace\/notifications$/,notifications);
  route(/^\/workspace\/challenge$/,challenge);
  route(/^\/workspace\/resources$/,resources);
  route(/^\/workspace\/campus$/,campus);
  route(/^\/workspace\/mindmap$/,mindmap);
  route(/^\/workspace\/offline$/,offline);
  route(/^\/workspace\/analytics$/,analytics);
  route(/^\/workspace\/rooms\/([\w-]+)$/,roomView);
  route(/^\/workspace\/rooms$/,rooms);
  const PDF_FILES = [["1BUgkQoRj6YdNf7ppu5zz-kXaCOct_BxG", "L1 Introduction to Data Structures and Data Types"], ["1SAgU3RvEKXBuzn3D2GD-e4i2Ot3FvOaU", "L2 The Stack and the LIFO Principle"], ["1yrPftVdYaAQR9Uk_PCTQo-OcGdqwp9L6", "L3 The Queue and the FIFO Principle"], ["11I9-A3f7AqVg7__GhhHXzsMfDUskyTP8", "L4 Memory and Pointers in C++"], ["1FWd6a0rmRvnVrG_uvBHvZUe-GHcUh7F9", "L5 Linked Lists"], ["1260o62xHgJR-CTduHMG7WsQWI3RNaeYy", "L6 Trees and Binary Search Trees"], ["1c0RDD2VRFmMpu2SmgW3j6BLxEtL8M7x5", "L2 Number Systems and Binary Numbers (Chapter 1)"], ["1cdOa0SOxU0wj1J6O6F6-NhwUzXiWW_-J", "L3 Binary Codes and Binary Logic"], ["1A9Xkx61FPEjYe1SyO_k1qO-k05looviM", "L5 Boolean Algebra Theorems and Proofs"], ["18PRCbboueiO6SU8ZRHu79k6t8AkRjmmD", "L6 Complement of a Function and Standard Forms (Minterms and Maxterms)"], ["1ExINegqb9NbuSt4QDXnJ-6iDRHWWLJkg", "L8 Gate-Level Minimization and the Karnaugh Map"], ["1DuwUpM3h0h1qEQObMuo6KM8Q_ma9FRPx", "L1 Course Intro and Why We Study Programming Languages"], ["19dF94OTNFzpIksbW5q1olslM3vjwjxLf", "L2 Programming Domains, Language Evaluation Criteria and Classifications"], ["1IavRHfn9b1LvIyhj7BwgL3Fr8FhIDsdF", "L3 Syntax and Semantics, BNF and Derivation"], ["1S5mQbLXI992_HeusO2Ynr8hd5ISPoFJs", "L4 Parse Trees, Ambiguity and Operator Precedence"], ["13Tzm1HzQ6t-tnQDlx5QFucRd367Q-gRR", "L5 EBNF, Its Extensions and Converting from BNF"], ["14ufS3MjEcLtPx1z3bqhRcKnKAsVM7H0p", "L6 Axiomatic Semantics (from the Lectures 6-7 file)"], ["1mbU1LIUaoiMu2AmhwsYq81SUBG9ca5NR", "L8 FIRST, FOLLOW and Predictive LL(1) Parsing"], ["1_UX0LVJMRM6YbmYU3-g3wq1E26YFktkh", "بنك أسئلة المحاضرة 6 واللاب 6 (PDF)"], ["1B5ztc1h66QvI8R1l3gKne2NLEJAedLeR", "Lab 1 · Visual Studio Setup and C++ Basics"], ["1QbSHcfx-qurlj6HkLytAOI-p48BYyz4C", "Lab 2 · Pointers, the Stack ADT and Expressions"], ["1ufaSzbeanI1TGDGriTD-xiHTFQb5_GWs", "Lab 3 · Queue Operations and Types"], ["1Id1KE4N9FDKkH_-dj1s1tL66cv0Za0PB", "Lab 4 · Pointers Review: Dereferencing, References, Pointers with Functions and Arrays"], ["1ogKFI4sA3TXarlF26Vop63g5hzHiB4b4", "Lab 5 · Linked Lists: Operations, Stack and Queue Implementation, Types"], ["1rgbIreMqrz0Nq74dmBjT7XxCMX_i55H9", "Lab 6 · Binary Search Tree (BST) Operations"], ["1XD4gftc8VBtLuPZCP8C6nG7dDQxmaNtz", "Section 1 · Numbering Systems and Conversions"], ["1nSZ5_UdKeNdl493Xy3ejpE786OEVVRIe", "Section 2 · Octal/Hex Conversions and Logic Gates"], ["1xWH7w7o-ipvzzPyzkw2sDgXNprOyLx-4", "Section 1 · Why Study Programming Languages, Domains and Evaluation Criteria"], ["1Tirr32dKNhPlzZ6e1hK47ZiDQm8gDA4s", "Section 2 · Syntax vs Semantics, Lexemes and Tokens"]];
  async function pdfChat() {
    page('Chat With Your PDF','Ask about the course PDFs. Answers are generated from the most relevant searchable lecture pages, with citations to check against the file. Slides that are only images or diagrams are not searchable. Currently activated for the site owner while it is being tested.','');
    $('#app').insertAdjacentHTML('beforeend', `<section class="blk"><div class="card ex-panel">
      <label class="hint" for="pc-file">Material</label>
      <select id="pc-file" class="input" style="width:100%;margin:6px 0 10px"><option value="">All materials</option>${PDF_FILES.map(f=>`<option value="${f[0]}">${escx(f[1])}</option>`).join('')}</select>
      <label class="hint" for="pc-q">Your question (English works best, the slides are in English)</label>
      <input id="pc-q" type="text" class="input" dir="auto" placeholder="What is a stack and how does LIFO work?" style="width:100%;margin:6px 0 12px">
      <button type="button" class="btn" id="pc-go">Ask</button>
      <span class="hint" style="margin-inline-start:10px">20 questions/day per account</span>
      <div id="pc-out" style="margin-top:14px"></div>
    </div></section>`);
    const out = $x('#pc-out');
    $x('#pc-go').addEventListener('click', async () => {
      const question = $x('#pc-q').value.trim();
      const fid = $x('#pc-file').value;
      if (!question) { out.innerHTML = statusNote('Type a question first.'); return; }
      if (!window.MFB || !MFB.sb) { out.innerHTML = statusNote('Backend not ready. Reload the page.'); return; }
      out.innerHTML = statusNote('Searching the lecture pages...');
      try {
        const { data, error } = await MFB.sb.functions.invoke('ai-proxy', { body: { action: 'pdf_chat', question, file_id: fid || undefined } });
        if (error) {
          let code = '', detail = '';
          try { const j = await error.context.json(); code = j.error || ''; detail = j.detail || ''; } catch (e) {}
          if (code === 'sign_in_required') out.innerHTML = statusNote('Sign in first to use PDF chat.');
          else if (code === 'ai_not_activated') out.innerHTML = statusNote('PDF chat is not activated for everyone yet. It is being tested with the site owner first.');
          else if (code === 'daily_cap_reached') out.innerHTML = statusNote('Daily limit reached (20 questions). Try again tomorrow.');
          else out.innerHTML = statusNote('Could not answer right now: ' + escx(detail || code || 'error'));
          return;
        }
        const chip = x => {const fid=String(x.file_id||''),pg=Number(x.page);if(!/^[a-zA-Z0-9_-]+$/.test(fid)||!Number.isSafeInteger(pg)||pg<1)return '';const href='https://drive.google.com/file/d/'+encodeURIComponent(fid)+'/view#page='+pg;return `<a class="chip" href="${escx(href)}" target="_blank" rel="noopener noreferrer">${escx(x.title)} · p.${pg}</a>`;};
        const cited = (data.cited || []).map(chip).join(' ');
        const rest = (data.retrieved || []).filter(r => !(data.cited || []).some(c => c.file_id === r.file_id && c.page === r.page)).map(chip).join(' ');
        out.innerHTML = `<div class="card" style="margin-top:4px"><p dir="auto" style="white-space:pre-wrap">${escx(data.answer || '')}</p>
          ${cited ? `<p class="hint" style="margin-top:8px">Cited from:</p><div style="display:flex;flex-wrap:wrap;gap:6px">${cited}</div>` : ''}
          ${rest ? `<details style="margin-top:8px"><summary class="hint" style="cursor:pointer">Other pages searched (${(data.retrieved||[]).length - (data.cited||[]).length})</summary><div style="margin-top:6px;display:flex;flex-wrap:wrap;gap:6px">${rest}</div></details>` : ''}
          <p class="hint" style="margin-top:8px">The answer is drafted from the cited pages above, always open the file and check. Image-only slides are not searchable, so a diagram-only answer may be incomplete. AI can make mistakes.</p></div>`;
      } catch (e) { out.innerHTML = statusNote('Network error. Try again.'); }
    });
  }
  route(/^\/workspace\/pdf$/, pdfChat);
  async function tutor() {
    page('AI Study Tutor','Explain a concept, solve a problem step by step, get a hint only, or have code explained line by line. Answers are unofficial and may be wrong. Currently activated for the site owner while it is being tested.','');
    $('#app').insertAdjacentHTML('beforeend', `<section class="blk"><div class="card ex-panel">
      <label class="hint">Mode</label>
      <div class="rowflex" id="tu-modes" style="margin:6px 0 10px;gap:6px;flex-wrap:wrap">
        <button type="button" class="btn sm" data-m="explain">Explain</button>
        <button type="button" class="btn ghost sm" data-m="solve">Solve step by step</button>
        <button type="button" class="btn ghost sm" data-m="hint">Hint only</button>
        <button type="button" class="btn ghost sm" data-m="code">Explain code</button>
      </div>
      <label class="hint" for="tu-in">Your question, problem, or code</label>
      <textarea id="tu-in" class="input" rows="5" dir="auto" placeholder="مثال: اشرحلي الفرق بين الستاك والكيو، أو الصق كود عايز تشرحه سطر سطر" style="width:100%;margin:6px 0 12px"></textarea>
      <button type="button" class="btn" id="tu-go">Ask the tutor</button>
      <span class="hint" style="margin-inline-start:10px">Counts toward your 20 AI calls/day</span>
      <div id="tu-out" style="margin-top:14px"></div>
    </div></section>`);
    let mode = 'explain';
    const modes = $x('#tu-modes');
    modes.querySelectorAll('button').forEach(b => b.onclick = () => {
      mode = b.dataset.m;
      modes.querySelectorAll('button').forEach(x => x.classList.toggle('ghost', x.dataset.m !== mode));
    });
    const out = $x('#tu-out');
    $x('#tu-go').addEventListener('click', async () => {
      const input = $x('#tu-in').value.trim();
      if (!input) { out.innerHTML = statusNote('Type a question, problem, or code first.'); return; }
      if (!window.MFB || !MFB.sb) { out.innerHTML = statusNote('Backend not ready. Reload the page.'); return; }
      out.innerHTML = statusNote('Thinking...');
      try {
        const { data, error } = await MFB.sb.functions.invoke('ai-proxy', { body: { action: 'tutor', mode, input } });
        if (error) {
          let code = '', detail = '';
          try { const j = await error.context.json(); code = j.error || ''; detail = j.detail || ''; } catch (e) {}
          if (code === 'sign_in_required') out.innerHTML = statusNote('Sign in first to use the tutor.');
          else if (code === 'ai_not_activated') out.innerHTML = statusNote('The tutor is not activated for everyone yet. It is being tested with the site owner first.');
          else if (code === 'daily_cap_reached') out.innerHTML = statusNote('Daily limit reached (20 calls). Try again tomorrow.');
          else out.innerHTML = statusNote('Could not answer right now: ' + escx(detail || code || 'error'));
          return;
        }
        out.innerHTML = `<div class="card" style="margin-top:4px"><p dir="auto" style="white-space:pre-wrap">${escx(data.answer || '')}</p>
          <p class="hint" style="margin-top:8px">Unofficial tutor answer${data.grounded ? ' (grounded in the course pages)' : ''}. AI can make mistakes, check it against the lectures.</p></div>`;
      } catch (e) { out.innerHTML = statusNote('Network error. Try again.'); }
    });
  }
  route(/^\/workspace\/tutor$/, tutor);
  async function aiQuiz() {
    page('AI Quiz Generator','Practice questions generated by AI from your course topics. Unofficial: always check the lecture material.','');
    $('#app').insertAdjacentHTML('beforeend', `<section class="blk"><div class="card ex-panel">
      <label class="hint" for="aq-subj">Subject</label>
      <select id="aq-subj" class="input" style="width:100%;margin:6px 0 10px">${subjectOptions('cs212')}</select>
      <label class="hint" for="aq-topic">Topic (e.g. Trees and Binary Search Trees)</label>
      <input id="aq-topic" type="text" class="input" dir="auto" placeholder="Trees and Binary Search Trees" style="width:100%;margin:6px 0 10px">
      <label class="hint" for="aq-count">Questions</label>
      <select id="aq-count" class="input" style="width:100%;margin:6px 0 12px"><option value="3">3</option><option value="5" selected>5</option><option value="10">10</option></select>
      <button type="button" class="btn" id="aq-go">Generate questions</button>
      <details style="margin:10px 0 0"><summary class="hint" style="cursor:pointer">Privacy / الخصوصية</summary>
      <p class="hint" dir="rtl" style="text-align:right;margin-top:8px;font-size:13.5px;line-height:1.8;color:var(--tx,#e8e4dc)">لتوليد الأسئلة، بنرسل إلى Groq الموضوع المكتوب وجزءًا من ملاحظات المادة وعدد الأسئلة المطلوب. لا نضيف اسمك أو بريدك إلى الطلب، لكن لا تكتب بيانات شخصية في الموضوع. إعداد عدم تسجيل المدخلات والمخرجات مفعّل حاليًا في حساب Groq. الأسئلة تظهر في جلسة المتصفح فقط، ولا تُحفظ في حسابك أو تقدّمك.</p>
      <p class="hint" dir="rtl" style="text-align:right;font-size:13.5px;line-height:1.8;color:var(--tx,#e8e4dc)">نحتفظ بسجل مرتبط بمعرّف حسابك يشمل نوع الطلب، والمزوّد والموديل، وعدد التوكنز، والتكلفة التقديرية والتاريخ لتطبيق حد 20 توليدًا يوميًا لكل حساب. لا يوجد حذف تلقائي لهذا السجل حاليًا. الأسئلة غير رسمية وقد تخطئ، فراجعها مع المحاضرات.</p>
      <p class="hint" style="margin-top:6px;font-size:13.5px;line-height:1.8;color:var(--tx,#e8e4dc)">To generate questions, we send Groq the topic you type, an excerpt of the subject notes, and the requested question count. We do not add your name or email to the request, but do not type personal data in the topic. The no-input/output-logging setting is currently enabled on our Groq account. Questions appear in your browser session only and are not saved to your account or progress.</p>
      <p class="hint" style="font-size:13.5px;line-height:1.8;color:var(--tx,#e8e4dc)">We keep a usage log tied to your account id with the request type, provider and model, token counts, estimated cost and date, to enforce the 20 generations/day per-account limit. There is no automatic deletion of this log currently. Questions are unofficial and may be wrong, so check them against the lectures.</p>
      </details>
      <span class="hint" style="margin-inline-start:10px">20 generations/day per account</span>
      <div id="aq-out" style="margin-top:14px"></div>
    </div></section>`);
    const out = $x('#aq-out');
    $x('#aq-go').addEventListener('click', async () => {
      const topic = $x('#aq-topic').value.trim();
      const count = parseInt($x('#aq-count').value, 10) || 5;
      const subjKey = $x('#aq-subj').value;
      if (!topic) { out.innerHTML = statusNote('Enter a topic first.'); return; }
      if (!window.MFB || !MFB.sb) { out.innerHTML = statusNote('Backend not ready. Reload the page.'); return; }
      const s = subjects().find(x => x.key === subjKey);
      const material = s && s.lecNotes ? s.lecNotes.flat().join('\n').slice(0, 6000) : '';
      out.innerHTML = statusNote('Generating...');
      try {
        const { data, error } = await MFB.sb.functions.invoke('ai-proxy', { body: { action: 'quiz', topic, count, material } });
        if (error) {
          let code = '', detail = '';
          try { const j = await error.context.json(); code = j.error || ''; detail = j.detail || ''; } catch (e) {}
          if (code === 'ai_not_configured') out.innerHTML = statusNote('\u0627\u0644\u0640AI \u0644\u0633\u0647 \u0645\u0634 \u0645\u0641\u0639\u0651\u0644. \u0627\u0644\u062a\u0641\u0639\u064a\u0644 \u0645\u0633\u062a\u0646\u064a \u0645\u0648\u0627\u0641\u0642\u0629 \u0639\u0644\u0649 \u0634\u0631\u0648\u0637 \u0645\u0632\u0648\u0651\u062f \u0627\u0644\u062e\u062f\u0645\u0629. / The AI provider is not enabled yet.');
          else if (code === 'daily_cap_reached') out.innerHTML = statusNote('Daily limit reached (20 generations). Try again tomorrow.');
          else if (code === 'sign_in_required') out.innerHTML = statusNote('Sign in first to use AI generation.');
          else out.innerHTML = statusNote('Generation failed: ' + escx(detail || code || 'error'));
          return;
        }
        const qs = (data && data.questions) || [];
        if (!qs.length) { out.innerHTML = statusNote('No questions returned. Try rephrasing the topic.'); return; }
        out.innerHTML = qs.map((q, i) => `<div class="mcq aq"><p class="q">${i + 1}. ${escx(q.q)} <span class="qid">AI-generated</span></p>
          <div class="opts">${(q.opts || []).map((o, oi) => `<button type="button" class="opt" data-c="${oi === q.answer ? 1 : 0}"><span class="ol">${'ABCD'[oi] || ''}</span><span>${escx(o)}</span></button>`).join('')}</div>
          <div class="ans" style="display:none"><span class="achip">Answer</span><span>${'ABCD'[q.answer] || ''} \u00b7 ${escx((q.opts || [])[q.answer] || '')}</span></div>
          ${q.exp ? `<div class="ans" style="display:none;background:var(--primarySoft)"><span class="achip">Explanation</span><span dir="auto">${escx(q.exp)}</span></div>` : ''}
        </div>`).join('') + `<p class="hint" style="margin-top:8px">AI-generated unofficial practice. Verify against the lecture. Remaining today: ${data.remaining_today ?? '-'}</p>`;
        out.querySelectorAll('.mcq.aq').forEach(box => {
          box.querySelectorAll('.opt').forEach(opt => opt.addEventListener('click', e => {
            e.stopPropagation();
            if (box.classList.contains('answered')) return;
            box.classList.add('answered');
            const correct = opt.dataset.c === '1';
            opt.style.borderColor = correct ? 'var(--good)' : 'var(--bad)';
            if (!correct) { const co = [...box.querySelectorAll('.opt')].find(o => o.dataset.c === '1'); if (co) co.style.borderColor = 'var(--good)'; }
            box.querySelectorAll('.ans').forEach(an => an.style.display = '');
          }));
        });
      } catch (e) { out.innerHTML = statusNote('Network error. Try again.'); }
    });
  }
  route(/^\/workspace\/quiz$/, aiQuiz);
  document.addEventListener('DOMContentLoaded',()=>{
    const nav=$x('.snav');
    if(nav&&!$x('[data-workspace-nav]'))nav.insertAdjacentHTML('beforeend','<div class="cat">Workspace</div><a href="#/workspace" data-workspace-nav>University Workspace</a>');
  });
})();

/* MUST Finals: modular Smart Study Planner UI.
   Loaded after app.js so it can replace the legacy planner route without changing
   the rest of the platform. The rule engine stays in study-planner.js. */
(() => {
  'use strict';

  if (typeof IC !== 'undefined') {
    if (!IC.plus) IC.plus = '<line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/>';
    if (!IC.sparkles) IC.sparkles = '<path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z"/><path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z"/>';
  }

/* ---- smart study planner (user-entered dates, real tasks) ---- */
async function plan() { return Object.assign({ exams: {}, tasks: [] }, await store.get('plan', {})); }
async function savePlan(pl) { await store.set('plan', pl); }
function daysUntil(dateStr) { const d = new Date(dateStr + 'T00:00:00'); return Math.ceil((d - new Date(new Date().toDateString())) / 86400000); }

let PLANNER_VIEW_DATE = '';
let PLANNER_VIEW_MODE = 'week';
let PLANNER_EDITING_ID = '';
let PLANNER_NEW_DATE = '';
let PLANNER_AI_SUGGESTIONS = [];
const PLANNER_DAILY_GOALS = [45, 60, 90, 120, 150, 180, 240];
const PLANNER_SESSION_LENGTHS = [25, 30, 45, 60, 75, 90];

function plannerMonday(date) {
  const d = new Date(date); d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - (d.getDay() + 6) % 7);
  return d;
}
function plannerDaysBetween(start, end) {
  return (Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) - Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())) / 86400000;
}
function plannerDateText(key, options) {
  const d = MFStudyPlanner.fromDateKey(key);
  return d ? d.toLocaleDateString('en-GB', options || { day: 'numeric', month: 'short' }) : '';
}
function plannerMistakes(progress, key) {
  return Object.values((progress && progress.mistakes) || {}).filter(item => item && item.subj === key && !item.understood);
}

function plannerSubjects(p) {
  return D.subjects.map(s => ({
    key: s.key, code: s.code, lectures: s.lectures, mcqCount: subjMcqs(s.key).length,
    accuracy: subjAccuracy(p, s.key), completionPct: subjCompletion(p, s.key).pct,
    mistakeCount: plannerMistakes(p, s.key).length,
  }));
}

async function smartPlannerView() {
  const app = $('#app');
  app.innerHTML = '<section class="hero"><div class="eyebrow">Smart Study Planner</div><h1>Building your study plan…</h1><p class="sub">Bringing your course progress and deadlines together.</p></section>';
  try {
    const [pl, p, assignments, timetable, settings] = await Promise.all([
      plan(), prog(), store.get('x.assignments', []), store.get('x.timetable', []), store.get('study-planner-settings', {}),
    ]);
    const assignmentList = Array.isArray(assignments) ? assignments.filter(a => a && typeof a === 'object') : [];
    const timetableList = Array.isArray(timetable) ? timetable.filter(e => e && typeof e === 'object') : [];
    pl.sessions = Array.isArray(pl.sessions) ? pl.sessions.filter(s => s && typeof s.id === 'string' && s.id.length < 160 && MFStudyPlanner.fromDateKey(s.date) && typeof s.title === 'string' && s.title.trim() && ['pending', 'completed'].includes(s.status) && MFStudyPlanner.toMinutes(s.start) !== null && MFStudyPlanner.toMinutes(s.end) > MFStudyPlanner.toMinutes(s.start)).slice(0, 1000) : [];
    pl.tasks = Array.isArray(pl.tasks) ? pl.tasks.filter(t => t && typeof t.text === 'string' && t.text.trim().length <= 120).slice(0, 500) : [];
    pl.exams = pl.exams && typeof pl.exams === 'object' ? pl.exams : {};
    const savedPrefs = settings && typeof settings === 'object' ? settings : {};
    const rawStart = MFStudyPlanner.toMinutes(savedPrefs.start) === null ? '17:00' : savedPrefs.start;
    const rawEnd = MFStudyPlanner.toMinutes(savedPrefs.end) === null ? '21:00' : savedPrefs.end;
    const validWindow = MFStudyPlanner.toMinutes(rawEnd) > MFStudyPlanner.toMinutes(rawStart);
    const savedStart = validWindow ? rawStart : '17:00';
    const savedEnd = validWindow ? rawEnd : '21:00';
    const prefs = {
      dailyMinutes: PLANNER_DAILY_GOALS.includes(Number(savedPrefs.dailyMinutes)) ? Number(savedPrefs.dailyMinutes) : 90,
      sessionMinutes: PLANNER_SESSION_LENGTHS.includes(Number(savedPrefs.sessionMinutes)) ? Number(savedPrefs.sessionMinutes) : 45,
      start: savedStart, end: savedEnd,
    };
    const today = MFStudyPlanner.dateKey(new Date());
    if (!PLANNER_VIEW_DATE) PLANNER_VIEW_DATE = today;
    const viewDate = MFStudyPlanner.fromDateKey(PLANNER_VIEW_DATE) || new Date();
    const weekStart = plannerMonday(viewDate);
    const monthStart = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
    const periodStart = PLANNER_VIEW_MODE === 'month' ? plannerMonday(monthStart) : weekStart;
    const periodDays = PLANNER_VIEW_MODE === 'month'
      ? plannerDaysBetween(periodStart, plannerMonday(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0))) + 7
      : 7;
    const calendarDays = Array.from({ length: periodDays }, (_, i) => MFStudyPlanner.addDays(periodStart, i));
    const periodEnd = MFStudyPlanner.dateKey(calendarDays[calendarDays.length - 1]);
    const viewSessions = pl.sessions.filter(s => s.date >= MFStudyPlanner.dateKey(periodStart) && s.date <= periodEnd);
    const subjects = plannerSubjects(p);
    const candidates = MFStudyPlanner.makeCandidates({ subjects, plan: pl, assignments: assignmentList, progress: p, now: new Date() });
    const currentWeekStart = plannerMonday(new Date());
    const currentWeekEnd = MFStudyPlanner.dateKey(MFStudyPlanner.addDays(currentWeekStart, 6));
    const currentDate = MFStudyPlanner.fromDateKey(today);
    const planningWeekStart = PLANNER_VIEW_MODE === 'month' && viewDate.getFullYear() === currentDate.getFullYear() && viewDate.getMonth() === currentDate.getMonth() ? currentWeekStart : weekStart;
    const viewWeekEnd = MFStudyPlanner.addDays(planningWeekStart, 6);
    const generationStartDate = planningWeekStart < currentDate ? currentDate : planningWeekStart;
    const generationDays = viewWeekEnd < currentDate ? 0 : plannerDaysBetween(generationStartDate, viewWeekEnd) + 1;
    const weekSessions = pl.sessions.filter(s => s.date >= MFStudyPlanner.dateKey(currentWeekStart) && s.date <= currentWeekEnd);
    const todaySessions = pl.sessions.filter(s => s.date === today);
    const minutes = list => list.reduce((n, s) => n + Math.max(0, (MFStudyPlanner.toMinutes(s.end) || 0) - (MFStudyPlanner.toMinutes(s.start) || 0)), 0);
    const todayDone = todaySessions.filter(s => s.status === 'completed');
    const weekDone = weekSessions.filter(s => s.status === 'completed');
    const goalPct = Math.min(100, Math.round(100 * minutes(todayDone) / prefs.dailyMinutes));
    const weekPct = weekSessions.length ? Math.round(100 * weekDone.length / weekSessions.length) : 0;
    const completedBySubject = {};
    weekSessions.filter(s => s.status === 'completed' && s.subj).forEach(s => { completedBySubject[s.subj] = (completedBySubject[s.subj] || 0) + 1; });
    const progressCards = subjects.map(s => {
      const done = completedBySubject[s.key] || 0;
      return `<div class="sp-subject"><div class="sp-subject-head"><b>${esc(s.code)}</b><span class="hint">${s.completionPct}% lectures · ${done} session${done === 1 ? '' : 's'} done</span></div><div class="sp-bar"><i style="width:${s.completionPct}%"></i></div></div>`;
    }).join('');

    const sessionCard = session => {
      const subj = session.subj && subjByKey(session.subj);
      return `<article class="sp-event ${session.status === 'completed' ? 'is-done' : ''}" draggable="${session.status !== 'completed'}" data-session-id="${esc(session.id)}" title="${esc(session.reason || 'Study session')}" aria-label="${esc(session.title)} ${esc(session.start)} to ${esc(session.end)}">
        <div class="sp-event-time">${esc(session.start)}–${esc(session.end)} <span>${session.source === 'smart' ? 'PLAN' : 'MANUAL'}</span></div>
        <b>${esc(session.title)}</b><small>${esc(subj ? subj.code : 'General study')}</small>
        ${session.reason ? `<small class="sp-reason">${esc(session.reason)}</small>` : ''}
        <div class="sp-event-actions">
          <button type="button" class="qtool" data-session-action="toggle" data-session-id="${esc(session.id)}" aria-label="${session.status === 'completed' ? 'Mark session pending' : 'Mark session complete'}">${ic(session.status === 'completed' ? 'retry' : 'check')}${session.status === 'completed' ? 'Undo' : 'Done'}</button>
          <button type="button" class="qtool" data-session-action="edit" data-session-id="${esc(session.id)}" aria-label="Edit session">Edit</button>
          <button type="button" class="qtool" data-session-action="delete" data-session-id="${esc(session.id)}" aria-label="Delete session">${ic('x')}</button>
        </div>
      </article>`;
    };
    const taskCard = task => `<article class="sp-task ${task.done ? 'is-done' : ''}">
      <span class="sp-task-date">${MFStudyPlanner.fromDateKey(task.date) ? esc(plannerDateText(task.date)) : 'Unscheduled'}</span><b>${esc(task.text)}</b>
      ${task.subj && subjByKey(task.subj) ? `<small>${esc(subjByKey(task.subj).code)}</small>` : ''}
      <div class="sp-event-actions"><button type="button" class="qtool" data-task-action="toggle" data-task-id="${esc(task.id)}">${ic(task.done ? 'retry' : 'check')}${task.done ? 'Undo' : 'Done'}</button><button type="button" class="qtool" data-task-action="delete" data-task-id="${esc(task.id)}" aria-label="Delete task">${ic('x')}</button></div>
    </article>`;
    const assignmentCard = assignment => `<article class="sp-task sp-assignment"><span class="sp-task-date">Assignment deadline</span><b>${esc(assignment.title)}</b><small>${esc(subjByKey(assignment.subject)?.code || assignment.subject || 'General')}</small><div class="sp-event-actions"><a class="qtool" href="#/workspace/assignments">Open tracker ${ic('ar')}</a></div></article>`;
    const calendar = calendarDays.map(day => {
      const key = MFStudyPlanner.dateKey(day);
      const dayEvents = viewSessions.filter(s => s.date === key).sort((a, b) => a.start.localeCompare(b.start));
      const dayTasks = pl.tasks.filter(t => t.date === key);
      const dayAssignments = assignmentList.filter(a => !/^(completed|submitted|done)$/i.test(String(a.status || '')) && a.due === key && String(a.title || '').trim());
      const inMonth = day.getMonth() === viewDate.getMonth();
      return `<div class="sp-day ${key === today ? 'is-today' : ''} ${PLANNER_VIEW_MODE === 'month' && !inMonth ? 'is-outside' : ''}" data-drop-date="${key}">
        <div class="sp-day-head"><div><span>${esc(day.toLocaleDateString('en-GB', { weekday: 'short' }))}</span><b>${day.getDate()}</b></div><button type="button" class="qtool" data-add-date="${key}" aria-label="Add a study session on ${key}">+</button></div>
        <div class="sp-day-events">${dayEvents.map(sessionCard).join('')}${dayAssignments.map(assignmentCard).join('')}${dayTasks.map(taskCard).join('')}${dayEvents.length || dayTasks.length || dayAssignments.length ? '' : `<span class="sp-empty-day">${PLANNER_VIEW_MODE === 'month' ? 'Open' : 'No sessions'}</span>`}</div>
      </div>`;
    }).join('');
    const dateLabel = PLANNER_VIEW_MODE === 'month'
      ? viewDate.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
      : `${plannerDateText(MFStudyPlanner.dateKey(weekStart), { day: 'numeric', month: 'short' })} – ${plannerDateText(MFStudyPlanner.dateKey(MFStudyPlanner.addDays(weekStart, 6)), { day: 'numeric', month: 'short', year: 'numeric' })}`;
    const recommendationCards = candidates.slice(0, 3).map((c, i) => `<article class="sp-recommendation ${i === 0 ? 'is-next' : ''} ${c.daysToDue !== null && c.daysToDue !== undefined && c.daysToDue <= 2 || c.daysToExam !== null && c.daysToExam !== undefined && c.daysToExam <= 3 ? 'is-urgent' : ''}">
      <span class="sp-rec-rank">${i === 0 ? 'NEXT UP' : 'ALSO CONSIDER'}${c.daysToDue !== null && c.daysToDue !== undefined && c.daysToDue <= 2 || c.daysToExam !== null && c.daysToExam !== undefined && c.daysToExam <= 3 ? ' · URGENT' : ''}</span><b>${esc(c.title)}</b><small>${esc(c.subj ? (subjByKey(c.subj) || {}).code || 'Course task' : 'Course task')} · ${esc(c.type)}</small><p>${esc(c.reason)}</p>
      ${c.type === 'lecture' && c.subj ? `<a class="btn ghost sm" href="#/subject/${c.subj}/lecture/${(c.title.match(/^Lecture (\d+)/) || [])[1] || ''}">${ic('bookopen')} Open lecture</a>` : c.type === 'assignment' ? `<a class="btn ghost sm" href="#/workspace/assignments">${ic('list')} View assignment</a>` : ''}
    </article>`).join('');
    const examCards = D.subjects.map(s => {
      const rawDate = pl.exams[s.key];
      const dstr = MFStudyPlanner.fromDateKey(rawDate) ? rawDate : '';
      const du = dstr ? daysUntil(dstr) : null;
      return `<label class="sp-exam-card"><span><b>${esc(s.code)}</b>${du === null ? '<small>Exam date not set</small>' : `<small>${du < 0 ? 'Date passed' : du === 0 ? 'Exam today' : du + ' days left'}</small>`}</span><input type="date" class="inp exam-date" data-k="${esc(s.key)}" value="${esc(dstr || '')}" aria-label="${esc(s.code)} exam date"></label>`;
    }).join('');
    const editing = pl.sessions.find(s => s.id === PLANNER_EDITING_ID);
    const plannerTaskCards = pl.tasks.map(taskCard).join('');
    const formDate = editing ? editing.date : PLANNER_NEW_DATE || today;
    const subjectOptions = `<option value="">General</option>${D.subjects.map(s => `<option value="${s.key}" ${editing && editing.subj === s.key ? 'selected' : ''}>${esc(s.code)}</option>`).join('')}`;
    app.innerHTML = `
      <section class="hero sp-hero"><div class="eyebrow">MUST Finals · Personal planning</div><h1>AI Smart Study Planner</h1><p class="sub">A schedule shaped around your lectures, exam dates, assignment deadlines and practice history.</p>
        <div class="sp-hero-meta"><span class="pill pri">${ic('target')} Rule-based assistant · uses your saved course data</span><button type="button" class="btn" id="sp-generate" ${generationDays ? '' : 'disabled'}>${ic('sparkles')} Build weekly plan</button></div>
      </section>
      <section class="sp-stats" aria-label="Study progress dashboard">
        <article class="card sp-stat"><div class="sp-stat-top"><span>Today’s goal</span>${ic('target')}</div><strong>${minutes(todayDone)}<small> / ${prefs.dailyMinutes} min</small></strong><div class="sp-bar"><i style="width:${goalPct}%"></i></div><small>${goalPct}% complete · ${todayDone.length} of ${todaySessions.length} sessions</small></article>
        <article class="card sp-stat"><div class="sp-stat-top"><span>This week</span>${ic('cal')}</div><strong>${minutes(weekDone)}<small> min</small></strong><small>${weekDone.length} completed · ${weekSessions.filter(s => s.status !== 'completed').length} pending</small><div class="sp-bar"><i style="width:${weekPct}%"></i></div></article>
        <article class="card sp-stat"><div class="sp-stat-top"><span>Sessions planned</span>${ic('layers')}</div><strong>${weekSessions.length}</strong><small>${weekSessions.filter(s => s.status !== 'completed').length} still to do this week</small></article>
      </section>
      <section class="sp-layout">
        <div class="sp-main">
          <section class="card sp-calendar-card">
            <div class="sp-calendar-toolbar"><div><div class="eyebrow">Your schedule</div><h2>${esc(dateLabel)}</h2></div><div class="sp-calendar-actions">
              <div class="sp-switch" role="group" aria-label="Calendar view"><button type="button" data-view="week" class="${PLANNER_VIEW_MODE === 'week' ? 'on' : ''}">Week</button><button type="button" data-view="month" class="${PLANNER_VIEW_MODE === 'month' ? 'on' : ''}">Month</button></div>
              <button type="button" class="iconbtn" data-shift="-1" aria-label="Previous ${PLANNER_VIEW_MODE}">${ic('al')}</button><button type="button" class="iconbtn" data-shift="1" aria-label="Next ${PLANNER_VIEW_MODE}">${ic('ar')}</button><button type="button" class="btn ghost sm" id="sp-today">Today</button>
            </div></div>
            <p class="hint sp-drag-hint">Drag a pending session to another day to reschedule it. Use Edit to change the time or subject.</p>
            <div class="sp-calendar ${PLANNER_VIEW_MODE === 'month' ? 'is-month' : 'is-week'}">${calendar}</div>
            ${!viewSessions.length && !pl.tasks.some(t => t.date >= MFStudyPlanner.dateKey(periodStart) && t.date <= periodEnd) && !assignmentList.some(a => MFStudyPlanner.fromDateKey(a.due) && a.due >= MFStudyPlanner.dateKey(periodStart) && a.due <= periodEnd && !/^(completed|submitted|done)$/i.test(String(a.status || ''))) ? `<div class="sp-empty card"><div class="sp-empty-icon">${ic('cal')}</div><b>Your calendar is clear</b><p>Generate a study plan or add a session to get started.</p></div>` : ''}
          </section>
          <section class="card sp-editor" id="sp-editor">
            <div class="blk-h"><div><div class="eyebrow">Personal schedule</div><h2>${editing ? 'Edit study session' : 'Add a study session'}</h2></div><span class="sp"></span>${editing ? '<button type="button" class="btn ghost sm" id="sp-cancel-edit">Cancel</button>' : ''}</div>
            <form id="sp-session-form" class="sp-form" novalidate>
              <label>Session title<input class="inp" id="sp-title" maxlength="120" required value="${esc(editing ? editing.title : '')}" placeholder="e.g. Review Lecture 3 and solve practice"></label>
              <label>Subject<select class="inp" id="sp-subject">${subjectOptions}</select></label>
              <label>Date<input class="inp" id="sp-date" type="date" required value="${esc(formDate)}"></label>
              <label>Start<input class="inp" id="sp-start" type="time" required value="${esc(editing ? editing.start : prefs.start)}"></label>
              <label>End<input class="inp" id="sp-end" type="time" required value="${esc(editing ? editing.end : prefs.end)}"></label>
              <button type="submit" class="btn">${ic(editing ? 'check' : 'plus')}${editing ? 'Save changes' : 'Add session'}</button>
            </form>
            <form id="sp-settings-form" class="sp-settings-form">
              <div><b>Available study time</b><small>Used when building your weekly plan</small></div>
              <label>Daily goal<select class="inp" id="sp-goal">${PLANNER_DAILY_GOALS.map(n => `<option value="${n}" ${Number(prefs.dailyMinutes) === n ? 'selected' : ''}>${n} minutes</option>`).join('')}</select></label>
              <label>Session length<select class="inp" id="sp-duration">${PLANNER_SESSION_LENGTHS.map(n => `<option value="${n}" ${Number(prefs.sessionMinutes) === n ? 'selected' : ''}>${n} minutes</option>`).join('')}</select></label>
              <label>From<input class="inp" id="sp-window-start" type="time" value="${esc(prefs.start)}" required></label>
              <label>Until<input class="inp" id="sp-window-end" type="time" value="${esc(prefs.end)}" required></label>
              <button type="submit" class="btn ghost sm">Save availability</button>
            </form>
          </section>
          <section class="card sp-editor sp-task-manager">
            <div class="eyebrow">Your study tasks</div><h2>Keep track of what’s due</h2><p class="hint">Tasks you add here feed into your next smart plan. Assignment Tracker items are included automatically.</p>
            <form id="sp-task-form" class="sp-task-form"><input class="inp" id="sp-task-title" maxlength="120" required placeholder="e.g. Finish the lab report" aria-label="Task name"><select class="inp" id="sp-task-subject" aria-label="Task subject"><option value="">General</option>${D.subjects.map(s => `<option value="${s.key}">${esc(s.code)}</option>`).join('')}</select><input class="inp" id="sp-task-date" type="date" aria-label="Task due date"><button type="submit" class="btn">${ic('plus')} Add task</button></form>
            <div class="sp-task-list">${plannerTaskCards || '<div class="sp-empty-inline"><b>No personal tasks yet</b><p>Add a task or manage coursework in the Assignment Tracker.</p><a href="#/workspace/assignments">Open Assignment Tracker</a></div>'}</div>
          </section>
          <section class="blk sp-subject-progress"><div class="blk-h"><div><div class="eyebrow">Progress by course</div><h2>Subject momentum</h2></div></div><div class="sp-subject-grid">${progressCards}</div></section>
          <section class="blk"><div class="blk-h"><div><div class="eyebrow">Exam countdown</div><h2>Your exam dates</h2></div><span class="sp"></span><span class="hint">Dates are supplied by you</span></div><div class="sp-exam-grid">${examCards}</div></section>
        </div>
        <aside class="sp-aside">
          <section class="card sp-assistant"><div class="sp-assistant-head"><span class="sp-assistant-mark">${ic('sparkles')}</span><div><div class="eyebrow">Study assistant</div><h2>What should I study next?</h2></div></div>
            <p class="hint">Rule-based priorities update from your study activity. Ask AI to explain your focus and suggest a conflict-free weekly schedule.</p>
            <div class="sp-recommendations">${recommendationCards || '<div class="sp-empty-inline"><b>Nothing urgent right now</b><p>Add an exam date or assignment, or keep making progress in your subjects. Recommendations appear as the platform learns your study activity.</p></div>'}</div>
            <button type="button" class="btn ghost" id="sp-refresh">${ic('retry')} Refresh recommendations</button>
            <div class="sp-ai-coach">
              <div class="sp-ai-head"><span class="pill pri">✦ AI study coach</span><label class="sp-ai-language">Language<select class="inp" id="sp-ai-language"><option value="en">English</option><option value="ar">العربية</option></select></label></div>
              <button type="button" class="btn" id="sp-ai-generate">Review my plan with AI</button>
              <p class="hint" id="sp-ai-status" aria-live="polite">Sign in to request AI recommendations. You choose when study data is sent.</p>
              <details class="sp-ai-privacy"><summary>Privacy and usage</summary><p>When you request advice, subject progress, deadlines, study task titles, availability, and busy study times are sent through MUST Finals to Groq. Your name, email, and account ID are not sent to the model; the account ID is used only for the daily usage limit. The platform stores only daily request counts, not prompts or answers. Avoid putting personal details in task titles. AI suggestions can be wrong; review them before adding sessions.</p></details>
              <div id="sp-ai-out" aria-live="polite"></div>
            </div>
          </section>
          <section class="card sp-settings"><div class="eyebrow">Planning inputs</div><h2>Included in your plan</h2><ul><li>Unfinished lectures</li><li>Open assignments and tasks</li><li>Exam countdowns you entered</li><li>Practice accuracy and missed questions</li><li>Existing timetable and session conflicts</li></ul><p>The rule-based planner works locally. AI requests require sign-in and an available secure server connection.</p></section>
        </aside>
      </section>`;

    $$('.exam-date').forEach(input => input.addEventListener('change', async () => {
      const updated = await plan();
      if (input.value && !MFStudyPlanner.fromDateKey(input.value)) { toast('Choose a valid exam date'); return; }
      if (input.value) updated.exams[input.dataset.k] = input.value; else delete updated.exams[input.dataset.k];
      await savePlan(updated); await smartPlannerView();
    }));
    $('#sp-generate').addEventListener('click', async () => {
      if (!generationDays) { toast('Choose a current or upcoming week to build a plan'); return; }
      const updated = await plan();
      updated.sessions = Array.isArray(updated.sessions) ? updated.sessions : [];
      const start = MFStudyPlanner.dateKey(generationStartDate), end = MFStudyPlanner.dateKey(viewWeekEnd);
      const retained = updated.sessions.filter(s => !(s.source === 'smart' && s.status !== 'completed' && s.date >= start && s.date <= end));
      const generated = MFStudyPlanner.generateSchedule({ candidates, startDate: start, days: generationDays, targetMinutes: prefs.dailyMinutes,
        sessionMinutes: prefs.sessionMinutes, windowStart: prefs.start, windowEnd: prefs.end, timetable: timetableList, busySessions: retained });
      updated.sessions = retained.concat(generated);
      await savePlan(updated);
      toast(generated.length ? `Built a ${generated.length}-session plan around your availability` : 'No open study time found in the selected week. Adjust your availability or timetable.');
      await smartPlannerView();
    });
    $('#sp-refresh').addEventListener('click', () => smartPlannerView());
    $('#sp-ai-generate').addEventListener('click', async () => {
      const out = $('#sp-ai-out'), button = $('#sp-ai-generate'), status = $('#sp-ai-status');
      if (!window.MFB || !MFB.ready || !MFB.sb || !MFB.user) {
        status.textContent = 'Sign in to your MUST Finals account to use the AI study coach.';
        out.innerHTML = '<a class="btn ghost sm" href="#/account">Sign in</a>';
        return;
      }
      const language = $('#sp-ai-language').value === 'ar' ? 'ar' : 'en';

      const busyBlocks = [], plannedMinutesByDate = {};
      for (let offset = 0; offset <= 7; offset++) {
        const date = MFStudyPlanner.dateKey(MFStudyPlanner.addDays(today, offset));
        const dateObj = MFStudyPlanner.fromDateKey(date);
        const daySessions = pl.sessions.filter(session => session.date === date);
        plannedMinutesByDate[date] = minutes(daySessions);
        daySessions.forEach(session => busyBlocks.push({ date, start: session.start, end: session.end }));
        timetableList.filter(item => Number(item.day) === dateObj.getDay()).forEach(item => busyBlocks.push({ date, start: item.start, end: item.end }));
      }
      const context = {
        today, language, preferences: prefs,
        subjects: subjects.map(subject => ({
          key: subject.key, code: subject.code, completionPct: subject.completionPct,
          accuracyPct: subject.accuracy ? subject.accuracy.pct : null,
          attempts: subject.accuracy ? subject.accuracy.t : 0,
          mistakeCount: subject.mistakeCount,
          daysToExam: MFStudyPlanner.dayDistance(pl.exams[subject.key], new Date()),
        })),
        priorities: candidates.slice(0, 10).map(candidate => ({
          title: candidate.title,
          subjectCode: candidate.subj ? (subjByKey(candidate.subj) || {}).code || 'General' : 'General',
          type: candidate.type, dueDate: candidate.dueDate || null,
          daysToDue: candidate.daysToDue, daysToExam: candidate.daysToExam,
          completionPct: candidate.completionPct, accuracyPct: candidate.accuracyPct,
          attempts: candidate.attempts || 0, reason: candidate.reason,
        })),
        busyBlocks, plannedMinutesByDate,
      };
      button.disabled = true;
      status.textContent = 'Reviewing your study priorities securely…';
      out.textContent = '';
      PLANNER_AI_SUGGESTIONS = [];
      try {
        const { data, error } = await MFB.sb.functions.invoke('study-planner-ai', { body: { context } });
        if (error) {
          let code = '';
          try { const payload = await error.context.json(); code = payload.error || ''; } catch {}
          const messages = {
            sign_in_required: 'Sign in to use the AI study coach.',
            account_not_allowed: 'This account cannot use the AI study coach. Contact the site administrator if you think this is a mistake.',
            account_status_unavailable: 'Your account status could not be verified. Try again later.',
            ai_not_configured: 'AI is not configured on the secure server yet. The local study planner remains available.',
            daily_cap_reached: 'You reached the daily limit of 20 AI study requests. Try again tomorrow.',
            platform_daily_cap_reached: 'The shared AI capacity for today is reached. Try again tomorrow.',
            quota_service_unavailable: 'The AI usage-limit service is temporarily unavailable. Try again later.',
            ai_unavailable: 'The AI provider did not respond. Your local plan is still available.',
            invalid_ai_response: 'The AI response could not be checked. Please try again.',
          };
          status.textContent = messages[code] || 'Could not generate AI recommendations right now. Your local study plan is unchanged.';
          return;
        }
        const subjectCodeToKey = new Map(subjects.map(subject => [subject.code, subject.key]));
        const draft = [], usedByDate = { ...plannedMinutesByDate };
        const maxDate = MFStudyPlanner.dateKey(MFStudyPlanner.addDays(today, 7));
        const aiSessions = Array.isArray(data.sessions) ? data.sessions.slice(0, 7) : [];
        aiSessions.forEach((suggestion, index) => {
          const subj = subjectCodeToKey.get(suggestion.subjectCode) || null;
          const startMinute = MFStudyPlanner.toMinutes(suggestion.start);
          const duration = Number(suggestion.durationMinutes);
          if (startMinute === null || !Number.isInteger(duration)) return;
          const endMinute = startMinute + duration;
          const endTime = String(Math.floor(endMinute / 60)).padStart(2, '0') + ':' + String(endMinute % 60).padStart(2, '0');
          const session = {
            id: 'ai-' + suggestion.date + '-' + suggestion.start.replace(':', '') + '-' + Date.now() + '-' + index,
            title: String(suggestion.title || '').trim().slice(0, 120), subj,
            date: suggestion.date, start: suggestion.start, end: endTime,
            status: 'pending', source: 'smart', reason: String(suggestion.reason || 'Suggested by the AI study coach.').slice(0, 220),
          };
          const inRange = MFStudyPlanner.fromDateKey(session.date) && session.date >= today && session.date <= maxDate;
          if (!session.title || (!subj && suggestion.subjectCode !== 'General') || !inRange
            || duration < 20 || duration > prefs.sessionMinutes || endMinute >= 1440
            || (usedByDate[session.date] || 0) + duration > prefs.dailyMinutes
            || MFStudyPlanner.validateSession(session, pl.sessions.concat(draft), timetableList)) return;
          usedByDate[session.date] = (usedByDate[session.date] || 0) + duration;
          draft.push(session);
        });
        PLANNER_AI_SUGGESTIONS = draft;
        const result = document.createElement('div');
        result.className = 'sp-ai-result';
        const summary = document.createElement('b');
        summary.textContent = data.summary || 'AI study review';
        result.append(summary);
        (Array.isArray(data.recommendations) ? data.recommendations.slice(0, 3) : []).forEach(item => {
          const card = document.createElement('article');
          card.className = 'sp-ai-recommendation';
          const subjectLabel = document.createElement('span'); subjectLabel.textContent = item.subjectCode || 'Study focus';
          const title = document.createElement('strong'); title.textContent = item.title || '';
          const reason = document.createElement('p'); reason.textContent = item.reason || '';
          const action = document.createElement('small'); action.textContent = item.action || '';
          card.append(subjectLabel, title, reason, action); result.append(card);
        });
        if (draft.length) {
          const sessionList = document.createElement('div');
          sessionList.className = 'sp-ai-session-list';
          const heading = document.createElement('b'); heading.textContent = 'Suggested sessions'; sessionList.append(heading);
          draft.forEach(session => {
            const row = document.createElement('div');
            const time = document.createElement('span'); time.textContent = plannerDateText(session.date) + ' · ' + session.start + '–' + session.end;
            const title = document.createElement('strong'); title.textContent = session.title;
            const reason = document.createElement('small'); reason.textContent = session.reason;
            row.append(time, title, reason); sessionList.append(row);
          });
          const apply = document.createElement('button');
          apply.type = 'button'; apply.className = 'btn sm'; apply.id = 'sp-ai-apply';
          apply.textContent = 'Add ' + draft.length + ' session' + (draft.length === 1 ? '' : 's') + ' to my calendar';
          sessionList.append(apply); result.append(sessionList);
          apply.addEventListener('click', async () => {
            const updated = await plan();
            updated.sessions = Array.isArray(updated.sessions) ? updated.sessions : [];
            const added = [];
            for (const session of PLANNER_AI_SUGGESTIONS) {
              if (!MFStudyPlanner.validateSession(session, updated.sessions.concat(added), timetableList)) added.push(session);
            }
            if (!added.length) { status.textContent = 'These time slots now conflict with your calendar. Generate a fresh AI review.'; return; }
            updated.sessions = updated.sessions.concat(added);
            await savePlan(updated);
            toast('Added ' + added.length + ' AI-suggested study session' + (added.length === 1 ? '' : 's'));
            PLANNER_AI_SUGGESTIONS = [];
            await smartPlannerView();
          });
        } else {
          const note = document.createElement('p');
          note.className = 'hint';
          note.textContent = 'No conflict-free sessions fit this week. You can still use the recommendations above.';
          result.append(note);
        }
        const remaining = document.createElement('p');
        remaining.className = 'hint';
        remaining.textContent = 'AI can make mistakes. Remaining today: ' + (Number.isInteger(data.remaining_today) ? data.remaining_today : '—');
        result.append(remaining);
        out.replaceChildren(result);
        status.textContent = 'AI review ready. Check the suggestions before adding them.';
      } catch {
        status.textContent = 'Network error. Your saved study plan is unchanged.';
      } finally {
        button.disabled = false;
      }
    });
    $('#sp-today').addEventListener('click', () => { PLANNER_VIEW_DATE = today; smartPlannerView(); });
    $$('[data-view]').forEach(button => button.addEventListener('click', () => { PLANNER_VIEW_MODE = button.dataset.view; smartPlannerView(); }));
    $$('[data-shift]').forEach(button => button.addEventListener('click', () => {
      const date = MFStudyPlanner.fromDateKey(PLANNER_VIEW_DATE) || new Date();
      const next = PLANNER_VIEW_MODE === 'month' ? new Date(date.getFullYear(), date.getMonth() + Number(button.dataset.shift), 1) : MFStudyPlanner.addDays(plannerMonday(date), Number(button.dataset.shift) * 7);
      PLANNER_VIEW_DATE = MFStudyPlanner.dateKey(next); smartPlannerView();
    }));
    $$('[data-add-date]').forEach(button => button.addEventListener('click', () => {
      PLANNER_EDITING_ID = ''; PLANNER_NEW_DATE = button.dataset.addDate; smartPlannerView().then(() => $('#sp-title')?.focus());
    }));
    $('#sp-cancel-edit')?.addEventListener('click', () => { PLANNER_EDITING_ID = ''; smartPlannerView(); });
    $('#sp-session-form').addEventListener('submit', async event => {
      event.preventDefault();
      const title = $('#sp-title').value.trim();
      const subject = $('#sp-subject').value || null;
      const date = $('#sp-date').value, start = $('#sp-start').value, end = $('#sp-end').value;
      if (!title || title.length > 120 || !MFStudyPlanner.fromDateKey(date) || (subject && !subjByKey(subject))) { toast('Enter a valid title, subject and date'); return; }
      const updated = await plan(); updated.sessions = Array.isArray(updated.sessions) ? updated.sessions : [];
      const old = updated.sessions.find(s => s.id === PLANNER_EDITING_ID);
      const item = Object.assign({}, old || {}, { id: old ? old.id : 'manual-' + Date.now(), title, subj: subject, date, start, end, status: old ? old.status : 'pending', source: old && old.source === 'smart' ? 'manual' : (old ? old.source : 'manual'), reason: old && old.source === 'smart' ? 'Edited by you.' : old ? old.reason : 'Added by you.' });
      const error = MFStudyPlanner.validateSession(item, updated.sessions, timetableList, old && old.id);
      if (error) { toast(error); return; }
      if (old) updated.sessions = updated.sessions.map(s => s.id === old.id ? item : s); else updated.sessions.push(item);
      await savePlan(updated); PLANNER_EDITING_ID = ''; PLANNER_NEW_DATE = ''; await smartPlannerView();
    });
    $('#sp-settings-form').addEventListener('submit', async event => {
      event.preventDefault();
      const next = { dailyMinutes: Number($('#sp-goal').value), sessionMinutes: Number($('#sp-duration').value), start: $('#sp-window-start').value, end: $('#sp-window-end').value };
      if (!PLANNER_DAILY_GOALS.includes(next.dailyMinutes) || !PLANNER_SESSION_LENGTHS.includes(next.sessionMinutes) || !next.start || !next.end || MFStudyPlanner.toMinutes(next.end) <= MFStudyPlanner.toMinutes(next.start)) { toast('Choose a valid goal, session length and availability window'); return; }
      await store.set('study-planner-settings', next); await smartPlannerView();
    });
    $('#sp-task-form').addEventListener('submit', async event => {
      event.preventDefault();
      const title = $('#sp-task-title').value.trim(), subject = $('#sp-task-subject').value || null, due = $('#sp-task-date').value || null;
      if (!title || title.length > 120 || (subject && !subjByKey(subject)) || (due && !MFStudyPlanner.fromDateKey(due))) { toast('Enter a valid task, subject and due date'); return; }
      const updated = await plan(); updated.tasks = Array.isArray(updated.tasks) ? updated.tasks : [];
      updated.tasks.push({ id: 'task-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7), text: title, subj: subject, date: due, done: false });
      await savePlan(updated); await smartPlannerView();
    });
    app.addEventListener('click', async event => {
      const taskButton = event.target.closest('[data-task-action]');
      if (taskButton) {
        const updated = await plan(); updated.tasks = Array.isArray(updated.tasks) ? updated.tasks : [];
        const task = updated.tasks.find(t => t.id === taskButton.dataset.taskId); if (!task) return;
        if (taskButton.dataset.taskAction === 'toggle') task.done = !task.done;
        else updated.tasks = updated.tasks.filter(t => t.id !== task.id);
        await savePlan(updated); await smartPlannerView(); return;
      }
      const button = event.target.closest('[data-session-action]'); if (!button) return;
      const updated = await plan(); updated.sessions = Array.isArray(updated.sessions) ? updated.sessions : [];
      const item = updated.sessions.find(s => s.id === button.dataset.sessionId); if (!item) return;
      if (button.dataset.sessionAction === 'toggle') {
        item.status = item.status === 'completed' ? 'pending' : 'completed';
        item.completedAt = item.status === 'completed' ? Date.now() : null;
        await savePlan(updated);
        if (item.status === 'completed') await logAct('Completed study session: ' + item.title);
      } else if (button.dataset.sessionAction === 'edit') { PLANNER_EDITING_ID = item.id; PLANNER_NEW_DATE = ''; }
      else if (button.dataset.sessionAction === 'delete') updated.sessions = updated.sessions.filter(s => s.id !== item.id);
      if (button.dataset.sessionAction !== 'edit') await savePlan(updated);
      await smartPlannerView();
      if (button.dataset.sessionAction === 'edit') $('#sp-title')?.focus();
    });
    app.addEventListener('dragstart', event => {
      const card = event.target.closest('[data-session-id][draggable="true"]');
      if (!card || !event.dataTransfer) return;
      event.dataTransfer.setData('text/plain', card.dataset.sessionId); event.dataTransfer.effectAllowed = 'move';
    });
    app.addEventListener('dragover', event => {
      const day = event.target.closest('[data-drop-date]');
      if (day) { event.preventDefault(); day.classList.add('is-drop-target'); if (event.dataTransfer) event.dataTransfer.dropEffect = 'move'; }
    });
    app.addEventListener('dragleave', event => { const day = event.target.closest('[data-drop-date]'); if (day && !day.contains(event.relatedTarget)) day.classList.remove('is-drop-target'); });
    app.addEventListener('drop', async event => {
      const day = event.target.closest('[data-drop-date]'); if (!day || !event.dataTransfer) return;
      event.preventDefault(); day.classList.remove('is-drop-target');
      const updated = await plan(); updated.sessions = Array.isArray(updated.sessions) ? updated.sessions : [];
      const item = updated.sessions.find(s => s.id === event.dataTransfer.getData('text/plain'));
      if (!item || item.status === 'completed') return;
      const original = item.date; item.date = day.dataset.dropDate;
      const error = MFStudyPlanner.validateSession(item, updated.sessions, timetableList, item.id);
      if (error) { item.date = original; toast(error); return; }
      item.source = 'manual'; item.reason = 'Rescheduled by you.';
      await savePlan(updated);
      if (PLANNER_VIEW_MODE === 'month' && item.date.slice(0, 7) !== PLANNER_VIEW_DATE.slice(0, 7)) PLANNER_VIEW_DATE = item.date;
      await smartPlannerView();
    });
  } catch (error) {
    console.error('Study planner could not load', error);
    app.innerHTML = `<section class="hero"><div class="eyebrow">Smart Study Planner</div><h1>We couldn’t load your study plan</h1><p class="sub">Your saved course data is still on this device. Try loading the planner again.</p><button class="btn" type="button" id="sp-retry">Try again</button></section>`;
    $('#sp-retry').addEventListener('click', smartPlannerView);
  }
}

  if (typeof patchRoute === 'function') {
    patchRoute('^\\/planner$', smartPlannerView);
  } else if (typeof routes !== 'undefined') {
    for (const entry of routes) if (entry[0].source === '^\\/planner$') entry[1] = smartPlannerView;
  }
  window.MFSmartPlannerView = smartPlannerView;
  if (location.hash === '#/planner') smartPlannerView();
})();



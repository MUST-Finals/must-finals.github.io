/* Explainable, local-first study planning helpers. No remote AI service is used. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.MFStudyPlanner = api;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';

  const DAY_MS = 86400000;
  const TERMINAL_ASSIGNMENT = /^(completed|submitted|done)$/i;

  function dateKey(value) {
    const d = value instanceof Date ? value : new Date(value);
    if (!Number.isFinite(d.getTime())) return '';
    return [d.getFullYear(), String(d.getMonth() + 1).padStart(2, '0'), String(d.getDate()).padStart(2, '0')].join('-');
  }

  function fromDateKey(value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value || ''))) return null;
    const [y, m, d] = value.split('-').map(Number);
    const date = new Date(y, m - 1, d);
    return date.getFullYear() === y && date.getMonth() === m - 1 && date.getDate() === d ? date : null;
  }

  function addDays(value, count) {
    const date = value instanceof Date ? new Date(value) : fromDateKey(value);
    if (!date) return null;
    date.setDate(date.getDate() + Number(count || 0));
    return date;
  }

  function dayDistance(date, now) {
    const a = fromDateKey(date);
    const b = fromDateKey(dateKey(now || new Date()));
    return a && b ? Math.round((a - b) / DAY_MS) : null;
  }

  function toMinutes(value) {
    const match = /^(\d{2}):(\d{2})$/.exec(String(value || ''));
    if (!match) return null;
    const h = Number(match[1]), m = Number(match[2]);
    return h < 24 && m < 60 ? h * 60 + m : null;
  }

  function fromMinutes(value) {
    return String(Math.floor(value / 60)).padStart(2, '0') + ':' + String(value % 60).padStart(2, '0');
  }

  function overlaps(aStart, aEnd, bStart, bEnd) {
    return aStart < bEnd && aEnd > bStart;
  }

  function candidateReason(candidate) {
    const pieces = [];
    if (candidate.daysToDue !== null && candidate.daysToDue !== undefined) {
      if (candidate.daysToDue < 0) pieces.push('overdue');
      else if (candidate.daysToDue === 0) pieces.push('due today');
      else pieces.push('due in ' + candidate.daysToDue + ' day' + (candidate.daysToDue === 1 ? '' : 's'));
    }
    if (candidate.daysToExam !== null && candidate.daysToExam !== undefined && candidate.daysToExam >= 0) {
      pieces.push('exam in ' + candidate.daysToExam + ' day' + (candidate.daysToExam === 1 ? '' : 's'));
    }
    if (candidate.accuracyPct !== null && candidate.accuracyPct !== undefined && candidate.attempts >= 3 && candidate.accuracyPct < 80) {
      pieces.push(candidate.accuracyPct + '% accuracy across ' + candidate.attempts + ' questions');
    }
    if (candidate.priority === 'high') pieces.push('marked high priority');
    if (candidate.type === 'lecture') pieces.push('an unfinished lecture');
    if (candidate.type === 'review') pieces.push(candidate.mistakeCount + ' unresolved mistake' + (candidate.mistakeCount === 1 ? '' : 's'));
    if (candidate.type === 'practice' && !pieces.length) pieces.push('keep practice moving across your courses');
    if (!pieces.length) pieces.push('fits your unfinished study work');
    return 'Prioritized because ' + pieces.join(' · ') + '.';
  }

  function candidateScore(candidate) {
    let score = 20;
    if (candidate.daysToDue !== null && candidate.daysToDue !== undefined) {
      score += candidate.daysToDue < 0 ? 55 : Math.max(0, 12 - candidate.daysToDue) * 4;
    }
    if (candidate.daysToExam !== null && candidate.daysToExam !== undefined && candidate.daysToExam >= 0) {
      score += Math.max(0, 35 - candidate.daysToExam) * 1.5;
    }
    if (candidate.priority === 'high') score += 18;
    else if (candidate.priority === 'low') score -= 6;
    if (candidate.accuracyPct !== null && candidate.accuracyPct !== undefined && candidate.attempts >= 3) {
      score += Math.max(0, 80 - candidate.accuracyPct) * 0.8;
    }
    if (candidate.completionPct !== null && candidate.completionPct !== undefined) {
      score += Math.max(0, 100 - candidate.completionPct) * 0.12;
    }
    return score;
  }

  function makeCandidates(input) {
    const data = input || {};
    const subjects = Array.isArray(data.subjects) ? data.subjects : [];
    const plan = data.plan || {};
    const progress = data.progress || {};
    const now = data.now instanceof Date ? data.now : new Date(data.now || Date.now());
    const today = dateKey(now);
    const candidates = [];
    const subjectByKey = new Map(subjects.map(s => [s.key, s]));

    function add(candidate) {
      const s = candidate.subj ? subjectByKey.get(candidate.subj) : null;
      const examDate = s && plan.exams && plan.exams[s.key];
      candidate.daysToExam = examDate ? dayDistance(examDate, now) : null;
      candidate.completionPct = s && Number.isFinite(s.completionPct) ? s.completionPct : null;
      candidate.score = candidateScore(candidate);
      candidate.reason = candidateReason(candidate);
      candidates.push(candidate);
    }

    (Array.isArray(plan.tasks) ? plan.tasks : []).forEach((task, index) => {
      if (!task || task.done || !String(task.text || '').trim()) return;
      const due = fromDateKey(task.date) ? task.date : null;
      add({ id: 'task-' + String(task.id || index), title: String(task.text).trim(), subj: subjectByKey.has(task.subj) ? task.subj : null,
        type: 'task', dueDate: due, daysToDue: due ? dayDistance(due, now) : null, priority: 'normal' });
    });

    (Array.isArray(data.assignments) ? data.assignments : []).forEach((item, index) => {
      if (!item || TERMINAL_ASSIGNMENT.test(String(item.status || ''))) return;
      const title = String(item.title || '').trim();
      if (!title) return;
      const due = fromDateKey(item.due) ? item.due : null;
      const priority = /^(high|normal|low)$/i.test(String(item.priority || '')) ? String(item.priority).toLowerCase() : 'normal';
      add({ id: 'assignment-' + String(item.id || item.created || index), title, subj: subjectByKey.has(item.subject) ? item.subject : null,
        type: 'assignment', dueDate: due, daysToDue: due ? dayDistance(due, now) : null, priority });
    });

    for (const subject of subjects) {
      const lectures = Array.isArray(subject.lectures) ? subject.lectures : [];
      const next = lectures.find(lecture => lecture && !lecture.missing && !progress.completed?.[subject.key + '-lec' + lecture.n]);
      if (next) add({ id: subject.key + '-lecture-' + next.n, title: 'Lecture ' + next.n + ' · ' + String(next.topic || 'Continue the course'), subj: subject.key, type: 'lecture', priority: 'normal' });
      if (Number(subject.mistakeCount) > 0) add({ id: subject.key + '-mistakes', title: 'Review ' + subject.mistakeCount + ' missed question' + (subject.mistakeCount === 1 ? '' : 's'), subj: subject.key, type: 'review', mistakeCount: Number(subject.mistakeCount), priority: 'high' });
      if (Number(subject.mcqCount) > 0) add({ id: subject.key + '-practice', title: 'Targeted practice · ' + String(subject.code || subject.key), subj: subject.key, type: 'practice', accuracyPct: subject.accuracy ? subject.accuracy.pct : null, attempts: subject.accuracy ? subject.accuracy.t : 0, priority: 'normal' });
    }

    return candidates.sort((a, b) => b.score - a.score || String(a.title).localeCompare(String(b.title)));
  }

  function validateSession(session, sessions, timetable, ignoredId) {
    const value = session || {};
    const date = fromDateKey(value.date);
    const start = toMinutes(value.start), end = toMinutes(value.end);
    if (!date) return 'Choose a valid session date.';
    if (start === null || end === null || end <= start) return 'Choose a valid start and end time.';
    const sameDay = (Array.isArray(sessions) ? sessions : []).filter(item => item && item.id !== (ignoredId || value.id) && item.date === value.date);
    if (sameDay.some(item => {
      const a = toMinutes(item.start), b = toMinutes(item.end);
      return a !== null && b !== null && overlaps(start, end, a, b);
    })) return 'This session overlaps another study session.';
    const weekday = date.getDay();
    if ((Array.isArray(timetable) ? timetable : []).some(item => {
      const a = toMinutes(item.start), b = toMinutes(item.end);
      return Number(item.day) === weekday && a !== null && b !== null && overlaps(start, end, a, b);
    })) return 'This session overlaps an event in your timetable.';
    return '';
  }

  function generateSchedule(input) {
    const data = input || {};
    const candidates = Array.isArray(data.candidates) ? data.candidates.slice().sort((a, b) => b.score - a.score) : [];
    const startDate = fromDateKey(data.startDate || dateKey(new Date()));
    if (!startDate) return [];
    const days = Math.max(1, Math.min(31, Math.floor(Number(data.days) || 7)));
    const targetMinutes = Math.max(20, Math.min(600, Math.floor(Number(data.targetMinutes) || 90)));
    const sessionMinutes = Math.max(20, Math.min(180, Math.floor(Number(data.sessionMinutes) || 45)));
    const windowStart = toMinutes(data.windowStart || '17:00');
    const windowEnd = toMinutes(data.windowEnd || '21:00');
    if (windowStart === null || windowEnd === null || windowEnd <= windowStart) return [];
    const timetable = Array.isArray(data.timetable) ? data.timetable : [];
    const busySessions = Array.isArray(data.busySessions) ? data.busySessions : [];
    const scheduled = [];
    const minutesByDay = new Map();
    const weekEnd = addDays(startDate, days - 1);

    candidates.forEach((candidate, index) => {
      const due = fromDateKey(candidate.dueDate);
      let lastDate = weekEnd;
      if (due && due >= startDate && due < weekEnd) lastDate = due;
      const possibleDays = [];
      for (let d = new Date(startDate); d <= lastDate; d.setDate(d.getDate() + 1)) possibleDays.push(new Date(d));
      possibleDays.sort((a, b) => (minutesByDay.get(dateKey(a)) || 0) - (minutesByDay.get(dateKey(b)) || 0) || a - b);

      for (const day of possibleDays) {
        const key = dateKey(day);
        const used = minutesByDay.get(key) || 0;
        if (used >= targetMinutes) continue;
        const duration = Math.min(sessionMinutes, targetMinutes - used);
        if (duration < 20) continue;
        const blocks = [];
        timetable.filter(e => Number(e.day) === day.getDay()).forEach(e => blocks.push([toMinutes(e.start), toMinutes(e.end)]));
        busySessions.concat(scheduled).filter(e => e && e.date === key).forEach(e => blocks.push([toMinutes(e.start), toMinutes(e.end)]));
        const slot = (() => {
          for (let start = windowStart; start + duration <= windowEnd; start += 5) {
            if (!blocks.some(block => block[0] !== null && block[1] !== null && overlaps(start, start + duration, block[0], block[1]))) return start;
          }
          return null;
        })();
        if (slot === null) continue;
        const id = 'smart-' + key + '-' + fromMinutes(slot) + '-' + String(candidate.id || index).replace(/[^a-z0-9_-]/gi, '-');
        scheduled.push({ id, candidateId: candidate.id, title: candidate.title, subj: candidate.subj || null, type: candidate.type || 'study',
          date: key, start: fromMinutes(slot), end: fromMinutes(slot + duration), status: 'pending', source: 'smart', reason: candidate.reason || 'Added by your study plan.' });
        minutesByDay.set(key, used + duration);
        break;
      }
    });
    return scheduled;
  }

  return { addDays, candidateReason, candidateScore, dateKey, dayDistance, fromDateKey, generateSchedule, makeCandidates, overlaps, toMinutes, validateSession };
});

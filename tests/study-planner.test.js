const test = require('node:test');
const assert = require('node:assert/strict');
const planner = require('../js/study-planner.js');

const now = new Date(2026, 10, 22, 12);

test('prioritizes an imminent assignment and explains the score', () => {
  const candidates = planner.makeCandidates({
    now,
    subjects: [{ key: 'cs212', code: 'CS.212', lectures: [], accuracy: { t: 10, pct: 45 }, mcqCount: 10, completionPct: 30 }],
    assignments: [
      { title: 'Project report', subject: 'cs212', due: '2026-11-23', priority: 'high', status: 'in progress' },
      { title: 'Old submitted work', subject: 'cs212', due: '2026-11-23', priority: 'high', status: 'submitted' },
    ],
    plan: { exams: { cs212: '2026-11-28' }, tasks: [] },
    progress: { completed: {} },
  });
  assert.equal(candidates[0].title, 'Project report');
  assert.match(candidates[0].reason, /due in 1 day/);
  assert.match(candidates[0].reason, /high priority/);
  assert.equal(candidates.some(c => c.title === 'Old submitted work'), false);
});

test('schedule stays within daily study time and avoids recurring timetable events', () => {
  const schedule = planner.generateSchedule({
    startDate: '2026-11-22', days: 3, targetMinutes: 90, sessionMinutes: 45,
    windowStart: '17:00', windowEnd: '21:00',
    timetable: [{ day: 0, start: '17:00', end: '18:00' }], busySessions: [],
    candidates: Array.from({ length: 6 }, (_, i) => ({ id: 'c' + i, title: 'Task ' + i, type: 'lecture', score: 10 - i, reason: 'Because' })),
  });
  assert.equal(schedule.length, 6);
  assert.equal(schedule.find(s => s.date === '2026-11-22').start, '18:00');
  const totals = new Map();
  for (const item of schedule) {
    totals.set(item.date, (totals.get(item.date) || 0) + planner.toMinutes(item.end) - planner.toMinutes(item.start));
  }
  assert.ok([...totals.values()].every(total => total <= 90));
  for (const day of new Set(schedule.map(s => s.date))) {
    const items = schedule.filter(s => s.date === day).sort((a, b) => a.start.localeCompare(b.start));
    for (let i = 1; i < items.length; i++) assert.ok(items[i - 1].end <= items[i].start);
  }
});

test('session validation catches study and class overlaps', () => {
  const sessions = [{ id: 'one', date: '2026-11-23', start: '18:00', end: '18:45' }];
  assert.match(planner.validateSession({ id: 'two', date: '2026-11-23', start: '18:30', end: '19:00' }, sessions, []), /overlaps another/);
  assert.match(planner.validateSession({ date: '2026-11-22', start: '17:30', end: '18:00' }, [], [{ day: 0, start: '17:00', end: '18:00' }]), /timetable/);
  assert.equal(planner.validateSession({ date: '2026-11-22', start: '18:00', end: '18:45' }, [], [{ day: 0, start: '17:00', end: '18:00' }]), '');
});

test('regeneration preserves a completed session and creates a distinct replacement', () => {
  const completed = { id: 'smart-2026-11-22-17-00-cs212-lecture-1', date: '2026-11-22', start: '17:00', end: '17:45', status: 'completed' };
  const replacement = planner.generateSchedule({
    startDate: '2026-11-22', days: 1, targetMinutes: 90, sessionMinutes: 45,
    windowStart: '17:00', windowEnd: '20:00', busySessions: [completed], timetable: [],
    candidates: [{ id: 'cs212-lecture-1', title: 'Lecture 1', type: 'lecture', score: 10 }],
  });
  assert.equal(replacement.length, 1);
  assert.notEqual(replacement[0].id, completed.id);
  assert.equal(replacement[0].start, '17:45');
});

test('rejects impossible dates and invalid time ranges', () => {
  assert.equal(planner.fromDateKey('2026-02-30'), null);
  assert.match(planner.validateSession({ date: '2026-02-30', start: '09:00', end: '10:00' }, [], []), /valid session date/);
  assert.match(planner.validateSession({ date: '2026-11-22', start: '12:00', end: '11:00' }, [], []), /valid start and end/);
});

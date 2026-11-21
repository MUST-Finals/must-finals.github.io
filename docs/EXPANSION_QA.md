# MUST Finals Expansion — Manual QA Checklist

## Safe deployment order
1. Review the branch diff.
2. Apply supabase/migrations/202611210001_platform_expansion.sql in a staging Supabase project first.
3. Verify RLS policies using two student accounts and one admin account.
4. Deploy frontend branch to a preview environment.
5. Run the tests below before merging to main.

## Frontend smoke tests
- [ ] Existing Dashboard opens and shows the original subjects.
- [ ] Existing subject pages, lecture links, MCQ, written practice and timed exams still work.
- [ ] Existing bookmarks, revision, flashcards, planner and tools still work.
- [ ] Workspace navigation appears and each route loads directly.
- [ ] GPA calculator rejects invalid grade points and non-positive credit hours.
- [ ] GPA calculation uses weighted credit hours and saves a semester.
- [ ] Assignment tracker adds, advances status and deletes tasks.
- [ ] Timetable rejects invalid times and overlapping events on the same weekday.
- [ ] Profile fields persist after refresh.
- [ ] Focus timer pauses, resumes, resets and records completed sessions.
- [ ] Daily challenge permits one answer per local calendar day.
- [ ] Notifications can be marked read and cleared.
- [ ] Resources accept secure HTTPS links only.
- [ ] Mind map saves and restores nodes.
- [ ] Offline page reports Service Worker/cache status accurately.
- [ ] Study Rooms show a setup message when schema is unavailable and load after migration.
- [ ] Arabic RTL and English LTR layouts remain usable.
- [ ] Mobile sidebar and workspace cards remain usable.

## Security and integration tests
- [ ] No AI provider secret exists in index.html or any browser JavaScript.
- [ ] AI routes clearly indicate that server-side AI is not configured until Edge Functions exist.
- [ ] No arbitrary code is executed in the browser or application server.
- [ ] Private user tables deny access to other users under RLS.
- [ ] Public room reads and private room membership behave according to policy.
- [ ] Student resources are not visible publicly until approved.
- [ ] PWA caches do not store private API responses or cross-account content.
- [ ] External Google Drive files are not claimed to be offline unless verified downloaded.
- [ ] Existing localStorage progress is preserved after upgrade.

## Known limitations before production
- AI PDF chat, AI quiz generation and automatic AI mind maps need server-side functions and a configured AI provider.
- C++/Python execution needs an isolated execution provider.
- Realtime Study Rooms need Realtime enabled and policies verified.
- Push notifications need a push provider and VAPID credentials.
- Student resources moderation needs an admin review UI and storage bucket policies.
- Local-first records are device/browser-specific until authenticated sync endpoints are implemented.

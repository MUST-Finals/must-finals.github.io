# MUST Finals platform - backend & account architecture

Status: **static frontend with Supabase services**. GitHub Pages serves the app, while
Supabase provides authentication, progress sync, and related services.

## Login-first access
- The app waits for Supabase Auth to restore a session before rendering study routes.
  Signed-out visitors see the branded welcome and sign-in screen; after sign-in, the app
  returns them to the route they originally requested.
- This is an app-level gate. GitHub Pages serves the frontend and published course assets
  publicly, so the gate must not be treated as access control for confidential files.
- If Supabase Auth cannot initialize, the app shows a retry screen and keeps the workspace
  hidden instead of opening it in a signed-out state.

## 1. Accounts and roles (RBAC)
- Provider: a managed auth service (e.g. Supabase Auth / Firebase Auth) with email sign-in.
- Roles: `student` (default), `moderator`, `admin`. Role stored on the user row, enforced
  server-side on every request (never client-side).
- Admin panel (role-gated): edit question bank, review reports submitted to the existing
  `reports` table, and moderate other supported site content.

## 2. Progress sync
- The async local-first store in `js/app.js` keeps each user's study data in browser
  storage and syncs it through the existing Supabase `progress.state` row when signed in.
- Study setup, exam dates, generated sessions, session completion and reminders use this
  same per-account state and its existing row-level security policy. No schema migration
  is needed for these features.

## 3. AI study assistant and study planning
- The study setup records selected courses, confirmed exam dates, a daily study target,
  preferred study time and optional reminders. On first sign-in, students complete this
  setup before opening course routes.
- The rule-based weekly planner uses real course completion, configured exam dates,
  pending planner tasks and assignments, the existing weekly timetable, and available
  study time. Generated sessions avoid known timetable conflicts. Students can edit,
  drag to another day, complete, delete, regenerate, or report a session.
- The study tutor searches the available question bank and lecture titles and links to
  real course sources. A matching verified question can provide a source-based answer;
  otherwise it says that no direct answer was found. The tutor can call the existing
  `ai-proxy` Supabase Edge Function with retrieved course context, but provider access,
  prompts, rate limits and usage logging are controlled by that server function. Client
  code cannot enable a provider or remove a server-side student restriction.
- Optional study reminders create a personal inbox item. Browser notifications require
  permission and are delivered only while the site is open; background push needs a
  separately configured push service.
- Course and tutor reports reuse the existing `reports` table and admin moderation queue.

## 4. Community / gamification (optional, from the brief)
- Opt-in leaderboard computed from real exam history only (never fabricated stats).
- Discussion per question (`question_comments(question_id, user_id, body, created_at)`)
  with moderator tooling.

## 5. Boundaries
- No API provider key is stored in frontend assets. Hosted AI remains dependent on the
  secured Supabase Edge Function and its deployed configuration; when that call is
  restricted or unavailable, the tutor falls back to course-bank retrieval.
- Browser-local reminders are not push notifications and will not fire after the site
  has been closed. The platform should not promise background delivery without a push
  service.
- The app-level sign-in gate is not access control for static files served by GitHub Pages.

## 6. Progress sync behavior
- Local-first: every progress key lives in localStorage under `mf.` with a per-key
  timestamp under `mf.t.`.
- Push (syncUp): per-key merge against the remote `progress.state` row; the newer
  timestamp wins per key, so a stale device cannot drop another device's newer
  keys. Pull (syncDown) applies the same comparison on load.
- Conflict rule: last-writer-wins per key. List-shaped values (for example the
  notifications inbox) are replaced as a whole when the same key is written on two
  devices within the same window; concurrent adds on two devices are not union-merged.
- Pushes are debounced (2.5s) and fire only on local writes; the synced-at marker is
  written directly to storage so it never triggers a push loop.
- Deletion: removing a whole synced key (`store.del`) writes a null tombstone with a
  fresh timestamp. The tombstone propagates like any newer value; receiving devices
  drop the local value but keep the tombstone timestamp, so a deleted key is never
  resurrected by later syncs. A newer legitimate value always beats an older
  tombstone, and a stale device's delete loses to a newer value. Deletions inside
  the `progress` object (bookmarks, mistakes, a cleared notifications inbox) are
  ordinary value overwrites of that key, not tombstones.

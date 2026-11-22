# MUST Finals platform - backend & account architecture

Status: **backend design only**. The platform is a static GitHub Pages app with local
browser storage and no server. The AI tutor, authenticated sync and community backend
described below remain design work and are not active.

## Current study planner
- The Smart Study Planner uses the existing local progress store and `x.assignments`
  and `x.timetable` data. It creates explainable schedules in the browser and records
  sessions in the existing `plan` value. It does not call an AI API or claim cross-device
  sync.
- Recommendations use explicit rules: user-entered exam and due dates, open tasks,
  unfinished lectures, unresolved mistakes and measured question accuracy. Generated
  sessions avoid existing sessions and recurring timetable events.
- Availability preferences are stored locally in `study-planner-settings`. A future
  authenticated backend should keep these keys under the same user-owned progress
  policy as the rest of the client data.

## 1. Accounts and roles (RBAC)
- Provider: a managed auth service (e.g. Supabase Auth / Firebase Auth) with email sign-in.
- Roles: `student` (default), `moderator`, `admin`. Role stored on the user row, enforced
  server-side on every request (never client-side).
- Admin panel (role-gated): edit question bank, mark broken materials, review reported
  questions. The current "Report error" button copies question details to the clipboard;
  with a backend it would POST to a `question_reports` table instead.

## 2. Progress sync
- The UI already talks to progress only through an async `store.get/store.set` interface
  (see js/app.js part 1). Swapping localStorage for authenticated API calls requires no UI
  rewrite: implement the same interface against `/api/progress`.
- Schema: `users(id, email, role)`, `progress(user_id, key, value_json, updated_at)`.

## 3. AI tutor (RAG over the real course materials)
- Ingest only the actual course PDFs/slides from the Drive folder into a vector store.
- Retrieval-augmented answers must cite the lecture/section they came from; the tutor
  must answer "not in the materials" rather than invent content - same no-fabrication
  rule the static site follows.
- Requires a hosted model API (paid) - blocked until approved.

## 4. Community / gamification (optional, from the brief)
- Opt-in leaderboard computed from real exam history only (never fabricated stats).
- Discussion per question (`question_comments(question_id, user_id, body, created_at)`)
  with moderator tooling.

## 5. What is NOT planned
- No fake login, no fake AI, no fake sync on the static site. Features above ship only
  when the corresponding backend is live; until then the UI shows local-only equivalents
  (localStorage progress, clipboard-based error reports) and says so.

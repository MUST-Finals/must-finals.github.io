# MUST Finals platform - backend & account architecture

Status: **backend design only**. The platform is a static GitHub Pages app with local
browser storage and no server. The AI Study Planner has an opt-in Edge Function implementation under `supabase/`; it is
not active for students until its migration and function are deployed and a Groq key is
configured. The AI tutor, authenticated sync and community backend described below remain
design work and are not active.

## Current study planner
- The Smart Study Planner uses the existing local progress store and `x.assignments`
  and `x.timetable` data. It creates explainable schedules in the browser and records
  sessions in the existing `plan` value. Its deterministic planning works without AI and
does not claim cross-device sync. Signed-in students can explicitly request an AI review
when the server-side planner function is activated.
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


## Activate the AI Study Coach
The function and quota migration are source-controlled under `supabase/`. A maintainer with
Supabase project access must run:

    supabase link --project-ref ziczpsbryyjdwjoedtdb
    supabase db push
    supabase secrets set GROQ_API_KEY=your_groq_api_key
    supabase functions deploy study-planner-ai

The Edge Function authenticates the student, validates the study summary and model output,
checks proposed sessions for conflicts, and enforces 20 requests per user per UTC day plus
a shared platform cap (500 per day by default). Prompts and answers are not stored. The
default model is `openai/gpt-oss-20b`; `GROQ_MODEL`, `STUDY_PLANNER_GLOBAL_DAILY_LIMIT`,
and `ALLOWED_ORIGINS` can be set as function secrets. Never place provider or service keys
in the static frontend.

# MUST Finals platform - backend & account architecture

Status: **design only, not active**. The live site is a fully static GitHub Pages app
(localStorage progress, no server). Nothing below is implemented on the live site, and
no feature on the live site pretends to be any of this. This document is the integration
plan for when infrastructure is approved.

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


## AI Smart Study Planner
The planner adds an explainable rule-based weekly schedule and calendar using each
student's saved study progress, exam dates, assignment deadlines, and available time.
The deterministic planner runs without an AI provider. The optional AI coach is called
only after a signed-in student requests a review.

The browser sends a minimized study summary to the Supabase Edge Function. The function
authenticates the student, rejects blocked accounts, validates request and model output,
checks proposed sessions for conflicts, and applies per-user and shared daily request
limits. Prompts and answers are not stored. The AI coach will remain unavailable until
the migration and function are deployed and a Groq API key is configured as a Supabase
secret.

To activate it, a maintainer with Supabase project access must run:

    supabase link --project-ref ziczpsbryyjdwjoedtdb
    supabase db push
    supabase secrets set GROQ_API_KEY=your_groq_api_key
    supabase functions deploy study-planner-ai

The default model is `openai/gpt-oss-20b`. The model, shared daily cap, and allowed
origins can be configured using `GROQ_MODEL`,
`STUDY_PLANNER_GLOBAL_DAILY_LIMIT`, and `ALLOWED_ORIGINS` function secrets. Never put
provider or service-role keys in the static frontend.

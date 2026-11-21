# MUST Finals — Platform Expansion Audit

Audit date: 2026-11-21
Repository: https://github.com/mazentaher/must-finals
Working branch: feature/platform-expansion

## Executive summary

The project is an existing vanilla HTML/CSS/JavaScript single-page application. It is not a React/Vue project and has no package manifest or build pipeline in the repository. The live deployment is GitHub Pages.

The current application already contains substantial functionality. The expansion should extend these foundations rather than replace them.

## Existing implementation confirmed

- Static SPA with hash-based routing in js/app.js.
- Course content stored in js/data.js for CS.212, ECE202, and CS.211.
- Existing subject pages, lecture/section links, MCQ practice, written practice, timed mock exams, exam history, bookmarks, revision, and interactive tools.
- Existing local progress store using localStorage through async store.get/store.set.
- Existing flashcards and SM-2-lite spaced repetition.
- Existing study planner with manually entered exam dates and tasks.
- Existing daily goals, streaks, XP, badges, and recommendations.
- Existing account integration using Supabase Auth.
- Existing Supabase progress sync and profile handling.
- Existing announcements, question discussions, reports, content moderation, and admin page.
- Existing manifest.webmanifest and service worker for the installable/offline app shell.
- Existing dark/light theme and Arabic/English UI direction toggle.

## Important integration findings

1. GitHub Pages can host the frontend and PWA assets, but it cannot run private server-side code.
2. Supabase is already referenced in js/backend.js. The current client uses a publishable key; private AI provider keys must never be placed in frontend JavaScript.
3. The existing backend integration uses tables including profiles, progress, announcements, posts, reports, and content_items. New features need additive migrations and matching Row Level Security policies.
4. Existing PWA caching is an app-shell strategy. It does not automatically make third-party Google Drive PDFs available offline.
5. Existing planner, flashcards, revision, gamification, and admin features overlap with several requested features. These should be upgraded or linked, not duplicated.
6. AI PDF chat, AI-generated quizzes, and AI-generated mind maps require a secure server-side AI endpoint and a configured provider secret.
7. Running arbitrary C++/Python code requires an isolated execution service. It must not be executed directly in the browser page or on an untrusted application server.
8. Study Rooms require database-backed membership and realtime messaging. Campus Hub can reuse the existing announcements table for official announcements.
9. The repository has no automated test runner or package manifest at the time of this audit.

## Feature disposition

| Requested feature | Existing foundation | Required work |
|---|---|---|
| Chat With Your PDF | PDF links and Supabase | PDF extraction, document storage, RAG, secure AI endpoint, page citations |
| AI Quiz Generator | Existing question bank and exam runner | Secure AI endpoint, generation validation, saved generated quizzes |
| Smart Revision System | Flashcards and SM-2-lite | Improve scheduling, confidence rating, due queue, analytics |
| Mind Map Generator | None confirmed | Interactive graph UI and optional AI generation |
| Code Playground | Existing code-output practice | Editable editor; secure remote sandbox for execution |
| GPA Calculator | None confirmed | Configurable grading scales and local/cloud records |
| Advanced Admin Dashboard | Existing Supabase admin page | Extend metrics, moderation, usage monitoring, and management |
| PWA | Existing manifest and service worker | Harden cache lifecycle, offline library, install UX |
| Offline Learning | Existing app-shell cache and local data | Explicit downloads, IndexedDB, sync conflict handling |
| Study Rooms | Existing per-question discussions | Room/member/message schema and realtime layer |
| Smart Timetable | Existing planner | Weekly recurring events, conflict checks, reminders |
| Campus Hub | Existing announcements | Events, categories, registration links, admin publishing |
| Assignment Tracker | Existing planner tasks | Dedicated assignment fields, priorities, statuses, attachments |
| Student Resources Hub | Existing course materials | Student submissions, moderation, search, verification |
| Student Profile | Existing Supabase profile | Extend profile preferences and privacy controls |
| Focus Mode & Pomodoro | None confirmed | Persistent timer, session history, focus stats |
| Daily Challenges | Existing question bank and gamification | Deterministic daily selection, attempts, fair XP |
| Notifications Center | Existing announcements | In-app notifications, preferences, optional push delivery |

## Safe implementation sequence

1. Preserve the existing main branch and work only on feature/platform-expansion.
2. Add additive database migrations and document deployment requirements.
3. Build frontend features that can work safely with local persistence.
4. Integrate Supabase-backed features only after the migration is applied and RLS is verified.
5. Add AI Edge Functions only after an AI provider secret is configured server-side.
6. Add code execution only through a sandbox service.
7. Update the PWA and offline behavior without caching private data across accounts.
8. Run syntax, route, regression, mobile, accessibility, and security checks before merging.

## Current status

This document records the initial repository audit. It does not claim that the requested new features have been implemented. All changes for this workstream belong on feature/platform-expansion until reviewed.

# Student Help Center

The Help Center adds three paths from the authenticated workspace:

- **Quick guides** explain existing MUST Finals features and link to the relevant page.
- **Campus guide** lists administrator-curated links. Each entry requires a destination URL, a direct source URL, a source name, and a review date. A scheduled review date can expire an entry automatically. These entries are presented as MUST Finals-curated links, not as official university announcements.
- **Course Q&A** lets signed-in students ask a general or course-specific question, answer open questions, and mark their own question resolved. Display names are used; the UI does not show email addresses or account IDs. Students can privately report questions and answers.

## Access and moderation

`supabase/migrations/20261125000000_student_help_center.sql` creates the directory, questions, answers, and reports tables. Row-level security limits community content to signed-in users. Reports are visible only to the MUST Finals owner. The Help Center admin tools also require the existing admin role on the configured owner account (`2ec4e4aa-e56d-4bd2-8fb9-68c5023ccd0a`). The static app hides admin controls from students, while the database policies enforce the same boundary for writes.

An admin can add, edit, publish, unpublish, or delete campus guide entries; review private reports; and hide or restore reported questions and answers. The empty campus directory is intentional until actual source links have been checked and entered. Do not add guessed university contacts, office hours, or announcements.

## Setup

The frontend and migration are source-controlled but have not been deployed. Apply pending Supabase migrations from the active development branch when the feature is ready to deploy:

```sh
supabase db push
```

This applies all unapplied migrations in the linked project, so review the migration list before running it. No AI service is needed for this Help Center feature. If the migration is not applied, the page shows an unavailable state and leaves existing account and study data untouched.

## Privacy

Student questions and answers are visible to signed-in students and may include the writer's display name. Reports contain a reason written by the reporter and are private to the site owner/admin. Directory entries are public to signed-in users and display their sources and review dates. The privacy policy includes these behaviors.

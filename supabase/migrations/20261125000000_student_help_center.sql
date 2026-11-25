-- Student Help Center: source-aware campus directory and moderated student Q&A.
-- All student-generated content is private to authenticated users behind RLS.

create or replace function public.help_center_is_admin()
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid()
      and id = '2ec4e4aa-e56d-4bd2-8fb9-68c5023ccd0a'::uuid
      and role = 'admin'
  );
$$;

create or replace function public.help_center_can_post()
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select coalesce((
    select role <> 'blocked' from public.profiles where id = auth.uid()
  ), true);
$$;

revoke all on function public.help_center_is_admin() from public, anon;
revoke all on function public.help_center_can_post() from public, anon;
grant execute on function public.help_center_is_admin() to authenticated;
grant execute on function public.help_center_can_post() to authenticated;

create table if not exists public.help_directory_items (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(btrim(title)) between 3 and 100),
  category text not null check (category in ('academic', 'student-services', 'events', 'support')),
  summary text not null check (char_length(btrim(summary)) between 20 and 1200),
  url text not null check (url ~ '^https://[^[:space:]]+$'),
  source_name text not null check (char_length(btrim(source_name)) between 2 and 120),
  source_url text not null check (source_url ~ '^https://[^[:space:]]+$'),
  verified_on date not null default current_date,
  valid_until date,
  is_published boolean not null default false,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (valid_until is null or valid_until >= verified_on)
);

create table if not exists public.student_help_questions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  subject_key text check (subject_key is null or subject_key in ('cs212', 'ece202', 'cs211')),
  title text not null check (char_length(btrim(title)) between 5 and 120),
  body text not null check (char_length(btrim(body)) between 15 and 4000),
  status text not null default 'open' check (status in ('open', 'resolved', 'hidden')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.student_help_answers (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references public.student_help_questions(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  body text not null check (char_length(btrim(body)) between 8 and 4000),
  is_hidden boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.student_help_reports (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references public.student_help_questions(id) on delete cascade,
  answer_id uuid references public.student_help_answers(id) on delete cascade,
  reporter_id uuid not null references auth.users(id) on delete cascade,
  reason text not null check (char_length(btrim(reason)) between 8 and 500),
  status text not null default 'open' check (status in ('open', 'resolved', 'dismissed')),
  created_at timestamptz not null default now()
);

create index if not exists student_help_questions_recent_idx
  on public.student_help_questions(status, created_at desc);
create index if not exists student_help_questions_author_idx
  on public.student_help_questions(user_id, created_at desc);
create index if not exists student_help_answers_question_idx
  on public.student_help_answers(question_id, created_at);
create index if not exists student_help_reports_open_idx
  on public.student_help_reports(status, created_at);
create unique index if not exists student_help_reports_question_once_idx
  on public.student_help_reports(reporter_id, question_id) where answer_id is null;
create unique index if not exists student_help_reports_answer_once_idx
  on public.student_help_reports(reporter_id, answer_id) where answer_id is not null;

create or replace function public.set_help_center_updated_at()
returns trigger
language plpgsql
set search_path = public, pg_temp
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists help_directory_items_updated_at on public.help_directory_items;
create trigger help_directory_items_updated_at
before update on public.help_directory_items
for each row execute function public.set_help_center_updated_at();

drop trigger if exists student_help_questions_updated_at on public.student_help_questions;
create trigger student_help_questions_updated_at
before update on public.student_help_questions
for each row execute function public.set_help_center_updated_at();

alter table public.help_directory_items enable row level security;
alter table public.student_help_questions enable row level security;
alter table public.student_help_answers enable row level security;
alter table public.student_help_reports enable row level security;

revoke all on public.help_directory_items, public.student_help_questions,
  public.student_help_answers, public.student_help_reports from public, anon, authenticated;

grant select, insert, update, delete on public.help_directory_items to authenticated;
grant select, insert on public.student_help_questions to authenticated;
grant update (status) on public.student_help_questions to authenticated;
grant select, insert on public.student_help_answers to authenticated;
grant update (is_hidden) on public.student_help_answers to authenticated;
grant select, insert on public.student_help_reports to authenticated;
grant update (status) on public.student_help_reports to authenticated;

drop policy if exists help_directory_read on public.help_directory_items;
create policy help_directory_read on public.help_directory_items
for select to authenticated
using (
  public.help_center_is_admin()
  or (is_published and (valid_until is null or valid_until >= current_date))
);

drop policy if exists help_directory_admin_insert on public.help_directory_items;
create policy help_directory_admin_insert on public.help_directory_items
for insert to authenticated
with check (public.help_center_is_admin() and created_by = auth.uid());

drop policy if exists help_directory_admin_update on public.help_directory_items;
create policy help_directory_admin_update on public.help_directory_items
for update to authenticated
using (public.help_center_is_admin())
with check (public.help_center_is_admin());

drop policy if exists help_directory_admin_delete on public.help_directory_items;
create policy help_directory_admin_delete on public.help_directory_items
for delete to authenticated
using (public.help_center_is_admin());

drop policy if exists student_help_questions_read on public.student_help_questions;
create policy student_help_questions_read on public.student_help_questions
for select to authenticated
using (status in ('open', 'resolved') or public.help_center_is_admin());

drop policy if exists student_help_questions_insert on public.student_help_questions;
create policy student_help_questions_insert on public.student_help_questions
for insert to authenticated
with check (user_id = auth.uid() and status = 'open' and public.help_center_can_post());

drop policy if exists student_help_questions_resolve_own on public.student_help_questions;
create policy student_help_questions_resolve_own on public.student_help_questions
for update to authenticated
using (user_id = auth.uid() and status in ('open', 'resolved'))
with check (user_id = auth.uid() and status in ('open', 'resolved'));

drop policy if exists student_help_questions_admin_moderate on public.student_help_questions;
create policy student_help_questions_admin_moderate on public.student_help_questions
for update to authenticated
using (public.help_center_is_admin())
with check (public.help_center_is_admin());

drop policy if exists student_help_answers_read on public.student_help_answers;
create policy student_help_answers_read on public.student_help_answers
for select to authenticated
using (
  (not is_hidden or public.help_center_is_admin())
  and exists (
    select 1 from public.student_help_questions q
    where q.id = question_id and (q.status in ('open', 'resolved') or public.help_center_is_admin())
  )
);

drop policy if exists student_help_answers_insert on public.student_help_answers;
create policy student_help_answers_insert on public.student_help_answers
for insert to authenticated
with check (
  user_id = auth.uid()
  and public.help_center_can_post()
  and exists (select 1 from public.student_help_questions q where q.id = question_id and q.status = 'open')
);

drop policy if exists student_help_answers_admin_moderate on public.student_help_answers;
create policy student_help_answers_admin_moderate on public.student_help_answers
for update to authenticated
using (public.help_center_is_admin())
with check (public.help_center_is_admin());

drop policy if exists student_help_reports_admin_read on public.student_help_reports;
create policy student_help_reports_admin_read on public.student_help_reports
for select to authenticated
using (public.help_center_is_admin());

drop policy if exists student_help_reports_insert on public.student_help_reports;
create policy student_help_reports_insert on public.student_help_reports
for insert to authenticated
with check (
  reporter_id = auth.uid()
  and public.help_center_can_post()
  and exists (
    select 1 from public.student_help_questions q
    where q.id = question_id and q.status in ('open', 'resolved')
      and (
        answer_id is null
        or exists (
          select 1 from public.student_help_answers a
          where a.id = answer_id and a.question_id = q.id and not a.is_hidden
        )
      )
  )
);

drop policy if exists student_help_reports_admin_update on public.student_help_reports;
create policy student_help_reports_admin_update on public.student_help_reports
for update to authenticated
using (public.help_center_is_admin())
with check (public.help_center_is_admin());

comment on table public.help_directory_items is
  'Admin-curated campus links with a direct source URL and review date; items are not university announcements.';
comment on table public.student_help_questions is
  'Authenticated student questions; author identity is shown only as profile display name in the app.';
comment on table public.student_help_reports is
  'Private moderation reports visible only to admins.';

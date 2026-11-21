-- MUST Finals platform expansion
-- Additive migration. Existing tables and course content are not modified.
-- Apply through the Supabase SQL editor or your normal migration workflow.

create table if not exists public.student_gpa_records (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  label text not null default 'Semester',
  grading_scale jsonb not null default '{}'::jsonb,
  courses jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.timetable_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  subject_key text,
  weekday smallint check (weekday between 0 and 6),
  starts_at time not null,
  ends_at time not null,
  location text,
  recurrence text not null default 'weekly',
  created_at timestamptz not null default now(),
  check (ends_at > starts_at)
);

create table if not exists public.student_assignments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  description text not null default '',
  subject_key text,
  due_at timestamptz,
  priority text not null default 'normal' check (priority in ('low','normal','high')),
  status text not null default 'not_started' check (status in ('not_started','in_progress','completed','submitted')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.student_resources (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  description text not null default '',
  subject_key text,
  resource_url text,
  resource_type text not null default 'link',
  moderation_status text not null default 'pending' check (moderation_status in ('pending','approved','rejected')),
  created_at timestamptz not null default now()
);

create table if not exists public.study_rooms (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  subject_key text,
  description text not null default '',
  visibility text not null default 'private' check (visibility in ('private','public')),
  created_at timestamptz not null default now()
);

create table if not exists public.study_room_members (
  room_id uuid not null references public.study_rooms(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  member_role text not null default 'member' check (member_role in ('owner','moderator','member')),
  joined_at timestamptz not null default now(),
  primary key (room_id, user_id)
);

create table if not exists public.study_room_messages (
  id uuid primary key default gen_random_uuid(),
  room_id uuid not null references public.study_rooms(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  body text not null check (char_length(body) between 1 and 4000),
  created_at timestamptz not null default now()
);

create table if not exists public.student_notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  notification_type text not null,
  title text not null,
  body text not null default '',
  target_path text,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.focus_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  subject_key text,
  duration_seconds integer not null check (duration_seconds between 60 and 14400),
  completed boolean not null default false,
  started_at timestamptz not null default now(),
  completed_at timestamptz
);

create table if not exists public.daily_challenge_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  challenge_date date not null,
  question_id text not null,
  selected_option integer,
  is_correct boolean not null default false,
  attempted_at timestamptz not null default now(),
  unique (user_id, challenge_date)
);

create table if not exists public.student_mind_maps (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  subject_key text,
  graph jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.student_documents (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  storage_path text not null,
  mime_type text not null default 'application/pdf',
  processing_status text not null default 'pending' check (processing_status in ('pending','processing','ready','failed')),
  page_count integer,
  created_at timestamptz not null default now()
);

create table if not exists public.ai_usage_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  feature text not null,
  provider text,
  model text,
  input_tokens integer not null default 0,
  output_tokens integer not null default 0,
  estimated_cost numeric(12,6) not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists timetable_events_user_weekday_idx on public.timetable_events(user_id, weekday);
create index if not exists student_assignments_user_due_idx on public.student_assignments(user_id, due_at);
create index if not exists student_resources_status_subject_idx on public.student_resources(moderation_status, subject_key);
create index if not exists study_room_messages_room_created_idx on public.study_room_messages(room_id, created_at);
create index if not exists student_notifications_user_created_idx on public.student_notifications(user_id, created_at desc);
create index if not exists focus_sessions_user_started_idx on public.focus_sessions(user_id, started_at desc);
create index if not exists ai_usage_events_created_idx on public.ai_usage_events(created_at desc);

-- Enable RLS on every new table.
alter table public.student_gpa_records enable row level security;
alter table public.timetable_events enable row level security;
alter table public.student_assignments enable row level security;
alter table public.student_resources enable row level security;
alter table public.study_rooms enable row level security;
alter table public.study_room_members enable row level security;
alter table public.study_room_messages enable row level security;
alter table public.student_notifications enable row level security;
alter table public.focus_sessions enable row level security;
alter table public.daily_challenge_attempts enable row level security;
alter table public.student_mind_maps enable row level security;
alter table public.student_documents enable row level security;
alter table public.ai_usage_events enable row level security;

-- Personal records: users can only access their own rows.
do $$
declare t text;
begin
  foreach t in array array[
    'student_gpa_records','timetable_events','student_assignments',
    'student_notifications','focus_sessions','daily_challenge_attempts',
    'student_mind_maps','student_documents'
  ] loop
    execute format('drop policy if exists %I on public.%I', t || '_owner_all', t);
    execute format('create policy %I on public.%I for all using (user_id = auth.uid()) with check (user_id = auth.uid())', t || '_owner_all', t);
  end loop;
end $$;

-- Resources are visible only after moderation, while authors can see their own submissions.
drop policy if exists student_resources_read on public.student_resources;
create policy student_resources_read on public.student_resources
  for select using (moderation_status = 'approved' or user_id = auth.uid()
    or exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));
drop policy if exists student_resources_insert on public.student_resources;
create policy student_resources_insert on public.student_resources
  for insert with check (user_id = auth.uid() and moderation_status = 'pending');
drop policy if exists student_resources_update on public.student_resources;
create policy student_resources_update on public.student_resources
  for update using (user_id = auth.uid() and moderation_status = 'pending')
  with check (user_id = auth.uid() and moderation_status = 'pending');

-- Study room access: public rooms or rooms the user owns/has joined.
drop policy if exists study_rooms_read on public.study_rooms;
create policy study_rooms_read on public.study_rooms for select using (
  visibility = 'public' or owner_id = auth.uid()
  or exists (select 1 from public.study_room_members m where m.room_id = id and m.user_id = auth.uid())
);
drop policy if exists study_rooms_insert on public.study_rooms;
create policy study_rooms_insert on public.study_rooms for insert with check (owner_id = auth.uid());
drop policy if exists study_rooms_update on public.study_rooms;
create policy study_rooms_update on public.study_rooms for update using (owner_id = auth.uid()) with check (owner_id = auth.uid());
drop policy if exists study_rooms_delete on public.study_rooms;
create policy study_rooms_delete on public.study_rooms for delete using (owner_id = auth.uid());

drop policy if exists study_room_members_read on public.study_room_members;
create policy study_room_members_read on public.study_room_members for select using (
  user_id = auth.uid() or exists (select 1 from public.study_rooms r where r.id = room_id and (r.visibility = 'public' or r.owner_id = auth.uid()))
  or exists (select 1 from public.study_room_members m where m.room_id = room_id and m.user_id = auth.uid())
);
drop policy if exists study_room_members_join on public.study_room_members;
create policy study_room_members_join on public.study_room_members for insert with check (
  user_id = auth.uid() and exists (select 1 from public.study_rooms r where r.id = room_id and r.visibility = 'public')
  or exists (select 1 from public.study_rooms r where r.id = room_id and r.owner_id = auth.uid())
);
drop policy if exists study_room_members_leave on public.study_room_members;
create policy study_room_members_leave on public.study_room_members for delete using (
  user_id = auth.uid() or exists (select 1 from public.study_rooms r where r.id = room_id and r.owner_id = auth.uid())
);

drop policy if exists study_room_messages_read on public.study_room_messages;
create policy study_room_messages_read on public.study_room_messages for select using (
  exists (select 1 from public.study_room_members m where m.room_id = room_id and m.user_id = auth.uid())
  or exists (select 1 from public.study_rooms r where r.id = room_id and r.visibility = 'public')
);
drop policy if exists study_room_messages_insert on public.study_room_messages;
create policy study_room_messages_insert on public.study_room_messages for insert with check (
  user_id = auth.uid() and (
    exists (select 1 from public.study_room_members m where m.room_id = room_id and m.user_id = auth.uid())
    or exists (select 1 from public.study_rooms r where r.id = room_id and r.visibility = 'public')
  )
);
drop policy if exists study_room_messages_delete on public.study_room_messages;
create policy study_room_messages_delete on public.study_room_messages for delete using (
  user_id = auth.uid() or exists (select 1 from public.study_rooms r where r.id = room_id and r.owner_id = auth.uid())
);

-- AI usage is private to the user; service-role Edge Functions may insert server-side.
drop policy if exists ai_usage_events_read_own on public.ai_usage_events;
create policy ai_usage_events_read_own on public.ai_usage_events for select using (user_id = auth.uid());

-- migration9_rooms_capture.sql
-- CAPTURE of the study-rooms schema as found LIVE on 2026-11-22.
-- These tables/functions were applied directly to the database earlier and were
-- never committed as a migration. This file documents the as-found state,
-- including grants later identified as over-broad (see migration10_privacy_repair.sql).
-- Do NOT re-run blindly against the live project; it is a reference capture.

create table if not exists public.study_rooms (
  id uuid primary key,
  owner_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  subject_key text,
  description text not null,
  visibility text not null check (visibility in ('private','public')),
  created_at timestamptz not null
);

create table if not exists public.study_room_members (
  room_id uuid not null references public.study_rooms(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  member_role text not null check (member_role in ('owner','moderator','member')),
  joined_at timestamptz not null,
  primary key (room_id, user_id)
);

create table if not exists public.study_room_messages (
  id uuid primary key,
  room_id uuid not null,
  user_id uuid not null,
  body text not null check (char_length(body) between 1 and 4000),
  created_at timestamptz not null
);

alter table public.study_rooms enable row level security;
alter table public.study_room_members enable row level security;
alter table public.study_room_messages enable row level security;

create or replace function public.is_study_room_member(target_room uuid)
returns boolean language sql stable security definer set search_path to 'public' as
$$ select exists (select 1 from public.study_room_members m where m.room_id = target_room and m.user_id = auth.uid()) $$;

-- policies as found:
create policy study_rooms_read on public.study_rooms for select to authenticated
  using (visibility = 'public' or owner_id = auth.uid() or is_study_room_member(id));
create policy study_rooms_insert on public.study_rooms for insert to authenticated
  with check (owner_id = auth.uid());
create policy study_rooms_update on public.study_rooms for update to authenticated
  using (owner_id = auth.uid()) with check (owner_id = auth.uid());
create policy study_rooms_delete on public.study_rooms for delete to authenticated
  using (owner_id = auth.uid());

create policy study_room_members_read on public.study_room_members for select to authenticated
  using (user_id = auth.uid()
    or exists (select 1 from public.study_rooms r where r.id = study_room_members.room_id and (r.visibility = 'public' or r.owner_id = auth.uid()))
    or is_study_room_member(room_id));
create policy study_room_members_join on public.study_room_members for insert to authenticated
  with check (user_id = auth.uid() and (
    exists (select 1 from public.study_rooms r where r.id = study_room_members.room_id and r.visibility = 'public')
    or exists (select 1 from public.study_rooms r where r.id = study_room_members.room_id and r.owner_id = auth.uid())));
create policy study_room_members_leave on public.study_room_members for delete to authenticated
  using (user_id = auth.uid()
    or exists (select 1 from public.study_rooms r where r.id = study_room_members.room_id and r.owner_id = auth.uid()));

create policy study_room_messages_read on public.study_room_messages for select to authenticated
  using (is_study_room_member(room_id)
    or exists (select 1 from public.study_rooms r where r.id = study_room_messages.room_id and r.visibility = 'public'));
create policy study_room_messages_insert on public.study_room_messages for insert to authenticated
  with check (user_id = auth.uid() and (
    is_study_room_member(room_id)
    or exists (select 1 from public.study_rooms r where r.id = study_room_messages.room_id and r.visibility = 'public')
    or exists (select 1 from public.study_rooms r where r.id = study_room_messages.room_id and r.owner_id = auth.uid())));
create policy study_room_messages_delete on public.study_room_messages for delete to authenticated
  using (user_id = auth.uid()
    or exists (select 1 from public.study_rooms r where r.id = study_room_messages.room_id and r.owner_id = auth.uid()));

-- grants as found (OVER-BROAD, hardened in migration10):
grant select, insert, update, delete, references, trigger, truncate on public.study_rooms to authenticated;
grant select, insert, update, delete, references, trigger, truncate on public.study_room_members to authenticated;
grant select, insert, update, delete, references, trigger, truncate on public.study_room_messages to authenticated;
grant references, trigger, truncate on public.study_rooms to anon;
grant references, trigger, truncate on public.study_room_members to anon;
grant references, trigger, truncate on public.study_room_messages to anon;

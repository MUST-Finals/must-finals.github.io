-- migration10_privacy_repair.sql  (PREPARED 2026-11-22 — NOT APPLIED, awaits owner decision)
-- Least-privilege repair: rooms grant hygiene + profiles read narrowing.
--
-- Exposure repaired:
--  1. TRUNCATE granted to authenticated (and anon) on all three rooms tables.
--     Not reachable through PostgREST today (no truncate endpoint, no RPC),
--     but latent: any future security-definer path or direct connection would
--     let any signed-in user wipe the rooms tables. TRUNCATE bypasses RLS.
--  2. profiles_read policy lets EVERY signed-in user read ALL profiles rows
--     (display_name + role + created_at), exposing who is admin and who is
--     blocked, and making any learned user UUID resolvable to a name.
--     Only community discussion posts actually need other users' names;
--     the leaderboard carries its own denormalized display_name already.
--
-- Compatibility (client changes ship together, in backend.js):
--  - Community posts read author_name (denormalized) instead of profiles embed.
--  - Post insert sets author_name from the caller's own profile.
--  - Admin screens keep working: admins keep full profiles read via is_admin().
--  - Rooms member-name display (chat UI) uses the new RPC below.

begin;

-- 1. Rooms grant hygiene
revoke truncate on public.study_rooms from anon, authenticated;
revoke truncate on public.study_room_members from anon, authenticated;
revoke truncate on public.study_room_messages from anon, authenticated;
revoke references, trigger on public.study_rooms from anon;
revoke references, trigger on public.study_room_members from anon;
revoke references, trigger on public.study_room_messages from anon;

-- 2. Denormalize post author names (community display no longer needs profiles embed)
alter table public.posts add column if not exists author_name text;
update public.posts p set author_name = pr.display_name
  from public.profiles pr where pr.id = p.author and p.author_name is null;

-- 3. Narrow profiles read to self + admin
drop policy profiles_read on public.profiles;
create policy profiles_read on public.profiles for select to authenticated
  using (id = auth.uid() or is_admin());

-- 4. Room member name lookup without profiles-wide read
create or replace function public.study_room_member_profiles(target_room uuid)
returns table(user_id uuid, display_name text, member_role text)
language sql stable security definer set search_path to 'public' as $$
  select m.user_id, p.display_name, m.member_role
  from public.study_room_members m
  join public.profiles p on p.id = m.user_id
  where m.room_id = target_room
    and exists (select 1 from public.profiles where id = auth.uid())
    and (exists (select 1 from public.study_rooms r
                  where r.id = target_room and (r.visibility = 'public' or r.owner_id = auth.uid()))
         or exists (select 1 from public.study_room_members m2
                  where m2.room_id = target_room and m2.user_id = auth.uid()));
$$;
revoke all on function public.study_room_member_profiles(uuid) from public;
grant execute on function public.study_room_member_profiles(uuid) to authenticated;

commit;

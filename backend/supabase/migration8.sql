-- migration 8: optional leaderboard. Privacy by default: a student appears on the
-- board ONLY after opting in (inserting their own row), and only other opted-in
-- members can read the board. Leaving deletes the row (own row only).

create table public.leaderboard_entries (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  display_name text not null check (char_length(display_name) between 1 and 40),
  xp integer not null default 0 check (xp >= 0),
  updated_at timestamptz not null default now()
);

alter table public.leaderboard_entries enable row level security;

-- membership check must be security definer: a policy that selects its own table recurses
create or replace function public.is_leaderboard_member() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.leaderboard_entries where user_id = auth.uid())
$$;
revoke all on function public.is_leaderboard_member() from public;
grant execute on function public.is_leaderboard_member() to authenticated;

-- read: only opted-in members can see the board at all
create policy lb_read on public.leaderboard_entries for select to authenticated
  using (public.is_leaderboard_member());

-- write: own row only
create policy lb_insert on public.leaderboard_entries for insert to authenticated
  with check (user_id = auth.uid());
create policy lb_update on public.leaderboard_entries for update to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy lb_delete on public.leaderboard_entries for delete to authenticated
  using (user_id = auth.uid());

grant select, insert, update, delete on public.leaderboard_entries to authenticated;

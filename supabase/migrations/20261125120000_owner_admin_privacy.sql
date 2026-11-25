-- Keep the existing site owner as the only administrator across every RLS policy.
-- Also keep the owner/admin profile out of student profile reads while retaining
-- the existing display-name lookup for student community posts.

begin;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select auth.uid() = '2ec4e4aa-e56d-4bd2-8fb9-68c5023ccd0a'::uuid
     and exists (
       select 1 from public.profiles
       where id = auth.uid() and role = 'admin'
     );
$$;

revoke all on function public.is_admin() from public, anon;
grant execute on function public.is_admin() to authenticated;

-- Preserve the app's existing student display-name reads, but do not expose
-- the site owner's administrator profile to student accounts.
drop policy if exists profiles_read on public.profiles;
create policy profiles_read on public.profiles for select to authenticated
  using (
    id = auth.uid()
    or public.is_admin()
    or (id <> '2ec4e4aa-e56d-4bd2-8fb9-68c5023ccd0a'::uuid and role <> 'admin')
  );

-- Help Center policies use their own helper; point it at the same owner-only rule.
create or replace function public.help_center_is_admin()
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select public.is_admin();
$$;

revoke all on function public.help_center_is_admin() from public, anon;
grant execute on function public.help_center_is_admin() to authenticated;

commit;

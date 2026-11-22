-- migration 7: admin audit log - append-only record of admin actions.
-- Server-enforced: RLS uses public.is_admin(); no update/delete policies exist,
-- so even admins cannot edit or remove entries (append-only integrity).

create table public.admin_audit_log (
  id bigint generated always as identity primary key,
  actor uuid not null references public.profiles(id) on delete cascade,
  action text not null check (char_length(action) between 1 and 80),
  target text,
  meta jsonb,
  created_at timestamptz not null default now()
);

alter table public.admin_audit_log enable row level security;

-- admins can read the full log
create policy audit_read on public.admin_audit_log for select to authenticated
  using (public.is_admin());

-- admins can only append rows as themselves; no update or delete policies = append-only
create policy audit_insert on public.admin_audit_log for insert to authenticated
  with check (public.is_admin() and actor = auth.uid());

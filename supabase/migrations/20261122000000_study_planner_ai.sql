-- Private daily quotas for the opt-in AI study planner.
-- Only the Edge Function's service role can access this table/RPC.
create table if not exists public.study_planner_ai_usage (
  scope_key text not null check (scope_key = 'global' or scope_key like 'user:%'),
  usage_date date not null,
  request_count integer not null default 0 check (request_count >= 0),
  primary key (scope_key, usage_date)
);

alter table public.study_planner_ai_usage enable row level security;
-- Service-role calls run through the Edge Function. Keep the table closed to normal
-- database roles without forcing RLS on the security-definer quota RPC itself.
alter table public.study_planner_ai_usage no force row level security;
revoke all on public.study_planner_ai_usage from public, anon, authenticated;
grant all on public.study_planner_ai_usage to service_role;

create or replace function public.consume_study_planner_ai_quota(
  p_user_id uuid,
  p_usage_date date,
  p_user_limit integer,
  p_global_limit integer
)
returns table (
  user_allowed boolean,
  global_allowed boolean,
  user_remaining integer,
  global_remaining integer
)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_user_count integer;
  v_global_count integer;
begin
  if p_user_id is null or p_usage_date is null
    or p_user_limit < 1 or p_user_limit > 100
    or p_global_limit < 1 or p_global_limit > 100000 then
    raise exception 'Invalid quota request';
  end if;

  -- Keep only the current UTC day's counters; prompt and response data are never stored.
  delete from public.study_planner_ai_usage where usage_date < p_usage_date;

  insert into public.study_planner_ai_usage(scope_key, usage_date, request_count)
  values ('global', p_usage_date, 0)
  on conflict (scope_key, usage_date) do nothing;
  insert into public.study_planner_ai_usage(scope_key, usage_date, request_count)
  values ('user:' || p_user_id::text, p_usage_date, 0)
  on conflict (scope_key, usage_date) do nothing;

  -- Lock in a stable order so simultaneous requests cannot overspend either cap.
  select request_count into v_global_count
  from public.study_planner_ai_usage
  where scope_key = 'global' and usage_date = p_usage_date
  for update;
  select request_count into v_user_count
  from public.study_planner_ai_usage
  where scope_key = 'user:' || p_user_id::text and usage_date = p_usage_date
  for update;

  if v_user_count >= p_user_limit then
    return query select false, true, 0, greatest(0, p_global_limit - v_global_count);
    return;
  end if;
  if v_global_count >= p_global_limit then
    return query select true, false, greatest(0, p_user_limit - v_user_count), 0;
    return;
  end if;

  update public.study_planner_ai_usage
  set request_count = request_count + 1
  where scope_key = 'global' and usage_date = p_usage_date
  returning request_count into v_global_count;
  update public.study_planner_ai_usage
  set request_count = request_count + 1
  where scope_key = 'user:' || p_user_id::text and usage_date = p_usage_date
  returning request_count into v_user_count;

  return query select true, true,
    greatest(0, p_user_limit - v_user_count),
    greatest(0, p_global_limit - v_global_count);
end;
$$;

revoke all on function public.consume_study_planner_ai_quota(uuid, date, integer, integer) from public, anon, authenticated;
grant execute on function public.consume_study_planner_ai_quota(uuid, date, integer, integer) to service_role;


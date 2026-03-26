-- Enable the pg_net extension for making HTTP requests from triggers
create extension if not exists pg_net with schema extensions;

-- Create the trigger function that calls the edge function
create or replace function public.notify_assessment_insert()
returns trigger
language plpgsql
security definer
as $$
begin
  perform net.http_post(
    url := 'https://hhghlcrfjvjnrhhhpysq.supabase.co/functions/v1/notify-assessment',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhoZ2hsY3JmanZqbnJoaGhweXNxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDU0ODEzNywiZXhwIjoyMDkwMTI0MTM3fQ.W_LwSQL8RdJc6KxxLxZ_dG5p2nYXyIc6lqQBtWPi3g0'
    ),
    body := jsonb_build_object(
      'type', 'INSERT',
      'table', 'assessment_requests',
      'schema', 'public',
      'record', jsonb_build_object(
        'id', NEW.id,
        'name', NEW.name,
        'email', NEW.email,
        'company', NEW.company,
        'description', NEW.description,
        'created_at', NEW.created_at
      )
    )
  );
  return NEW;
end;
$$;

-- Create the trigger
create trigger on_assessment_request_insert
  after insert on public.assessment_requests
  for each row
  execute function public.notify_assessment_insert();

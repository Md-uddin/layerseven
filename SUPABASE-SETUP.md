# Supabase Setup Guide

## Quick Start

### 1. Get Your Supabase Credentials

1. Go to [https://supabase.com](https://supabase.com) and sign in
2. Create a new project (or use existing one)
3. Go to **Settings** → **API**
4. Copy these two values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon/public key** (long string starting with `eyJ...`)

### 2. Add Credentials to .env.local

Open `.env.local` and add your credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-actual-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 3. Create Database Table

In your Supabase dashboard:

1. Go to **SQL Editor**
2. Click "New query"
3. Paste this SQL:

```sql
CREATE TABLE contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  message text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (for contact form)
CREATE POLICY "Allow public inserts" ON contact_submissions
  FOR INSERT TO anon
  WITH CHECK (true);
```

4. Click "Run" to execute

### 4. Test the Contact Form

1. Restart your dev server: `npm run dev`
2. Go to http://localhost:3000
3. Fill out the contact form
4. Submit it
5. Check your Supabase dashboard → **Table Editor** → `contact_submissions`

## Viewing Submissions

To view contact form submissions:

1. Go to Supabase dashboard
2. Click **Table Editor** in sidebar
3. Select `contact_submissions` table
4. View all submissions with timestamps

## Optional: Email Notifications

To get notified when someone submits the contact form:

1. Go to **Database** → **Webhooks** in Supabase
2. Create a new webhook for `contact_submissions` table
3. Set trigger to "Insert"
4. Use a service like:
   - Zapier webhook → Email
   - n8n webhook → Email
   - Supabase Edge Functions + Resend/SendGrid

## Security Notes

- ✅ The `anon` key is safe to expose in client-side code
- ✅ Row Level Security (RLS) is enabled to protect your data
- ✅ Only INSERT operations are allowed from public
- ❌ Never expose the `service_role` key in client code
- ✅ `.env.local` is already in `.gitignore`

## Troubleshooting

**Form not working?**
- Check that .env.local has correct credentials
- Restart dev server after adding .env.local
- Check browser console for errors
- Verify table was created in Supabase

**Still having issues?**
- Check Supabase project is not paused
- Verify RLS policies are set correctly
- Check network tab for API errors

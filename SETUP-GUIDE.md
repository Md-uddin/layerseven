# Layer Seven Studio - Quick Setup Guide

Welcome to your new premium website! This guide will help you get started quickly.

## Quick Start

### 1. Install Dependencies (Already done!)
```bash
npm install
```

### 2. Configure Supabase (Required for Contact Form)

#### Create Supabase Project:
1. Go to [https://supabase.com](https://supabase.com) and sign up (free)
2. Create a new project
3. Wait for the project to initialize (~2 minutes)

#### Create Database Table:
1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New query"
3. Copy and paste this SQL:

```sql
CREATE TABLE contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  message text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON contact_submissions
  FOR INSERT TO anon
  WITH CHECK (true);
```

4. Click "Run" to execute the query

#### Get Your API Credentials:
1. In Supabase dashboard, go to **Settings** → **API**
2. Find these two values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon/public key** (long string starting with `eyJ...`)

#### Update Environment Variables:
1. Open `.env.local` file in your project root
2. Replace the placeholder values:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-actual-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key-here
```

### 3. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your website!

## Customization Guide

### Update Company Information

1. **Email Address**: Replace `hello@layersevenstudio.com` in:
   - `components/Contact.tsx` (line ~169)
   - `components/Footer.tsx` (line ~39)

2. **Social Media Links**: Update in `components/Footer.tsx` (lines ~42-62):
   - Replace GitHub, LinkedIn, Twitter URLs with your actual profiles

### Change Colors

Edit `app/globals.css` (lines 4-9):
```css
:root {
  --background: #0a0a0a;     /* Dark background */
  --foreground: #f5f5f5;     /* Text color */
  --accent: #06b6d4;         /* Cyan accent - change this! */
  --accent-hover: #0891b2;   /* Darker cyan for hover */
  --muted: #27272a;          /* Secondary background */
  --border: #3f3f46;         /* Border color */
}
```

Popular accent colors:
- Purple: `#8b5cf6` / `#7c3aed`
- Green: `#10b981` / `#059669`
- Orange: `#f97316` / `#ea580c`
- Pink: `#ec4899` / `#db2777`

### Update Content

- **Hero Section**: Edit `components/Hero.tsx`
  - Change headline, description, and tech stack badges

- **Services**: Edit `components/Services.tsx`
  - Modify service cards, descriptions, and tech stacks

- **SEO Metadata**: Edit `app/layout.tsx`
  - Update title, description, and keywords

### Enable Portfolio Section

To show the portfolio section:

1. Open `app/page.tsx`
2. Uncomment lines 4 and 16:
```typescript
import Portfolio from '@/components/Portfolio';  // Remove the //

// In the JSX:
<Portfolio />  // Remove the {/* */} around this
```

3. Open `components/Navigation.tsx`
4. Uncomment the portfolio link (around line 9)

5. Update projects in `components/Portfolio.tsx` with your actual work

## Deployment

### Deploy to Vercel (Recommended - Free)

1. Push your code to GitHub
2. Go to [https://vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. Click "Deploy"

Your site will be live in ~2 minutes!

## View Contact Form Submissions

To view messages from your contact form:

1. Go to your Supabase dashboard
2. Click on **Table Editor**
3. Select `contact_submissions` table
4. View all submissions with timestamps

**Pro Tip**: Set up email notifications in Supabase:
- Go to **Database** → **Webhooks**
- Create a webhook that sends emails when new rows are inserted
- Or use Supabase Functions to send emails via SendGrid/Resend

## Build for Production

Test the production build locally:
```bash
npm run build
npm start
```

## Troubleshooting

**Contact form not working?**
- Check that Supabase credentials are correct in `.env.local`
- Verify the database table was created
- Check browser console for error messages

**Styles look wrong?**
- Clear browser cache
- Restart dev server (`npm run dev`)

**Build errors?**
- Delete `.next` folder and rebuild
- Run `npm install` again

## Tech Stack Details

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Supabase
- **Fonts**: Geist Sans & Geist Mono

## Need Help?

- Check the main [README.md](README.md) for detailed documentation
- Next.js Docs: [https://nextjs.org/docs](https://nextjs.org/docs)
- Supabase Docs: [https://supabase.com/docs](https://supabase.com/docs)
- Tailwind Docs: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

---

**Happy building! 🚀**

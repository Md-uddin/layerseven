# Layer Seven Studio - Premium Web Development Agency Website

A modern, sleek single-page website built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Features

- Modern dark theme with cyan accent colors
- Fully responsive design
- Smooth animations with Framer Motion
- Functional contact form with Supabase backend
- Optimized for performance
- SEO-friendly
- Optional portfolio section (commented out by default)

## Tech Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Supabase (contact form submissions)
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier works perfectly)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up Supabase:
   - Go to [Supabase](https://supabase.com) and create a new project
   - Navigate to the SQL Editor and run this query to create the contact submissions table:

```sql
CREATE TABLE contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  message text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Optional: Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Optional: Create a policy to allow inserts from anyone
CREATE POLICY "Allow public inserts" ON contact_submissions
  FOR INSERT TO anon
  WITH CHECK (true);
```

3. Configure environment variables:
   - Open `.env.local` file
   - Get your Supabase credentials from: Settings → API
   - Replace the placeholders:
     - `NEXT_PUBLIC_SUPABASE_URL`: Your project URL
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your anon/public key

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Enabling the Portfolio Section

The portfolio section is commented out by default. To enable it:

1. Open `app/page.tsx`
2. Uncomment lines 4 and 16:
```typescript
import Portfolio from '@/components/Portfolio';
// ... in the JSX:
<Portfolio />
```

3. Open `components/Navigation.tsx`
4. Uncomment the portfolio link (around line 9):
```typescript
{ href: '#portfolio', label: 'Portfolio' },
```

5. Update the portfolio projects in `components/Portfolio.tsx` with your actual work

### Changing Colors

Edit `app/globals.css` to customize the color scheme:
- `--accent`: Primary accent color (currently cyan #06b6d4)
- `--background`: Background color
- `--foreground`: Text color
- `--muted`: Secondary background color
- `--border`: Border color

### Updating Content

- **Hero Section**: Edit `components/Hero.tsx`
- **Services**: Edit `components/Services.tsx`
- **Contact Email**: Update in `components/Contact.tsx` and `components/Footer.tsx`
- **Metadata**: Edit `app/layout.tsx`

## Project Structure

```
layersevenstudio/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Main page (all sections)
│   └── globals.css       # Global styles & theme
├── components/
│   ├── Navigation.tsx    # Header navigation
│   ├── Hero.tsx          # Hero section
│   ├── Services.tsx      # Services section
│   ├── Portfolio.tsx     # Portfolio section (optional)
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer
├── lib/
│   └── supabase.ts       # Supabase client configuration
└── .env.local            # Environment variables
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway
- Render

Make sure to add the environment variables in your deployment platform's settings.

## Environment Variables

Required environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Performance

This site is optimized for performance with:
- Server-side rendering (SSR)
- Optimized images
- Code splitting
- Lazy loading
- Minimal JavaScript bundle
- CSS optimization

## License

This project is private and proprietary to Layer Seven Studio.

## Support

For questions or issues, contact: hello@layersevenstudio.com

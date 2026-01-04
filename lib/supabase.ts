import { createClient, SupabaseClient } from '@supabase/supabase-js';

export const isSupabaseConfigured = () => {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== 'your-project-url-here' &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== 'your-anon-key-here'
  );
};

let supabaseInstance: SupabaseClient | null = null;

export const getSupabase = () => {
  if (!supabaseInstance && isSupabaseConfigured()) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  }
  return supabaseInstance;
};

export type ContactFormData = {
  name: string;
  email: string;
  company?: string;
  message: string;
  created_at?: string;
};

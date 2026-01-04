'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { getSupabase, isSupabaseConfigured } from '@/lib/supabase';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      // Check if Supabase is configured
      if (!isSupabaseConfigured()) {
        console.warn('Supabase is not configured. Please add your credentials to .env.local');
        throw new Error('Database not configured');
      }

      const supabase = getSupabase();
      if (!supabase) {
        throw new Error('Failed to initialize Supabase client');
      }

      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setFormState('success');
      setFormData({ name: '', email: '', company: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setFormState('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormState('error');

      // Reset error message after 5 seconds
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's Build <span className="text-accent">Together</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative p-8 md:p-12 rounded-2xl bg-muted/50 border border-border backdrop-blur-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="john@example.com"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="Your Company (Optional)"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={formState === 'submitting'}
              className="group w-full px-8 py-4 bg-accent hover:bg-accent-hover disabled:bg-accent/50 text-background font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-accent/20 hover:shadow-accent/40 disabled:cursor-not-allowed"
            >
              {formState === 'submitting' ? (
                <>
                  <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            {/* Success/Error Messages */}
            {formState === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Message sent successfully! We'll get back to you soon.</span>
              </motion.div>
            )}

            {formState === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500"
              >
                <AlertCircle className="w-5 h-5" />
                <span>Failed to send message. Please try again or email us directly.</span>
              </motion.div>
            )}
          </form>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-center gap-2 text-foreground/70">
              <Mail className="w-5 h-5 text-accent" />
              <span>Or email us directly at </span>
              <a href="mailto:hello@layersevenstudio.com" className="text-accent hover:underline">
                hello@layersevenstudio.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

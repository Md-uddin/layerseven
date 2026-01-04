'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#050505] pt-32 pb-12 text-white">
      {/* Refined Background Heading */}
      <div className="absolute -bottom-8 left-0 right-0 select-none overflow-hidden whitespace-nowrap pointer-events-none">
        <span 
          className="block text-[14vw] sm:text-[18vw] font-black uppercase tracking-tighter leading-none text-transparent"
          style={{
            WebkitTextStroke: '1px rgba(255,255,255,0.05)',
            maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
          }}
        >
          Layer Seven Studio
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24">
          
          {/* Brand & Status */}
          <div className="max-w-md">
            <h3 className="text-3xl font-bold tracking-tight mb-6">
              Layer<span className="text-cyan-400">Seven</span>
            </h3>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              Bespoke digital architecture for agencies and startups who demand the best.
            </p>
            
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 w-fit px-4 py-2 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.15em] text-neutral-300 uppercase">
                Now accepting projects for 2026
              </span>
            </div>
          </div>

          {/* Nav & Services Groups */}
          <div className="grid grid-cols-2 gap-12 sm:gap-24">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 mb-8">Navigation</h4>
              <ul className="space-y-4">
                {['Home', 'Services', 'Work', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="group flex items-center text-sm font-medium text-neutral-400 hover:text-white transition-all">
                      <span className="h-[1px] w-0 bg-cyan-400 transition-all group-hover:w-3 group-hover:mr-2"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 mb-8">Capabilities</h4>
              <ul className="space-y-4 text-sm font-medium text-neutral-400">
                <li className="hover:text-neutral-200 transition-colors cursor-default">Full-Stack</li>
                <li className="hover:text-neutral-200 transition-colors cursor-default">Cloud Architecture</li>
                <li className="hover:text-neutral-200 transition-colors cursor-default">DevOps / CI-CD</li>
                <li className="hover:text-neutral-200 transition-colors cursor-default">UI/UX Strategy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal & Tech Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold">
            &copy; {currentYear} Layer Seven Studio / Engineering Excellence
          </div>
          
          <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-neutral-600">
            <span className="hover:text-neutral-400 transition-colors">Stack: Next.js + Supabase</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
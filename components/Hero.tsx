'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';
import TechCarousel from './TechCarousel';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border bg-muted/50 backdrop-blur-sm"
        >
          <Code2 className="w-4 h-4 text-accent" />
          <span className="text-sm text-foreground/80">Full Stack Development Excellence</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Building the{' '}
          <span className="bg-gradient-to-r from-accent via-cyan-400 to-accent bg-clip-text text-transparent animate-[gradient_8s_ease_infinite] bg-[length:200%_auto]">
            Future
          </span>
          <br />
          of Web Development
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Layer Seven Studio crafts high-performance web applications with cutting-edge technologies.
          From frontend to backend, CI/CD to cloud infrastructure—we deliver exceptional digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-accent hover:bg-accent-hover text-background font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-accent/20 hover:shadow-accent/40"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="px-8 py-4 border border-border hover:border-accent/50 bg-muted/50 hover:bg-muted text-foreground font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm"
          >
            Our Services
          </a>
        </motion.div>

        {/* Tech stack carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <TechCarousel />
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';

// Comprehensive mix of latest full-stack technologies
const technologies = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'AWS',
  'Docker',
  'Tailwind CSS',
  'Vercel',
  'Supabase',
  'Prisma',
  'GraphQL',
  'Vue',
  'Nuxt',
  'Express',
  'MongoDB',
  'Redis',
  'Kubernetes',
  'GitHub Actions',
  'NestJS',
  'tRPC',
  'Drizzle',
  'Svelte',
  'SvelteKit',
  'Fastify',
  'MySQL',
  'GCP',
  'Azure',
  'Netlify',
  'Firebase',
  'Railway',
  'Render',
  'PlanetScale',
  'Neon',
  'Terraform',
  'CloudFlare',
  'Bun',
  'Deno',
  'Python',
  'FastAPI',
  'TypeORM',
  'Remix',
  'Astro',
  'Fly.io',
  'Turso',
];

export default function TechCarousel() {
  // Duplicate the array for seamless infinite scroll
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <div className="tech-scroll-container">
        <div className="tech-scroll-content">
          {duplicatedTechs.map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="tech-badge group"
            >
              <span className="relative z-10">{tech}</span>
              {/* Glow effect on hover */}
              <div className="tech-glow" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .tech-scroll-container {
          display: flex;
          width: 100%;
        }

        .tech-scroll-content {
          display: flex;
          gap: 1rem;
          animation: scroll 60s linear infinite;
          will-change: transform;
        }

        .tech-scroll-content:hover {
          animation-play-state: paused;
        }

        .tech-badge {
          position: relative;
          flex-shrink: 0;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          background: rgba(39, 39, 42, 0.5);
          border: 1px solid rgba(63, 63, 70, 0.5);
          backdrop-filter: blur(8px);
          font-size: 0.875rem;
          color: rgba(245, 245, 245, 0.7);
          white-space: nowrap;
          cursor: default;
          transition: all 0.3s ease;
        }

        .tech-badge:hover {
          color: #06b6d4;
          border-color: rgba(6, 182, 212, 0.5);
          transform: translateY(-2px);
        }

        .tech-glow {
          position: absolute;
          inset: -4px;
          border-radius: 0.5rem;
          background: radial-gradient(
            circle at center,
            rgba(6, 182, 212, 0.3) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          filter: blur(8px);
        }

        .tech-badge:hover .tech-glow {
          opacity: 1;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Smooth performance optimizations */
        @media (prefers-reduced-motion: reduce) {
          .tech-scroll-content {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

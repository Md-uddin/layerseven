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
    <div className="relative w-full overflow-hidden py-4 sm:py-6 md:py-8">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <div className="tech-scroll-container">
        <div className="tech-scroll-content">
          {duplicatedTechs.map((tech, index) => (
            <div key={`${tech}-${index}`} className="tech-item group">
              <span className="tech-text">{tech}</span>
              <span className="tech-divider">•</span>
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
          align-items: center;
          gap: 0;
          animation: scroll 60s linear infinite;
          will-change: transform;
        }

        .tech-scroll-content:hover {
          animation-play-state: paused;
        }

        .tech-item {
          position: relative;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          cursor: default;
        }

        .tech-text {
          position: relative;
          font-size: 0.9rem;
          font-weight: 500;
          color: rgba(245, 245, 245, 0.5);
          white-space: nowrap;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: 0.02em;
        }

        .tech-item:hover .tech-text {
          color: #06b6d4;
          letter-spacing: 0.05em;
        }

        .tech-divider {
          font-size: 0.6rem;
          color: rgba(245, 245, 245, 0.2);
          user-select: none;
        }

        .tech-glow {
          position: absolute;
          left: -0.5rem;
          right: -0.5rem;
          top: 50%;
          transform: translateY(-50%);
          height: 2rem;
          background: radial-gradient(
            ellipse at center,
            rgba(6, 182, 212, 0.2) 0%,
            transparent 60%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          filter: blur(12px);
        }

        .tech-item:hover .tech-glow {
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

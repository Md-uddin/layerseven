'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
    link: '#',
    github: '#',
  },
  {
    title: 'SaaS Analytics Dashboard',
    description: 'Real-time analytics platform with data visualization, user tracking, and custom reporting.',
    tech: ['React', 'Python', 'MongoDB', 'AWS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    link: '#',
    github: '#',
  },
  {
    title: 'Healthcare Management System',
    description: 'HIPAA-compliant patient management system with telemedicine capabilities and secure messaging.',
    tech: ['TypeScript', 'Express', 'PostgreSQL', 'WebRTC'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    link: '#',
    github: '#',
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="portfolio" className="relative py-32 px-6 overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Featured <span className="text-accent">Work</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            A selection of our recent projects that showcase our expertise and commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-muted/50 border border-border hover:border-accent/50 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-background/50 text-foreground/60 border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-sm text-accent hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-accent hover:underline"
                  >
                    <Github className="w-4 h-4" />
                    Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

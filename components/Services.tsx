'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server, Workflow, Cloud, Database, Rocket } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Modern, responsive interfaces built with React, Next.js, and the latest web technologies. Pixel-perfect designs that users love.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Scalable server-side solutions with Node.js, Python, and Go. RESTful APIs, GraphQL, and microservices architecture.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
  },
  {
    icon: Workflow,
    title: 'CI/CD Pipeline',
    description: 'Automated deployment pipelines that ensure reliable, fast releases. From Git to production with confidence.',
    tech: ['GitHub Actions', 'Jenkins', 'Docker', 'Kubernetes'],
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Cloud-native architecture on AWS, GCP, or Azure. Serverless, containers, and everything in between.',
    tech: ['AWS', 'Terraform', 'CloudFlare', 'Vercel'],
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Optimized database schemas and queries. From SQL to NoSQL, we design for performance and scalability.',
    tech: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase'],
  },
  {
    icon: Rocket,
    title: 'Performance Optimization',
    description: 'Lightning-fast applications through code splitting, lazy loading, and advanced caching strategies.',
    tech: ['Lighthouse', 'Web Vitals', 'CDN', 'Edge Computing'],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative py-32 px-6 overflow-hidden" ref={ref}>
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
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            End-to-end development solutions tailored to your needs. We handle the entire stack so you can focus on your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-muted/50 border border-border hover:border-accent/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                <service.icon className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-foreground/70 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {service.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded bg-background/50 text-foreground/60 border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover gradient effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

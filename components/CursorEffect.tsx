'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  length: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export default function CursorEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse movement and create particles
    const handleMouseMove = (e: MouseEvent) => {
      // Create particles in circular pattern around cursor
      const particleCount = 3; // Spawn 3 particles per movement

      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.5;
        const radius = Math.random() * 30 + 20; // Distance from cursor
        const speed = Math.random() * 0.8 + 0.4;

        particlesRef.current.push({
          x: e.clientX + Math.cos(angle) * (Math.random() * 15),
          y: e.clientY + Math.sin(angle) * (Math.random() * 15),
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          angle: Math.random() * Math.PI * 2,
          length: Math.random() * 6 + 4,
          opacity: Math.random() * 0.5 + 0.3,
          life: 0,
          maxLife: Math.random() * 40 + 30,
        });
      }

      // Limit total particles for performance
      if (particlesRef.current.length > 150) {
        particlesRef.current = particlesRef.current.slice(-150);
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.life += 1;

        // Fade out over lifetime
        const lifeRatio = particle.life / particle.maxLife;
        const currentOpacity = particle.opacity * (1 - lifeRatio);

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Apply damping for smooth deceleration
        particle.vx *= 0.96;
        particle.vy *= 0.96;

        // Draw particle as diagonal line
        if (currentOpacity > 0.01) {
          ctx.strokeStyle = `rgba(6, 182, 212, ${currentOpacity})`;
          ctx.lineWidth = 1.5;
          ctx.lineCap = 'round';
          ctx.beginPath();

          const endX = particle.x + Math.cos(particle.angle) * particle.length;
          const endY = particle.y + Math.sin(particle.angle) * particle.length;

          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(endX, endY);
          ctx.stroke();
        }

        // Keep particle if still alive
        return particle.life < particle.maxLife;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}

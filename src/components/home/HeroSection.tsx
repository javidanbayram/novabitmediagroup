'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';

const FLOATING_CARDS = [
  { label: 'Novabit.az', sub: 'Technology Media', color: '#2563EB', x: 'right-[8%]', y: 'top-[22%]', delay: 0 },
  { label: 'Soma.az', sub: 'Coming Soon', color: '#7C3AED', x: 'left-[6%]', y: 'top-[30%]', delay: 0.4 },
  { label: '24/7 Coverage', sub: 'Breaking Stories', color: '#059669', x: 'right-[12%]', y: 'bottom-[28%]', delay: 0.8 },
  { label: 'AI Journalism', sub: 'Next-Gen Editorial', color: '#D97706', x: 'left-[4%]', y: 'bottom-[32%]', delay: 1.2 },
];

const HEADLINE_WORDS = ['Building', 'the', 'Future', 'of', 'Digital', 'Media.'];

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: Array<{
      x: number; y: number; vx: number; vy: number; size: number; opacity: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < 80; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, ${p.opacity})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animId = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    window.addEventListener('resize', () => { resize(); init(); });
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', () => { resize(); init(); });
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#050c1f] to-[#030712]" />

      {/* Radial glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#2563EB] rounded-full blur-[160px] opacity-[0.06]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#7C3AED] rounded-full blur-[120px] opacity-[0.04]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#2563EB] rounded-full blur-[100px] opacity-[0.05]" />
      </div>

      {/* Particle network */}
      {mounted && <ParticleCanvas />}

      {/* Floating cards */}
      {FLOATING_CARDS.map((card, i) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 + card.delay }}
          className={`absolute hidden xl:flex ${card.x} ${card.y} animate-float`}
          style={{ animationDelay: `${card.delay}s` }}
        >
          <div className="glass-card px-4 py-3 flex items-center gap-3 min-w-[160px]">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
              style={{ background: card.color }}
            >
              {card.label.charAt(0)}
            </div>
            <div>
              <div className="text-white text-[13px] font-semibold">{card.label}</div>
              <div className="text-white/40 text-[11px]">{card.sub}</div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Main content */}
      <div className="container-xl relative z-10 text-center pt-24 pb-16">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#60A5FA] text-sm font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse" />
            Digital Media Holding Company
          </div>
        </motion.div>

        {/* Main headline */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-8">
          {HEADLINE_WORDS.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`inline-block mr-[0.25em] ${
                word === 'Future' || word === 'Digital' || word === 'Media.'
                  ? 'gradient-text-blue'
                  : ''
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Novabit Media Group is a modern media holding company creating and growing innovative digital media brands that combine trusted journalism, technology, and exceptional digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link href="/brands" id="hero-explore-brands" className="btn-primary text-base px-7 py-3.5">
            Explore Our Brands
            <ArrowRight size={16} />
          </Link>
          <Link href="/about" id="hero-learn-about" className="btn-secondary text-base px-7 py-3.5">
            Learn About Us
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex items-center justify-center gap-8 md:gap-16"
        >
          {[
            { value: '2+', label: 'Media Brands' },
            { value: '2025', label: 'Founded' },
            { value: 'AZ', label: 'Headquartered' },
            { value: '∞', label: 'Ambition' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold font-display text-white mb-0.5">{stat.value}</div>
              <div className="text-xs text-white/30 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}

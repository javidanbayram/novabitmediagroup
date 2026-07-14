'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const PHILOSOPHY_ITEMS = [
  'Independent journalism',
  'Technology-first mindset',
  'Innovation at every layer',
  'Digital publishing excellence',
  'High editorial standards',
  'Long-term vision',
  'Audience-focused storytelling',
];

const TIMELINE = [
  {
    year: '2025',
    title: 'Foundation',
    description: 'Novabit Media Group was founded with a bold mission: to build the future of digital media through trusted journalism and innovative technology.',
    color: '#2563EB',
  },
  {
    year: '2025',
    title: 'Novabit.az Launched',
    description: 'Our flagship technology publication Novabit.az went live, delivering trusted coverage of AI, startups, cybersecurity, and digital transformation.',
    color: '#059669',
  },
  {
    year: '2026',
    title: 'Portfolio Expansion',
    description: 'Soma.az entered development as Novabit Media Group accelerates its brand portfolio and editorial capabilities.',
    color: '#7C3AED',
  },
  {
    year: 'Future',
    title: 'Regional Leadership',
    description: 'Building toward becoming one of the leading independent digital media groups in the region and beyond.',
    color: '#D97706',
  },
];

function FadeIn({
  children,
  delay = 0,
  direction = 'up',
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const dirMap = {
    up: { y: 40, x: 0 },
    left: { y: 0, x: -40 },
    right: { y: 0, x: 40 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dirMap[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutSection() {
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: '-80px' });

  return (
    <section id="about-overview" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060d20]/50 to-transparent" />

      <div className="container-xl relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#60A5FA] text-xs font-medium uppercase tracking-wider mb-6">
              About the Company
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              The Parent Company Behind a{' '}
              <span className="gradient-text-blue">Growing Portfolio</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/60 text-lg leading-relaxed">
              Novabit Media Group is the parent organization behind a growing portfolio of digital media platforms. We build, own, and operate innovative media brands that combine exceptional journalism with modern technology.
            </p>
          </FadeIn>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left column */}
          <div>
            <FadeIn direction="left">
              <div className="glass-card p-8 mb-6">
                <h3 className="font-display text-xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/60 leading-relaxed">
                  Novabit Media Group creates, develops, and grows innovative digital media platforms that educate, inform, and inspire audiences through trusted journalism, technology, and modern storytelling.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.15}>
              <div className="glass-card p-8">
                <h3 className="font-display text-xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/60 leading-relaxed">
                  To become one of the leading independent digital media groups in the region and eventually expand into international markets through innovative publishing, technology, and strategic acquisitions.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right column — philosophy */}
          <FadeIn direction="right">
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-8">Our Philosophy</h3>
              <div className="space-y-4">
                {PHILOSOPHY_ITEMS.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-200"
                  >
                    <CheckCircle2 size={18} className="text-[#2563EB] shrink-0" />
                    <span className="text-white/80 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Timeline */}
        <FadeIn>
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white">Company Timeline</h3>
          </div>
        </FadeIn>

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block" />
          <motion.div
            className="absolute left-1/2 top-0 w-px bg-gradient-to-b from-[#2563EB] to-transparent hidden md:block"
            initial={{ height: 0 }}
            animate={timelineInView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />

          <div className="space-y-8 md:space-y-0">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`md:grid md:grid-cols-2 md:gap-8 md:mb-12 ${
                  i % 2 === 0 ? '' : 'md:[&>:first-child]:order-last'
                }`}
              >
                {/* Content */}
                <div className={`glass-card p-6 mb-4 md:mb-0 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                    style={{
                      background: `${item.color}20`,
                      color: item.color,
                      border: `1px solid ${item.color}40`,
                    }}
                  >
                    {item.year}
                  </div>
                  <h4 className="font-display text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex items-center justify-center">
                  <div
                    className="w-4 h-4 rounded-full border-4 border-[#030712] z-10"
                    style={{ background: item.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

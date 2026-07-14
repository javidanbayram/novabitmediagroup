'use client';

import { motion } from 'framer-motion';
import { Target, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const SHORT_TERM = [
  'Successfully grow Novabit.az',
  'Launch Soma.az',
  'Expand editorial capabilities',
  'Strengthen partnerships',
  'Build core technology infrastructure',
];

const LONG_TERM = [
  'Build additional digital media platforms',
  'Expand into new industries and audiences',
  'Launch mobile applications',
  'Develop AI-powered publishing tools',
  'Expand internationally',
  'Become one of the region\'s leading independent media groups',
];

export default function FutureVision() {
  return (
    <section id="vision" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#04091a]/50 to-transparent pointer-events-none" />

      <div className="container-xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#60A5FA] text-xs font-medium uppercase tracking-wider mb-6"
          >
            Future Vision
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-5"
          >
            Where We're{' '}
            <span className="gradient-text-blue">Going</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/55 text-lg"
          >
            We're building for the long term — a media organization that will serve audiences for decades.
          </motion.p>
        </div>

        {/* Goals grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Short term */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#2563EB]/15 border border-[#2563EB]/25 flex items-center justify-center">
                <Target size={20} className="text-[#60A5FA]" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">Short-Term Goals</h3>
            </div>
            <ul className="space-y-3">
              {SHORT_TERM.map((goal, i) => (
                <motion.li
                  key={goal}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3 text-white/65 text-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center shrink-0">
                    <ArrowRight size={10} className="text-[#60A5FA]" />
                  </div>
                  {goal}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Long term */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/15 border border-[#7C3AED]/25 flex items-center justify-center">
                <Globe size={20} className="text-[#A78BFA]" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">Long-Term Goals</h3>
            </div>
            <ul className="space-y-3">
              {LONG_TERM.map((goal, i) => (
                <motion.li
                  key={goal}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3 text-white/65 text-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/30 flex items-center justify-center shrink-0">
                    <ArrowRight size={10} className="text-[#A78BFA]" />
                  </div>
                  {goal}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link href="/about" className="btn-secondary">
            Learn More About Our Vision
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

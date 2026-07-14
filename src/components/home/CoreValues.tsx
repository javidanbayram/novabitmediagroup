'use client';

import { motion } from 'framer-motion';
import { CORE_VALUES } from '@/lib/data';

export default function CoreValues() {
  return (
    <section id="values" className="section-padding relative">
      <div className="container-xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#60A5FA] text-xs font-medium uppercase tracking-wider mb-6"
          >
            Core Values
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-5"
          >
            The Principles That{' '}
            <span className="gradient-text-blue">Guide Us</span>
          </motion.h2>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {CORE_VALUES.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group glass-card p-7 flex flex-col items-center text-center cursor-default relative overflow-hidden"
            >
              {/* Background color tint on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ background: `${value.color}08` }}
              />

              <div className="text-4xl mb-4 relative z-10">{value.emoji}</div>
              <h3
                className="font-display text-lg font-bold mb-3 relative z-10"
                style={{ color: value.color }}
              >
                {value.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed relative z-10">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

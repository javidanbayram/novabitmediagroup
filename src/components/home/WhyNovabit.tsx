'use client';

import { motion } from 'framer-motion';
import {
  Shield, Lightbulb, Cpu, Layout, Eye, BarChart2, Server, Compass
} from 'lucide-react';
import { WHY_NOVABIT } from '@/lib/data';

const ICON_MAP: Record<string, React.ElementType> = {
  Shield, Lightbulb, Cpu, Layout, Eye, BarChart2, Server, Compass,
};

export default function WhyNovabit() {
  return (
    <section id="why-novabit" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060d20]/40 to-transparent pointer-events-none" />

      <div className="container-xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#60A5FA] text-xs font-medium uppercase tracking-wider mb-6"
          >
            Why Novabit
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-5"
          >
            Built for the{' '}
            <span className="gradient-text-blue">Future</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/55 text-lg"
          >
            We don't just publish content. We build lasting media institutions with the values, technology, and vision to thrive for decades.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_NOVABIT.map((item, i) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="glass-card p-7 group cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center mb-5 group-hover:bg-[#2563EB]/20 group-hover:border-[#2563EB]/40 transition-all duration-300">
                  {Icon && <Icon size={22} className="text-[#60A5FA]" />}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

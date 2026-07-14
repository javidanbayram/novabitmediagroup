'use client';

import { motion } from 'framer-motion';
import {
  BookOpen, Globe, Edit3, Cpu, Target, Zap, Video, Mic,
  Mail, TrendingUp, FileText, Handshake, Briefcase, Users
} from 'lucide-react';
import { SERVICES } from '@/lib/data';

const ICON_MAP: Record<string, React.ElementType> = {
  BookOpen, Globe, Edit3, Cpu, Target, Zap, Video, Mic,
  Mail, TrendingUp, FileText, Handshake, Briefcase, Users,
};

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding relative">
      <div className="container-xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#60A5FA] text-xs font-medium uppercase tracking-wider mb-6"
          >
            What We Do
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-5"
          >
            Our{' '}
            <span className="gradient-text-blue">Capabilities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/55 text-lg"
          >
            End-to-end digital media operations from editorial to distribution, technology to monetization.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card p-5 flex flex-col items-center text-center cursor-default group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center mb-3 group-hover:bg-[#2563EB]/20 transition-colors">
                  {Icon && <Icon size={18} className="text-[#60A5FA]" />}
                </div>
                <span className="text-white/80 text-xs font-semibold leading-tight">{service.title}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

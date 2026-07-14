'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Briefcase, Code2, Pen, Palette, Megaphone, Settings } from 'lucide-react';
import { CAREERS_ROLES } from '@/lib/data';

const DEPT_ICONS: Record<string, React.ElementType> = {
  Editorial: Pen,
  Technology: Code2,
  Marketing: Megaphone,
  Content: Palette,
  Design: Palette,
  Commercial: Briefcase,
};

export default function CareersSection() {
  return (
    <section id="careers-preview" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07112a]/40 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[150px] opacity-[0.04] pointer-events-none" />

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#60A5FA] text-xs font-medium uppercase tracking-wider mb-6"
            >
              We're Hiring
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-white mb-5"
            >
              Join Our{' '}
              <span className="gradient-text-blue">Team</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg leading-relaxed mb-8"
            >
              We're building the future of digital media and are always interested in talented journalists, developers, designers, marketers, editors, and creative thinkers who share our passion for innovation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/careers" id="careers-view-opportunities" className="btn-primary">
                View Opportunities
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Right: Open roles list */}
          <div className="space-y-3">
            {CAREERS_ROLES.map((role, i) => {
              const Icon = DEPT_ICONS[role.department] || Settings;
              return (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="glass-card p-4 flex items-center justify-between gap-4 group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB]/20 transition-colors">
                      <Icon size={16} className="text-[#60A5FA]" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{role.title}</div>
                      <div className="text-white/40 text-xs">{role.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/40">
                      {role.type}
                    </span>
                    <ArrowRight size={14} className="text-white/20 group-hover:text-white/60 transition-colors" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

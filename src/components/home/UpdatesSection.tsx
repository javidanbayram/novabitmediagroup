'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { CORPORATE_UPDATES } from '@/lib/data';

const TAG_COLORS: Record<string, string> = {
  Announcement: '#2563EB',
  Partnerships: '#059669',
  Team: '#7C3AED',
  Milestone: '#D97706',
  Launch: '#DC2626',
  Events: '#0891B2',
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function UpdatesSection() {
  return (
    <section id="updates" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05091a]/40 to-transparent pointer-events-none" />

      <div className="container-xl relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#60A5FA] text-xs font-medium uppercase tracking-wider mb-6"
            >
              Corporate Updates
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-white"
            >
              Latest{' '}
              <span className="gradient-text-blue">Announcements</span>
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#"
            className="btn-secondary text-sm shrink-0"
          >
            All Updates
            <ArrowUpRight size={14} />
          </motion.a>
        </div>

        {/* Updates grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CORPORATE_UPDATES.map((update, i) => {
            const tagColor = TAG_COLORS[update.tag] || '#2563EB';
            return (
              <motion.article
                key={update.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 flex flex-col group cursor-pointer"
              >
                {/* Tag + Date */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: `${tagColor}15`,
                      color: tagColor,
                      border: `1px solid ${tagColor}30`,
                    }}
                  >
                    {update.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-white/30 text-xs">
                    <Calendar size={11} />
                    {formatDate(update.date)}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-white font-semibold text-[15px] leading-snug mb-3 group-hover:text-[#60A5FA] transition-colors">
                  {update.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed flex-1 mb-4">{update.excerpt}</p>

                {/* Read more */}
                <div className="flex items-center gap-1 text-[#60A5FA] text-xs font-medium">
                  Read More
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

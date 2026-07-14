'use client';

import { motion } from 'framer-motion';

const PARTNERS = [
  { name: 'Technology Partners', abbr: 'TP' },
  { name: 'Startup Ecosystem', abbr: 'SE' },
  { name: 'State University', abbr: 'SU' },
  { name: 'Media Organizations', abbr: 'MO' },
  { name: 'Strategic Alliance', abbr: 'SA' },
  { name: 'Innovation Hub', abbr: 'IH' },
  { name: 'Digital Agency', abbr: 'DA' },
  { name: 'Research Institute', abbr: 'RI' },
  { name: 'Investment Partners', abbr: 'IP' },
  { name: 'Creative Studio', abbr: 'CS' },
];

const ALL_PARTNERS = [...PARTNERS, ...PARTNERS]; // duplicate for infinite scroll

export default function PartnersSection() {
  return (
    <section id="partners" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="container-xl mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white/30 text-xs uppercase tracking-widest font-medium mb-2">Ecosystem</p>
          <h2 className="font-display text-2xl font-bold text-white">
            Partners &{' '}
            <span className="gradient-text-blue">Collaborators</span>
          </h2>
        </motion.div>
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#030712] to-transparent pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#030712] to-transparent pointer-events-none" />

        <div className="partners-track">
          {ALL_PARTNERS.map((partner, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-4 px-6 py-4 rounded-xl bg-white/[0.03] border border-white/[0.07] flex items-center gap-3 hover:bg-white/[0.06] transition-colors cursor-default"
              style={{ minWidth: '180px' }}
            >
              <div className="w-8 h-8 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/20 flex items-center justify-center text-[#60A5FA] text-xs font-bold shrink-0">
                {partner.abbr}
              </div>
              <span className="text-white/50 text-sm font-medium whitespace-nowrap">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

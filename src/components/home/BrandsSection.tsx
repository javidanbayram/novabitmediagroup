'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink, Clock, Sparkles } from 'lucide-react';
import { BRANDS, ROADMAP } from '@/lib/data';

export default function BrandsSection() {
  return (
    <section id="brands" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#04091a]/60 to-transparent pointer-events-none" />

      <div className="container-xl relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#60A5FA] text-xs font-medium uppercase tracking-wider mb-6"
          >
            Our Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-5"
          >
            Our{' '}
            <span className="gradient-text-blue">Brands</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/55 text-lg"
          >
            A growing portfolio of innovative digital media platforms serving different audiences and industries.
          </motion.p>
        </div>

        {/* Brand cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {BRANDS.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              <div
                className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[rgba(255,255,255,0.02)] p-8 h-full transition-all duration-300 group-hover:border-opacity-30"
                style={{
                  '--brand-color': brand.color,
                } as React.CSSProperties}
              >
                {/* Background glow */}
                <div
                  className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500"
                  style={{ background: brand.color }}
                />

                {/* Coming soon shimmer */}
                {brand.status === 'coming-soon' && (
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full animate-[shimmer_3s_ease-in-out_infinite]" />
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  {/* Brand logo/avatar */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl font-bold font-display border border-white/10"
                    style={{ background: `linear-gradient(135deg, ${brand.color}, ${brand.accentColor})` }}
                  >
                    {brand.name.charAt(0)}
                  </div>

                  {/* Status badge */}
                  {brand.status === 'live' ? (
                    <span className="badge-live">Live</span>
                  ) : (
                    <span className="badge-soon">Coming Soon</span>
                  )}
                </div>

                {/* Brand info */}
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold text-white mb-1">{brand.name}</h3>
                  <p className="text-white/40 text-sm font-medium uppercase tracking-wider mb-4">{brand.category}</p>
                  <p className="text-white/65 leading-relaxed">{brand.description}</p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {brand.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-lg text-xs font-medium border border-white/[0.08] bg-white/[0.04] text-white/60"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {brand.status === 'live' && brand.url ? (
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`brand-visit-${brand.id}`}
                    className="btn-primary text-sm inline-flex"
                    style={{ background: brand.color }}
                  >
                    Visit Website
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <button
                    id={`brand-coming-soon-${brand.id}`}
                    disabled
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-white/10 bg-white/[0.03] text-white/30 cursor-not-allowed"
                  >
                    <Clock size={14} />
                    Coming Soon
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Growing ecosystem section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card p-8 md:p-12 mb-12 text-center"
        >
          <Sparkles className="w-8 h-8 text-[#60A5FA] mx-auto mb-6" />
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-5 max-w-3xl mx-auto">
            A Growing Media Ecosystem
          </h3>
          <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            Novabit Media Group is continuously investing in the creation and growth of innovative digital media platforms. While our portfolio is currently expanding, our long-term vision is to build a diverse ecosystem of trusted digital brands serving different industries and audiences.
          </p>

          {/* Roadmap */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {ROADMAP.milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-6 text-left"
              >
                <div className="text-[#60A5FA] font-bold font-display text-lg mb-3">{milestone.year}</div>
                <ul className="space-y-2">
                  {milestone.items.map((item) => (
                    <li key={item} className="text-white/55 text-sm flex items-start gap-2">
                      <span className="text-[#2563EB] mt-1 shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <p className="text-white/50 text-base italic max-w-2xl mx-auto">
            Every great media company starts with a single publication. Novabit Media Group is building the foundation for a future portfolio of trusted digital brands that will shape the next generation of online media.
          </p>
        </motion.div>

        <div className="text-center">
          <Link href="/brands" className="btn-secondary">
            View Full Portfolio
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

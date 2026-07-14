'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { COMPANY } from '@/lib/data';

const FOOTER_LINKS = {
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Our Brands', href: '/brands' },
    { label: 'Leadership', href: '/leadership' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  Brands: [
    { label: 'Novabit.az', href: 'https://novabit.az', external: true },
    { label: 'Soma.az (Coming Soon)', href: '/brands', external: false },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
};

const SOCIALS = [
  { icon: FaTwitter, href: COMPANY.socials.twitter, label: 'Twitter' },
  { icon: FaLinkedin, href: COMPANY.socials.linkedin, label: 'LinkedIn' },
  { icon: FaInstagram, href: COMPANY.socials.instagram, label: 'Instagram' },
  { icon: FaFacebook, href: COMPANY.socials.facebook, label: 'Facebook' },
  { icon: FaYoutube, href: COMPANY.socials.youtube, label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050a14] pointer-events-none" />

      <div className="container-xl relative z-10">
        {/* Newsletter bar */}
        <div className="py-12 border-b border-white/5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold font-display text-white mb-1">
                Stay Updated
              </h3>
              <p className="text-white/50 text-sm">
                Get the latest news and updates from Novabit Media Group.
              </p>
            </div>
            <form className="flex gap-2 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#2563EB]/50 focus:ring-1 focus:ring-[#2563EB]/30 transition-all"
              />
              <button type="submit" className="btn-primary text-sm px-5 py-2.5">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-[#2563EB] flex items-center justify-center">
                <span className="text-white font-bold text-sm font-display">N</span>
              </div>
              <div>
                <div className="text-white font-semibold font-display">Novabit</div>
                <div className="text-[10px] text-white/40 tracking-widest uppercase">Media Group</div>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Building the future of digital media through trusted journalism, technology, and exceptional digital experiences.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white/90 font-semibold text-sm mb-4 uppercase tracking-wider">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-white/50 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Novabit Media Group. All Rights Reserved.
          </p>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-white/30 text-xs">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

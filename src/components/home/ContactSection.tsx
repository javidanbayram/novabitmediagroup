'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { COMPANY } from '@/lib/data';

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: Phone, label: 'Phone', value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
  { icon: MapPin, label: 'Headquarters', value: COMPANY.headquarters, href: null },
];

const SUBJECTS = [
  'Partnership Inquiry',
  'Advertising & Sponsorship',
  'Media Inquiry',
  'Careers',
  'General Inquiry',
  'Other',
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', subject: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#04091a]/50 to-transparent pointer-events-none" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#2563EB] rounded-full blur-[150px] opacity-[0.04] pointer-events-none" />

      <div className="container-xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#60A5FA] text-xs font-medium uppercase tracking-wider mb-6"
          >
            Get in Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-5"
          >
            Let's Start a{' '}
            <span className="gradient-text-blue">Conversation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/55 text-lg"
          >
            Whether you're interested in partnerships, advertising, or just want to learn more about Novabit Media Group, we'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact cards */}
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="glass-card p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[#60A5FA]" />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wider mb-0.5">{label}</div>
                  {href ? (
                    <a href={href} className="text-white font-medium hover:text-[#60A5FA] transition-colors text-sm">
                      {value}
                    </a>
                  ) : (
                    <span className="text-white font-medium text-sm">{value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="glass-card p-6 rounded-2xl overflow-hidden relative" style={{ minHeight: '200px' }}>
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center py-8">
                <MapPin size={32} className="text-[#2563EB] mb-3" />
                <div className="text-white font-semibold mb-1">Baku, Azerbaijan</div>
                <div className="text-white/40 text-xs">View on Maps</div>
              </div>
            </div>

            {/* Social links */}
            <div className="glass-card p-5">
              <div className="text-white/40 text-xs uppercase tracking-wider mb-4">Follow Us</div>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: FaTwitter, label: 'Twitter', href: COMPANY.socials.twitter },
                  { icon: FaLinkedin, label: 'LinkedIn', href: COMPANY.socials.linkedin },
                  { icon: FaInstagram, label: 'Instagram', href: COMPANY.socials.instagram },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/60 hover:text-white hover:bg-white/[0.08] transition-all text-sm"
                  >
                    <Icon size={14} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-[#059669]/15 border border-[#059669]/30 flex items-center justify-center mx-auto mb-6">
                    <Send size={28} className="text-[#10B981]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-white/55">
                    Thank you for reaching out. We'll get back to you within 1–2 business days.
                  </p>
                </motion.div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-white/50 text-xs uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#2563EB]/50 focus:ring-1 focus:ring-[#2563EB]/30 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-company" className="block text-white/50 text-xs uppercase tracking-wider mb-2">
                        Company
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Your Company"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#2563EB]/50 focus:ring-1 focus:ring-[#2563EB]/30 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-white/50 text-xs uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#2563EB]/50 focus:ring-1 focus:ring-[#2563EB]/30 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-white/50 text-xs uppercase tracking-wider mb-2">
                      Subject *
                    </label>
                    <select
                      id="contact-subject"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-[#2563EB]/50 focus:ring-1 focus:ring-[#2563EB]/30 transition-all appearance-none"
                    >
                      <option value="" className="bg-[#030712]">Select a subject</option>
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s} className="bg-[#030712]">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-white/50 text-xs uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your inquiry..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#2563EB]/50 focus:ring-1 focus:ring-[#2563EB]/30 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit"
                    className="btn-primary w-full justify-center"
                  >
                    Send Message
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

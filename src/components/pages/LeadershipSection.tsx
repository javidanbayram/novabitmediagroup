'use client';

import { motion } from 'framer-motion';
import { Mail, User } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { LEADERSHIP } from '@/lib/data';

export default function LeadershipSection() {
  return (
    <section id="leadership" className="section-padding relative">
      <div className="container-xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEADERSHIP.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card p-8 group"
            >
              {/* Avatar */}
              <div className="mb-6">
                {member.avatar ? (
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-20 h-20 rounded-2xl object-cover border border-white/10"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2563EB]/30 to-[#7C3AED]/20 border border-white/10 flex items-center justify-center">
                    <User size={32} className="text-white/30" />
                  </div>
                )}
              </div>

              {/* Info */}
              <h3 className="font-display text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-[#60A5FA] text-sm font-medium mb-4">{member.position}</p>
              <p className="text-white/50 text-sm leading-relaxed mb-6">{member.bio}</p>

              {/* Actions */}
              <div className="flex items-center gap-2">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/30 transition-all"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <FaLinkedin size={14} />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-[#2563EB]/20 hover:border-[#2563EB]/30 transition-all"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

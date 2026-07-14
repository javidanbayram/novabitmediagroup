import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CareersSection from '@/components/home/CareersSection';

export const metadata: Metadata = {
  title: 'Careers — Novabit Media Group',
  description:
    'Join Novabit Media Group. We\'re looking for talented journalists, developers, designers, marketers and creative thinkers to help build the future of digital media.',
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page hero */}
        <section className="pt-36 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#07112a]/50 to-transparent pointer-events-none" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#2563EB] rounded-full blur-[120px] opacity-[0.06] pointer-events-none" />
          <div className="container-xl relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#60A5FA] text-xs font-medium uppercase tracking-wider mb-6">
              Careers
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Build With{' '}
              <span className="gradient-text-blue">Us</span>
            </h1>
            <p className="text-white/55 text-xl max-w-3xl mx-auto leading-relaxed">
              Join a team of passionate journalists, engineers, designers, and storytellers building the next generation of digital media in the region.
            </p>
          </div>
        </section>

        <CareersSection />

        {/* Culture section */}
        <section className="section-padding">
          <div className="container-xl">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  emoji: '🌍',
                  title: 'Mission-Driven',
                  desc: 'Work on something that matters. Every article, product, and line of code contributes to a more informed world.',
                },
                {
                  emoji: '🚀',
                  title: 'Fast-Growing',
                  desc: 'Join at the ground floor of a rapidly expanding media organization with enormous opportunities ahead.',
                },
                {
                  emoji: '🎓',
                  title: 'Learning Culture',
                  desc: 'We invest in our people through continuous learning, mentorship, and professional development opportunities.',
                },
              ].map((item) => (
                <div key={item.title} className="glass-card p-8 text-center">
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="font-display text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

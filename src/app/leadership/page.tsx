import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LeadershipSection from '@/components/pages/LeadershipSection';

export const metadata: Metadata = {
  title: 'Leadership — Novabit Media Group',
  description:
    'Meet the team behind Novabit Media Group — experienced journalists, engineers, designers, and business leaders building the future of digital media.',
};

export default function LeadershipPage() {
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
              The Team
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Our{' '}
              <span className="gradient-text-blue">Leadership</span>
            </h1>
            <p className="text-white/55 text-xl max-w-3xl mx-auto leading-relaxed">
              A team of experienced journalists, technologists, designers, and business leaders united by a shared passion for building world-class digital media.
            </p>
          </div>
        </section>

        <LeadershipSection />
      </main>
      <Footer />
    </>
  );
}

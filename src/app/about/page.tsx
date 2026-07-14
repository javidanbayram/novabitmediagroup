import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutSection from '@/components/home/AboutSection';
import CoreValues from '@/components/home/CoreValues';
import FutureVision from '@/components/home/FutureVision';

export const metadata: Metadata = {
  title: 'About — Novabit Media Group',
  description:
    'Learn about Novabit Media Group, the parent organization behind a growing portfolio of innovative digital media platforms. Discover our mission, values, and vision.',
};

export default function AboutPage() {
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
              About the Company
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Building{' '}
              <span className="gradient-text-blue">Tomorrow's</span>
              {' '}Media
            </h1>
            <p className="text-white/55 text-xl max-w-3xl mx-auto leading-relaxed">
              Novabit Media Group is the parent organization behind a growing portfolio of digital media platforms. We are driven by a passion for journalism, technology, and the future of storytelling.
            </p>
          </div>
        </section>

        <AboutSection />
        <CoreValues />
        <FutureVision />
      </main>
      <Footer />
    </>
  );
}

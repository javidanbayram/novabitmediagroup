import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import BrandsSection from '@/components/home/BrandsSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyNovabit from '@/components/home/WhyNovabit';
import StatsSection from '@/components/home/StatsSection';
import CoreValues from '@/components/home/CoreValues';
import FutureVision from '@/components/home/FutureVision';
import CareersSection from '@/components/home/CareersSection';
import PartnersSection from '@/components/home/PartnersSection';
import UpdatesSection from '@/components/home/UpdatesSection';
import ContactSection from '@/components/home/ContactSection';

export const metadata: Metadata = {
  title: 'Novabit Media Group — Building the Future of Digital Media',
  description:
    'Novabit Media Group is a modern media holding company creating and growing innovative digital media brands that combine trusted journalism, technology, and exceptional digital experiences.',
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <BrandsSection />
        <ServicesSection />
        <WhyNovabit />
        <CoreValues />
        <FutureVision />
        <CareersSection />
        <PartnersSection />
        <UpdatesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

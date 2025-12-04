import type { Metadata } from 'next';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ClientsSection from '@/components/ClientsSection';
import PainSection from '@/components/PainSection';
import SolutionSection from '@/components/SolutionSection';
import CasesSection from '@/components/CasesSection';
import BenefitsSection from '@/components/BenefitsSection';
import ContactSection from '@/components/ContactSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Onebrain – Smart IT Outsourcing',
  description:
    'High-performance tech outsourcing powered by AI and human expertise to find, engage and retain the best IT professionals with speed and precision.',
  keywords: [
    'IT outsourcing',
    'tech recruitment',
    'software engineering talent',
    'outsourcing in Brazil',
    'IT teams on demand',
    'AI-powered recruiting',
    'IT staffing',
    'outsourcing partner',
    'nearshore development',
    'Onebrain',
  ],
  alternates: {
    canonical: 'https://outsourcing.onebrain.com.br/en',
    languages: {
      'pt-BR': 'https://outsourcing.onebrain.com.br',
      en: 'https://outsourcing.onebrain.com.br/en',
    },
  },
  openGraph: {
    title: 'Onebrain – Intelligent IT Outsourcing',
    description:
      'High-performance tech outsourcing powered by AI and human expertise to build and scale world-class engineering teams.',
    url: 'https://outsourcing.onebrain.com.br/en',
    siteName: 'Onebrain',
    images: [
      {
        url: '/thumb-onebrain.webp',
        width: 1200,
        height: 630,
        alt: 'Onebrain – Intelligent IT Outsourcing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Onebrain – Intelligent IT Outsourcing',
    description:
      'High-performance tech outsourcing powered by AI and human expertise to build and scale world-class engineering teams.',
    images: ['/thumb-onebrain.webp'],
  },
};

export default function HomeEn() {
  return (
    <main className="bg-black">
      <Header />
      <HeroSection />
      <PainSection />
      <ClientsSection />
      <SolutionSection />
      <CasesSection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

import type { Metadata } from 'next';
import HeaderEn from '@/components/en/HeaderEn';
import HeroSectionEn from '@/components/en/HeroSectionEn';
import ClientsSectionEn from '@/components/en/ClientsSectionEn';
import PainSectionEn from '@/components/en/PainSectionEn';
import SolutionSectionEn from '@/components/en/SolutionSectionEn';
import CasesSectionEn from '@/components/en/CasesSectionEn';
import BenefitsSectionEn from '@/components/en/BenefitsSectionEn';
import ContactSectionEn from '@/components/en/ContactSectionEn';
import WhatsAppButton from '@/components/en/WhatsAppButton';
import FooterEn from '@/components/en/FooterEn';

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
    title: 'Onebrain – Smart IT Outsourcing',
    description:
      'High-performance tech outsourcing powered by AI and human expertise to build and scale world-class engineering teams.',
    url: 'https://outsourcing.onebrain.com.br/en',
    siteName: 'Onebrain',
    images: [
      {
        url: '/thumb-onebrain-en.webp',
        width: 1200,
        height: 630,
        alt: 'Onebrain – Smart IT Outsourcing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Onebrain – Smart IT Outsourcing',
    description:
      'High-performance tech outsourcing powered by AI and human expertise to build and scale world-class engineering teams.',
    images: ['/thumb-onebrain.webp'],
  },
};

export default function HomeEn() {
  return (
    <main className="bg-black">
      <HeaderEn />
      <HeroSectionEn />
      <PainSectionEn />
      <ClientsSectionEn />
      <SolutionSectionEn />
      <CasesSectionEn />
      <BenefitsSectionEn />
      <ContactSectionEn />
      <FooterEn />
      <WhatsAppButton />
    </main>
  );
}

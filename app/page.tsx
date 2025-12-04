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
  title: 'Onebrain - Inteligência em Outsourcing de TI',
  description:
    'Outsourcing tech de alto nível com IA e expertise humana para encontrar, engajar e manter os melhores profissionais de TI do Brasil com velocidade e precisão.',
  keywords: [
    'outsourcing de TI',
    'outsourcing especializado',
    'outsourcing inteligente',
    'alocação de desenvolvedores',
    'desenvolvedores sob demanda',
    'squad as a service',
    'times de tecnologia sob demanda',
    'contratação ágil de TI',
    'recrutamento tech',
    'recrutamento com IA',
    'inteligência artificial no recrutamento',
    'seleção de profissionais de TI',
    'seleção inteligente de talentos',
    'engenheiros de software senior',
    'desenvolvedores senior',
    'profissionais de TI especializados',
    'reduzir turnover em TI',
    'escassez de talentos tech',
    'contratar desenvolvedores no Brasil',
    'Onebrain',
  ],
  alternates: {
    canonical: 'https://outsourcing.onebrain.com.br',
    languages: {
      'pt-BR': 'https://outsourcing.onebrain.com.br',
      en: 'https://outsourcing.onebrain.com.br/en',
    },
  },
  openGraph: {
    title: 'Onebrain - Inteligência em Outsourcing de TI',
    description:
      'Outsourcing tech de alto nível com IA e expertise humana para encontrar, engajar e manter os melhores profissionais de TI do Brasil com velocidade e precisão.',
    url: 'https://outsourcing.onebrain.com.br',
    siteName: 'Onebrain',
    images: [
      {
        url: '/thumb-onebrain.webp',
        width: 1200,
        height: 630,
        alt: 'Onebrain - Inteligência em Outsourcing de TI',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Onebrain - Inteligência em Outsourcing de TI',
    description:
      'Outsourcing tech de alto nível com IA e expertise humana para encontrar, engajar e manter os melhores profissionais de TI do Brasil com velocidade e precisão.',
    images: ['/thumb-onebrain.webp'],
  },
};

export default function Home() {
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

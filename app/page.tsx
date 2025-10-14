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

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <ClientsSection />
      <CasesSection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

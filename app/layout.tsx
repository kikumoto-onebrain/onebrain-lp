import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Onebrain - Inteligência em Outsourcing de TI',
  description:
    'Outsourcing estratégico para encontrar, engajar e manter os melhores profissionais de TI do Brasil, com agilidade e precisão.',
  openGraph: {
    title: 'Onebrain - Inteligência em Outsourcing de TI',
    description:
      'A inteligência que conecta empresas aos melhores talentos de tecnologia.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* ✅ Fonte do Material Symbols (Google Icons) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />

        {/* 📊 Dados estruturados JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Onebrain',
              description: 'Outsourcing estratégico de TI com IA',
              url: 'https://onebrain.com.br',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Sales',
                availableLanguage: 'Portuguese',
              },
            }),
          }}
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

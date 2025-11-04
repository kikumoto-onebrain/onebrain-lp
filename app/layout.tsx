import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://outsourcing.onebrain.com.br'),
  title: 'Onebrain - Inteligência em Outsourcing de TI',
  description:
    'Outsourcing estratégico para encontrar, engajar e manter os melhores profissionais de TI do Brasil, com agilidade e precisão.',
  keywords: [
    'outsourcing de TI',
    'recrutamento tech',
    'tecnologia da informação',
    'Onebrain',
    'inteligência artificial',
    'seleção de profissionais de TI',
    'outsourcing inteligente',
    'serviços de TI',
    'hunting tech',
    'recrutamento de desenvolvedores',
  ],
  icons: {
    icon: '/favicon-onebrain.svg',
  },
  alternates: {
    canonical: 'https://outsourcing.onebrain.com.br',
  },
  openGraph: {
    title: 'Onebrain - Inteligência em Outsourcing de TI',
    description:
      'Outsourcing estratégico para encontrar, engajar e manter os melhores profissionais de TI do Brasil, com agilidade e precisão.',
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
      'Outsourcing estratégico para encontrar, engajar e manter os melhores profissionais de TI do Brasil, com agilidade e precisão.',
    images: ['/thumb-onebrain.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
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
        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon-onebrain.svg" type="image/svg+xml" />

        {/* ✅ Fonte do Material Symbols */}
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
              description:
                'Outsourcing estratégico para encontrar, engajar e manter os melhores profissionais de TI do Brasil, com agilidade e precisão.',
              url: 'https://outsourcing.onebrain.com.br',
              logo: 'https://outsourcing.onebrain.com.br/logo-onebrain.svg',
              sameAs: [
                'https://www.linkedin.com/company/onebrainbr',
                'https://www.instagram.com/onebrainbr',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Sales',
                availableLanguage: ['Portuguese', 'English'],
              },
            }),
          }}
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

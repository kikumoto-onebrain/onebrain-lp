import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';

const poppins = Poppins({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://outsourcing.onebrain.com.br'),
  title: 'Onebrain - Inteligência em Outsourcing de TI',
  description:
    'Outsourcing tech de alto nível com IA e expertise humana para encontrar, engajar e manter os melhores profissionais de TI do Brasil com velocidade e precisão.',
  
  // Search Console
  verification: {
    google: '3xJM3-XLIzjgb-ZmvLsjG314__yi5aWHsHK6ShLbHAM',
  },

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
  icons: {
    icon: '/favicon-onebrain.svg',
  },
  alternates: {
    canonical: 'https://outsourcing.onebrain.com.br',
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
        {/* Favicon */}
        <link rel="icon" href="/favicon-onebrain.svg" type="image/svg+xml" />

        {/* Fonte do Material Symbols */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />

        {/* Dados estruturados JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Onebrain',
              description:
                'Outsourcing tech de alto nível com IA e expertise humana para encontrar, engajar e manter os melhores profissionais de TI do Brasil com velocidade e precisão.',
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

      <body className={poppins.className}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GT83W4LEVZ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GT83W4LEVZ');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}

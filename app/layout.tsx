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

  // Search Console
  verification: {
    google: '3xJM3-XLIzjgb-ZmvLsjG314__yi5aWHsHK6ShLbHAM',
  },

  icons: {
    icon: '/favicon-onebrain.svg',
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

        {/* Dados estruturados JSON-LD da organização (pode ficar em PT mesmo) */}
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

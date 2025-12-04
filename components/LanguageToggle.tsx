'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function LanguageToggle() {
  const pathname = usePathname() || '/';
  const isEn = pathname.startsWith('/en');

  // destino quando clicar: se está em /en vai para /, senão vai para /en
  const target = isEn ? '/' : '/en';

  // qual bandeira mostrar (mostra a bandeira do idioma atual)
  const flagSrc = isEn ? '/usa.svg' : '/brasil.svg';
  const flagAlt = isEn ? 'English (current)' : 'Português (atual)';
  const label = isEn ? 'Português' : 'English';

  return (
    <Link
      href={target}
      // evitar interferência de i18n automática se estiver usando next.config locales
      locale={false}
      className="inline-flex items-center gap-3 px-3 py-1 rounded-full hover:opacity-90 transition"
      aria-label={`Mudar idioma para ${label}`}
      title={`Mudar idioma para ${label}`}
    >
      <div className="w-6 h-4 relative">
        <Image src={flagSrc} alt={flagAlt} fill style={{ objectFit: 'cover' }} />
      </div>

      {/* Exibir texto pequeno ao lado da bandeira (opcional). */}
      <span className="hidden sm:inline text-sm font-medium text-white/90">
        {label}
      </span>
    </Link>
  );
}

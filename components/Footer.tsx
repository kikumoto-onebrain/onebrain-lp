'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <Image
            src="/logo-onebrain.svg"
            alt="Onebrain Logo"
            width={100}
            height={25}
            className="w-auto h-8"
            priority
          />

          <p className="text-white/60 text-sm">
            2025 Onebrain. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { Brain } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-white" />
            <span className="text-xl font-semibold text-white">Onebrain</span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white/60">
            <a href="#solution" className="hover:text-white transition-colors">
              Solução
            </a>
            <a href="#clients" className="hover:text-white transition-colors">
              Clientes
            </a>
            <a href="#cases" className="hover:text-white transition-colors">
              Cases
            </a>
            <a href="#benefits" className="hover:text-white transition-colors">
              Benefícios
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contato
            </a>
          </div>

          <p className="text-white/60 text-sm">
            2025 Onebrain. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

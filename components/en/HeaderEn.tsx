'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function HeaderEn() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerBg = isMenuOpen
    ? 'bg-black/90 backdrop-blur-xl'
    : isScrolled
    ? 'bg-black/80 backdrop-blur-xl'
    : 'bg-transparent';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        {/* 🔹 Logo */}
        <a href="/" className="flex items-center group hover:scale-105 transition-transform">
          <Image
            src="/logo-onebrain.svg"
            alt="Onebrain Logo"
            width={120}
            height={34}
            priority
            className="w-auto h-8"
          />
        </a>

        {/* 🔹 Menu Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#clients" className="text-white/80 hover:text-white transition-colors">
            Customers
          </a>
          <a href="#solution" className="text-white/80 hover:text-white transition-colors">
            Solution
          </a>
          <a href="#cases" className="text-white/80 hover:text-white transition-colors">
            Cases
          </a>
          <a href="#benefits" className="text-white/80 hover:text-white transition-colors">
            Benefits
          </a>

          {/* 🔹 Botão Contato */}
          <a
            href="#contact"
            className="px-6 py-2 bg-white text-black rounded-full hover:bg-white/90 transition-all hover:scale-105 font-medium"
          >
            Contact
          </a>

          {/* 🔹 Botão de Idioma */}
          <div className="flex items-center ml-4">
            <a
              href="/"
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            >
              {/* Bandeira do Brasil (idioma atual) */}
              <Image src="/usa.svg" width={22} height={22} alt="English" />

              {/* Flecha ou texto opcional */}
              <span className="text-white/70 text-sm">EN</span>

              {/* Bandeira de destino */}
              <Image src="/brasil.svg" width={22} height={22} alt="Alterar para Português" />
            </a>
          </div>
        </nav>

        {/* 🔹 Botão Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none z-50 relative"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 🔹 Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-xl absolute top-full left-0 right-0 px-6 py-8 space-y-6 text-center"
          >
            <a
              href="#clients"
              className="block text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Customers
            </a>
            <a
              href="#solution"
              className="block text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Solution
            </a>
            <a
              href="#cases"
              className="block text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cases
            </a>
            <a
              href="#benefits"
              className="block text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>

            {/* Botão Contato */}
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-all hover:scale-105 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>

            {/* 🔹 Idioma MOBILE */}
            <a
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-3 mt-4 mx-auto px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all w-fit"
            >
              <Image src="/brasil.svg" width={24} height={24} alt="Português" />
              <span className="text-white/80">English</span>
              <Image src="/usa.svg" width={24} height={24} alt="mudar idioma" />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

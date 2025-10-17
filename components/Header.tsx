'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔄 calcula opacidade gradual conforme scroll (0 → 1 até 150px)
  const bgOpacity = Math.min(scrollY / 150, 1);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-[background-color,backdrop-filter] duration-700 ease-in-out"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${0.2 + bgOpacity * 0.6})`, // começa bem transparente e escurece gradualmente
      }}
    >
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center group transform transition-transform hover:scale-105"
        >
          <Image
            src="/logo-onebrain.svg"
            alt="Onebrain Logo"
            width={120}
            height={34}
            priority
            className="w-auto h-8"
          />
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#clients" className="text-white/80 hover:text-white transition-colors">
            Clientes
          </a>
          <a href="#solution" className="text-white/80 hover:text-white transition-colors">
            Solução
          </a>
          <a href="#cases" className="text-white/80 hover:text-white transition-colors">
            Cases
          </a>
          <a href="#benefits" className="text-white/80 hover:text-white transition-colors">
            Benefícios
          </a>
          <a
            href="#contact"
            className="px-6 py-2 bg-white text-black rounded-full hover:bg-white/90 transition-all hover:scale-105 font-medium"
          >
            Contato
          </a>
        </nav>
      </div>
    </motion.header>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 group">
          <Brain className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-semibold text-white">Onebrain</span>
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

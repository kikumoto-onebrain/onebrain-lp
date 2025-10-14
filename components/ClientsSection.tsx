'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function ClientsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const clients = [
    'iFood',
    'Petz',
    'Nomad',
    'Empresa A',
    'Empresa B',
    'Empresa C',
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scroll = () => {
      scrollAmount += 1;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="clients" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
          Somos o cérebro por trás das grandes
          <br />
          transformações digitais
        </h2>
      </motion.div>

      <div
        ref={scrollRef}
        className="flex gap-16 overflow-hidden whitespace-nowrap"
        style={{ scrollBehavior: 'auto' }}
      >
        {[...clients, ...clients, ...clients].map((client, index) => (
          <motion.div
            key={index}
            className="inline-flex items-center justify-center min-w-[200px] h-24 px-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl font-semibold text-white/80 hover:text-white transition-colors">
              {client}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="container mx-auto px-6 text-center mt-16"
      >
        <a
          href="#contact"
          className="inline-block px-8 py-4 border-2 border-white/20 text-white rounded-full hover:border-white/40 hover:bg-white/5 transition-all font-medium"
        >
          Fale com um especialista
        </a>
      </motion.div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function ClientsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const clients = [
    { name: 'iFood', logo: '/ifood.svg' },
    { name: 'Nomad', logo: '/nomad.svg' },
    { name: 'Gringo', logo: '/gringo.svg' },
    { name: 'Petz', logo: '/petz.svg' },
    { name: 'Sympla', logo: '/sympla.svg' },
    { name: 'PicPay', logo: '/picpay.svg' },
  ];

  // 🌀 rolagem infinita suave, sem duplicar no modo dev
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scroll = 0;
    let frameId: number;

    const animate = () => {
      scroll += 0.5;
      if (scroll >= container.scrollWidth / 2) scroll = 0;
      container.scrollLeft = scroll;
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section id="clients" className="py-24 bg-black relative overflow-hidden">
      {/* gradiente lateral */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />

      {/* título */}
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

      {/* carrossel de logos */}
      <div
        ref={scrollRef}
        className="flex gap-16 overflow-hidden whitespace-nowrap"
        style={{ scrollBehavior: 'auto' }}
      >
        {[...clients, ...clients].map((client, index) => (
          <motion.div
            key={index}
            className="inline-flex items-center justify-center min-w-[200px] h-24 px-8 
                       border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm 
                       hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </motion.div>
        ))}
      </div>

      {/* botão */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="container mx-auto px-6 text-center mt-16"
      >
        <a
          href="#contact"
          className="inline-block px-8 py-4 border-2 border-white/20 text-white rounded-full 
                     hover:border-white/40 hover:bg-white/5 transition-all font-medium"
        >
          Fale com um especialista
        </a>
      </motion.div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function ClientsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // 🧩 lista de clientes com logos reais (certifique-se de que os SVGs estão em /public)
  const clients = [
    { name: 'iFood', logo: '/ifood.svg' },
    { name: 'Nomad', logo: '/nomad.svg' },
    { name: 'Gringo', logo: '/gringo.svg' },
    { name: 'Petz', logo: '/petz.svg' },
    { name: 'Sympla', logo: '/sympla.svg' },
    { name: 'PicPay', logo: '/picpay.svg' },
  ];

  // 🎞️ rolagem automática do carrossel
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scroll = () => {
      scrollAmount += 1;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) scrollAmount = 0;
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="clients" className="py-24 bg-black relative overflow-hidden">
      {/* gradiente lateral para dar fade no carrossel */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />

      {/* título 100% branco, sem gradiente */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 text-center mb-16"
      >
        <h2
          className="text-4xl md:text-5xl font-semibold mb-4"
          style={{
            all: 'unset',
            display: 'block',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 600,
            lineHeight: 1.2,
            color: '#ffffff',
            textAlign: 'center',
          }}
        >
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
            className="inline-flex items-center justify-center min-w-[200px] h-24 px-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={140}
              height={60}
              className="object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </motion.div>
        ))}
      </div>

      {/* botão CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="container mx-auto px-6 text-center mt-16"
      >
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white rounded-full hover:border-white/40 hover:bg-white/5 transition-all font-medium"
        >
          Fale com um especialista
        </motion.a>
      </motion.div>
    </section>
  );
}

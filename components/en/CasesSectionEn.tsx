'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CasesSection() {
  const cases = [
    {
      company: 'iFood',
      description:
        'Brazil’s biggest delivery app has counted on Onebrain’s solutions since day one.',
      image: '/case-ifood.webp',
      link: 'https://onebrain.com.br/en/cases/ifood/',
    },
    {
      company: 'Petz',
      description:
        'With AI and full integration, we elevated Petz’s e-commerce to a new level of digital experience.',
      image: '/case-petz.webp',
      link: 'https://onebrain.com.br/en/cases/petz/',
    },
    {
      company: 'Nomad',
      description:
        'We overcame aggressive deadlines to deliver a flawless app for a modern, international company.',
      image: '/case-nomad.webp',
      link: 'https://onebrain.com.br/en/cases/nomad/',
    },
  ];

  return (
    <section id="cases" className="py-32 bg-black relative overflow-hidden">
      {/* 🧩 fundo quadriculado sutil (sem interferir no hover/click) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, white 1px, transparent 0), linear-gradient(white 1px, transparent 0)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="container mx-auto px-6">
        {/* título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Real results, long-term partnerships
          </h2>
        </motion.div>

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative p-8 border border-white/10 rounded-2xl bg-cover bg-center backdrop-blur-sm hover:border-white/20 transition-all overflow-hidden"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              {/* overlay escuro para contraste */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all" />

              <div className="relative z-10">
                <div className="mb-6 h-16 flex items-center">
                  <h3 className="text-3xl font-semibold text-white">
                    {item.company}
                  </h3>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed font-light">
                  {item.description}
                </p>
                <div className="flex items-center text-white group-hover:translate-x-2 transition-transform">
                  <span className="text-sm font-medium">Ver case completo</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>

              {/* linha animada inferior */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/50 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              />
            </motion.a>
          ))}
        </div>

        {/* ✅ CTA com hover e click fixados */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 250, damping: 18 }}
            className="inline-block px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all"
          >
            Bring the best talent to your team
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

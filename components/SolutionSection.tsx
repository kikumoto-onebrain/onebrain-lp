'use client';

import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

export default function SolutionSection() {
  return (
    <section
      id="solution"
      className="py-32 bg-neutral-900 relative overflow-hidden"
    >
      {/* 🔧 fundo animado — pointer-events desativado */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{
              top: `${30 + i * 20}%`,
              left: '-100%',
              right: '100%',
            }}
            animate={{ x: ['0%', '200%'] }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* círculo animado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 border border-white/10 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-8 border border-white/20 rounded-full"
              />
              <div className="absolute inset-16 bg-gradient-to-br from-white/10 to-transparent rounded-full backdrop-blur-xl flex items-center justify-center">
                <Brain className="w-24 h-24 text-white" />
              </div>

              {[0, 120, 240].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-white rounded-full"
                  style={{ top: '50%', left: '50%' }}
                  animate={{
                    x: [
                      Math.cos((angle * Math.PI) / 180) * 150,
                      Math.cos(((angle + 120) * Math.PI) / 180) * 150,
                      Math.cos(((angle + 240) * Math.PI) / 180) * 150,
                      Math.cos((angle * Math.PI) / 180) * 150,
                    ],
                    y: [
                      Math.sin((angle * Math.PI) / 180) * 150,
                      Math.sin(((angle + 120) * Math.PI) / 180) * 150,
                      Math.sin(((angle + 240) * Math.PI) / 180) * 150,
                      Math.sin((angle * Math.PI) / 180) * 150,
                    ],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* texto + botão */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Outsourcing inteligente com IA: mais rápido e preciso
            </h2>
            <p className="text-lg text-white/70 mb-6 leading-relaxed font-light">
              Na Onebrain, combinamos experiência humana com IA para mapear, selecionar
              e engajar profissionais com o perfil exato que sua empresa precisa.
            </p>
            <p className="text-lg text-white/70 mb-8 leading-relaxed font-light">
              A IA analisa competências, histórico e fit cultural, enquanto nossa equipe
              de hunting conduz um processo ágil e assertivo.
            </p>

            {/* ✅ botão com mesmo comportamento da PainSection */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 250, damping: 18 }}
              className="inline-block px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all"
            >
              Fale com um especialista
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

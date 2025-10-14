'use client';

import { motion } from 'framer-motion';
import { AlertCircle, TrendingUp, Users, ClockAlert } from 'lucide-react';

export default function PainSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-black to-neutral-900 relative overflow-hidden">
      {/* textura de fundo */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Contratar bons profissionais nunca foi tão desafiador
            </h2>
            <p className="text-lg text-white/70 mb-6 leading-relaxed font-light">
              O mercado de tecnologia enfrenta alta demanda e escassez de talentos.
              A competição global eleva custos e o turnover afeta resultados. Mesmo assim,
              muitas empresas ainda utilizam processos de seleção ultrapassados, que não
              garantem o melhor talento.
            </p>
            <p className="text-lg text-white mb-8 leading-relaxed">
              A Onebrain utiliza inteligência artificial e metodologia especializada para
              recrutar os talentos mais adequados para sua equipe.
            </p>

            {/* botão */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all flex items-center justify-center"
            >
              Descubra como a IA pode transformar sua contratação
            </motion.a>
          </motion.div>

          {/* cards com pulsação suave e intercalada */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: AlertCircle, label: 'Escassez de talentos' },
                { icon: TrendingUp, label: 'Custos elevados' },
                { icon: Users, label: 'Alto turnover' },
                { icon: ClockAlert, label: 'Processos lentos' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse', // 🔁 vai e volta suavemente
                    delay: index * 1, // 🔄 intercalado
                    ease: 'easeInOut', // 💨 fluido e contínuo
                  }}
                  className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm transition-transform hover:scale-105"
                >
                  <item.icon className="w-12 h-12 text-white/80 mb-4" />
                  <p className="text-white font-medium">{item.label}</p>
                </motion.div>
              ))}
            </div>

            {/* círculo giratório */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/5 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

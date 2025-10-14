'use client';

import { motion } from 'framer-motion';
import { AlertCircle, TrendingUp, Users } from 'lucide-react';

export default function PainSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-black to-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
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

            {/* botão com hover igual ao da hero (via Tailwind) */}
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-white text-black rounded-full font-medium transition-transform duration-300 ease-out hover:scale-105 hover:bg-white/90"
            >
              Descubra como a IA pode transformar sua contratação
            </a>
          </motion.div>

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
                { icon: AlertCircle, label: 'Processos lentos' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all"
                >
                  <item.icon className="w-12 h-12 text-white/80 mb-4" />
                  <p className="text-white font-medium">{item.label}</p>
                </motion.div>
              ))}
            </div>

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

'use client';

import { motion } from 'framer-motion';
import { Maximize2, Zap, TrendingDown, Target, Users, Gem } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Maximize2,
      title: 'Flexibility',
      description: 'Build and scale teams on demand',
    },
    {
      icon: Zap,
      title: 'Speed',
      description: 'Hiring up to 3x faster',
    },
    {
      icon: TrendingDown,
      title: 'Cost reduction',
      description: 'Cut fixed expenses and retain top talent',
    },
    {
      icon: Target,
      title: 'Focus on your core business',
      description: 'Leave recruitment process to the specialists',
    },
    {
      icon: Users,
      title: 'Lower turnover',
      description: 'AI identifies the ideal match for every culture',
    },
    {
      icon: Gem,
      title: 'Profitability',
      description: 'Higher ROI compared to internal hiring',
    },
  ];

  return (
    <section
      id="benefits"
      className="py-32 bg-gradient-to-br from-neutral-900 via-black to-neutral-900 relative overflow-hidden"
    >
      {/* ✨ fundo com partículas animadas */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            How outsourcing transforms
            <br />
            your IT operation
          </h2>
        </motion.div>

        {/* grid de benefícios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:border-white/30 transition-all overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />

              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/70 font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <motion.div
                className="absolute inset-0 border-2 border-white/20 rounded-2xl"
                initial={{ scale: 1, opacity: 0 }}
                whileHover={{ scale: 1.05, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

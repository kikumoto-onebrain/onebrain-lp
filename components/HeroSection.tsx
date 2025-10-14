'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId: number;

    const points = Array.from({ length: 50 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      brightness: Math.random(),
      pulseSpeed: 0.005 + Math.random() * 0.005,
    }));

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // desenhar pontos
      points.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        p.brightness += p.pulseSpeed;
        if (p.brightness > 1 || p.brightness < 0) p.pulseSpeed *= -1;

        const size = 3 + Math.random() * 1.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255,255,255,${0.5 + 0.5 * Math.sin(p.brightness * Math.PI)})`;
        ctx.fill();
      });

      // desenhar linhas
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            const alpha = 1 - dist / 160;
            ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.6})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* fundo animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black">
        <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />
      </div>

      {/* CTA centralizado */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-10 py-5 bg-white text-black rounded-full hover:bg-white/90 hover:scale-105 transition-all font-medium text-lg"
          >
            Quero montar minha equipe
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

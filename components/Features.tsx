"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { features } from "@/lib/data";
import {
  Zap, Scissors, TrendingDown, Type, Subtitles, Hash,
  MousePointerClick, GitBranch
} from "lucide-react";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Zap, Scissors, TrendingDown, Type,
  Subtitles, Hash, MousePointerClick, GitBranch,
};

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" ref={ref} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-[#00E676] uppercase tracking-widest font-inter">Funcionalidades</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white font-poppins">
            Tudo que seu conteúdo precisa
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] to-[#00FF9D]">para performar de verdade</span>
          </h2>
          <p className="mt-4 text-[#9E9E9E] max-w-xl mx-auto font-inter text-sm sm:text-base">
            Uma plataforma completa que cobre cada etapa do ciclo de criação — da ideia ao post publicado e otimizado.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="group bg-[#121212] border border-white/6 rounded-2xl p-6 hover:border-[#00E676]/25 hover:shadow-[0_0_25px_rgba(0,230,118,0.06)] transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00E676]/10 border border-[#00E676]/15 flex items-center justify-center mb-4 group-hover:bg-[#00E676]/20 group-hover:border-[#00E676]/30 transition-all">
                  {Icon && <Icon className="w-4.5 h-4.5 text-[#00E676]" />}
                </div>
                <h3 className="text-sm font-semibold text-white mb-2 font-poppins">{feature.title}</h3>
                <p className="text-xs text-[#9E9E9E] leading-relaxed font-inter">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

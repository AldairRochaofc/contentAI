"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check } from "lucide-react";

const withoutAI = [
  "Publica e torce para performar",
  "Descobre o problema depois que o vídeo vai mal",
  "Horas revisando roteiro manualmente",
  "Copy repetitiva sem variações testadas",
  "Sem referência de onde o público abandona",
  "Dependência total de feeling e intuição",
  "Hooks escritos no escuro",
  "Sem dados para decisões de edição",
];

const withAI = [
  "Analisa e otimiza antes de publicar",
  "Prevê queda de retenção antes do upload",
  "Roteiro revisado em segundos pela IA",
  "Múltiplas variações de copy geradas",
  "Gráfico de retenção previsto com precisão",
  "Decisões baseadas em dados reais de performance",
  "Hook score calculado e aprimorado automaticamente",
  "Sugestões precisas de cortes e timing",
];

export default function Comparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/20 to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold text-[#00E676] uppercase tracking-widest font-inter">Comparação</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white font-poppins">
            Criação com dados <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] to-[#00FF9D]">vs.</span> no escuro
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Without */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-[#121212] border border-white/6 rounded-2xl p-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-white/8 flex items-center justify-center">
                <X className="w-4 h-4 text-[#9E9E9E]" />
              </div>
              <h3 className="font-semibold text-[#9E9E9E] font-poppins">Criar conteúdo no escuro</h3>
            </div>
            <div className="flex flex-col gap-3">
              {withoutAI.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-[#FF6B6B] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#9E9E9E] font-inter">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* With AI */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-[#121212] border border-[#00E676]/20 rounded-2xl p-7 relative overflow-hidden shadow-[0_0_30px_rgba(0,230,118,0.05)]"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#00E676]/5 blur-[60px] rounded-full pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#00E676]/15 flex items-center justify-center">
                <Check className="w-4 h-4 text-[#00E676]" />
              </div>
              <h3 className="font-semibold text-white font-poppins">
                Criar com <span className="text-[#00E676]">IA orientada por dados</span>
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              {withAI.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#00E676] shrink-0 mt-0.5" />
                  <span className="text-sm text-white font-inter">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

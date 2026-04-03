"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cta" ref={ref} className="py-24 relative overflow-hidden">
      {/* Strong glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-[#00E676]/8 blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-[#121212] border border-[#00E676]/20 rounded-3xl p-10 sm:p-14 relative overflow-hidden shadow-[0_0_60px_rgba(0,230,118,0.08)]"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-14 bg-gradient-to-b from-[#00E676]/60 to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#00E676]/60 to-transparent" />

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00E676] to-[#00C853] flex items-center justify-center mx-auto mb-6 shadow-[0_0_24px_rgba(0,230,118,0.4)]">
            <Sparkles className="w-6 h-6 text-black" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-poppins">
            Pare de criar conteúdo
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] via-[#00FF9D] to-[#00C853]">sem saber o que vai performar.</span>
          </h2>

          <p className="text-[#9E9E9E] mb-8 text-sm sm:text-base font-inter max-w-lg mx-auto">
            Comece hoje. Grátis. Sem cartão de crédito. Veja o que a IA encontra no seu próximo conteúdo em menos de 60 segundos.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-black text-base bg-gradient-to-r from-[#00E676] to-[#00C853] hover:shadow-[0_0_40px_rgba(0,230,118,0.4)] transition-all duration-300 hover:scale-[1.02] font-inter"
            >
              Começar grátis agora
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium text-white text-base border border-white/10 hover:border-[#00E676]/30 hover:bg-white/5 transition-all duration-300 font-inter"
            >
              Ver planos
            </a>
          </div>

          <p className="mt-5 text-[10px] text-[#9E9E9E] font-inter">
            Grátis para sempre no plano básico · Upgrade quando quiser
          </p>
        </motion.div>
      </div>
    </section>
  );
}

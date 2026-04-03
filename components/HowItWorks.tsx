"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { steps } from "@/lib/data";
import { Link2, BarChart3, Wand2, Rocket } from "lucide-react";

const stepIcons = [Link2, BarChart3, Wand2, Rocket];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#00E676]/3 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-[#00E676] uppercase tracking-widest font-inter">Como funciona</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white font-poppins">
            Do rascunho ao conteúdo publicado
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] to-[#00FF9D]">em 4 passos simples</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* Connector line */}
          <div className="absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#00E676]/20 to-transparent hidden lg:block" />

          {steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="group relative bg-[#121212] border border-white/6 rounded-2xl p-6 hover:border-[#00E676]/25 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,230,118,0.07)]"
              >
                <div className="absolute -top-3 left-6 text-[10px] font-bold text-[#00E676] bg-[#0A0A0A] border border-[#00E676]/30 px-2 py-1 rounded-full font-inter">
                  {step.number}
                </div>
                <div className="w-11 h-11 rounded-xl bg-[#00E676]/10 border border-[#00E676]/20 flex items-center justify-center mb-5 group-hover:bg-[#00E676]/15 transition-colors mt-2">
                  <Icon className="w-5 h-5 text-[#00E676]" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2 font-poppins">{step.title}</h3>
                <p className="text-sm text-[#9E9E9E] leading-relaxed font-inter">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

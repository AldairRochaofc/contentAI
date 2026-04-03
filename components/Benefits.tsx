"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { benefits } from "@/lib/data";

export default function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-[#00E676] uppercase tracking-widest font-inter">Impacto real</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white font-poppins">
            O que muda quando você
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] to-[#00FF9D]">para de criar no escuro</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`flex flex-col ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} gap-6 bg-[#121212] border border-white/6 rounded-2xl p-6 sm:p-8 hover:border-[#00E676]/20 transition-all duration-300 items-center group`}
            >
              {/* Text */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2 font-poppins group-hover:text-[#00E676] transition-colors">{benefit.title}</h3>
                <p className="text-[#9E9E9E] leading-relaxed font-inter text-sm sm:text-base">{benefit.description}</p>
              </div>

              {/* Metric */}
              <div className="shrink-0 text-center bg-[#0A0A0A] rounded-2xl px-8 py-6 border border-[#00E676]/15 group-hover:border-[#00E676]/30 transition-colors">
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] to-[#00FF9D] font-poppins">{benefit.metric}</p>
                <p className="text-xs text-[#9E9E9E] mt-1 font-inter">{benefit.metricLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

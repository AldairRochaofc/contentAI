"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Zap, Brain, Video } from "lucide-react";

const badges = [
  { icon: Brain, label: "IA Generativa" },
  { icon: TrendingUp, label: "Análise de Retenção" },
  { icon: Video, label: "Hook Score" },
  { icon: Zap, label: "Copy Automática" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#00E676]/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#00C853]/4 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="flex flex-col gap-6">
            {/* Badges */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-2"
            >
              {badges.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 text-xs font-medium text-[#00E676] bg-[#00E676]/10 border border-[#00E676]/20 px-3 py-1.5 rounded-full"
                >
                  <Icon className="w-3 h-3" />
                  {label}
                </span>
              ))}
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight font-poppins"
            >
              Seu conteúdo
              <br />
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] via-[#00FF9D] to-[#00C853]">
                  vende ou some.
                </span>
              </span>
              <br />
              A IA decide.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-base sm:text-lg text-[#9E9E9E] leading-relaxed max-w-lg font-inter"
            >
              Analise hooks, preveja quedas de retenção, gere títulos, legendas, CTAs e variações de roteiro — tudo com IA orientada por dados reais de performance.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#cta"
                className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-black text-sm bg-gradient-to-r from-[#00E676] to-[#00C853] hover:shadow-[0_0_30px_rgba(0,230,118,0.35)] transition-all duration-300 hover:scale-[1.02] font-inter"
              >
                Começar agora — é grátis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <button className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-white text-sm border border-white/10 hover:border-[#00E676]/30 hover:bg-white/5 transition-all duration-300 font-inter">
                <Play className="w-4 h-4 text-[#00E676]" />
                Ver demo
              </button>
            </motion.div>

            {/* Social proof mini */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center gap-3 pt-2"
            >
              <div className="flex -space-x-2">
                {["A", "B", "C", "D"].map((l) => (
                  <div key={l} className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00E676]/40 to-[#00C853]/40 border-2 border-[#0A0A0A] flex items-center justify-center text-xs font-bold text-[#00E676]">
                    {l}
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#9E9E9E] font-inter">
                <span className="text-white font-medium">+10.000 criadores</span> já usam
              </p>
            </motion.div>
          </div>

          {/* Right — Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              {/* Main card */}
              <div className="bg-[#121212] border border-white/8 rounded-2xl overflow-hidden shadow-2xl">
                {/* Top bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  <div className="flex-1 mx-4 bg-white/5 rounded-md h-5 flex items-center px-3">
                    <span className="text-[10px] text-[#9E9E9E]">contentai.app/analyze</span>
                  </div>
                </div>

                <div className="flex">
                  {/* Sidebar */}
                  <div className="w-44 border-r border-white/5 p-3 flex flex-col gap-1 hidden sm:flex">
                    {["Dashboard", "Análise", "Roteiro", "Copy", "Variações"].map((item, i) => (
                      <div
                        key={item}
                        className={`px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2 ${
                          i === 1
                            ? "bg-[#00E676]/15 text-[#00E676]"
                            : "text-[#9E9E9E] hover:text-white"
                        }`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${i === 1 ? "bg-[#00E676]" : "bg-white/20"}`} />
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Main content */}
                  <div className="flex-1 p-4 flex flex-col gap-3">
                    {/* Hook score */}
                    <div className="bg-[#0A0A0A] rounded-xl p-4 border border-white/5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-[#9E9E9E] font-medium">Hook Score</span>
                        <span className="text-xs font-bold text-[#00E676] bg-[#00E676]/10 px-2 py-0.5 rounded-full">92/100</span>
                      </div>
                      <div className="flex gap-1.5">
                        {[90, 75, 92, 60, 85, 88, 70].map((v, i) => (
                          <div key={i} className="flex-1 flex flex-col justify-end" style={{ height: 40 }}>
                            <div
                              className="rounded-sm w-full"
                              style={{
                                height: `${v}%`,
                                background: v > 80 ? "linear-gradient(to top, #00C853, #00E676)" : "rgba(255,255,255,0.1)",
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Retention curve */}
                    <div className="bg-[#0A0A0A] rounded-xl p-4 border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-[#9E9E9E]">Previsão de retenção</span>
                        <span className="text-xs text-[#00E676]">▲ +34%</span>
                      </div>
                      <svg viewBox="0 0 200 50" className="w-full h-10">
                        <defs>
                          <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#00E676" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#00E676" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d="M0,10 C20,8 40,15 60,20 C80,25 90,30 110,28 C130,26 150,20 180,18 L200,16 L200,50 L0,50Z" fill="url(#grad)" />
                        <path d="M0,10 C20,8 40,15 60,20 C80,25 90,30 110,28 C130,26 150,20 180,18 L200,16" fill="none" stroke="#00E676" strokeWidth="1.5" />
                      </svg>
                    </div>

                    {/* Suggestions */}
                    <div className="flex flex-col gap-2">
                      {[
                        { label: "Cortar 0:42–0:58", type: "Corte" },
                        { label: "Adicionar texto CTA no 1:20", type: "Texto" },
                      ].map((s) => (
                        <div key={s.label} className="flex items-center gap-2 bg-[#0A0A0A] rounded-lg px-3 py-2 border border-white/5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00E676] shrink-0" />
                          <span className="text-xs text-white flex-1">{s.label}</span>
                          <span className="text-[10px] text-[#00E676] bg-[#00E676]/10 px-1.5 py-0.5 rounded">{s.type}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-6 bg-[#121212] border border-[#00E676]/20 rounded-xl p-3 shadow-xl shadow-black/50 hidden md:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#00E676]/15 flex items-center justify-center">
                  <TrendingUp className="w-3.5 h-3.5 text-[#00E676]" />
                </div>
                <div>
                  <p className="text-[10px] text-[#9E9E9E]">Retenção média</p>
                  <p className="text-sm font-bold text-white">+3.2×</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-4 bg-[#121212] border border-[#00E676]/20 rounded-xl p-3 shadow-xl shadow-black/50 hidden md:block"
            >
              <div className="text-center">
                <p className="text-lg font-bold text-[#00E676] font-poppins">92</p>
                <p className="text-[10px] text-[#9E9E9E]">Hook Score</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, AlertCircle, CheckCircle2, Scissors, Type, Hash } from "lucide-react";

const suggestions = [
  { icon: Scissors, text: "Cortar trecho de 0:42 a 0:58 — baixa energia", tag: "Corte", color: "#FF6B6B" },
  { icon: Type, text: "Inserir texto de ênfase no 1:20", tag: "On-Screen", color: "#00E676" },
  { icon: Hash, text: "Hashtags: #criação #videomarketing #retenção", tag: "Copy", color: "#4FC3F7" },
  { icon: CheckCircle2, text: "Hook aprovado — score 92/100", tag: "Hook", color: "#00E676" },
];

export default function Dashboard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00E676]/3 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold text-[#00E676] uppercase tracking-widest font-inter">Painel de análise</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white font-poppins">
            Inteligência visual em
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] to-[#00FF9D]">cada detalhe do conteúdo</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="bg-[#121212] border border-white/8 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.6)]"
        >
          {/* Titlebar */}
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/5 bg-[#0D0D0D]">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            <div className="flex-1 flex items-center justify-center">
              <span className="text-xs text-[#9E9E9E] font-inter">ContentAI — Análise de Conteúdo</span>
            </div>
          </div>

          <div className="flex min-h-[500px]">
            {/* Sidebar */}
            <div className="w-52 border-r border-white/5 bg-[#0D0D0D] p-4 flex-col gap-1 hidden md:flex">
              <p className="text-[10px] text-[#9E9E9E] uppercase tracking-wider mb-3 font-inter px-2">Workspace</p>
              {["Dashboard", "Análise de Hook", "Retenção", "Sugestões", "Geração de Copy", "Variações"].map((item, i) => (
                <div
                  key={item}
                  className={`px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2.5 font-inter cursor-default ${
                    i === 1 ? "bg-[#00E676]/15 text-[#00E676]" : "text-[#9E9E9E] hover:bg-white/5 hover:text-white"
                  } transition-colors`}
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${i === 1 ? "bg-[#00E676]" : "bg-white/15"}`} />
                  {item}
                </div>
              ))}

              <div className="mt-auto pt-4 border-t border-white/5">
                <div className="bg-[#00E676]/10 border border-[#00E676]/20 rounded-xl p-3">
                  <p className="text-[10px] text-[#00E676] font-semibold mb-1 font-inter">Créditos de IA</p>
                  <div className="w-full bg-white/10 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-[#00E676] to-[#00C853] h-1.5 rounded-full" style={{ width: "72%" }} />
                  </div>
                  <p className="text-[10px] text-[#9E9E9E] mt-1 font-inter">720 / 1000</p>
                </div>
              </div>
            </div>

            {/* Main */}
            <div className="flex-1 p-6 flex flex-col gap-5">
              {/* Top metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { label: "Hook Score", value: "92", unit: "/100", color: "#00E676", up: true },
                  { label: "Retenção Prevista", value: "78", unit: "%", color: "#00E676", up: true },
                  { label: "Sugestões", value: "12", unit: "", color: "#4FC3F7", up: false },
                  { label: "Pontos Críticos", value: "3", unit: "", color: "#FF6B6B", up: false },
                ].map((m) => (
                  <div key={m.label} className="bg-[#0A0A0A] rounded-xl p-4 border border-white/5">
                    <p className="text-[10px] text-[#9E9E9E] mb-1 font-inter">{m.label}</p>
                    <p className="text-2xl font-bold font-poppins" style={{ color: m.color }}>
                      {m.value}<span className="text-xs font-normal text-[#9E9E9E]">{m.unit}</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* Chart + Suggestions */}
              <div className="grid lg:grid-cols-2 gap-4 flex-1">
                {/* Retention chart */}
                <div className="bg-[#0A0A0A] rounded-xl p-5 border border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-white font-poppins">Curva de Retenção</p>
                    <div className="flex items-center gap-1.5 text-xs text-[#00E676] font-inter">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Otimizado
                    </div>
                  </div>
                  <div className="relative h-32">
                    <svg viewBox="0 0 300 100" className="w-full h-full">
                      <defs>
                        <linearGradient id="retGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00E676" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#00E676" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="retGradOld" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#9E9E9E" stopOpacity="0.1" />
                          <stop offset="100%" stopColor="#9E9E9E" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {/* Old line */}
                      <path d="M0,20 C30,22 60,35 100,55 C140,70 180,80 240,85 L300,88 L300,100 L0,100Z" fill="url(#retGradOld)" />
                      <path d="M0,20 C30,22 60,35 100,55 C140,70 180,80 240,85 L300,88" fill="none" stroke="#9E9E9E" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
                      {/* New line */}
                      <path d="M0,20 C30,18 60,22 100,28 C140,34 180,30 240,25 L300,22 L300,100 L0,100Z" fill="url(#retGrad)" />
                      <path d="M0,20 C30,18 60,22 100,28 C140,34 180,30 240,25 L300,22" fill="none" stroke="#00E676" strokeWidth="2" />
                      {/* Labels */}
                      <text x="5" y="96" fontSize="8" fill="#9E9E9E">0s</text>
                      <text x="145" y="96" fontSize="8" fill="#9E9E9E">1min</text>
                      <text x="280" y="96" fontSize="8" fill="#9E9E9E">2min</text>
                    </svg>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <div className="flex items-center gap-1.5 text-[10px] text-[#9E9E9E] font-inter">
                      <div className="w-4 h-px bg-[#9E9E9E] opacity-40" style={{ borderStyle: "dashed", borderTopWidth: 1 }} />
                      Antes
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-[#00E676] font-inter">
                      <div className="w-4 h-0.5 bg-[#00E676]" />
                      Depois da IA
                    </div>
                  </div>
                </div>

                {/* Suggestions list */}
                <div className="bg-[#0A0A0A] rounded-xl p-5 border border-white/5 flex flex-col gap-3">
                  <p className="text-sm font-semibold text-white font-poppins mb-1">Sugestões da IA</p>
                  {suggestions.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/3 border border-white/5 hover:border-[#00E676]/20 transition-colors">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${s.color}15` }}>
                          <Icon className="w-3.5 h-3.5" style={{ color: s.color }} />
                        </div>
                        <p className="text-xs text-[#9E9E9E] flex-1 font-inter leading-relaxed">{s.text}</p>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded font-inter shrink-0" style={{ color: s.color, background: `${s.color}15` }}>
                          {s.tag}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Generated copy */}
              <div className="bg-[#0A0A0A] rounded-xl p-5 border border-white/5">
                <p className="text-sm font-semibold text-white font-poppins mb-3">Copy Gerada pela IA</p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { label: "Título", content: "Como eu tripliquei minha retenção em 30 dias (método passo a passo)" },
                    { label: "CTA", content: "Ative as notificações e receba o método completo gratuitamente." },
                    { label: "Hashtags", content: "#criadores #videomarketing #retenção #conteúdo #crescimento" },
                  ].map((c) => (
                    <div key={c.label} className="bg-[#121212] rounded-lg p-3 border border-white/5">
                      <p className="text-[10px] text-[#00E676] font-semibold mb-1.5 font-inter uppercase tracking-wider">{c.label}</p>
                      <p className="text-xs text-[#9E9E9E] font-inter leading-relaxed">{c.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

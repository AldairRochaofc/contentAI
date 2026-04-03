"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { stats } from "@/lib/data";

const logos = ["Creators Co.", "Studio Digital", "Wave Media", "Peak Agency", "Neon Films", "Orbit Studio"];

export default function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 border-y border-white/5 relative overflow-hidden" id="results">
      <div className="absolute inset-0 bg-[#121212]/40" />
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] to-[#00FF9D] font-poppins mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-[#9E9E9E] font-inter">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Logo strip */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-xs text-[#9E9E9E] uppercase tracking-widest font-inter">Usado por criadores e agências que levam performance a sério</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {logos.map((logo, i) => (
              <motion.span
                key={logo}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 0.4 } : {}}
                transition={{ delay: 0.3 + i * 0.07 }}
                whileHover={{ opacity: 0.9 }}
                className="text-white font-semibold text-sm cursor-default transition-opacity font-poppins"
              >
                {logo}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

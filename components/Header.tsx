"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00E676] to-[#00C853] flex items-center justify-center shadow-[0_0_16px_rgba(0,230,118,0.4)] group-hover:shadow-[0_0_24px_rgba(0,230,118,0.6)] transition-shadow duration-300">
            <Sparkles className="w-4 h-4 text-black" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-white text-lg tracking-tight font-poppins">
            content<span className="text-[#00E676]">AI</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#9E9E9E] hover:text-white transition-colors duration-200 font-inter"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-[#9E9E9E] hover:text-white transition-colors duration-200 px-4 py-2 font-inter">
            Entrar
          </a>
          <a
            href="#cta"
            className="text-sm font-semibold text-black px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00E676] to-[#00C853] hover:shadow-[0_0_20px_rgba(0,230,118,0.4)] transition-all duration-300 hover:scale-[1.02] font-inter"
          >
            Começar grátis
          </a>
        </div>

        <button className="md:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#121212]/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-[#9E9E9E] hover:text-white transition-colors text-sm py-1" onClick={() => setMobileOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#cta" className="mt-2 text-center text-sm font-semibold text-black px-5 py-3 rounded-xl bg-gradient-to-r from-[#00E676] to-[#00C853]" onClick={() => setMobileOpen(false)}>
              Começar grátis
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

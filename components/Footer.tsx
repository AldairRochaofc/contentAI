"use client";

import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#00E676] to-[#00C853] flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-black" strokeWidth={2.5} />
            </div>
            <span className="font-bold text-white text-base font-poppins">
              content<span className="text-[#00E676]">AI</span>
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {["Funcionalidades", "Como funciona", "Preços", "Blog"].map((item) => (
              <a key={item} href="#" className="text-xs text-[#9E9E9E] hover:text-white transition-colors font-inter">
                {item}
              </a>
            ))}
          </nav>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {["Privacidade", "Termos de uso", "Contato"].map((item) => (
              <a key={item} href="#" className="text-xs text-[#9E9E9E] hover:text-white transition-colors font-inter">
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#9E9E9E] font-inter">© 2025 ContentAI. Todos os direitos reservados.</p>
          <p className="text-xs text-[#9E9E9E] font-inter">Feito com IA · Para criadores de conteúdo</p>
        </div>
      </div>
    </footer>
  );
}

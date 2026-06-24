"use client";

import React, { useRef } from "react";

export default function IntermediateCTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 px-6 bg-[#02050D] relative">
      <div
        ref={containerRef}
        className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-[#0d0a04] via-[#B98820]/40 to-[#0d0a04] border border-[#B98820]/60 p-10 md:py-24 md:px-16 text-center relative overflow-hidden shadow-2xl shadow-[#B98820]/10"
      >
        {/* Background glow effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(185,136,32,0.3) 0%, transparent 70%)' }} />

        {/* --- Left Mockup Widget --- */}
        <div className="absolute -left-12 md:left-[-5%] top-[10%] w-64 md:w-80 h-[300px] md:h-[350px] bg-[#0A0F18] rounded-2xl shadow-2xl rotate-[-8deg] border border-[#B98820]/30 p-5 hidden lg:flex flex-col transition-transform duration-700 hover:rotate-[-5deg] hover:scale-105 z-10">
          <h4 className="text-white/80 font-semibold text-sm mb-6 text-left">Statistiques temps réel</h4>
          <div className="flex items-end gap-2 h-40 mt-auto border-b border-white/10 pb-2">
            <div className="flex-1 bg-[#B98820] h-[60%] rounded-t-sm"></div>
            <div className="flex-1 bg-white/60 h-[40%] rounded-t-sm"></div>
            <div className="flex-1 bg-[#E3C687] h-[80%] rounded-t-sm"></div>
            <div className="flex-1 bg-white/60 h-[50%] rounded-t-sm"></div>
            <div className="flex-1 bg-[#B98820] h-[90%] rounded-t-sm"></div>
            <div className="flex-1 bg-white/60 h-[30%] rounded-t-sm"></div>
          </div>
          <div className="flex justify-between mt-3 text-[10px] text-white/40">
            <span>Avril</span>
            <span>Mai</span>
            <span>Juin</span>
          </div>
        </div>

        {/* --- Right Mockup Widget --- */}
        <div className="absolute -right-12 md:right-[-5%] top-[15%] w-64 md:w-80 h-[300px] md:h-[350px] bg-[#0A0F18] rounded-2xl shadow-2xl rotate-[12deg] border border-[#B98820]/30 p-6 hidden lg:flex flex-col transition-transform duration-700 hover:rotate-[8deg] hover:scale-105 z-10">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-white/80 font-semibold text-sm">Dossiers traités</h4>
            <div className="w-6 h-6 rounded-full bg-[#B98820]/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#B98820]"></div>
            </div>
          </div>
          
          <div className="relative w-40 h-40 mx-auto mt-4">
            {/* Fake Donut Chart */}
            <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
              <path
                className="text-white/10"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="text-[#B98820]"
                strokeDasharray="75, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-black text-white">1,245</span>
              <span className="text-[10px] text-white/50 uppercase tracking-widest mt-1">Succès</span>
            </div>
          </div>
        </div>

        {/* --- Center Content --- */}
        <div className="relative z-20 max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight drop-shadow-sm">
            Prenez le contrôle et faites valoir vos droits
          </h2>
          <p className="text-white/90 font-medium mb-10 text-lg md:text-xl max-w-xl">
            Votre mémoire juridique, prêt à être utilisé pour défendre votre cause. Nous structurons votre dossier pour des résultats concrets.
          </p>
          
          <button
            onClick={scrollToForm}
            className="group relative flex items-center justify-center gap-3 px-10 py-5 rounded-full text-sm font-bold uppercase tracking-wider text-black bg-[#B98820] hover:bg-[#B98820]/90 transition-all duration-300 w-full sm:w-auto shadow-xl shadow-[#B98820]/20 cursor-pointer hover:scale-105"
          >
            Démarrer le processus
          </button>
        </div>
      </div>
    </section>
  );
}

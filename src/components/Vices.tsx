"use client";

import React, { useRef } from "react";
import { AlertOctagon, ChevronRight } from "lucide-react";

const vicesList = [
  "Devoir de vigilance de l’organisme de crédit",
  "Information précontractuelle insuffisante ou trompeuse",
  "Vérification insuffisante des informations fournies",
  "Autres crédits en cours non déclarés ou détectés",
  "Situation personnelle, familiale ou professionnelle cachée",
  "Antécédents de difficultés de remboursement ignorés",
  "Délai de rétractation non respecté",
  "Pratiques commerciales trompeuses ou agressives",
  "Usure du taux effectif global, TEG",
  "Absence ou irrégularité des mentions obligatoires",
  "Défaut d’évaluation du risque de surendettement",
  "Signalement et fichage abusifs"
];

export default function Vices() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="vices" ref={containerRef} className="py-24 px-6 bg-brand-bg relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Top Text Section */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-accent/20 bg-brand-accent/5 text-xs font-semibold text-brand-accent uppercase tracking-wider mb-6">
          <AlertOctagon size={16} /> Preuves & Vices de forme
        </div>
        
        <h2 className="text-3xl md:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-tight mb-6 max-w-4xl">
          Les vices qui peuvent <span className="text-brand-accent">annuler votre crédit</span>
        </h2>
        
        <p className="text-lg text-brand-text-secondary font-light leading-relaxed mb-16 max-w-2xl">
          Découvrez les manœuvres souvent utilisées par les organismes de crédit et les vendeurs. La présence de l'un de ces vices peut suffire à faire annuler votre engagement.
        </p>

        {/* 4-Column Grid of Vices */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-left">
          {vicesList.map((vice, idx) => (
            <div 
              key={idx} 
              className="vice-card w-full p-6 rounded-3xl bg-[#0D131F] border border-brand-border/30 hover:border-brand-accent/60 transition-all duration-300 flex flex-col group shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:bg-[#131A28] cursor-default"
            >
               <div className="flex justify-between items-center mb-6">
                 <span className="text-xs font-bold text-brand-accent/50 group-hover:text-brand-accent transition-colors">
                   VICE {(idx + 1).toString().padStart(2, '0')}
                 </span>
                 <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#02050D] border border-brand-border group-hover:border-brand-accent transition-colors">
                    <AlertOctagon size={16} className="text-brand-accent" />
                 </div>
               </div>
               <h3 className="text-base font-semibold text-white leading-snug group-hover:text-brand-accent transition-colors">
                 {vice}
               </h3>
               <p className="mt-auto pt-4 text-xs text-brand-text-secondary font-light">
                 Une faille potentielle dans votre contrat.
               </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button 
          onClick={scrollToForm}
          className="group relative flex items-center justify-center gap-3 px-10 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-black bg-brand-accent hover:bg-transparent hover:text-brand-accent border border-brand-accent transition-all duration-300 shadow-lg shadow-brand-accent/20 cursor-pointer w-full sm:w-auto"
        >
          Je souhaite annuler le crédit
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}

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

  const col1 = vicesList.slice(0, 6);
  const col2 = vicesList.slice(6, 12);

  return (
    <section id="vices" ref={containerRef} className="py-16 px-6 bg-brand-bg relative overflow-hidden">
      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(calc(-50% - 0.75rem)); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(calc(-50% - 0.75rem)); }
          100% { transform: translateY(0); }
        }
        .animate-scroll-up {
          animation: scroll-up 25s linear infinite;
        }
        .animate-scroll-down {
          animation: scroll-down 30s linear infinite;
        }
        .marquee-container:hover .animate-scroll-up,
        .marquee-container:hover .animate-scroll-down {
          animation-play-state: paused;
        }
        .mask-vertical {
          mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-center">
          
          {/* Left Side - Text & CTA */}
          <div className="w-full lg:w-5/12 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-accent/20 bg-brand-accent/5 text-xs font-semibold text-brand-accent uppercase tracking-wider mb-6">
              <AlertOctagon size={16} /> Preuves & Vices de forme
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-tight mb-6">
              Les vices qui peuvent <span className="text-brand-accent">annuler votre crédit</span>
            </h2>
            
            <p className="text-lg text-brand-text-secondary font-light leading-relaxed mb-10 max-w-lg">
              Découvrez les manœuvres souvent utilisées par les organismes de crédit et les vendeurs. La présence de l'un de ces vices peut suffire à faire annuler votre engagement.
            </p>

            <button 
              onClick={scrollToForm}
              className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-black bg-brand-accent hover:bg-transparent hover:text-brand-accent border border-brand-accent transition-all duration-300 shadow-lg shadow-brand-accent/20 cursor-pointer w-full sm:w-auto"
            >
              Je souhaite annuler le crédit
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Side - Scrolling Marquee */}
          <div className="w-full lg:w-7/12 h-[600px] overflow-hidden mask-vertical marquee-container relative flex gap-6 px-2 lg:px-8">
            
            {/* Column 1 - Scrolling UP */}
            <div className="w-1/2 flex flex-col gap-6 animate-scroll-up pt-12">
              {[...col1, ...col1].map((vice, idx) => (
                <div 
                  key={`col1-${idx}`} 
                  className="vice-card w-full p-6 rounded-3xl bg-brand-card/40 border border-brand-border/30 hover:border-brand-accent/60 transition-all duration-300 flex flex-col group shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:bg-brand-card/80 cursor-default"
                >
                   <div className="flex justify-between items-center mb-6">
                     <span className="text-xs font-bold text-brand-accent/50 group-hover:text-brand-accent transition-colors">
                       VICE {((idx % 6) + 1).toString().padStart(2, '0')}
                     </span>
                     <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-bg border border-brand-border group-hover:border-brand-accent transition-colors">
                        <AlertOctagon size={16} className="text-brand-accent" />
                     </div>
                   </div>
                   <h3 className="text-base font-semibold text-white leading-snug group-hover:text-brand-accent transition-colors">
                     {vice}
                   </h3>
                   <p className="mt-3 text-xs text-brand-text-secondary font-light">
                     Une faille potentielle dans votre contrat.
                   </p>
                </div>
              ))}
            </div>

            {/* Column 2 - Scrolling DOWN */}
            <div className="w-1/2 flex flex-col gap-6 animate-scroll-down pb-12">
              {[...col2, ...col2].map((vice, idx) => (
                <div 
                  key={`col2-${idx}`} 
                  className="vice-card w-full p-6 rounded-3xl bg-brand-card/40 border border-brand-border/30 hover:border-brand-accent/60 transition-all duration-300 flex flex-col group shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:bg-brand-card/80 cursor-default"
                >
                   <div className="flex justify-between items-center mb-6">
                     <span className="text-xs font-bold text-brand-accent/50 group-hover:text-brand-accent transition-colors">
                       VICE {((idx % 6) + 7).toString().padStart(2, '0')}
                     </span>
                     <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-bg border border-brand-border group-hover:border-brand-accent transition-colors">
                        <AlertOctagon size={16} className="text-brand-accent" />
                     </div>
                   </div>
                   <h3 className="text-base font-semibold text-white leading-snug group-hover:text-brand-accent transition-colors">
                     {vice}
                   </h3>
                   <p className="mt-3 text-xs text-brand-text-secondary font-light">
                     Une faille potentielle dans votre contrat.
                   </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useRef } from "react";
import { Upload, Check } from "lucide-react";

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      id: 1,
      title: "Décrivez votre situation",
      text: "Racontez votre histoire en détail pour que nous comprenions parfaitement votre cas."
    },
    {
      id: 2,
      title: "Fournissez vos justificatifs",
      text: "Téléchargez tous les documents et éléments qui appuient votre dossier (contrats, mails...)."
    },
    {
      id: 3,
      title: "Notre IA analyse le dossier",
      text: "Notre système détecte automatiquement s'il y a matière à agir en quelques secondes."
    },
    {
      id: 4,
      title: "Génération du mémoire",
      text: "Obtenez un mémoire juridique complet prêt à l'emploi pour dénoncer le contrat."
    }
  ];

  return (
    <section id="comment-ca-marche" ref={containerRef} className="py-16 px-6 bg-[#02050D] relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header matching the reference */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl lg:text-[44px] font-medium text-white tracking-tight leading-tight">
            Un processus simple, rapide et <br/>
            entièrement sécurisé.
          </h2>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="relative rounded-3xl p-[1px] bg-gradient-to-br from-brand-accent/30 via-white/10 to-white/10 group hover:from-brand-accent hover:via-white/10 hover:to-white/10 transition-all duration-700 overflow-hidden aspect-[3/4]"
            >
              {/* Subtle inner corner glow */}
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-brand-accent/30 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="bg-[#070A0F] rounded-[calc(1.5rem-1px)] h-full w-full flex flex-col p-6 relative overflow-hidden">
              
              {/* Text content */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-brand-text-secondary leading-relaxed font-light">{step.text}</p>
              </div>
              
              {/* Mockup Window */}
              <div className="mt-auto bg-[#131823] rounded-t-xl border border-white/5 border-b-0 mx-[-0.5rem] mb-[-1.5rem] h-48 relative flex flex-col shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
                {/* macOS dots */}
                <div className="flex gap-1.5 px-4 py-3 border-b border-white/5 bg-[#181E29] rounded-t-xl">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
                
                {/* Mockup Content Area */}
                <div className="flex-1 bg-[#0D121B] relative flex items-center justify-center p-4">
                  
                  {/* Step 1 Mockup: Chat/Message Box */}
                  {step.id === 1 && (
                    <div className="w-full max-w-[160px] bg-[#181E29] border border-white/5 rounded-lg p-3 shadow-lg">
                      <div className="text-[9px] text-white/40 mb-2 uppercase tracking-widest font-semibold">Message</div>
                      <div className="h-12 w-full bg-[#111827] rounded border border-white/5 flex flex-col gap-1 p-2">
                         <div className="h-1 w-3/4 bg-white/10 rounded-full" />
                         <div className="h-1 w-1/2 bg-white/10 rounded-full" />
                      </div>
                      <div className="mt-3 h-5 w-full bg-brand-accent rounded text-[9px] flex items-center justify-center text-black font-bold uppercase">Envoyer</div>
                    </div>
                  )}

                  {/* Step 2 Mockup: Upload Box */}
                  {step.id === 2 && (
                    <div className="w-[85%] h-[85%] border border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center gap-2 bg-white/5">
                       <div className="p-2 rounded-full bg-white/5">
                         <Upload size={16} className="text-brand-accent" />
                       </div>
                       <span className="text-[10px] text-white/40 font-medium">Glisser vos fichiers</span>
                    </div>
                  )}

                  {/* Step 3 Mockup: AI Analysis Chart */}
                  {step.id === 3 && (
                    <div className="w-full h-full flex items-end justify-center gap-1.5 px-2 pb-2">
                       {[30, 60, 40, 80, 50, 95].map((h, i) => (
                         <div key={i} className="w-4 bg-brand-accent/10 rounded-t-sm relative overflow-hidden group-hover:bg-brand-accent/20 transition-colors" style={{height: `${h}%`}}>
                           <div className="absolute bottom-0 w-full bg-brand-accent transition-all duration-1000 ease-in-out" style={{height: i % 2 === 0 ? '40%' : '70%'}} />
                         </div>
                       ))}
                    </div>
                  )}

                  {/* Step 4 Mockup: Document Generation */}
                  {step.id === 4 && (
                    <div className="w-24 h-32 bg-[#181E29] border border-white/10 rounded-md p-3 flex flex-col gap-2 shadow-2xl transform rotate-3 transition-transform duration-500 group-hover:rotate-0">
                       <div className="h-1.5 w-1/2 bg-brand-accent rounded-full mb-1" />
                       <div className="h-1 w-full bg-white/10 rounded-full" />
                       <div className="h-1 w-[90%] bg-white/10 rounded-full" />
                       <div className="h-1 w-full bg-white/10 rounded-full" />
                       <div className="h-1 w-[75%] bg-white/10 rounded-full" />
                       <div className="h-1 w-full bg-white/10 rounded-full" />
                       
                       <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-brand-accent rounded-full border-2 border-[#0D121B] flex items-center justify-center shadow-lg">
                         <Check size={12} className="text-black stroke-[3]" />
                       </div>
                    </div>
                  )}

                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

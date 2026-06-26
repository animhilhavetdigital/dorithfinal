"use client";

import React, { useRef } from "react";
import { ShieldCheck, ChevronRight } from "lucide-react";

export default function Intervention() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth" });
  };

  const images = [
    { src: "/intervention-2.png", alt: "Intervention étape" }
  ];

  return (
    <section id="intervention" ref={containerRef} className="py-16 px-6 relative bg-brand-bg overflow-hidden">
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <div className="fade-up-intervention inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-xs font-semibold text-brand-accent uppercase tracking-wider mb-6">
          <ShieldCheck size={16} /> Accompagnement & Sécurité
        </div>
        
        {/* Title */}
        <h2 className="fade-up-intervention text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight max-w-4xl">
          C’est là qu’on <span className="text-brand-accent">intervient !</span>
        </h2>
        
        {/* Subtitle */}
        <div className="fade-up-intervention space-y-3 text-brand-text-secondary text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-3xl mb-10">
          <p>Nous connaissons parfaitement les rouages de ces systèmes.</p>
          <p className="text-white font-semibold">Et non, il n’est jamais trop tard pour se défendre.</p>
          <p>Reprenez votre vie en main dès maintenant en démarrant le processus ici.</p>
        </div>
        
        {/* Primary CTA */}
        <button 
          onClick={scrollToForm}
          className="fade-up-intervention group relative flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-black bg-brand-accent hover:bg-transparent hover:text-brand-accent border border-brand-accent transition-all duration-300 shadow-lg shadow-brand-accent/20 cursor-pointer w-full sm:w-auto"
        >
          Je souhaite annuler le crédit, ne plus payer
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>

        {/* The Image Card */}
        <div className="fade-up-intervention mt-16 md:mt-20 w-full max-w-3xl mx-auto">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="relative p-2 md:p-3 rounded-3xl bg-brand-card border border-brand-border backdrop-blur-sm group hover:-translate-y-2 hover:border-brand-accent/50 transition-all duration-500 shadow-2xl shadow-black/50"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full border border-brand-border/30 bg-black">
                <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

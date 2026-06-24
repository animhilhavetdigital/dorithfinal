"use client";

import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";


export default function IntermediateCTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <section className="py-16 px-6 bg-brand-bg relative">
      <div className="absolute inset-0 bg-radial-glow-section pointer-events-none" />
      <div
        ref={containerRef}
        className="max-w-5xl mx-auto rounded-3xl bg-brand-card/80 border border-brand-border/70 p-10 md:p-16 text-center relative overflow-hidden backdrop-blur-sm"
      >
        {/* Glow */}
        <div className="absolute -left-32 -top-32 w-96 h-96 bg-brand-accent/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
            Prenez le contrôle et faites valoir vos droits
          </h2>
          <p className="text-brand-text-secondary font-light mb-10 text-lg">
            Votre mémoire juridique, prêt à être utilisé pour défendre votre cause.
          </p>
          
          <button
            onClick={scrollToForm}
            className="group relative flex items-center justify-center gap-3 px-10 py-5 rounded-full text-sm font-bold uppercase tracking-wider text-black bg-brand-accent hover:bg-transparent hover:text-brand-accent border border-brand-accent transition-all duration-300 w-full md:w-auto shadow-lg shadow-brand-accent/20 cursor-pointer"
          >
            Démarrer le processus
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

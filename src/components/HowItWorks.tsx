"use client";

import React, { useState, useRef } from "react";
import { Check, Upload, Bot, FileText, Zap, Shield, Database, Lock, MessageSquare, Paperclip } from "lucide-react";

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: "Situation",
      icon: <MessageSquare size={16} />,
      title: "Racontez-nous votre histoire.",
      text: "Décrivez votre situation en détail pour que nous comprenions parfaitement les enjeux de votre cas.",
      checks: [
        "Formulaire guidé et interactif.",
        "Confidentialité absolue de vos données.",
        "Sans engagement pour démarrer."
      ],
      mockup: (
        <img 
          src="/how-1.png" 
          alt="Situation" 
          className="absolute inset-0 w-full h-full object-cover animate-in fade-in duration-700" 
        />
      )
    },
    {
      id: 1,
      label: "Justificatifs",
      icon: <Upload size={16} />,
      title: "Fournissez vos documents en toute sécurité.",
      text: "Téléchargez tous les éléments qui appuient votre dossier (contrats, correspondances, relevés).",
      checks: [
        "Téléversement simple par glisser-déposer.",
        "Prise en charge sécurisée de multiples formats.",
        "Données chiffrées de bout en bout."
      ],
      mockup: (
        <img 
          src="/how-2.png" 
          alt="Justificatifs" 
          className="absolute inset-0 w-full h-full object-cover animate-in fade-in duration-700" 
        />
      )
    },
    {
      id: 2,
      label: "Analyse IA",
      icon: <Bot size={16} />,
      title: "Détection automatique des vices de forme.",
      text: "Notre algorithme identifie les risques, les failles et les opportunités de nullité dans vos contrats.",
      checks: [
        "Détection des irrégularités cachées.",
        "Conseils personnalisés immédiats.",
        "Analyse de conformité au Code de la consommation."
      ],
      mockup: (
        <img 
          src="/how-3.png" 
          alt="Analyse IA" 
          className="absolute inset-0 w-full h-full object-cover animate-in fade-in duration-700" 
        />
      )
    },
    {
      id: 3,
      label: "Mémoire Juridique",
      icon: <FileText size={16} />,
      title: "Votre dossier prêt à l'emploi.",
      text: "De l'analyse à la rédaction, nous générons un mémoire structuré et exploitable juridiquement.",
      checks: [
        "Mémoire juridique structuré et complet.",
        "Chronologie détaillée et ordonnée des faits.",
        "Prêt à être envoyé aux parties concernées."
      ],
      mockup: (
        <img 
          src="/how-4.png" 
          alt="Mémoire Juridique" 
          className="absolute inset-0 w-full h-full object-cover animate-in fade-in duration-700" 
        />
      )
    }
  ];

  return (
    <section id="comment-ca-marche" ref={containerRef} className="py-16 px-6 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-5xl lg:text-[44px] font-medium text-white tracking-tight leading-tight">
          Un processus simple, rapide et <br/>
          entièrement sécurisé.
        </h2>
      </div>

      <div className="max-w-6xl mx-auto">
        
        {/* Navigation Tabs (Pill style) */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-brand-card/40 border border-white/5 rounded-2xl md:rounded-full mb-8 relative z-20 mx-auto max-w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center gap-2 px-4 md:px-6 py-3 rounded-xl md:rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-white/10 text-white shadow-md border border-white/10"
                  : "text-white/40 hover:text-white hover:bg-white/5 border border-transparent"
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Main Content Card */}
        <div className="relative w-full rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-brand-card via-brand-bg to-brand-bg border border-white/5 shadow-2xl overflow-hidden min-h-[500px] flex flex-col md:flex-row">
          
          {/* Subtle background glow mimicking the reference image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />

          {/* Left Column (Text content) */}
          <div className="w-full md:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center relative z-10 border-b md:border-b-0 md:border-r border-white/5">
            <div key={activeTab} className="animate-in fade-in slide-in-from-left-4 duration-500">
              <h3 className="text-3xl md:text-4xl font-medium text-white mb-6 leading-tight tracking-tight">
                {tabs[activeTab].title}
              </h3>
              <p className="text-white/50 text-sm md:text-base mb-10 leading-relaxed font-light">
                {tabs[activeTab].text}
              </p>
              
              <ul className="space-y-4">
                {tabs[activeTab].checks.map((check, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5 border border-white/10">
                      <Check className="w-3 h-3 text-brand-sage" />
                    </div>
                    <span className="text-sm text-white/70 font-light leading-relaxed">{check}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column (Mockup View) */}
          <div className="w-full md:w-1/2 relative bg-brand-bg/50 overflow-hidden min-h-[400px]">
            {/* The active mockup */}
            <div key={`mockup-${activeTab}`} className="absolute inset-0">
              {tabs[activeTab].mockup}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

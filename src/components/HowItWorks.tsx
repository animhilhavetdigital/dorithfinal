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
        <div className="relative w-full h-full flex items-center justify-center p-6 animate-in fade-in slide-in-from-right-8 duration-700">
          <div className="w-[85%] max-w-[320px] bg-[#0D121B] border border-white/10 rounded-2xl p-6 shadow-2xl relative z-10 flex flex-col h-[280px]">
            <h3 className="text-white font-semibold mb-1">Décrire votre cas</h3>
            <p className="text-white/40 text-xs mb-4">Soyez le plus précis possible</p>
            
            <div className="flex-1 bg-[#070A0F] border border-white/5 rounded-xl p-3 relative flex flex-col gap-2">
              <div className="w-3/4 h-2 bg-white/10 rounded-full"></div>
              <div className="w-full h-2 bg-white/10 rounded-full"></div>
              <div className="w-5/6 h-2 bg-white/10 rounded-full"></div>
              <div className="w-1/2 h-2 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-3 right-3">
                 <div className="w-6 h-6 rounded-full bg-[#B98820]/20 flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[4px] border-l-white/60 border-y-[3px] border-y-transparent border-r-0 ml-0.5"></div>
                 </div>
              </div>
            </div>
            
            <button className="w-full mt-4 py-3 rounded-xl bg-white text-black font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Étape suivante
            </button>
          </div>
        </div>
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
        <div className="relative w-full h-full flex items-center justify-center p-6 animate-in fade-in slide-in-from-right-8 duration-700">
          <div className="w-[85%] max-w-[320px] bg-[#0D121B] border border-white/10 rounded-2xl p-6 shadow-2xl relative z-10">
            <h3 className="text-white font-semibold mb-1">Documents requis</h3>
            <p className="text-white/40 text-xs mb-4">Formats acceptés : PDF, JPG, PNG</p>
            
            <div className="w-full h-32 border-2 border-dashed border-[#B98820]/30 rounded-xl flex flex-col items-center justify-center gap-3 bg-[#B98820]/5 hover:bg-[#B98820]/10 transition-colors cursor-pointer mb-4">
               <div className="p-3 rounded-full bg-[#B98820]/20">
                 <Upload size={20} className="text-[#B98820]" />
               </div>
               <span className="text-xs text-white/50 font-medium">Glisser vos fichiers ici</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-[#070A0F] border border-white/5 rounded-lg">
              <div className="flex items-center gap-3">
                <Paperclip size={14} className="text-white/40" />
                <span className="text-xs text-white/80">Contrat_signé.pdf</span>
              </div>
              <Check size={14} className="text-green-500" />
            </div>
          </div>
        </div>
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
        <div className="relative w-full h-full flex flex-col justify-center p-6 animate-in fade-in slide-in-from-right-8 duration-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white text-xl font-light">Analyse en cours</h3>
          </div>
          
          <div className="w-full bg-[#0D121B] border border-white/10 rounded-2xl p-5 shadow-2xl relative overflow-hidden">
            <h4 className="text-white text-sm font-semibold mb-1 relative z-10">AI Legal Manager</h4>
            <p className="text-white/40 text-xs mb-6 relative z-10">Analyse de la conformité de vos contrats en temps réel.</p>
            
            <div className="relative w-full h-32 flex items-center justify-center">
               {/* Abstract Topography/Wave lines */}
               {[...Array(5)].map((_, i) => (
                 <div 
                   key={i} 
                   className="absolute rounded-full border border-[#B98820]/30 opacity-50"
                   style={{
                     width: `${(i + 1) * 20}%`,
                     height: `${(i + 1) * 40}%`,
                     animation: `pulse ${2 + i}s infinite alternate`
                   }}
                 />
               ))}
               <Bot className="text-[#B98820] w-8 h-8 relative z-10" />
            </div>
            
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5 relative z-10">
              <span className="text-xs text-white/50">Voir les détails</span>
              <span className="text-white">&rarr;</span>
            </div>
          </div>
        </div>
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
        <div className="relative w-full h-full flex items-center justify-center p-6 animate-in fade-in slide-in-from-right-8 duration-700">
          <div className="w-[90%] max-w-[340px] bg-[#181C25] border border-[#B98820]/30 rounded-[2rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-white/50 text-[10px] uppercase tracking-widest mb-1">Score de viabilité</p>
                <div className="text-3xl font-light text-white">85<span className="text-lg text-white/30">/100</span></div>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#B98820]/10 flex items-center justify-center">
                <Shield className="text-[#B98820] w-5 h-5" />
              </div>
            </div>

            <div className="w-full h-24 bg-gradient-to-r from-[#B98820] to-[#E3C687] rounded-xl p-4 flex flex-col justify-between shadow-lg shadow-[#B98820]/20 mb-4">
               <div className="flex justify-between items-center">
                 <span className="text-black/60 text-xs font-semibold uppercase tracking-wider">Mémoire final</span>
                 <span className="flex gap-1">
                   <div className="w-1 h-1 rounded-full bg-black/40"></div>
                   <div className="w-1 h-1 rounded-full bg-black/40"></div>
                   <div className="w-1 h-1 rounded-full bg-black/40"></div>
                 </span>
               </div>
               <div className="text-black font-medium text-sm">Dossier_Client_Final.pdf</div>
            </div>

            <div className="space-y-2 mt-6">
              <div className="flex justify-between items-center text-xs">
                <span className="text-white/50">Irrégularités détectées</span>
                <span className="text-[#B98820] font-medium">3 majeures</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-white/50">Délai de traitement</span>
                <span className="text-white">Immédiat</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="comment-ca-marche" ref={containerRef} className="py-16 px-6 bg-[#02050D] relative">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-5xl lg:text-[44px] font-medium text-white tracking-tight leading-tight">
          Un processus simple, rapide et <br/>
          entièrement sécurisé.
        </h2>
      </div>

      <div className="max-w-6xl mx-auto">
        
        {/* Navigation Tabs (Pill style) */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#0D121B] border border-white/5 rounded-2xl md:rounded-full mb-8 relative z-20 mx-auto max-w-fit">
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
        <div className="relative w-full rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-[#120E1A] via-[#0B0910] to-[#07050A] border border-white/5 shadow-2xl overflow-hidden min-h-[500px] flex flex-col md:flex-row">
          
          {/* Subtle background glow mimicking the reference image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#B98820]/5 blur-[120px] rounded-full pointer-events-none" />

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
                      <Check className="w-3 h-3 text-[#B98820]" />
                    </div>
                    <span className="text-sm text-white/70 font-light leading-relaxed">{check}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column (Mockup View) */}
          <div className="w-full md:w-1/2 relative bg-[#07050A]/50 overflow-hidden min-h-[400px]">
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

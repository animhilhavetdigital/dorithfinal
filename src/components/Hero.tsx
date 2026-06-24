"use client";

import React, { useRef } from "react";
import { MessageSquare, Gift, Clock, EyeOff, ShieldAlert, ChevronRight } from "lucide-react";


const pressureCards = [
  {
    id: 1,
    title: "Discours rassurant",
    text: "On vous met en confiance avec de belles promesses.",
    icon: MessageSquare,
  },
  {
    id: 2,
    title: "Cadeaux et avantages",
    text: "Des offres “limitées” pour créer un sentiment d’urgence.",
    icon: Gift,
  },
  {
    id: 3,
    title: "Pression du temps",
    text: "Il faut signer aujourd’hui, sinon l’offre disparaît.",
    icon: Clock,
  },
  {
    id: 4,
    title: "Informations cachées",
    text: "Des conditions floues, des frais dissimulés, des clauses abusives.",
    icon: EyeOff,
  },
  {
    id: 5,
    title: "Culpabilisation",
    text: "On vous fait croire que vous êtes égoïste, irresponsable ou que vous ignorez votre chance.",
    icon: ShieldAlert,
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    const element = document.getElementById("formulaire");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center py-16 overflow-hidden bg-grid-subtle"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center text-center">
        {/* Pain badge indicator */}
        <div className="fade-up-text inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border bg-brand-card/60 backdrop-blur-sm text-xs font-semibold text-brand-accent tracking-wide uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
          Contrats & crédits abusifs
        </div>

        {/* Big Emotion / Pain Headline */}
        <div ref={textRef} className="max-w-4xl flex flex-col items-center">
          <h1 className="fade-up-text text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold tracking-tight text-white leading-tight md:leading-tight max-w-4xl mx-auto">
            <span className="block">Dès lors, tout est fait pour vous amener</span>
            <span className="block">à <span className="text-brand-accent underline decoration-brand-border underline-offset-4">signer</span>, à contracter, à vous faire culpabiliser</span>
            <span className="block">par des manœuvres <span className="text-brand-accent font-semibold italic">souvent frauduleuses</span>.</span>
          </h1>
          <p className="fade-up-text mt-6 text-base sm:text-lg md:text-xl text-brand-text-secondary max-w-2xl font-light">
            Vous vous sentez piégé par un engagement signé sous pression ou manipulation ? Découvrez comment reprendre le contrôle de votre situation.
          </p>

          {/* Primary CTA */}
          <div className="fade-up-text mt-8 flex flex-col items-center gap-4 w-full">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#B98820] mb-3">
              C’est là qu’on intervient !
            </h3>
            <button
              onClick={scrollToForm}
              className="group relative flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider text-black bg-brand-accent hover:bg-transparent hover:text-brand-accent border border-brand-accent transition-all duration-300 shadow-lg shadow-brand-accent/20 cursor-pointer w-full sm:w-auto"
            >
              Je souhaite annuler le crédit, ne plus payer
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Dashboard Preview Image Block (Saasta style) */}
        <div className="fade-up-text mt-12 max-w-7xl w-full rounded-3xl shadow-2xl shadow-brand-accent/5 backdrop-blur-sm relative group overflow-hidden">
          <img
            src="/desktop-1.jpg"
            alt="Aperçu du tableau de bord Droit Habitat Expertise"
            className="w-full h-auto rounded-2xl object-cover"
            loading="eager"
          />
        </div>

        {/* 5 Pressure Mechanism Cards - Horizontal Process Layout */}
        <div ref={cardsRef} className="mt-16 w-full flex overflow-x-auto xl:grid xl:grid-cols-5 gap-4 lg:gap-6 text-left pb-6 xl:pb-0 scrollbar-hide snap-x snap-mandatory">
          {pressureCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="hero-card group relative flex flex-row items-start gap-3 min-w-[280px] xl:min-w-0 snap-start"
              >
                {/* Icon Box */}
                <div className="shrink-0 relative z-10 inline-flex p-3.5 sm:p-4 rounded-2xl bg-brand-bg border border-brand-accent/30 text-brand-accent shadow-[0_0_15px_rgba(185,136,32,0.1)] group-hover:shadow-[0_0_20px_rgba(185,136,32,0.3)] transition-all duration-300">
                  <Icon size={22} className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-1.5 sm:pt-2 relative z-10">
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-brand-accent transition-colors leading-tight">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-brand-text-secondary leading-snug font-light">
                    {card.text}
                  </p>
                </div>

                {/* Connecting Line (hidden on last item and mobile) */}
                {index < pressureCards.length - 1 && (
                  <div className="hidden xl:block absolute top-7 left-[4rem] w-[calc(100%-2rem)] h-[1px] bg-gradient-to-r from-brand-accent/40 to-transparent pointer-events-none z-0" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

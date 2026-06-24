"use client";

import React from "react";

export default function Footer() {
  const scrollToForm = () => {
    const element = document.getElementById("formulaire");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHero = () => {
    const element = document.getElementById("hero");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#000000] border-t border-brand-border/40 py-16 px-6 overflow-hidden">
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        
        {/* Left Side: Brand Logo and Service Reminder */}
        <div className="max-w-md flex flex-col gap-4">
          <div 
            onClick={scrollToHero}
            className="flex items-center cursor-pointer group py-1.5 px-3 rounded-full h-9 self-start"
          >
            <img 
              src="/DroitHabitat-Expertisezzz.png" 
              alt="Droit Habitat Expertise Logo" 
              className="h-6 w-auto object-contain"
            />
          </div>
          <p className="text-xs text-brand-text-muted leading-relaxed font-light">
            Service d&apos;analyse de conformité contractuelle et d&apos;aide à la défense des consommateurs victimes d&apos;engagements forcés ou abusifs dans le secteur de l&apos;habitat.
          </p>
        </div>

        {/* Right Side: Links */}
        <div className="flex flex-wrap items-center gap-6 md:gap-10 text-xs font-semibold uppercase tracking-wider text-brand-text-secondary">
          <button
            onClick={scrollToForm}
            className="hover:text-brand-accent transition-colors cursor-pointer"
          >
            Évaluer mon contrat
          </button>
          <a
            href="#legal"
            onClick={(e) => e.preventDefault()}
            className="hover:text-brand-accent transition-colors cursor-pointer"
          >
            Mentions légales
          </a>
          <a
            href="#privacy"
            onClick={(e) => e.preventDefault()}
            className="hover:text-brand-accent transition-colors cursor-pointer"
          >
            Confidentialité (RGPD)
          </a>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto border-t border-brand-border/20 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-brand-text-muted font-light">
          &copy; {new Date().getFullYear()} Droit Habitat Expertise. Tous droits réservés.
        </p>
        <p className="text-[10px] text-brand-text-muted font-light">
          Avertissement : Ce service fournit une aide à l&apos;analyse et ne remplace en aucun cas les conseils juridiques personnalisés délivrés par un avocat.
        </p>
      </div>
    </footer>
  );
}

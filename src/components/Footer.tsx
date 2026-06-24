"use client";

import React from "react";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";

const FacebookIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const TwitterIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#000000] border-t border-brand-border/40 py-20 px-6 overflow-hidden">
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        
        {/* Column 1: Logo, Description & Socials */}
        <div className="flex flex-col gap-6">
          <div 
            onClick={() => scrollToSection("hero")}
            className="flex items-center cursor-pointer group self-start"
          >
            <img 
              src="/logo.png" 
              alt="Droit Habitat Expertise Logo" 
              className="h-8 w-auto object-contain"
            />
          </div>
          <p className="text-sm text-brand-text-muted leading-relaxed font-light max-w-xs">
            Service d'analyse de conformité contractuelle et d'aide à la défense des consommateurs victimes d'engagements forcés ou abusifs dans le secteur de l'habitat.
          </p>
          
          <div className="flex items-center gap-3 mt-2">
            <a href="#" className="w-8 h-8 rounded-full bg-[#1A2235] hover:bg-[#B98820] flex items-center justify-center transition-colors group">
              <LinkIcon size={14} className="text-[#B98820] group-hover:text-black transition-colors" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#1A2235] hover:bg-[#B98820] flex items-center justify-center transition-colors group">
              <TwitterIcon size={14} className="text-[#B98820] group-hover:text-black transition-colors" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#1A2235] hover:bg-[#B98820] flex items-center justify-center transition-colors group">
              <FacebookIcon size={14} className="text-[#B98820] group-hover:text-black transition-colors" />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="flex flex-col gap-6 md:pl-10">
          <h3 className="text-white font-bold text-lg">Pages</h3>
          <ul className="flex flex-col gap-3 text-sm font-medium">
            <li>
              <button onClick={() => scrollToSection("hero")} className="text-[#B98820] hover:text-[#B98820]/80 transition-colors cursor-pointer text-left">
                Accueil
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("solutions")} className="text-brand-text-secondary hover:text-white transition-colors cursor-pointer text-left">
                Nos Solutions
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("vices")} className="text-brand-text-secondary hover:text-white transition-colors cursor-pointer text-left">
                Vices de forme
              </button>
            </li>
            <li>
              <Link href="/offres" className="text-brand-text-secondary hover:text-white transition-colors">
                Nos Offres
              </Link>
            </li>
            <li>
              <button onClick={() => scrollToSection("formulaire")} className="text-brand-text-secondary hover:text-white transition-colors cursor-pointer text-left">
                Évaluer mon contrat
              </button>
            </li>
            <li>
              <a href="#legal" onClick={(e) => e.preventDefault()} className="text-brand-text-secondary hover:text-white transition-colors cursor-pointer">
                Mentions légales
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-bold text-lg">Contact Us</h3>
          <ul className="flex flex-col gap-4 text-sm text-brand-text-secondary">
            <li>
              <a href="mailto:contact@droithabitat.fr" className="hover:text-[#B98820] transition-colors">
                contact@droithabitat.fr
              </a>
            </li>
            <li>
              <a href="tel:+33123456789" className="hover:text-[#B98820] transition-colors">
                +33 1 23 45 67 89
              </a>
            </li>
            <li className="leading-relaxed">
              75008 Paris, France
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright line */}
      <div className="relative z-10 w-full max-w-6xl mx-auto border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[11px] text-brand-text-muted font-light text-center md:text-left">
          &copy; {new Date().getFullYear()} Droit Habitat Expertise. Tous droits réservés.
        </p>
        <p className="text-[11px] text-brand-text-muted font-light text-center md:text-right max-w-lg">
          Avertissement : Ce service fournit une aide à l'analyse et ne remplace en aucun cas les conseils juridiques personnalisés délivrés par un avocat.
        </p>
      </div>
    </footer>
  );
}

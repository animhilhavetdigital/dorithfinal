"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className="relative pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-300 bg-brand-card/80 backdrop-blur-md border border-brand-border/60 shadow-lg shadow-black/40 py-3 px-6"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group bg-white/95 py-1.5 px-3 rounded-full h-9 shadow-inner"
            onClick={() => scrollToSection("hero")}
          >
            <img 
              src="/logo.png" 
              alt="Droit Habitat Expertise Logo" 
              className="h-6 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm font-medium text-brand-text-secondary hover:text-white transition-colors cursor-pointer"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("solutions")}
              className="text-sm font-medium text-brand-text-secondary hover:text-white transition-colors cursor-pointer"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection("comment-ca-marche")}
              className="text-sm font-medium text-brand-text-secondary hover:text-white transition-colors cursor-pointer"
            >
              Comment ça marche
            </button>
            <button
              onClick={() => scrollToSection("vices")}
              className="text-sm font-medium text-brand-text-secondary hover:text-white transition-colors cursor-pointer"
            >
              Vices
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("formulaire")}
              className="relative px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-brand-accent border border-brand-accent transition-all duration-300 hover:bg-transparent hover:text-brand-accent cursor-pointer shadow-md shadow-brand-accent/20"
            >
              Démarrer le processus
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-brand-accent transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-brand-card/95 backdrop-blur-lg border border-brand-border rounded-3xl p-6 flex flex-col gap-5 mt-2 animate-in fade-in slide-in-from-top-5 duration-200">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-left text-base font-medium py-1 text-brand-text-secondary hover:text-white border-b border-brand-border/30 pb-2"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("solutions")}
              className="text-left text-base font-medium py-1 text-brand-text-secondary hover:text-white border-b border-brand-border/30 pb-2"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection("comment-ca-marche")}
              className="text-left text-base font-medium py-1 text-brand-text-secondary hover:text-white border-b border-brand-border/30 pb-2"
            >
              Comment ça marche
            </button>
            <button
              onClick={() => scrollToSection("vices")}
              className="text-left text-base font-medium py-1 text-brand-text-secondary hover:text-white border-b border-brand-border/30 pb-2"
            >
              Vices
            </button>
            <button
              onClick={() => scrollToSection("formulaire")}
              className="w-full text-center py-3 rounded-full text-sm font-semibold uppercase tracking-wider text-black bg-brand-accent transition-all duration-300 hover:bg-opacity-95"
            >
              Démarrer le processus
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}

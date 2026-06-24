"use client";

import React, { useRef } from "react";
import { FileText, Scale, Gavel, ArrowRight, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const solutions = [
  {
    num: "01",
    title: "Mémoire juridique",
    highlight: "prêt à l’emploi",
    text: "Générez votre mémoire juridique complet pour faire valoir vos droits de manière structurée et professionnelle.",
    features: [
      "Document personnalisé selon votre situation",
      "Arguments juridiques précis et actualisés",
      "Gain de temps et d'efficacité"
    ],
    icon: FileText,
    image: "/solution-1.png"
  },
  {
    num: "02",
    title: "Service médiation &",
    highlight: "mise en demeure",
    text: "Nous agissons pour obtenir la résolution amiable de votre dossier avant d'envisager des poursuites plus lourdes.",
    features: [
      "Négociation directe avec la partie adverse",
      "Envoi de mises en demeure officielles",
      "Recherche d'une résolution rapide des conflits"
    ],
    icon: Scale,
    image: "/solution-2.png"
  },
  {
    num: "03",
    title: "Action en justice",
    highlight: "par avocat",
    text: "En cas d’escroquerie avérée ou de refus de résolution amiable, nos avocats partenaires prennent le relais pour vous défendre.",
    features: [
      "Représentation légale complète par des experts",
      "Constitution solide et rigoureuse du dossier",
      "Défense acharnée de vos intérêts au tribunal"
    ],
    icon: Gavel,
    image: "/solution-3.png"
  }
];

export default function Solutions() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const images = gsap.utils.toArray(".image-anim");
    images.forEach((img: any) => {
      gsap.from(img, {
        scrollTrigger: {
          trigger: img,
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    });
  }, { scope: containerRef });

  const scrollToForm = () => {
    document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="solutions" ref={containerRef} className="py-16 px-6 bg-brand-bg relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-full h-[500px] bg-brand-accent/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border bg-brand-card/50 text-xs font-semibold text-brand-accent uppercase tracking-wider mb-6">
            Nos solutions
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Des leviers concrets pour <span className="text-brand-accent">faire face</span>
          </h2>
        </div>

        {/* Zigzag Features Layout */}
        <div className="space-y-24 md:space-y-32">
          {solutions.map((sol, i) => {
            const isEven = i % 2 !== 0; // 0=text left, 1=image left
            return (
              <div key={i} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
                
                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-accent/20 bg-brand-accent/5 text-xs font-semibold text-brand-accent uppercase tracking-wider mb-6 w-fit">
                    <sol.icon size={16} /> Étape {sol.num}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-6 leading-tight">
                    {sol.title} <br className="hidden xl:block"/>
                    <span className="text-brand-accent">{sol.highlight}</span>
                  </h3>
                  
                  <p className="text-lg text-brand-text-secondary font-light leading-relaxed mb-8 max-w-lg">
                    {sol.text}
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {sol.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-brand-accent shrink-0 mt-0.5" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button onClick={scrollToForm} className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-black bg-brand-accent hover:bg-transparent hover:text-brand-accent border border-brand-accent transition-all duration-300 w-full sm:w-fit cursor-pointer">
                    Activer cette option
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                {/* Image Content */}
                <div className="w-full lg:w-1/2 relative group image-anim">
                   {/* Background Glow */}
                   <div className="absolute inset-0 bg-brand-accent/20 blur-[80px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                   
                   <div className="relative rounded-3xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:-translate-y-2 aspect-[4/3] w-full">
                     <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                     <img 
                       src={sol.image} 
                       alt={sol.title} 
                       className="w-full h-full object-cover" 
                       loading="lazy"
                     />
                   </div>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

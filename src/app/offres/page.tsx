import React from "react";
import Link from "next/link";
import { Check, ArrowRight, ShieldAlert, ArrowLeft } from "lucide-react";

export default function OffresPage() {
  return (
    <main className="min-h-screen bg-[#02050D] text-white pt-24 pb-16 px-6 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-accent/10 blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Back navigation */}
        <Link href="/" className="inline-flex items-center gap-2 text-brand-text-secondary hover:text-white transition-colors mb-12 text-sm font-medium">
          <ArrowLeft size={16} /> Retour à l'accueil
        </Link>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Choisissez la voie qui vous <span className="text-[#B98820]">convient</span>
          </h1>
          <p className="text-lg text-brand-text-secondary leading-relaxed font-light">
            Quel que soit votre choix, nous mettons à votre disposition un cadre clair pour transformer votre situation en dossier exploitable et avancer de façon structurée.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="max-w-md mx-auto">
          
          {/* Offer 1 */}
          <div className="flex flex-col bg-[#0D131F] border border-[#B98820]/50 shadow-2xl shadow-[#B98820]/5 rounded-3xl p-8 transition-all duration-300 relative group animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#B98820] text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              L'offre unique
            </div>

            <div className="mb-8 mt-2 text-center">
              <h3 className="text-xl font-bold mb-2 text-white">Mémoire juridique prêt à l’emploi</h3>
              <p className="text-sm text-brand-text-secondary">Obtenez un dossier clair, structuré et exploitable en 72h.</p>
            </div>
            
            <div className="mb-8 text-center border-y border-white/5 py-6">
              <div className="text-5xl font-black text-[#B98820]">99 €</div>
              <div className="text-xs text-brand-text-muted mt-2 uppercase tracking-wider font-semibold">Paiement unique</div>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              {[
                "Analyse du dossier après signature",
                "Tri et exploitation des pièces",
                "Chronologie structurée",
                "Irrégularités potentielles",
                "Scoring oui / non sur la matière à agir",
                "Mémoire structuré",
                "Dossier PDF exploitable",
                "Courrier prêt à envoyer"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-brand-text-secondary">
                  <Check size={18} className="text-[#B98820] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link 
              href="/paiement?offre=memoire-juridique"
              className="w-full py-4 flex items-center justify-center gap-2 rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-[#B98820] hover:bg-[#B98820]/90 shadow-lg shadow-[#B98820]/20 transition-all mt-auto"
            >
              Choisir cette option
            </Link>
          </div>

        </div>

        {/* Legal Boundary Line */}
        <div className="mt-20 max-w-3xl mx-auto flex items-center gap-4 p-6 rounded-2xl bg-brand-bg/50 border border-brand-border/30">
          <ShieldAlert size={24} className="text-[#B98820] shrink-0" />
          <p className="text-sm text-brand-text-secondary font-light">
            Droit Habitat prépare, structure et oriente. L’avocat prend le relais uniquement si nécessaire, selon son propre cadre.
          </p>
        </div>

      </div>
    </main>
  );
}

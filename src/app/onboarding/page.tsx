"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, MessageSquareText, UploadCloud, FileEdit, ArrowRight } from "lucide-react";

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-[#02050D] text-white flex items-center justify-center py-24 px-6 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/10 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="max-w-3xl mx-auto relative z-10 w-full animate-in fade-in zoom-in-95 duration-700">
        
        <div className="bg-[#0A0F18] border border-brand-border/40 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden text-center">
          
          <div className="w-20 h-20 bg-[#B98820]/10 border border-[#B98820]/30 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce" style={{ animationDuration: '3s' }}>
            <CheckCircle2 size={40} className="text-[#B98820]" />
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
            Votre dossier est <span className="text-[#B98820]">ouvert</span>
          </h1>
          <p className="text-lg text-brand-text-secondary leading-relaxed font-light max-w-xl mx-auto mb-12">
            Nous allons maintenant recueillir votre récit et vos pièces pour transformer votre situation en dossier exploitable.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-12 max-w-2xl mx-auto">
            <div className="bg-[#0D131F] border border-white/5 rounded-2xl p-5 flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-[#B98820]/10 flex items-center justify-center shrink-0 text-[#B98820] font-bold text-xs mt-0.5">1</div>
              <div>
                <h4 className="font-semibold text-white text-sm flex items-center gap-2"><MessageSquareText size={16} className="text-[#B98820]"/> Racontez votre situation</h4>
              </div>
            </div>
            <div className="bg-[#0D131F] border border-white/5 rounded-2xl p-5 flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-[#B98820]/10 flex items-center justify-center shrink-0 text-[#B98820] font-bold text-xs mt-0.5">2</div>
              <div>
                <h4 className="font-semibold text-white text-sm flex items-center gap-2"><UploadCloud size={16} className="text-[#B98820]"/> Téléversez vos contrats, relevés et échanges</h4>
              </div>
            </div>
            <div className="bg-[#0D131F] border border-white/5 rounded-2xl p-5 flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-[#B98820]/10 flex items-center justify-center shrink-0 text-[#B98820] font-bold text-xs mt-0.5">3</div>
              <div>
                <h4 className="font-semibold text-white text-sm flex items-center gap-2"><FileEdit size={16} className="text-[#B98820]"/> Complétez les pièces manquantes si besoin</h4>
              </div>
            </div>
            <div className="bg-[#0D131F] border border-white/5 rounded-2xl p-5 flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-[#B98820]/10 flex items-center justify-center shrink-0 text-[#B98820] font-bold text-xs mt-0.5">4</div>
              <div>
                <h4 className="font-semibold text-white text-sm flex items-center gap-2"><CheckCircle2 size={16} className="text-[#B98820]"/> Recevez votre dossier et votre orientation</h4>
              </div>
            </div>
          </div>

          <Link 
            href="/dossier"
            onClick={(e) => { e.preventDefault(); alert("Cette fonctionnalité sera bientôt disponible."); }}
            className="w-full max-w-sm mx-auto py-4 flex items-center justify-center gap-3 rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-[#B98820] hover:bg-[#B98820]/90 transition-all shadow-lg shadow-[#B98820]/20 hover:scale-[1.02]"
          >
            Commencer mon dossier <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </main>
  );
}

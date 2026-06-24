"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, Zap, FileText, Info, CreditCard, Loader2 } from "lucide-react";

// Offer definitions mapping
const OFFERS: Record<string, { name: string; price: string; btn: string; promise: string; list: string[] }> = {
  "memoire-juridique": {
    name: "Mémoire juridique prêt à l’emploi",
    price: "99 €",
    btn: "Payer 99 EUR",
    promise: "Obtenez un dossier clair, structuré et exploitable en 72h.",
    list: [
      "Analyse du dossier après signature",
      "Tri et exploitation des pièces",
      "Chronologie structurée",
      "Irrégularités potentielles",
      "Scoring oui / non sur la matière à agir",
      "Mémoire structuré",
      "Dossier PDF exploitable",
      "Courrier prêt à envoyer"
    ]
  },
  "mediation-mise-en-demeure": {
    name: "Service médiation & mise en demeure",
    price: "199 €",
    btn: "Payer 199 EUR",
    promise: "Nous prenons le relais pour engager une démarche amiable structurée.",
    list: [
      "Tout le contenu de l’offre 1",
      "Envoi des courriers selon mandat client",
      "Mise en demeure",
      "Relances automatisées et suivies",
      "Médiation amiable",
      "Négociation engagée avec les parties concernées"
    ]
  },
  "relais-avocat": {
    name: "Relais avocat partenaire",
    price: "Tarification séparée",
    btn: "Être orienté vers un avocat partenaire",
    promise: "Votre dossier est transmis de façon structurée à un avocat partenaire lorsque l’escalade devient nécessaire.",
    list: [
      "Dossier préparé",
      "Pièces ordonnées",
      "Chronologie claire",
      "Irrégularités potentielles identifiées",
      "Transfert exploitable",
      "Relais vers avocat partenaire"
    ]
  }
};

function PaymentContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const offreKey = searchParams.get("offre");

  // Fake payment state
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Fallback if not found
  const offer = offreKey && OFFERS[offreKey] ? OFFERS[offreKey] : OFFERS["memoire-juridique"];
  const safeOffreKey = offreKey && OFFERS[offreKey] ? offreKey : "memoire-juridique";

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      router.push(`/onboarding?offre=${safeOffreKey}`);
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto relative z-10">
      {/* Back navigation */}
      <Link href="/offres" className="inline-flex items-center gap-2 text-brand-text-secondary hover:text-white transition-colors mb-8 text-sm font-medium">
        <ArrowLeft size={16} /> Retour aux offres
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Info & Reassurance */}
        <div className="lg:col-span-7 flex flex-col gap-10 animate-in fade-in slide-in-from-left-4 duration-700">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-white">
              Finaliser votre commande
            </h1>
            <p className="text-brand-text-secondary leading-relaxed font-light text-base md:text-lg">
              Votre dossier sera ouvert dès confirmation du paiement. Vous pourrez ensuite raconter votre situation, téléverser vos pièces et suivre l’avancement de l’analyse.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex gap-4 p-5 rounded-2xl bg-[#0A0F18] border border-brand-border/40">
              <Lock className="text-[#B98820] shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-bold text-white text-sm mb-1">Paiement sécurisé</h4>
                <p className="text-xs text-brand-text-muted">Transaction chiffrée de bout en bout.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-2xl bg-[#0A0F18] border border-brand-border/40">
              <Zap className="text-[#B98820] shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-bold text-white text-sm mb-1">Ouverture immédiate</h4>
                <p className="text-xs text-brand-text-muted">Votre espace est créé instantanément.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-2xl bg-[#0A0F18] border border-brand-border/40">
              <FileText className="text-[#B98820] shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-bold text-white text-sm mb-1">Accès au formulaire d’entrée</h4>
                <p className="text-xs text-brand-text-muted">Pour décrire votre cas en détail.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-2xl bg-[#0A0F18] border border-brand-border/40">
              <ShieldCheck className="text-[#B98820] shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-bold text-white text-sm mb-1">Liste des pièces à fournir</h4>
                <p className="text-xs text-brand-text-muted">Un guide clair sur ce dont nous avons besoin.</p>
              </div>
            </div>
          </div>
          
          {/* Legal Note */}
          <div className="flex gap-3 p-4 bg-brand-bg/50 border border-brand-border/30 rounded-xl text-xs text-brand-text-muted font-light mt-auto">
            <Info size={16} className="text-brand-text-secondary shrink-0 mt-0.5" />
            <p>
              Vous achetez un service d’analyse et de structuration correspondant à l’offre choisie. Ce paiement ne constitue pas une promesse de résultat juridique.
            </p>
          </div>
        </div>

        {/* Right Column: Order Summary Card & Payment Form */}
        <div className="lg:col-span-5 animate-in fade-in slide-in-from-right-4 duration-700 delay-100">
          <div className="bg-[#0D131F] border border-[#B98820]/40 rounded-3xl p-8 shadow-2xl sticky top-8 flex flex-col h-full overflow-hidden relative">
            
            {!showPaymentForm ? (
              <div className="flex flex-col h-full animate-in fade-in duration-500">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#B98820] mb-6">Récapitulatif de votre choix</h3>
                
                <div className="mb-6 pb-6 border-b border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-2">{offer.name}</h2>
                  <div className="text-3xl font-black text-white">{offer.price}</div>
                </div>

                <p className="text-sm text-brand-text-secondary font-medium mb-6">
                  {offer.promise}
                </p>

                <ul className="space-y-3 mb-10 flex-1">
                  {offer.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs text-brand-text-secondary">
                      <ShieldCheck size={14} className="text-[#B98820] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setShowPaymentForm(true)}
                  className="w-full py-4 flex items-center justify-center gap-2 rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-[#B98820] hover:bg-[#B98820]/90 transition-all shadow-lg shadow-[#B98820]/20 hover:scale-[1.02] cursor-pointer"
                >
                  {offer.btn}
                </button>
              </div>
            ) : (
              <div className="flex flex-col h-full animate-in slide-in-from-bottom-8 fade-in duration-500">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                  <button onClick={() => setShowPaymentForm(false)} className="text-white/50 hover:text-white transition-colors cursor-pointer">
                    <ArrowLeft size={18} />
                  </button>
                  <h3 className="text-lg font-bold text-white">Paiement par carte</h3>
                </div>

                <div className="mb-6 flex justify-between items-center text-sm">
                  <span className="text-brand-text-secondary">Montant à régler :</span>
                  <span className="text-xl font-black text-[#B98820]">{offer.price}</span>
                </div>

                <form onSubmit={handlePaymentSubmit} className="flex-1 flex flex-col">
                  <div className="space-y-4 mb-8">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase text-brand-text-secondary">Titulaire de la carte</label>
                      <input required type="text" placeholder="Nom complet" className="w-full bg-[#0A0F18] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#B98820]/50 focus:ring-1 focus:ring-[#B98820]/50 transition-all" />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase text-brand-text-secondary">Numéro de carte</label>
                      <div className="relative">
                        <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                        <input required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-[#0A0F18] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white text-sm outline-none focus:border-[#B98820]/50 focus:ring-1 focus:ring-[#B98820]/50 transition-all font-mono" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-brand-text-secondary">Date d'exp.</label>
                        <input required type="text" placeholder="MM/AA" className="w-full bg-[#0A0F18] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#B98820]/50 focus:ring-1 focus:ring-[#B98820]/50 transition-all font-mono" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-brand-text-secondary">CVC</label>
                        <input required type="password" placeholder="123" maxLength={4} className="w-full bg-[#0A0F18] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#B98820]/50 focus:ring-1 focus:ring-[#B98820]/50 transition-all font-mono" />
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-4 mt-auto flex items-center justify-center gap-2 rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-[#B98820] hover:bg-[#B98820]/90 transition-all shadow-lg shadow-[#B98820]/20 disabled:opacity-70 cursor-pointer"
                  >
                    {isProcessing ? <Loader2 className="animate-spin" size={18} /> : <><Lock size={16} /> Confirmer le paiement</>}
                  </button>
                </form>

              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-[#02050D] text-white pt-24 pb-16 px-6 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 blur-[150px] pointer-events-none" />
      <Suspense fallback={<div className="text-center pt-32 text-brand-text-secondary">Chargement...</div>}>
        <PaymentContent />
      </Suspense>
    </main>
  );
}

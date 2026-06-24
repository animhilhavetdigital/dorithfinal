"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Send, RefreshCcw, ArrowRight, Bot, User, Check } from "lucide-react";

// ----------------------------------------------------------------------
// DATA & TYPES
// ----------------------------------------------------------------------

type QuestionType = "continue" | "numeric" | "choice" | "yesno" | "multi-choice" | "textarea" | "calculating" | "result";

interface Question {
  id: string;
  key?: string;
  text: string;
  type: QuestionType;
  choices?: string[];
  placeholder?: string;
  next?: number;
}

const QUESTIONS: Question[] = [
  { id: "intro", text: "Bienvenue ! Je serai votre guide pour ce test. Si vous souhaitez m’entendre parler, veuillez activer l’audio.", type: "continue", next: 1 },
  { id: "intro2", text: "Parfait. Commençons !", type: "continue", next: 2 },
  { id: "q1", key: "montant", text: "Montant total de votre crédit (€) ?", type: "numeric", placeholder: "Ex : 15000", next: 3 },
  { id: "q2", key: "nombre_credits", text: "Nombre de crédits conso litigieux", type: "choice", choices: ["1 crédit", "2 crédits", "3 crédits ou plus"], next: 4 },
  { id: "q3", key: "intermediaire", text: "Un intermédiaire ou démarcheur était-il présent lors de la vente ?", type: "yesno", next: 5 },
  { id: "q4", key: "domicile", text: "Le contrat a-t-il été signé chez vous (à domicile) ?", type: "yesno", next: 6 },
  { id: "q5", key: "pression", text: "Avez-vous subi une pression pour signer rapidement ?", type: "yesno", next: 7 },
  { id: "q6", key: "promesses", text: "Des promesses floues ou difficilement vérifiables vous ont-elles été faites ?", type: "yesno", next: 8 },
  { id: "q7", key: "documents", text: "Avez-vous reçu tous les documents avant ou au moment de la signature ?", type: "yesno", next: 9 },
  { id: "q8", key: "retractation", text: "Le délai de rétractation vous a-t-il été expliqué clairement ?", type: "yesno", next: 10 },
  { id: "q9", key: "prelevements", text: "Des prélèvements ont-ils déjà commencé ?", type: "yesno", next: 11 },
  { id: "q10", key: "relances", text: "Avez-vous reçu des relances, mises en demeure ou menaces de fichage ?", type: "yesno", next: 12 },
  { id: "q11", key: "justificatifs", text: "Disposez-vous de documents justificatifs ?", type: "multi-choice", choices: ["Contrat", "Bon de commande", "Échéancier", "Emails / SMS", "Courriers", "Relevés", "Autres"], next: 13 },
  { id: "q12", key: "fichage", text: "L’organisme avait-il connaissance de vos antécédents de fichage ou incidents bancaires ?", type: "yesno", next: 14 },
  { id: "q13", key: "description", text: "Décrivez brièvement votre situation", type: "textarea", next: 15 },
  { id: "calculating", text: "Merci pour ces informations. J'analyse vos réponses...", type: "calculating", next: 16 },
  { id: "result", text: "", type: "result" }
];

interface Message {
  role: "assistant" | "user";
  text: string;
  isTyping?: boolean;
}

// ----------------------------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------------------------

export default function FormSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // State
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isTyping, setIsTyping] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [synth, setSynth] = useState<SpeechSynthesis | null>(null);

  // Input states
  const [inputValue, setInputValue] = useState("");
  const [multiChoiceSelection, setMultiChoiceSelection] = useState<string[]>([]);

  // Init TTS
  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      setSynth(window.speechSynthesis);
    }
  }, []);

  // Speak helper
  const speak = (text: string) => {
    if (!audioEnabled || !synth) return;
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR";
    utterance.rate = 1.0;
    synth.speak(utterance);
  };

  // Start chat
  useEffect(() => {
    if (messages.length === 0) {
      pushAssistantMessage(QUESTIONS[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Actions
  const pushAssistantMessage = async (q: Question) => {
    setIsTyping(true);
    // Fake thinking delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsTyping(false);

    setMessages((prev) => [...prev, { role: "assistant", text: q.text }]);
    speak(q.text);

    // If it's a calculating step, wait and go to results
    if (q.type === "calculating" && q.next) {
      setTimeout(() => {
        setCurrentStepIndex(q.next!);
        pushAssistantMessage(QUESTIONS[q.next!]);
      }, 2000);
    }
  };

  const handleUserSubmit = (userText: string, rawValue: any) => {
    if (!userText.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    
    // Save answer
    const currentQ = QUESTIONS[currentStepIndex];
    if (currentQ.key) {
      setAnswers((prev) => ({ ...prev, [currentQ.key!]: rawValue }));
    }

    // Reset inputs
    setInputValue("");
    setMultiChoiceSelection([]);

    // Proceed to next
    if (currentQ.next !== undefined) {
      setCurrentStepIndex(currentQ.next);
      pushAssistantMessage(QUESTIONS[currentQ.next]);
    }
  };

  // Handlers for specific types
  const handleNumericSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleUserSubmit(`${inputValue} €`, inputValue);
  };

  const handleTextareaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleUserSubmit(inputValue, inputValue);
  };

  const handleMultiChoiceSubmit = () => {
    if (multiChoiceSelection.length === 0) {
      handleUserSubmit("Aucun", []);
    } else {
      handleUserSubmit(multiChoiceSelection.join(", "), multiChoiceSelection);
    }
  };

  const toggleMultiChoice = (choice: string) => {
    setMultiChoiceSelection((prev) =>
      prev.includes(choice) ? prev.filter((c) => c !== choice) : [...prev, choice]
    );
  };

  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
    if (audioEnabled && synth) {
      synth.cancel();
    }
  };

  const resetChat = () => {
    if (synth) synth.cancel();
    setMessages([]);
    setAnswers({});
    setCurrentStepIndex(0);
    setInputValue("");
    setMultiChoiceSelection([]);
    pushAssistantMessage(QUESTIONS[0]);
  };

  const currentQ = QUESTIONS[currentStepIndex];

  // Scoring Logic
  const getScore = () => {
    let score = 0;
    if (answers["intermediaire"] === "Oui") score += 1;
    if (answers["domicile"] === "Oui") score += 1;
    if (answers["pression"] === "Oui") score += 1;
    if (answers["promesses"] === "Oui") score += 1;
    if (answers["documents"] === "Non") score += 1;
    if (answers["retractation"] === "Non") score += 1;
    if (answers["relances"] === "Oui") score += 1;
    if (Array.isArray(answers["justificatifs"]) && answers["justificatifs"].length > 0) score += 1;
    if (answers["fichage"] === "Oui") score += 1;
    return score;
  };

  return (
    <section id="formulaire" ref={containerRef} className="py-16 px-6 bg-brand-bg border-t border-brand-border/40 relative">
      <div className="absolute inset-0 bg-radial-glow-section pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border bg-brand-card/50 text-xs font-semibold text-brand-accent uppercase tracking-wider mb-4">
            Formulaire d&apos;évaluation
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Évaluez votre <span className="text-brand-accent">dossier</span>
          </h2>
          <p className="text-brand-text-secondary max-w-xl mx-auto text-sm md:text-base">
            Répondez à quelques questions pour savoir quelle suite envisager pour votre dossier.
          </p>
        </div>

        {/* Chat Panel */}
        <div className="mx-auto max-w-3xl rounded-3xl bg-[#0A0F18] border border-brand-border/60 shadow-2xl flex flex-col overflow-hidden h-[600px] md:h-[650px] relative">
          
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0D131F]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#B98820]/20 border border-[#B98820]/50 flex items-center justify-center shadow-[0_0_15px_rgba(185,136,32,0.5)] transition-all duration-1000 animate-pulse">
                <Bot className="text-[#B98820] w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">Assistant IA</h3>
                <p className="text-xs text-brand-accent/70 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  En ligne
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={resetChat}
                className="p-2 text-white/50 hover:text-white transition-colors"
                title="Recommencer"
              >
                <RefreshCcw size={18} />
              </button>
              <button
                onClick={toggleAudio}
                className={`p-2 transition-colors ${audioEnabled ? "text-brand-accent" : "text-white/50 hover:text-white"}`}
                title={audioEnabled ? "Désactiver l'audio" : "Activer l'audio"}
              >
                {audioEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth custom-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`flex gap-3 max-w-[85%] md:max-w-[75%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  
                  {/* Avatar */}
                  <div className="shrink-0 mt-1">
                    {msg.role === "user" ? (
                      <div className="w-8 h-8 rounded-full bg-[#1A2235] border border-white/10 flex items-center justify-center">
                        <User className="text-white/70 w-4 h-4" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-[#B98820]/20 border border-[#B98820]/50 flex items-center justify-center shadow-[0_0_10px_rgba(185,136,32,0.4)] animate-pulse">
                        <Bot className="text-[#B98820] w-4 h-4" />
                      </div>
                    )}
                  </div>

                  {/* Bubble */}
                  <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-md ${
                    msg.role === "user" 
                      ? "bg-[#1A2235] border border-white/10 text-white rounded-tr-none" 
                      : "bg-[#0D131F] border border-brand-border/30 text-white/90 rounded-tl-none"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-3 max-w-[85%] flex-row">
                  <div className="shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-[#B98820]/20 border border-[#B98820]/50 flex items-center justify-center shadow-[0_0_10px_rgba(185,136,32,0.4)] animate-pulse">
                      <Bot className="text-[#B98820] w-4 h-4" />
                    </div>
                  </div>
                  <div className="px-5 py-4 rounded-2xl bg-[#0D131F] border border-brand-border/30 rounded-tl-none flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/60 animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/60 animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/60 animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-[#0D131F] border-t border-white/5 relative z-20">
            {!isTyping && currentQ && (
              <div className="animate-in slide-in-from-bottom-2 fade-in duration-300">
                
                {/* Continue Button */}
                {currentQ.type === "continue" && (
                  <button
                    onClick={() => handleUserSubmit("Continuer", "Continuer")}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-brand-accent hover:bg-brand-accent/90 transition-colors shadow-lg shadow-brand-accent/20"
                  >
                    Continuer <ArrowRight size={16} />
                  </button>
                )}

                {/* Yes / No */}
                {currentQ.type === "yesno" && (
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleUserSubmit("Oui", "Oui")}
                      className="flex-1 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#1A2235] border border-white/10 hover:border-brand-accent/50 hover:bg-[#1A2235]/80 transition-colors"
                    >
                      Oui
                    </button>
                    <button
                      onClick={() => handleUserSubmit("Non", "Non")}
                      className="flex-1 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#1A2235] border border-white/10 hover:border-brand-accent/50 hover:bg-[#1A2235]/80 transition-colors"
                    >
                      Non
                    </button>
                  </div>
                )}

                {/* Choice */}
                {currentQ.type === "choice" && currentQ.choices && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {currentQ.choices.map((choice) => (
                      <button
                        key={choice}
                        onClick={() => handleUserSubmit(choice, choice)}
                        className="py-3 px-4 rounded-xl text-sm font-semibold text-white bg-[#1A2235] border border-white/10 hover:border-brand-accent/50 hover:bg-[#1A2235]/80 transition-colors"
                      >
                        {choice}
                      </button>
                    ))}
                  </div>
                )}

                {/* Multi-Choice */}
                {currentQ.type === "multi-choice" && currentQ.choices && (
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2 max-h-[120px] overflow-y-auto custom-scrollbar">
                      {currentQ.choices.map((choice) => {
                        const isSelected = multiChoiceSelection.includes(choice);
                        return (
                          <button
                            key={choice}
                            onClick={() => toggleMultiChoice(choice)}
                            className={`py-2 px-4 rounded-full text-xs font-medium border transition-colors flex items-center gap-2 ${
                              isSelected 
                                ? "bg-brand-accent/20 border-brand-accent text-brand-accent" 
                                : "bg-[#1A2235] border-white/10 text-white/70 hover:border-white/30"
                            }`}
                          >
                            {isSelected && <Check size={12} />}
                            {choice}
                          </button>
                        );
                      })}
                    </div>
                    <button
                      onClick={handleMultiChoiceSubmit}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-brand-accent hover:bg-brand-accent/90 transition-colors"
                    >
                      Valider
                    </button>
                  </div>
                )}

                {/* Numeric Input */}
                {currentQ.type === "numeric" && (
                  <form onSubmit={handleNumericSubmit} className="flex gap-2 relative">
                    <input
                      type="number"
                      required
                      min="0"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder={currentQ.placeholder}
                      className="flex-1 bg-[#1A2235] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all text-sm"
                    />
                    <button
                      type="submit"
                      disabled={!inputValue.trim()}
                      className="px-5 rounded-xl bg-brand-accent hover:bg-brand-accent/90 text-black flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <Send size={18} />
                    </button>
                  </form>
                )}

                {/* Textarea Input */}
                {currentQ.type === "textarea" && (
                  <form onSubmit={handleTextareaSubmit} className="flex flex-col gap-2">
                    <textarea
                      required
                      rows={2}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Tapez votre réponse ici..."
                      className="w-full bg-[#1A2235] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all text-sm resize-none custom-scrollbar"
                    />
                    <button
                      type="submit"
                      disabled={!inputValue.trim()}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-brand-accent hover:bg-brand-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Envoyer
                    </button>
                  </form>
                )}

                {/* Calculating state */}
                {currentQ.type === "calculating" && (
                  <div className="flex items-center justify-center py-4 text-brand-text-secondary text-sm">
                    Analyse en cours, veuillez patienter...
                  </div>
                )}

                {/* Result Screen */}
                {currentQ.type === "result" && (
                  <div className="animate-in zoom-in-95 duration-500">
                    {(() => {
                      const score = getScore();
                      let resTitle = "";
                      let resText = "";
                      let themeClass = "";

                      if (score >= 5) {
                        resTitle = "Bonne nouvelle, vous êtes éligible !";
                        resText = "Votre dossier présente plusieurs éléments favorables. Nous vous recommandons de découvrir l’offre la plus adaptée à votre situation.";
                        themeClass = "border-green-500/50 bg-green-500/10 text-green-400";
                      } else if (score >= 3) {
                        resTitle = "Votre dossier mérite une vérification plus poussée";
                        resText = "Votre situation nécessite une analyse complémentaire. Nous vous invitons à consulter nos offres pour aller plus loin.";
                        themeClass = "border-brand-accent/50 bg-brand-accent/10 text-brand-accent";
                      } else {
                        resTitle = "Votre situation n’entre pas clairement dans notre périmètre";
                        resText = "À ce stade, nous ne pouvons pas confirmer que votre dossier entre dans notre périmètre. Vous pouvez recommencer ou consulter nos offres si vous souhaitez aller plus loin.";
                        themeClass = "border-white/20 bg-white/5 text-white";
                      }

                      return (
                        <div className={`p-5 rounded-2xl border text-center ${themeClass}`}>
                          <h4 className="font-bold text-lg mb-2 text-white">{resTitle}</h4>
                          <p className="text-sm opacity-90 mb-6 font-light">{resText}</p>
                          <div className="flex flex-col sm:flex-row gap-3">
                            <button
                              onClick={resetChat}
                              className="flex-1 py-3 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
                            >
                              Recommencer
                            </button>
                            <a
                              href="/offres"
                              className="flex-1 py-3 flex items-center justify-center rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-brand-accent hover:bg-brand-accent/90 transition-colors shadow-lg"
                            >
                              Voir les offres
                            </a>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

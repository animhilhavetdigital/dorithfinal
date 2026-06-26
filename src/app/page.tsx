"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intervention from "@/components/Intervention";
import Solutions from "@/components/Solutions";
import HowItWorks from "@/components/HowItWorks";
import IntermediateCTA from "@/components/IntermediateCTA";
import Vices from "@/components/Vices";
import FormSection from "@/components/FormSection";
import Footer from "@/components/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal animation for all sections on scroll
    const sections = gsap.utils.toArray(".scroll-section");
    sections.forEach((sec: any) => {
      gsap.fromTo(
        sec,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 85%", // trigger when the top of the section hits 85% of the viewport
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, { scope: mainRef });

  return (
    <div ref={mainRef} className="min-h-screen flex flex-col bg-brand-bg">
      <Navbar />

      <main className="flex-1 overflow-hidden">
        {/* Hero Section */}
        <div className="scroll-section relative z-[10] bg-brand-bg">
          <Hero />
        </div>

        {/* Intervention Section - Dark Gradient with top shadow */}
        <div className="scroll-section relative z-[20] bg-gradient-to-b from-brand-bg to-brand-card shadow-[0_-30px_60px_rgba(0,0,0,0.8)] border-t border-brand-border/60">
          <Intervention />
        </div>

        {/* Solutions Section */}
        <div className="scroll-section relative z-[30] bg-gradient-to-b from-brand-card to-brand-bg/50 shadow-[0_-30px_60px_rgba(0,0,0,0.8)] border-t border-white/5">
          <Solutions />
        </div>

        {/* How It Works Section */}
        <div className="scroll-section relative z-[40] bg-brand-bg shadow-[0_-30px_60px_rgba(0,0,0,0.8)] border-t border-brand-border">
          <HowItWorks />
        </div>

        {/* Intermediate CTA */}
        <div className="scroll-section relative z-[50] bg-gradient-to-b from-brand-bg to-brand-card shadow-[0_-30px_60px_rgba(0,0,0,0.8)] border-t border-white/5">
          <IntermediateCTA />
        </div>

        {/* Vices Section */}
        <div className="scroll-section relative z-[60] bg-brand-card shadow-[0_-30px_60px_rgba(0,0,0,0.8)] border-t border-white/5">
          <Vices />
        </div>

        {/* Form Section */}
        <div className="scroll-section relative z-[70] bg-gradient-to-b from-brand-card to-brand-bg shadow-[0_-30px_60px_rgba(0,0,0,0.8)] border-t border-brand-border">
          <FormSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}

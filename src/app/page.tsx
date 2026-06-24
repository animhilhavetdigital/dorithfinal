"use client";

import React, { useRef } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intervention from "@/components/Intervention";
import Solutions from "@/components/Solutions";
import HowItWorks from "@/components/HowItWorks";
import IntermediateCTA from "@/components/IntermediateCTA";
import Vices from "@/components/Vices";
import FormSection from "@/components/FormSection";
import Footer from "@/components/Footer";

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);



  return (
    <div ref={mainRef} className="min-h-screen flex flex-col bg-brand-bg">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <Intervention />
        <Solutions />
        <HowItWorks />
        <IntermediateCTA />
        <Vices />
        <FormSection />
      </main>

      <Footer />
    </div>
  );
}

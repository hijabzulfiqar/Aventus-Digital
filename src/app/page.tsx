"use client";
import React from "react";

import Features03Page from "@/components/client-success-section"; // ClientSuccessSection,
import { WorkingWithSection } from "@/components/working-with-section";
import Features07Page from "@/components/platforms-section"; // PlatformsSection,
import TestimonialsSection from "@/components/testimonials-section";
import { motion } from "framer-motion";
import HeroSection from "@/components/hero-section";
import WhatWeOffer from "@/components/WhatWeOffer";
import AboutUs from "@/components/AboutUs";
import Logos06Page from "@/components/logos-06";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <HeroSection />
      <Logos06Page />
      <WhatWeOffer />
      <AboutUs />

      <Features07Page />
      <TestimonialsSection />
    </main>
  );
}

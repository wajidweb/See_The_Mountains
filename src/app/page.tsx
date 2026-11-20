import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { DestinationGrid } from "@/components/sections/DestinationGrid";
import { PackageGrid } from "@/components/sections/PackageGrid";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Introduction & About */}
      <AboutSection />

      {/* 3. Popular Destinations */}
      <DestinationGrid />

      {/* 4. Featured Tour Packages */}
      <PackageGrid />

      {/* 5. Why Travel With See The Mountains */}
      <WhyUsSection />

      {/* 6. Travel Gallery */}
      <GallerySection />

      {/* 7. Final Contact & WhatsApp Inquiry Area */}
      <ContactSection />
    </>
  );
}

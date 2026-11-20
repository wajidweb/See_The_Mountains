"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle, Clock, ArrowRight } from "lucide-react";
import { tourPackages } from "@/data/packages";
import { buildPackageInquiryLink } from "@/lib/whatsapp";

// Apple-grade cubic-bezier easing
const easeTransition = [0.16, 1, 0.3, 1] as const;

const BASE_COUNT = tourPackages.length; // 10 packages

// Tripled packages array for seamless infinite looping
const INFINITE_PACKAGES = [
  ...tourPackages.map((p, i) => ({ ...p, uniqueKey: `set0-${p.id}-${i}` })),
  ...tourPackages.map((p, i) => ({ ...p, uniqueKey: `set1-${p.id}-${i}` })),
  ...tourPackages.map((p, i) => ({ ...p, uniqueKey: `set2-${p.id}-${i}` })),
];

export function PackageGrid() {
  // Start in the middle set (index 10)
  const [currentIndex, setCurrentIndex] = useState(BASE_COUNT);
  const [enableTransition, setEnableTransition] = useState(true);
  const [stepSize, setStepSize] = useState(300);
  const [isDesktop, setIsDesktop] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Restore animation after instant snap reset
  useEffect(() => {
    if (!enableTransition) {
      const raf = requestAnimationFrame(() => {
        setEnableTransition(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [enableTransition]);

  // Measure card width + gap dynamically
  const updateMetrics = useCallback(() => {
    setIsDesktop(window.innerWidth >= 1024);
    if (containerRef.current) {
      const card = containerRef.current.querySelector<HTMLElement>(".tour-card");
      if (card) {
        const gap = 24; // 1.5rem (gap-6)
        setStepSize(card.offsetWidth + gap);
      }
    }
  }, []);

  useEffect(() => {
    updateMetrics();
    window.addEventListener("resize", updateMetrics);
    return () => window.removeEventListener("resize", updateMetrics);
  }, [updateMetrics]);

  // Infinite Next: always move forward smoothly
  const handleNext = () => {
    setEnableTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // Infinite Prev: always move backward smoothly
  const handlePrev = () => {
    setEnableTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // When animation finishes, seamless instant reset if we crossed set boundaries
  const handleAnimationComplete = () => {
    if (currentIndex >= BASE_COUNT * 2) {
      setEnableTransition(false);
      setCurrentIndex((prev) => prev - BASE_COUNT);
    } else if (currentIndex < BASE_COUNT) {
      setEnableTransition(false);
      setCurrentIndex((prev) => prev + BASE_COUNT);
    }
  };

  // Calculate curved arch offsets for the 4 cards currently in view on desktop
  const getCurveOffset = (index: number) => {
    if (!isDesktop) return { rotate: 0, y: 0 };
    const pos = index - currentIndex;
    switch (pos) {
      case 0:
        return { rotate: -5, y: 22 };
      case 1:
        return { rotate: -1.5, y: 4 };
      case 2:
        return { rotate: 1.5, y: 4 };
      case 3:
        return { rotate: 5, y: 22 };
      default:
        return { rotate: 0, y: 16 };
    }
  };

  // Active dot index (0 to 9)
  const activeDotIndex = ((currentIndex % BASE_COUNT) + BASE_COUNT) % BASE_COUNT;

  const handleDotClick = (targetDot: number) => {
    setEnableTransition(true);
    const diff = targetDot - activeDotIndex;
    setCurrentIndex((prev) => prev + diff);
  };

  return (
    <section id="packages" className="py-20 lg:py-28 bg-[#faf9f6] border-y border-stone-200/70 overflow-hidden relative selection:bg-teal-200">
      {/* Subtle travel doodle accents in background */}
      <div className="absolute top-8 left-10 w-24 h-24 border border-teal-200/40 rounded-full border-dashed pointer-events-none" />
      <div className="absolute bottom-10 right-14 w-36 h-36 border border-peach-200/40 rounded-full border-dashed pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeTransition }}
            className="text-teal-600 font-serif italic text-2xl sm:text-3xl font-medium tracking-wide block mb-1.5"
          >
            Wonderful Place For You
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeTransition }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-800 tracking-tight leading-tight"
          >
            Featured Tour Packages
          </motion.h2>
        </div>

        {/* 4-Card Infinite Carousel Container */}
        <div className="relative max-w-7xl mx-auto px-2 sm:px-4">
          
          {/* Left Arrow Button */}
          <motion.button
            whileHover={{ scale: 1.12, backgroundColor: "#335e5e", color: "#ffffff" }}
            whileTap={{ scale: 0.92 }}
            onClick={handlePrev}
            className="absolute -left-3 sm:-left-5 lg:-left-7 top-1/2 -translate-y-1/2 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-charcoal-900 shadow-2xl border-2 border-stone-300 hover:border-teal-600 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous Package"
          >
            <ChevronLeft className="w-7 h-7 stroke-[2.5]" />
          </motion.button>

          {/* Carousel Viewport Window with vertical padding for curved arch */}
          <div ref={containerRef} className="overflow-hidden py-8 sm:py-10">
            <motion.div
              animate={{ x: -currentIndex * stepSize }}
              transition={enableTransition ? { duration: 0.5, ease: easeTransition } : { duration: 0 }}
              onAnimationComplete={handleAnimationComplete}
              className="flex gap-6 items-stretch"
            >
              {INFINITE_PACKAGES.map((pkg, idx) => {
                const curve = getCurveOffset(idx);
                return (
                  <div
                    key={pkg.uniqueKey}
                    className="tour-card w-[84vw] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] shrink-0 flex flex-col group cursor-pointer"
                    onClick={() => {
                      const link = buildPackageInquiryLink(pkg.title, pkg.duration);
                      window.open(link, "_blank", "noopener,noreferrer");
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: curve.rotate,
                        y: curve.y,
                      }}
                      whileHover={{
                        rotate: 0,
                        y: -10,
                        scale: 1.03,
                        transition: { duration: 0.25 },
                      }}
                      transition={{ duration: 0.45, ease: easeTransition }}
                      className="flex flex-col h-full"
                    >
                      {/* Card Graphic with rounded corners */}
                      <div className="relative w-full aspect-[4/4.8] rounded-3xl overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-300 border border-stone-200/80 bg-stone-900">
                        <Image
                          src={pkg.coverImage}
                          alt={pkg.title}
                          fill
                          sizes="(max-width: 640px) 84vw, (max-width: 1024px) 33vw, 25vw"
                          className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                          priority={idx >= BASE_COUNT && idx < BASE_COUNT + 4}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                        {/* Top Badge */}
                        {pkg.badge && (
                          <div className="absolute top-3.5 left-3.5 z-10">
                            <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-white/95 text-charcoal-800 backdrop-blur-md shadow-sm">
                              {pkg.badge}
                            </span>
                          </div>
                        )}

                        {/* Bottom Overlay Content */}
                        <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                          <div className="flex items-center gap-1.5 text-xs text-mint-200 font-semibold mb-1">
                            <Clock className="w-3.5 h-3.5 text-mint-300" />
                            <span>{pkg.duration}</span>
                          </div>
                          <p className="text-xs font-bold text-white/95 line-clamp-1">
                            {pkg.priceNote}
                          </p>
                        </div>
                      </div>

                      {/* Content Below Card */}
                      <div className="mt-4 text-center px-1">
                        <h3 className="font-bold text-charcoal-800 text-base sm:text-lg group-hover:text-teal-700 transition-colors line-clamp-1">
                          {pkg.destinationName}
                        </h3>

                        <div className="mt-1.5 flex items-center justify-center">
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 group-hover:text-teal-800 transition-colors py-0.5">
                            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                            <span>Inquire on WhatsApp</span>
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Arrow Button */}
          <motion.button
            whileHover={{ scale: 1.12, backgroundColor: "#335e5e", color: "#ffffff" }}
            whileTap={{ scale: 0.92 }}
            onClick={handleNext}
            className="absolute -right-3 sm:-right-5 lg:-right-7 top-1/2 -translate-y-1/2 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-charcoal-900 shadow-2xl border-2 border-stone-300 hover:border-teal-600 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Next Package"
          >
            <ChevronRight className="w-7 h-7 stroke-[2.5]" />
          </motion.button>
        </div>

        {/* Carousel Dot Indicators for the 10 Packages */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
          {Array.from({ length: BASE_COUNT }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === activeDotIndex
                  ? "w-7 sm:w-8 h-2 bg-teal-600"
                  : "w-2 h-2 bg-stone-300 hover:bg-stone-400"
              }`}
              aria-label={`Go to package ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

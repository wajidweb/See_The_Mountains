"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  type Variants,
  useScroll,
  useTransform,
} from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { buildGeneralInquiryLink } from "@/lib/whatsapp";

// Cinematic text reveal with gentle blur-to-focus and graceful deceleration
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.32,
      delayChildren: 0.45,
    },
  },
};

const cinematicTextReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.45,
      ease: [0.22, 1, 0.36, 1] as const, // Elegant smooth deceleration curve
    },
  },
};

const buttonGroupReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-driven Mountain Parallax: Background sinks smoothly as user scrolls
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const scrollParallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scrollFade = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-between text-white overflow-hidden bg-charcoal-950"
    >
      {/* Dynamic Animated Mountain Background Layer */}
      <motion.div
        style={{
          y: scrollParallaxY,
          opacity: scrollFade,
        }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {/* Continuous Ken Burns Cinematic Breathing Animation */}
        <motion.div
          animate={{
            scale: [1.06, 1.13, 1.06],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-full h-full"
        >
          <Image
            src="/bgimage.jpg"
            alt="Majestic Karakoram Mountain Peaks"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Soft, luminous vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-charcoal-950/50 z-10" />

        {/* Subtle atmospheric light shimmer across mountain spires */}
        <motion.div
          animate={{
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-radial from-teal-400/10 via-transparent to-transparent z-10 pointer-events-none"
        />
      </motion.div>

      {/* Spacer for the overlaying transparent Navbar */}
      <div className="h-28 sm:h-32 lg:h-36" />

      {/* Hero Core Content with Graceful, Cinematic Text Entrance */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center z-20 flex-1 flex flex-col justify-center items-center"
      >
        {/* Animated Punchy Headline (Smooth blur-to-focus reveal) */}
        <motion.h1
          variants={cinematicTextReveal}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] font-extrabold tracking-tight leading-[1.08] mb-6 text-white drop-shadow-md select-none"
        >
          Discover Pakistan&apos;s <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-100 via-peach-200 to-coral-300">
            Majestic Mountains
          </span>
        </motion.h1>

        {/* Animated Meaningful Subhead */}
        <motion.p
          variants={cinematicTextReveal}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-sand-100 mb-10 leading-relaxed font-normal drop-shadow-xs"
        >
          Explore breathtaking valleys, crystal clear lakes, and snowy peaks with easy trips planned for an unforgettable adventure.
        </motion.p>

        {/* Animated 2 Action Buttons */}
        <motion.div
          variants={buttonGroupReveal}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
        >
          {/* Button 1: Base #cf5940, Hover to #E89A87 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className="w-full sm:w-auto"
          >
            <Button
              href="#destinations"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto font-bold px-8 py-4 text-base shadow-md bg-[#cf5940] hover:bg-[#E89A87] transition-colors"
            >
              Explore Destinations
            </Button>
          </motion.div>

          {/* Button 2: Primary Action Dark Teal (#3D7070) */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className="w-full sm:w-auto"
          >
            <Button
              href={buildGeneralInquiryLink()}
              isExternal
              variant="primary"
              size="lg"
              className="w-full sm:w-auto font-bold px-8 py-4 text-base shadow-xl shadow-teal-900/30 transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-1.5" />
              Contact on WhatsApp
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 1.1 }}
        className="relative pb-8 text-center z-20 hidden sm:flex flex-col items-center justify-center text-white/70 hover:text-white transition-colors"
      >
        <a href="#about" aria-label="Scroll down to About section" className="flex flex-col items-center gap-1.5 group">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-sand-200 group-hover:text-peach-200 transition-colors">
            Scroll to Discover
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-peach-300" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}

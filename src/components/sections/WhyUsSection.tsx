"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ShieldCheck, Wallet, ArrowRight } from "lucide-react";
import { buildGeneralInquiryLink } from "@/lib/whatsapp";

// Luxurious Apple-grade cubic-bezier easing
const easeTransition = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const collageVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -35,
    scale: 0.96,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: easeTransition,
    },
  },
};

const textItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: easeTransition,
    },
  },
};

const featureVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: easeTransition,
    },
  },
};

const travelerVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 35,
    scale: 0.92,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.15,
      ease: easeTransition,
      delay: 0.2,
    },
  },
};

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-70px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center"
        >
          {/* Left Column: Photo Collage & Hot Air Balloons */}
          <motion.div
            variants={collageVariants}
            className="lg:col-span-5 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-[500px] lg:max-w-none"
            >
              <Image
                src="/whyus-collage.webp"
                alt="Scenic northern Pakistan destinations collage"
                width={885}
                height={680}
                className="w-full h-auto object-contain select-none drop-shadow-sm"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Center Column: Wider Typography & Features */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:pr-2 xl:pr-4">
            {/* Elegant Script Subtitle in Brand Teal */}
            <motion.span
              variants={textItemVariants}
              className="text-teal-600 font-serif italic text-2xl sm:text-3xl font-medium tracking-wide block mb-1"
            >
              Why Choose Us
            </motion.span>

            {/* Main Headline in Brand Charcoal */}
            <motion.h2
              variants={textItemVariants}
              className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-black text-charcoal-800 tracking-tight leading-[1.12] mb-4"
            >
              Plan Your Trip
              <br />
              With Real Locals
            </motion.h2>

            {/* Concise, Meaningful Intro (No Dashes) */}
            <motion.p
              variants={textItemVariants}
              className="text-charcoal-500 text-sm sm:text-base leading-relaxed mb-7 max-w-xl"
            >
              No middleman markups or guesswork. Just honest pricing, verified mountain stays, and seasoned northern drivers who know every pass intimately.
            </motion.p>

            {/* Features List (2 High-Impact Pillars) */}
            <div className="space-y-5 mb-8">
              {/* Feature 1: Honest Pricing */}
              <motion.div
                variants={featureVariants}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-4 p-2 rounded-xl transition-colors hover:bg-teal-50/40"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-teal-500/25 mt-0.5"
                >
                  <Wallet className="w-5 h-5 text-white" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-charcoal-800 text-base sm:text-lg mb-1 leading-snug">
                    Honest Local Pricing
                  </h3>
                  <p className="text-charcoal-500 text-xs sm:text-sm leading-relaxed">
                    Direct hotel and transport rates so you enjoy memorable mountain expeditions without inflated agency fees.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2: Seasoned Drivers */}
              <motion.div
                variants={featureVariants}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-4 p-2 rounded-xl transition-colors hover:bg-teal-50/40"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -6 }}
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-teal-500/25 mt-0.5"
                >
                  <ShieldCheck className="w-5 h-5 text-white" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-charcoal-800 text-base sm:text-lg mb-1 leading-snug">
                    Seasoned Mountain Drivers
                  </h3>
                  <p className="text-charcoal-500 text-xs sm:text-sm leading-relaxed">
                    Vetted local drivers and 4x4 jeeps tested on Karakoram and Himalayan passes, keeping your journey safe.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Action Pill Button */}
            <motion.div variants={textItemVariants}>
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={buildGeneralInquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#ce5a3f] hover:bg-[#b84e35] text-white font-semibold text-sm transition-all shadow-md shadow-[#ce5a3f]/25 hover:shadow-lg hover:shadow-[#ce5a3f]/35 active:translate-y-0 duration-200"
              >
                <span>Plan Your Trip</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Traveler Character Element (Smaller Size, Leaving More Width for Content) */}
          <motion.div
            variants={travelerVariants}
            className="lg:col-span-2 flex justify-center lg:justify-end items-end pt-4 lg:pt-0"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="w-full max-w-[200px] sm:max-w-[230px] lg:max-w-[210px] xl:max-w-[230px]"
            >
              <Image
                src="/whyus-traveler.webp"
                alt="Excited mountain traveler pointing forward"
                width={736}
                height={1246}
                className="w-full h-auto object-contain select-none drop-shadow-sm"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

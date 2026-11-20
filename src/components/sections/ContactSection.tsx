"use client";

import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { AGENCY_DETAILS } from "@/data/navigation";
import { buildGeneralInquiryLink } from "@/lib/whatsapp";

// Apple-grade cubic-bezier easing
const easeTransition = [0.16, 1, 0.3, 1] as const;

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.98,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.0,
      ease: easeTransition,
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const textFadeVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: easeTransition,
    },
  },
};

const actionVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 25,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.95,
      ease: easeTransition,
      delay: 0.25,
    },
  },
};

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-r from-[#264848] via-[#325d5d] to-[#3D7070] px-8 sm:px-12 lg:px-16 py-14 sm:py-16 lg:py-20 shadow-xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          {/* Subtle animated ambient background glows */}
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-mint-300 blur-3xl pointer-events-none"
          />

          {/* Left Side: Title & Short Description */}
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <motion.h2
              variants={textFadeVariants}
              className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-white tracking-tight leading-[1.18]"
            >
              Ready To See The Mountains?
            </motion.h2>
            <motion.p
              variants={textFadeVariants}
              className="mt-3.5 text-mint-100/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl"
            >
              Connect with our trip planners on WhatsApp for custom itineraries, departure dates, and instant quotes.
            </motion.p>
          </div>

          {/* Curved Hand-Drawn Animated Arrow (Self-Drawing Vector) */}
          <div className="hidden lg:block absolute left-[56%] bottom-10 w-44 h-16 pointer-events-none select-none">
            <svg
              viewBox="0 0 180 60"
              fill="none"
              className="w-full h-full"
            >
              <motion.path
                d="M 10 50 C 60 52, 120 45, 165 14"
                stroke="rgba(255, 255, 255, 0.75)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.75 }}
                viewport={{ once: true }}
                transition={{ duration: 1.15, ease: "easeInOut", delay: 0.4 }}
              />
              <motion.path
                d="M 152 14 L 165 14 L 163 26"
                stroke="rgba(255, 255, 255, 0.75)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 0.75, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 1.4 }}
              />
            </svg>
          </div>

          {/* Right Side: Primary CTA & Call Link with Framer Motion */}
          <motion.div
            variants={actionVariants}
            className="relative z-10 flex flex-col items-center shrink-0"
          >
            {/* White Pill Button */}
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={buildGeneralInquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-white hover:bg-stone-50 text-charcoal-800 font-bold text-sm sm:text-base shadow-lg hover:shadow-2xl hover:shadow-black/20 transition-all duration-200"
            >
              <motion.span
                className="inline-block"
                whileHover={{ rotate: [0, -12, 12, -8, 0] }}
                transition={{ duration: 0.45 }}
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
              </motion.span>
              <span>Contact On WhatsApp</span>
            </motion.a>

            {/* Direct Call Link below button with micro-motion */}
            <motion.a
              whileHover={{ x: 3 }}
              href={`tel:${AGENCY_DETAILS.phoneTel}`}
              className="mt-3.5 text-xs sm:text-sm font-medium text-white/85 hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              <span>Call Directly: {AGENCY_DETAILS.phoneDisplay}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, ArrowRight, ArrowDown } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const headlineVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardSlideVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.95,
      delay: 0.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function AboutSection() {
  return (
    <section id="about" className="relative py-8 sm:py-14 lg:py-20 bg-[#0e1717] overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Main Banner Container with Signature Continuous Border Radius */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="relative rounded-[1.75rem] sm:rounded-[2.75rem] lg:rounded-[3.5rem] overflow-hidden w-full min-h-[580px] sm:min-h-[680px] lg:min-h-[760px] xl:min-h-[820px] flex flex-col justify-between shadow-2xl border border-slate-200/70"
        >
          {/* Panoramic Mountain Landscape Background */}
          <Image
            src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=2400&q=85"
            alt="Majestic high mountain peak See The Mountains"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-[center_35%] select-none pointer-events-none"
          />

          {/* Gentle Sky and Lighting Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-black/45 pointer-events-none" />

          {/* Top Right Explore now Button */}
          <motion.div
            variants={itemVariants}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 lg:top-10 lg:right-10 z-20"
          >
            <Link
              href="#packages"
              className="inline-flex items-center justify-center rounded-full border border-slate-300/80 bg-white/90 hover:bg-white backdrop-blur-md text-slate-950 px-4 sm:px-6 py-1.5 sm:py-2.5 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg hover:border-slate-400 select-none active:scale-95"
            >
              Explore now
            </Link>
          </motion.div>

          {/* Top Left Content: About Us Eyebrow, Headline and Conjoined Button */}
          <div className="relative z-10 pt-6 sm:pt-10 lg:pt-14 pl-5 sm:pl-9 lg:pl-14 pr-20 sm:pr-8 max-w-3xl">
            {/* Clear About Us Eyebrow Pill */}
            <motion.div variants={itemVariants} className="mb-3 sm:mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/85 backdrop-blur-md border border-slate-300/80 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-800 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                <span>About Us</span>
              </span>
            </motion.div>

            {/* Clear Company Name Headline */}
            <motion.h2
              variants={headlineVariants}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-light tracking-tight text-slate-900 leading-[1.08] select-none font-heading"
            >
              See The <br />
              <span className="font-medium text-slate-950">Mountains</span>
            </motion.h2>

            {/* Signature Conjoined Pill and Circle Button */}
            <motion.div variants={itemVariants} className="mt-5 sm:mt-7 lg:mt-8">
              <Link
                href="#packages"
                className="inline-flex items-center bg-white rounded-full p-1 sm:p-1.5 pl-4 sm:pl-6 pr-1 sm:pr-1.5 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all group select-none w-fit"
              >
                <span className="text-slate-900 font-semibold text-xs sm:text-base mr-2.5 sm:mr-3.5 tracking-tight">
                  Join With Us
                </span>
                <span className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Bottom Area: Stacked Action Circles and Chamfered Card */}
          <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between w-full mt-auto gap-4 sm:gap-6">
            {/* Action Circles: Horizontal on mobile, vertical stack on tablet and desktop */}
            <motion.div
              variants={itemVariants}
              className="pb-2 sm:pb-8 lg:pb-12 pl-5 sm:pl-9 lg:pl-14 flex flex-row sm:flex-col items-center gap-2 sm:gap-1.5 select-none"
            >
              {/* Circle 1: Contact */}
              <Link
                href="#contact"
                className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border border-white/60 bg-white/10 hover:bg-white/25 hover:border-white backdrop-blur-md flex items-center justify-center text-white text-[11px] sm:text-xs md:text-sm font-medium tracking-wide transition-all shadow-md group"
              >
                <span className="group-hover:scale-105 transition-transform">Contact</span>
              </Link>

              {/* Circle 2: Arrow Down */}
              <a
                href="#destinations"
                className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border border-white/60 bg-white/10 hover:bg-white/25 hover:border-white backdrop-blur-md flex items-center justify-center text-white transition-all shadow-md group"
                aria-label="Scroll down to destinations"
              >
                <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 stroke-[1.5] group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>

            {/* Bottom Right White Information Card */}
            <motion.div
              variants={cardSlideVariants}
              className="relative w-full sm:w-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl self-end"
            >
              {/* Desktop and Tablet Chamfered SVG Background with Rounded Corners */}
              <svg
                viewBox="0 0 540 340"
                preserveAspectRatio="none"
                className="hidden sm:block absolute inset-0 w-full h-full fill-white drop-shadow-2xl pointer-events-none"
              >
                <path d="M 140 0 L 508 0 Q 540 0 540 32 L 540 340 L 0 340 L 0 140 Q 0 120 16 104 L 104 16 Q 120 0 140 0 Z" />
              </svg>

              {/* Mobile Card Background with Elegant Rounded Top */}
              <div className="sm:hidden absolute inset-0 bg-white rounded-t-3xl shadow-2xl pointer-events-none" />

              {/* Card Content with Responsive Breathing Room */}
              <div className="relative z-10 p-5 sm:p-7 md:p-8 lg:p-10 pt-6 sm:pt-8 md:pt-9 lg:pt-11 pl-5 sm:pl-10 md:pl-12 lg:pl-16">
                {/* Top Right Circular Arrow Button */}
                <div className="flex justify-end mb-3 sm:mb-5">
                  <Link
                    href="#destinations"
                    className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border border-slate-300 flex items-center justify-center text-slate-800 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all group"
                    aria-label="Explore curated destinations"
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                {/* Clear About Us Text Content Without Dashes */}
                <p className="text-base sm:text-xl md:text-2xl lg:text-[1.65rem] font-medium tracking-tight text-slate-900 leading-snug sm:leading-tight pr-1 sm:pr-4 font-heading">
                  See The Mountains is an independent Pakistani tour company dedicated to arranging safe, affordable, and authentic journeys across the high peaks with trusted local guides.
                </p>

                {/* Subtle Divider Line */}
                <div className="border-t border-slate-200/90 my-4 sm:my-5 md:my-6" />

                {/* Bottom Metadata Bar Without Dashes */}
                <div className="flex items-center justify-between text-[10px] sm:text-xs font-semibold tracking-wider text-slate-700 uppercase">
                  <span>(ABOUT US)</span>
                  <span>(OUR STORY)</span>
                  <span className="font-bold text-slate-950 text-xs sm:text-sm">01</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

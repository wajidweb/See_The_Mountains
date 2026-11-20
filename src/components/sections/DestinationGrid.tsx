"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { destinations } from "@/data/destinations";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Verified authentic northern Pakistan imagery for destination cards
const DESTINATION_IMAGES: Record<string, string> = {
  hunza: "/destinations/hunza.webp",
  skardu: "/destinations/skardu.webp",
  "fairy-meadows": "/destinations/fairy-meadows.webp",
  swat: "/destinations/swat.webp",
  "naran-kaghan": "/destinations/naran-kaghan.webp",
  "neelum-valley": "/destinations/neelum-valley.webp",
};

// Apple-grade cubic-bezier easing
const easeTransition = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.95,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: easeTransition,
    },
  },
};

export function DestinationGrid() {
  return (
    <section id="destinations" className="py-20 lg:py-28 relative overflow-hidden bg-black border-y border-white/10">
      {/* Background Image Layer with Black Transparent Opacity */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <Image
          src="/bgimage.jpg"
          alt="Northern Pakistan mountain landscape"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Black Transparent Overlay */}
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* High-contrast dark mode heading */}
        <SectionHeading
          light={true}
          subtitle="Top Destinations"
          title="Where Do You Want To Go?"
          description="Discover the most beautiful mountain valleys in Pakistan. Pick a place you love and let us plan your trip."
        />

        {/* Tall, cinematic destination grid with Framer Motion Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4"
        >
          {destinations.map((dest) => {
            const imageSrc = DESTINATION_IMAGES[dest.slug] || dest.cardImage;

            return (
              <motion.div
                key={dest.slug}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.35, ease: easeTransition }}
              >
                <Link
                  href={`/destinations/${dest.slug}/`}
                  className="group relative block h-[420px] sm:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-end p-7 sm:p-8 select-none bg-stone-900 border border-white/15 hover:border-white/40 ring-1 ring-black/50"
                >
                  {/* Full-Bleeding Tall Destination Image */}
                  <Image
                    src={imageSrc}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    priority={dest.slug === "hunza" || dest.slug === "skardu"}
                  />

                  {/* Rich Bottom Shadow Gradient for Crisp Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent group-hover:opacity-95 transition-opacity" />

                  {/* Destination Name with Interactive Hover Arrow */}
                  <div className="relative z-10 flex items-center justify-between">
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-xl group-hover:text-peach-200 transition-colors">
                      {dest.name}
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300 border border-white/30 shadow-lg"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

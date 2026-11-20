"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, X, MapPin, ZoomIn } from "lucide-react";

interface GalleryPhoto {
  url: string;
  caption: string;
  location: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    url: "/gallery/attabad-lake.webp",
    caption: "Boating on the turquoise waters of Attabad Lake against rugged Karakoram cliffs",
    location: "Attabad Lake, Hunza",
  },
  {
    url: "/gallery/shangrila-skardu.webp",
    caption: "Iconic pagoda resort nestled on Lower Kachura Lake with snowy Himalayan peaks",
    location: "Shangrila Resort, Skardu",
  },
  {
    url: "/gallery/fairy-meadows.webp",
    caption: "Horse rider and reflection pool with the mighty Nanga Parbat 8126m soaring above",
    location: "Fairy Meadows, Diamer",
  },
  {
    url: "/gallery/passu-cones.webp",
    caption: "Dramatic cathedral spires of Passu Cones rising above the Hunza River and KKH",
    location: "Passu Cones, Gojal",
  },
  {
    url: "/gallery/saiful-malook.webp",
    caption: "Crystal glacial mirror reflection of Lake Saiful Malook beneath snow covered peaks",
    location: "Naran, Kaghan Valley",
  },
  {
    url: "/gallery/baltit-fort.webp",
    caption: "Historic 700 year old Baltit Fort commanding views over Karimabad and Ultar Sar",
    location: "Karimabad, Hunza Valley",
  },
  {
    url: "/gallery/deosai-plains.webp",
    caption: "Endless rolling alpine wilderness and wildlife sanctuary of the Land of Giants",
    location: "Deosai National Park, Skardu",
  },
  {
    url: "/gallery/kalam-swat.webp",
    caption: "Emerald waters of Swat River flowing through golden autumn pine forests and valleys",
    location: "Kalam Valley, Swat",
  },
];

// Apple-grade cubic-bezier easing
const easeTransition = [0.16, 1, 0.3, 1] as const;

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: easeTransition,
      staggerChildren: 0.12,
    },
  },
};

const headerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: easeTransition },
  },
};

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const totalPhotos = GALLERY_PHOTOS.length;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalPhotos - 1 : prev - 1));
  }, [totalPhotos]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalPhotos - 1 ? 0 : prev + 1));
  }, [totalPhotos]);

  const handleLightboxPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === null || prev === 0 ? totalPhotos - 1 : prev - 1));
  }, [totalPhotos]);

  const handleLightboxNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null || prev === totalPhotos - 1 ? 0 : prev + 1));
  }, [totalPhotos]);

  const handleCloseLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowLeft") handleLightboxPrev();
      if (e.key === "ArrowRight") handleLightboxNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, handleCloseLightbox, handleLightboxPrev, handleLightboxNext]);

  // Indices for left, current, and right peek slides
  const prevIndex = (currentIndex - 1 + totalPhotos) % totalPhotos;
  const nextIndex = (currentIndex + 1) % totalPhotos;

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#eef6f3] border-y border-mint-200/80 overflow-hidden relative selection:bg-teal-200">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-teal-100/35 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-white/70 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Header with Short Meaningful Description */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto"
        >
          <motion.div variants={headerItemVariants}>
            <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-teal-600 hover:text-teal-700 tracking-wide cursor-default transition-colors mb-2">
              <span>2026 Edition</span>
              <span className="text-xs">↗</span>
            </span>
          </motion.div>

          <motion.h2
            variants={headerItemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-800 tracking-tight leading-tight mb-3"
          >
            Explore Our Gallery
          </motion.h2>

          <motion.p
            variants={headerItemVariants}
            className="text-charcoal-500 text-sm sm:text-base leading-relaxed"
          >
            Glimpse the soaring peaks, mirror lakes, and timeless alpine valleys captured across our northern expeditions.
          </motion.p>
        </motion.div>

        {/* Carousel Container with Framer Motion Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.95, ease: easeTransition }}
          className="relative flex items-center justify-center max-w-6xl mx-auto"
        >
          {/* Left Navigation Arrow */}
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#335e5e", color: "#ffffff" }}
            whileTap={{ scale: 0.92 }}
            onClick={handlePrev}
            className="absolute -left-2 sm:left-2 md:-left-6 lg:-left-10 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-charcoal-900 shadow-2xl border-2 border-stone-300 hover:border-teal-600 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-7 h-7 stroke-[2.5]" />
          </motion.button>

          {/* Slides Track */}
          <div className="relative w-full flex items-center justify-center py-4 sm:py-6">
            
            {/* Left Peek Slide with Framer Motion Hover */}
            <motion.div
              whileHover={{ scale: 0.94, opacity: 0.85 }}
              transition={{ duration: 0.3 }}
              onClick={() => setCurrentIndex(prevIndex)}
              className="hidden sm:block absolute left-0 w-[14vw] max-w-[200px] aspect-[16/11] rounded-2xl overflow-hidden opacity-50 cursor-pointer -translate-x-1/4 scale-90 select-none shadow-md"
            >
              <Image
                src={GALLERY_PHOTOS[prevIndex].url}
                alt={GALLERY_PHOTOS[prevIndex].caption}
                fill
                sizes="200px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
            </motion.div>

            {/* Center Active Slide with Smooth Transition (Matching gallerycarousel.png) */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0.85, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: easeTransition }}
              onClick={() => setLightboxIndex(currentIndex)}
              className="group relative w-full sm:w-[78%] md:w-[74%] lg:w-[70%] max-w-[820px] aspect-[16/10] sm:aspect-[16/9.8] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl cursor-pointer select-none bg-stone-900"
            >
              <Image
                src={GALLERY_PHOTOS[currentIndex].url}
                alt={GALLERY_PHOTOS[currentIndex].caption}
                fill
                sizes="(max-width: 768px) 100vw, 820px"
                className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                priority
              />

              {/* Hover Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Zoom In Badge on Hover */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-medium border border-white/20 shadow-md">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Click to view full</span>
                </span>
              </div>

              {/* Bottom Caption & Location with Entrance Animation */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="absolute bottom-10 left-5 right-5 sm:left-8 sm:right-8 z-20 text-white"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-peach-300 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-coral-400" />
                  <span>{GALLERY_PHOTOS[currentIndex].location}</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-white/90 line-clamp-1 max-w-xl">
                  {GALLERY_PHOTOS[currentIndex].caption}
                </p>
              </motion.div>

              {/* Dot Indicators Pill Overlay (exact match to gallerycarousel.png) */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                {GALLERY_PHOTOS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(idx);
                    }}
                    className={`transition-all duration-300 rounded-full ${
                      idx === currentIndex
                        ? "w-5 sm:w-6 h-1.5 sm:h-2 bg-white"
                        : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/40 hover:bg-white/75"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right Peek Slide with Framer Motion Hover */}
            <motion.div
              whileHover={{ scale: 0.94, opacity: 0.85 }}
              transition={{ duration: 0.3 }}
              onClick={() => setCurrentIndex(nextIndex)}
              className="hidden sm:block absolute right-0 w-[14vw] max-w-[200px] aspect-[16/11] rounded-2xl overflow-hidden opacity-50 cursor-pointer translate-x-1/4 scale-90 select-none shadow-md"
            >
              <Image
                src={GALLERY_PHOTOS[nextIndex].url}
                alt={GALLERY_PHOTOS[nextIndex].caption}
                fill
                sizes="200px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
            </motion.div>

          </div>

          {/* Right Navigation Arrow */}
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#335e5e", color: "#ffffff" }}
            whileTap={{ scale: 0.92 }}
            onClick={handleNext}
            className="absolute -right-2 sm:right-2 md:-right-6 lg:-right-10 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-charcoal-900 shadow-2xl border-2 border-stone-300 hover:border-teal-600 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-7 h-7 stroke-[2.5]" />
          </motion.button>
        </motion.div>

      </div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-lg flex items-center justify-center p-3 sm:p-6 lg:p-10 select-none"
            onClick={handleCloseLightbox}
          >
            {/* Close Button at Top Right */}
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#f4f4f5" }}
              whileTap={{ scale: 0.92 }}
              onClick={handleCloseLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-neutral-900 shadow-2xl flex items-center justify-center transition-all cursor-pointer ring-2 ring-white/30"
              aria-label="Close Preview"
            >
              <X className="w-6 h-6 stroke-[2.5]" />
            </motion.button>

            {/* Lightbox Previous Button */}
            <motion.button
              whileHover={{ scale: 1.12, backgroundColor: "#f4f4f5" }}
              whileTap={{ scale: 0.92 }}
              onClick={(e) => {
                e.stopPropagation();
                handleLightboxPrev();
              }}
              className="absolute left-3 sm:left-6 lg:left-10 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-neutral-900 shadow-2xl flex items-center justify-center transition-all cursor-pointer ring-2 ring-white/30"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.5]" />
            </motion.button>

            {/* Main Lightbox Content Area */}
            <div
              className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.94, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: -12 }}
                  transition={{ duration: 0.32, ease: easeTransition }}
                  className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[76vh] rounded-2xl overflow-hidden shadow-2xl bg-black/40 flex items-center justify-center"
                >
                  <Image
                    src={GALLERY_PHOTOS[lightboxIndex].url}
                    alt={GALLERY_PHOTOS[lightboxIndex].caption}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Lightbox Info Bar Below Image */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="w-full mt-4 flex items-center justify-between text-white/90 px-2 sm:px-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-peach-300">
                    <MapPin className="w-3.5 h-3.5 text-coral-400" />
                    <span>{GALLERY_PHOTOS[lightboxIndex].location}</span>
                  </div>
                  <span className="hidden sm:inline text-white/30">•</span>
                  <p className="text-xs sm:text-sm text-white/80 line-clamp-1">
                    {GALLERY_PHOTOS[lightboxIndex].caption}
                  </p>
                </div>

                <div className="text-xs font-medium text-white/60 tracking-wider shrink-0 ml-4">
                  {lightboxIndex + 1} / {totalPhotos}
                </div>
              </motion.div>
            </div>

            {/* Lightbox Next Button */}
            <motion.button
              whileHover={{ scale: 1.12, backgroundColor: "#f4f4f5" }}
              whileTap={{ scale: 0.92 }}
              onClick={(e) => {
                e.stopPropagation();
                handleLightboxNext();
              }}
              className="absolute right-3 sm:right-6 lg:right-10 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-neutral-900 shadow-2xl flex items-center justify-center transition-all cursor-pointer ring-2 ring-white/30"
              aria-label="Next Image"
            >
              <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.5]" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

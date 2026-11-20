import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  getDestinationBySlug,
  getAllDestinationSlugs,
} from "@/data/destinations";
import { getPackagesByDestination } from "@/data/packages";
import {
  buildDestinationInquiryLink,
  buildPackageInquiryLink,
} from "@/lib/whatsapp";
import {
  Mountain,
  MapPin,
  Clock,
  Compass,
  Sparkles,
  MessageCircle,
  ArrowRight,
  ChevronRight,
  Calendar,
  Sun,
} from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

// 1. Static pre-rendering for all destination routes
export async function generateStaticParams() {
  return getAllDestinationSlugs().map((slug) => ({
    slug,
  }));
}

// 2. Dynamic SEO metadata generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const destination = getDestinationBySlug(params.slug);

  if (!destination) {
    return {
      title: "Destination Not Found | See The Mountains",
    };
  }

  return {
    title: `${destination.name} Travel Guide | See The Mountains`,
    description: `Complete travel guide for ${destination.name}. Top places to visit, best seasons, travel tips, and tour packages.`,
    openGraph: {
      title: `${destination.name} | See The Mountains Pakistan`,
      description: destination.tagline,
      images: [
        {
          url: destination.cardImage,
          width: 1200,
          height: 800,
          alt: `${destination.name} in Pakistan`,
        },
      ],
    },
  };
}

export default function DestinationPage({ params }: Props) {
  const destination = getDestinationBySlug(params.slug);

  if (!destination) {
    notFound();
  }

  const matchingPackages = getPackagesByDestination(destination.slug);

  return (
    <div className="bg-white min-h-screen text-charcoal-900">
      
      {/* ============================================================== */}
      {/* 1. DESTINATION HERO                                           */}
      {/* ============================================================== */}
      <section className="relative min-h-[70vh] sm:min-h-[76vh] lg:min-h-[82vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <Image
            src={destination.cardImage}
            alt={destination.name}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          {/* High-contrast dark overlay for optimal text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/45" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
          {/* Breadcrumb Navigation */}
          <nav className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/90 mb-5 font-semibold">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-70" />
            <Link href="/#destinations" className="hover:text-white transition-colors">
              Destinations
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-70" />
            <span className="text-peach-300 font-bold">{destination.name}</span>
          </nav>

          {/* Region and Elevation Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-4">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white text-xs sm:text-sm font-bold border border-white/30 shadow-sm">
              <MapPin className="w-4 h-4 text-coral-400" />
              <span>{destination.region}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white text-xs sm:text-sm font-bold border border-white/30 shadow-sm">
              <Mountain className="w-4 h-4 text-mint-300" />
              <span>{destination.elevation}</span>
            </span>
          </div>

          {/* Destination Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-5 drop-shadow-2xl">
            {destination.name}
          </h1>

          {/* Short Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-white font-medium max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow-md">
            {destination.tagline}
          </p>

          {/* Explore / Book Your Trip Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md sm:max-w-none mx-auto">
            <a
              href={buildDestinationInquiryLink(destination.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-base shadow-xl shadow-[#25D366]/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Book Your Trip on WhatsApp</span>
            </a>

            <a
              href="#about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md font-bold text-base border border-white/35 transition-all duration-200"
            >
              <span>Explore Destination</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. ABOUT THE DESTINATION                                      */}
      {/* ============================================================== */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 bg-[#f8f7f4] border-b border-stone-200/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-teal-700 font-serif italic text-2xl sm:text-3xl font-bold tracking-wide block mb-1.5">
              About The Destination
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight leading-tight">
              What Makes {destination.name} Special?
            </h2>
          </div>

          {/* Introduction & Highlights Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Short Introduction & Story */}
            <div className="lg:col-span-6 space-y-5 text-charcoal-700 leading-relaxed text-base sm:text-lg">
              {destination.overview.map((paragraph, idx) => (
                <p key={idx} className="font-medium">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Right: Natural Beauty and Experiences */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-sm">
              <h3 className="text-lg sm:text-xl font-black text-charcoal-900 mb-5 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-teal-600" />
                <span>Natural Beauty & Experiences</span>
              </h3>

              <div className="space-y-3">
                {destination.experiences.map((exp, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-stone-50 hover:bg-teal-50/60 transition-colors">
                    <span className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-charcoal-800 font-semibold leading-relaxed">
                      {exp}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. POPULAR PLACES TO VISIT                                    */}
      {/* ============================================================== */}
      <section id="places" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-teal-700 font-serif italic text-2xl sm:text-3xl font-bold tracking-wide block mb-1.5">
              Popular Places To Visit
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight leading-tight mb-3">
              Famous Attractions
            </h2>
            <p className="text-charcoal-700 text-sm sm:text-base font-medium leading-relaxed">
              Explore the key sightseeing points, historic monuments, and scenic landmarks across {destination.name}.
            </p>
          </div>

          {/* Attractions Small Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {destination.attractions.map((attraction, idx) => (
              <div
                key={idx}
                className="group rounded-3xl overflow-hidden bg-white border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1.5"
              >
                {/* Small Card Image */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-stone-900">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>

                {/* Card Text Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-extrabold text-lg sm:text-xl text-charcoal-900 mb-2 group-hover:text-teal-700 transition-colors">
                      {attraction.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-normal">
                      {attraction.description}
                    </p>
                  </div>

                  {attraction.highlights && attraction.highlights.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-stone-200 flex flex-wrap gap-1.5">
                      {attraction.highlights.map((h, i) => (
                        <span key={i} className="text-[11px] px-2.5 py-1 rounded-full bg-stone-100 text-charcoal-800 border border-stone-300 font-semibold">
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. PLAN YOUR TRIP                                             */}
      {/* ============================================================== */}
      <section id="plan" className="py-16 sm:py-20 lg:py-24 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-teal-700 font-serif italic text-2xl sm:text-3xl font-bold tracking-wide block mb-1.5">
              Ready To Travel
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight leading-tight mb-3">
              Plan Your Trip
            </h2>
            <p className="text-charcoal-700 text-sm sm:text-base font-medium leading-relaxed">
              Essential seasonal advice, ideal trip lengths, and custom tour packages designed for {destination.name}.
            </p>
          </div>

          {/* Travel Info: Best Time To Visit */}
          <div className="mb-14">
            <h3 className="text-xl sm:text-2xl font-black text-charcoal-900 mb-6 flex items-center gap-2">
              <Sun className="w-5 h-5 text-coral-600" />
              <span>Best Time to Visit & Seasons</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {destination.bestTimeToVisit.map((season, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-3xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-extrabold text-base sm:text-lg text-charcoal-900">
                        {season.season}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-teal-700 text-white shadow-2xs">
                        {season.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs sm:text-sm text-teal-800 font-bold mb-3">
                      <Calendar className="w-4 h-4 text-teal-600" />
                      <span>{season.months}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-normal">
                      {season.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Suggested Duration Banner */}
            <div className="mt-6 p-5 rounded-2xl bg-mint-100/90 border border-teal-300 text-charcoal-900 flex items-center gap-3 text-sm sm:text-base font-medium">
              <Clock className="w-5 h-5 text-teal-700 shrink-0" />
              <span>
                <strong>Recommended Duration:</strong> Plan for {destination.suggestedDuration} to comfortably experience the main highlights without rushing.
              </span>
            </div>
          </div>

          {/* Available Tour Packages (if offered) */}
          {matchingPackages.length > 0 && (
            <div className="mb-16">
              <h3 className="text-xl sm:text-2xl font-black text-charcoal-900 mb-6 flex items-center gap-2">
                <Compass className="w-5 h-5 text-teal-600" />
                <span>Featured Tour Packages For {destination.name}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchingPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="group rounded-3xl overflow-hidden bg-white border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Package Cover Image */}
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-900">
                        <Image
                          src={pkg.coverImage}
                          alt={pkg.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-106 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                        {pkg.badge && (
                          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold uppercase bg-white/95 text-charcoal-800 shadow-sm">
                            {pkg.badge}
                          </span>
                        )}
                        <span className="absolute bottom-3 left-3 text-xs font-bold text-mint-200 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-mint-300" />
                          <span>{pkg.duration}</span>
                        </span>
                      </div>

                      {/* Package Details */}
                      <div className="p-5 sm:p-6">
                        <h4 className="font-extrabold text-base sm:text-lg text-charcoal-900 mb-2 group-hover:text-teal-700 transition-colors">
                          {pkg.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-charcoal-700 line-clamp-2 leading-relaxed mb-4 font-normal">
                          {pkg.summary}
                        </p>
                        <p className="text-sm font-black text-charcoal-900">
                          {pkg.priceNote}
                        </p>
                      </div>
                    </div>

                    {/* WhatsApp Booking Button */}
                    <div className="p-5 sm:p-6 pt-0">
                      <a
                        href={buildPackageInquiryLink(pkg.title, pkg.duration)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-200"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Book On WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Direct WhatsApp Enquiry Banner */}
          <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-r from-[#1b3535] via-[#244848] to-[#2d5858] px-6 sm:px-12 py-12 sm:py-16 text-center text-white shadow-2xl overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                Custom Inquiries
              </span>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-snug drop-shadow-md">
                Want To Customize Your {destination.name} Trip?
              </h3>

              <p className="text-white/95 text-sm sm:text-base leading-relaxed font-medium">
                Connect directly with our trip operators on WhatsApp. Share your departure city, family size, and dates for an instant quote and personalized itinerary.
              </p>

              <div className="pt-2">
                <a
                  href={buildDestinationInquiryLink(destination.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 sm:px-9 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-sm sm:text-base shadow-xl shadow-[#25D366]/30 hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Send WhatsApp Enquiry</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

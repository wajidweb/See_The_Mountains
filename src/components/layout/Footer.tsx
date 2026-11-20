import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { destinations } from "@/data/destinations";
import { AGENCY_DETAILS } from "@/data/navigation";
import { buildGeneralInquiryLink } from "@/lib/whatsapp";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Curated, visible destination links (concise and clean)
  const footerDestinations = destinations.slice(0, 6);

  // Quick navigation items
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/#about" },
    { label: "Tour Packages", href: "/#packages" },
    { label: "Why Choose Us", href: "/#why-us" },
    { label: "Travel Gallery", href: "/#gallery" },
    { label: "Contact Us", href: "/#contact" },
  ];

  return (
    <footer className="relative bg-[#ebece7] text-neutral-800 overflow-hidden pt-16 sm:pt-20 border-t border-neutral-300/70 selection:bg-neutral-900 selection:text-white">
      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-6 sm:pb-8">
          {/* Column 1: Brand Info & CTA Button */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              {/* Brand Squircle & Name */}
              <Link href="/" className="inline-flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-2xl bg-neutral-900 p-1.5 flex items-center justify-center shadow-md ring-1 ring-black/10 group-hover:scale-105 transition-transform duration-200">
                  <Image
                    src="/seethemountains.png"
                    alt="See The Mountains Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <span className="font-bold text-lg sm:text-xl tracking-tight text-neutral-900 group-hover:text-black transition-colors">
                  See The Mountains
                </span>
              </Link>

              {/* Catchy Headline */}
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 mt-5 mb-2.5">
                Your Pakistan Mountain Adventure
              </h3>

              {/* Concise Description */}
              <p className="text-sm text-neutral-600 leading-relaxed max-w-sm mb-6 font-normal">
                Pocket-friendly tour planner arranging authentic journeys to Hunza, Skardu, Swat, Fairy Meadows, and beyond.
              </p>

              {/* Sleek Dark Pill CTA Button */}
              <a
                href={buildGeneralInquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 transition-all font-medium text-xs sm:text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 duration-200"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Copyright & Sub-credits */}
            <div className="pt-2 text-xs text-neutral-500 space-y-1.5">
              <p>© {currentYear} See The Mountains. All rights reserved.</p>
              <p className="text-xs sm:text-sm text-neutral-600 font-medium pt-0.5">
                Developed by{" "}
                <a
                  href="https://www.linkedin.com/in/wajid-ali-khan-364bb9220/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-neutral-900 hover:text-black underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-900 transition-colors inline-flex items-center gap-1"
                >
                  <span>Wajid Ali Khan</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 inline" />
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Links Columns (Clean, Crisp, Visible) */}
          <div className="md:col-span-7 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-6 pt-2">
            {/* Column 2: Destinations */}
            <div>
              <h4 className="font-bold text-neutral-900 text-sm tracking-tight mb-4">
                Destinations
              </h4>
              <ul className="space-y-3 text-sm">
                {footerDestinations.map((dest) => (
                  <li key={dest.slug}>
                    <Link
                      href={`/destinations/${dest.slug}/`}
                      className="text-neutral-700 hover:text-neutral-950 font-medium transition-all hover:translate-x-1 inline-block duration-150"
                    >
                      {dest.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Navigation */}
            <div>
              <h4 className="font-bold text-neutral-900 text-sm tracking-tight mb-4">
                Navigation
              </h4>
              <ul className="space-y-3 text-sm">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-neutral-700 hover:text-neutral-950 font-medium transition-all hover:translate-x-1 inline-block duration-150"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact & Hubs */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-bold text-neutral-900 text-sm tracking-tight mb-4">
                Contact & Hubs
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href={`tel:${AGENCY_DETAILS.phoneTel}`}
                    className="text-neutral-700 hover:text-neutral-950 font-medium transition-all hover:translate-x-1 inline-flex items-center gap-1.5 duration-150"
                  >
                    <Phone className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{AGENCY_DETAILS.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={buildGeneralInquiryLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-700 hover:text-neutral-950 font-medium transition-all hover:translate-x-1 inline-flex items-center gap-1.5 duration-150"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </li>
                <li>
                  <span className="text-neutral-600 font-medium block">
                    Islamabad Hub
                  </span>
                </li>
                <li>
                  <span className="text-neutral-600 font-medium block">
                    Lahore Hub
                  </span>
                </li>
                <li>
                  <span className="text-neutral-600 font-medium block">
                    Karachi Hub
                  </span>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-neutral-700 hover:text-neutral-950 font-medium transition-all hover:translate-x-1 inline-flex items-center gap-1 duration-150"
                  >
                    <span>Send Message</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mountain Landscape Background & Massive Brand Typography */}
      <div className="relative w-full overflow-hidden mt-6 sm:mt-10 md:mt-14 pt-16 sm:pt-24 md:pt-36 pb-6 sm:pb-10 md:pb-14">
        {/* Mountain Landscape Layer */}
        <div 
          className="absolute inset-0 pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <Image
            src="/footer-bg.jpg"
            alt="Scenic Mountain Peaks"
            fill
            sizes="100vw"
            className="object-cover object-bottom"
            priority
          />
          {/* Seamless atmospheric mist gradients */}
          <div className="absolute inset-x-0 top-0 h-28 sm:h-36 md:h-44 bg-gradient-to-b from-[#ebece7] via-[#ebece7]/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 md:h-32 bg-gradient-to-t from-[#ebece7]/95 via-[#ebece7]/40 to-transparent" />
        </div>

        {/* Scalable Vector Brand Typography ("See The Mountains") */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
          <svg
            viewBox="0 0 1200 135"
            className="w-full h-auto select-none pointer-events-none drop-shadow-[0_2px_16px_rgba(0,0,0,0.25)]"
            aria-label="See The Mountains"
          >
            <text
              x="50%"
              y="110"
              textAnchor="middle"
              className="fill-white/95 font-black tracking-tighter"
              style={{
                fontFamily: "inherit",
                fontWeight: 900,
                fontSize: "126px",
                letterSpacing: "-0.035em",
              }}
            >
              See The Mountains
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
}

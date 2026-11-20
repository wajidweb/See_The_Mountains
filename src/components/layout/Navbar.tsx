"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { MAIN_NAV_ITEMS } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-sand-200 py-4 sm:py-5"
          : "bg-gradient-to-b from-black/40 via-black/10 to-transparent py-6 sm:py-7 lg:py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Emblem */}
        <Link
          href="/"
          className="flex items-center gap-3 group select-none"
        >
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-md border-2 border-white/80 group-hover:scale-105 transition-transform bg-white shrink-0">
            <Image
              src="/seethemountains.png"
              alt="See The Mountains Logo"
              width={48}
              height={48}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span
              className={cn(
                "font-extrabold text-lg sm:text-xl tracking-tight leading-tight transition-colors",
                scrolled
                  ? "text-charcoal-700 group-hover:text-teal-600"
                  : "text-white group-hover:text-peach-200 drop-shadow-sm"
              )}
            >
              See The Mountains
            </span>
            <span
              className={cn(
                "text-[10px] uppercase tracking-wider font-semibold transition-colors",
                scrolled ? "text-coral-600" : "text-peach-300"
              )}
            >
              Pakistan Tour Planner
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {MAIN_NAV_ITEMS.map((item) => {
            const isContact = item.label.toLowerCase() === "contact";

            if (isContact) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="ml-2 inline-flex items-center justify-center bg-[#cf5940] hover:bg-[#E89A87] text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm transition-colors active:scale-[0.98]"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-semibold tracking-wide transition-colors py-1",
                  scrolled
                    ? "text-charcoal-700 hover:text-teal-600"
                    : "text-white hover:text-peach-200 drop-shadow-sm"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className={cn(
            "lg:hidden p-2 rounded-lg focus:outline-none transition-colors",
            scrolled
              ? "text-charcoal-700 hover:bg-sand-50"
              : "text-white hover:bg-white/10"
          )}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-sand-200 px-5 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2">
            {MAIN_NAV_ITEMS.map((item) => {
              const isContact = item.label.toLowerCase() === "contact";

              if (isContact) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="mt-3 text-center bg-[#cf5940] hover:bg-[#E89A87] text-white font-bold py-3 rounded-lg shadow-sm transition-colors text-base"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-semibold text-charcoal-700 hover:bg-mint-50 hover:text-teal-600 transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

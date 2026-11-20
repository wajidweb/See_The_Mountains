import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "teal" | "coral" | "peach" | "mint" | "sand" | "outline";
  className?: string;
}

export function Badge({ children, variant = "peach", className }: BadgeProps) {
  const variants = {
    peach: "bg-peach-100 text-charcoal-800 border-peach-300", // Warm Peach Highlight
    mint: "bg-mint-100 text-charcoal-800 border-mint-300",   // Ice Mint
    teal: "bg-teal-100 text-teal-800 border-teal-200",       // Dark Teal
    coral: "bg-coral-100 text-coral-800 border-coral-200",   // Sunset Coral
    sand: "bg-sand-100 text-charcoal-800 border-sand-300",   // Sand Beige
    outline: "border border-teal-500 text-teal-700 bg-white/90",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {subtitle && (
        <span
          className={cn(
            "inline-block text-xs uppercase tracking-widest font-bold mb-2.5 px-3.5 py-1 rounded-full",
            light
              ? "bg-white/15 text-peach-300 border border-white/20"
              : "bg-mint-100 text-charcoal-800 border border-mint-300"
          )}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4",
          light ? "text-white" : "text-charcoal-700" // Headings: Charcoal #404947
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed",
            light ? "text-stone-200" : "text-charcoal-500"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

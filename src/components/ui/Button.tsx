import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "whatsapp" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none";

    // Primary: Dark Teal (#3D7070) | Secondary: Sunset Coral (#E89A87) | No green
    const variants = {
      primary:
        "bg-teal-500 text-white hover:bg-teal-600 shadow-sm hover:shadow-md",
      secondary:
        "bg-[#cf5940] text-white hover:bg-[#E89A87] shadow-sm font-semibold transition-colors duration-200",
      whatsapp:
        "bg-teal-500 text-white hover:bg-teal-600 shadow-sm hover:shadow-md",
      outline:
        "border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white",
      ghost:
        "text-charcoal-700 hover:bg-mint-100",
    };

    const sizes = {
      sm: "text-xs px-3 py-1.5 gap-1.5",
      md: "text-sm px-4 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
    };

    const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={combinedClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

import React from "react";
import { MessageCircle } from "lucide-react";
import { buildGeneralInquiryLink } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <a
        href={buildGeneralInquiryLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ask about a trip on WhatsApp"
        // Styled in Dark Teal (#3D7070) with Warm Peach pulse (no green)
        className="flex items-center gap-2.5 bg-teal-500 hover:bg-teal-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-peach-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-peach-400"></span>
          </span>
        </div>
        <span className="hidden sm:inline font-bold text-sm tracking-wide">
          Ask on WhatsApp
        </span>
      </a>
    </div>
  );
}

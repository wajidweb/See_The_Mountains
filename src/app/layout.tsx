import type { Metadata, Viewport } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3D7070", // Dark Teal
};

export const metadata: Metadata = {
  metadataBase: new URL("https://seethemountains.com"),
  title: {
    default: "See The Mountains | Northern Pakistan Tours",
    template: "%s | See The Mountains",
  },
  description:
    "Your trusted tour planner in Pakistan. Explore authentic mountain journeys across Hunza, Skardu, Swat, Naran, and beyond.",
  keywords: [
    "See The Mountains",
    "Pakistan Northern Areas Tours",
    "Hunza Valley Tour",
    "Skardu Deosai Trip",
    "Swat Kalam Family Tour",
    "Naran Kaghan Trips",
    "Fairy Meadows Trek",
    "Pakistan Travel Agency",
    "Pakistan Mountain Expeditions",
  ],
  authors: [{ name: "See The Mountains" }],
  creator: "See The Mountains",
  publisher: "See The Mountains",
  icons: {
    icon: [
      { url: "/seethemountains.png", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: ["/seethemountains.png"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://seethemountains.com",
    title: "See The Mountains | Northern Pakistan Tours",
    description:
      "Your trusted tour planner in Pakistan. Explore authentic mountain journeys across Hunza, Skardu, Swat, Naran, and beyond.",
    siteName: "See The Mountains",
    images: [
      {
        url: "/seethemountains.png",
        width: 1200,
        height: 1200,
        alt: "See The Mountains Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "See The Mountains | Northern Pakistan Tours",
    description:
      "Your trusted tour planner in Pakistan. Explore authentic mountain journeys across Hunza, Skardu, Swat, Naran, and beyond.",
    images: ["/seethemountains.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for Search Engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "See The Mountains",
    "url": "https://seethemountains.com",
    "logo": "https://seethemountains.com/seethemountains.png",
    "image": "https://seethemountains.com/seethemountains.png",
    "description":
      "Your trusted tour planner in Pakistan. Explore authentic mountain journeys across Hunza, Skardu, Swat, Naran, and beyond.",
    "telephone": "+923110005006",
    "priceRange": "$$",
    "areaServed": {
      "@type": "Country",
      "name": "Pakistan"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/seethemountains.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-mint-200 selection:text-charcoal-900 bg-white text-charcoal-700">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

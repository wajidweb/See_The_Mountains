export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Destinations", href: "/#destinations" },
  { label: "Tour Packages", href: "/#packages" },
  { label: "Why Choose Us", href: "/#why-us" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" }
];

export const AGENCY_DETAILS = {
  name: "See The Mountains",
  tagline: "Pocket-Friendly Pakistan Tours & Northern Mountain Expeditions",
  phoneDisplay: "0311 0005006",
  phoneTel: "+923110005006",
  whatsappNumber: "923110005006",
  operatingHubs: ["Islamabad (Main Departure)", "Lahore", "Karachi", "Faisalabad", "Multan", "Gujranwala"],
  disclaimer: "Mountain weather, road access, passes, and high-altitude routes across northern Pakistan vary seasonally. Always confirm real-time road conditions and customized itineraries with our team before departure."
};

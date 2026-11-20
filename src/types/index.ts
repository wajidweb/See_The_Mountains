export interface Attraction {
  name: string;
  description: string;
  highlights?: string[];
  image: string;
}

export interface PracticalTip {
  title: string;
  content: string;
  category: 'clothing' | 'altitude' | 'roads' | 'connectivity' | 'culture' | 'waste';
}

export interface SeasonInfo {
  season: string;
  months: string;
  status: 'Peak' | 'Good' | 'Challenging' | 'Closed/Limited';
  description: string;
}

export interface GalleryPhoto {
  url: string;
  caption: string;
  alt: string;
  location: string;
}

export interface DestinationFAQ {
  question: string;
  answer: string;
}

export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  region: 'Gilgit-Baltistan' | 'Khyber Pakhtunkhwa' | 'Azad Jammu & Kashmir';
  elevation: string;
  heroImage: string;
  cardImage: string;
  overview: string[];
  bestTimeToVisit: SeasonInfo[];
  suggestedDuration: string;
  attractions: Attraction[];
  experiences: string[];
  practicalTips: PracticalTip[];
  gallery: GalleryPhoto[];
  faqs: DestinationFAQ[];
}

export interface TourPackage {
  id: string;
  title: string;
  destinationSlug: string;
  destinationName: string;
  duration: string; // e.g. "5 Days / 4 Nights"
  departureFrom: string; // e.g. "Islamabad & Rawalpindi"
  priceNote: string; // e.g. "PKR 45,000 / person" or "Custom Quote"
  badge?: string;
  isFeatured: boolean;
  coverImage: string;
  summary: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
}

export interface GeneralFAQ {
  question: string;
  answer: string;
  category: 'booking' | 'logistics' | 'safety' | 'payment';
}

export interface Review {
  id: string;
  author: string;
  location: string;
  trip: string;
  rating: number;
  comment: string;
  date: string;
}

import { TourPackage } from "@/types";

export const tourPackages: TourPackage[] = [
  {
    id: "hunza-autumn-spring",
    title: "Hunza Valley & Attabad Lake Expedition",
    destinationSlug: "hunza",
    destinationName: "Hunza Valley",
    duration: "5 Days / 4 Nights",
    departureFrom: "Islamabad (Custom departures from Lahore/Karachi)",
    priceNote: "PKR 45,000 / person (Group Rate)",
    badge: "Most Popular",
    isFeatured: true,
    coverImage: "/gallery/attabad-lake.webp",
    summary: "Discover the crown jewel of the Karakoram. Experience Attabad Lake boating, explore 700-year-old Baltit Fort, and gaze upon the Passu Cathedral spires.",
    highlights: [
      "Attabad Lake motorboat cruise",
      "Guided tour of historic Baltit & Altit Forts",
      "Hussaini Suspension Bridge crossing",
      "Duikar Eagle's Nest sunset view over Rakaposhi",
      "Drive to Khunjerab Pass / China Border (seasonal)"
    ],
    inclusions: [
      "Dedicated air-conditioned mountain transport (Grand Cabin / Coaster / Prado for private)",
      "4 nights standard hotel accommodation (twin/triple sharing)",
      "Daily breakfast and dinner",
      "Experienced mountain driver & trip coordinator",
      "Tolls, fuel, and road permits"
    ],
    exclusions: [
      "Attabad Lake boating and sports tickets",
      "Fort entry tickets and museum passes",
      "Lunch, snacks, and extra beverages",
      "Personal gear and travel insurance"
    ]
  },
  {
    id: "skardu-deosai-adventure",
    title: "Skardu, Kachura & Deosai Plains Explorer",
    destinationSlug: "skardu",
    destinationName: "Skardu & Deosai",
    duration: "7 Days / 6 Nights",
    departureFrom: "Islamabad (Direct flight option available)",
    priceNote: "PKR 58,000 / person (Group Rate)",
    badge: "High Altitude Special",
    isFeatured: true,
    coverImage: "/gallery/shangrila-skardu.webp",
    summary: "An epic overland journey through the Indus river gorge to cold sand dunes, heritage Balti palaces, and the 4,000m high Deosai plateau.",
    highlights: [
      "Full-day 4x4 safari across Deosai National Park & Sheosar Lake",
      "Shangrila Resort lake and Upper Kachura boating",
      "Sunset photography at Katpana Cold Desert dunes",
      "Heritage tour of Shigar Fort (Palace on the Rock)",
      "Manthal Buddha rock carving exploration"
    ],
    inclusions: [
      "Dedicated mountain transport throughout",
      "4x4 Willy/Prado jeep for Deosai National Park",
      "6 nights hotel accommodation in Skardu and Shigar",
      "Daily breakfast & dinner",
      "Professional local driver-guide",
      "All road tolls and environmental passes"
    ],
    exclusions: [
      "Domestic air tickets (can be booked on request)",
      "Lunches and mineral water",
      "Boating tickets at Upper Kachura",
      "Tips for local porters and drivers"
    ]
  },
  {
    id: "swat-kalam-malamjabba",
    title: "Swat, Kalam & Malam Jabba Getaway",
    destinationSlug: "swat",
    destinationName: "Swat & Kalam",
    duration: "4 Days / 3 Nights",
    departureFrom: "Islamabad / Rawalpindi / Peshawar",
    priceNote: "PKR 32,000 / person (Group Rate)",
    badge: "Family Favorite",
    isFeatured: true,
    coverImage: "/gallery/kalam-swat.webp",
    summary: "The ultimate scenic escape via the modern Swat Motorway. Perfect for families seeking pine forests, chairlifts, and crisp riverside relaxation.",
    highlights: [
      "Malam Jabba ski resort chairlift & zipline",
      "Scenic deodar forest walk in Ushu Valley",
      "Jeep excursion to Mahodand Lake (seasonal)",
      "Traditional trout fish dinner by Swat River",
      "Mingora handicraft and emerald shopping"
    ],
    inclusions: [
      "Luxury Saloon / Grand Cabin transport throughout",
      "3 nights quality family hotel stay in Kalam & Fizagat",
      "Daily breakfast & dinner",
      "Driver expenses, fuel, and motorway tolls",
      "Trip facilitation and local guidance"
    ],
    exclusions: [
      "Malam Jabba chairlift and activity tokens",
      "Mahodand Lake 4x4 jeep fare (shared per vehicle)",
      "Personal shopping and lunch"
    ]
  },
  {
    id: "naran-saifulmalook-summer",
    title: "Naran, Lake Saiful Malook & Babusar Top",
    destinationSlug: "naran-kaghan",
    destinationName: "Naran & Kaghan Valley",
    duration: "3 Days / 2 Nights",
    departureFrom: "Islamabad / Lahore / Gujranwala",
    priceNote: "PKR 24,500 / person (Group Rate)",
    badge: "Weekend Escape",
    isFeatured: true,
    coverImage: "/gallery/saiful-malook.webp",
    summary: "A fast-paced summer tour along the roaring Kunhar River to fairy-tale Lake Saiful Malook and high-altitude Babusar Top.",
    highlights: [
      "4x4 jeep safari up to Lake Saiful Malook",
      "Drive to Babusar Pass at 4,173 meters",
      "Lulusar Lake mirror reflections",
      "Kunhar River rafting experience (optional)",
      "Evening bonfire in Batakundi / Naran"
    ],
    inclusions: [
      "Air-conditioned highway transport",
      "2 nights comfortable hotel stay in Naran / Batakundi",
      "Daily breakfast & dinner",
      "4x4 Jeep transfer to Lake Saiful Malook",
      "Tolls, fuel, and trip coordinator"
    ],
    exclusions: [
      "River rafting fees",
      "Lunches and snacks",
      "Horse riding at Saiful Malook"
    ]
  },
  {
    id: "fairy-meadows-nanga-parbat",
    title: "Fairy Meadows & Nanga Parbat Base Camp Trek",
    destinationSlug: "fairy-meadows",
    destinationName: "Fairy Meadows",
    duration: "5 Days / 4 Nights",
    departureFrom: "Islamabad (KKH via Hazara / Babusar)",
    priceNote: "PKR 48,000 / person (Group Rate)",
    badge: "Trekking Adventure",
    isFeatured: false,
    coverImage: "/gallery/fairy-meadows.webp",
    summary: "Stand in awe before the 8,126m Killer Mountain. Includes the famous Raikhot jeep track, pine forest hiking, and rustic wooden cabin camping.",
    highlights: [
      "Famous Raikhot Gorge 4x4 mountain drive",
      "3-hour alpine trek from Tattu to Fairy Meadows",
      "Day hike to Beyal Camp and Nanga Parbat Viewpoint",
      "Rustic wooden cabin stay with wood-fired stove",
      "Nightly stargazing under zero light pollution"
    ],
    inclusions: [
      "Highway transport to Raikhot Bridge & return",
      "Local 4x4 mountain jeeps (Raikhot to Tattu & return)",
      "Wooden cottage / glamping tent accommodation",
      "All meals on trek (Breakfast, Packed Lunch, Dinner)",
      "Local mountain guide & luggage porter allocation",
      "Campfire and permits"
    ],
    exclusions: [
      "Personal riding horse if not trekking on foot",
      "Personal trekking poles and sleeping bag",
      "Tips for local Diamer guides"
    ]
  },
  {
    id: "neelum-valley-kashmir",
    title: "Neelum Valley & Arang Kel Kashmir Tour",
    destinationSlug: "neelum-valley",
    destinationName: "Neelum Valley",
    duration: "4 Days / 3 Nights",
    departureFrom: "Islamabad / Rawalpindi",
    priceNote: "PKR 29,500 / person (Group Rate)",
    badge: "Scenic Kashmir",
    isFeatured: false,
    coverImage: "/gallery/deosai-plains.webp",
    summary: "Experience the green paradise of Azad Kashmir: gushing waterfalls, wooden heritage villages, and the high plateau meadows of Arang Kel.",
    highlights: [
      "Keran riverside promenade overlooking Line of Control",
      "Cable car ride and hike up to Arang Kel plateau",
      "Historical stone sanctum of Sharda Peeth",
      "Dhani & Kutton waterfalls photography",
      "Authentic Kashmiri noon chai and trout cuisine"
    ],
    inclusions: [
      "Comfortable mountain transport",
      "3 nights riverside hotel stay in Keran / Sharda",
      "Daily breakfast & dinner",
      "Dedicated experienced driver",
      "All toll taxes and security checkpost facilitation"
    ],
    exclusions: [
      "Cable car / chairlift tickets at Kel",
      "Lunch, snacks, and mineral water",
      "Jeep for off-road extensions (e.g., Taobat)"
    ]
  },
  {
    id: "passu-khunjerab-expedition",
    title: "Passu Cones & Khunjerab Pass Silk Route Tour",
    destinationSlug: "hunza",
    destinationName: "Passu & Upper Hunza",
    duration: "6 Days / 5 Nights",
    departureFrom: "Islamabad (Direct KKH Route)",
    priceNote: "PKR 49,000 / person (Group Rate)",
    badge: "Border Expedition",
    isFeatured: true,
    coverImage: "/gallery/passu-cones.webp",
    summary: "Journey along the legendary Karakoram Highway to the world's highest paved border, crossing scenic suspension bridges beneath the iconic Passu Cones.",
    highlights: [
      "Khunjerab National Park & China Border at 4,693 meters",
      "Hussaini and Passu suspension bridge crossings",
      "Passu Glacier hike and Borith Lake excursion",
      "Attabad Lake water cruising and jet ski options",
      "Gojal traditional Wakhi hospitality and cuisine"
    ],
    inclusions: [
      "Dedicated air-conditioned mountain transport throughout",
      "5 nights quality hotel stays in Karimabad & Gulmit",
      "Daily breakfast & dinner",
      "Experienced mountain driver and trip guide",
      "National park entrance permits and tolls"
    ],
    exclusions: [
      "Water sports tickets at Attabad Lake",
      "Personal warm gear and snacks",
      "Gratuities for local guides"
    ]
  },
  {
    id: "kumrat-jahazbanda-meadows",
    title: "Kumrat Valley & Jahaz Banda Alpine Meadows",
    destinationSlug: "swat",
    destinationName: "Kumrat Valley",
    duration: "4 Days / 3 Nights",
    departureFrom: "Islamabad / Peshawar / Lahore",
    priceNote: "PKR 28,000 / person (Group Rate)",
    badge: "Hidden Gem",
    isFeatured: false,
    coverImage: "/gallery/kalam-swat.webp",
    summary: "Unwind in the pristine pine forests of Upper Dir, trek to the vast green plateaus of Jahaz Banda, and witness the crystal waters of Katora Lake.",
    highlights: [
      "Scenic 4x4 jeep safari through Kumrat pine forest",
      "Trek to Jahaz Banda alpine meadow plateau",
      "Excursion to crystal-clear Katora glacial lake",
      "Wooden bridge and Kumrat river waterfall walks",
      "Campfire night under starlit northern skies"
    ],
    inclusions: [
      "Transport from Islamabad to Thal and return",
      "Local 4x4 mountain jeeps for Kumrat forest & trek head",
      "3 nights accommodation (wooden cottages / glamping tents)",
      "Daily breakfast & dinner",
      "Dedicated trip coordinator and local trek guide"
    ],
    exclusions: [
      "Porters for personal heavy luggage",
      "Personal riding mules on trek",
      "Lunch and extra snacks"
    ]
  },
  {
    id: "chitral-kalash-cultural",
    title: "Chitral Valley & Kalash Cultural Heritage Tour",
    destinationSlug: "swat",
    destinationName: "Chitral & Kalash",
    duration: "5 Days / 4 Nights",
    departureFrom: "Islamabad via Lowari Tunnel",
    priceNote: "PKR 38,000 / person (Group Rate)",
    badge: "Cultural Heritage",
    isFeatured: false,
    coverImage: "/gallery/baltit-fort.webp",
    summary: "Discover the unique animist culture of the Kalash people, visit the historic Chitral Fort and Shahi Mosque, and view the 7,708m Tirich Mir peak.",
    highlights: [
      "Guided cultural immersion in Bumburet and Rumbur valleys",
      "Visit historic Chitral Fort and riverside Shahi Mosque",
      "View Tirich Mir, highest peak in the Hindukush range",
      "Traditional Kalash dance, handicraft, and wool weaving tours",
      "Scenic transit through Lowari Tunnel highway"
    ],
    inclusions: [
      "Comfortable air-conditioned transport throughout",
      "4 nights hotel stay in Chitral town and Kalash valley",
      "Daily breakfast & dinner",
      "Local Kalash community guide facilitator",
      "All road tolls and entry permits"
    ],
    exclusions: [
      "Personal shopping and souvenirs",
      "Lunch and cold drinks",
      "Tips for local cultural performers"
    ]
  },
  {
    id: "astore-rama-meadows",
    title: "Astore Valley, Rama Lake & Deosai Plains Safari",
    destinationSlug: "skardu",
    destinationName: "Astore Valley",
    duration: "5 Days / 4 Nights",
    departureFrom: "Islamabad (KKH via Babusar / Chilas)",
    priceNote: "PKR 44,000 / person (Group Rate)",
    badge: "Alpine Wilderness",
    isFeatured: false,
    coverImage: "/gallery/deosai-plains.webp",
    summary: "Experience the tranquil beauty of Rama Meadow pine forests, the emerald waters of Rama Lake, and traverse into the wild rolling plateaus of Deosai.",
    highlights: [
      "4x4 jeep drive to Rama Meadow and pine forest glades",
      "Hike to Rama Lake under Chongra Peak (Nanga Parbat)",
      "Crossing into Deosai National Park from Astore side",
      "Sheosar Lake photography and wild brown bear habitat",
      "Scenic gorges of the Astore River"
    ],
    inclusions: [
      "Highway transport to Astore and return",
      "4x4 mountain jeeps for Rama Lake and Deosai crossing",
      "4 nights hotel/resort stay in Rama and Astore",
      "Daily breakfast & dinner",
      "Experienced mountain driver-guide and permits"
    ],
    exclusions: [
      "Personal trekking gear and warm jackets",
      "Lunch and beverages",
      "Tips for local drivers"
    ]
  }
];

export function getPackagesByDestination(slug: string): TourPackage[] {
  return tourPackages.filter((p) => p.destinationSlug === slug);
}

export function getFeaturedPackages(): TourPackage[] {
  return tourPackages.filter((p) => p.isFeatured);
}

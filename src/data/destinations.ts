import { Destination } from "@/types";

export const destinations: Destination[] = [
  {
    slug: "hunza",
    name: "Hunza Valley",
    tagline: "Glacial lakes, centuries-old forts, and the dramatic spires of the Karakoram.",
    region: "Gilgit-Baltistan",
    elevation: "2,438 m (7,999 ft)",
    heroImage: "/destinations/hunza.webp",
    cardImage: "/destinations/hunza.webp",
    overview: [
      "Perched beneath the dramatic silhouettes of Rakaposhi, Ultar Sar, and Ladyfinger Peak, Hunza Valley is one of Pakistan's most revered mountain destinations. Renowned for its rich apricot orchards, welcoming Ismaili culture, and high-altitude heritage, Hunza provides an unforgettable introduction to the Karakoram range.",
      "Traversing along the legendary Karakoram Highway (KKH), visitors experience iconic historical monuments including the 700-year-old Baltit Fort and the 1,100-year-old Altit Fort, juxtaposed against the turquoise brilliance of Attabad Lake and the soaring Cathedral peaks of Passu."
    ],
    bestTimeToVisit: [
      {
        season: "Spring Blossom",
        months: "Late March – April",
        status: "Good",
        description: "Valleys bloom in vibrant pink apricot and cherry blossoms; crisp sunny days with chilly evenings."
      },
      {
        season: "Summer Peak",
        months: "May – August",
        status: "Peak",
        description: "Optimal weather, Khunjerab Pass accessible, all lakes and high trails open for sightseeing and boating."
      },
      {
        season: "Golden Autumn",
        months: "October – November",
        status: "Peak",
        description: "World-famous golden foliage across poplar and apricot groves against snow-capped peaks."
      },
      {
        season: "Winter",
        months: "December – February",
        status: "Challenging",
        description: "Sub-zero temperatures, peaceful quietude, frozen lakes; requires heavy thermal preparation."
      }
    ],
    suggestedDuration: "5 to 7 Days (ex-Islamabad via KKH or Gilgit flight)",
    attractions: [
      {
        name: "Attabad Lake",
        description: "A dramatic 21 km turquoise lake formed in 2010, offering boating, jet skiing, and panoramic mountain backdrops.",
        highlights: ["Turquoise waters", "Speed boat & jet ski rides", "KKH tunnels view"],
        image: "/gallery/attabad-lake.webp"
      },
      {
        name: "Baltit & Altit Forts",
        description: "UNESCO-restored ancient royal residences of the Mirs of Hunza, exhibiting intricate wooden architecture and panoramic valley vistas.",
        highlights: ["700+ years royal history", "Ancient wood carving", "Karimabad viewpoint"],
        image: "/gallery/baltit-fort.webp"
      },
      {
        name: "Passu Cones & Cathedral",
        description: "Serrated knife-edge granite peaks rising vertically above the Hunza river, near the iconic suspension bridge.",
        highlights: ["Passu suspension bridge", "Passu Glacier view", "Borith Lake proximity"],
        image: "/gallery/passu-cones.webp"
      },
      {
        name: "Duikar Viewpoint (Eagle's Nest)",
        description: "Highest viewpoint in Central Hunza, celebrated for breathtaking sunrises and sunsets over Rakaposhi and Golden Peak.",
        highlights: ["Panoramic sunrise/sunset", "360-degree peak views", "Eagle rock structure"],
        image: "/destinations/hunza.webp"
      }
    ],
    experiences: [
      "Cruise across the brilliant blue water of Attabad Lake in a motorized boat",
      "Savor local Wakhi and Burushaski cuisine: Chapshuro (meat pastry) and Tumuro herbal tea",
      "Walk the hanging wooden planks of the famous Hussaini Suspension Bridge",
      "Stargaze from Duikar overlooking eight majestic mountain summits",
      "Drive north to the Pakistan-China Khunjerab Border (World's highest paved border post)"
    ],
    practicalTips: [
      {
        title: "Layered Clothing",
        category: "clothing",
        content: "Even during summer, night temperatures drop significantly. Bring a fleece jacket, windbreaker, thermal base layers, and comfortable walking boots."
      },
      {
        title: "Road & Pass Variability",
        category: "roads",
        content: "The Karakoram Highway is paved but subject to seasonal mudslides or road maintenance. Always confirm current route status with our team before travel."
      },
      {
        title: "Cash & Local Connectivity",
        category: "connectivity",
        content: "SCOM is the most reliable mobile network in Gilgit-Baltistan. ATMs exist in Aliabad and Karimabad but can run out of cash; carry sufficient local currency."
      },
      {
        title: "Cultural Respect & Cleanliness",
        category: "culture",
        content: "Hunza locals value environmental conservation and community hospitality. Respect village customs and always bring non-biodegradable waste back."
      }
    ],
    gallery: [
      {
        url: "/destinations/hunza.webp",
        caption: "Autumn hues illuminating the valley floor against snow-capped Karakoram crests",
        alt: "Golden autumn trees and snow mountains in Hunza Valley",
        location: "Karimabad, Hunza"
      },
      {
        url: "/gallery/attabad-lake.webp",
        caption: "Turquoise expanse of Attabad Lake reflecting towering rocky precipices",
        alt: "Attabad Lake in Hunza, Gilgit-Baltistan",
        location: "Gojal, Upper Hunza"
      },
      {
        url: "/gallery/passu-cones.webp",
        caption: "Passu Cathedral towers standing tall along the Karakoram Highway",
        alt: "Passu Cones serrated peaks in Gilgit-Baltistan",
        location: "Passu, Gojal"
      }
    ],
    faqs: [
      {
        question: "Is Hunza Valley suitable for families and senior travelers?",
        answer: "Yes, Hunza is one of the most family-friendly destinations in the north, featuring paved highways, comfortable family hotels in Karimabad and Gulmit, and gentle walks."
      },
      {
        question: "How do we travel to Hunza from Islamabad?",
        answer: "You can travel via a scenic road journey along the KKH (typically breaking the journey in Chilas or Naran during summer), or fly into Gilgit Airport followed by a 2-hour drive."
      },
      {
        question: "Is Khunjerab Pass open year-round?",
        answer: "Khunjerab Pass typically opens between April and November depending on snow clearance. It remains closed or heavily restricted during peak winter months."
      }
    ]
  },
  {
    slug: "skardu",
    name: "Skardu & Deosai",
    tagline: "Gateway to the high giants of the Karakoram, high-altitude deserts, and vast alpine plateaus.",
    region: "Gilgit-Baltistan",
    elevation: "2,228 m (7,310 ft) / Deosai: 4,114 m",
    heroImage: "/destinations/skardu.webp",
    cardImage: "/destinations/skardu.webp",
    overview: [
      "Nestled along the mighty Indus River, Skardu is the mountaineering capital of Pakistan and the historic launching point for expeditions to K2, Broad Peak, and the Gasherbrum group. The valley is a wonderland of contrasting terrains—from the gleaming turquoise Kachura Lakes to the stark white dunes of the Katpana Cold Desert.",
      "Above the valley rests Deosai National Park, the 'Land of the Giants'—the second highest alpine plateau on Earth. Blanketed in wild blossoms during the summer and home to the Himalayan Brown Bear, Deosai presents an extraordinary wilderness landscape."
    ],
    bestTimeToVisit: [
      {
        season: "Summer Season",
        months: "June – August",
        status: "Peak",
        description: "Deosai Plains fully open and blooming with wildflowers; lakes accessible; pleasant daytime temperatures."
      },
      {
        season: "Autumn",
        months: "September – October",
        status: "Good",
        description: "Mild days, vibrant golden fruit orchards in Shigar and Khaplu, crisp and clear skies for mountain photography."
      },
      {
        season: "Spring / Shoulder",
        months: "April – May",
        status: "Challenging",
        description: "Apricot blooms in lower valleys; Deosai usually remains snowbound and impassable."
      },
      {
        season: "Winter",
        months: "November – March",
        status: "Closed/Limited",
        description: "Extremely cold with sub-zero temperatures. Deosai closed; flight access highly weather dependent."
      }
    ],
    suggestedDuration: "6 to 8 Days (ex-Islamabad by road or direct flight)",
    attractions: [
      {
        name: "Upper Kachura & Shangrila Lakes",
        description: "Pristine mountain lakes surrounded by fruit orchards and pine trees, perfect for tranquil boat rides and trout fish dining.",
        highlights: ["Heart-shaped Shangrila resort lake", "Boating in crystal Upper Kachura", "Fruit orchards"],
        image: "/gallery/shangrila-skardu.webp"
      },
      {
        name: "Deosai National Park",
        description: "A boundless 4,000m plateau of rolling green meadows, crystal streams (Sheosar Lake), and rare wildlife.",
        highlights: ["Sheosar Lake", "Himalayan brown bear habitat", "Vast alpine blossom meadows"],
        image: "/gallery/deosai-plains.webp"
      },
      {
        name: "Katpana Cold Desert",
        description: "Surreal sand dunes situated at high altitude, often dusted with snow during winter and early spring.",
        highlights: ["High-altitude sand dunes", "Desert sunset photography", "Stargazing and bonfires"],
        image: "/attractions/katpana-desert.webp"
      },
      {
        name: "Shigar & Khaplu Forts",
        description: "Restored 17th-century Raja palaces built from stone and wood, showcasing Balti-Tibetan architectural craftsmanship.",
        highlights: ["Heritage palace museums", "Royal gardens", "Balti stone architecture"],
        image: "/attractions/shigar-fort.webp"
      }
    ],
    experiences: [
      "Cross the second-highest plateau in the world at Deosai and picnic by Sheosar Lake",
      "Witness sunset over the Katpana Cold Desert dunes framed by high jagged peaks",
      "Row a wooden boat across the deep turquoise waters of Upper Kachura Lake",
      "Explore the 400-year-old royal suites of Shigar Fort (Palace on the Rock)",
      "Sample authentic Balti cuisine including Marzan and Prapoo noodles"
    ],
    practicalTips: [
      {
        title: "Altitude Care on Deosai",
        category: "altitude",
        content: "Deosai exceeds 4,000m elevation. Stay hydrated, avoid heavy sudden exertion on your first day, and consult our guides if feeling mild headache."
      },
      {
        title: "Seasonal Access Warning",
        category: "roads",
        content: "Deosai access is strictly seasonal and usually opens around late June to early July depending on snow melting. Do not plan fixed Deosai trips in early spring."
      },
      {
        title: "4x4 Jeep Requirements",
        category: "roads",
        content: "While the main Jaglot-Skardu highway is paved, trips to Deosai, Basho Valley, and Upper Kachura require dedicated 4x4 vehicles which we arrange."
      },
      {
        title: "Cash & Connectivity",
        category: "connectivity",
        content: "SCOM SIM cards offer the best 4G coverage in Skardu town. Mobile coverage drops in Deosai and deep valleys; carry ample cash for local stalls."
      }
    ],
    gallery: [
      {
        url: "/destinations/skardu.webp",
        caption: "Sunset casting warm shadows over the cold sand dunes of Katpana Desert",
        alt: "Katpana Cold Desert in Skardu, Gilgit-Baltistan",
        location: "Katpana, Skardu"
      },
      {
        url: "/gallery/deosai-plains.webp",
        caption: "Rolling green meadows and Sheosar Lake in Deosai National Park",
        alt: "Sheosar Lake and Deosai Plains plateau",
        location: "Deosai, Gilgit-Baltistan"
      }
    ],
    faqs: [
      {
        question: "When are the Deosai Plains open for tourists?",
        answer: "Deosai is typically open from late June through late September. Snow melt dictates the exact opening dates each year, so always check with us before booking."
      },
      {
        question: "Can we reach Skardu by air?",
        answer: "Yes, PIA and Airblue operate direct flights between Islamabad/Karachi/Lahore and Skardu Airport. However, flights are weather-dependent, and we always prepare a road contingency."
      }
    ]
  },
  {
    slug: "naran-kaghan",
    name: "Naran & Kaghan Valley",
    tagline: "Rushing alpine rivers, emerald lakes, pine-cloaked ravines, and high mountain passes.",
    region: "Khyber Pakhtunkhwa",
    elevation: "2,409 m (7,904 ft) / Babusar: 4,173 m",
    heroImage: "/destinations/naran-kaghan.webp",
    cardImage: "/destinations/naran-kaghan.webp",
    overview: [
      "Stretching alongside the tumbling, jade-green waters of the Kunhar River, the Kaghan Valley is one of Pakistan's most accessible and beloved summer retreats. Dense Himalayan cedar and pine forests give way to wide alpine meadows as the elevation climbs towards the famous tourist hub of Naran.",
      "Beyond Naran town lies legendary Lake Saiful Malook, celebrated in folklore and poetry for its ethereal alpine reflection. Continuing up the valley leads travelers past Lulusar Lake and over the dramatic 4,173-meter Babusar Pass, connecting Khyber Pakhtunkhwa directly to the Karakoram Highway in Gilgit-Baltistan."
    ],
    bestTimeToVisit: [
      {
        season: "Summer Peak",
        months: "June – August",
        status: "Peak",
        description: "Optimal summer season; Babusar Pass and Saiful Malook fully open; rafting active on Kunhar River."
      },
      {
        season: "Autumn / Late Season",
        months: "September – October",
        status: "Good",
        description: "Fewer crowds, crisp autumn breeze, and clear skies. Snowfall begins on high passes around mid-October."
      },
      {
        season: "Spring / Shoulder",
        months: "April – May",
        status: "Challenging",
        description: "Lower Kaghan and Balakot open; Naran town may have snow clearing operations; Babusar Pass closed."
      },
      {
        season: "Winter",
        months: "November – March",
        status: "Closed/Limited",
        description: "Naran and upper Kaghan receive heavy snowfall and remain closed to general tourist traffic."
      }
    ],
    suggestedDuration: "3 to 5 Days (ex-Islamabad / Lahore)",
    attractions: [
      {
        name: "Lake Saiful Malook",
        description: "Iconic glacial lake nestled at 3,224 meters, framed by the majestic Malika Parbat peak (5,290m).",
        highlights: ["Folklore of the Prince and Fairy", "Jeep excursion from Naran", "Boating & photography"],
        image: "/gallery/saiful-malook.webp"
      },
      {
        name: "Babusar Pass & Top",
        description: "The highest point in Kaghan Valley at 4,173 meters, offering panoramic views of both KP and Gilgit-Baltistan peaks.",
        highlights: ["4,173m pass viewpoint", "Boundary point of GB and KP", "Dramatic hairpin highway"],
        image: "/attractions/babusar-pass.webp"
      },
      {
        name: "Lulusar Lake",
        description: "A mirror-like teardrop lake surrounded by wild pastureland, serving as the primary source of the Kunhar River.",
        highlights: ["Mirror reflections", "Wild alpine waterfowl", "Roadside scenic rest point"],
        image: "/attractions/lulusar-dudipat.webp"
      },
      {
        name: "Siri Paye Meadows & Kunhar River",
        description: "Lush green rolling meadows perched above Shogran, with horse riding, wildflower trails, and riverside dining.",
        highlights: ["Alpine meadows", "Shogran plateau views", "Wildflower walks"],
        image: "/destinations/naran-kaghan.webp"
      }
    ],
    experiences: [
      "Ride a 4x4 mountain jeep up the rocky trail to the shores of Lake Saiful Malook",
      "Drive across Babusar Pass and touch the high mountain clouds at 4,173 meters",
      "Enjoy freshly caught Kunhar River trout grilled with local spices in Naran bazaar",
      "Experience mild white-water rafting on the river near Balakot or Naran",
      "Camp overnight beneath starry mountain skies in the meadows of Batakundi"
    ],
    practicalTips: [
      {
        title: "Jeep Trail Conditions",
        category: "roads",
        content: "The climb from Naran to Lake Saiful Malook is steep and strictly restricted to licensed local 4x4 jeeps with experienced mountain drivers."
      },
      {
        title: "Babusar Pass Opening Dates",
        category: "roads",
        content: "Babusar Pass usually opens by late June and closes in late October. In shoulder months, transit to Gilgit must follow the Karakoram Highway via Kohistan."
      },
      {
        title: "Warm Clothing in Summer",
        category: "clothing",
        content: "While days in Naran are comfortably mild, temperatures at Babusar Top and Saiful Malook can plummet to near freezing within minutes."
      },
      {
        title: "Clean Tourism Commitment",
        category: "waste",
        content: "Saiful Malook is an ecologically sensitive glacial lake. Please dispose of all food packaging and drink bottles in designated bins."
      }
    ],
    gallery: [
      {
        url: "/gallery/saiful-malook.webp",
        caption: "Glacial waters of Lake Saiful Malook beneath the shadow of Malika Parbat",
        alt: "Lake Saiful Malook in Kaghan Valley",
        location: "Naran, Khyber Pakhtunkhwa"
      },
      {
        url: "/destinations/naran-kaghan.webp",
        caption: "Siri Paye alpine meadows and wildflowers above Shogran valley",
        alt: "Siri Paye meadows in Kaghan Valley",
        location: "Shogran, Kaghan Valley"
      }
    ],
    faqs: [
      {
        question: "Is Naran accessible by car?",
        answer: "Yes, the road from Islamabad via the Hazara Motorway and N-15 highway is fully carpeted and accessible for ordinary family cars up to Naran and Babusar Pass."
      },
      {
        question: "Can we take our own car to Lake Saiful Malook?",
        answer: "No, personal cars and standard vans cannot navigate the steep, unpaved terrain to Lake Saiful Malook. Local 4x4 jeeps must be hired, which we arrange seamlessly."
      }
    ]
  },
  {
    slug: "swat",
    name: "Swat & Kalam Valley",
    tagline: "The Switzerland of the East—lush pine forests, rushing waterfalls, and ancient Buddhist heritage.",
    region: "Khyber Pakhtunkhwa",
    elevation: "980 m (Mingora) to 2,000 m (Kalam)",
    heroImage: "/destinations/swat.webp",
    cardImage: "/destinations/swat.webp",
    overview: [
      "Referred to by Queen Elizabeth II as the 'Switzerland of the East' during her visit in 1961, Swat Valley is an enchanting tapestry of emerald riverbanks, thick cedar woodlands, and majestic snowline peaks. Rich with over two millennia of Gandharan Buddhist heritage, Swat seamlessly blends history and scenic wonder.",
      "Further up the valley through the Swat Motorway lies Kalam, a highland haven surrounded by dense pine valleys, foaming waterfalls, and the gateway to high alpine lakes like Mahodand and Kundol."
    ],
    bestTimeToVisit: [
      {
        season: "Summer",
        months: "May – August",
        status: "Peak",
        description: "Cool weather in Kalam and Malam Jabba; Mahodand Lake fully accessible by jeep; great for family holidays."
      },
      {
        season: "Winter Ski Season",
        months: "December – February",
        status: "Good",
        description: "Heavy snowfall in Malam Jabba and Kalam; ski slope and chairlift fully operational at Malam Jabba Resort."
      },
      {
        season: "Spring / Autumn",
        months: "March – April & Sep – Oct",
        status: "Good",
        description: "Pleasant temperatures, lower hotel rates, clear photography conditions, and fruit tree blossoms."
      }
    ],
    suggestedDuration: "3 to 5 Days (ex-Islamabad / Peshawar / Lahore)",
    attractions: [
      {
        name: "Malam Jabba Ski Resort",
        description: "Pakistan's premier winter sports resort featuring chairlifts, zipline, skiing facilities, and panoramic pine vistas.",
        highlights: ["Chairlift rides", "800m thrill zipline", "Winter snow skiing"],
        image: "/attractions/malam-jabba.webp"
      },
      {
        name: "Kalam Valley & Ushu Forest",
        description: "Thick deodar and cedar pine forests along the Swat River, renowned for refreshing alpine air and wooden riverside chalets.",
        highlights: ["Dense Ushu forest walks", "Matiltan waterfall", "Riverfront picnics"],
        image: "/gallery/kalam-swat.webp"
      },
      {
        name: "Mahodand Lake",
        description: "A wide, shallow mountain lake fed by glacial streams, famous for wild trout, horse riding, and boating amidst wildflowers.",
        highlights: ["Jeep safari through Ushu", "Boating & fishing", "Meadows beneath Hindu Kush"],
        image: "/destinations/swat.webp"
      },
      {
        name: "Swat Museum & Buddhist Heritage",
        description: "World-class collection of Gandharan Buddhist art, rock carvings, and archaeological remains in Mingora.",
        highlights: ["Ancient Gandhara sculptures", "Butkara I stupa ruins", "Rich Pashtun cultural relics"],
        image: "/gallery/kalam-swat.webp"
      }
    ],
    experiences: [
      "Ride the Malam Jabba chairlift high above snow-covered or pine-blanketed mountain ridges",
      "Take an exhilarating 4x4 safari through Ushu Forest up to Mahodand Lake",
      "Stroll the bustling bazaar of Mingora for authentic Swati embroidered shawls and emeralds",
      "Savor local Swati honey, fresh river trout, and traditional Shinwari lamb dishes",
      "Relax in a wooden riverside gazebo in Kalam listening to the rushing Swat River"
    ],
    practicalTips: [
      {
        title: "Fast Highway Access",
        category: "roads",
        content: "The Swat Motorway (M-16) makes travel from Islamabad to Mingora extraordinarily fast (approx. 3.5 hours). The road to Kalam is paved, though upper lake trails require jeeps."
      },
      {
        title: "Family Suitability",
        category: "culture",
        content: "Swat and Kalam feature excellent family resorts, paved roads, and welcoming hospitality, making it our top recommendation for travelers with children or elders."
      },
      {
        title: "Winter Driving & Chains",
        category: "roads",
        content: "During peak snowfall in January and February, vehicles heading to Malam Jabba must use snow chains. Our drivers are trained in winter mountain driving."
      }
    ],
    gallery: [
      {
        url: "/destinations/swat.webp",
        caption: "Pine forests and mountain mist shrouding the upper Kalam valley",
        alt: "Pine forests and mountains in Kalam, Swat Valley",
        location: "Kalam, Swat"
      },
      {
        url: "/gallery/kalam-swat.webp",
        caption: "Emerald waters and rapids along Swat river in Kalam valley",
        alt: "Swat river in Kalam",
        location: "Kalam Valley, Swat"
      }
    ],
    faqs: [
      {
        question: "How long does it take to reach Swat from Islamabad?",
        answer: "Thanks to the modern Swat Motorway, travel from Islamabad to Mingora takes only 3.5 to 4 hours. From Mingora to Kalam takes approximately 2.5 to 3 hours."
      },
      {
        question: "Is Swat Valley open during the winter?",
        answer: "Yes! Swat is a prime winter destination. Malam Jabba operates ski slopes, chairlifts, and winter events throughout December, January, and February."
      }
    ]
  },
  {
    slug: "fairy-meadows",
    name: "Fairy Meadows & Nanga Parbat",
    tagline: "Unrivaled vistas of the Killer Mountain and peaceful pine camping beneath glowing glaciers.",
    region: "Gilgit-Baltistan",
    elevation: "3,300 m (10,800 ft)",
    heroImage: "/destinations/fairy-meadows.webp",
    cardImage: "/destinations/fairy-meadows.webp",
    overview: [
      "Named 'Joot' by local residents and christened 'Fairy Meadows' by Austrian mountaineer Willy Merkl, this lush alpine grassland sits right at the foot of Nanga Parbat (8,126m)—the ninth highest mountain in the world and the western anchor of the Himalayas.",
      "Reaching Fairy Meadows is a world-class adventure: a thrilling jeep ride along the sheer cliffs of the Raikhot Gorge, followed by an invigorating 3-4 hour hike or horseback ride through pine forests leading into an amphitheater of glaciers and immense ice walls."
    ],
    bestTimeToVisit: [
      {
        season: "Summer Trekking",
        months: "June – August",
        status: "Peak",
        description: "Comfortable camping temperatures, clear mountain views, safe trekking up to Beyal Camp and Nanga Parbat Base Camp."
      },
      {
        season: "Autumn",
        months: "September – October",
        status: "Good",
        description: "Crisp clear skies, dramatic golden birch trees; freezing temperatures at night requiring warm sleeping bags."
      },
      {
        season: "Winter / Spring",
        months: "November – May",
        status: "Closed/Limited",
        description: "Heavy snow accumulation. Jeep track frequently blocked and lodges closed for general tourism."
      }
    ],
    suggestedDuration: "4 to 6 Days (ex-Islamabad via KKH)",
    attractions: [
      {
        name: "Nanga Parbat Raikhot Face",
        description: "An awe-inspiring sheer wall of ice and rock rising over 4,000 meters above the meadow floor.",
        highlights: ["8,126m summit view", "Raikhot Glacier icefall", "Glowing evening alpenglow"],
        image: "/destinations/fairy-meadows.webp"
      },
      {
        name: "Raikhot Bridge Jeep Trail",
        description: "Famous mountain trail carved into the rocky gorge, navigated exclusively by licensed local mountain drivers.",
        highlights: ["Thrilling mountain drive", "Raikhot river gorge", "Transfer point to Tattu village"],
        image: "/gallery/fairy-meadows.webp"
      },
      {
        name: "Beyal Camp & Base Camp Trek",
        description: "A tranquil 2-hour walk from Fairy Meadows to Beyal Camp, continuing onwards to the Nanga Parbat base camp viewpoint.",
        highlights: ["Glacial moraine crossing", "Close-up glacier crevasse views", "Alpine birch woods"],
        image: "/gallery/fairy-meadows.webp"
      }
    ],
    experiences: [
      "Wake up inside a traditional wooden cottage with the massive north face of Nanga Parbat framed in your window",
      "Trek past grazing mountain horses to Beyal Camp and sit by the edge of Raikhot Glacier",
      "Gather around an evening wood bonfire beneath an extraordinary canopy of the Milky Way",
      "Ride an indigenous mountain horse along the scenic pine forest path from Tattu to the meadows"
    ],
    practicalTips: [
      {
        title: "Physical Fitness & Trekking",
        category: "altitude",
        content: "This trip requires walking 3 to 4 hours uphill from Tattu village to the meadows. Horses and porters can be arranged for travelers who prefer not to hike the entire distance."
      },
      {
        title: "Jeep Safety Note",
        category: "roads",
        content: "The Raikhot jeep track is an adventurous cliffside route. All jeeps are strictly operated by union-certified local drivers of Diamer district."
      },
      {
        title: "No Luxury Amenities",
        category: "clothing",
        content: "Fairy Meadows offers rustic wooden cabins and camping setups with basic solar electricity and mountain spring water. Pack a power bank and heavy woolens."
      }
    ],
    gallery: [
      {
        url: "/destinations/fairy-meadows.webp",
        caption: "Nanga Parbat's towering Raikhot face mirrored across Fairy Meadows",
        alt: "Nanga Parbat view from Fairy Meadows, Gilgit-Baltistan",
        location: "Fairy Meadows, Diamer"
      },
      {
        url: "/gallery/fairy-meadows.webp",
        caption: "Reflection pool and mountain horse grazing at Fairy Meadows",
        alt: "Fairy Meadows reflection",
        location: "Fairy Meadows, Diamer"
      }
    ],
    faqs: [
      {
        question: "Can children or elderly family members visit Fairy Meadows?",
        answer: "Because it involves a rugged 1.5-hour jeep ride and a 3-hour hike (or horse ride), Fairy Meadows is best suited for moderately active travelers. Porters and riding horses are available for hire."
      },
      {
        question: "Is electricity and heating available?",
        answer: "Lodges rely on local solar and micro-hydro power. Electricity is typically available for a few hours in the evening to charge devices, and wood stoves are lit for warmth."
      }
    ]
  },
  {
    slug: "neelum-valley",
    name: "Neelum Valley",
    tagline: "Verdant Kashmir hills, terraced wooden villages, and rushing river gorges.",
    region: "Azad Jammu & Kashmir",
    elevation: "1,524 m (Keran) to 2,554 m (Arang Kel)",
    heroImage: "/destinations/neelum-valley.webp",
    cardImage: "/destinations/neelum-valley.webp",
    overview: [
      "Stretching like a bow north of Muzaffarabad alongside the roaring, jade-hued Neelum River, Neelum Valley is the crown jewel of Azad Jammu and Kashmir. Famed for its dense coniferous forests, tiered fruit orchards, crystal streams, and traditional Kashmiri wooden houses, it offers a serene retreat.",
      "Key highlights include Keran, where the river separates Pakistan and Indian-administered Kashmir, the historic Hindu seat of learning at Sharda Peeth, and the fairy-tale plateau village of Arang Kel, perched high above the river gorge."
    ],
    bestTimeToVisit: [
      {
        season: "Summer",
        months: "May – August",
        status: "Peak",
        description: "Lush green landscapes, pleasant weather, gushing waterfalls, and comfortable village stays."
      },
      {
        season: "Autumn",
        months: "September – October",
        status: "Good",
        description: "Golden autumn hues in apple and walnut orchards, peaceful uncrowded trails."
      },
      {
        season: "Spring",
        months: "March – April",
        status: "Good",
        description: "Melting snow, rushing streams, fresh wildflowers, and mild sunny afternoons."
      },
      {
        season: "Winter",
        months: "December – February",
        status: "Challenging",
        description: "Upper valley (Kel, Taobat) receives heavy snow; lower valley (Kutton, Keran) remains accessible."
      }
    ],
    suggestedDuration: "3 to 5 Days (ex-Islamabad)",
    attractions: [
      {
        name: "Arang Kel",
        description: "A breathtaking plateau village perched at 2,554 meters, accessed via a chairlift across the river followed by a scenic walk.",
        highlights: ["High meadow plateau", "Wooden Kashmiri houses", "Cable car over river gorge"],
        image: "/destinations/neelum-valley.webp"
      },
      {
        name: "Sharda Peeth",
        description: "Ancient temple and historic center of higher education dating back to the 6th-12th centuries, revered for its historic stone arches.",
        highlights: ["Ancient stone temple ruins", "Sharda riverbank view", "Centuries of scholarly history"],
        image: "/attractions/sharda-peeth.webp"
      },
      {
        name: "Keran & River Promenade",
        description: "Peaceful riverside town offering close-up views of the Line of Control with villages visible across the river.",
        highlights: ["Riverfront hotels", "Border river views", "Apple orchards"],
        image: "/destinations/neelum-valley.webp"
      },
      {
        name: "Kutton & Dhani Waterfalls",
        description: "Spectacular roadside cascades flowing directly down rocky cliffs into the Neelum River.",
        highlights: ["Dhani waterfall spray", "Kutton hydro project", "Trout fish farms"],
        image: "/gallery/kalam-swat.webp"
      }
    ],
    experiences: [
      "Ride the river cable car and hike up to the green pastures of Arang Kel",
      "Touch the cool mountain waters of the Neelum River at Keran promenade",
      "Explore the stone sanctum of the ancient Sharda Peeth University ruins",
      "Taste traditional Kashmiri cuisine including Gushtaba, Roghan Josh, and noon chai (pink tea)",
      "Buy locally harvested walnuts, pure Kashmiri honey, and hand-embroidered woolen shawls"
    ],
    practicalTips: [
      {
        title: "National Identity Verification",
        category: "culture",
        content: "Pakistani citizens must carry their original CNIC for verification at checkposts in AJK. Foreign passport holders should confirm tourist NOC regulations before booking."
      },
      {
        title: "Upper Valley Roads",
        category: "roads",
        content: "Roads up to Keran and Sharda are generally paved. Reaching Taobat or crossing deeper terrain requires rugged 4x4 jeeps which we coordinate."
      },
      {
        title: "Mobile Network",
        category: "connectivity",
        content: "SCOM is the only consistently active mobile and data network in Neelum Valley. Mainstream private telecom networks lose signal after Muzaffarabad."
      }
    ],
    gallery: [
      {
        url: "/destinations/neelum-valley.webp",
        caption: "Emerald green hills and traditional wooden rooftops in Neelum Valley",
        alt: "Neelum Valley landscape in Azad Jammu & Kashmir",
        location: "Kel, Neelum Valley"
      },
      {
        url: "/attractions/sharda-peeth.webp",
        caption: "Historic stone ruins of Sharda Peeth in upper Neelum Valley",
        alt: "Sharda Peeth ruins",
        location: "Sharda, Neelum Valley"
      }
    ],
    faqs: [
      {
        question: "Is Neelum Valley safe for tourist visits?",
        answer: "Yes, Neelum Valley is widely visited by thousands of domestic families each season. We always monitor local administration travel advisories to ensure smooth trips."
      },
      {
        question: "How long does it take from Islamabad to Keran?",
        answer: "The drive takes approximately 6 to 7 hours from Islamabad via Murree Express Highway and Muzaffarabad, with regular stops for tea and waterfalls."
      }
    ]
  }
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getAllDestinationSlugs(): string[] {
  return destinations.map((d) => d.slug);
}

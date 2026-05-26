// Bellagio Villa Lonavala Data Configuration (Warm boutique escape, Sahyadri hills)
import masterSuiteImg from "./assets/images/master_suite_1779779663972.png";
import bedroomTwoImg from "./assets/images/bedroom_two_1779779685410.png";
import livingRoomImg from "./assets/images/villa_living_1779779640671.png";
import poolImg from "./assets/images/villa_pool_1779779623629.png";
import gardenImg from "./assets/images/garden_bonfire_1779779704644.png";
import kitchenImg from "./assets/images/villa_kitchen_1779779725576.png";
import exteriorImg from "./assets/images/villa_exterior_1779779601624.png";

export interface SpaceItem {
  id: string;
  name: string;
  description: string;
  details: string[];
  image: string;
}

export interface AmenityItem {
  iconName: string; // references lucide icon
  label: string;
  desc: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  date: string;
  rating: number;
  avatarLetter: string;
  title: string;
  comment: string;
  type: string; // e.g. "Family Trip", "Weekend Getaway"
  location: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  category: "exterior" | "living" | "rooms" | "pool-garden" | "dining";
  caption: string;
}

export const VILLA_SPACES: SpaceItem[] = [
  {
    id: "master",
    name: "Master Suite",
    description: "Your sanctuary of comfort. Ground floor with easy access, expansive windows, premium linens, and dual ventilation doors that welcome the gentle mountain breeze.",
    details: ["King-sized bed", "Two plush floor mattresses", "Attached heritage-tiled bathroom", "Spacious wardrobe & writing desk", "Direct pool-facing path"],
    image: masterSuiteImg
  },
  {
    id: "bed2",
    name: "Lush-View Bedroom 2",
    description: "Wake up amidst the green and gold. Perched on the upper level, offering panoramic views of the Sahyadri treetops and Tungarli's cascading slopes.",
    details: ["Queen-sized bed", "Plush premium linens", "Attached state-of-the-art bathroom", "Private reading chair corner", "Scenic garden facing window"],
    image: bedroomTwoImg
  },
  {
    id: "bed3",
    name: "Serene Garden Suite 3",
    description: "A lovely room washed in soft terracotta and off-white tones, capturing the gentle Lonavala sunlight. Perfect for deep restorative rests.",
    details: ["Queen-sized bed", "Extra high-quality floor mattress", "Attached custom granite bathroom", "Full-length mirror & dressing station", "Overlooks the lush backyard garden"],
    image: bedroomTwoImg
  },
  {
    id: "living",
    name: "Grand Living Room",
    description: "The heart of the villa. High arches, custom teak wooden furniture, plush upholstery, and an open layout that blends with the outdoor dining patio. Perfect for your family games and deep midnight storytelling.",
    details: ["Premium sofa-cum-bed", "Grand 8-seater solid wood custom dining table", "Ambient warm lighting & Italian villa floor panels", "Opens directly to the pool deck", "Equipped with board games and Bluetooth speaker"],
    image: livingRoomImg
  },
  {
    id: "pool",
    name: "Private Azure Swimming Pool",
    description: "Your absolute private oasis. Cool off under the golden sun or enjoy peaceful evening swims under the Sahyadri stars. Fully serviced and nested inside lush manicured privacy hedges.",
    details: ["Pristine temperature-controlled pool", "Accessible 7:00 AM – 10:00 PM", "Surrounded by a secure private deck", "Lounge chairs with umbrellas", "Poolside shower area"],
    image: poolImg
  },
  {
    id: "garden",
    name: "Lush Garden & Bonfire Patio",
    description: "Lined with seasonal Lonavala blossoms, local ferns, and stone paths. When the evening monsoon fog rolls in, gather around the custom terracotta fire pit for BBQ and laughter.",
    details: ["Manicured lawn with ambient fairy lights", "Stone-brick patio with elegant wrought-iron furniture", "Custom charcoal BBQ setup", "Dedicated bonfire and night guitar session spot", "Kid-friendly play safe boundary"],
    image: gardenImg
  }
];

export const AMENITIES: AmenityItem[] = [
  {
    iconName: "Waves",
    label: "Private Swimming Pool",
    desc: "Plunge into our clear azure waters, accessible from 7am to 10pm daily."
  },
  {
    iconName: "Sprout",
    label: "Lush Private Garden",
    desc: "A sprawling green lawn curated with monsoon ferns and floral borders."
  },
  {
    iconName: "ChefHat",
    label: "Fully Equipped Kitchen",
    desc: "Fitted with stove, microwave, refrigerator, kettle, customized chinaware and cutlery."
  },
  {
    iconName: "UtensilsCrossed",
    label: "Home-Cooked Meals",
    desc: "Local Maharashtrian or Italian bistro style meals prepared by our caretakers on request."
  },
  {
    iconName: "Flame",
    label: "Bespoke BBQ Grill",
    desc: "A rustic charcoal grill ready to roast juicy skewers while enjoying Lonavala evening chills."
  },
  {
    iconName: "Wifi",
    label: "High-Speed Wi-Fi",
    desc: "Seamless connectivity throughout the villa, ideal for remote work sessions."
  },
  {
    iconName: "Snowflake",
    label: "Full Air Conditioning",
    desc: "All bedrooms and the grand living area are fully climate controlled."
  },
  {
    iconName: "Car",
    label: "Free Secure Parking",
    desc: "Dedicated safe space for up to 3 cars inside the villa premises."
  },
  {
    iconName: "Tv",
    label: "Flat-Screen TV",
    desc: "Smart TV loaded with streaming apps in the living room for cozy movie nights."
  },
  {
    iconName: "Coffee",
    label: "Electric Kettle & Prep",
    desc: "Start your mornings with instant, local Chai or fresh filter coffee at your pace."
  },
  {
    iconName: "Dices",
    label: "Games & Entertainment",
    desc: "Jenga, Monopoly, Playing cards and badminton equipment provided."
  },
  {
    iconName: "Music",
    label: "Bluetooth Speaker",
    desc: "Bring your favorite tunes to the poolside deck with crystal clear portable audio."
  },
  {
    iconName: "PawPrint",
    label: "Pet Friendly Spaces",
    desc: "Your furry family members are welcome here with safe garden run-around zones."
  },
  {
    iconName: "PlaneTakeoff",
    label: "Airport Transfers",
    desc: "Pre-arranged premium cabs to Pune (75 km) or Mumbai (90 km)."
  },
  {
    iconName: "KeyRound",
    label: "Self Check-in / Staffed",
    desc: "A warm welcome from our 24/7 on-site support staff for seamless entry."
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "r1",
    name: "Advait Deshmukh",
    date: "April 2026",
    rating: 5,
    avatarLetter: "A",
    title: "An Absolute Gem of Lonavala!",
    comment: "Bellagio is easily the best private villa we've rented in Lonavala. The pool is incredibly clean and completely private, which is rare. Radhika is a stellar host who made sure our family felt right at home. The caretakers served mouth-watering hot bhakris and chicken curry right by the garden fire pit in the evening! Truly unforgettable.",
    type: "Family Getaway",
    location: "Mumbai, Maharashtra"
  },
  {
    id: "r2",
    name: "Sarah Patel",
    date: "May 2026",
    rating: 5,
    avatarLetter: "S",
    title: "True Mediterranean Elegance meets rustic Sahyadris",
    comment: "We stayed here for a weekend celebration with close friends. The vibe is so peaceful, warm, and tastefully styled – very Italian countryside with all modern amenities. High-speed WiFi allowed me to send several quick emails before plunging into the pool. Radhika's recommendations for nearby spots were perfect.",
    type: "Friends Reunion",
    location: "Pune, India"
  },
  {
    id: "r3",
    name: "Rohan & Nikita",
    date: "March 2026",
    rating: 5,
    avatarLetter: "R",
    title: "Extremely Clean and Serene!",
    comment: "Stunning property located just 5 minutes from the key market but tucked away beautifully in Tungarli and completely quiet. The garden is magnificent, green and full of flowers. The bedrooms are incredibly comfortable, and self check-in with the on-site staff was exceptionally smooth. Will be booking again during the monsoons!",
    type: "Couples Escape",
    location: "Thane"
  },
  {
    id: "r4",
    name: "Kabir Mehra",
    date: "February 2026",
    rating: 5,
    avatarLetter: "K",
    title: "Awesome Pool and Outdoor Spaces",
    comment: "Excellent experience. Cleanliness is top notch (easily 5/5 stars). We spent most of our time out on the patio playing cards and sipping hot ginger tea while kids played in the backyard pool. The home-styled BBQ dinner was prepared beautifully by the helper. Big thumbs up!",
    type: "Family Celebration",
    location: "Mumbai"
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: "g1",
    url: exteriorImg,
    category: "exterior",
    caption: "The magnificent facade of Bellagio Villa nestled in the Sahyadri mountains"
  },
  {
    id: "g2",
    url: poolImg,
    category: "pool-garden",
    caption: "Our private azure pool reflecting the soft blue mountain skies"
  },
  {
    id: "g3",
    url: livingRoomImg,
    category: "living",
    caption: "Spacious grand living room featuring fine custom wooden details"
  },
  {
    id: "g4",
    url: masterSuiteImg,
    category: "rooms",
    caption: "The ground floor Master Suite with crisp sheets and direct patio exit"
  },
  {
    id: "g5",
    url: bedroomTwoImg,
    category: "rooms",
    caption: "Bedroom 2 featuring lush green treetop views and ambient morning light"
  },
  {
    id: "g6",
    url: gardenImg,
    category: "pool-garden",
    caption: "The elegant stone-paved patio with warm sunset garden lights"
  },
  {
    id: "g7",
    url: kitchenImg,
    category: "dining",
    caption: "Fully equipped kitchen ready for preparing fresh, delicious home-styled meals"
  },
  {
    id: "g8",
    url: gardenImg,
    category: "pool-garden",
    caption: "Evening cozy bonfire arrangement for perfect starry sky conversations"
  }
];

export const RETREAT_EXPERIENCES = {
  villa: [
    { title: "Azure Private Pool", desc: "Enjoy uninterrupted dips from 7 AM to 10 PM in the absolute seclusion of premium high privacy hedges." },
    { title: "Home-Cooked Delicacies", desc: "Savor steaming local Maharashtrian dishes, spicy missal, fresh bhakris, or continental bites cooked with love by our caretakers." },
    { title: "Cozy Garden Bonfires", desc: "Gather around the warm brick fire pit on cool Lonavala nights to roast marshmallows or play acoustic tunes." },
    { title: "Acoustic Play & Board Games", desc: "Challenge your family or friends with giant Jenga, Monopoly, or badminton in the garden under warm fairy lights." }
  ],
  lonavala: [
    { name: "Bhushi Dam", distance: "10 min drive", desc: "Famous cascading waterfall steps – a mandatory monsoon experience." },
    { name: "Della Adventure Resort", distance: "10 min drive", desc: "High-adrenaline extreme activities, dining, and vibrant family entertainment." },
    { name: "Celebrity Wax Museum", distance: "10 min drive", desc: "A fascinating walkthrough featuring lifelike statues of icons and historical figures." },
    { name: "Khandala Ghat Viewpoint", distance: "10 min drive", desc: "Panoramic breathtaking views of the mist-laden valleys and railway curves." },
    { name: "Local Market & Railway Station", distance: "5-10 min drive", desc: "Hot fudge chikki shops, local wooden toys, spice shops and quick train transit." },
    { name: "Lonavala Stand Bus Station", distance: "15 min walk", desc: "Providing easy bus transport connectivity to Pune and Mumbai." },
    { name: "Pune International Airport", distance: "75 km drive", desc: "Direct national and international flights connecting the Deccan hub." }
  ]
};

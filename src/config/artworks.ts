import type { Artwork, GreetingCard, PriceMatrix, SiteConfig } from "../types";

// ============================================================
// SITE CONFIG — Edit your details here
// ============================================================
export const SITE_CONFIG: SiteConfig = {
  name: "CityInLines",
  tagline: "Iconic cityscapes rendered in intricate crosshatching perfect for prints or wallpapers.",
  description: "A series of digital illustrations capturing the soul of cities, one line at a time. Each piece turns architectural icons into textured, monochromatic masterpieces perfect for prints or wallpapers.",
  custom: "We also do fully custom work — your childhood school, first date spot, wedding venue, any place that means something. Mention it in your inquiry.",
  email: "hello.thecardstudio@gmail.com",           // ← your email
  whatsappNumber: "+919999999999",             // ← your WhatsApp
  formspreeEndpoint: "https://formspree.io/f/xwvrbgdk", // ← after Formspree signup
};

// ============================================================
// PRICES — Edit here, changes reflect everywhere automatically
// ============================================================
export const PRICES: PriceMatrix = {
  A5: { unframed: 350,  framed: 450  },
  A4: { unframed: 700,  framed: 850  },
  A3: { unframed: 900,  framed: 1200 },
};

export const SIZES = ["A5", "A4", "A3"] as const;
export const FRAME_OPTIONS = ["Unframed", "Framed"] as const;

// ============================================================
// ARTWORKS — Replace imageUrl with your Cloudinary URLs
// To add a new artwork: copy one object, paste at end, update fields
// ============================================================
export const ARTWORKS: Artwork[] = [
  {
    id: 1,
    title: "Charminar at Dusk",
    city: "Hyderabad",
    description: "The iconic monument rendered in 3,000 lines of crosshatching ink.",
    category: "timeless-deccan",
    imageUrl: "https://res.cloudinary.com/ddn9iuahl/image/upload/v1773391611/bd6fafad_wm02hu.jpg",
    available: true,
  },
  {
    id: 2,
    title: "Tank Bund Silhouette",
    city: "Hyderabad",
    description: "The twin cities reflected in still water, captured in intricate linework.",
    category: "timeless-deccan",
    imageUrl: "https://placehold.co/800x1000/1a1915/d4a853?text=Tank+Bund",
    available: true,
  },
  {
    id: 3,
    title: "Golconda Fortress",
    city: "Hyderabad",
    description: "Ancient stone walls and battlements traced in fine crosshatching.",
    category: "timeless-deccan",
    imageUrl: "https://placehold.co/800x1000/1a1915/d4a853?text=Golconda",
    available: true,
  },
  {
    id: 4,
    title: "Hussain Sagar",
    city: "Hyderabad",
    description: "The heart-shaped lake and Buddha statue in monochrome ink.",
    category: "cyberabad-horizons",
    imageUrl: "https://placehold.co/800x1000/1a1915/d4a853?text=Hussain+Sagar",
    available: true,
  },
  {
    id: 5,
    title: "Birla Mandir",
    city: "Hyderabad",
    description: "White marble temple on granite hill, rendered in layered hatching.",
    category: "cyberabad-horizons",
    imageUrl: "https://placehold.co/800x1000/1a1915/d4a853?text=Birla+Mandir",
    available: true,
  },
  {
    id: 6,
    title: "Laad Bazaar Archway",
    city: "Hyderabad",
    description: "The bangle market's ornate gateway in dense, intricate linework.",
    category: "cyberabad-horizons",
    imageUrl: "https://placehold.co/800x1000/1a1915/d4a853?text=Laad+Bazaar",
    available: true,
  },
  {
    id: 7,
    title: "Falaknuma Palace",
    city: "Hyderabad",
    description: "The sky-touching palace of the Nizams, detailed in fine ink.",
    category: "cyberabad-horizons",
    imageUrl: "https://placehold.co/800x1000/1a1915/d4a853?text=Falaknuma",
    available: true,
  },
];

// ============================================================
// GREETING CARDS
// ============================================================
export const GREETING_CARDS: GreetingCard[] = [
  {
    id: "gc1",
    title: "Festive City Card",
    description: "Handmade greeting card with crosshatched cityscape. Perfect for gifting.",
    imageUrl: "https://placehold.co/600x800/1a1915/d4a853?text=Card+1",
    price: 150,
  },
  {
    id: "gc2",
    title: "Landmark Love Card",
    description: "Featuring iconic city landmark in detailed ink illustration.",
    imageUrl: "https://placehold.co/600x800/1a1915/d4a853?text=Card+2",
    price: 150,
  },
  {
    id: "gc3",
    title: "City Nights Card",
    description: "Moody nighttime cityscape rendered in intricate crosshatching.",
    imageUrl: "https://placehold.co/600x800/1a1915/d4a853?text=Card+3",
    price: 150,
  },
];

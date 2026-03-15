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
  A5: { unframed: 300,  framed: 400  },
  A4: { unframed: 650,  framed: 800  },
  A3: { unframed: 850,  framed: 1150 },
};

export const SIZES = ["A5", "A4", "A3"] as const;
export const FRAME_OPTIONS = ["Unframed", "Framed"] as const;

const withWatermark = (url: string): string => {
  const parts = url.split("/upload/");
  return `${parts[0]}/upload/l_text:helvetica_60:CityInLines,co_rgb:f0ebe0,o_40,g_center/${parts[1]}`;
};
// ============================================================
// ARTWORKS — Replace imageUrl with your Cloudinary URLs
// To add a new artwork: copy one object, paste at end, update fields
// ============================================================
export const ARTWORKS: Artwork[] = [
  {
    id: 1,
    title: "Buddha at Dusk",
    city: "Hyderabad",
    description: "Serene Buddha overlooking the bustling city",
    category: "timeless-deccan",
    imageUrl: withWatermark("https://res.cloudinary.com/ddn9iuahl/image/upload/v1773567021/Buddha_mexzwa.jpg"),
    available: true,
  },
  {
    id: 2,
    title: "Cyber Towers",
    city: "Hyderabad",
    description: "The pioneering IT landmark that marked the beginning of Hyderabad’s transformation into a global technology hub.",
    category: "cyberabad-horizons",
    imageUrl: withWatermark("https://res.cloudinary.com/ddn9iuahl/image/upload/v1773567021/Cyber_Towers_hbimrs.jpg"),
    available: true,
  },
  {
    id: 3,
    title: "Charminar",
    city: "Hyderabad",
    description: "The iconic historical landmark in a vantage view",
    category: "timeless-deccan",
    imageUrl: withWatermark("https://res.cloudinary.com/ddn9iuahl/image/upload/v1773567021/Charminar_sjdcxc.jpg"),
    available: true,
  },
 {
    id: 4,
    title: "Ikea Flyover",
    city: "Hyderabad",
    description: "A sweeping urban flyover marking Hyderabad’s modern tech corridor.",
    category: "cyberabad-horizons",
    imageUrl: withWatermark("https://res.cloudinary.com/ddn9iuahl/image/upload/v1773567021/Ikea_Flyover_qetaa3.jpg"),
    available: true,
  },
  {
    id: 5,
    title: "Birla Mandir",
    city: "Hyderabad",
    description: "White marble temple on granite hill, rendered in layered hatching.",
    category: "timeless-deccan",
    imageUrl: withWatermark("https://res.cloudinary.com/ddn9iuahl/image/upload/v1773567021/Birla_Mandir_vtz7fh.jpg"),
    available: true,
  },
   {
    id: 6,
    title: "Durgam Cheruvu Cable Bridge",
    city: "Hyderabad",
    description: "The cable bridge connecting Hyderabad's Tech district with modern skyline backdrop",
    category: "cyberabad-horizons",
    imageUrl: withWatermark("https://res.cloudinary.com/ddn9iuahl/image/upload/v1773567021/Durgam_Cheruvu_jbudta.jpg"),
    available: true,
  },
 {
    id: 7,
    title: "T-Works Junction",
    city: "Hyderabad",
    description: "",
    category: "cyberabad-horizons",
    imageUrl: withWatermark("https://res.cloudinary.com/ddn9iuahl/image/upload/v1773567021/T_Works_pdifsn.jpg"),
    available: true,
  },
   {
    id: 8,
    title: "Secretariat",
    city: "Hyderabad",
    description: "Telangana's modern administrative center",
    category: "cyberabad-horizons",
    imageUrl: withWatermark("https://res.cloudinary.com/ddn9iuahl/image/upload/v1773567021/Secretariat_unvgd8.jpg"),
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

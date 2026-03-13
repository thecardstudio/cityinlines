// ============================================================
// TYPES — Shared interfaces across the app
// ============================================================

export interface Artwork {
  id: number;
  title: string;
  city: string;
  category: "timeless-deccan" | "cyberabad-horizons";
  description: string;
  imageUrl: string;
  available: boolean;
}

export interface GreetingCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

export type Size = "A5" | "A4" | "A3";
export type FrameOption = "Unframed" | "Framed";

export interface PriceMatrix {
  [key: string]: { unframed: number; framed: number };
}

export interface CartItem {
  artworkId: number;
  title: string;
  imageUrl: string;
  size: Size;
  frame: FrameOption;
  price: number;
  quantity: number;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  custom: string;
  email: string;
  whatsappNumber: string;
  formspreeEndpoint: string;
}

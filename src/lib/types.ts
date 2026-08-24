// Shared content types — these describe the exact shape of data that flows
// from Postgres to the UI. Keeping them centralized means the rendering
// layer never needs to change if the source moves from JSON -> DB -> API.

export type VentureSlug = "project" | "learning" | "event";

export type Venture = {
  id: number;
  slug: VentureSlug;
  number: string;
  name: string;
  label: string;
  theme: string;
  heroImage: string | null;
  description: string;
  headline: string[];
  features: string[];
  cta: string;
  link: string;
  active: boolean;
  sortOrder: number;
};

export type Offering = {
  id: number;
  venture: VentureSlug;
  title: string;
  category: string | null;
  description: string | null;
  image: string | null;
  price: string | null;
  oldPrice: string | null;
  discount: string | null;
  badge: string | null;
  cta: string | null;
  link: string | null;
  featured: boolean;
  gallerySize: string | null;
  active: boolean;
  sortOrder: number;
};

export type Testimonial = {
  id: number;
  quote: string;
  name: string;
  category: string | null;
  active: boolean;
  sortOrder: number;
};

export type Stat = {
  id: number;
  value: string;
  label: string;
  active: boolean;
  sortOrder: number;
};

export type SiteConfigData = {
  brand: {
    name: string;
    tagline: string;
    philosophy: string;
  };
  hero: {
    eyebrow: string;
    titleLines: string[];
    description: string;
    primaryCTA: string;
    secondaryCTA: string;
  };
  whatsapp: {
    number: string;
    messages: {
      project: string;
      learning: string;
      event: string;
    };
  };
  contact: {
    email: string;
    phone: string;
    instagram: string;
    address?: string;
  };
  settings: {
    showFeatured: boolean;
    showTestimonials: boolean;
    showStats: boolean;
  };
};

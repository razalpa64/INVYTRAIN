import type { SiteConfigData, Stat, Testimonial, Venture } from "./types";

// Graceful fallbacks — the site must never break or show an empty shell if
// the database is briefly unavailable or a row is missing a field.

export const DEFAULT_SITE_CONFIG: SiteConfigData = {
  brand: {
    name: "INVYTRA",
    tagline: "Ideas today. Impact tomorrow.",
    philosophy: "Learn • Create • Celebrate",
  },
  hero: {
    eyebrow: "THE INVYTRA ECOSYSTEM",
    titleLines: ["One vision.", "Three worlds."],
    description:
      "A growing venture creating meaningful experiences across education, technology and celebrations.",
    primaryCTA: "Explore Invytra",
    secondaryCTA: "See Our Work",
  },
  whatsapp: {
    number: "918606159002",
    messages: {
      project: "Hello Invytra Project, I am interested in a college project / software solution.",
      learning: "Hello Invytra Learning, I would like to know more about tutoring.",
      event: "Hello Invytra Event, I am interested in a digital invitation.",
    },
  },
  contact: {
    email: "hello@invytra.com",
    phone: "+91 86061 59002",
    instagram: "https://instagram.com/invytra",
  },
  settings: {
    showFeatured: true,
    showTestimonials: true,
    showStats: true,
  },
};

export const DEFAULT_VENTURES: Venture[] = [
  {
    id: 1,
    slug: "project",
    number: "01",
    name: "INVYTRA PROJECT",
    label: "DESIGN • DEVELOP • DELIVER",
    theme: "project",
    heroImage: "/images/project-visual.svg",
    description:
      "Turning college ideas into meaningful software, digital products and academic experiences.",
    headline: ["INVYTRA", "PROJECT"],
    features: [
      "Academic Projects",
      "Software Development",
      "UI / UX",
      "Documentation",
      "Presentations",
      "Final Year Projects",
    ],
    cta: "Explore Project",
    link: "/project",
    active: true,
    sortOrder: 1,
  },
  {
    id: 2,
    slug: "learning",
    number: "02",
    name: "INVYTRA LEARNING",
    label: "LEARN • GROW • SUCCEED",
    theme: "learning",
    heroImage: "/images/learning-visual.svg",
    description:
      "Personalized learning designed to give every student focused attention and stronger foundations.",
    headline: ["ONE TUTOR.", "ONE STUDENT.", "ONE FOCUSED JOURNEY."],
    features: ["1 : 1 Tuition", "All Subjects", "Language Learning", "Exam Preparation", "Progress Tracking"],
    cta: "Explore Learning",
    link: "/learning",
    active: true,
    sortOrder: 2,
  },
  {
    id: 3,
    slug: "event",
    number: "03",
    name: "INVYTRA EVENT",
    label: "PREMIUM DIGITAL INVITATIONS",
    theme: "event",
    heroImage: "/images/event-visual.svg",
    description:
      "Premium digital invitations and immersive event experiences crafted for moments worth remembering.",
    headline: ["YOUR MOMENT.", "REIMAGINED."],
    features: ["Wedding", "Save The Date", "RSVP", "Gallery", "Countdown", "Event Websites"],
    cta: "Explore Event",
    link: "/event",
    active: true,
    sortOrder: 3,
  },
];

export const DEFAULT_STATS: Stat[] = [
  { id: 1, value: "100+", label: "Projects Delivered", active: true, sortOrder: 1 },
  { id: 2, value: "50+", label: "Students Guided", active: true, sortOrder: 2 },
  { id: 3, value: "100+", label: "Invitations Crafted", active: true, sortOrder: 3 },
  { id: 4, value: "3", label: "Ventures, One Vision", active: true, sortOrder: 4 },
];

export const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      "Invytra built our final year project end-to-end — clean code, real documentation, and a presentation that actually impressed our panel.",
    name: "Aditya R.",
    category: "Project",
    active: true,
    sortOrder: 1,
  },
  {
    id: 2,
    quote: "My daughter finally enjoys studying. The one-to-one attention made all the difference in a single term.",
    name: "Meera K.",
    category: "Learning",
    active: true,
    sortOrder: 2,
  },
  {
    id: 3,
    quote: "Our wedding website felt like a boutique hotel's — elegant, fast, and every guest RSVP'd within days.",
    name: "Rohan & Ananya",
    category: "Event",
    active: true,
    sortOrder: 3,
  },
];

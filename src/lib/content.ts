import content from "@/content/site.json";
import type { Offering, SiteConfigData, Stat, Testimonial, Venture } from "./types";

export const siteContent = content;
export const jsonSiteConfig = content.siteConfig as SiteConfigData;
export const jsonVentures = content.ventures as Venture[];
export const jsonOfferings = content.offerings as Offering[];
export const jsonStats = content.stats as Stat[];
export const jsonTestimonials = content.testimonials as Testimonial[];

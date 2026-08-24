import { jsonOfferings, jsonSiteConfig, jsonStats, jsonTestimonials, jsonVentures } from "./content";
import type { Offering, SiteConfigData, Stat, Testimonial, Venture, VentureSlug } from "./types";

// The public site is intentionally content-file driven. Edit src/content/site.json
// to update any visible copy, image path, service, review, contact detail or CTA.
export async function getSiteConfig(): Promise<SiteConfigData> {
  return jsonSiteConfig;
}

export async function getVentures(): Promise<Venture[]> {
  return jsonVentures.filter((venture) => venture.active).sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function getVentureBySlug(slug: VentureSlug): Promise<Venture | undefined> {
  return (await getVentures()).find((venture) => venture.slug === slug);
}

export async function getOfferings(
  venture?: VentureSlug,
  opts?: { featuredOnly?: boolean; limit?: number },
): Promise<Offering[]> {
  let items = jsonOfferings.filter((item) => item.active);
  if (venture) items = items.filter((item) => item.venture === venture);
  if (opts?.featuredOnly) items = items.filter((item) => item.featured);
  items = [...items].sort((a, b) => a.sortOrder - b.sortOrder);
  return opts?.limit ? items.slice(0, opts.limit) : items;
}

export async function getFeaturedWork(): Promise<Offering[]> {
  return getOfferings(undefined, { featuredOnly: true });
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return jsonTestimonials.filter((item) => item.active).sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function getStats(): Promise<Stat[]> {
  return jsonStats.filter((item) => item.active).sort((a, b) => a.sortOrder - b.sortOrder);
}

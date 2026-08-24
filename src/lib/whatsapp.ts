import type { SiteConfigData, VentureSlug } from "./types";

/** Builds a wa.me deep link with a prefilled message. Never hardcode numbers in components. */
export function buildWhatsappLink(config: SiteConfigData, message: string): string {
  const digits = config.whatsapp.number.replace(/[^0-9]/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function ventureWhatsappLink(config: SiteConfigData, venture: VentureSlug): string {
  return buildWhatsappLink(config, config.whatsapp.messages[venture]);
}

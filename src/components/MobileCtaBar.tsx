/**
 * Floating WhatsApp bubble, mobile only — the standard, recognisable
 * pattern (bottom-right, thumb reach) instead of a full-width bar
 * eating screen space. BackToTop stacks above it on mobile.
 */
export default function MobileCtaBar({
  whatsappHref,
  label = "Chat on WhatsApp",
}: {
  whatsappHref: string;
  label?: string;
}) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-[850] flex h-14 w-14 items-center justify-center rounded-full bg-[#1FA855] text-white shadow-[0_12px_30px_rgba(31,168,85,0.42)] transition-transform active:scale-95 md:hidden"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#1FA855] opacity-15" aria-hidden />
      <svg width="27" height="27" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="relative">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.9-4.45 9.9-9.91A9.86 9.86 0 0 0 12.04 2m0 18.13a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 8.24 8.24c0 4.55-3.7 8.24-8.25 8.24m4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.38-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.48-.07 1.47-.58 1.74-1.15.27-.57.27-1.06.19-1.16-.08-.1-.23-.16-.48-.29" />
      </svg>
    </a>
  );
}

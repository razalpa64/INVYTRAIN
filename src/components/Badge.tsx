const STYLES: Record<string, { bg: string; color: string; border: string }> = {
  NEW: { bg: "rgba(245,200,66,0.15)", color: "#f5c842", border: "rgba(245,200,66,0.3)" },
  POPULAR: { bg: "rgba(232,131,74,0.15)", color: "#e8834a", border: "rgba(232,131,74,0.3)" },
  FEATURED: { bg: "rgba(245,200,66,0.15)", color: "#f5c842", border: "rgba(245,200,66,0.3)" },
  LIMITED: { bg: "rgba(123,94,167,0.15)", color: "#a07fd4", border: "rgba(123,94,167,0.3)" },
  OFFER: { bg: "rgba(245,200,66,0.15)", color: "#f5c842", border: "rgba(245,200,66,0.3)" },
  "ADMISSIONS OPEN": { bg: "rgba(74,158,142,0.15)", color: "#4a9e8e", border: "rgba(74,158,142,0.3)" },
  "SOLD OUT": { bg: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", border: "rgba(255,255,255,0.1)" },
  "COMING SOON": { bg: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.7)", border: "rgba(255,255,255,0.15)" },
};

export default function Badge({ label }: { label: string | null | undefined }) {
  if (!label) return null;
  const s = STYLES[label] ?? { bg: "rgba(245,200,66,0.15)", color: "#f5c842", border: "rgba(245,200,66,0.3)" };
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-[9px] font-extrabold uppercase tracking-[0.2em]"
      style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}
    >
      {label}
    </span>
  );
}

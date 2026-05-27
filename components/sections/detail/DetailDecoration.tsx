'use client';

import ScrollReveal from "../../ui/ScrollReveal";

export function DetailDecoration() {
  return (
    <>
      {/* ── Subtle Background Dot Pattern ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Bottom Accent Caption ── */}
      <ScrollReveal
        direction="bottom"
        rootMargin="0px 0px -5% 0px"
        className="self-end mt-4"
      >
        <div className="flex items-center gap-3">
          <span className="font-dm-mono text-[8px] tracking-[0.25em] text-white/15 uppercase">
            Pertemanan dimulai dari hal sederhana
          </span>
          <div className="h-px w-10 bg-gradient-to-l from-accent/20 to-transparent" />
        </div>
      </ScrollReveal>
    </>
  );
}

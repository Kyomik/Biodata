'use client';

import ScrollReveal from "@/components/ui/ScrollReveal";

export function CreatedInfo() {
  return (
    <div className="flex flex-col gap-6 flex-1 max-sm:gap-4">
      <ScrollReveal direction="left" rootMargin="-20% 0px -5% 0px" threshold={0.15}>
        <h1 className="
          text-8xl scale-y-130 font-semibold -tracking-[4px] font-dm-sans text-white/95
          max-sm:text-4xl max-sm:tracking-normal
        ">CREATED</h1>
      </ScrollReveal>
      <span className="font-dm-mono text-xs -tracking-wider scale-y-110 text-accent max-sm:scale-y-95">
        ON - 20/AUGUST/2026
      </span>
    </div>
  );
}

'use client';

import ScrollReveal from "@/components/ui/ScrollReveal";

export function AuthorName({ className }: { className?: string }) {
  return (
    <div className={`overflow-hidden w-full ${className}`}>
      <ScrollReveal direction="right" rootMargin="0px 0px -15% 0px">
        <h1 className="
          text-8xl scale-y-130 font-semibold -tracking-[4px] font-dm-sans text-white/95
          max-sm:text-4xl max-sm:tracking-normal
          select-none will-change-transform
        ">
          ILHAM SAJA
        </h1>
      </ScrollReveal>
    </div>
  );
}

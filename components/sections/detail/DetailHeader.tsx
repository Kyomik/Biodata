'use client';

import ScrollReveal from "../../ui/ScrollReveal";
import { StackedType, TypeLine } from "../../ui/StackedType";

const titleText: TypeLine[] = [
  { text: "How", color: "ghost", tag: "ORIGIN VERSION" },
  { text: "did you", color: "lit" },
  { text: "become", color: "red" },
  { text: "my friend?", color: "ghost" },
];

export function DetailHeader() {
  return (
    <>
      <ScrollReveal
        direction="left"
        rootMargin="0px 0px -10% 0px"
        className="mb-6 mt-4"
      >
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-three/60" />
          <span className="font-dm-mono text-[10px] tracking-[0.3em] uppercase text-three/60">
            Origin Story
          </span>
        </div>
      </ScrollReveal>

      <ScrollReveal rootMargin="0px 0px -15% 0px">
        <StackedType lines={titleText} />
        <div className="flex items-center gap-3 mt-5">
          <div className="h-px w-16 bg-gradient-to-r from-three/80 to-transparent" />
          <span className="font-dm-mono text-[9px] tracking-[0.2em] text-white/20 uppercase">
            The friendship arc
          </span>
        </div>
      </ScrollReveal>
    </>
  );
}

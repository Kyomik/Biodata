"use client";

import { RefObject, useEffect, useRef } from "react";

export default function PlusCircle({ triggerRef }: { triggerRef: RefObject<HTMLDivElement | null> }) {
  const svgTextRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgTextRef.current) return;
    let mounted = true;

    async function init() {
      const { animate, svg, stagger, onScroll } = await import("animejs");
      if (!mounted || !svgTextRef.current || !triggerRef.current) return;

      const lines = svgTextRef.current.querySelectorAll<SVGTextElement>(".draw-text");
      if (!lines.length) return;

      const drawables = svg.createDrawable(lines);
      const scrollTarget = { target: triggerRef.current, enter: "top -20%" };

      animate(drawables, {
        fillOpacity: [0, 1],
        draw: ["0 0", "0 1"],
        ease: "inOutQuad",
        duration: 2000,
        autoplay: onScroll(scrollTarget),
      });

      animate(lines, {
        fillOpacity: [0, 1],
        ease: "outQuad",
        duration: 400,
        delay: stagger(300, { start: 500 }),
        autoplay: onScroll(scrollTarget),
      });
    }

    init();
    return () => { mounted = false; };
  }, [triggerRef]);

  return (
    <div className="
      absolute left-1/2 bottom-0 -translate-x-1/2 w-[clamp(260px,50vw,700px)] aspect-square pointer-events-none overflow-visible
      max-sm:w-[150%]
    ">
      {/* Desktop only: SVG text */}
      <div className="absolute inset-0 hidden items-center justify-center sm:flex">
        <svg ref={svgTextRef} viewBox="0 0 200 110" className="w-[55%] overflow-visible">
          <text className="draw-text" x="6%" y="18"
            fontFamily="'DM Mono', monospace" fontSize="14" letterSpacing="3"
            fill="rgb(255 255 255 / 0.35)" fillOpacity="0"
            stroke="rgb(255 255 255 / 0.35)" strokeWidth="0.6">
            MY
          </text>

          <text className="draw-text" x="50%" y="57"
            textAnchor="middle" dominantBaseline="middle"
            fontFamily="sans-serif" fontSize="68" fontWeight="700"
            fill="rgb(255 255 255 / 0.8)" fillOpacity="0"
            stroke="rgb(255 255 255 / 0.8)" strokeWidth="0.5">
            Tools
          </text>

          <text className="draw-text" x="50%" y="96"
            textAnchor="middle" fontFamily="'DM Mono', monospace"
            fontSize="9" letterSpacing="4"
            fill="rgb(255 255 255 / 0.25)" fillOpacity="0"
            stroke="rgb(255 255 255 / 0.25)" strokeWidth="0.5">
            STACK &amp; WORKFLOW
          </text>
        </svg>
      </div>

      {/* Decorative: circle + cross */}
      <div className="absolute inset-0 rounded-full border border-white/10 scale-110" />
      <div className="absolute top-1/2 left-1/2 h-[140%] w-px -translate-y-1/2 bg-white/10 max-sm:h-[170%]" />
      <div className="absolute top-1/2 left-1/2 h-px w-screen -translate-x-1/2 bg-white/10" />
    </div>
  );
}
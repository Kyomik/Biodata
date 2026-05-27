"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { GlobeTooltipProps } from "./globe.types";

export const GlobeTooltip = ({ tooltipRef }: GlobeTooltipProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      ref={tooltipRef}
      className="pointer-events-none z-[9999] rounded-lg border border-white/25 px-3 py-2 min-w-[140px] opacity-0 transition-opacity duration-fast"
      style={{ position: "fixed", background: "rgba(3,3,3,0.95)" }}
    >
      <div className="tt-name text-white text-sm font-bold mb-0.5" />
      <div className="tt-level text-white/50 text-xs mb-1.5" />
      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
        <div className="tt-bar h-full rounded-full w-0" />
      </div>
    </div>,
    document.body
  );
};
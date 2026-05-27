"use client"

import { BlurBottom } from "./BlurBottom";
import { ShowMoreProps } from "./ui.types";
import { cn } from "@/lib/utils";

export const ShowMore = ({ count, onShow, className }: ShowMoreProps) => {
  return (
    <div className={cn("relative", className)}>
      <BlurBottom />
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center z-20">
        <button
          onClick={onShow}
          className="bg-transparent border-none cursor-pointer flex flex-col items-center gap-1.5 group"
        >
          <span className="font-syne text-[1rem] font-bold tracking-[0.18em] uppercase text-white/55 group-hover:text-white transition-colors duration-slow ease-snap">
            Show More
          </span>
          <span className="font-dm-mono text-[0.55rem] tracking-[0.1em] uppercase text-accent/35 group-hover:text-accent/70 transition-colors duration-slow ease-snap">
            {count} lainnya
          </span>
          <svg
            className="text-white/25 group-hover:text-accent group-hover:translate-y-0.5 transition-all duration-slow ease-snap mt-0.5"
            width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
      </div>
    </div>
  );
};
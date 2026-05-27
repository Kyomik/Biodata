"use client"

import { cn } from "@/lib/utils";

interface ShowLessProps {
  onHide: () => void;
  className?: string;
}

export const ShowLess = ({ onHide, className }: ShowLessProps) => {
  return (
    <div className={cn("flex justify-center mt-6", className)}>
      <button
        onClick={onHide}
        className="bg-transparent border-none cursor-pointer flex flex-col items-center gap-1.5 group"
      >
        <svg
          className="text-white/25 group-hover:text-accent group-hover:-translate-y-0.5 transition-all duration-slow ease-snap"
          width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        >
          <path d="M18 15l-6-6-6 6"/>
        </svg>
        <span className="font-syne text-[1rem] font-bold tracking-[0.18em] uppercase text-white/30 group-hover:text-white/70 transition-colors duration-slow ease-snap">
          Show Less
        </span>
      </button>
    </div>
  );
};

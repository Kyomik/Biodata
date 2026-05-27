'use client';

export function HireMeLink() {
  return (
    <a href="#contact" className="absolute bottom-5 left-5 z-50 group flex items-center gap-2">
      <div className="w-px h-8 sm:w-8 sm:h-px bg-white/15 group-hover:bg-three/50 transition-colors duration-300" />
      
      <span className="sm:hidden text-[10px] tracking-[0.25em] uppercase text-white/25 group-hover:text-white/50 transition-colors duration-300 [writing-mode:vertical-lr]">
        hire me ↑
      </span>

      <span className="hidden sm:inline text-[10px] tracking-[0.25em] uppercase text-white/25 group-hover:text-white/50 transition-colors duration-300">
        hire me ↗
      </span>
    </a>
  );
}

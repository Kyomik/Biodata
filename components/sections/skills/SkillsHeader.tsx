'use client';

export function SkillsHeader() {
  return (
    <div className="
      absolute top-24 left-10 z-10 pointer-events-none
      max-sm:top-18 max-sm:left-5
    ">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-6 h-px bg-white/30" />
        <span className="text-[10px] tracking-[0.2em] text-white/30 uppercase">Portfolio</span>
      </div>
      <h2 className="font-syne text-4xl sm:text-5xl font-extrabold leading-none tracking-tighter text-white/90">
        Skills &
        <span className="block text-three/80">Expertise</span>
      </h2>
      <p className="mt-3 text-xs text-white/25 font-light italic leading-relaxed max-sm:max-w-[200px]">
        Technologies I use to build<br />conditional, scalable and reusable products.
      </p>
    </div>
  );
}

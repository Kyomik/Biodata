'use client';

export function ContributionHeader() {
  return (
    <div className="!px-3 !py-1 !pb-4 flex items-end justify-between mb-8 gap-6 flex-wrap">
      <div>
        <span className="font-dm-mono text-[0.8rem] tracking-[0.15em] uppercase text-accent/50 block ">
          SaaS Board
        </span>
        <h2 className="font-syne text-[clamp(1.4rem,3vw,3rem)] font-extrabold text-white leading-none tracking-tight">
          CONTRIBUTION
        </h2>
      </div>
      <p className="font-syne text-[0.85rem] leading-relaxed text-gray/35 max-w-[320px] text-right max-md:text-left max-md:max-w-full">
        Akses layanan SaaS dengan bantuan dana dari orang lain yang membutuhkannya juga.
      </p>
    </div>
  );
}

"use client";

import { useMemo } from "react";
import { logos } from "@/components/cardlogos/data";
import ScrollReveal from "../ui/ScrollReveal";

function LogoBox({ logo }: { logo: string }) {
  return (
    <div className="w-full aspect-square rounded-lg bg-secondary/70 border border-white/10 flex items-center justify-center p-1">
      <img src={`/logo/${logo}`} alt="" loading="lazy" decoding="async" className="w-full h-full object-contain" />
    </div>
  );
}

function buildLayout(logos: string[], maxRows: number) {
  let idx = 0;
  const cols = maxRows * 2;
  const totalRows = Math.max(maxRows, Math.ceil(logos.length / cols));
  const grid = Array.from({ length: totalRows }, () => Array(cols).fill(null));

  for (let row = 0; row < maxRows; row++) {
    const amount = row + 1;
    for (let col = 0; col < amount && idx < logos.length; col++) grid[row][col] = logos[idx++];
    for (let col = cols - amount; col < cols && idx < logos.length; col++) grid[row][col] = logos[idx++];
  }

  for (let row = totalRows - 1; row >= 0 && idx < logos.length; row--)
    for (let col = 0; col < cols && idx < logos.length; col++)
      if (grid[row][col] === null) grid[row][col] = logos[idx++];

  return { grid, totalCols: cols };
}

export default function CardLogos({ maxRows = 15 }: { maxRows?: number }) {
  const { grid: rows, totalCols } = useMemo(() => buildLayout(logos, maxRows), [maxRows]);

  return (
    <div className="relative flex flex-col gap-1 sm:gap-2 w-full">

      {/* Mobile label: top-right */}
      <ScrollReveal
        direction="left"
        duration={300}
        className="sm:hidden"
        rootMargin="0px 0px -55% 0px"
      >
        <div className="sm:hidden flex flex-col pl-1 items-start gap-0.5 z-10 mb-2">
          <span
            className="
              text-[20px]
              font-syne
              font-bold
              leading-none
              scale-y-120
              tracking-[-0.02em]
              text-white/70
            "
          >
            My Tools
          </span>
          <span
            className="
              font-dm-mono text-[8px]
              tracking-[0.3em]
              uppercase
              text-white/25
            "
          >
            Stack &amp; Workflow
          </span>
        </div>
      </ScrollReveal>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="grid gap-1 sm:gap-2 justify-center w-full"
          style={{ gridTemplateColumns: `repeat(${totalCols}, minmax(0, 1fr))` }}
        >
          {row.map((logo, colIndex) =>
            logo ? (
              <LogoBox key={`${rowIndex}-${colIndex}`} logo={logo} />
            ) : (
              <span key={`${rowIndex}-${colIndex}`} className="w-full aspect-square opacity-0" />
            )
          )}
        </div>
      ))}
    </div >
  );
}
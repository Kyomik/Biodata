'use client';

import { NoiseReveal } from './NoiseReveal';
import { ImageProps } from './hero.types';

export const ImageWithCarmine = ({ src, width = 330, height = 330, alt = '', active = false }: ImageProps & { active?: boolean }) => {
  const cssVars = {
    '--w': `${width}px`,
    '--h': `${height}px`,
  } as React.CSSProperties;

  return (
    <div className="flex-shrink-0 relative" style={{ width, height }}>
      <div
        className={`
          h-full w-full relative border-[10px] border-white/90 box-border
          transition-transform duration-slow hover:translate-x-1 hover:-translate-y-1
          before:absolute before:left-[-33px] before:top-[15px]
          before:w-[var(--w)] before:h-[var(--h)]
          before:border-[10px] before:border-three before:opacity-85 before:z-[-1] before:content-['']
        `}
        style={cssVars}
        role="img"
        aria-label={alt}
      >
        {/* 
            Noise reveal canvas handles everything now:
            1. Animate with noise effect
            2. Handle 'cover' centering logic
            3. Stay visible after completion (no more disappearing act)
        */}
        <NoiseReveal
          src={src}
          width={width - 20}   // kompensasi border 10px kiri + kanan
          height={height - 20} // kompensasi border 10px atas + bawah
          cellSize={14}
          active={active}
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
};

'use client';
import { forwardRef } from 'react';
import { LabelSectionProps } from './ui.types';

const LabelSection = forwardRef<HTMLDivElement, LabelSectionProps>(
  ({ label, position = 'right', className = '' }, ref) => {
    const skewContainer = position === 'right' ? 'skew-x-[20deg]' : 'skew-x-[-20deg]';
    const skewText = position === 'right' ? 'skew-x-[-20deg]' : 'skew-x-[20deg]';
    const positionClass = position === 'right'
      ? 'right-[14px] max-[800px]:right-0'
      : 'left-[14px] max-[800px]:left-0';
    
    return (
      <div
        ref={ref}
        className={`
          data-[scrolled=true]:opacity-100 data-[scrolled=true]:text-[24px] data-[scrolled=true]:px-6
          bg-main label-section-wrap absolute top-[23%] z-1
          flex min-h-10 w-auto px-4 items-center justify-center min-w-[180px]
          ${skewContainer} bg-main text-white 
          opacity-0 transition-all duration-slow 
          max-[800px]:top-[1.5%] max-[650px]:data-[scrolled=true]:text-[18px]
          ${positionClass}
          ${className}
        `}
      >
        <div className={`border-0 tracking-[3px] self-center font-bold ${skewText}`}>
          {label}
        </div>
      </div>
    );
  }
);

LabelSection.displayName = 'LabelSection';
export default LabelSection;
'use client';

import { useRef } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SectionWrapProps } from './ui.types';
import LabelSection from './LabelSection';

export default function SectionWrap({
  label,
  position = 'right',
  sectionRef,
  children,
}: SectionWrapProps) {
  const labelRef = useRef<HTMLDivElement>(null);

  useScrollReveal([labelRef, sectionRef], {
    rootMargin: '0px 0px -40% 0px',
  });

  const dumpSideClass = position === 'right' ? 'order-last' : 'order-first';

  return (
    <div className="
      relative flex overflow-hidden pb-5 
    ">
      <LabelSection ref={labelRef} label={label} position={position} />
      {children}
      <div className={`flex-1 bg-main max-[800px]:flex-[1%] ${dumpSideClass}`} />
    </div>
  );
}
'use client';

import { useRef } from 'react';
import Section from '../ui/Section';
import { experienceData } from '../eventcard/data';
import LabelSection from '../ui/LabelSection';
import { GridExperience } from '../grids/GridExperience';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function SectionExperience() {
  const labelRef = useRef<HTMLDivElement>(null);

  useScrollReveal([labelRef], {
    threshold: 0.2,
    rootMargin: '0px 0px -80px 0px',
  });

  return (
    <Section id="experience" 
      full
      className="
          secondary-bg-color relative ml-auto !w-11/12 box-border border-1 border-accent/20 
          max-[800px]:!ml-[15px] max-[800px]:!w-full mb-10
    ">

      <LabelSection 
          ref={labelRef} 
          label="EXPERIENCE" 
          position="left" 
          className="
              !top-[2%] !left-[-80px]
              max-[800px]:!left-[-20px]
      "/>

      <GridExperience experienceData={experienceData} />
    </Section>
  );
}
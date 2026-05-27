'use client';

import SectionSkills from '@/components/sections/SectionSkills';
import SectionContribution from '@/components/sections/SectionContribution';
import SectionWrap from '@/components/ui/SectionWrap';
import SectionHero from '@/components/sections/SectionHero';
import SectionExperience from '@/components/sections/SectionExperience';
import { useRef } from 'react';
import SectionAdditional from '@/components/sections/SectionAdditional';
import SectionLookAtMe from '../components/sections/SectionLookAtMe';
import SectionTools from '@/components/sections/SectionTools';
import SectionDecoration from '@/components/sections/SectionDecoration';
import SectionDetail from '@/components/sections/SectionDetail';
import SectionContact from '@/components/sections/SectionContact';

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <>
      <SectionSkills />
      <SectionAdditional />
      <SectionLookAtMe />
      <SectionDecoration />
      <SectionTools />
      <SectionWrap
        label="ABOUT ME"
        position="right"
        sectionRef={heroRef}
      >
        <SectionHero ref={heroRef} />
      </SectionWrap>
      <SectionDetail />
      <SectionExperience />
      
      <SectionContribution />
      <SectionContact />
    </>
  );
}
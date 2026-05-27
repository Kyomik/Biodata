"use client";

import { useRef } from "react";
import Section from "../ui/Section";
import { CarouselSkill } from "../carousel/CarouselSkill";
import { WrapperGlobe } from "../globe/WrapperGlobe";
import { useContainerWidth } from "@/hooks/useContainerWidth";
import { SkillsHeader } from "./skills/SkillsHeader";
import { HireMeLink } from "./skills/HireMeLink";
import { SkillsMetrics } from "./skills/SkillsMetrics";
import { SkillsDecoration } from "./skills/SkillsDecoration";

const BUTTON_WIDTH = 56 * 2;

export default function SectionSkills() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasWidth = useContainerWidth(sectionRef, {
    subtract: BUTTON_WIDTH,
    min: 280,
    max: 520,
  });

  return (
    <Section
      ref={sectionRef}
      id="skills"
      className="relative bg-main overflow-visible h-screen"
      full
    >
      <SkillsDecoration />
      <SkillsHeader />
      <HireMeLink />
      <SkillsMetrics />

      <CarouselSkill>
        <WrapperGlobe canvasWidth={canvasWidth} />
      </CarouselSkill>
    </Section>
  );
}

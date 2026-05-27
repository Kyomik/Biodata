"use client";

import Section from "../ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { DetailHeader } from "./detail/DetailHeader";
import { DetailTimeline } from "./detail/DetailTimeline";
import { DetailBento } from "./detail/DetailBento";
import { DetailDecoration } from "./detail/DetailDecoration";

export default function SectionDetail() {
  return (
    <Section
      id="detail"
      full
      className="relative flex flex-col px-10 pb-16 max-sm:px-5 overflow-hidden"
    >
      <DetailDecoration />
      
      <ScrollReveal direction="bottom" duration={600} delay={0}>
        <DetailHeader />
      </ScrollReveal>
      
      <ScrollReveal direction="bottom" duration={700} delay={150}>
        <DetailTimeline />
      </ScrollReveal>
      
      <ScrollReveal direction="bottom" duration={800} delay={300}>
        <DetailBento />
      </ScrollReveal>
    </Section>
  );
}

"use client";

import Section from "../ui/Section";
import { useEffect, useRef, useState } from "react";
import { DetailHeader } from "./detail/DetailHeader";
import { DetailTimeline } from "./detail/DetailTimeline";
import { DetailBento } from "./detail/DetailBento";
import { DetailDecoration } from "./detail/DetailDecoration";

export default function SectionDetail() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const fadeStart = windowHeight - 350;
      const fadeEnd = fadeStart - 75;

      const current = rect.bottom;

      let rawProgress = (fadeStart - current) / (fadeStart - fadeEnd);
      rawProgress = Math.max(0, Math.min(1, rawProgress));

      setProgress(rawProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section
      ref={sectionRef}
      id="detail"
      full
      className="relative flex flex-col px-10 pb-16 max-sm:px-5 overflow-hidden"
      style={{
        opacity: 1 - progress,
        transition: "opacity 0.08s linear",
      }}
    >
      <DetailDecoration />
      <DetailHeader />
      <DetailTimeline />
      <DetailBento />
    </Section>
  );
}

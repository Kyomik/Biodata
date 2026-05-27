"use client";

import { useRef, useEffect, useState } from "react";

import Section from "../ui/Section";
import CardLogos from "@/components/cards/CardLogos";
import PlusCircle from "@/components/ui/PlusCircle";

export default function SectionTools() {
  const triggerRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");

    const update = () => {
      setIsMobile(media.matches);
    };

    update();

    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  return (
    <Section
      id="tools"
      className="
        relative px-5 pb-7 mt-10
        overflow-y-visible overflow-x-clip
        max-sm:px-1
      "
      full
    >
      <div ref={triggerRef}>
        <CardLogos maxRows={isMobile ? 4 : 7} />

        <PlusCircle triggerRef={triggerRef} />
      </div>
    </Section>
  );
}
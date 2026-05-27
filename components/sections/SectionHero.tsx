// SectionHero.tsx
"use client";

import { forwardRef, useRef, useEffect, useState } from "react";
import Section from "../ui/Section";
import { CardHero } from "../cards/CardHero";

const DESCRIPTION =
  "Lulusan Sarjana Sistem Informasi yang memiliki minat besar dalam pengembangan teknologi, khususnya backend development dan networking. Memiliki pengalaman dalam pengembangan sistem informasi serta proyek Internet of Things (IoT), dengan pemahaman konsep dasar di bidang teknologi tertentu seperti networking dan machine learning.";

const SectionHero = forwardRef<HTMLElement>((props, ref) => {
  const descRef = useRef<HTMLParagraphElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const innerRef = useRef<HTMLElement>(null);

  // Sync external ref and internal ref
  useEffect(() => {
    if (typeof ref === 'function') {
      ref(innerRef.current);
    } else if (ref) {
      (ref as any).current = innerRef.current;
    }
  }, [ref]);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    // Observe attribute changes to detect data-scrolled="true"
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-scrolled') {
          const scrolled = el.getAttribute('data-scrolled') === 'true';
          setIsScrolled(scrolled);
        }
      });
    });

    observer.observe(el, { attributes: true });

    // Initial check
    if (el.getAttribute('data-scrolled') === 'true') {
      setIsScrolled(true);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!descRef.current || !isScrolled) return;
    // ... rest of logic

    let mounted = true;

    async function init() {
      const { animate, scrambleText, onScroll } = await import("animejs");
      if (!mounted || !descRef.current) return;

      animate(descRef.current, {
        innerHTML: scrambleText({
          reversed: false,
          text: DESCRIPTION,
          ease: "outExpo",
        }),
        autoplay: onScroll({
          target: descRef.current,
          repeat: false,
          axis:'y',
          enter:"bottom 130%" 
        }),
      });
    }

    init();
    return () => { mounted = false; };
  }, []);

  return (
    <Section
      id="hero"
      ref={innerRef}
      className="
        relative overflow-hidden secondary-bg-color
        !pt-[40px] !pb-[70px] !px-[150px] w-[88%] opacity-0
        -translate-x-[40px] transition-all duration-slow ease-snap
        data-[scrolled=true]:translate-x-0 data-[scrolled=true]:opacity-100
        max-[800px]:basis-[97%] max-[800px]:!p-[80px_35px_40px_35px]
      "
      full
    >
      <CardHero
        description={DESCRIPTION}
        descRef={descRef}
        active={isScrolled}
      />
    </Section>
  );
});

SectionHero.displayName = "SectionHero";
export default SectionHero;
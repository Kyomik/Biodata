'use client';

import ScrollReveal from "../../ui/ScrollReveal";
import { CardImage } from "../../cards/CardImage";

const steps = [
  {
    number: "01",
    imageUrl: "/images/warung-rokok.webp",
    label: "Go to buy some a cigarets",
  },
  {
    number: "02",
    imageUrl: "/images/rumah-animasi.jpg",
    label: "Come to my House",
  },
  {
    number: "03",
    imageUrl: "/images/rame-rame-merokok.png",
    label: "Lets fafafafa",
  },
];

export function DetailTimeline() {
  return (
    <div className="relative mt-14 mb-10 max-sm:mt-10">
      {/* Desktop View */}
      <div className="hidden sm:block max-w-5xl mx-auto">
        <div className="grid grid-cols-3 gap-6 mb-4">
          {steps.map((step, i) => (
            <ScrollReveal
              key={`badge-${i}`}
              direction="bottom"
              delay={i * 80}
              rootMargin="0px 0px -15% 0px"
              className="flex justify-center"
            >
              <div
                className="
                  w-8 h-8 rounded-full flex items-center justify-center
                  bg-main border border-three/40
                  font-dm-mono text-[10px] text-three/80 tracking-wider
                  hover:border-three/80 hover:shadow-[0_0_12px_rgba(220,20,60,0.2)]
                  transition-all duration-300
                "
              >
                {step.number}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="relative grid grid-cols-3 gap-6">
          <div className="pointer-events-none absolute top-1/2 left-[5%] right-[5%] z-0 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-three/25 to-transparent" />

          {steps.map((step, i) => (
            <ScrollReveal
              key={`img-${i}`}
              direction={i % 2 === 0 ? "bottom" : "top"}
              delay={i * 120}
              rootMargin="0px 0px -15% 0px"
              className="relative z-[1] flex justify-center"
            >
              <div
                className="
                  w-full max-w-[280px] rounded-xl overflow-hidden
                  border border-white/[0.04] bg-white/[0.02]
                  transition-all duration-500
                  hover:border-white/[0.08]
                "
              >
                <CardImage
                  imageUrl={step.imageUrl}
                  label={step.label}
                  showLabel={false}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal
              key={`label-${i}`}
              direction="bottom"
              delay={i * 80 + 60}
              rootMargin="0px 0px -15% 0px"
              className="flex justify-center px-2"
            >
              <p className="max-w-[280px] text-center font-dm-mono text-[10px] uppercase tracking-[0.22em] text-white/75">
                {step.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="hidden max-sm:block absolute left-6 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-three/25 to-transparent" />

      <div className="flex flex-col gap-8 pl-14 sm:hidden">
        {steps.map((step, i) => (
          <ScrollReveal
            key={`mobile-${i}`}
            direction={i % 2 === 0 ? "bottom" : "top"}
            delay={i * 120}
            rootMargin="0px 0px -15% 0px"
            className="relative"
          >
            <div className="absolute -left-[38px] top-[calc(50%-16px)] z-10">
              <div
                className="
                  flex h-8 w-8 items-center justify-center rounded-full
                  border border-three/40 bg-main
                  font-dm-mono text-[10px] tracking-wider text-three/80
                "
              >
                {step.number}
              </div>
            </div>

            <div
              className="
                max-w-[280px] overflow-hidden rounded-xl
                border border-white/[0.04] bg-white/[0.02]
              "
            >
              <CardImage
                imageUrl={step.imageUrl}
                label={step.label}
                positionLabel="bottom"
              />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

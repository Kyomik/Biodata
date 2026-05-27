"use client";

import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useCarousel } from "@/components/carousel/hooks/useCarousel";
import { DotsSkill } from "./DotsSkill";
import { BlurBottom } from "../ui/BlurBottom";

export const CarouselSkill = ({ children }: { children: React.ReactNode }) => {
  const { setApi, current, count, handleDotClick } = useCarousel();

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
          skipSnaps: false,
          dragFree: false,
        }}
        className="w-full h-full flex items-end overflow-visible"
      >
        <CarouselContent className="ml-0 relative">
          {children}
        </CarouselContent>

        <CarouselPrevious className="hidden sm:flex w-9 h-9 text-gray/60 absolute top-1/2 left-6 z-10 rounded-full bg-secondary/80 border-gray/20 hover:shadow-[0_0_4px] hover:shadow-gray disabled:opacity-50" />
        <CarouselNext className="hidden sm:flex w-9 h-9 text-gray/60 absolute top-1/2 right-6 z-10 rounded-full bg-secondary/80 border-gray/20 hover:shadow-[0_0_4px] hover:shadow-gray disabled:opacity-50" />

        <BlurBottom className="opacity-95" />
      </Carousel>

      <DotsSkill
        count={count}
        current={current}
        onDotClick={handleDotClick}
      />
    </>
  );
};
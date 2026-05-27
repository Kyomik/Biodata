"use client";

import GlobeSkills from "./GlobeSkills";
import { globeData } from "./data";
import { CarouselItem } from "@/components/ui/carousel";
import { WrapperGlobeProps } from "./globe.types";
import { useWindowSize } from "@/hooks/useWindowSize";

export const WrapperGlobe = ({ canvasWidth }: WrapperGlobeProps) => {
  const { width } = useWindowSize();
  
  const isMobile = width < 640;

  return (
    <>
      {globeData.map((item) => (
        <CarouselItem
          key={item.key}
          className="pl-0 flex items-end justify-center"
        >
          <GlobeSkills
            canvasWidth={canvasWidth}
            skills={item.skills}
            photoWidth={isMobile ? 340 : 380}
            photoHeight={isMobile ? 420 : 450}
            photoBottomOffset={isMobile ? -10 : -20}
          />
        </CarouselItem>
      ))}
    </>
  );
};

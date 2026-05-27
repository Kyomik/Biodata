import { CarouselApi } from "../ui/carousel";
import { ReactNode } from "react";

export interface CarouselSkillProps {
  setApi: (api: CarouselApi) => void;
  children: ReactNode;
}

export interface DotsSkillProps {
  count: number;
  current: number;
  onDotClick: (index: number) => void;
  className?: string;
}
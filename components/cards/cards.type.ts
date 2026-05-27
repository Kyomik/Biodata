import { RefObject } from "react";
import { IdeaStatus } from "@/app/commons/commons.enums";

export interface CardIdeaProps {
  id: number;
  title: string;
  category: string;
  summary: string;
  teaser?: string;
  supportLink?: string;
  locked: boolean;
  status?: IdeaStatus;
  fundCollected?: number;
  fundTarget?: number;
};

export interface CardMetricsProps {
    value: number
    label: string
    suffix?: string
    iconKey: string
}

export interface CardHeroProps {
  description: string;
  descRef?: RefObject<HTMLParagraphElement | null>;
  social?: {
    github: string;
    instagram: string;
  };
}

export interface EventCardProps {
  date: string;
  description: string;
  side: 'left' | 'right';
  stack?: string[];
}

export interface CardImageSlicedProps {
  imageUrl: string
  description: string
  className? : string
}
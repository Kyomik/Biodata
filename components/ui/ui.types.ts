import React, { RefObject } from "react";
import { PlatformEnum } from "@/app/commons/commons.enums";
import { BadgeType } from "@/app/commons/commons.enums";

export interface SocialButtonProps {
  href: string;
  platform: PlatformEnum;
  label?: string;
  className?: string;
}

export interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  full?: boolean;
  style?: React.CSSProperties
}

export interface BlurBottomProps {
  className?: string;
  color?: string;
}

export interface BadgeCustomProps {
  type: BadgeType;
  children: React.ReactNode;
  className?: string;
}

export interface FieldCustomProps {
  label: string;
  children: React.ReactNode
}

export interface SectionWrapProps {
  label: string;
  position?: 'left' | 'right';
  sectionRef: RefObject<HTMLElement | null>;
  children: React.ReactNode;
}

export interface LabelSectionProps {
  label: string;
  position?: 'left' | 'right';
  className?: string;
}

export interface ShowMoreProps {
  count: number;
  onShow: () => void;
  className?: string;
}
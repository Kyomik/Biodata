"use client";

import { useRef, ElementType } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Direction = "left" | "right" | "top" | "bottom" | "scale";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  duration?: number;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  unhideMargin?: string;
  className?: string;
  as?: ElementType;
}

const directionMap: Record<Direction, string> = {
  left: "translate-x-[-150px]",
  right: "translate-x-[150px]",
  top: "translate-y-[-60px]",
  bottom: "translate-y-[60px]",
  scale: "scale-95",
};

export default function ScrollReveal({
  children,
  direction = "bottom",
  duration = 500,
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px 0px 0px 0px",
  unhideMargin,
  className = "",
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useScrollReveal([ref], { threshold, rootMargin, unhideMargin });

  return (
    <Tag
      ref={ref as any}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`
        opacity-0 ${directionMap[direction]}
        transition-all ease-snap will-change-transform
        data-[scrolled=true]:opacity-100
        data-[scrolled=true]:translate-x-0
        data-[scrolled=true]:translate-y-0
        data-[scrolled=true]:scale-100
        ${className}
      `}
    >
      {children}
    </Tag>
  );
}
"use client"

import { cn } from "@/lib/utils";
import { BlurBottomProps } from "./ui.types";

export const BlurBottom = ({ className, color = '11,11,32' }: BlurBottomProps) => {
  return (
    <div
      className={cn(
        "absolute bottom-0 left-0 right-0 pointer-events-none z-10 h-[250px]",
        className
      )}
      style={{
        background: `linear-gradient(
          to bottom,
          transparent 0%,
          rgba(${color},0.3) 20%,
          rgba(${color},0.7) 45%,
          rgba(${color},0.95) 65%,
          rgb(${color}) 80%
        )`,
      }}
    />
  );
};
"use client";

import { CSSProperties, useEffect, useId, useRef, useState } from "react";
import { ImageSlicedProps } from "./sliced.types";

const ASPECT = 230 / 190;
const MAX_WIDTH = 320;

export default function ImageSliced({
  src,
  alt = "",
  width: widthProp,
  height: heightProp,
  cut,
}: ImageSlicedProps) {
  const uid = useId().replace(/:/g, "");
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(widthProp ?? 190);
  const clipTopId = `clip-top-${uid}`;
  const clipBotId = `clip-bot-${uid}`;

  useEffect(() => {
    if (widthProp != null) {
      setWidth(widthProp);
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const next = Math.min(el.clientWidth, MAX_WIDTH);
      if (next > 0) setWidth(next);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [widthProp]);

  const w = widthProp ?? width;
  const h = heightProp ?? Math.round(w * ASPECT);
  const halfW = w * 0.5;
  const halfH = h * 0.55;
  const c = cut ?? w * 0.12;
  const g = 4;
  const r = 15;

  const base: CSSProperties = {
    position: "absolute",
    width: `${w}px`,
    height: `${h}px`,
    top: 0,
    left: 0,
    objectFit: "cover",
  };

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-[320px]"
      style={{ width: "100%", height: `${h}px` }}
    >
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id={clipTopId} clipPathUnits="userSpaceOnUse">
            <path
              d={`
            M ${r} 0
            Q 0 0 0 ${r}
            L 0 ${halfH + c - g}
            L ${halfW - c} ${halfH + c - g}
            L ${halfW + c} ${halfH - c - g}
            L ${halfW + c} 0
            Z
          `}
            />
          </clipPath>
          <clipPath id={clipBotId} clipPathUnits="userSpaceOnUse">
            <path
              d={`
            M ${halfW - c} ${halfH + c + g}
            L ${halfW + c} ${halfH - c + g}
            L ${w} ${halfH - c + g}
            L ${w} ${h - r}
            Q ${w} ${h} ${w - r} ${h}
            L ${halfW - c} ${h}
            Z
          `}
            />
          </clipPath>
        </defs>
      </svg>

      <img
        src={src}
        alt={alt}
        className="absolute object-cover"
        style={{ ...base, clipPath: `url(#${clipTopId})` }}
      />
      <img
        src={src}
        alt={alt}
        className="absolute object-cover"
        style={{ ...base, clipPath: `url(#${clipBotId})` }}
      />
    </div>
  );
}

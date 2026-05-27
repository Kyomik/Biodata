"use client";

import { DotsSkillProps } from "./carousel.types";

export const DotsSkill = ({
  count,
  current,
  onDotClick,
  className = "",
}: DotsSkillProps) => {
  if (count === 0) return null;

  const dotSize = 38;
  const overlap = 4;
  const mobileDot = 25;
  const mobileOverlap = 6;

  const actualWidth = count * dotSize - (count - 1) * overlap;
  const svgWidth = actualWidth - 14;
  const triangleHeight = actualWidth / 3;

  const mobileWidth = count * mobileDot - (count - 1) * mobileOverlap;
  const mobileSvgWidth = mobileWidth - 8;
  const mobileTriangleHeight = mobileWidth / 3;

  return (
    <div
      className={`
        absolute
        bottom-[-15px]
        sm:bottom-[-30px]
        left-0
        right-0
        flex
        flex-col
        items-center
        gap-0
        z-100
        ${className}
      `}
    >
      {/* ===== BARIS SEGITIGA ===== */}
      <div className="flex items-center">
        {Array.from({ length: count }).map((_, idx) => {
          const pointUp = idx % 2 === 0;
          const isActive = current === idx;
          const activeClass = isActive ? "text-three/70" : "text-white/25";
          const mobileActiveClass = isActive ? "text-accent/80" : "text-white/25";

          return (
            <button
              key={idx}
              onClick={() => onDotClick(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className="
                relative
                flex
                items-center
                justify-center
                sm:-mx-[5px]
                -mx-[4px]
                transition-all
                duration-300
              "
            >
              {/* DESKTOP */}
              <svg
                width={dotSize}
                height={dotSize}
                viewBox="0 0 38 38"
                className="hidden sm:block transition-all duration-500"
              >
                <polygon
                  points={pointUp ? "19,3 35,33 3,33" : "19,35 3,5 35,5"}
                  fill={isActive ? "currentColor" : "transparent"}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className={activeClass}
                />
              </svg>

              {/* MOBILE */}
              <svg
                width={mobileDot}
                height={mobileDot}
                viewBox="0 0 28 28"
                className="sm:hidden"
              >
                <polygon
                  points={pointUp ? "14,3 26,24 2,24" : "14,25 2,4 26,4"}
                  fill={isActive ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="2"
                  className={mobileActiveClass}
                />
              </svg>
            </button>
          );
        })}
      </div>

      {/* ===== SEGITIGA BESAR BAWAH DESKTOP ===== */}
      <svg
        width={svgWidth}
        height={triangleHeight}
        viewBox={`0 0 ${svgWidth} ${triangleHeight}`}
        className="hidden sm:block text-three/70"
      >
        <polygon
          points={`${svgWidth / 2},${triangleHeight} 0,0 ${svgWidth},0`}
          fill="currentColor"
        />
      </svg>

      {/* ===== SEGITIGA BESAR BAWAH MOBILE ===== */}
      <svg
        width={mobileSvgWidth}
        height={mobileTriangleHeight}
        viewBox={`0 0 ${mobileSvgWidth} ${mobileTriangleHeight}`}
        className="sm:hidden text-white/15"
      >
        <polygon
          points={`${mobileSvgWidth / 2},${mobileTriangleHeight} 0,0 ${mobileSvgWidth},0`}
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

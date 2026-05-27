import { SlidingBackgroundProps } from "../navbar.types";

export const SlidingBackground = ({ bgX }: SlidingBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className="absolute top-0 flex w-full h-full opacity-50 transition-transform duration-slow ease-snap"
        style={{ transform: `translateX(${bgX})` }}
      >
        <div className="w-0 h-0 border-solid border-t-[100px] border-r-[100px] border-t-transparent border-r-black/30" />
        <div className="flex-1 bg-black/30" />
      </div>
    </div>
  );
};
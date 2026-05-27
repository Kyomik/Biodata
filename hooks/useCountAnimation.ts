import { useState, useRef, useEffect } from "react";
import { UseCountAnimationOptions } from "./hooks.types";

export const useCountAnimation = ({
  targetValue,
  threshold = 0.3,
  duration = 1500,
}: UseCountAnimationOptions) => {
    
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start: number | null = null;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * targetValue));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [targetValue, hasAnimated, duration, threshold]);

  return { count, ref };
};
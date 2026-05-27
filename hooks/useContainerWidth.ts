// hooks/useContainerWidth.ts
import { useEffect, useState, useRef } from 'react';

export function useContainerWidth(
  ref: React.RefObject<HTMLElement | null>,
  options: { subtract?: number; min?: number; max?: number } = {}
) {
  const [width, setWidth] = useState(520);
  const { subtract = 0, min = 280, max = 520 } = options;

  // Pakai ref untuk options agar tidak trigger useEffect ulang
  const optsRef = useRef({ subtract, min, max });
  useEffect(() => {
    optsRef.current = { subtract, min, max };
  }, [subtract, min, max]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Baca sekali di awal
    const compute = (w: number) => {
      const { subtract, min, max } = optsRef.current;
      return Math.min(max, Math.max(min, w - subtract));
    };

    setWidth(compute(el.getBoundingClientRect().width));

    // Observe hanya perubahan width yang signifikan (>1px) biar tidak loop
    let lastWidth = el.getBoundingClientRect().width;
    const observer = new ResizeObserver(([entry]) => {
      const newRaw = entry.contentRect.width;
      if (Math.abs(newRaw - lastWidth) < 2) return; // debounce kecil
      lastWidth = newRaw;
      setWidth(compute(newRaw));
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]); // hanya ref sebagai dependency

  return width;
}

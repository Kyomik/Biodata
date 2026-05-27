'use client';

import { useEffect, useRef, RefObject } from 'react';
import { UseScrollRevealOptions } from './hooks.types';

/**
 * Hysteresis-based scroll reveal hook.
 * 
 * Uses two IntersectionObservers per element:
 * 1. "Reveal" observer — triggers when element enters viewport (with rootMargin)
 * 2. "Unhide" observer — triggers un-reveal only when element goes FAR outside viewport
 * 
 * The gap between reveal and unhide margins creates a buffer zone (hysteresis)
 * that prevents the bouncing effect when scrolling near boundaries.
 * 
 * Example with defaults:
 *   rootMargin = "0px 0px -50px 0px"   → reveal when 50px inside viewport
 *   unhideMargin = "200px 0px 200px 0px" → un-reveal only when 200px OUTSIDE viewport
 *   
 *   This means there's a ~250px "safe zone" where the element stays revealed
 *   even if scrolling back and forth near the edge.
 */
export function useScrollReveal(
  refs: RefObject<HTMLElement | null>[],
  options: UseScrollRevealOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px 0px 0px',
    unhideMargin = '250px 0px 250px 0px',
  } = options;

  // Track which elements are currently revealed to implement hysteresis
  const revealedMap = useRef<Map<Element, boolean>>(new Map());

  useEffect(() => {
    if (!refs.length) return;

    const revealObservers: IntersectionObserver[] = [];
    const unhideObservers: IntersectionObserver[] = [];

    refs.forEach((ref) => {
      if (!ref.current) return;

      const el = ref.current;

      // Observer 1: REVEAL — uses the user's rootMargin/threshold
      // When element intersects → set scrolled = true
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              target.dataset.scrolled = 'true';
              revealedMap.current.set(target, true);
            }
            // NOTE: We do NOT un-reveal here. That's the unhide observer's job.
          });
        },
        { threshold, rootMargin }
      );

      // Observer 2: UNHIDE — uses a much larger margin
      // This observer's "not intersecting" means the element is FAR outside viewport
      // Only then do we un-reveal
      const unhideObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const target = entry.target as HTMLElement;
            if (!entry.isIntersecting && revealedMap.current.get(target)) {
              // Element is far outside viewport — safe to un-reveal
              delete target.dataset.scrolled;
              revealedMap.current.set(target, false);
            }
          });
        },
        { threshold: 0, rootMargin: unhideMargin }
      );

      revealObserver.observe(el);
      unhideObserver.observe(el);

      revealObservers.push(revealObserver);
      unhideObservers.push(unhideObserver);
    });

    return () => {
      revealObservers.forEach((obs) => obs.disconnect());
      unhideObservers.forEach((obs) => obs.disconnect());
      revealedMap.current.clear();
    };
  }, [threshold, rootMargin, unhideMargin]);
}
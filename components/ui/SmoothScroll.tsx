// "use client";

// import { useEffect } from "react";
// import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  // useEffect(() => {
  //   // ← ini kuncinya: matikan restore scroll bawaan browser
  //   window.history.scrollRestoration = "manual";

  //   const lenis = new Lenis({
  //     lerp: 0.08,
  //     wheelMultiplier: 1,
  //     smoothWheel: true,
  //   });

  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   const rafId = requestAnimationFrame(raf);

  //   return () => {
  //     cancelAnimationFrame(rafId);
  //     lenis.destroy();
  //   };
  // }, []);

  return <>{children}</>;
}
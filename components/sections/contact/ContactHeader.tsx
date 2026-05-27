'use client';

import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function ContactHeader() {
  const labelRef = useRef<HTMLDivElement>(null);

  useScrollReveal([labelRef], {
    threshold: 0.2,
    rootMargin: '0px 0px -80px 0px',
  });

  return (
    <div className="relative !mb-[60px] z-1 group" ref={labelRef}>
      <h2 className="
        font-['Syne',sans-serif] text-[clamp(3rem,9vw,7rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-[rgba(202,202,221,0.9)] !mb-6
        opacity-0 translate-y-10 transition-all duration-1000 ease-snap
        group-data-[scrolled=true]:opacity-100 group-data-[scrolled=true]:translate-y-0
      ">
        Let's<br />
        <span className="text-[#c8f04a]">Work</span><br />
        Together.
      </h2>
      <p className="
        font-['Syne',sans-serif] text-[0.9rem] leading-[1.8] text-[rgba(202,202,221,0.4)] max-w-[380px]
        opacity-0 translate-y-10 transition-all duration-1000 delay-200 ease-snap
        group-data-[scrolled=true]:opacity-100 group-data-[scrolled=true]:translate-y-0
      ">
        Punya project atau ide? Saya terbuka untuk kolaborasi,<br />
        freelance, maupun full-time opportunity.
      </p>
    </div>
  );
}

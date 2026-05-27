'use client';

import ScrollReveal from "@/components/ui/ScrollReveal";

export function AuthorDescription({ className }: { className?: string }) {
  return (
    <ScrollReveal 
      direction="top" 
      rootMargin="-0% 0px -15% 0px" 
      threshold={0.40} 
      className={className}
    >
      <p className="text-xs font-dm-sans text-white/95 tracking-normal scale-y-110 leading-[1.2rem] pt-9 max-sm:pt-0 max-sm:text-end">
        Lsdfffffffffffffffffffffffforem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ex nisi numquam sint reiciendis. Saepe ipsum, ipsam est a pariatur doloribus totam, tempore modi voluptates debitis rerum, nemo vitae aspernatur?
      </p>
    </ScrollReveal>
  );
}

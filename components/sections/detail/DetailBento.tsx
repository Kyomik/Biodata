'use client';

import ScrollReveal from "../../ui/ScrollReveal";
import { CardImageSliced } from "../../cards/CardImageSliced";
import CardGridMap from "../../cards/CardGridMap";
import { Map } from "../../cardgridmap/Map";
import { Street } from "../../cardgridmap/Street";
import { KodePos } from "../../cardgridmap/KodePos";
import { Date } from "../../cardgridmap/Date";

export function DetailBento() {
  return (
    <div className="my-6 grid grid-cols-12 items-center gap-8 max-sm:grid-cols-1 max-sm:items-stretch max-sm:gap-10">
      <ScrollReveal
        direction="left"
        rootMargin="0px 0px -20% 0px"
        delay={0}
        className="col-span-4 flex justify-center max-sm:col-span-1"
      >
        <CardImageSliced
          imageUrl="/images/animenya-mati-karena-rokok-bjir.jpg"
          description="ANIME MEMANG PUNYA CARA SENDIRI MEMBUAT ROKOK TERLIHAT SEPERTI BAGIAN DARI PERKEMBANGAN KARAKTER. BEDANYA, KARAKTER INI MATI KARENA ROKOK, TAPI ILHAM TIDAK !!!"
        />
      </ScrollReveal>

      <ScrollReveal
        rootMargin="0px 0px -20% 0px"
        threshold={0.5}
        direction="scale"
        delay={100}
        className="col-span-4 flex justify-center max-sm:order-first max-sm:col-span-1"
      >
        <div className="relative w-full max-w-[320px]">
          <div className="pointer-events-none absolute inset-0 -m-4 rounded-[2.5rem] bg-three/[0.04] blur-2xl" />

          <CardGridMap title="Sulawesi Selatan" subtitle="HOME">
            <Map coordinate="5.1477° S" />
            <Street where="MIDTOWN STREET" />
            <KodePos what="90123" />
            <Date now="MAY 29" />
          </CardGridMap>
        </div>
      </ScrollReveal>

      <ScrollReveal
        direction="right"
        rootMargin="0px 0px -20% 0px"
        delay={200}
        className="col-span-4 flex justify-center max-sm:hidden"
      >
        <CardImageSliced
          imageUrl="/images/animasi-merokok.png"
          description="ROKOK MEMANG BUKAN SATU-SATUNYA ALASAN, TAPI TANPA ROKOK MUNGKIN ILHAM TIDAK AKAN MENGGAPAI SEMUANYA SATU PERSATU. ANIMENYA MEROKOK DAN ILHAM PUN JUGA !!!"
        />
      </ScrollReveal>
    </div>
  );
}

"use client";

import Section from "../ui/Section";
import { Card, CardHeader, CardContent } from "../ui/card";
import ScrollReveal from "@/components/ui/ScrollReveal";

const words = ["How", "Do", "You", "See", "Me?"];

export default function SectionLookAtMe() {
  return (
    <Section id="lookatme" className="relative p-10 max-sm:pb-6" full>
      <Card className="p-0 ring-0 h-full gap-0 bg-transparent border-none mt-8 w-full">

        <ScrollReveal
          as="div"
          direction="left"
          rootMargin="-50px 0px -70% 0px"
          className="p-0 mb-4 flex flex-row text-accent font-dm-mono uppercase tracking-widest w-full relative
        ">
          {words.map((word, index) => (
            <div key={index} className="flex-1 text-start">
              <h1 className="inline-block text-base will-change-transform max-sm:text-xm">
                {word}
              </h1>
            </div>
          ))}
        </ScrollReveal>

        <CardContent className="
          p-0 text-center my-3 w-[55%] mx-auto 
          max-sm:w-full
          flex items-center justify-center
        ">
          <ScrollReveal
            rootMargin="-170px 0px -60% 0px"
            direction="scale"
          >
            <h2 className="
              flex-2 text-3xl scale-x-100 scale-y-115 leading-12 font-extrabold font-dm-sans -tracking-wider text-white/95 uppercase
              max-sm:text-2xl max-sm:leading-11
            ">
              Consistent, Precise, Curious, Logical, Creative, Focused, Analytical, Persistent
            </h2>
          </ScrollReveal>
        </CardContent>

      </Card>
    </Section>
  );
}
// CardHero.tsx — tambah descRef prop, sisanya tidak berubah
import { RefObject } from "react";
import { CardHeroProps } from "./cards.type";
import { Card, CardContent, CardDescription, CardFooter } from "../ui/card";
import { SocialButton } from "../ui/SocialButton";
import { ImageWithCarmine } from "../cardhero/ImageWithCarmine";
import { DecorCard } from "../cardhero/DecorCard";

export const CardHero = ({
  description,
  descRef,
  active = false,
  social = { github: "#", instagram: "#" },
}: CardHeroProps & {
  descRef?: RefObject<HTMLParagraphElement | null>;
  active?: boolean;
}) => {
  return (
    <Card className="
      relative border-0 shadow-none outline-none flex flex-row w-[95%] gap-5 overflow-visible ring-0
      max-[800px]:flex-col max-[800px]:!p-0 max-[800px]:items-center max-[800px]:w-full max-[800px]:gap-9
    ">
      <DecorCard />
      <ImageWithCarmine
        src="/images/Foto 4x6_Ilham_IT.jpeg"
        width={300}
        height={300}
        alt="hohoho"
        active={active}
      />
      <CardContent className="relative flex flex-col gap-6 overflow-visible z-[1]">
        <CardDescription className="flex items-start gap-4 border-0">
          <div className="
            flex-shrink-0 mt-[6px]
            w-[3px] h-full min-h-[80px] rounded-full
            bg-gradient-to-b from-accent/70 via-accent/20 to-transparent
          " />
          {/* ref dipasang di sini — tidak ada perubahan lain */}
          <p
            ref={descRef}
            className="
              line-clamp-7
              font-mono text-[0.95rem] leading-[1.85]
              text-gray/80
            "
          >
            {description}
          </p>
        </CardDescription>
        <CardFooter className="flex flex-wrap gap-3 items-center mt-auto max-[800px]:gap-3 border-0">
          <div className="w-full h-px bg-gradient-to-r from-gray/70 via-accent/50 to-transparent" />
          <SocialButton href={social.github} platform="github" />
          <SocialButton href={social.instagram} platform="instagram" />
        </CardFooter>
      </CardContent>
    </Card>
  );
};
import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";

interface CardImageProps {
  imageUrl: string;
  label: string;
  positionLabel?: "top" | "bottom";
  showLabel?: boolean;
}

export const CardImage = ({
  imageUrl,
  label,
  positionLabel = "bottom",
  showLabel = true,
}: CardImageProps) => {
  return (
    <Card className="w-full gap-0 border-0 bg-transparent ring-0 shadow-none">
      {showLabel && (
        <CardHeader
          className={`
            p-0 text-center uppercase tracking-[0.22em]
            text-[10px] text-white/75 w-full font-dm-mono
            ${positionLabel === "top" ? "order-1 mb-3" : "order-2 mt-3"}
          `}
        >
          {label}
        </CardHeader>
      )}

      <CardContent
        className={`
          relative w-full aspect-[3/4] overflow-hidden p-0
          ${showLabel && positionLabel === "top" ? "order-2" : "order-1"}
        `}
      >
        <Image src={imageUrl} alt={label} fill className="object-cover" />
      </CardContent>
    </Card>
  );
};
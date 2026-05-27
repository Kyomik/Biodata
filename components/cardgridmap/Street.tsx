import { GridItem } from "./GridItem";

interface StreetProps {
  where: string;
}

export function Street({
  where,
}: StreetProps) {
  return (
    <GridItem label="STREET" className="min-h-[130px]">
      <h3
        className="
          text-2xl
          font-black
        "
      >
        {where}
      </h3>
    </GridItem>
  );
}
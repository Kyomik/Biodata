import { GridItem } from "./GridItem";

interface KodePosProps {
  what: string;
}

export function KodePos({
  what,
}: KodePosProps) {
  return (
    <GridItem label="KODE POS">
      <h3 className="text-2xl font-black">
        {what}
      </h3>
    </GridItem>
  );
}
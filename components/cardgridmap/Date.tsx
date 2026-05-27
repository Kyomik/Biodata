import { GridItem } from "./GridItem";

interface DateProps {
  now: string;
}

export function Date({
  now,
}: DateProps) {
  return (
    <GridItem label="DATE">
      <h3 className="text-2xl font-black">
        {now}
      </h3>
    </GridItem>
  );
}
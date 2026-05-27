import { MapPin } from "lucide-react";
import { GridItem } from "./GridItem";

interface MapProps {
  coordinate: string;
}

export function Map({
  coordinate,
}: MapProps) {
  return (
    <GridItem
      label="MAP"
      className="
        min-h-[130px]
        relative overflow-hidden
      "
    >
      <div
        className="
          absolute inset-0 opacity-50
          bg-cover bg-center
          bg-[radial-gradient(ellipse_at_30%_20%,rgba(220,20,60,0.25)_0%,transparent_55%),radial-gradient(ellipse_at_80%_80%,rgba(200,240,74,0.12)_0%,transparent_50%),linear-gradient(160deg,rgb(30,30,40)_0%,rgb(12,12,24)_100%)]
        "
      />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <h3 className="text-lg font-bold">
          {coordinate}
        </h3>

        <div
          className="
            flex h-10 w-10
            items-center justify-center
            rounded-full
            bg-white text-black
          "
        >
          <MapPin size={18} />
        </div>
      </div>
    </GridItem>
  );
}
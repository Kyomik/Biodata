import { Button } from "../ui/button";
import { ChevronRight, Heart } from "lucide-react";
import { ActionButtonsProps } from "./idea.types";

export function ActionButtons({ onDetail, supportLink }: ActionButtonsProps) {
  return (
    <>
      <Button
            variant="nonerounded"
            size="xs"
            onClick={onDetail}
            className="
                border-accent/25 text-accent
                hover:bg-accent hover:text-main hover:border-accent/20
            ">
            <ChevronRight />
            <span>Lihat Detail</span>
        </Button>

      {supportLink && (
        <Button
            variant="nonerounded"
            size="xs"
            // onClick={onDetail}
            className="
                 border-red-500/30 bg-red-500/[0.06] 
                text-red-400/80 hover:bg-red-500/15 hover:border-red-400/50 hover:text-red-300
            ">
            <Heart />
            <span>Dukung Ide</span>
        </Button>
      )}
    </ >
  );
}
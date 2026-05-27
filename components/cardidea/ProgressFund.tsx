import { formatRupiah } from "@/app/commons/utils/format.utils";
import { ProgressFundProps } from "./idea.types";
import { Field, FieldLabel } from "../ui/field";
import { Progress } from "../ui/progress";

export function ProgressFund({ collected, target }: ProgressFundProps) {
  const progress = Math.min((collected / target) * 100, 100);
  
  return (
    <Field className="w-full max-w-sm">
      <Progress className="bg-white/[0.07]" value={progress} id="progress-upload" />
      <FieldLabel htmlFor="progress-upload" className="font-dm-mono text-[0.6rem] tracking-[0.04em]">
        <span className="text-accent">{formatRupiah(collected)}</span>
        <span className="ml-auto text-gray/50 ">{formatRupiah(target)}%</span>
      </FieldLabel>
    </Field>
  );
}


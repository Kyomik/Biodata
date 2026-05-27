import { Field, FieldLabel, FieldContent } from "./field";
import { FieldCustomProps } from "./ui.types";

export const FieldCustom = ({ label, children }: FieldCustomProps) => (
  <Field>
    <FieldLabel className="font-dm-mono text-[0.62rem] tracking-[0.12em] uppercase text-accent/50">
      {label}
    </FieldLabel>
    <FieldContent>{children}</FieldContent>
  </Field>
);
import * as React from "react"
import { cn } from "@/lib/utils"
import { Input } from "./input"

export interface InputCustomProps extends React.ComponentProps<typeof Input> {
  label?: string;
  helperText?: string;
}

const InputCustom = React.forwardRef<HTMLInputElement, InputCustomProps>(
  ({ className, label, helperText, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label className="font-dm-mono text-[0.62rem] tracking-[0.12em] uppercase text-accent/50 ml-1">
            {label}
          </label>
        )}
        <Input
          ref={ref}
          className={cn(
            "bg-[rgba(0,0,30,0.6)] border border-white/[0.08] border-b-2 border-b-accent/25",
            "focus-visible:border-b-accent text-white/90 font-syne text-sm px-4 py-3 h-auto",
            "outline-none transition-colors placeholder:text-white/20 w-full rounded-none",
            className
          )}
          {...props}
        />
        {helperText && (
          <p className="font-dm-sans text-[0.65rem] text-white/30 ml-1">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

InputCustom.displayName = "InputCustom"

export { InputCustom }

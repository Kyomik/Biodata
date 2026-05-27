import { ReactNode } from "react";

interface GridItemProps {
  label: string;
  children: ReactNode;
  className?: string;
}

export function GridItem({
  label,
  children,
  className = "",
}: GridItemProps) {
  return (
    <div
      className={`
        rounded-3xl
        bg-zinc-900
        p-3
        flex flex-col justify-center
        text-center
        gap-1
        ${className}
      `}
    >
      <p
        className="
          text-[10px]
          tracking-[0.3em]
          text-zinc-400
        "
      >
        {label}
      </p>

      {children}
    </div>
  );
}
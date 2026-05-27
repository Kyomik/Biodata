'use client';

export interface TypeLine {
  text: string;
  color?: "ghost" | "lit" | "red";
  tag?: string;
}

interface StackedTypeProps {
  lines: TypeLine[];
}

export function StackedType({ lines }: StackedTypeProps) {
  const colorMap = {
    ghost: "text-gray/30",
    lit: "text-white",
    red: "text-three",
  };

  return (
    <div className="flex flex-col">
      {lines.map((line, i) => (
        <div key={i} className="flex items-baseline gap-4">
          <h1
            className={`
              text-6xl font-syne font-extrabold leading-15 uppercase select-none
              ${colorMap[line.color ?? "ghost"]}
              max-sm:text-3xl max-sm:leading-9
            `}
          >
            {line.text}
          </h1>
          {line.tag && (
            <span
              className="
                font-dm-mono text-[9px] text-accent/80 tracking-[0.3em] uppercase self-center
                border-l border-three pl-4
                max-sm:text-[7px]
              "
            >
              {line.tag}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

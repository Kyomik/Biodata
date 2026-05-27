import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardHeader,
} from "../ui/card";

interface CardGridMapProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function CardGridMap({
  title,
  subtitle,
  children,
}: CardGridMapProps) {
  return (
    <Card
      className="
        w-full max-w-[320px] mx-auto
        rounded-[2rem]
        bg-black
        text-white
        border-0
        shadow-2xl
        p-5
        gap-5
      "
    >
      {/* Header */}
      <CardHeader className="p-0 space-y-2">
        <p
          className="
            text-[10px]
            tracking-[0.3em]
            text-zinc-400
          "
        >
          {subtitle}
        </p>

        <h2
          className="
            text-4xl
            font-black
            uppercase
            leading-none
          "
        >
          {title}
        </h2>
      </CardHeader>

      {/* Dynamic Grid */}
      <CardContent className="grid grid-cols-2 gap-3 p-0">
        {children}
      </CardContent>
    </Card>
  );
}
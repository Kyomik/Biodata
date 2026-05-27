import { Badge } from "./badge";
import { cn } from "@/lib/utils";
import { BadgeType } from "@/app/commons/commons.enums";
import { BadgeCustomProps } from "./ui.types";

const typeStyles: Record<BadgeType, string> = {
  default: "bg-primary text-primary-foreground",
  success: "bg-green-500/10 text-green-400 border border-green-500/20",
  warning: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
  error: "bg-red-500/10 text-red-400 border border-red-500/20",
  info: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  locked: "bg-red-500/10 text-red-400/80 border border-red-500/15",
  category: "border border-accent/30 text-accent",
};

export const BadgeCustom = ({ type, children, className }: BadgeCustomProps) => {
  return (
    <Badge variant={type === "category" ? "outline" : "default"} className={cn(typeStyles[type], className)}>
      {children}
    </Badge>
  );
};
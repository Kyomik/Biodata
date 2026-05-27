import { StatusBadgeProps } from "./idea.types";
import { Badge } from "../ui/badge";

export function StatusBadge({ category, locked, status }: StatusBadgeProps) {
  const statusConfig = {
    onprogress: { label: 'On Progress', cls: 'bg-blue-500/10 text-blue-400 border border-blue-500/20' },
    done: { label: 'Done', cls: 'bg-green-500/10 text-green-400 border border-blue-500/20' },
  };

  return (
    <div className="flex items-center justify-between">
      <Badge variant="outline" className="text-accent border border-accent/30">{category}</Badge>
      {locked ? (
        <Badge variant={"outline"} className="bg-red-500/10 text-red-400/80 border border-red-500/15">
          Terkunci
        </Badge>
      ) : status && (
        <Badge className={statusConfig[status].cls}>
          {statusConfig[status].label}
        </Badge>
      )}
    </div>
  );
}
import { WidgetMetric } from "../widgets/WidgetMetric";
import { Award, Clock, FolderCheck } from "lucide-react";
import { CardMetricsProps } from "./cards.type";
import { Card } from "../ui/card";

const iconMap = {
  certificate: <Award className="w-10 h-10" />,
  experience: <Clock className="w-10 h-10" />,
  project: <FolderCheck className="w-10 h-10" />,
};

export const CardMetrics = ({ metrics }: { metrics: CardMetricsProps[] }) => {
  return (
    <Card className="
      flex flex-row flex-wrap
      rounded-lg border border-accent/10 w-full
      bg-secondary overflow-hidden
    ">
      {metrics.map((metric, idx) => (
        <WidgetMetric 
          key={idx}
          value={metric.value}
          label={metric.label}
          suffix={metric.suffix}
          icon={iconMap[metric.iconKey as keyof typeof iconMap]}
        />
      ))}
    </Card>
  );
};
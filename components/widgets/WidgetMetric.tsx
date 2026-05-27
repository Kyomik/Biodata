import { useCountAnimation } from '@/hooks/useCountAnimation';
import { Widget } from '../ui/widget';
import {WidgetMetricProps} from './widgets.types';

export const WidgetMetric = ({ value, label, icon, suffix }: WidgetMetricProps) => {
  const { count, ref } = useCountAnimation({ targetValue: value });

  return (
    <Widget ref={ref} className="gap-2 p-5 group bg-secondary rounded-lg min-w-[120px] flex-1">
      <div className="text-white/80 group-hover:text-accent/80 transition-colors duration-fast flex justify-center ">
        {icon}
      </div>
      <div className="font-syne text-2xl sm:text-4xl lg:text-6xl font-extrabold text-accent/80 text-center">
        {count}{suffix}
      </div>
      <div className="font-dm-mono text-[0.5rem] sm:text-[0.8rem] uppercase text-white/30 text-center mt-2">
        {label}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent/70 scale-x-0 group-hover:scale-x-100 transition-transform duration-slow origin-left" />
    </Widget>
  );
};
import { useCountAnimation } from '@/hooks/useCountAnimation';
import { Widget } from '../ui/widget';
import { WidgetMetricV2Props } from './widgets.types';

export const WidgetMetricV2 = ({ value, label, suffix }: WidgetMetricV2Props) => {
  const { count, ref } = useCountAnimation({ targetValue: value });

  return (
    <Widget ref={ref} className="group flex-1 gap-0.5 items-end font-dm-mono">
      <div className="font-dm-syne text-xl font-bold text-white leading-none">
        {count}{suffix}
      </div>
      <div className="text-[9px] tracking-widest text-white/25 uppercase">
        {label}
      </div>
    </Widget>
  );
};
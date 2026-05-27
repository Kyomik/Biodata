'use client';

import { Fragment } from "react";
import { metrics } from "../../widgetmetric/data";
import { WidgetMetricV2 } from "../../widgets/WidgetMetricV2";

export function SkillsMetrics() {
  return (
    <div className="absolute bottom-10 right-8 z-50 flex items-stretch gap-6 pointer-events-none max-sm:gap-3">
      {metrics.map((metric, idx) => (
        <Fragment key={idx}>
          {idx > 0 && <div className="w-px bg-white/[0.08] self-stretch" />}
          <WidgetMetricV2 value={metric.value} label={metric.label} />
        </Fragment>
      ))}
    </div>
  );
}

import { ReactElement } from "react";

export type WidgetMetricProps = {
  value: number;
  label: string;
  icon: ReactElement;
  suffix?: string;
}

export type WidgetMetricV2Props = {
  value: number;
  label: string;
  suffix?: string;
}
import Section from "../ui/Section";
import { metrics } from "../widgetmetric/data";
import { CardMetrics } from "../cards/CardMetrics";

export default function SectionInfo() {
  return (
    <Section id="info" className="relative !px-5 !pb-7" full>
      <CardMetrics metrics={metrics} />
    </Section>
  );
}
import Section from "../ui/Section";
import { metrics } from "../widgetmetric/data";
import { CardMetrics } from "../cards/CardMetrics";

export default function SectionStats() {
  return (
    <Section id="additional" className="relative !px-5 !pb-7" full>
      <CardMetrics metrics={metrics} />
    </Section>
  );
}
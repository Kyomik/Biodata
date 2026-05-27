'use client';

interface ContactInfoItemProps {
  label: string;
  value: React.ReactNode;
}

export function ContactInfoItem({ label, value }: ContactInfoItemProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-['DM_Mono',monospace] text-[0.6rem] tracking-[0.1em] uppercase text-[rgba(200,240,74,0.5)]">
        {label}
      </span>
      <div className="font-['Syne',sans-serif] text-[0.9rem] text-[rgba(202,202,221,0.7)]">
        {value}
      </div>
    </div>
  );
}

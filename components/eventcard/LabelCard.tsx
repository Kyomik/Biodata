import { LabelCardProps } from "./event.types";

const LabelCard = ({ label, className = '' }: LabelCardProps) => {
  return (
    <div className={`
        text-white bg-accent text-main/100 font-dm-mono text-[0.72rem] font-medium
        !px-[25px] !py-[6px] inline-flex items-center justify-center tracking-[0.08em] uppercase whitespace-nowrap
        transition-all duration-slow ease-snap ${className}
    `}>
      <span className="
        font-bold tracking-wide text-main/80 relative z-[1]
      ">{label}</span>
    </div>
  );
};

export default LabelCard;
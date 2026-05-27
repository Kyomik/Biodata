export default function SectionDecoration() {
  return (
    <div className="flex justify-center items-center flex-row w-full gap-[6px]">

      <div
        className="
          w-0
          h-0
          border-l-[14px]
          border-l-transparent
          border-r-[14px]
          border-r-transparent
          border-b-[22px]
          border-b-three/90
          max-sm:border-b-accent/90
        "
      />

      <div
        className="
          w-0
          h-0
          border-l-[14px]
          border-l-transparent
          border-r-[14px]
          border-r-transparent
          border-b-[22px]
          border-b-transparent
          rotate-180
          relative
          top-[1px]
        "
        style={{
          filter: "drop-shadow(0 0 0 rgba(255,255,255,.25))",
        }}
      >
        <div
          className="
            absolute
            -left-[14px]
            -top-[22px]
            w-0
            h-0
            border-l-[14px]
            border-l-transparent
            border-r-[14px]
            border-r-transparent
            border-b-[22px]
            border-b-white/20
          "
        />
      </div>
    </div>
  );
}
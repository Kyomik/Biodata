export function LockWatermark() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0" aria-hidden>
      <svg className="w-20 h-20 text-white/[0.025]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    </div>
  );
}
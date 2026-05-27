'use client';

interface IdeaToggleProps {
  showForm: boolean;
  onToggle: () => void;
}

export function IdeaToggle({ showForm, onToggle }: IdeaToggleProps) {
  return (
    <div className="relative flex justify-center mb-6">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none">
        <div className={`
          rounded-full transition-all duration-slow
          ${showForm
            ? 'w-56 h-10 bg-accent/18 blur-2xl'
            : 'w-40 h-8 bg-accent/6 blur-xl'
          }
        `} />
      </div>
      <button
        onClick={onToggle}
        className={`
          relative z-10 bg-transparent border-none cursor-pointer
          font-dm-mono text-[0.68rem] tracking-[0.2em] uppercase
          flex items-center gap-3 transition-all duration-300
          ${showForm
            ? 'text-accent'
            : 'text-gray/28 hover:text-gray/55'
          }
        `}
      >
        <span className={`block h-px transition-all duration-500 ${showForm ? 'w-10 bg-accent' : 'w-5 bg-gray/15'}`} />
        {showForm ? '✕ tutup' : '+ tambah ide'}
        <span className={`block h-px transition-all duration-500 ${showForm ? 'w-10 bg-accent' : 'w-5 bg-gray/15'}`} />
      </button>
    </div>
  );
}

'use client';

import { IdeaProps } from './idea.types';

function formatRupiah(n: number) {
  return 'Rp ' + n.toLocaleString('id-ID');
}

export function IdeaModal({ idea, onClose }: { idea: IdeaProps; onClose: () => void }) {
  const progress = idea.locked && idea.fundTarget
    ? Math.min((idea.fundCollected! / idea.fundTarget) * 100, 100)
    : 0;

  return (
    <div
      className="fixed inset-0 bg-[rgba(0,0,15,0.85)] z-[1000] flex items-center justify-center p-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#0d0d28] border border-[rgba(200,240,74,0.15)] max-w-[560px] w-full p-10 relative max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-transparent border-none text-[rgba(202,202,221,0.4)] hover:text-[#c8f04a] cursor-pointer p-1.5 transition-colors duration-200 leading-none"
          aria-label="Tutup"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <span className="font-['DM_Mono',monospace] text-[0.6rem] tracking-[0.1em] uppercase text-[rgba(200,240,74,0.5)] border border-[rgba(200,240,74,0.15)] px-2 py-0.5 rounded-sm inline-block mb-3">
          {idea.category}
        </span>
        <h2 className="font-['Syne',sans-serif] text-[1.4rem] font-extrabold text-[rgba(202,202,221,0.9)] mb-5 leading-snug">
          {idea.title}
        </h2>

        {/* Summary — selalu kelihatan */}
        <div
          className="font-['Syne',sans-serif] text-[0.9rem] leading-relaxed text-[rgba(202,202,221,0.65)] mb-1
            [&_strong]:font-bold [&_strong]:text-[rgba(202,202,221,0.9)]
            [&_em]:italic [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1
            [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1
            [&_li]:text-[rgba(202,202,221,0.7)]"
          dangerouslySetInnerHTML={{ __html: idea.summary }}
        />

        {/* Teaser */}
        {idea.teaser && (
          <p className="font-['Syne',sans-serif] text-[0.8rem] italic leading-relaxed text-[rgba(200,240,74,0.55)] border-l-2 border-[rgba(200,240,74,0.2)] pl-3 my-4">
            "{idea.teaser}"
          </p>
        )}

        {/* Detail — blur jika locked */}
        <div className={`flex flex-col gap-3.5 font-['Syne',sans-serif] text-[0.875rem] leading-relaxed text-[rgba(202,202,221,0.6)] mt-4 transition-all duration-300 ${idea.locked ? 'blur-md select-none pointer-events-none opacity-50' : ''}`}>
          <p>Deskripsi lengkap tentang ide ini mencakup latar belakang masalah, solusi yang ditawarkan, dan rencana implementasi ke depan.</p>
          <ul className="list-none flex flex-col gap-2">
            {['Fitur utama #1 — deskripsi lengkap', 'Fitur utama #2 — deskripsi lengkap', 'Estimasi biaya development', 'Target pengguna & market size'].map((item) => (
              <li key={item} className="before:content-['→_'] before:text-[#c8f04a] before:font-['DM_Mono',monospace]">{item}</li>
            ))}
          </ul>
        </div>

        {/* Locked notice + fund + support */}
        {idea.locked && (
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex items-center gap-2.5 px-4 py-3 border border-red-500/20 bg-red-500/[0.05] font-['DM_Mono',monospace] text-[0.65rem] tracking-[0.08em] text-red-400/70">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              Detail dikunci — dukung ide ini agar penuh & terbuka untuk semua
            </div>

            {idea.fundTarget && (
              <div className="flex flex-col gap-2">
                <div className="h-[3px] bg-white/[0.07] rounded-sm overflow-hidden">
                  <div className="h-full bg-[#c8f04a] rounded-sm transition-all duration-700" style={{ width: `${progress}%` }} />
                </div>
                <div className="flex justify-between">
                  <span className="font-['DM_Mono',monospace] text-[0.68rem] text-[#c8f04a]">{formatRupiah(idea.fundCollected!)}</span>
                  <span className="font-['DM_Mono',monospace] text-[0.6rem] text-[rgba(202,202,221,0.3)]">dari {formatRupiah(idea.fundTarget)}</span>
                </div>
              </div>
            )}

            {idea.supportLink && (
              <a
                href={idea.supportLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full flex items-center justify-center gap-2
                  font-['DM_Mono',monospace] text-[0.72rem] tracking-[0.1em] uppercase
                  py-3 border border-red-500/30 bg-red-500/[0.06] text-red-400/80
                  hover:bg-red-500/15 hover:text-red-300
                  transition-all duration-200 no-underline
                "
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                Dukung Ide Ini
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
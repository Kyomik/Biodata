'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
};

export function RichTextEditor({ value, onChange, placeholder }: Props) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  // Sync external value hanya saat mount
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value;
    }
  }, []);

  const exec = (cmd: string, val?: string) => {
    document.execCommand(cmd, false, val);
    editorRef.current?.focus();
    onChange(editorRef.current?.innerHTML ?? '');
  };

  const handleInput = () => {
    onChange(editorRef.current?.innerHTML ?? '');
  };

  const toolbarBtn = (onClick: () => void, label: string, content: React.ReactNode) => (
    <button
      type="button"
      title={label}
      onMouseDown={(e) => { e.preventDefault(); onClick(); }}
      className="w-7 h-7 flex items-center justify-center text-[rgba(202,202,221,0.5)] hover:text-[#c8f04a] hover:bg-white/5 rounded transition-colors duration-150 text-xs font-bold"
    >
      {content}
    </button>
  );

  return (
    <div className={`flex flex-col border border-white/[0.08] border-b-2 transition-colors duration-300 ${isFocused ? 'border-b-[#c8f04a]' : 'border-b-[rgba(200,240,74,0.25)]'} bg-[rgba(0,0,30,0.6)]`}>
      {/* Toolbar */}
      <div className="flex items-center gap-0.5 px-2 py-1.5 border-b border-white/[0.06]">
        {toolbarBtn(() => exec('bold'), 'Bold', <span className="font-black">B</span>)}
        {toolbarBtn(() => exec('italic'), 'Italic', <span className="italic font-serif">I</span>)}
        {toolbarBtn(() => exec('underline'), 'Underline', <span className="underline">U</span>)}
        <div className="w-px h-4 bg-white/10 mx-1" />
        {toolbarBtn(() => exec('insertUnorderedList'), 'Bullet list',
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/>
            <circle cx="4" cy="6" r="1.5" fill="currentColor" stroke="none"/>
            <circle cx="4" cy="12" r="1.5" fill="currentColor" stroke="none"/>
            <circle cx="4" cy="18" r="1.5" fill="currentColor" stroke="none"/>
          </svg>
        )}
        {toolbarBtn(() => exec('insertOrderedList'), 'Numbered list',
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/>
            <text x="1" y="9" fontSize="7" fill="currentColor" stroke="none" fontFamily="monospace">1.</text>
            <text x="1" y="15" fontSize="7" fill="currentColor" stroke="none" fontFamily="monospace">2.</text>
          </svg>
        )}
        <div className="w-px h-4 bg-white/10 mx-1" />
        {toolbarBtn(() => exec('removeFormat'), 'Clear format',
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h16M10 11v6M14 11v6"/><path d="M5 7l1 12h12l1-12"/>
          </svg>
        )}
      </div>

      {/* Editable area */}
      <div className="relative">
        {!value && !isFocused && (
          <span className="absolute top-3 left-4 text-[rgba(202,202,221,0.2)] text-sm pointer-events-none font-['Syne',sans-serif]">
            {placeholder}
          </span>
        )}
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          onInput={handleInput}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="
            min-h-[100px] px-4 py-3 outline-none text-[rgba(202,202,221,0.9)] text-sm leading-relaxed
            font-['Syne',sans-serif]
            [&_strong]:font-bold [&_strong]:text-[rgba(202,202,221,1)]
            [&_em]:italic [&_em]:text-[rgba(202,202,221,0.75)]
            [&_u]:underline
            [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1
            [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1
            [&_li]:text-[rgba(202,202,221,0.8)]
          "
        />
      </div>
    </div>
  );
}
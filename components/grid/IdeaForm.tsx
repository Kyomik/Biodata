'use client';

import { useState } from 'react';
import { IdeaProps } from './idea.types';
import { RichTextEditor } from './RichTextEditor';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Field,
  FieldLabel,
  FieldContent,
  FieldGroup,
  FieldSet,
} from '@/components/ui/field';
import { FieldCustom } from '../ui/FieldCustom';

export function IdeaForm({ onAdd }: { onAdd: (idea: IdeaProps) => void }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [summary, setSummary] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !category.trim() || !summary.trim()) return;
    onAdd({
      id: Date.now(),
      title,
      category,
      summary,
      locked: false,
      status: 'onprogress',
    });
    setTitle('');
    setCategory('');
    setSummary('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClassName = cn(
    "bg-[rgba(0,0,30,0.6)] border border-white/[0.08] border-b-2 border-b-accent/25",
    "focus:border-b-accent text-white/90 font-syne text-sm px-4 py-3",
    "outline-none transition-colors placeholder:text-white/20 w-full rounded-none"
  );

  return (
    <div className="border border-accent/10 border-t-2 border-t-accent/25 bg-[rgba(0,0,20,0.4)] p-8 mt-0.5">
      <div className="flex items-center gap-3.5 mb-6">
        <span className="font-dm-mono text-2xl text-accent leading-none">+</span>
        <h3 className="font-syne text-base font-bold text-white/70">Tambah Ide</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <FieldGroup className="gap-5">
          <FieldSet className="gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FieldCustom label='Judul Ide'>
                <Input
                    type="text"
                    placeholder="Nama project atau ide kamu"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={inputClassName}
                  />
              </FieldCustom>

              <FieldCustom label='Kategori'>
                <Input
                    type="text"
                    placeholder="SaaS, Gateway..."
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className={inputClassName}
                  />
              </FieldCustom>
            </div>
          </FieldSet>

          <Field orientation="vertical">
            <FieldLabel className="font-dm-mono text-[0.62rem] tracking-[0.12em] uppercase text-accent/50">
              Deskripsi
            </FieldLabel>
            <FieldContent>
              <RichTextEditor
                value={summary}
                onChange={setSummary}
                placeholder="Jelaskan ide kamu — bisa bold, italic, atau list..."
              />
            </FieldContent>
          </Field>

          <div className="flex items-center gap-4 flex-wrap">
            {submitted && (
              <span className="inline-flex items-center gap-2 font-dm-mono text-[0.65rem] tracking-[0.08em] text-accent">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Ide berhasil ditambahkan!
              </span>
            )}
            <Button
              type="submit"
              className={cn(
                "group relative overflow-hidden",
                "ml-auto inline-flex items-center gap-3",
                "bg-accent text-main font-dm-mono text-[0.72rem] font-medium tracking-[0.12em] uppercase",
                "px-8 py-3.5 border-none cursor-pointer rounded-none",
                "transition-colors duration-slow hover:bg-accent"
              )}
            >
              <span className="relative z-10 transition-colors group-hover:text-accent">Submit Ide</span>
              <svg className="relative z-10 transition-colors group-hover:stroke-accent" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              <span className="absolute inset-0 bg-main scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </Button>
          </div>
        </FieldGroup>
      </form>
    </div>
  );
}
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { InputCustom } from '@/components/ui/InputCustom';
import { Textarea } from '@/components/ui/textarea';
import { FieldCustom } from '@/components/ui/FieldCustom';

export function ContactForm() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ nama: '', email: '', pesan: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <InputCustom 
        label="Nama"
        id="nama"
        placeholder="Nama anda"
        value={formData.nama}
        onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
        required
        disabled={status === 'sending'}
      />

      <InputCustom 
        label="Email"
        id="email"
        type="email"
        placeholder="Email anda"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        disabled={status === 'sending'}
      />

      <FieldCustom label="Pesan">
        <Textarea 
          id="pesan"
          placeholder="Ceritakan project kamu..."
          value={formData.pesan}
          onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
          disabled={status === 'sending'}
          className="min-h-[150px] border-[rgba(200,240,74,0.1)] focus-visible:border-[rgba(200,240,74,0.5)] focus-visible:ring-[rgba(200,240,74,0.1)]"
        />
      </FieldCustom>

      <div className="flex items-center gap-4">
        <Button 
          type="submit" 
          variant="nonerounded"
          disabled={status === 'sending'}
          className="border border-[rgba(200,240,74,0.3)] bg-transparent text-[#c8f04a] hover:bg-[#c8f04a] hover:text-[#000019] hover:border-[#c8f04a] transition-all duration-300 w-fit gap-2"
        >
          <span>{status === 'sending' ? 'Mengirim...' : 'Kirim Pesan'}</span>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5"
            className={status === 'sending' ? 'animate-spin' : ''}
          >
            {status === 'sending' ? (
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            ) : (
              <path d="M5 12h14M12 5l7 7-7 7"/>
            )}
          </svg>
        </Button>

        {status === 'success' && (
          <span className="font-['DM_Mono',monospace] text-[0.7rem] text-[#c8f04a] animate-pulse">
            Pesan terkirim! Terima kasih.
          </span>
        )}
        
        {status === 'error' && (
          <span className="font-['DM_Mono',monospace] text-[0.7rem] text-red-500">
            Gagal mengirim pesan. Coba lagi.
          </span>
        )}
      </div>
    </form>
  );
}

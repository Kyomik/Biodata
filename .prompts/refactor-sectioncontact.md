## Goal
Saya ingin menambahkan kembali section "Contact" di bagian paling bawah pada file `app/page.tsx`. Sebelumnya section ini dihapus karena saya ingin melakukan refactoring (memecah komponen besar menjadi komponen-komponen kecil yang lebih modular). dan alhasil error, dan saya berhenti mengutakatiknya.
## Task & Strategy
1. **Analisis Komponen Eksisting:**
   - Cari dan periksa komponen `SectionContact` lama (atau sejenisnya) yang mungkin masih ada di folder `@/components/sections`.
   - Cari tahu apakah komponen bernama `FieldCustom` di dalam folder `@/components/ui` bisa digunakan kembali atau dikombinasikan untuk form kontak ini.

2. **Refactoring Komponen (Atomic Design):**
   - Pecah section kontak menjadi komponen-komponen kecil yang reusable.
   - Komponen baru ini harus membungkus (wrap) dan mengadopsi komponen dari **Shadcn UI** yang terletak di folder `@/components/ui/` (atau folder `ui` proyek ini).
   - Komponen Shadcn yang wajib digunakan meliputi: `Button`, `Input`, `Label`, `Textarea`, dan `FormField`/`Form` (jika menggunakan react-hook-form).
   - Letakkan komponen-komponen kecil hasil pecahan tersebut ke dalam folder yang sesuai di dalam direktori `app/` (atau `@/components/`), lengkap dengan tambahan styling Tailwind yang diperlukan agar terlihat rapi dan modern.

3. **Integrasi Akhir:**
   - Satukan komponen-komponen kecil tersebut menjadi satu kesatuan komponen utama Section Contact yang bersih.
   - Pasang kembali komponen utama Section Contact tersebut di bagian paling bawah file `app/page.tsx`.

## Output yang Diharapkan
- Kode untuk komponen-komponen kecil baru yang sudah di-styling (beserta info lokasi foldernya).
- Kode komponen utama Section Contact yang baru.
- Modifikasi pada file `app/page.tsx` yang sudah mengimpor dan menampilkan Section Contact di posisi paling bawah.
- Pastikan tidak ada error terkait TypeScript atau konflik *import path*.
## Goal
Saya ingin melakukan perbaikan pada tiga area utama di dalam proyek ini: styling responsive pada komponen Card, perbaikan logika animasi pada Image Hero, dan fungsionalitas pengiriman email pada Section Contact.

## Tasks & Instructions

### 1. Styling CardGridMap (`@/components/cards`)
- Periksa komponen `CardGridMap` yang ada di dalam folder `@/components/cards`.
- Sesuaikan styling-nya agar serasi dan konsisten dengan keseluruhan tema/style website ini (periksa penggunaan warna, font, atau radius dari komponen lain jika diperlukan).
- **Wajib Responsive:** Pastikan tampilannya rapi dan proporsional di semua ukuran layar (Mobile, Tablet, Desktop).

### 2. Perbaikan Animasi Image di Section Hero
- **Masalah Saat Ini:** Animasi pada gambar di section Hero terasa janggal (seperti berjalan, menampilkan foto asli, lalu tiba-tiba menghilang). Pendekatan saat ini tidak optimal.
- **Logika yang Diinginkan:** - Animasi hanya berjalan saat gambar pertama kali masuk ke dalam viewport (seperti animasi teks/kalimat yang ada di section Hero tersebut).
  - Jika komponen keluar dari viewport, animasi harus ter-pause atau tidak terpicu ulang secara aneh.
- **Cara Implementasi:**
  - Coba periksa apakah bisa memanfaatkan komponen `ScrollReveal` di `@/components/ui` atau hooks `useScrollReveal` di `@/hooks`.
  - **PENTING:** Jika kedua file (`ScrollReveal` atau `useScrollReveal`) tersebut tidak bisa digunakan atau tidak cocok, **JANGAN MENGUBAH** isi dari kedua file tersebut. Buatlah pendekatan/logika baru yang terisolasi di dalam komponen Hero.
  - Prioritaskan optimalisasi performa dan struktur kode yang modular.

### 3. Fungsionalitas Section Contact
- **Masalah Saat Ini:** Section Contact saat ini hanya berupa tampilan UI dan interaksi kosmetik saja, belum bisa benar-benar mengirimkan data/email.
- **Tugas:** Hubungkan form tersebut agar bisa mengirimkan data kontak (email). Anda bisa menyiapkan API Route internal (jika menggunakan Next.js App Router) atau mengintegrasikannya dengan solusi yang paling bersih dan modular untuk project ini.

## Output yang Diharapkan
- Perubahan kode yang rapi pada komponen `CardGridMap`.
- Refactoring pada komponen gambar di Section Hero dengan logika animasi viewport yang baru dan optimal.
- Implementasi sistem pengiriman email (logic + UI handling seperti state loading/success/error) pada Section Contact.
- Pastikan proyek dapat di-build dengan aman tanpa error TypeScript.
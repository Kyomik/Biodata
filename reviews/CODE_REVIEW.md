# Laporan QA & Code Review - Project Porto

**Reviewer:** Senior React Developer & Professional QA
**Tanggal:** 26 Mei 2026
**Teknologi:** React 19, Next.js 15, Tailwind CSS 4, Anime.js, Radix UI

---

## 1. Analisis Arsitektur & Struktur Kode

### Temuan Positif
*   **Penerapan Atomic Design:** Pemecahan komponen menjadi unit terkecil (Header, Bento, Timeline, dll) sangat baik. Hal ini meningkatkan reusabilitas dan memudahkan maintenance.
*   **Separation of Concerns:** Pemisahan antara logika animasi (hooks), data statis, dan komponen visual sudah cukup rapi.
*   **Naming Convention:** Konsisten menggunakan PascalCase untuk komponen custom dan lowercase untuk komponen primitive UI.

### Rekomendasi
*   **Shared Types:** Sebaiknya interface yang sering digunakan (seperti `IdeaProps` atau `TypeLine`) dikumpulkan dalam folder `@/types` global daripada tersebar di folder komponen masing-masing untuk menghindari *circular dependency*.
*   **UI Consistency:** Pastikan semua komponen UI menggunakan `cn()` utility untuk penggabungan class agar tidak terjadi konflik Tailwind.

---

## 2. Review Kode & Best Practices

### Komponen UI
*   `InputCustom.tsx` dan `BadgeCustom.tsx` sudah menggunakan pola `forwardRef` yang benar, ini krusial untuk integrasi dengan library pihak ketiga atau akses DOM langsung.
*   Penggunaan `cva` (Class Variance Authority) di `button.tsx` dan `badge.tsx` adalah standar industri yang sangat baik untuk mengelola varian styling.

### Animasi (Anime.js & Canvas)
*   Logika `NoiseReveal` sudah dioptimalkan dengan penanganan `object-fit: cover` secara manual di canvas. Ini menunjukkan pemahaman mendalam tentang manipulasi grafis.
*   Sinkronisasi antara atribut `data-scrolled` dan React state di `SectionHero` menggunakan `MutationObserver` adalah solusi kreatif, namun berisiko performa jika banyak atribut lain berubah.

---

## 3. Strategi Optimasi (Anti-Lag)

Untuk memastikan user tidak merasakan lag (jank), berikut adalah titik-titik yang perlu dioptimalkan:

### A. Throttling Scroll Listener (`SectionDetail.tsx`)
**Masalah:** Event listener `scroll` berjalan setiap pixel user melakukan scrolling. Ini memicu re-render yang sangat berat karena menghitung `getBoundingClientRect()`.
**Solusi:** Bungkus fungsi `handleScroll` dengan `requestAnimationFrame`.
```typescript
const handleScroll = () => {
  window.requestAnimationFrame(() => {
    // logika penghitungan progress di sini
  });
};
```

### B. Conditional Animation Loop (`GlobeSkills.tsx`)
**Masalah:** Globe menggunakan `requestAnimationFrame` yang terus berjalan di latar belakang meskipun user sedang melihat section lain (Footer atau Hero). Ini memakan daya CPU/GPU secara terus menerus.
**Solusi:** Gunakan `IntersectionObserver` untuk mempause loop animasi saat globe tidak terlihat di viewport.
```typescript
useEffect(() => {
  const observer = new IntersectionObserver(([entry]) => {
    setIsVisible(entry.isIntersecting);
  });
  observer.observe(canvasRef.current);
  // Jalankan requestAnimationFrame HANYA jika isVisible === true
}, []);
```

### C. Memoization (`CardLogos.tsx`, `GridExperience.tsx`)
**Masalah:** Komponen grid dengan banyak item kecil bisa memicu re-render masal saat parent-nya (Section) mengalami perubahan state (misal: saat hitungan progress scroll).
**Solusi:** Gunakan `React.memo` untuk komponen item grid agar React tidak perlu membandingkan seluruh pohon DOM jika data item tersebut tidak berubah.

### D. Image Optimization
**Masalah:** Beberapa gambar di `DetailTimeline` mungkin berukuran besar.
**Solusi:** Gunakan komponen `next/image` untuk mendapatkan kompresi WebP otomatis dan *lazy loading* bawaan Next.js.

---

## 4. Kesimpulan QA

| Kategori | Status | Catatan |
| :--- | :--- | :--- |
| **Kualitas Kode** | Tinggi | Sangat modular dan idiomatik. |
| **Performa** | Menengah | Potensi lag pada mobile karena loop canvas dan scroll listener yang unthrottled. |
| **Aksesibilitas** | Menengah | Perlu penambahan atribut ARIA pada elemen interaktif custom. |
| **Maintainability** | Sangat Tinggi | Struktur folder sangat intuitif bagi developer baru. |

**Rekomendasi Utama:** Fokus pada optimasi *event listener* dan membatasi aktifitas animasi hanya pada elemen yang aktif di layar untuk memastikan pengalaman 60 FPS yang stabil.

import { Syne, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll"; // 1. IMPORT KOMPONEN SMOOTH SCROLL ANDA (Sesuaikan path filenya)

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "My Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${syne.variable} ${dmSans.variable} ${dmMono.variable} h-auto`}>
      <body className="bg-main text-white antialiased">
        {/* 2. BUNGKUS SELURUH KONTEN UTAMA MENGGUNAKAN SMOOTH SCROLL */}
        <SmoothScroll>
          <Navbar />
          {/* 
            3. PERBAIKAN KRITIS: 
            Hapus `overflow-hidden` dan `style={{ minHeight: "100vh" }}` dari tag <main>.
            Biarkan tingginya mengalir alami (auto) agar Lenis tahu tinggi asli halaman portfolio Anda.
          */}
          <main className="main-bg-color min-h-screen overflow-x-clip">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
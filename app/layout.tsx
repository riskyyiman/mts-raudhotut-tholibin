// src/app/layout.tsx
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  // Judul dan Deskripsi SEO
  title: 'MTs SA Raudhotut Tholibin Kembaran | Madrasah Digital',
  description: "Portal resmi MTs SA Raudhotut Tholibin Kembaran. Membangun generasi Qur'ani yang melek digital dengan sinergi teknologi dan adab di Banyumas.",
  keywords: ['MTs SA Raudhotut Tholibin', 'Madrasah Kembaran', 'Sekolah Digital Banyumas', 'MTsS SA Kembaran'],

  // Konfigurasi Ikon Website (Favicon)
  icons: {
    icon: [
      { url: '/images/image.png' }, // Menggunakan logo sekolah sebagai favicon utama
    ],
    shortcut: ['/images/image.png'],
    apple: [
      { url: '/images/image.png' }, // Ikon untuk perangkat iOS
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Menggunakan lang="id" untuk optimalisasi mesin pencari lokal
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}

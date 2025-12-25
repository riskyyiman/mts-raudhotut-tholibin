export const SCHOOL_DATA = {
  name: 'MTs SA Raudhotut Tholibin Kembaran',
  npsn: '20363294',
  accreditation: 'B',
  address: 'Jl. Sunan Ampel No. 01, Kembaran, Kec. Kembaran, Kab. Banyumas',
  curriculum: 'Kurikulum Merdeka',
  foundation: 'Yayasan Pondok Pesantren Raudhotut Tholibin',
  stats: {
    students: '300+', // Estimasi berdasarkan data Dapodik terbaru
    teachers: '20+',
    achievements: '15+',
  },
};

export const NAV_LINKS = [
  { name: 'Beranda', href: '#home' }, // Mengarah ke Hero
  { name: 'Galeri', href: '#gallery' }, // Mengarah ke Gallery
  // { name: 'Program', href: '#programs' }, // Pastikan ada section dengan id="programs"
  { name: 'Kontak', href: '#footer' }, // Mengarah ke Footer
];

export const GALLERY_DATA = [
  // --- BARIS 1 & 2 ---
  {
    id: 1,
    title: 'Suasana Belajar Kondusif',
    category: 'Kegiatan Luar Ruang',
    image: '/images/1.jpeg', // Gunakan foto: image_262a44 (Silat)
    className: 'md:col-span-2 md:row-span-2', // Kotak Besar (Utama)
  },
  {
    id: 2,
    title: 'Ekstrakurikuler Pencak Silat',
    category: 'Karakter',
    image: '/images/2.jpeg', // Gunakan foto: image_262a49 (Antrian/Lorong Vertikal)
    className: 'md:col-span-1 md:row-span-2', // Kotak Tinggi (Vertikal)
  },
  {
    id: 3,
    title: 'Budaya Antre & Disiplin',
    category: 'Akademik',
    image: '/images/3.jpeg', // Gunakan foto: image_262a6a (Kelas)
    className: 'md:col-span-1 md:row-span-1', // Kotak Kecil
  },
  {
    id: 4,
    title: 'Fokus Ujian Madrasah',
    category: 'Evaluasi',
    image: '/images/5.jpeg', // Gunakan foto: image_262a87 (Siswa Ujian)
    className: 'md:col-span-1 md:row-span-1', // Kotak Kecil
  },

  // --- BARIS 3 ---
  {
    id: 5,
    title: 'Prestasi & Program Unggulan',
    category: 'Interaksi',
    image: '/images/6.jpeg', // Gunakan foto: image_262a04 (Guru di meja)
    className: 'md:col-span-2 md:row-span-1', // Persegi Panjang Mendatar
  },
  {
    id: 6,
    title: 'Bimbingan Guru & Siswa',
    category: 'Pencapaian',
    image: '/images/4.jpeg', // Gunakan foto: image_262add (Brosur/Piala)
    className: 'md:col-span-2 md:row-span-1', // Persegi Panjang Mendatar
  },
];

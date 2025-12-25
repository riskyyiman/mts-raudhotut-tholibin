import Navbar from '../src/components/layouts/Navbar';
import Footer from '../src/components/layouts/Footer';
import Hero from '../src/components/sections/Hero';
import Gallery from '../src/components/sections/Gallery';
import { Award, Fingerprint, BookOpen, Users, ArrowRight } from 'lucide-react';
import { SCHOOL_DATA } from '../src/constants/data';

export default function Home() {
  const stats = [
    {
      label: 'Akreditasi',
      value: SCHOOL_DATA.accreditation,
      sub: 'Standar Nasional',
      icon: <Award className="text-white" size={24} />,
      bg: 'bg-emerald-600',
      text: 'text-emerald-900',
    },
    {
      label: 'Identitas',
      value: 'NPSN',
      sub: SCHOOL_DATA.npsn,
      icon: <Fingerprint className="text-white" size={24} />,
      bg: 'bg-slate-900',
      text: 'text-slate-900',
    },
    {
      label: 'Kurikulum',
      value: 'Merdeka',
      sub: 'Berbasis Proyek',
      icon: <BookOpen className="text-white" size={24} />,
      bg: 'bg-blue-600',
      text: 'text-blue-900',
    },
    {
      label: 'Program',
      value: 'Satu Atap',
      sub: 'Formal & Diniyah',
      icon: <Users className="text-white" size={24} />,
      bg: 'bg-amber-500',
      text: 'text-amber-900',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* --- SECTION STATS DENGAN GRADIENT HIJAU & SHADOW --- */}
      <section
        className="relative z-20 py-24 px-4 md:px-8 max-w-7xl mx-auto 
  /* PERUBAHAN 1: Ganti bg-white dengan linear gradient hijau modern */
  bg-gradient-to-br from-emerald-50 via-teal-50 to-white 
  /* PERUBAHAN 2: Tambahkan shadow yang lebih menonjol */
  shadow-[0_20px_50px_-15px_rgba(16,185,129,0.15)] 
  rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden border-t border-emerald-100/50"
      >
        {/* --- BACKGROUND ACCENTS (TETAP DIPERTAHANKAN) --- */}
        {/* Gradasi transisi halus dari Hero */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-emerald-100/30 to-transparent pointer-events-none" />

        {/* Blob dekoratif samping agar selaras dengan tema Hero */}
        <div className="absolute top-1/2 -right-64 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[120px] pointer-events-none" />

        {/* Grid Pattern Overlay yang lebih lembut */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />

        {/* ... (Sisa konten Header Section dan Grid Stats tetap sama) ... */}
        <div className="relative mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 z-10 pt-8 md:pt-4">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur-sm border border-emerald-100 shadow-sm mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em]">Kualitas Pendidikan Teruji</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Mewujudkan Generasi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 italic">Cerdas & Beradab</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-xs text-sm leading-relaxed border-l-2 border-emerald-200 pl-4">Komitmen MTs SA Raudhotut Tholibin Kembaran dalam menyelaraskan kurikulum pesantren dengan standar IPTEK modern.</p>
        </div>

        {/* --- GRID STATS CARDS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          <div className="absolute inset-0 bg-emerald-500/5 blur-[120px] rounded-full -z-10" />

          {stats.map((item, i) => (
            <div key={i} className="group relative">
              {/* CARD STYLE UPDATE: 
                Menggunakan "Diagonal Rounding" (Leaf Shape) 
                agar selaras dengan tema custom section 
            */}
              <div
                className="h-full bg-white/50 backdrop-blur-md p-8 
              /* Custom Rounded untuk Card: Diagonal Besar, Diagonal Kecil */
              rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-[0.8rem] rounded-bl-[0.8rem]
              border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.02)] 
              hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)] 
              transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden"
              >
                {/* Background Glow pada Card saat Hover */}
                <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full ${item.bg} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`} />

                <div className="flex flex-col h-full relative z-10">
                  {/* Icon Box */}
                  <div className="mb-8">
                    <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center shadow-lg transform group-hover:rotate-[12deg] transition-transform duration-500`}>
                      <div className="text-white scale-110">{item.icon}</div>
                    </div>
                  </div>

                  {/* Angka & Label */}
                  <div className="mt-auto">
                    <div className="flex items-baseline gap-1 mb-1">
                      <h3 className="text-4xl font-black text-slate-900 tracking-tighter">{item.value}</h3>
                      <span className="text-emerald-500 font-bold text-xl">+</span>
                    </div>

                    <p className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-2">{item.label}</p>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.sub}</p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Detail Unggulan</span>
                    <ArrowRight size={16} className="text-emerald-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Gallery />
      <Footer />
    </main>
  );
}

'use client';

import { motion, type Variants } from 'framer-motion';
import { Play, ArrowRight, BookOpen, Wifi, ShieldCheck, CheckCircle2, Languages } from 'lucide-react';

// Animation Config
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export default function HeroRedesign() {
  return (
    <section id="home" className="relative w-full min-h-[110vh] lg:min-h-screen flex items-center bg-slate-50 overflow-hidden pt-32 pb-20 lg:pt-0 lg:pb-0">
      {/* --- BACKGROUND ACCENTS --- */}
      <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-linear-to-b from-emerald-50/80 to-transparent rounded-bl-[1000px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-blue-50/60 rounded-tr-[500px] blur-3xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* ================= LEFT SIDE: CONTENT ================= */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col items-start space-y-8">
            {/* Notification Pill */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full bg-white border border-emerald-100 shadow-[0_2px_10px_-3px_rgba(16,185,129,0.15)] hover:border-emerald-200 transition-colors cursor-default"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-slate-600 tracking-wide">
                PPDB Madrasah <span className="text-emerald-700 font-bold">Tahun Ajaran 2025/2026</span>
              </span>
            </motion.div>

            {/* Main Headline - Mengambil fakta integrasi ilmu */}
            <motion.div variants={fadeUp} className="relative">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                Integrasi <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Imtaq</span>
                <span className="font-serif italic font-medium text-slate-800 px-3">&</span>
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">Iptek.</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-100/60 -z-0 -rotate-2" />
                </span>
              </h1>
            </motion.div>

            {/* Subheadline - Menggunakan Lokasi & Karakter Sekolah yang Akurat */}
            <motion.div variants={fadeUp} className="max-w-lg">
              <p className="text-lg text-slate-600 leading-relaxed">
                Membangun generasi cerdas berakhlakul karimah di <span className="font-bold text-slate-800">Kembaran, Banyumas</span>. MTs SA Raudhotut Tholibin menyelenggarakan pendidikan tingkat menengah dengan keunggulan kurikulum
                pesantren Satu Atap.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="group relative px-8 py-4 bg-emerald-700 text-white rounded-2xl font-bold text-lg shadow-[0_10px_20px_-5px_rgba(4,120,87,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(4,120,87,0.4)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center justify-center gap-3">
                  Informasi Pendaftaran
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              <button className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg text-slate-700 bg-white border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Play size={14} fill="currentColor" />
                </div>
                Profil Madrasah
              </button>
            </motion.div>

            {/* Social Proof / Features List - Fakta resmi akreditasi dan kementerian */}
            <motion.div variants={fadeUp} className="pt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-500" />
                <span>Terakreditasi B (BAN-SM)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-500" />
                <span>NPSN: 20363426</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-500" />
                <span>Kurikulum Terintegrasi</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT SIDE: COMPOSITION ================= */}
          {/* Container: h-auto & flex-col untuk mobile, h-[650px] & block untuk desktop */}
          <div className="relative h-auto lg:h-[650px] w-full flex flex-col items-center gap-6 lg:block perspective-1000 mt-12 lg:mt-0">
            {/* Animated Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-gradient-to-tr from-emerald-300/20 to-blue-300/20 rounded-full blur-[80px] animate-pulse-slow pointer-events-none" />

            {/* --- 1. CARD ATAS (Kurikulum) --- */}
            {/* Mobile: relative | Desktop: absolute sesuai koordinat lama */}
            <motion.div initial={{ opacity: 0, x: -40, y: 20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative lg:absolute lg:top-5 lg:-left-35 z-30 w-full max-w-[360px]">
              <div className="bg-white p-5 rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-amber-50 rounded-xl text-amber-600 shadow-sm">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Kurikulum Terpadu</h4>
                    <p className="text-[11px] font-medium text-slate-500 mt-0.5">Nasional & Karakter Pesantren</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* --- 2. CARD TENGAH (Pusat Bahasa & Prestasi) --- */}
            {/* Mobile: relative & normal flow | Desktop: ml-auto untuk posisi kanan */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              // Perbaikan: Menghapus 'top-20' pada mobile agar tidak menabrak kartu lain
              className="relative z-20 w-full max-w-[360px] h-[460px] bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl shadow-slate-900/40 flex flex-col justify-between overflow-hidden border border-slate-800 lg:ml-auto lg:relative lg:top-20"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-6">
                  <Languages size={28} className="text-emerald-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">
                  Pusat Bahasa <br />& Prestasi
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">Dipercaya sebagai tuan rumah kompetisi Bahasa Arab tingkat kabupaten, mencetak generasi unggul dalam literasi religi.</p>
              </div>

              <div className="relative z-10 mt-6 p-5 rounded-3xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-4 text-[10px] font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="bg-emerald-500 rounded-full h-2 w-2"></span>
                    </span>
                    <span className="text-slate-300">Fokus Kompetensi</span>
                  </div>
                  <span className="text-emerald-400">Banyumas</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                    <span>Bahasa Arab</span>
                    <span>Unggul</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: '95%' }} transition={{ duration: 1.5 }} className="h-full bg-gradient-to-r from-emerald-500 to-amber-400" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* --- 3. CARD BAWAH (Legalitas) --- */}
            {/* Mobile: relative | Desktop: absolute koordinat kanan bawah */}
            <motion.div initial={{ opacity: 0, x: 40, y: -20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="relative lg:absolute lg:-bottom-5 lg:-right-55 z-30 w-full max-w-[360px]">
              <div className="bg-emerald-600 p-5 rounded-[1.5rem] shadow-[0_20px_40px_-10px_rgba(16,185,129,0.3)] border border-emerald-500/50 text-white hover:scale-105 transition-transform duration-300">
                <div className="flex items-start justify-between mb-2">
                  <ShieldCheck size={28} className="text-emerald-200" />
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-md font-bold text-white uppercase tracking-wider">NPSN: 20363426</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-0.5">Akreditasi B</h4>
                  <p className="text-xs text-emerald-100/90 leading-tight">Terdaftar resmi di Kemenag & BAN-SM</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

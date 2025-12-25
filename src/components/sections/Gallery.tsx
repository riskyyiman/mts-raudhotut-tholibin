'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { GALLERY_DATA } from '../../constants/data';
import { Camera, ChevronLeft, ChevronRight, Expand, Sparkles } from 'lucide-react';

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scroll sebanyak setengah container untuk pergeseran yang halus
      const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="relative py-24 bg-slate-50 overflow-hidden">
      {/* --- BACKGROUND ACCENTS --- (Konsisten dengan Hero) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-white border border-emerald-100 px-4 py-2 rounded-2xl shadow-sm text-emerald-700 text-xs font-black uppercase tracking-[0.2em] mb-6"
            >
              <Sparkles size={14} className="animate-pulse" /> Jejak Digital Santri
            </motion.div>

            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
              Eksplorasi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Aktivitas Kami</span>
            </motion.h2>
          </div>

          {/* Navigasi Modern */}
          <div className="flex gap-3">
            <button onClick={() => scroll('left')} className="p-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scroll('right')} className="p-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Gallery Slider */}
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 px-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {GALLERY_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // Lebar diatur agar pas 2 gambar di desktop (md:w-[calc(50%-12px)])
              className="relative flex-none w-[100%] md:w-[calc(50%-12px)] h-[350px] md:h-[450px] snap-center rounded-[2rem] overflow-hidden group border border-white/50 shadow-xl shadow-slate-200/50"
            >
              {/* Image */}
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

              {/* Overlay Glassmorphism - Lebih Tipis */}
              <div className="absolute inset-x-4 bottom-4 p-5 rounded-[1.5rem] bg-slate-900/40 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-emerald-300 text-[10px] font-bold uppercase tracking-widest">{item.category}</span>
                    <h3 className="text-white text-lg font-bold mt-0.5">{item.title}</h3>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/20 text-white">
                    <Expand size={18} />
                  </div>
                </div>
              </div>

              {/* Tag Kategori (Mobile & Default) */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm border border-slate-100 text-slate-800 text-[10px] font-bold uppercase shadow-sm">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 flex flex-col items-center">
          <button className="group px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-emerald-800 transition-all shadow-lg">
            <span className="flex items-center gap-3">
              Lihat Album Selengkapnya <Camera size={16} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

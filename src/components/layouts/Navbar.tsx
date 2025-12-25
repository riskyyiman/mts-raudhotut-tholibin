'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, SCHOOL_DATA } from '../../constants/data';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);

    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map((link) => link.href.replace('#', ''));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  return (
    <nav className={`fixed w-full top-0 left-0 transition-all duration-500 z-[100] ${isScrolled ? 'py-3' : 'py-6'}`}>
      <div className={`mx-auto transition-all duration-500 px-4 ${isScrolled ? 'max-w-5xl' : 'max-w-7xl'}`}>
        <div
          className={`relative flex items-center justify-between transition-all duration-500 px-6 py-3 ${
            isScrolled ? 'bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.06)] rounded-3xl' : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Logo Section */}
          <div className="flex items-center gap-4 cursor-pointer group" onClick={(e) => handleScroll(e, '#home')}>
            <div className="relative">
              <div className="w-11 h-11 bg-emerald-900 rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-all duration-500 shadow-xl shadow-emerald-900/20">
                <span className="text-white font-black text-xl">R</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-white animate-pulse" />
            </div>

            <div className="flex flex-col border-l border-slate-200 pl-4">
              <span className="font-black text-emerald-950 text-base md:text-lg tracking-tighter uppercase leading-none italic">MTs SA Raudhotut</span>
              {/* FRASA DIGANTI DI SINI */}
              <span className="text-[10px] text-emerald-600 font-black uppercase tracking-[0.3em] mt-1">Generasi Qur'ani</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center mr-6">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className={`relative px-5 py-2 text-[13px] font-black uppercase tracking-widest transition-all duration-300 ${isActive ? 'text-emerald-900' : 'text-slate-400 hover:text-emerald-700'}`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {isActive && <motion.div layoutId="navGlow" className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-600 rounded-full shadow-[0_0_10px_#10b981]" />}
                  </a>
                );
              })}
            </div>

            <button className="relative group overflow-hidden bg-emerald-900 text-white px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all hover:shadow-[0_15px_30px_rgba(6,78,59,0.2)]">
              <div className="absolute inset-0 w-full h-full bg-linear-to-r from-emerald-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative flex items-center gap-2">
                Daftar PPDB <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden w-11 h-11 flex items-center justify-center rounded-xl transition-all ${isScrolled ? 'bg-emerald-50 text-emerald-900' : 'bg-white/10 text-emerald-950 backdrop-blur-sm'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-emerald-950 shadow-2xl z-[110] md:hidden p-8 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-12 mt-12">
              <div className="flex justify-between items-center">
                <span className="text-emerald-400/50 font-black tracking-widest uppercase text-xs">Menu Navigasi</span>
                <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
                  <X size={32} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-3xl font-black text-white hover:text-emerald-400 transition-colors flex items-center gap-4 group"
                  >
                    <span className="text-xs text-emerald-500/40 group-hover:text-emerald-400">0{i + 1}</span>
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-emerald-900/40 p-6 rounded-[2rem] border border-white/5">
              <p className="text-emerald-200/60 text-sm mb-4 italic italic">Cerdas Beradab, Unggul Bermartabat</p>
              <button className="w-full bg-emerald-500 text-emerald-950 py-4 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2">
                Join PPDB 2025 <Sparkles size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

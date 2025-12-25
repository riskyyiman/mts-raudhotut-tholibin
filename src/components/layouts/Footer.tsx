import { SCHOOL_DATA } from '../../constants/data';
import { Facebook, Instagram, Youtube, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald-900 rounded-lg flex items-center justify-center text-white font-bold">R</div>
              <span className="font-bold text-xl text-emerald-950">{SCHOOL_DATA.name}</span>
            </div>
            <p className="text-slate-500 leading-relaxed max-w-sm mb-6">Membangun generasi emas yang berlandaskan nilai-nilai keislaman Aswaja dan teknologi modern untuk masa depan yang gemilang.</p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-emerald-900 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Tautan Cepat</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li>
                <a href="#" className="hover:text-emerald-700 transition-colors">
                  Profil Sekolah
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-700 transition-colors">
                  Tenaga Pendidik
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-700 transition-colors">
                  Ekstrakurikuler
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-700 transition-colors">
                  PPDB Online
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Kontak Kami</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-emerald-600" /> Kembaran, Banyumas
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="shrink-0 text-emerald-600" /> (0281) 123-4567
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="shrink-0 text-emerald-600" /> info@mts-sa.sch.id
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 text-center">
          <p className="text-xs text-slate-400 font-medium">© {new Date().getFullYear()} MTs SA Raudhotut Tholibin Kembaran. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

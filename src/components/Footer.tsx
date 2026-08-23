import React from 'react';
import { Instagram, MessageCircle, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#191613] text-[#E8DFD5] pt-14 pb-10 border-t border-[#2E2820]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2E2820]">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-[#191613] flex items-center justify-center font-serif text-xl font-bold">
                Z
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold tracking-wider text-white">
                  zeyneb_moda_evi
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-[#B38728]">
                  Fərdi Tikiliş & Libas Atelyesi
                </p>
              </div>
            </div>

            <p className="text-xs text-[#A89D8E] leading-relaxed max-w-sm">
              Fərdi tikiliş, unikal zövq. Hər bir xanımın xüsusi günlərdə parlaması üçün ən yüksək keyfiyyətli parçalar və usta əllər ilə hazırlanan libaslar.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/zeyneb_moda_evi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#29241E] hover:bg-[#D4AF37] text-white hover:text-[#191613] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/994501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#29241E] hover:bg-[#25D366] text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:+994501234567"
                className="w-9 h-9 rounded-full bg-[#29241E] hover:bg-[#D4AF37] text-white hover:text-[#191613] flex items-center justify-center transition-colors"
                aria-label="Zəng"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Bölmələr
            </h4>
            <ul className="space-y-2 text-xs text-[#A89D8E]">
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">
                  Libas Kataloqu
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Fərdi Tikiliş Prosesi
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Haqqımızda & Atelye
                </a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-white transition-colors">
                  Instagram Vitrini
                </a>
              </li>
              <li>
                <a href="#order" className="hover:text-white transition-colors">
                  WhatsApp ilə Sifariş
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Location */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Əlaqə & Ünvan
            </h4>
            <div className="space-y-2 text-xs text-[#A89D8E]">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>+994 (50) 123 45 67</span>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>@zeyneb_moda_evi</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <span>Bakı şəhəri, Azərbaycan</span>
              </p>
              <p className="text-[11px] text-[#7A7062] pt-1">
                İş vaxtı: Hər gün 10:00 – 19:00 (Öncədən qeydiyyatla)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A7062]">
          <p>© {new Date().getFullYear()} zeyneb_moda_evi. Bütün hüquqlar qorunur.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-xs"
          >
            <span>Yuxarı Qayıt</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

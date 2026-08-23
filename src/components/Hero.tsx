import React from 'react';
import { ArrowRight, Sparkles, MessageCircle, Scissors, Award, HeartHandshake } from 'lucide-react';
import { paltar1Img, sonZengVecerImg } from '../data/catalog';
import { handleImageError } from '../lib/imageUtils';

interface HeroProps {
  onExploreCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCatalog }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#EBDDCB]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 md:space-y-7 text-center lg:text-left">
            {/* Tagline pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE7DA] border border-[#DDD0BC] text-[#8C6D28] text-xs font-semibold uppercase tracking-wider mx-auto lg:mx-0 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B38728]" />
              <span>Fərdi Dərzilik & Couture Libaslar</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#1F1B16] leading-[1.15]">
              Fərdi tikiliş, <br className="hidden sm:block" />
              <span className="italic font-medium text-[#99732B]">unikal zövq.</span>
            </h1>

            {/* Azerbaijani Subtitle */}
            <p className="text-base sm:text-lg text-[#5C5449] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Zeyneb Moda Evi ilə hər bir qadın özünəxas zərifliyə qovuşur. 
              Ziyafət, son zəng və toy mərasimləri üçün yalnız sizin bədən ölçülərinizə uyğun, qüsursuz əl işi libaslar.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                id="hero-explore-catalog-btn"
                onClick={onExploreCatalog}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1F1B16] hover:bg-[#332D24] text-white font-medium text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>Kataloqa Bax</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                id="hero-whatsapp-btn"
                href="https://wa.me/994557799450?text=Salam%2C%20Zeyneb%20Moda%20Evi%2C%20f%C9%99rdi%20libas%20tikili%C5%9Fi%20%C3%BC%C3%A7%C3%BCn%20m%C9%99sl%C9%99h%C9%99tl%C9%99%C5%9Fm%C9%99k%20ist%C9%99yir%C9%99m."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#F4EFE6] hover:bg-[#EAE2D5] text-[#24211D] font-medium text-sm border border-[#DCD1BF] transition-all flex items-center justify-center gap-2 shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp ilə Sifariş Et</span>
              </a>
            </div>

            {/* Value Props Row */}
            <div className="pt-6 border-t border-[#E8DFD5] grid grid-cols-3 gap-3 text-left">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <div className="p-2 rounded-lg bg-[#EFE8DC] text-[#99732B]">
                  <Scissors className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1F1B16]">100% Fərdi Ölçü</h4>
                  <p className="text-[11px] text-[#7A7062]">Qüsursuz oturuş</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <div className="p-2 rounded-lg bg-[#EFE8DC] text-[#99732B]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1F1B16]">Premium Parçalar</h4>
                  <p className="text-[11px] text-[#7A7062]">İpək, saten, jakard</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <div className="p-2 rounded-lg bg-[#EFE8DC] text-[#99732B]">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1F1B16]">Dəqiq Təhvil</h4>
                  <p className="text-[11px] text-[#7A7062]">3 - 7 gün ərzində</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Image Showcase */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Decorative Frame */}
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Gold border backdrop */}
              <div className="absolute -inset-2 rounded-3xl border border-[#D4AF37]/30 transform rotate-1 pointer-events-none" />

              {/* Main Featured Photo Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#EBE4D8] border border-[#DDD3C2] aspect-[3/4]">
                <img
                  src={paltar1Img}
                  alt="Zeyneb Moda Evi Eksklüziv Ziyafət Libası"
                  className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-700"
                  onError={(e) => handleImageError(e, paltar1Img, 'Eksklüziv Ziyafət Libası')}
                />

                {/* Subtle Gradient Overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1612]/80 via-transparent to-transparent" />

                {/* Card Floating Pill Info */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center justify-between mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#1F1B16] text-[11px] font-bold uppercase tracking-wider">
                      Fərdi Sifariş
                    </span>
                    <span className="text-xs text-[#EAE2D5] font-serif italic">
                      #zeyneb_moda_evi
                    </span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold tracking-wide">
                    Eksklüziv Ziyafət Libası
                  </h3>
                  <p className="text-xs text-[#DDD3C2] mt-0.5">
                    Xüsusi bədən xətlərinə uyğun fərdi tikiliş don
                  </p>
                </div>
              </div>

              {/* Secondary Floating Mini Card */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#E8DFD5] items-center gap-3 max-w-[220px]">
                <img
                  src={sonZengVecerImg}
                  alt="Son Zəng Veçer Libası"
                  className="w-14 h-16 rounded-xl object-cover"
                  onError={(e) => handleImageError(e, sonZengVecerImg, 'Son Zəng Veçer Libası')}
                />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[#99732B] uppercase tracking-wider">
                    Son Zəng & Məzun
                  </span>
                  <span className="text-xs font-semibold text-[#1F1B16]">
                    Veçer Gecəsi Libası
                  </span>
                  <span className="text-[10px] text-[#7A7062] mt-0.5">
                    ★★★★★ 5.0 Rəy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { sonZengTikimImg } from '../data/catalog';
import { Scissors, Ruler, Sparkles, CheckCircle2, MessageCircle, Clock, Shield } from 'lucide-react';
import { handleImageError } from '../lib/imageUtils';

export const TailoringProcess: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Model Seçimi & Məsləhət',
      description: 'Kataloqumuzdan bəyəndiyiniz modeli seçirsiniz və ya öz xəyalınızdakı donun şəklini bizimlə bölüşürsünüz. Sizə ən uyğun siluet təyin edilir.',
      icon: Sparkles,
    },
    {
      number: '02',
      title: 'Dəqiq Fərdi Ölçü',
      description: 'Atelyemizdə peşəkar dərzimiz tərəfindən bədən xətlərinizə uyğun tam dəqiq ölçü götürülür (və ya video-bələdçi ilə onlayn qeyd olunur).',
      icon: Ruler,
    },
    {
      number: '03',
      title: 'Premium Parça & Bəzək',
      description: 'İtaliya və Türkiyə istehsalı ipək, krep-saten, jakard parçalar və əl işi mirvari, svarovski bəzəklər seçilir.',
      icon: Scissors,
    },
    {
      number: '04',
      title: 'Qüsursuz Tikiliş & Təhvil',
      description: 'Hər bir tikiş xüsusi həssaslıqla tamamlanır. Libasınız 3-7 iş günü ərzində tam hazır vəziyyətdə sizə təhvil verilir.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-[#F5EFE6] border-y border-[#E5DBCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About & Craft Intro */}
        <div id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 md:mb-20">
          {/* Visual Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#DCD1BF] bg-[#ECE4D8]">
              <img
                src={sonZengTikimImg}
                alt="Zeyneb Moda Evi Dərzi Əl İşi və Sənətkarlıq"
                className="w-full h-auto object-cover aspect-[4/3]"
                onError={(e) => handleImageError(e, sonZengTikimImg, 'Zeyneb Moda Evi Dərzi Əl İşi')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B16]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
                  Atelier Craftsmanship
                </span>
                <h4 className="font-serif text-base sm:text-lg font-bold">
                  Hər Bir Tikişdə Sevgi və Zəriflik
                </h4>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-[#1F1B16] text-white p-4 rounded-2xl shadow-xl border border-[#D4AF37]/30 max-w-[200px]">
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl font-bold text-[#D4AF37]">100%</span>
                <div className="text-[11px] leading-tight text-[#E8DFD5]">
                  Fərdi Bədənə Uyğunlaşma
                </div>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE0D1] text-[#8C6D28] text-xs font-semibold uppercase tracking-wider">
              <Scissors className="w-3.5 h-3.5 text-[#B38728]" />
              <span>Haqqımızda & Dərzilik Sənəti</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1F1B16] tracking-tight">
              Zeyneb Moda Evi: <br />
              <span className="italic font-medium text-[#99732B]">Zərifliyinizin Fərdi Ünvanı</span>
            </h2>

            <p className="text-sm sm:text-base text-[#5C5449] leading-relaxed">
              Zeyneb Moda Evi olaraq biz sadəcə paltar tikmirik; hər bir xanımın fərdi gözəlliyini, zövqünü və duruşunu ön plana çıxaran unikal sənət əsərləri yaradırıq. 
            </p>

            <p className="text-sm text-[#6B6154] leading-relaxed">
              İstər həyatınızın ən əlamətdar günü olan <strong>Son Zəng məzuniyyəti</strong>, istər təntənəli <strong>toy və nişan mərasimləri</strong>, istərsə də zərif <strong>ziyafət gecələri</strong> üçün xüsusi sifarişlə tikilən libaslarımızla hər zaman diqqət mərkəzində olacaqsınız.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-[#383228]">
              <div className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-lg border border-[#DDD0BD]">
                <Clock className="w-4 h-4 text-[#99732B]" />
                <span>Vaxtında və Dəqiq Təhvil</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-lg border border-[#DDD0BD]">
                <Shield className="w-4 h-4 text-[#99732B]" />
                <span>Qüsursuz Oturuş Zəmanəti</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Steps Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#99732B]">
            Sadə & Şəffaf Mərhələlər
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1B16]">
            Fərdi Tikiliş Prosesi Necə Gedir?
          </h3>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E3D9CC] shadow-2xs hover:shadow-md transition-all space-y-3 relative group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl font-bold text-[#D4AF37]/70 group-hover:text-[#99732B] transition-colors">
                    {step.number}
                  </span>
                  <div className="p-2 rounded-xl bg-[#EFE8DC] text-[#1F1B16] group-hover:bg-[#1F1B16] group-hover:text-[#D4AF37] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="font-serif text-base font-bold text-[#1F1B16]">
                  {step.title}
                </h4>

                <p className="text-xs text-[#6B6154] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quick Consultation CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/994501234567?text=Salam%2C%20Zeyneb%20Moda%20Evi%2C%20f%C9%99rdi%20model%20tikili%C5%9Fi%20%C3%BC%C3%A7%C3%BCn%20konsultasiya%20almaq%20ist%C9%99yir%C9%99m."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1F1B16] hover:bg-[#332D24] text-white text-xs font-semibold tracking-wide shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Ölçü və Model Üçün WhatsApp ilə Məsləhətləşin</span>
          </a>
        </div>
      </div>
    </section>
  );
};

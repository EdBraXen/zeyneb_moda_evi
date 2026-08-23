import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, Clock, Send, Sparkles, CheckCircle, Calendar, Scissors, HelpCircle } from 'lucide-react';
import { DRESS_CATALOG } from '../data/catalog';

export const WhatsAppOrderSection: React.FC = () => {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [occasionType, setOccasionType] = useState('Ziyafət / Toy');
  const [selectedDress, setSelectedDress] = useState('Səma Mavisi İpək Atlas Ziyafət Libası');
  const [eventDate, setEventDate] = useState('');
  const [customNote, setCustomNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `Salam Zeyneb Moda Evi! Fərdi tikiliş sifarişi vermək istəyirəm:
👤 Ad: ${clientName || 'Qeyd olunmayıb'}
📱 Nömrə: ${clientPhone || 'Qeyd olunmayıb'}
👗 Model: ${selectedDress}
🎉 Tədbir növü: ${occasionType}
📅 Tədbir tarixi: ${eventDate || 'Yaxın günlərdə'}
📝 Əlavə qeydlər: ${customNote || 'Standart fərdi ölçü ilə'}`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/994501234567?text=${encodedMsg}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <section id="order" className="py-16 md:py-24 bg-[#F5EFE6] border-t border-[#E5DBCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column - Atelier Info & Direct Contact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE0D1] text-[#8C6D28] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#B38728]" />
              <span>Əlaqə & Sifariş</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1F1B16] tracking-tight">
              Xəyalınızdakı Libası <br />
              <span className="italic font-medium text-[#99732B]">Birlikdə Yaradaq</span>
            </h2>

            <p className="text-sm sm:text-base text-[#5C5449] leading-relaxed">
              Ölçü götürülməsi, parça seçimi və ya qiymət təyini üçün formu dolduraraq birbaşa WhatsApp ilə əlaqə qura bilərsiniz.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E3D9CC]">
                <div className="p-2.5 rounded-xl bg-[#EFE8DC] text-[#99732B] flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1F1B16]">Telefon & WhatsApp</h4>
                  <a
                    href="tel:+994501234567"
                    className="text-xs text-[#5C5449] hover:text-[#99732B] font-medium block mt-0.5"
                  >
                    +994 (50) 123 45 67
                  </a>
                  <span className="text-[11px] text-[#8C8070]">7/24 WhatsApp mesajlarına cavab verilir</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E3D9CC]">
                <div className="p-2.5 rounded-xl bg-[#EFE8DC] text-[#99732B] flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1F1B16]">Atelye Ünvanı</h4>
                  <p className="text-xs text-[#5C5449] mt-0.5">
                    Bakı şəhəri, Nəsimi rayonu (Ölçü götürmə üçün əvvəlcədən yazılmaq tövsiyə olunur)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E3D9CC]">
                <div className="p-2.5 rounded-xl bg-[#EFE8DC] text-[#99732B] flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1F1B16]">İş Saatları</h4>
                  <p className="text-xs text-[#5C5449] mt-0.5">
                    Bazar ertəsi – Şənbə: 10:00 – 19:00
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Quick WhatsApp Button */}
            <div className="pt-2">
              <a
                id="direct-quick-whatsapp-link"
                href="https://wa.me/994501234567?text=Salam%2C%20Zeyneb%20Moda%20Evi%2C%20f%C9%99rdi%20tikili%C5%9F%20sifari%C5%9Fi%20haqq%C4%B1nda%20yaz%C4%B1ram."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-semibold shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Formsuz Birbaşa WhatsApp-da Yazın</span>
              </a>
            </div>
          </div>

          {/* Right Column - Interactive Order / Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-3xl border border-[#E3D9CC] shadow-lg">
              <div className="border-b border-[#E8DFD5] pb-4 mb-6">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F1B16]">
                  WhatsApp ilə Sifariş & Ölçü Qeydiyyatı
                </h3>
                <p className="text-xs text-[#706454] mt-1">
                  Məlumatları daxil edin, düyməyə basdıqda avtomatik tərtib edilmiş WhatsApp mesajı açılacaq.
                </p>
              </div>

              <form onSubmit={handleSendToWhatsApp} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#383228] block">
                      Adınız və Soyadınız
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Məs: Aysel Məmmədova"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD3C2] text-xs text-[#1F1B16] focus:outline-hidden focus:ring-1 focus:ring-[#99732B]"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#383228] block">
                      Əlaqə Nömrəsi (WhatsApp)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Məs: +994 50 123 45 67"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD3C2] text-xs text-[#1F1B16] focus:outline-hidden focus:ring-1 focus:ring-[#99732B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Model Choice */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#383228] block">
                      Bəyəndiyiniz Model
                    </label>
                    <select
                      value={selectedDress}
                      onChange={(e) => setSelectedDress(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD3C2] text-xs text-[#1F1B16] focus:outline-hidden focus:ring-1 focus:ring-[#99732B]"
                    >
                      {DRESS_CATALOG.map((d) => (
                        <option key={d.id} value={d.title}>
                          {d.title}
                        </option>
                      ))}
                      <option value="Öz Eskizim / Şəkilli Fərdi Model">
                        ✨ Öz Eskizim / Şəkilli Fərdi Model
                      </option>
                    </select>
                  </div>

                  {/* Occasion Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#383228] block">
                      Tədbir Növü
                    </label>
                    <select
                      value={occasionType}
                      onChange={(e) => setOccasionType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD3C2] text-xs text-[#1F1B16] focus:outline-hidden focus:ring-1 focus:ring-[#99732B]"
                    >
                      <option value="Ziyafət / Toy Mərasimi">Ziyafət / Toy Mərasimi</option>
                      <option value="Son Zəng & Məzuniyyət Balı">Son Zəng & Məzuniyyət Balı</option>
                      <option value="Nişan & Xına">Nişan & Xına</option>
                      <option value="Ad Günü & Fotosessiya">Ad Günü & Fotosessiya</option>
                      <option value="Gündəlik Şıq Libas">Gündəlik Şıq Libas</option>
                    </select>
                  </div>
                </div>

                {/* Event Date */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#383228] block">
                    Tədbirin Tarixi (Libasın hazır olma vaxtı)
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD3C2] text-xs text-[#1F1B16] focus:outline-hidden focus:ring-1 focus:ring-[#99732B]"
                  />
                </div>

                {/* Custom Note / Measurements */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#383228] block">
                    Xüsusi İstəklər və ya Bədən Ölçüləri
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Məsələn: Yarığın hündürlüyü, qol forması və ya rəng seçimi haqqında istəkləriniz..."
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD3C2] text-xs text-[#1F1B16] focus:outline-hidden focus:ring-1 focus:ring-[#99732B]"
                  />
                </div>

                {/* Submit button */}
                <button
                  id="submit-whatsapp-order-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-full bg-[#1F1B16] hover:bg-[#332D24] text-white text-sm font-semibold tracking-wide flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>
                    {isSubmitting ? 'WhatsApp Açılır...' : 'WhatsApp ilə Sifariş Et / Əlaqə'}
                  </span>
                </button>

                <p className="text-[11px] text-center text-[#7A7062] pt-1">
                  🔒 Məlumatlarınız məxfi saxlanılır və yalnız sifarişin dəqiqləşdirilməsi üçün istifadə olunur.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

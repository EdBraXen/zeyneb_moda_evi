import React, { useState } from 'react';
import { DressItem } from '../types';
import { X, MessageCircle, Heart, Sparkles, Scissors, Clock, Layers, ShieldCheck, Check, Share2 } from 'lucide-react';
import { handleImageError } from '../lib/imageUtils';

interface DressDetailModalProps {
  dress: DressItem | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const DressDetailModal: React.FC<DressDetailModalProps> = ({
  dress,
  onClose,
  isFavorite,
  onToggleFavorite,
}) => {
  const [copied, setCopied] = useState(false);
  const [selectedBodyFit, setSelectedBodyFit] = useState<'standard' | 'custom'>('custom');

  if (!dress) return null;

  const whatsappMessage = encodeURIComponent(
    `Salam, Zeyneb Moda Evi! Kataloqunuzdakı "${dress.title}" modeli haqqında fərdi tikiliş sifarişi vermək istəyirəm. (Kategoriya: ${dress.categoryLabel}, Parça: ${dress.details.fabric})`
  );

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      id="dress-detail-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="dress-detail-modal-card"
        className="relative w-full max-w-4xl bg-[#FAF7F2] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#E8DFD5] my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-[#1F1B16] backdrop-blur-md shadow-md transition-colors cursor-pointer"
          aria-label="Bağla"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[88vh] overflow-y-auto md:max-h-none">
          {/* Left Column - Big Portrait Photo */}
          <div className="md:col-span-6 relative bg-[#EFE9DE] aspect-[3/4] md:aspect-auto md:min-h-[520px]">
            <img
              src={dress.image}
              alt={dress.title}
              className="w-full h-full object-cover object-center"
              onError={(e) => handleImageError(e, dress.image)}
            />
            {/* Tag Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-[#1F1B16]/90 backdrop-blur-md text-[#D4AF37] text-xs font-semibold uppercase tracking-wider border border-[#D4AF37]/30">
                {dress.tag}
              </span>
            </div>

            {/* Favorite toggle on image */}
            <button
              onClick={() => onToggleFavorite(dress.id)}
              className={`absolute bottom-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-all shadow-md ${
                isFavorite
                  ? 'bg-rose-500 text-white'
                  : 'bg-white/80 hover:bg-white text-[#1F1B16]'
              }`}
              aria-label="Bəyən"
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Right Column - Luxury Specifications & WhatsApp Order */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category & Title */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#99732B]">
                  {dress.categoryLabel}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1B16] mt-1 leading-snug">
                  {dress.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-sm text-[#5C5449] leading-relaxed">
                {dress.description}
              </p>

              {/* Tailoring Specs Grid */}
              <div className="bg-[#F2ECE3] rounded-2xl p-4 space-y-3 border border-[#E3D9CC]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#706454] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#B38728]" />
                  <span>Fərdi Dərzilik Detalları</span>
                </h3>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[#8C8070] block text-[11px]">Parça növü:</span>
                    <span className="font-medium text-[#1F1B16]">{dress.details.fabric}</span>
                  </div>
                  <div>
                    <span className="text-[#8C8070] block text-[11px]">Siluet & Kəsim:</span>
                    <span className="font-medium text-[#1F1B16]">{dress.details.silhouette}</span>
                  </div>
                  {dress.details.embellishment && (
                    <div>
                      <span className="text-[#8C8070] block text-[11px]">Bəzək & İşləmə:</span>
                      <span className="font-medium text-[#1F1B16]">{dress.details.embellishment}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-[#8C8070] block text-[11px]">Hazırlanma müddəti:</span>
                    <span className="font-medium text-[#1F1B16] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#B38728]" />
                      {dress.details.tailoringTime}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#DCD0BF]/70 flex items-center gap-1.5 text-[11px] text-[#635747]">
                  <ShieldCheck className="w-4 h-4 text-[#B38728] flex-shrink-0" />
                  <span>Sizin fərdi bədən ölçülərinizlə 100% dəqiq tikilir.</span>
                </div>
              </div>

              {/* Tailoring Type Selector */}
              <div className="space-y-1.5">
                <span className="text-xs font-medium text-[#635747]">Ölçü Seçimi:</span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedBodyFit('custom')}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border text-left transition-all ${
                      selectedBodyFit === 'custom'
                        ? 'bg-[#1F1B16] text-white border-[#1F1B16] shadow-2xs'
                        : 'bg-white text-[#4A443B] border-[#DDD3C2] hover:bg-[#F2ECE3]'
                    }`}
                  >
                    <span className="block font-semibold">Fərdi Ölçü Götürmə</span>
                    <span className="text-[10px] opacity-80">Atelyedə və ya onlayn</span>
                  </button>
                  <button
                    onClick={() => setSelectedBodyFit('standard')}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border text-left transition-all ${
                      selectedBodyFit === 'standard'
                        ? 'bg-[#1F1B16] text-white border-[#1F1B16] shadow-2xs'
                        : 'bg-white text-[#4A443B] border-[#DDD3C2] hover:bg-[#F2ECE3]'
                    }`}
                  >
                    <span className="block font-semibold">Standart Ölçü (34-44)</span>
                    <span className="text-[10px] opacity-80">XS, S, M, L, XL</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="space-y-2.5 pt-2 border-t border-[#E8DFD5]">
              <a
                id="modal-order-whatsapp-btn"
                href={`https://wa.me/994501234567?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-full bg-[#1F1B16] hover:bg-[#332D24] text-white font-medium text-sm flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Bu Libası WhatsApp ilə Sifariş Et</span>
              </a>

              <div className="flex items-center justify-between text-xs text-[#7A7062] px-2">
                <span className="flex items-center gap-1">
                  <Scissors className="w-3.5 h-3.5 text-[#B38728]" />
                  Atelye: Bakı şəhəri
                </span>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1 hover:text-[#1F1B16] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Link kopyalandı</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Paylaş</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

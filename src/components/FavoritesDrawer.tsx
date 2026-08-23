import React from 'react';
import { DressItem } from '../types';
import { X, MessageCircle, Trash2, ArrowRight } from 'lucide-react';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: string[];
  allDresses: DressItem[];
  onRemoveFavorite: (id: string) => void;
  onSelectDress: (dress: DressItem) => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favorites,
  allDresses,
  onRemoveFavorite,
  onSelectDress,
}) => {
  if (!isOpen) return null;

  const favoriteDresses = allDresses.filter((d) => favorites.includes(d.id));

  const handleOrderAllFavorites = () => {
    const dressNames = favoriteDresses.map((d) => `• ${d.title}`).join('\n');
    const msg = encodeURIComponent(
      `Salam Zeyneb Moda Evi! Kataloqunuzda bəyəndiyim bu libaslar haqqında fərdi tikiliş üçün məlumat almaq istəyirəm:\n${dressNames}`
    );
    window.open(`https://wa.me/994501234567?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-md bg-[#FAF7F2] h-full shadow-2xl flex flex-col justify-between border-l border-[#E8DFD5] animate-in slide-in-from-right duration-200">
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#E8DFD5] flex items-center justify-between">
          <div>
            <h3 className="font-serif text-lg font-bold text-[#1F1B16]">
              Bəyəndiyiniz Libaslar ({favoriteDresses.length})
            </h3>
            <p className="text-xs text-[#7A7062]">
              Seçdiyiniz modelləri birbaşa WhatsApp ilə sifariş edə bilərsiniz
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#EFE8DC] text-[#1F1B16] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dress List */}
        <div className="p-5 overflow-y-auto flex-1 space-y-3.5">
          {favoriteDresses.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#EFE8DC] text-[#99732B] flex items-center justify-center mx-auto text-xl">
                ♡
              </div>
              <h4 className="font-serif text-base font-bold text-[#1F1B16]">
                Hələ heç bir libas bəyənilməyib
              </h4>
              <p className="text-xs text-[#7A7062] max-w-xs mx-auto">
                Kataloqda libasların üzərindəki ürək işarəsinə klikləyərək bura əlavə edə bilərsiniz.
              </p>
            </div>
          ) : (
            favoriteDresses.map((dress) => (
              <div
                key={dress.id}
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-[#E3D9CC] shadow-2xs"
              >
                <img
                  src={dress.image}
                  alt={dress.title}
                  className="w-16 h-20 rounded-xl object-cover flex-shrink-0 cursor-pointer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.tried) {
                      target.dataset.tried = 'true';
                      target.src = dress.image.startsWith('/') ? dress.image : `/${dress.image.split('/').pop()}`;
                    }
                  }}
                  onClick={() => {
                    onSelectDress(dress);
                    onClose();
                  }}
                />

                <div className="flex-1 min-w-0 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#99732B] block">
                    {dress.categoryLabel}
                  </span>
                  <h5
                    onClick={() => {
                      onSelectDress(dress);
                      onClose();
                    }}
                    className="text-xs font-bold text-[#1F1B16] truncate cursor-pointer hover:text-[#99732B]"
                  >
                    {dress.title}
                  </h5>
                  <p className="text-[11px] text-[#7A7062]">
                    ⏱ {dress.details.tailoringTime}
                  </p>
                </div>

                <button
                  onClick={() => onRemoveFavorite(dress.id)}
                  className="p-2 text-[#A89D8E] hover:text-rose-600 transition-colors"
                  title="Sil"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Bottom CTA */}
        {favoriteDresses.length > 0 && (
          <div className="p-5 border-t border-[#E8DFD5] bg-[#F4EFE6] space-y-2.5">
            <button
              onClick={handleOrderAllFavorites}
              className="w-full py-3.5 px-4 rounded-full bg-[#1F1B16] hover:bg-[#332D24] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Bütün Seçilənləri WhatsApp-da Soruş</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

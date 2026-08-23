import React, { useState, useMemo } from 'react';
import { DressItem, DressCategory } from '../types';
import { DressDetailModal } from './DressDetailModal';
import { Heart, Search, Eye, MessageCircle, Sparkles, Filter, SlidersHorizontal } from 'lucide-react';

interface CatalogSectionProps {
  items: DressItem[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  showOnlyFavorites?: boolean;
  onClearFavoritesFilter?: () => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  items,
  favorites,
  onToggleFavorite,
  showOnlyFavorites = false,
  onClearFavoritesFilter,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<DressCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalDress, setActiveModalDress] = useState<DressItem | null>(null);

  const categories: { id: DressCategory; label: string }[] = [
    { id: 'all', label: 'Bütün Libaslar' },
    { id: 'ziyafet', label: 'Ziyafət paltarları' },
    { id: 'gundelik_merasim', label: 'Gündəlik & Mərasim' },
    { id: 'ozel_dikim', label: 'Özəl dikim' },
  ];

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Favorite filter
      if (showOnlyFavorites && !favorites.includes(item.id)) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query);
        const matchFabric = item.details.fabric.toLowerCase().includes(query);
        const matchTag = item.tag.toLowerCase().includes(query);
        const matchOccasion = item.details.occasion.toLowerCase().includes(query);
        return matchTitle || matchDesc || matchFabric || matchTag || matchOccasion;
      }
      return true;
    });
  }, [items, selectedCategory, searchQuery, showOnlyFavorites, favorites]);

  return (
    <section id="catalog" className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE7DA] text-[#8C6D28] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#B38728]" />
            <span>Kolleksiya & Kataloq</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1F1B16] tracking-tight">
            Tikilmiş Libaslar və <span className="italic font-medium text-[#99732B]">Fərdi Modellər</span>
          </h2>

          <p className="text-sm sm:text-base text-[#6B6154] font-normal leading-relaxed">
            Hər bir libas atelyemizdə xüsusi zövq və yüksək dəqiqliklə tikilir. Bəyəndiyiniz modeli seçin və ya öz istəyinizə uyğun dəyişikliklərlə sifariş edin.
          </p>
        </div>

        {/* Filters & Search Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#F4EFE6] p-3 sm:p-4 rounded-2xl border border-[#E3D9CC]">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  if (showOnlyFavorites && onClearFavoritesFilter) {
                    onClearFavoritesFilter();
                  }
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id && !showOnlyFavorites
                    ? 'bg-[#1F1B16] text-white shadow-xs font-semibold'
                    : 'bg-white text-[#52493E] hover:bg-[#EBE3D7] border border-[#DDD3C2]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8C8070] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Model, parça və ya kəsim axtar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9.5 pr-4 py-2 rounded-full bg-white border border-[#DDD3C2] text-xs text-[#1F1B16] placeholder:text-[#9E9485] focus:outline-hidden focus:ring-1 focus:ring-[#99732B] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C8070] hover:text-[#1F1B16]"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Active Filter Notice if Favorites Only */}
        {showOnlyFavorites && (
          <div className="mb-6 flex items-center justify-between p-3 rounded-xl bg-[#EFE8DC] text-xs text-[#4A4235] border border-[#DDD3C2]">
            <span className="flex items-center gap-1.5 font-medium">
              <Heart className="w-4 h-4 text-rose-500 fill-current" />
              Yalnız sizin bəyəndiyiniz libaslar göstərilir ({favorites.length} model)
            </span>
            {onClearFavoritesFilter && (
              <button
                onClick={onClearFavoritesFilter}
                className="font-semibold underline hover:text-[#1F1B16] cursor-pointer"
              >
                Bütün kataloqa qayıt
              </button>
            )}
          </div>
        )}

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#F5F0E8] rounded-3xl border border-[#E8DFD5] space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#E5DDD0] text-[#7A7062] flex items-center justify-center mx-auto">
              <Filter className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1F1B16]">
              Axtarışa uyğun libas tapılmadı
            </h3>
            <p className="text-xs text-[#6B6154] max-w-sm mx-auto">
              Zəhmət olmasa başqa kateqoriya və ya açar söz sınayın, yaxud istədiyiniz modelin şəklini birbaşa WhatsApp ilə bizə göndərin.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                if (onClearFavoritesFilter) onClearFavoritesFilter();
              }}
              className="px-4 py-2 rounded-full bg-[#1F1B16] text-white text-xs font-medium hover:bg-[#332D24] transition-colors"
            >
              Filtrləri Sıfırla
            </button>
          </div>
        )}

        {/* Portfolio & Catalog Grid (Instagram Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((dress) => {
            const isFav = favorites.includes(dress.id);
            const dressWhatsAppMsg = encodeURIComponent(
              `Salam Zeyneb Moda Evi, kataloqunuzdakı "${dress.title}" modeli haqqında fərdi tikiliş sifarişi vermək istəyirəm.`
            );

            return (
              <div
                key={dress.id}
                id={`catalog-item-${dress.id}`}
                className="group relative bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#E3D9CC] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Photo Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#ECE4D8] cursor-pointer"
                  onClick={() => setActiveModalDress(dress)}
                >
                  <img
                    src={dress.image}
                    alt={dress.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-[#1F1B16]/85 backdrop-blur-md text-[#D4AF37] text-[11px] font-semibold tracking-wider border border-[#D4AF37]/30 shadow-xs">
                      {dress.tag}
                    </span>
                  </div>

                  {/* Top Right Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(dress.id);
                    }}
                    className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-all shadow-xs ${
                      isFav
                        ? 'bg-rose-500 text-white'
                        : 'bg-white/80 hover:bg-white text-[#1F1B16]'
                    }`}
                    aria-label="Bəyənilənlərə əlavə et"
                  >
                    <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                  </button>

                  {/* Hover Overlay with Quick View Button */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B16]/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalDress(dress);
                      }}
                      className="px-4 py-2.5 rounded-full bg-white/95 hover:bg-white text-[#1F1B16] text-xs font-semibold tracking-wide flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform cursor-pointer"
                    >
                      <Eye className="w-4 h-4 text-[#99732B]" />
                      <span>Detallı Bax</span>
                    </button>
                  </div>
                </div>

                {/* Content Card Body */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 space-y-3.5">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#99732B]">
                        {dress.categoryLabel}
                      </span>
                      <span className="text-[11px] text-[#7A7062] font-medium">
                        {dress.details.tailoringTime}
                      </span>
                    </div>

                    <h3
                      onClick={() => setActiveModalDress(dress)}
                      className="font-serif text-lg font-bold text-[#1F1B16] hover:text-[#99732B] transition-colors cursor-pointer line-clamp-1"
                    >
                      {dress.title}
                    </h3>

                    <p className="text-xs text-[#6B6154] line-clamp-2 leading-relaxed">
                      {dress.description}
                    </p>
                  </div>

                  {/* Fabric / Silhouette tag */}
                  <div className="pt-2 border-t border-[#EAE1D4] flex items-center justify-between text-[11px] text-[#706454]">
                    <span className="truncate max-w-[170px]" title={dress.details.fabric}>
                      🪡 {dress.details.fabric}
                    </span>
                    <span className="text-[#8C8070]">Fərdi Tikiliş</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => setActiveModalDress(dress)}
                      className="py-2.5 px-3 rounded-xl bg-[#EFE8DC] hover:bg-[#E5DCCF] text-[#24211D] text-xs font-medium text-center transition-colors cursor-pointer"
                    >
                      İncələ
                    </button>

                    <a
                      href={`https://wa.me/994501234567?text=${dressWhatsAppMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-[#1F1B16] hover:bg-[#332D24] text-white text-xs font-medium text-center flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Sifariş Et</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dress Detail Modal */}
      <DressDetailModal
        dress={activeModalDress}
        onClose={() => setActiveModalDress(null)}
        isFavorite={activeModalDress ? favorites.includes(activeModalDress.id) : false}
        onToggleFavorite={onToggleFavorite}
      />
    </section>
  );
};

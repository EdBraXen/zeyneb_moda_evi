import React, { useState, useEffect } from 'react';
import { StoryHighlight } from '../types';
import { X, ChevronLeft, ChevronRight, MessageCircle, Instagram } from 'lucide-react';

interface StoryHighlightsProps {
  highlights: StoryHighlight[];
}

export const StoryHighlights: React.FC<StoryHighlightsProps> = ({ highlights }) => {
  const [activeStory, setActiveStory] = useState<StoryHighlight | null>(null);
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  // Auto-advance story timer when open
  useEffect(() => {
    if (!activeStory) return;

    const timer = setTimeout(() => {
      if (activeItemIndex < activeStory.items.length - 1) {
        setActiveItemIndex((prev) => prev + 1);
      } else {
        // Move to next story highlight or close
        const currentStoryIndex = highlights.findIndex((h) => h.id === activeStory.id);
        if (currentStoryIndex < highlights.length - 1) {
          setActiveStory(highlights[currentStoryIndex + 1]);
          setActiveItemIndex(0);
        } else {
          setActiveStory(null);
        }
      }
    }, 4500);

    return () => clearTimeout(timer);
  }, [activeStory, activeItemIndex, highlights]);

  const handleOpenStory = (story: StoryHighlight) => {
    setActiveStory(story);
    setActiveItemIndex(0);
  };

  const handlePrevItem = () => {
    if (activeItemIndex > 0) {
      setActiveItemIndex((prev) => prev - 1);
    } else {
      const currentStoryIndex = highlights.findIndex((h) => h.id === activeStory?.id);
      if (currentStoryIndex > 0) {
        const prevStory = highlights[currentStoryIndex - 1];
        setActiveStory(prevStory);
        setActiveItemIndex(prevStory.items.length - 1);
      }
    }
  };

  const handleNextItem = () => {
    if (!activeStory) return;
    if (activeItemIndex < activeStory.items.length - 1) {
      setActiveItemIndex((prev) => prev + 1);
    } else {
      const currentStoryIndex = highlights.findIndex((h) => h.id === activeStory.id);
      if (currentStoryIndex < highlights.length - 1) {
        setActiveStory(highlights[currentStoryIndex + 1]);
        setActiveItemIndex(0);
      } else {
        setActiveStory(null);
      }
    }
  };

  return (
    <section className="py-4 border-y border-[#EBE3D7] bg-[#F7F2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Instagram className="w-4 h-4 text-[#B38728]" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#6B6154]">
              Instagram Highlights & Detallar
            </h3>
          </div>
          <span className="text-[11px] text-[#8C8070]">Baxmaq üçün toxunun</span>
        </div>

        {/* Scrollable Story Highlights Row */}
        <div className="flex items-center space-x-6 overflow-x-auto pb-2 scrollbar-none">
          {highlights.map((highlight) => (
            <button
              key={highlight.id}
              onClick={() => handleOpenStory(highlight)}
              className="flex flex-col items-center gap-1.5 flex-shrink-0 group cursor-pointer focus:outline-hidden"
              aria-label={highlight.title}
            >
              {/* Gradient Border Ring */}
              <div className="p-[2.5px] rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#C5A059] to-[#8C6D28] group-hover:scale-105 transition-transform">
                <div className="p-0.5 bg-[#FAF7F2] rounded-full">
                  <img
                    src={highlight.coverImage}
                    alt={highlight.title}
                    className="w-16 h-16 sm:w-18 sm:h-18 rounded-full object-cover object-center shadow-xs"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.tried) {
                        target.dataset.tried = 'true';
                        target.src = highlight.coverImage.startsWith('/') ? highlight.coverImage : `/${highlight.coverImage.split('/').pop()}`;
                      }
                    }}
                  />
                </div>
              </div>
              <span className="text-xs font-medium text-[#2E2820] group-hover:text-[#99732B] transition-colors max-w-[80px] text-center truncate">
                {highlight.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Instagram Story Modal */}
      {activeStory && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
          <div className="relative w-full max-w-sm h-[85vh] max-h-[700px] bg-[#1A1612] rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between">
            {/* Top Progress Bars */}
            <div className="absolute top-3 left-3 right-3 z-30 flex items-center gap-1.5">
              {activeStory.items.map((_, idx) => (
                <div
                  key={idx}
                  className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden"
                >
                  <div
                    className={`h-full bg-[#D4AF37] transition-all duration-300 ${
                      idx < activeItemIndex
                        ? 'w-full'
                        : idx === activeItemIndex
                        ? 'w-full animate-pulse'
                        : 'w-0'
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Story Header */}
            <div className="absolute top-7 left-4 right-4 z-30 flex items-center justify-between text-white">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#1F1B16] flex items-center justify-center font-bold text-xs">
                  Z
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-tight">zeyneb_moda_evi</h4>
                  <p className="text-[10px] text-[#DDD3C2]">{activeStory.title}</p>
                </div>
              </div>
              <button
                onClick={() => setActiveStory(null)}
                className="p-1.5 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                aria-label="Bağla"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Story Image */}
            <div className="relative w-full h-full">
              <img
                src={activeStory.items[activeItemIndex]?.image}
                alt={activeStory.items[activeItemIndex]?.title}
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.tried) {
                    target.dataset.tried = 'true';
                    const currentImg = activeStory.items[activeItemIndex]?.image;
                    if (currentImg) {
                      target.src = currentImg.startsWith('/') ? currentImg : `/${currentImg.split('/').pop()}`;
                    }
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />

              {/* Navigation Touch Zones */}
              <button
                onClick={handlePrevItem}
                className="absolute left-0 top-0 bottom-0 w-1/3 z-20 cursor-pointer"
                aria-label="Əvvəlki"
              />
              <button
                onClick={handleNextItem}
                className="absolute right-0 top-0 bottom-0 w-1/3 z-20 cursor-pointer"
                aria-label="Növbəti"
              />
            </div>

            {/* Bottom Caption & WhatsApp CTA */}
            <div className="absolute bottom-4 left-4 right-4 z-30 space-y-3">
              <div className="bg-black/60 backdrop-blur-md p-3.5 rounded-xl border border-white/10 text-white">
                <h5 className="font-serif text-sm font-semibold text-[#D4AF37]">
                  {activeStory.items[activeItemIndex]?.title}
                </h5>
                <p className="text-xs text-[#EAE2D5] mt-1 leading-relaxed">
                  {activeStory.items[activeItemIndex]?.caption}
                </p>
              </div>

              <a
                href={`https://wa.me/994501234567?text=${encodeURIComponent(
                  `Salam Zeyneb Moda Evi, Instagram hekayənizdəki "${activeStory.items[activeItemIndex]?.title}" haqqında məlumat almaq istəyirəm.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium text-xs shadow-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Bu Libası WhatsApp-da Soruş</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

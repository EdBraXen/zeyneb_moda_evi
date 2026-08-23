import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StoryHighlights } from './components/StoryHighlights';
import { CatalogSection } from './components/CatalogSection';
import { TailoringProcess } from './components/TailoringProcess';
import { InstagramFeed } from './components/InstagramFeed';
import { WhatsAppOrderSection } from './components/WhatsAppOrderSection';
import { ReviewsAndFaq } from './components/ReviewsAndFaq';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { DressDetailModal } from './components/DressDetailModal';
import { DRESS_CATALOG, STORY_HIGHLIGHTS } from './data/catalog';
import { DressItem } from './types';

export default function App() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('zeyneb_moda_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isFavoritesDrawerOpen, setIsFavoritesDrawerOpen] = useState(false);
  const [activeModalDress, setActiveModalDress] = useState<DressItem | null>(null);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('zeyneb_moda_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  const handleToggleFavorite = (dressId: string) => {
    setFavorites((prev) =>
      prev.includes(dressId) ? prev.filter((id) => id !== dressId) : [...prev, dressId]
    );
  };

  const handleExploreCatalog = () => {
    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#24211D] flex flex-col font-sans-refined selection:bg-[#D4AF37]/20 selection:text-[#1F1B16]">
      {/* Top Fixed Navbar */}
      <Navbar
        favoriteCount={favorites.length}
        onOpenFavorites={() => setIsFavoritesDrawerOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onExploreCatalog={handleExploreCatalog} />

        {/* 2. Instagram Story Highlights */}
        <StoryHighlights highlights={STORY_HIGHLIGHTS} />

        {/* 3. Catalog & Portfolio Grid (Instagram style) */}
        <CatalogSection
          items={DRESS_CATALOG}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          showOnlyFavorites={showOnlyFavorites}
          onClearFavoritesFilter={() => setShowOnlyFavorites(false)}
        />

        {/* 4. Bespoke Process & About Atelier */}
        <TailoringProcess />

        {/* 5. Instagram Feed Showcase & Follow CTA */}
        <InstagramFeed />

        {/* 6. WhatsApp Inquiry & Custom Order Form */}
        <WhatsAppOrderSection />

        {/* 7. Reviews & FAQs */}
        <ReviewsAndFaq />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Concierge WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Saved Favorites Drawer */}
      <FavoritesDrawer
        isOpen={isFavoritesDrawerOpen}
        onClose={() => setIsFavoritesDrawerOpen(false)}
        favorites={favorites}
        allDresses={DRESS_CATALOG}
        onRemoveFavorite={handleToggleFavorite}
        onSelectDress={(dress) => setActiveModalDress(dress)}
      />

      {/* Detail Modal if open directly */}
      <DressDetailModal
        dress={activeModalDress}
        onClose={() => setActiveModalDress(null)}
        isFavorite={activeModalDress ? favorites.includes(activeModalDress.id) : false}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}

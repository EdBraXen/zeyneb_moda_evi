import React, { useState, useEffect } from 'react';
import { Instagram, MessageCircle, Menu, X, Sparkles, Heart } from 'lucide-react';

interface NavbarProps {
  favoriteCount: number;
  onOpenFavorites: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ favoriteCount, onOpenFavorites }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Kataloq', href: '#catalog' },
    { name: 'Fərdi Tikiliş', href: '#process' },
    { name: 'Haqqımızda', href: '#about' },
    { name: 'Instagram', href: '#instagram' },
    { name: 'Əlaqə & Sifariş', href: '#order' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#E8DFD5]/80 py-3'
          : 'bg-[#FAF7F2]/80 backdrop-blur-xs py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="brand-logo-link"
            href="#"
            className="flex items-center gap-2.5 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-9 h-9 rounded-full bg-[#1F1B16] text-[#D4AF37] flex items-center justify-center font-serif text-lg font-bold border border-[#D4AF37]/40 shadow-xs group-hover:scale-105 transition-transform">
              Z
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-[#1F1B16] group-hover:text-[#99732B] transition-colors">
                zeyneb_moda_evi
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C8275] -mt-1 font-medium">
                Atelier & Haute Couture
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm font-medium text-[#4A443B] hover:text-[#B38728] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Favorites button */}
            <button
              id="favorites-counter-btn"
              onClick={onOpenFavorites}
              className="relative p-2 text-[#4A443B] hover:text-[#99732B] hover:bg-[#F2ECE3] rounded-full transition-colors"
              title="Bəyəndiklərim"
              aria-label="Bəyənilən libaslar"
            >
              <Heart className="w-5 h-5" />
              {favoriteCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C5A059] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {favoriteCount}
                </span>
              )}
            </button>

            {/* Instagram Link */}
            <a
              id="nav-instagram-btn"
              href="https://instagram.com/zeyneb_moda_evi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#1F1B16] bg-[#EFE8DC] hover:bg-[#E5DCCF] border border-[#DDD3C2] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#B38728]" />
              <span>@zeyneb_moda_evi</span>
            </a>

            {/* WhatsApp Contact CTA */}
            <a
              id="nav-whatsapp-cta"
              href="https://wa.me/994501234567?text=Salam%2C%20Zeyneb%20Moda%20Evi%2C%20f%C9%99rdi%20tikili%C5%9F%20%C3%BC%C3%A7%C3%BCn%20m%C9%99lumat%20almaq%20ist%C9%99yir%C9%99m."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#1F1B16] hover:bg-[#38332B] border border-[#4A4235] shadow-xs hover:shadow-sm transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Əlaqə</span>
            </a>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenFavorites}
              className="relative p-2 text-[#4A443B] hover:text-[#99732B]"
              aria-label="Bəyənilənlər"
            >
              <Heart className="w-5 h-5" />
              {favoriteCount > 0 && (
                <span className="absolute 0 top-0 right-0 bg-[#C5A059] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {favoriteCount}
                </span>
              )}
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1F1B16] hover:bg-[#EFE8DC] rounded-lg transition-colors"
              aria-label="Menyunu aç"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DFD5] px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-base font-medium text-[#2E2820] hover:text-[#B38728] py-2 px-3 rounded-md hover:bg-[#F2ECE3] transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#A89D8E]">→</span>
              </a>
            ))}

            <div className="pt-4 border-t border-[#E8DFD5] flex flex-col gap-2.5">
              <a
                href="https://instagram.com/zeyneb_moda_evi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-medium bg-[#EFE8DC] text-[#1F1B16] border border-[#DDD3C2]"
              >
                <Instagram className="w-4 h-4 text-[#B38728]" />
                <span>Instagram: @zeyneb_moda_evi</span>
              </a>
              <a
                href="https://wa.me/994501234567?text=Salam%2C%20Zeyneb%20Moda%20Evi%2C%20f%C9%99rdi%20tikili%C5%9F%20haqq%C4%B1nda%20m%C9%99lumat%20almaq%20ist%C9%99yir%C9%99m."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-[#1F1B16] hover:bg-[#332D24]"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp ilə Sifariş Et</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

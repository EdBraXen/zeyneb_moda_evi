import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 pointer-events-auto">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#1F1B16] text-white py-2.5 px-4 rounded-2xl shadow-xl border border-[#D4AF37]/30 text-xs animate-in fade-in slide-in-from-right duration-300">
          <div className="flex flex-col">
            <span className="font-bold text-[#D4AF37]">Zeyneb Moda Evi Atelye</span>
            <span className="text-[11px] text-[#DDD3C2]">Fərdi tikiliş üçün bizə yazın</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#9E9283] hover:text-white ml-2"
            aria-label="Bağla"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        id="floating-whatsapp-btn"
        href="https://wa.me/994501234567?text=Salam%20Zeyneb%20Moda%20Evi%2C%20f%C9%99rdi%20tikili%C5%9F%20%C3%BC%C3%A7%C3%BCn%20m%C9%99lumat%20almaq%20ist%C9%99yir%C9%99m."
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-4 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
        aria-label="WhatsApp ilə Əlaqə"
      >
        {/* Pulsating Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <MessageCircle className="w-6 h-6 fill-current relative z-10" />
      </a>
    </div>
  );
};

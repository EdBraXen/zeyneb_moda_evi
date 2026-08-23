import React, { useState } from 'react';
import { CLIENT_REVIEWS, FAQ_ITEMS } from '../data/catalog';
import { Star, ChevronDown, ChevronUp, Quote, MessageCircle, Heart } from 'lucide-react';

export const ReviewsAndFaq: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Customer Reviews Section */}
        <div>
          <div className="text-center max-w-xl mx-auto space-y-2.5 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#99732B]">
              Xoşbəxt Müştərilərimiz
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1F1B16]">
              Müştəri Məmnuniyyəti & Rəylər
            </h2>
            <p className="text-sm text-[#6B6154]">
              Zeyneb Moda Evi-nə etibar edən zövqlü xanımların səmimi fikirləri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLIENT_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="bg-[#F6EFE7] p-6 rounded-3xl border border-[#E3D9CC] shadow-2xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  {/* Stars & Quote */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#D4AF37]">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#D4AF37]/30" />
                  </div>

                  <p className="text-xs sm:text-sm text-[#4A443B] leading-relaxed italic">
                    "{review.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5DCD0] flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-[#1F1B16]">{review.clientName}</h4>
                    <span className="text-[11px] text-[#7A7062]">{review.occasion}</span>
                  </div>
                  <span className="text-[10px] font-medium text-[#9E9283] bg-white px-2.5 py-1 rounded-full border border-[#DDD3C2]">
                    {review.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#99732B]">
              Suallarınız Var?
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1B16]">
              Tez-tez Verilən Suallar
            </h3>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#E3D9CC] bg-[#FAF7F2] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#F2ECE3] transition-colors cursor-pointer"
                  >
                    <span className="font-serif text-sm sm:text-base font-semibold text-[#1F1B16]">
                      {faq.question}
                    </span>
                    <div className="p-1 rounded-full bg-[#EFE8DC] text-[#7A7062]">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-[#5C5449] leading-relaxed border-t border-[#EFE8DC] pt-3 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

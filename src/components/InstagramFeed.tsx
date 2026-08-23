import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, Bookmark, CheckCircle2 } from 'lucide-react';
import { handleImageError } from '../lib/imageUtils';
import {
  paltar1Img,
  paltar2Img,
  paltar3Img,
  paltar4Img,
  paltar5Img,
  sonZengVecerImg,
} from '../data/catalog';

export const InstagramFeed: React.FC = () => {
  const posts = [
    {
      id: 'post-1',
      image: paltar1Img,
      likes: '1,420',
      comments: '86',
      caption: 'Eksklüziv ziyafət libasımız. Fərdi ölçülərlə sifariş qəbul olunur ✨ #zeyneb_moda_evi #baku',
    },
    {
      id: 'post-2',
      image: sonZengVecerImg,
      likes: '2,180',
      comments: '124',
      caption: 'Son Zəng və Məzuniyyət balının ən möhtəşəm modeli 🍷 Qüsursuz dərzi əl işi. #sonzeng #mezun2026',
    },
    {
      id: 'post-3',
      image: paltar2Img,
      likes: '1,890',
      comments: '95',
      caption: 'Ziyafət gecəsi üçün zərif və dökümlü modelimiz 💙 #ziyafetlibaslari #baku #hautecouture',
    },
    {
      id: 'post-4',
      image: paltar5Img,
      likes: '1,640',
      comments: '72',
      caption: 'Koutür dərzilik və zəriflik 🖤 Hər qadının qarderobunda olmalı unikal model.',
    },
    {
      id: 'post-5',
      image: paltar4Img,
      likes: '1,120',
      comments: '58',
      caption: 'Dəyərli müştərilərimiz üçün fərdi tikiliş 🎓 Xoşbəxt günlərinizdə yanınızdayıq.',
    },
    {
      id: 'post-6',
      image: paltar3Img,
      likes: '1,350',
      comments: '64',
      caption: 'Parça üzərində xüsusi drapaj sənəti 🪡 Fərdi sifarişlə atelyemizdə tikildi.',
    },
  ];

  return (
    <section id="instagram" className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Elegant Minimalist Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-bold text-[#99732B] tracking-widest uppercase">Sosial Şəbəkə</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1B16] mt-2">Instagram Vitrinimiz</h2>
          <p className="text-xs text-[#7A7062] font-medium mt-1">@zeyneb_moda_evi</p>
        </div>

        {/* Instagram Grid Showcase */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/zeyneb_moda_evi"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#ECE4D8] border border-[#DDD3C2] shadow-2xs block"
            >
              <img
                src={post.image}
                alt="Zeyneb Moda Evi Instagram Post"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                onError={(e) => handleImageError(e, post.image, post.caption)}
              />

              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-[#1F1B16]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 text-white">
                <div className="flex justify-end">
                  <Instagram className="w-4 h-4 text-[#D4AF37]" />
                </div>

                <div className="space-y-1.5 text-center">
                  <div className="flex items-center justify-center gap-3 text-xs font-semibold">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-current text-rose-400" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      {post.comments}
                    </span>
                  </div>
                  <p className="text-[10px] leading-tight text-[#E8DFD5] opacity-90">
                    {post.caption}
                  </p>
                </div>

                <div className="flex justify-between items-center text-[10px] text-[#D4AF37]">
                  <span>#zeyneb_moda_evi</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Instagram CTA Button */}
        <div className="mt-8 text-center">
          <a
            id="instagram-follow-cta-btn"
            href="https://instagram.com/zeyneb_moda_evi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#EAE2D5] hover:bg-[#E0D5C5] text-[#1F1B16] text-xs font-semibold tracking-wide border border-[#D5C7B3] transition-all shadow-2xs"
          >
            <Instagram className="w-4 h-4 text-[#B38728]" />
            <span>Yeni Modelləri Instagram-da Canlı İzləyin →</span>
          </a>
        </div>
      </div>
    </section>
  );
};

import React from 'react';

export function generateFallbackSvg(title: string = 'Zeyneb Moda Evi'): string {
  const cleanTitle = title.replace(/[<>&'"]/g, '').trim() || 'Zeyneb Moda Evi Libası';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FAF7F2"/>
        <stop offset="50%" stop-color="#F3EBDD"/>
        <stop offset="100%" stop-color="#EBE0CF"/>
      </linearGradient>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#D4AF37"/>
        <stop offset="50%" stop-color="#F3E5AB"/>
        <stop offset="100%" stop-color="#99732B"/>
      </linearGradient>
    </defs>
    <rect width="600" height="800" fill="url(#bgGrad)"/>
    <rect x="24" y="24" width="552" height="752" fill="none" stroke="url(#goldGrad)" stroke-width="2" rx="16" opacity="0.5"/>
    <rect x="32" y="32" width="536" height="736" fill="none" stroke="#99732B" stroke-width="1" rx="12" opacity="0.25" stroke-dasharray="6,4"/>
    
    <!-- Mannequin / Dress Fashion Sketch -->
    <g transform="translate(300, 310)" fill="none" stroke="url(#goldGrad)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <!-- Neck / Hanger -->
      <path d="M0,-140 C-15,-155 -8,-170 0,-170 C8,-170 15,-155 0,-140"/>
      <line x1="-40" y1="-120" x2="40" y2="-120"/>
      
      <!-- Corset / Top -->
      <path d="M-28,-120 Q0,-135 28,-120 L35,-65 Q14,-55 0,-38 Q-14,-55 -35,-65 Z" fill="#99732B" fill-opacity="0.12"/>
      <path d="M-28,-120 Q0,-135 28,-120 L35,-65 Q14,-55 0,-38 Q-14,-55 -35,-65 Z"/>
      <path d="M0,-120 L0,-38" stroke-dasharray="3,3" opacity="0.6"/>
      
      <!-- Skirt -->
      <path d="M0,-38 C-55,25 -105,110 -130,170 Q0,195 130,170 C105,110 55,25 0,-38 Z" fill="#99732B" fill-opacity="0.08"/>
      <path d="M0,-38 C-55,25 -105,110 -130,170 Q0,195 130,170 C105,110 55,25 0,-38 Z"/>
      
      <!-- Drapes / Folds -->
      <path d="M-15,-38 C-35,30 -60,110 -75,172" opacity="0.4"/>
      <path d="M15,-38 C35,30 60,110 75,172" opacity="0.4"/>
      <path d="M0,-38 C0,35 0,115 0,175" opacity="0.5"/>
    </g>

    <!-- Brand & Title -->
    <text x="300" y="555" font-family="'Playfair Display', Georgia, serif" font-size="26" font-weight="700" fill="#1F1B16" text-anchor="middle">${cleanTitle}</text>
    <line x1="220" y1="580" x2="380" y2="580" stroke="url(#goldGrad)" stroke-width="2" opacity="0.7"/>
    <text x="300" y="612" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" fill="#99732B" text-anchor="middle" letter-spacing="4">ZEYNEB MODA EVİ</text>
    <text x="300" y="642" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="500" fill="#6E6254" text-anchor="middle">Fərdi Tikiliş &amp; Eksklüziv Ziyafət Libası</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export function getFilenameFromSrc(src: string): string {
  if (!src) return 'paltar1.png';
  const lower = src.toLowerCase();
  if (lower.includes('paltar1')) return 'paltar1.png';
  if (lower.includes('paltar2')) return 'paltar2.png';
  if (lower.includes('paltar3')) return 'paltar3.png';
  if (lower.includes('paltar4')) return 'paltar4.png';
  if (lower.includes('paltar5')) return 'paltar5.png';
  if (lower.includes('tikim')) return 'Son_Zeng_tikim.png';
  if (lower.includes('vecer')) return 'Son_Zeng_vecer.png';
  return 'paltar1.png';
}

function publicAssetPath(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
}

export function handleImageError(
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  originalSrc: string,
  title?: string
) {
  const target = e.currentTarget;
  const stage = parseInt(target.dataset.stage || '0', 10);
  if (stage >= 4) return;

  const filename = getFilenameFromSrc(originalSrc || target.src);

  if (stage === 0) {
    target.dataset.stage = '1';
    target.src = publicAssetPath(filename);
  } else if (stage === 1) {
    target.dataset.stage = '2';
    target.src = publicAssetPath(`images/${filename}`);
  } else if (stage === 2) {
    target.dataset.stage = '3';
    target.src = publicAssetPath(`src/images/${filename}`);
  } else if (stage === 3) {
    target.dataset.stage = '4';
    target.src = generateFallbackSvg(title || target.alt);
  }
}

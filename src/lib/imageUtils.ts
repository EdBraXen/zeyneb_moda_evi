import React from 'react';

export function getImageFallback(src: string): string {
  if (!src) return '/paltar1.png';
  const lower = src.toLowerCase();
  if (lower.includes('paltar1')) return '/paltar1.png';
  if (lower.includes('paltar2')) return '/paltar2.png';
  if (lower.includes('paltar3')) return '/paltar3.png';
  if (lower.includes('paltar4')) return '/paltar4.png';
  if (lower.includes('paltar5')) return '/paltar5.png';
  if (lower.includes('tikim')) return '/Son_Zeng_tikim.png';
  if (lower.includes('vecer')) return '/Son_Zeng_vecer.png';
  return '/paltar1.png';
}

export function handleImageError(
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  originalSrc: string
) {
  const target = e.currentTarget;
  if (!target.dataset.tried) {
    target.dataset.tried = 'true';
    target.src = getImageFallback(originalSrc);
  }
}

export type DressCategory = 'all' | 'ziyafet' | 'gundelik_merasim' | 'ozel_dikim';

export interface DressItem {
  id: string;
  title: string;
  category: DressCategory;
  categoryLabel: string;
  image: string;
  tag: string;
  description: string;
  details: {
    fabric: string; // e.g., İpək atlas, Fransız krujevası, Jakard
    silhouette: string; // e.g., Bir çiyin dökümlü, Balıq model, Şahzadə
    embellishment?: string; // e.g., Swarovski qaşlar, Əl tikilişi mirvari
    lining?: string; // Astar növü
    occasion: string; // e.g., Ziyafət, Nişan, Toy, Məzuniyyət (Son Zəng)
    tailoringTime: string; // e.g., 3-7 iş günü
  };
  instagramPostUrl?: string;
  isFeatured?: boolean;
}

export interface StoryHighlight {
  id: string;
  title: string;
  coverImage: string;
  subtitle: string;
  items: {
    image: string;
    title: string;
    caption: string;
  }[];
}

export interface ReviewItem {
  id: string;
  clientName: string;
  occasion: string;
  dressTitle: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

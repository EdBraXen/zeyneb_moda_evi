import { DressItem, StoryHighlight, ReviewItem, FAQItem } from '../types';

import paltar1Img from '../images/paltar1.png';
import paltar2Img from '../images/paltar2.png';
import paltar3Img from '../images/paltar3.png';
import paltar4Img from '../images/paltar4.png';
import paltar5Img from '../images/paltar5.png';
import sonZengTikimImg from '../images/Son_Zeng_tikim.png';
import sonZengVecerImg from '../images/Son_Zeng_vecer.png';

export {
  paltar1Img,
  paltar2Img,
  paltar3Img,
  paltar4Img,
  paltar5Img,
  sonZengTikimImg,
  sonZengVecerImg,
};

export const DRESS_CATALOG: DressItem[] = [
  {
    id: 'dress-paltar-1',
    title: 'Eksklüziv Ziyafət Libası',
    category: 'ziyafet',
    categoryLabel: 'Ziyafət paltarları',
    image: paltar1Img,
    tag: 'Ən Çox Sevilən',
    description: 'Xüsusi bədən xətlərini vurğulayan, zərif və dökümlü parçası ilə seçilən fərdi tikiliş ziyafət libası. Hər bir detal dərzi sənətkarlığı ilə tamamlanır.',
    details: {
      fabric: 'Premium İpək & Saten Atlas',
      silhouette: 'Zərif bədənə oturan xüsusi kəsim',
      embellishment: 'Xüsusi dərzi əl işi tikişlər',
      lining: 'Nəfəs alan ipək astar',
      occasion: 'Nişan, Toy, Məzuniyyət və Ziyafət mərasimləri',
      tailoringTime: '4 - 7 iş günü',
    },
    instagramPostUrl: 'https://instagram.com/zeyneb_moda_evi',
    isFeatured: true,
  },
  {
    id: 'dress-son-zeng-vecer',
    title: 'Son Zəng Veçer & Məzuniyyət Balı Libası',
    category: 'ziyafet',
    categoryLabel: 'Ziyafət paltarları',
    image: sonZengVecerImg,
    tag: 'Son Zəng & Veçer',
    description: 'Məzuniyyət gecəsi və Son Zəng axşamı üçün gözoxşayan, unikal və unudulmaz gecə libası. Bütün gözləri üzərinizə toplayacaq fərdi dizayn.',
    details: {
      fabric: 'Parıltılı ziyafət parçası və dökümlü atlas',
      silhouette: 'Gözoxşayan bal və ziyafət kəsimi',
      embellishment: 'Zərif əl işi parıltı detalları',
      lining: 'Yumşaq xüsusi forma saxlayan astar',
      occasion: 'Son Zəng Veçeri, Məzuniyyət Balı, Qala Gecəsi',
      tailoringTime: '5 - 8 iş günü',
    },
    instagramPostUrl: 'https://instagram.com/zeyneb_moda_evi',
    isFeatured: true,
  },
  {
    id: 'dress-paltar-2',
    title: 'Zərif Ziyafət və Mərasim Libası',
    category: 'ziyafet',
    categoryLabel: 'Ziyafət paltarları',
    image: paltar2Img,
    tag: 'Eksklüziv Kolleksiya',
    description: 'Xanımların zərifliyini və zövqünü ən yüksək səviyyədə təcəssüm etdirən ziyafət donu. Fərdi ölçülərlə sifariş qəbul olunur.',
    details: {
      fabric: 'Krep-saten və premium atelye parçası',
      silhouette: 'Düz zərif və dökümlü siluet',
      embellishment: 'Zərif drapaj detalları',
      lining: 'Premium yumşaq astar',
      occasion: 'Rəsmi tədbirlər, Nişan və Toy mərasimi',
      tailoringTime: '4 - 7 iş günü',
    },
    instagramPostUrl: 'https://instagram.com/zeyneb_moda_evi',
    isFeatured: true,
  },
  {
    id: 'dress-son-zeng-tikim',
    title: 'Son Zəng Mərasim Libası (Fərdi Tikim)',
    category: 'gundelik_merasim',
    categoryLabel: 'Gündəlik & Mərasim',
    image: sonZengTikimImg,
    tag: 'Son Zəng & Məzun',
    description: 'Məktəb və Universitet (MAA və digər) məzunlarının Son Zəng mərasimi üçün atelyemizdə fərdi ölçülərlə xüsusi tikilən zərif libas.',
    details: {
      fabric: 'Formalı krep və yüksək keyfiyyətli parça',
      silhouette: 'Məzuniyyət təntənəsinə uyğun xüsusi kəsim',
      embellishment: 'Zərif manjet və yaxalıq vurğuları',
      lining: 'İncə nəfəs alan pambıq astar',
      occasion: 'Son Zəng, Məzuniyyət Günü, Fotoçəkiliş',
      tailoringTime: '3 - 5 iş günü',
    },
    instagramPostUrl: 'https://instagram.com/zeyneb_moda_evi',
    isFeatured: true,
  },
  {
    id: 'dress-paltar-3',
    title: 'Özəl Dərzilik Ziyafət Donu',
    category: 'ozel_dikim',
    categoryLabel: 'Özəl dikim',
    image: paltar3Img,
    tag: 'Fərdi Əl İşi',
    description: 'Atelyemizdə dərzi sənətkarlığı ilə hazırlanan, bədən quruluşuna tam uyğunlaşan xüsusi ziyafət modeli.',
    details: {
      fabric: 'Kabartmalı jakard və ipək tekstura',
      silhouette: 'Fərdi drapajlı və bədənə oturan model',
      embellishment: 'Əl işi dərzi relyefi',
      lining: 'İpək tərkibli zərif astar',
      occasion: 'Ziyafət, Xına və Ailəvi təntənələr',
      tailoringTime: '4 - 6 iş günü',
    },
    instagramPostUrl: 'https://instagram.com/zeyneb_moda_evi',
    isFeatured: false,
  },
  {
    id: 'dress-paltar-4',
    title: 'Klassik Şıq Mərasim Libası',
    category: 'gundelik_merasim',
    categoryLabel: 'Gündəlik & Mərasim',
    image: paltar4Img,
    tag: 'Zövqlü Seçim',
    description: 'Həm mərasimlərdə, həm də xüsusi günlərdə rahat və zadəgan görünüş üçün hazırlanmış kəsim.',
    details: {
      fabric: 'Təbii viskoza və zərif krep',
      silhouette: 'Zövqlü və rahat dökümlü kəsim',
      embellishment: 'Minimalist drapaj detalları',
      lining: 'Nəfəs alan pambıq astar',
      occasion: 'Mərasim, Doğum Günü və Kokteyl',
      tailoringTime: '3 - 5 iş günü',
    },
    instagramPostUrl: 'https://instagram.com/zeyneb_moda_evi',
    isFeatured: false,
  },
  {
    id: 'dress-paltar-5',
    title: 'Haute Couture Ziyafət Libası',
    category: 'ozel_dikim',
    categoryLabel: 'Özəl dikim',
    image: paltar5Img,
    tag: 'Haute Couture',
    description: 'Bütün gözləri üzərinizə çəkəcək, yüksək səviyyəli dərzi kəsimi ilə hazırlanmış unikal libas.',
    details: {
      fabric: 'Ağır düşümlü atelye parçası',
      silhouette: 'Fərdi siluet və zərif quyruqlu kəsim',
      embellishment: 'Əl işi incə detallar',
      lining: 'Premium astar',
      occasion: 'Toy, Nişan, Yubiley və Qala',
      tailoringTime: '5 - 8 iş günü',
    },
    instagramPostUrl: 'https://instagram.com/zeyneb_moda_evi',
    isFeatured: true,
  },
];

export const STORY_HIGHLIGHTS: StoryHighlight[] = [
  {
    id: 'highlight-collection',
    title: 'Yeni Kolleksiya',
    subtitle: 'Ziyafət 2026',
    coverImage: paltar1Img,
    items: [
      {
        image: paltar1Img,
        title: 'Eksklüziv Ziyafət Libası',
        caption: 'Yaz və yay ziyafətlərinin ən çox sevilən modeli. Sizin ölçülərinizlə fərdi tikilir.',
      },
      {
        image: paltar2Img,
        title: 'Zərif Ziyafət Donu',
        caption: 'Parlaq və cəlbedici libaslarımızla xüsusi günlərdə parlayın.',
      },
    ],
  },
  {
    id: 'highlight-son-zeng',
    title: 'Son Zəng & Məzun',
    subtitle: 'Xüsusi Gecə',
    coverImage: sonZengVecerImg,
    items: [
      {
        image: sonZengVecerImg,
        title: 'Son Zəng Veçer Libası',
        caption: 'Hər bir məzunun arzusundakı nağılvari donu reallığa çeviririk.',
      },
      {
        image: sonZengTikimImg,
        title: 'Son Zəng Mərasim Libası',
        caption: 'Məktəb və Universitet (MAA və digər) məzuniyyət günləri üçün fərdi tikiliş.',
      },
    ],
  },
  {
    id: 'highlight-el-isi',
    title: 'Əl İşi & Tikiliş',
    subtitle: 'Atelier Prosesi',
    coverImage: paltar5Img,
    items: [
      {
        image: paltar5Img,
        title: '100% Qüsursuz Fərdi Tikiliş',
        caption: 'Hər bir tikiş və kəsim dərzi peşəkarlığı ilə hazırlanır.',
      },
      {
        image: paltar3Img,
        title: 'Drapaj & Naxış Sənəti',
        caption: 'Bədən quruluşunuza tam uyğun gələn fərdi drapaj işləri.',
      },
    ],
  },
  {
    id: 'highlight-klientler',
    title: 'Müştəri Məmnuniyyəti',
    subtitle: 'Zövqlü Xanımlar',
    coverImage: paltar4Img,
    items: [
      {
        image: paltar4Img,
        title: 'Müştərimizin Seçimi',
        caption: 'Müştərimizin istəyi ilə xüsusi kəsim və fərdi ölçülərlə tikildi.',
      },
      {
        image: paltar1Img,
        title: 'Xoşbəxt Müştərimiz',
        caption: 'Tədbirin ən zövqlü qadını olmağın sirri doğru tikilişdədir.',
      },
    ],
  },
];

export const CLIENT_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    clientName: 'Aysel M.',
    occasion: 'Məzuniyyət Gecəsi',
    dressTitle: 'Son Zəng Veçer Libası',
    rating: 5,
    comment: 'Zeyneb xanıma sonsuz təşəkkürlər! Don üzərimə elə oturdu ki, heç bir düzəlişə belə ehtiyac qalmadı. Bütün gecə hamı libasımın harada tikildiyini soruşurdu.',
    date: 'İyul 2026',
  },
  {
    id: 'rev-2',
    clientName: 'Nigar R.',
    occasion: 'Bacımın Toyu',
    dressTitle: 'Eksklüziv Ziyafət Libası',
    rating: 5,
    comment: 'Parçanın keyfiyyəti, tikişlərin səliqəsi və vaxtında təhvil verilməsi möhtəşəm idi. Artıq bütün libaslarımı yalnız Zeyneb Moda Evi-nə həvalə edəcəm!',
    date: 'Avqust 2026',
  },
  {
    id: 'rev-3',
    clientName: 'Ləman Ə.',
    occasion: 'Son Zəng Tədbiri',
    dressTitle: 'Son Zəng Mərasim Libası',
    rating: 5,
    comment: 'Ölçülərimi çox dəqiq götürdülər və qısa müddətdə hazır etdilər. WhatsApp üzərindən ünsiyyət də çox rahat oldu. Çox razı qaldım!',
    date: 'İyun 2026',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Fərdi tikiliş üçün sifarişi necə verə bilərəm?',
    answer: 'Kataloqdan bəyəndiyiniz modeli seçərək və ya öz xəyalınızdakı donun şəklini WhatsApp (+994 50 123 45 67) nömrəmizə göndərə bilərsiniz. Ölçü götürmə və model detalları dərhal müzakirə olunur.',
  },
  {
    question: 'Bir libasın tikilişi neçə gün çəkir?',
    answer: 'Modelin mürəkkəbliyindən və əl işi detallarından asılı olaraq tikiliş müddəti adətən 3 ilə 7 iş günü arasında dəyişir. Təcili sifarişlər üçün də imkan yaradılır.',
  },
  {
    question: 'Parçanı özüm gətirə bilərəm, yoxsa siz təmin edirsiniz?',
    answer: 'Hər iki seçim mümkündür! İstər öz parçanızı gətirə bilərsiniz, istərsə də atelyemizdə mövcud olan premium keyfiyyətli ipək, atlas, jakard və krep parçalardan seçim edə bilərsiniz.',
  },
  {
    question: 'Ölçü götürmək üçün atelyeyə gəlmək mütləqdir?',
    answer: 'Bakıda yerləşən atelyemizə yaxınlaşaraq canlı ölçü verə bilərsiniz. Rayonlarda və ya xaricdə yaşayan müştərilərimiz üçün isə video-təlimat ilə düzgün ölçü götürmə qaydası təqdim edirik.',
  },
];


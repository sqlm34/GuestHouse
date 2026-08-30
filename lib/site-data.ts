export const siteConfig = {
  name: 'Гостевой дом «Ореховая 23А»',
  shortName: 'Ореховая 23А',
  location: 'Архипо-Осиповка',
  region: 'Краснодарский край',
  country: 'Россия',
  streetAddress: 'ул. Ореховая, 23А',
  fullAddress: 'Россия, Краснодарский край, с. Архипо-Осиповка, ул. Ореховая, 23А',
  seaWalkMinutes: 5,
  pricePerPerson: 1500,
  totalRooms: 8,
  maxGuests: 24,
  contacts: {
    phone: '',
    whatsapp: '',
    telegram: '',
  },
  analytics: {
    yandexMetrikaId: '',
    ga4Id: '',
  },
};

export type Room = {
  slug: string;
  title: string;
  pluralTitle: string;
  count: number;
  capacity: number;
  lead: string;
  description: string;
  image: string;
  gallery: string[];
};

export const rooms: Room[] = [
  {
    slug: 'dvuhmestnyy',
    title: 'Двухместный номер',
    pluralTitle: 'Двухместные номера',
    count: 4,
    capacity: 2,
    lead: 'Для пары или двух гостей, которым нужен спокойный отдых рядом с морем.',
    description:
      'Категория объединяет четыре физических двухместных номера. Наличие конкретного номера подтверждает владелец после заявки.',
    image: '/images/rooms/double/double-01.webp',
    gallery: [
      '/images/rooms/double/double-01.webp',
      '/images/rooms/double/double-02.webp',
      '/images/rooms/double/double-03.webp',
    ],
  },
  {
    slug: 'trehmestnyy',
    title: 'Трёхместный номер',
    pluralTitle: 'Трёхместные номера',
    count: 2,
    capacity: 3,
    lead: 'Практичный формат для небольшой семьи или компании до трёх человек.',
    description:
      'Два трёхместных номера доступны как отдельная категория. Стоимость рассчитывается по числу гостей и ночей.',
    image: '/images/rooms/triple/triple-01.webp',
    gallery: [
      '/images/rooms/triple/triple-01.webp',
      '/images/rooms/triple/triple-02.webp',
      '/images/rooms/triple/triple-03.webp',
    ],
  },
  {
    slug: 'pyatimestnyy',
    title: 'Пятиместный номер',
    pluralTitle: 'Пятиместные номера',
    count: 2,
    capacity: 5,
    lead: 'Семейное размещение для большой семьи или компании до пяти гостей.',
    description:
      'Два пятиместных номера подходят для гостей, которым важно разместиться вместе без посредников.',
    image: '/images/rooms/five/five-01.webp',
    gallery: [
      '/images/rooms/five/five-01.webp',
      '/images/rooms/five/five-02.webp',
      '/images/rooms/five/five-03.webp',
    ],
  },
];

export const galleryGroups = [
  {
    title: 'Дом',
    images: [
      '/images/hero/guest-house-hero.webp',
      '/images/property/property-01.webp',
      '/images/property/property-02.webp',
    ],
  },
  {
    title: 'Территория',
    images: [
      '/images/property/property-03.webp',
      '/images/property/property-04.webp',
      '/images/property/property-05.webp',
    ],
  },
  {
    title: 'Двухместные номера',
    images: rooms[0].gallery,
  },
  {
    title: 'Трёхместные номера',
    images: rooms[1].gallery,
  },
  {
    title: 'Пятиместные номера',
    images: rooms[2].gallery,
  },
  {
    title: 'Море и окрестности',
    images: ['/images/location/location-01.webp', '/images/location/location-02.webp'],
  },
];

export const formatRub = (value: number) =>
  new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(value);

export const roomTotal = (guests: number) => guests * siteConfig.pricePerPerson;

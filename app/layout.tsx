import type { Metadata } from 'next';
import { Footer, Header, MobileBar } from '@/components/site-shell';
import { rooms, siteConfig } from '@/lib/site-data';
import './globals.css';

const title = 'Гостевой дом «Ореховая 23А» — Архипо-Осиповка, 5 минут до моря';
const description =
  'Гостевой дом «Ореховая 23А» в Архипо-Осиповке. 5 минут пешком до моря. Двухместные, трёхместные и пятиместные номера. Проживание от 1 500 ₽ с человека. Прямое бронирование.';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: title,
    template: '%s | Ореховая 23А',
  },
  description,
  keywords: [
    'гостевой дом Архипо-Осиповка',
    'жилье Архипо-Осиповка',
    'снять номер Архипо-Осиповка',
    'отдых Архипо-Осиповка',
    'номера у моря Архипо-Осиповка',
    'Ореховая 23А Архипо-Осиповка',
  ],
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'ru_RU',
    images: ['/images/hero/guest-house-hero.webp?v=20260830-2'],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/hero/guest-house-hero.webp?v=20260830-2'],
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

const lodgingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BedAndBreakfast',
  name: siteConfig.name,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.streetAddress,
    addressLocality: siteConfig.location,
    addressRegion: siteConfig.region,
    addressCountry: siteConfig.country,
  },
  priceRange: `${siteConfig.pricePerPerson} RUB с человека в сутки`,
  numberOfRooms: siteConfig.totalRooms,
  amenityFeature: [
    {
      '@type': 'LocationFeatureSpecification',
      name: '5 минут пешком до моря',
      value: true,
    },
  ],
  makesOffer: rooms.map((room) => ({
    '@type': 'Offer',
    name: room.title,
    price: siteConfig.pricePerPerson,
    priceCurrency: 'RUB',
    description: `${siteConfig.pricePerPerson} RUB с человека в сутки. До ${room.capacity} гостей.`,
  })),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }} />
        <Header />
        {children}
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}

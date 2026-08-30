import { BedDouble, CalendarCheck, Images, MapPin, MessageCircle, Phone, Route, Waves } from 'lucide-react';
import { siteConfig } from '@/lib/site-data';

const nav = [
  ['Главная', '/'],
  ['Номера', '/rooms'],
  ['Цены', '/prices'],
  ['Фотографии', '/gallery'],
  ['О доме', '/#about'],
  ['Как добраться', '/location'],
  ['Контакты', '/contacts'],
];

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/">
        <span className="brand-mark">
          <Waves size={24} aria-hidden="true" />
        </span>
        <span>
          <strong>{siteConfig.shortName}</strong>
          <small>Гостевой дом</small>
        </span>
      </a>
      <nav aria-label="Основное меню">
        {nav.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="/#booking">
        Забронировать
      </a>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>{siteConfig.name}</strong>
        <span>{siteConfig.fullAddress}</span>
      </div>
      <div className="footer-links">
        <a href="/rooms">Номера</a>
        <a href="/prices">Цены</a>
        <a href="/contacts">Контакты</a>
      </div>
    </footer>
  );
}

export function MobileBar() {
  return (
    <div className="mobile-bar" aria-label="Быстрые действия">
      <a href="/contacts">
        <Phone size={18} />
        Позвонить
      </a>
      <a href="/contacts">
        <MessageCircle size={18} />
        WhatsApp
      </a>
      <a href="/#booking">
        <CalendarCheck size={18} />
        Забронировать
      </a>
    </div>
  );
}

export function PageHero({
  title,
  text,
  image = '/images/hero/guest-house-hero.webp?v=20260830-2',
}: {
  title: string;
  text: string;
  image?: string;
}) {
  return (
    <section className="page-hero">
      <img src={image} alt="" />
      <div>
        <p className="eyebrow">Архипо-Осиповка • 5 минут до моря</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

export function FeatureStrip() {
  const features = [
    [Route, '5 минут до моря', 'Пешком от гостевого дома'],
    [BedDouble, '8 номеров', 'На 2, 3 и 5 человек'],
    [MapPin, 'Ореховая 23А', 'Архипо-Осиповка'],
    [Images, 'Реальные фото', 'Галерея объекта'],
  ];

  return (
    <section className="feature-strip" aria-label="Ключевые преимущества">
      {features.map(([Icon, title, text]) => (
        <div key={String(title)}>
          <Icon size={32} aria-hidden="true" />
          <strong>{title as string}</strong>
          <span>{text as string}</span>
        </div>
      ))}
    </section>
  );
}

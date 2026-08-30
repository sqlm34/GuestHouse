import type { Metadata } from 'next';
import { MapPin, Route } from 'lucide-react';
import { PageHero } from '@/components/site-shell';
import { siteConfig } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Как добраться',
  description: 'Адрес гостевого дома «Ореховая 23А»: Архипо-Осиповка, ул. Ореховая, 23А. До моря около 5 минут пешком.',
  alternates: { canonical: '/location' },
};

export default function LocationPage() {
  return (
    <main>
      <PageHero title="Где мы находимся" text={`${siteConfig.region}, ${siteConfig.location}, ${siteConfig.streetAddress}. До моря около ${siteConfig.seaWalkMinutes} минут пешком.`} />
      <section className="page-content room-detail">
        <div className="map-card">
          <h2>Адрес</h2>
          <p>{siteConfig.country}</p>
          <p>{siteConfig.region}</p>
          <p>{siteConfig.location}</p>
          <p>{siteConfig.streetAddress}</p>
          <p><strong>До моря — около {siteConfig.seaWalkMinutes} минут пешком.</strong></p>
          <a
            className="primary-btn"
            href="https://yandex.ru/maps/?text=%D0%90%D1%80%D1%85%D0%B8%D0%BF%D0%BE-%D0%9E%D1%81%D0%B8%D0%BF%D0%BE%D0%B2%D0%BA%D0%B0%2C%20%D0%9E%D1%80%D0%B5%D1%85%D0%BE%D0%B2%D0%B0%D1%8F%2023%D0%90"
            target="_blank"
            rel="noreferrer"
          >
            <Route size={18} aria-hidden="true" />
            Построить маршрут
          </a>
        </div>
        <div className="map-placeholder" aria-label="Место для Яндекс Карты">
          <div>
            <MapPin size={38} aria-hidden="true" />
            <h2>Яндекс Карта</h2>
            <p>После подключения ключа или embed-кода здесь будет интерактивная карта с маркером гостевого дома.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

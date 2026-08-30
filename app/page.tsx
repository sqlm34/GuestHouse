import { MapPin, MessageCircle, Route, Users, Waves } from 'lucide-react';
import { BookingForm } from '@/components/booking-form';
import { FeatureStrip } from '@/components/site-shell';
import { RoomCard } from '@/components/room-card';
import { rooms, siteConfig, formatRub, roomTotal } from '@/lib/site-data';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <img
          className="hero-bg"
          src="/images/hero/guest-house-hero.webp?v=20260830-2"
          alt="Территория гостевого дома Ореховая 23А"
          fetchPriority="high"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Архипо-Осиповка • 5 минут до моря</p>
          <h1>Гостевой дом «Ореховая 23А» в Архипо-Осиповке</h1>
          <p className="hero-lead">Уютный отдых всего в 5 минутах пешком от Чёрного моря</p>
          <div className="hero-facts">
            <span>
              <Waves size={18} /> 5 минут до моря
            </span>
            <span>
              <Users size={18} /> номера на 2, 3 и 5 человек
            </span>
            <span>{formatRub(siteConfig.pricePerPerson)} с человека</span>
          </div>
          <div className="hero-actions">
            <a className="primary-btn" href="/rooms">
              Посмотреть номера
            </a>
            <a className="outline-btn" href="#booking">
              <MessageCircle size={18} aria-hidden="true" />
              Забронировать
            </a>
          </div>
        </div>
      </section>

      <FeatureStrip />

      <section className="section" id="rooms">
        <div className="section-heading centered">
          <p className="section-kicker">Номерной фонд</p>
          <h2>Наши номера</h2>
          <p>Три категории без лишних страниц: 4 двухместных, 2 трёхместных и 2 пятиместных номера.</p>
        </div>
        <div className="rooms-grid">
          {rooms.map((room) => (
            <RoomCard key={room.slug} room={room} />
          ))}
        </div>
        <p className="capacity-note">
          Всего {siteConfig.totalRooms} номеров • максимальное размещение — {siteConfig.maxGuests} человека
        </p>
      </section>

      <section className="split-section" id="about">
        <div className="text-panel">
          <p className="section-kicker">О доме</p>
          <h2>Спокойный отдых рядом с морем</h2>
          <p>
            Гостевой дом «Ореховая 23А» находится в Архипо-Осиповке. Сайт создан для прямых заявок без посредников:
            гость выбирает даты и тип номера, а владелец подтверждает наличие после обращения.
          </p>
          <div className="mini-stats">
            <span>5 минут пешком до моря</span>
            <span>8 номеров</span>
            <span>до 24 гостей</span>
          </div>
        </div>
        <img src="/images/property/property-03.webp" alt="Территория гостевого дома" loading="lazy" />
      </section>

      <section className="sea-band">
        <div>
          <p className="section-kicker">Главное преимущество</p>
          <h2>Море всего в 5 минутах пешком</h2>
          <p>От гостевого дома «Ореховая 23А» до моря можно дойти пешком примерно за 5 минут.</p>
          <a className="primary-btn small" href="/location">
            <Route size={17} aria-hidden="true" />
            Как добраться
          </a>
        </div>
        <img src="/images/location/location-01.webp" alt="Море и окрестности Архипо-Осиповки" loading="lazy" />
      </section>

      <section className="section price-section">
        <div className="section-heading">
          <p className="section-kicker">Цены</p>
          <h2>Стоимость — {formatRub(siteConfig.pricePerPerson)} с человека в сутки</h2>
          <p>Расчётные цены автоматически считаются от единой цены в конфиге сайта.</p>
        </div>
        <div className="price-table" aria-label="Цены на проживание">
          {rooms.map((room) => (
            <div className="price-row" key={room.slug}>
              <span>{room.title}</span>
              <span>{room.capacity} гостя</span>
              <strong>{formatRub(roomTotal(room.capacity))}/сутки</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section booking-section" id="booking">
        <BookingForm />
      </section>

      <section className="location-strip">
        <div>
          <MapPin size={26} aria-hidden="true" />
          <h2>Где мы находимся</h2>
          <p>{siteConfig.region}, {siteConfig.location}, {siteConfig.streetAddress}</p>
          <p>До моря — около {siteConfig.seaWalkMinutes} минут пешком.</p>
        </div>
        <a className="outline-dark-btn" href="/location">Построить маршрут</a>
      </section>
    </main>
  );
}

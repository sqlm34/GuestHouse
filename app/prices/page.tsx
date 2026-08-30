import type { Metadata } from 'next';
import { BookingForm } from '@/components/booking-form';
import { PageHero } from '@/components/site-shell';
import { rooms, siteConfig, formatRub, roomTotal } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Цены',
  description: 'Цены на проживание в гостевом доме «Ореховая 23А»: 1 500 ₽ с человека в сутки.',
  alternates: { canonical: '/prices' },
};

export default function PricesPage() {
  return (
    <main>
      <PageHero title="Цены на проживание" text={`${formatRub(siteConfig.pricePerPerson)} с человека в сутки. Итоговая стоимость зависит от дат и количества гостей.`} />
      <section className="page-content price-section">
        <div className="section-heading">
          <p className="section-kicker">Единый тариф</p>
          <h2>{formatRub(siteConfig.pricePerPerson)} с человека</h2>
          <p>Калькулятор показывает предварительную стоимость. Наличие номера подтверждается после заявки.</p>
        </div>
        <div className="price-table">
          {rooms.map((room) => (
            <div className="price-row" key={room.slug}>
              <span>{room.title}</span>
              <span>{room.capacity} гостя</span>
              <strong>{formatRub(roomTotal(room.capacity))}/сутки</strong>
            </div>
          ))}
        </div>
      </section>
      <section className="section booking-section">
        <BookingForm compact />
      </section>
    </main>
  );
}

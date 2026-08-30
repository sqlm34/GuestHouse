import type { Metadata } from 'next';
import { PageHero } from '@/components/site-shell';
import { RoomCard } from '@/components/room-card';
import { rooms } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Номера',
  description: 'Двухместные, трёхместные и пятиместные номера гостевого дома «Ореховая 23А» в Архипо-Осиповке.',
  alternates: { canonical: '/rooms' },
};

export default function RoomsPage() {
  return (
    <main>
      <PageHero
        title="Номера на 2, 3 и 5 человек"
        text="8 номеров для отдыха в Архипо-Осиповке. Стоимость рассчитывается от единой цены за человека в сутки."
      />
      <section className="section">
        <div className="rooms-grid">
          {rooms.map((room) => (
            <RoomCard key={room.slug} room={room} />
          ))}
        </div>
      </section>
    </main>
  );
}

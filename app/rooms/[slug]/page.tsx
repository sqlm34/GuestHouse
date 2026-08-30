import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BookingForm } from '@/components/booking-form';
import { rooms, siteConfig, formatRub, roomTotal } from '@/lib/site-data';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const room = rooms.find((item) => item.slug === slug);

  if (!room) {
    return {};
  }

  return {
    title: room.title,
    description: `${room.title} в гостевом доме «Ореховая 23А»: до ${room.capacity} гостей, ${formatRub(siteConfig.pricePerPerson)} с человека в сутки.`,
    alternates: { canonical: `/rooms/${room.slug}` },
    openGraph: {
      title: `${room.title} | Ореховая 23А`,
      description: room.lead,
      images: [room.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${room.title} | Ореховая 23А`,
      description: room.lead,
      images: [room.image],
    },
  };
}

export default async function RoomPage({ params }: Props) {
  const { slug } = await params;
  const room = rooms.find((item) => item.slug === slug);

  if (!room) {
    notFound();
  }

  return (
    <main>
      <section className="page-hero">
        <img src={room.image} alt="" />
        <div>
          <p className="eyebrow">Номерной фонд</p>
          <h1>{room.title}</h1>
          <p>{room.lead}</p>
        </div>
      </section>
      <section className="page-content room-detail">
        <div>
          <div className="room-gallery">
            {room.gallery.map((src) => (
              <img key={src} src={src} alt={`${room.title}: фото`} loading="lazy" />
            ))}
          </div>
        </div>
        <aside className="detail-card">
          <h2>{room.title}</h2>
          <p>{room.description}</p>
          <p>
            <strong>{room.count}</strong> номера • до <strong>{room.capacity}</strong> гостей
          </p>
          <p>
            <strong>{formatRub(siteConfig.pricePerPerson)}</strong> с человека в сутки
          </p>
          <p>При полном размещении: {formatRub(roomTotal(room.capacity))} / сутки за номер.</p>
          <a className="primary-btn" href="/#booking">Забронировать</a>
        </aside>
      </section>
      <section className="section booking-section">
        <BookingForm compact />
      </section>
    </main>
  );
}

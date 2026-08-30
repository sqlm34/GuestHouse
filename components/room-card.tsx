import { BedDouble, Users } from 'lucide-react';
import { Room, formatRub, roomTotal, siteConfig } from '@/lib/site-data';

export function RoomCard({ room }: { room: Room }) {
  return (
    <article className="room-card">
      <div className="room-image">
        <img src={room.image} alt={room.title} loading="lazy" />
        <span>{room.count} номера</span>
      </div>
      <div className="room-card-body">
        <h3>{room.title}</h3>
        <p>{room.lead}</p>
        <div className="room-meta">
          <span>
            <Users size={16} aria-hidden="true" /> до {room.capacity} гостей
          </span>
          <span>
            <BedDouble size={16} aria-hidden="true" /> {room.count} номера
          </span>
        </div>
        <div className="room-price">
          <strong>{formatRub(roomTotal(room.capacity))} / сутки</strong>
          <span>{formatRub(siteConfig.pricePerPerson)} с человека</span>
        </div>
        <div className="card-actions">
          <a className="ghost-btn" href={`/rooms/${room.slug}`}>
            Подробнее
          </a>
          <a className="primary-btn small" href="/#booking">
            Забронировать
          </a>
        </div>
      </div>
    </article>
  );
}

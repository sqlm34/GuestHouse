'use client';

import { FormEvent, useMemo, useState } from 'react';
import { CalendarDays, Send } from 'lucide-react';
import { rooms, siteConfig, formatRub } from '@/lib/site-data';
import { trackEvent } from '@/lib/analytics';

const today = new Date().toISOString().slice(0, 10);

function getNights(checkIn: string, checkOut: string) {
  if (!checkIn || !checkOut) {
    return 0;
  }

  const start = new Date(`${checkIn}T12:00:00`);
  const end = new Date(`${checkOut}T12:00:00`);
  const diff = Math.round((end.getTime() - start.getTime()) / 86_400_000);
  return diff > 0 ? diff : 0;
}

export function BookingForm({ compact = false }: { compact?: boolean }) {
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomSlug, setRoomSlug] = useState(rooms[0].slug);
  const [sent, setSent] = useState(false);

  const guests = Math.max(1, adults + children);
  const nights = getNights(checkIn, checkOut);
  const total = guests * siteConfig.pricePerPerson * nights;

  const selectedRoom = useMemo(
    () => rooms.find((room) => room.slug === roomSlug) ?? rooms[0],
    [roomSlug],
  );

  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    trackEvent('booking_submit', { guests, nights, room: selectedRoom.slug });
    setSent(true);
  }

  return (
    <form className={compact ? 'booking-panel compact' : 'booking-panel'} onSubmit={submitBooking}>
      <div className="section-kicker">
        <CalendarDays size={18} aria-hidden="true" />
        Прямая заявка владельцу
      </div>
      <h2>{compact ? 'Забронировать отдых' : 'Заявка на бронирование'}</h2>

      <div className="form-grid">
        <label>
          Дата заезда
          <input type="date" min={today} value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
        </label>
        <label>
          Дата выезда
          <input type="date" min={checkIn || today} value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />
        </label>
        <label>
          Взрослые
          <input type="number" min="1" max="24" value={adults} onChange={(e) => setAdults(Number(e.target.value))} required />
        </label>
        <label>
          Дети
          <input type="number" min="0" max="24" value={children} onChange={(e) => setChildren(Number(e.target.value))} />
        </label>
        <label>
          Тип номера
          <select value={roomSlug} onChange={(e) => setRoomSlug(e.target.value)}>
            {rooms.map((room) => (
              <option key={room.slug} value={room.slug}>
                {room.title.toLowerCase()}
              </option>
            ))}
          </select>
        </label>
        <label>
          Количество гостей
          <input type="number" value={guests} readOnly aria-label="Общее количество гостей" />
        </label>
      </div>

      {!compact && (
        <div className="form-grid guest-data">
          <label>
            Имя
            <input name="name" autoComplete="name" required />
          </label>
          <label>
            Телефон
            <input name="phone" inputMode="tel" autoComplete="tel" required />
          </label>
          <label className="wide">
            Комментарий
            <textarea name="comment" rows={4} />
          </label>
        </div>
      )}

      <div className="estimate" aria-live="polite">
        <span>{nights || 0} ночей</span>
        <span>{guests} гостей</span>
        <strong>{total > 0 ? formatRub(total) : 'Выберите даты'}</strong>
      </div>
      <p className="fine-print">
        Окончательную стоимость и наличие номера подтвердит владелец после получения заявки.
      </p>
      <button className="primary-btn" type="submit">
        <Send size={18} aria-hidden="true" />
        Отправить заявку
      </button>
      {sent && (
        <p className="success-message" role="status">
          Спасибо! Мы получили вашу заявку. Свяжемся с вами для подтверждения наличия номера и бронирования.
        </p>
      )}
    </form>
  );
}

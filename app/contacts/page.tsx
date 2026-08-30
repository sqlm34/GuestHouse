import type { Metadata } from 'next';
import { MessageCircle, Phone, Send } from 'lucide-react';
import { BookingForm } from '@/components/booking-form';
import { PageHero } from '@/components/site-shell';
import { siteConfig } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Контакты гостевого дома «Ореховая 23А» в Архипо-Осиповке. Контактные данные хранятся централизованно в настройках сайта.',
  alternates: { canonical: '/contacts' },
};

export default function ContactsPage() {
  return (
    <main>
      <PageHero title="Контакты" text={`${siteConfig.name}. ${siteConfig.location}, ${siteConfig.streetAddress}.`} />
      <section className="page-content">
        <div className="contact-grid">
          <div className="contact-card">
            <Phone size={28} aria-hidden="true" />
            <h2>Телефон</h2>
            <p>Не указан. Добавляется в едином конфиге сайта.</p>
          </div>
          <div className="contact-card">
            <MessageCircle size={28} aria-hidden="true" />
            <h2>WhatsApp</h2>
            <p>Не указан. После добавления появится быстрая ссылка для гостей.</p>
          </div>
          <div className="contact-card">
            <Send size={28} aria-hidden="true" />
            <h2>Telegram</h2>
            <p>Не указан. Хранится отдельно от компонентов интерфейса.</p>
          </div>
        </div>
      </section>
      <section className="section booking-section">
        <BookingForm />
      </section>
    </main>
  );
}

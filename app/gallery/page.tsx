import type { Metadata } from 'next';
import { GalleryViewer } from '@/components/gallery-viewer';
import { PageHero } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'Фотографии',
  description: 'Фотографии гостевого дома «Ореховая 23А»: дом, территория, номера, море и окрестности.',
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero title="Фотографии" text="Реальные изображения объекта разложены по категориям для быстрой замены и пополнения." />
      <section className="page-content">
        <GalleryViewer />
      </section>
    </main>
  );
}

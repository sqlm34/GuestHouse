'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { galleryGroups } from '@/lib/site-data';
import { trackEvent } from '@/lib/analytics';

const allImages = galleryGroups.flatMap((group) =>
  group.images.map((src) => ({ src, title: group.title })),
);

export function GalleryViewer() {
  const [active, setActive] = useState<number | null>(null);

  function open(index: number) {
    trackEvent('gallery_open', { index });
    setActive(index);
  }

  function move(direction: number) {
    if (active === null) {
      return;
    }
    setActive((active + direction + allImages.length) % allImages.length);
  }

  return (
    <>
      <div className="gallery-groups">
        {galleryGroups.map((group) => (
          <section className="gallery-group" key={group.title}>
            <h2>{group.title}</h2>
            <div className="gallery-grid">
              {group.images.map((src) => {
                const index = allImages.findIndex((item) => item.src === src);
                return (
                  <button className="gallery-tile" key={src} type="button" onClick={() => open(index)}>
                    <img src={src} alt={`${group.title}: фотография гостевого дома`} loading="lazy" />
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Просмотр фотографии">
          <button className="icon-btn close" type="button" onClick={() => setActive(null)} aria-label="Закрыть">
            <X size={22} />
          </button>
          <button className="icon-btn prev" type="button" onClick={() => move(-1)} aria-label="Предыдущее фото">
            <ChevronLeft size={28} />
          </button>
          <img src={allImages[active].src} alt={allImages[active].title} />
          <button className="icon-btn next" type="button" onClick={() => move(1)} aria-label="Следующее фото">
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </>
  );
}

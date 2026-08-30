import type { MetadataRoute } from 'next';
import { rooms } from '@/lib/site-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/rooms', '/gallery', '/prices', '/location', '/contacts', ...rooms.map((room) => `/rooms/${room.slug}`)];

  return routes.map((url) => ({
    url: `https://orehovaya-23a.example${url}`,
    lastModified: new Date('2026-08-30'),
    changeFrequency: 'weekly',
    priority: url === '/' ? 1 : 0.8,
  }));
}

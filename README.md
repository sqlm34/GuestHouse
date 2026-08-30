# Гостевой дом «Ореховая 23А»

Production-ready сайт гостевого дома в Архипо-Осиповке.

## Запуск

```bash
npm install
npm run dev
```

Локальная разработка открывается на `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Где менять данные

- Цена, адрес, контакты, аналитика и номерной фонд: `lib/site-data.ts`
- Главная страница: `app/page.tsx`
- Страницы номеров: `app/rooms/page.tsx` и `app/rooms/[slug]/page.tsx`
- Фотографии: `public/images/`
- Данные, которые нужно запросить у владельца: `CONTENT_TODO.md`

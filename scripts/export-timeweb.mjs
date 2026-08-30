import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const origin = (process.env.TIMEWEB_EXPORT_ORIGIN || 'http://127.0.0.1:8787').replace(/\/$/, '');
const outputDir = path.resolve('timeweb-dist');
const routes = [
  '/',
  '/rooms',
  '/rooms/dvuhmestnyy',
  '/rooms/trehmestnyy',
  '/rooms/pyatimestnyy',
  '/gallery',
  '/prices',
  '/location',
  '/contacts',
];

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(path.resolve('dist/client'), outputDir, { recursive: true });

for (const route of routes) {
  const response = await fetch(`${origin}${route}`);
  if (!response.ok) {
    throw new Error(`Failed to export ${route}: HTTP ${response.status}`);
  }

  const targetDir = route === '/' ? outputDir : path.join(outputDir, route.slice(1));
  await mkdir(targetDir, { recursive: true });
  await writeFile(path.join(targetDir, 'index.html'), await response.text(), 'utf8');
}

for (const asset of ['robots.txt', 'sitemap.xml']) {
  const response = await fetch(`${origin}/${asset}`);
  if (!response.ok) {
    throw new Error(`Failed to export ${asset}: HTTP ${response.status}`);
  }
  await writeFile(path.join(outputDir, asset), await response.text(), 'utf8');
}

const notFound = await fetch(`${origin}/missing-page-test`);
await writeFile(path.join(outputDir, '404.html'), await notFound.text(), 'utf8');

console.log(`Timeweb export created at ${outputDir}`);

import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const ORIGIN = 'https://sengolinternationaluniversity.edu.in';
const OUT = join(process.cwd(), 'public');

// Real asset paths discovered from the live site
const paths = [
  '/_next/static/media/author-1.6e5576e9.png',
  '/_next/static/media/author-2.999b92f3.png',
  '/_next/static/media/author-3.915f8eee.png',
  '/_next/static/media/logo.f9c66d3b.png',
  '/_next/static/media/quote.373ecaf5.svg',
  '/_next/static/media/sengolBanner1.f7e7f3cf.png',
  '/_next/static/media/sengolBanner2.b2d35593.png',
  '/_next/static/media/sengolBanner3.7d0708e4.png',
  '/aboutUsImg.png',
  '/courseImages/Education-and-Physical-Education.png',
  '/courseImages/School-of-Animation.jpg',
  '/courseImages/School-of-Arts-and-Social-Studies.jpeg.jpg',
  '/courseImages/School-of-Fire-&-Safety.jpg',
  '/courseImages/School-of-Journalism-&-Mass-Media-Communication.jpg',
  '/courseImages/School-of-Law.jpg',
  '/courseImages/School-of-Para-Medical-Science.jpg',
  '/courseImages/School-of-Philosophy-and-Research.jpg',
  '/courseImages/School-of-Science.png',
  '/courseImages/School-of-Vocational-Studies.png',
  '/images/courses/commerce.jpg',
  '/images/courses/computer.jpg',
  '/images/courses/course.jpg',
  '/images/courses/engineering.jpg',
  '/images/courses/hotel.jpg',
  '/images/courses/library.jpg',
  '/images/logo.png',
  '/photo/2019/09/25/07/07/graduation-4502796_1280.jpg',
  '/favicon.ico',
];

// Map _next/static/media to a clean /assets path for local use
function localPath(p) {
  if (p.startsWith('/_next/static/media/')) {
    return p.replace('/_next/static/media/', '/assets/');
  }
  return p;
}

async function download(p) {
  const url = ORIGIN + encodeURI(p);
  try {
    const res = await fetch(url);
    if (!res.ok) { console.error('FAIL', res.status, p); return false; }
    const buf = Buffer.from(await res.arrayBuffer());
    const dest = join(OUT, localPath(p));
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    console.log('OK', localPath(p), buf.length);
    return true;
  } catch (e) {
    console.error('ERR', p, e.message);
    return false;
  }
}

async function batched(items, size) {
  for (let i = 0; i < items.length; i += size) {
    await Promise.all(items.slice(i, i + size).map(download));
  }
}

await batched(paths, 4);
console.log('done');

const CACHE_NAME = 'fahey-game-v8';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './dialects.js',
  './game.js',
  './words.js',
  './manifest.json',
  './2.jpeg',
  './3.jpeg',
  './4.jpeg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(e.request).catch(() => {
        // إذا كان أوفلاين والطلب لصفحة HTML
        if (e.request.destination === 'document') {
          return caches.match('./index.html');
        }
      });
    })
  );
});

const CACHE_NAME = 'camzon-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Installs worker asset blocks instantly
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// High-speed browser data network pipeline interception
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});

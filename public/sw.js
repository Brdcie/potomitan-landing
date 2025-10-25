const CACHE_NAME = 'potomitan-landing-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo-potomitan.svg',
  '/logo-potomitan-fond-blanc.svg'
];

// Installation du Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Installation...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Mise en cache des fichiers');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting()) // Active immédiatement
  );
});

// Activation du Service Worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Activation...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Suppression ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Stratégie de cache: Network First, fallback to Cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Clone la réponse car elle ne peut être consommée qu'une fois
        const responseToCache = response.clone();

        // Met à jour le cache avec la nouvelle version
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      })
      .catch(() => {
        // Si le réseau échoue, utilise le cache
        return caches.match(event.request).then((response) => {
          if (response) {
            console.log('[SW] Retour depuis le cache:', event.request.url);
            return response;
          }

          // Si pas dans le cache, retourne une page d'erreur simple
          if (event.request.destination === 'document') {
            return caches.match('/index.html');
          }
        });
      })
  );
});

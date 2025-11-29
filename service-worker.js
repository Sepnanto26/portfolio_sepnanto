self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('portfolio-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/assets/css/style.css',
        '/assets/js/script.js',
        '/assets/images/foto_saya.jpeg'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});

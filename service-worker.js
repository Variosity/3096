self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('3096-cache').then((cache)=> {
         return cache.addAll([
            '/',
            '/index.html',
            '/styles/style.css',
            '/scripts/app.js',
            '/manifest.json',
        ]);
    })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response)=> {
            return response || fetch(event.request);
        })
    );
});
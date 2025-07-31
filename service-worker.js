self.addEventListener('install', event =>{
    event.waitUntil(
        caches.open('mi-pwa-cache').then(cache => {
            return cache.addAll([
                "/",
                "index.html",
                "login.css",
                "menu.html",
                "menu.css",
                "fondo.png",
                "login.js",
            ]);
        })
    );
    console.log('service Worker instalado');
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(respuesta => respuesta || fetch(event.request))
    );
});
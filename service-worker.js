const CACHE_NAME = "enigma-cache-v1";

const urlsToCache = [
    "/",
    "/index.html",
    "/anas.jpg"
];

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })

    );

});

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)
            .then(response => {

                return response || fetch(event.request);

            })

    );

});

self.addEventListener("activate", event => {
    event.waitUntil(self.clients.claim());
});

/* =====================================
   GYM TRACKER - SERVICE WORKER v39
   CACHE OFFLINE COMPLETA
===================================== */

const CACHE_NAME = "gym-tracker-v39";

const APP_FILES = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js",
    "./manifest.json",
    "./assets/icons/icon-192.png",
    "./assets/icons/icon-512.png",
    "./assets/icons/apple-touch-icon.png",
    "./assets/exercises/bicep-curl.jpg",
    "./assets/exercises/cable-row.jpg",
    "./assets/exercises/chest-press.jpg",
    "./assets/exercises/hip-thrust.jpg",
    "./assets/exercises/lat-machine.jpg",
    "./assets/exercises/lateral-raise.jpg",
    "./assets/exercises/leg-curl.jpg",
    "./assets/exercises/leg-press.jpg",
    "./assets/exercises/rdl-dumbbells.jpg",
    "./assets/exercises/tricep-pushdown.jpg"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(APP_FILES))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys
                    .filter(key => key.startsWith("gym-tracker-") && key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            )
        ).then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", event => {
    const request = event.request;
    if (request.method !== "GET") return;

    const url = new URL(request.url);
    if (url.origin !== self.location.origin) return;

    event.respondWith((async () => {
        const cached = await caches.match(request);
        if (cached) return cached;

        try {
            const response = await fetch(request);
            if (response && response.ok) {
                const cache = await caches.open(CACHE_NAME);
                cache.put(request, response.clone());
            }
            return response;
        } catch {
            if (request.mode === "navigate") {
                return (await caches.match("./index.html")) ||
                    new Response("Gym Tracker non disponibile offline.", {
                        status: 503,
                        headers: { "Content-Type": "text/plain; charset=utf-8" }
                    });
            }

            return new Response("Risorsa non disponibile offline.", {
                status: 503,
                headers: { "Content-Type": "text/plain; charset=utf-8" }
            });
        }
    })());
});

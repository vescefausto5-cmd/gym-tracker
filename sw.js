/* =====================================
   GYM TRACKER - SERVICE WORKER v44
   CACHE OFFLINE COMPLETA
===================================== */

const CACHE_NAME = "gym-tracker-v44";

const APP_FILES = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js",
    "./pdf-import.js",
    "./manifest.json"
];

const OPTIONAL_FILES = [
    "./assets/icons/icon-192.png",
    "./assets/icons/icon-512.png",
    "./assets/icons/apple-touch-icon.png",
    "./assets/exercises/bicep-curl.jpg",
    "./assets/exercises/cable-row.jpg",
    "./assets/exercises/chest-press-inclinata.jpg",
    "./assets/exercises/chest-press.jpg",
    "./assets/exercises/croci-cavi.jpg",
    "./assets/exercises/dead-bug.jpg",
    "./assets/exercises/hack-squat.jpg",
    "./assets/exercises/hip-thrust.jpg",
    "./assets/exercises/lat-machine-presa-neutra.jpg",
    "./assets/exercises/lat-machine.jpg",
    "./assets/exercises/lateral-raise.jpg",
    "./assets/exercises/leg-curl.jpg",
    "./assets/exercises/leg-extension.jpg",
    "./assets/exercises/leg-press.jpg",
    "./assets/exercises/low-row.jpg",
    "./assets/exercises/machine-row.jpg",
    "./assets/exercises/pallof-press.jpg",
    "./assets/exercises/panca-piana.jpg",
    "./assets/exercises/plank-rialzato.jpg",
    "./assets/exercises/rdl-dumbbells.jpg",
    "./assets/exercises/shoulder-press.jpg",
    "./assets/exercises/tricep-pushdown.jpg"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(async cache => {
                await cache.addAll(APP_FILES.map(path => new Request(path, {cache: "reload"})));
                await Promise.allSettled(OPTIONAL_FILES.map(path => cache.add(path)));
            })
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
        const isAppShell = request.mode === "navigate" ||
            /\/(?:index\.html|app\.js|pdf-import\.js|style\.css|manifest\.json|sw\.js)$/.test(url.pathname);
        const cached = await caches.match(request);
        if (!isAppShell && cached) return cached;

        try {
            const response = await fetch(request);
            if (response && response.ok) {
                const cache = await caches.open(CACHE_NAME);
                try { await cache.put(request, response.clone()); } catch (error) { console.warn("Cache:", error); }
            }
            return response;
        } catch {
            if (cached) return cached;
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

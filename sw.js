/* =====================================
   GYM TRACKER - SERVICE WORKER
   Versione 3.1
===================================== */

const CACHE_NAME = "gym-tracker-v31";

const APP_FILES = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js",
    "./manifest.json"
];

const OPTIONAL_ASSETS = [
    "./assets/exercises/leg-press.jpg",
    "./assets/exercises/chest-press.jpg",
    "./assets/exercises/lat-machine.jpg",
    "./assets/exercises/leg-curl.jpg",
    "./assets/exercises/rdl-dumbbells.jpg",
    "./assets/exercises/cable-row.jpg",
    "./assets/exercises/lateral-raise.jpg",
    "./assets/exercises/hip-thrust.jpg",
    "./assets/exercises/tricep-pushdown.jpg",
    "./assets/exercises/bicep-curl.jpg",
    "./assets/icons/icon-192.png",
    "./assets/icons/icon-512.png"
];

// INSTALLAZIONE
self.addEventListener("install", event => {
    event.waitUntil(
        (async () => {
            const cache = await caches.open(CACHE_NAME);
            await cache.addAll(APP_FILES);
            // Pre-carica immagini e icone senza bloccare l'installazione se un file manca
            await Promise.allSettled(
                OPTIONAL_ASSETS.map(url => cache.add(url))
            );
            await self.skipWaiting();
        })()
    );
});

// ATTIVAZIONE E PULIZIA VECCHIE CACHE
self.addEventListener("activate", event => {
    event.waitUntil(
        (async () => {
            const keys = await caches.keys();

            await Promise.all(
                keys
                    .filter(key =>
                        key.startsWith("gym-tracker-") &&
                        key !== CACHE_NAME
                    )
                    .map(key => caches.delete(key))
            );

            await self.clients.claim();
        })()
    );
});

// GESTIONE RICHIESTE
self.addEventListener("fetch", event => {
    const request = event.request;

    if (request.method !== "GET") return;

    const url = new URL(request.url);

    // Non gestire richieste verso altri siti (es. future API cloud)
    if (url.origin !== self.location.origin) return;

    // Pagine: prima rete, poi cache
    if (request.mode === "navigate") {
        event.respondWith(
            (async () => {
                try {
                    const response = await fetch(request);

                    if (response && response.ok) {
                        const cache = await caches.open(CACHE_NAME);
                        await cache.put("./index.html", response.clone());
                    }

                    return response;
                } catch (error) {
                    return (
                        await caches.match("./index.html") ||
                        await caches.match("./")
                    );
                }
            })()
        );

        return;
    }

    // File statici e immagini: prima cache, poi rete
    event.respondWith(
        (async () => {
            const cached = await caches.match(request);

            if (cached) return cached;

            try {
                const response = await fetch(request);

                if (response && response.ok) {
                    const cache = await caches.open(CACHE_NAME);
                    await cache.put(request, response.clone());
                }

                return response;
            } catch (error) {
                return new Response(
                    "Risorsa non disponibile offline",
                    {
                        status: 503,
                        headers: {
                            "Content-Type": "text/plain; charset=utf-8"
                        }
                    }
                );
            }
        })()
    );
});
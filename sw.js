
/* =====================================
   GYM TRACKER - SERVICE WORKER v37
   SUPPORTO OFFLINE
===================================== */

const CACHE_NAME = "gym-tracker-v37";

const APP_FILES = [
    "./",
    "./index.html",
    "./style.css",
    "./style.css?v=36",
    "./app.js",
    "./manifest.json"
];

// INSTALLAZIONE E CACHE INIZIALE
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache =>
            cache.addAll(APP_FILES)
        )
    );

    self.skipWaiting();
});

// ATTIVAZIONE E PULIZIA VECCHIE CACHE
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys
                    .filter(key =>
                        key.startsWith("gym-tracker-") &&
                        key !== CACHE_NAME
                    )
                    .map(key => caches.delete(key))
            )
        )
    );

    self.clients.claim();
});

// GESTIONE DELLE RICHIESTE
self.addEventListener("fetch", event => {

    const request = event.request;

    // Solo richieste GET
    if (request.method !== "GET") return;

    const url = new URL(request.url);

    // Solo risorse della nostra applicazione
    if (url.origin !== self.location.origin) return;

    event.respondWith(
        fetch(request)
            .then(response => {

                if (response && response.ok) {
                    const copy = response.clone();

                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(request, copy);
                    });
                }

                return response;
            })
            .catch(async () => {

                const cached = await caches.match(request);

                if (cached) return cached;

                // Se non troviamo la pagina richiesta,
                // restituiamo la schermata principale.
                if (request.mode === "navigate") {
                    return await caches.match("./index.html");
                }

                return new Response(
                    "Risorsa non disponibile offline",
                    {
                        status: 503,
                        headers: {
                            "Content-Type": "text/plain; charset=utf-8"
                        }
                    }
                );
            })
    );
});

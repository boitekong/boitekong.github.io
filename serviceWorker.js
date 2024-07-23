/**
 @description This service worker handles the caching of assets dynamically.
 @installEvent Caches the assets dynamically as they are fetched.
 @activateEvent Clears old caches when a new version is activated.
 @fetchEvent Serves cached assets if available, otherwise fetches from the network and caches them dynamically.

 */
const cacheName = "BoitekongEats@v1";
self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== cacheName) {
            return caches.delete(name);
          }
        })
      );
    })
  );
  console.log("Service worker is active!");
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(networkResponse => {
          return caches.open(cacheName).then(cache => {
            // Cache the new file dynamically
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
      .catch(error => {
        console.error("Fetching failed:", error);
        throw error;
      })
  );
  console.log("Service worker ready to fetch data.");
});

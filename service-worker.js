var cacheName = "petstore";
var cachefiles = [
  "index.html",
  "product.js",
  "petstore.webmanifest",
  "images/store_icon.jpg",
  "images/images.jpg",
  "images/images2.jpg",
  "images/images3.jpg",
];

self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("[Service Worker] caching files");
      return cache.addAll(cachefiles);
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (r) {
      // Download the file if it is not in the cache,
      return (
        r ||
        fetch(e.request).then(function (response) {
          // add the new file to cache
          return caches.open(cacheName).then(function (cache) {
            cache.put(e.request, response.clone());
            return response;
          });
        })
      );
    })
  );
});

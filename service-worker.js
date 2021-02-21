var cacheName = "petstore";
var cachefiles = [
  "index.html",
  "product.js",
  "index.webmanifest",
  "images/store-icon.jpg",
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

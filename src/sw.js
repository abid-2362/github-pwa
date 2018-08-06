var cacheName = "github-pwa";
var filesToCache = [
  '/index.html',
  '/assets/js/main.js',
  '/assets/css/main.css',
  '/offline.json',
  '/favicon.ico',
  '/',
];
self.addEventListener('install', function (e) {
  console.log('[ServiceWorker] install');
  e.waitUntil(
    caches.open(cacheName)
      .then(function (cache) {
        return cache.addAll(filesToCache);
      })
  );
});

self.addEventListener('activate', function (e) {
  console.log('[ServiceWorker] activate');
  e.waitUntil(
    caches.keys()
      .then(function (keyList) {
        return Promise.all(keyList.map(function (key) {
          if (key !== cacheName) {
            console.log("service worker deleting the old key", key);
            return caches.delete(key);
          }
        }));
      })
  );
  self.clients.claim();
});


self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request.url)
      .then(function (response) {
        if (response)
          return response;

        if (!navigator.onLine) {
          console.log('no internet to get result from', e.request.url);
          return caches.match(new Request('/offline.json'));
        } else {
          return fetch(e.request);
        }
      })
  );
});

function fetchAndUpdate(request) {
  return fetch(request)
  .then(function(res){
    if(res) {
      return caches.open(cacheName)
      .then(function(cache){
        return cache.put(request, res.clone())
        .then(function() {
          return res;
        })
      });
    }
  })
}
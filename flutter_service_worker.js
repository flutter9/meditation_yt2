'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/city.png": "06e4858f9783f5de7f9ee8ba6ea8d601",
"/assets/assets/beach.jpg": "f5108255be48f8494d18e33c297df363",
"/assets/assets/lights.jpg": "146ef0ff3c3857342053ad3e09a2bf06",
"/assets/assets/face.jpg": "6c0e4b1e0bb57a286d6d3dd3e14f68ba",
"/assets/assets/anxiety.png": "6c85005905b085a3a6f66b681f75a4b0",
"/assets/assets/galaxy.jpg": "b4a84efeb4c1ff627a9b2fe179adb490",
"/assets/assets/dessert.jpg": "c409bf6144ddcb9a4338696ff085f902",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "aed87c174065e3253740deb3368da233",
"/assets/LICENSE": "86ed68af45587fbe062baf0749fd1d90",
"/main.dart.js": "3dd1bf8f63b9541839f06f51f5c805b6"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

var CACHE_NAME = 'v1';
var urlsToCache = [
    '/',
    '/styles/main.css',
    '/scripts/main.js',
    '/images/niconico.png',
    '/images/twitter-circle.svg',
    '/images/github-circle.svg',
    '/images/facebook-messenger.svg'
];

self.addEventListener('install', function(event) {
    // インストール処理
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});
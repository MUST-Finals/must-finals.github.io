/* MUST Finals service worker: offline app shell. Data stays local; analytics untouched.
   Bump CACHE on every deploy so old shells are dropped. */
const CACHE = 'must-finals-v80';
const SHELL = [
  './', 'index.html',
  'css/styles.css?v=80', 'css/expansion.css?v=80', 'css/study-planner.css?v=80',
  'js/data.js?v=80', 'js/backend.js?v=80', 'js/study-planner.js?v=80', 'js/app.js?v=80', 'js/expansion.js?v=80', 'js/smart-planner-ui.js?v=80',
  'manifest.webmanifest', 'icon.svg'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
        return res;
      }).catch(() => caches.match(e.request).then(hit => hit || caches.match('./')))
    );
    return;
  }
  /* Non-navigate: stale-while-revalidate - serve cache instantly, refresh it in
     the background so a mixed deploy self-heals on the next load. NEVER fall back
     to './' here - serving HTML to a <script> tag gets blocked (nosniff). */
  e.respondWith(
    caches.match(e.request).then(hit => {
      const fresh = fetch(e.request).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
        return res;
      }).catch(() => hit);
      return hit || fresh;
    })
  );
});

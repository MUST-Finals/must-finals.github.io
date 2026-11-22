/* MUST Finals service worker: offline app shell. Data stays local; analytics untouched.
   Bump CACHE on every deploy so old shells are dropped. */
const CACHE = 'must-finals-v122';
const SHELL = ['./', 'index.html', 'css/styles.css', 'css/expansion.css', 'js/data.js', 'js/app.js', 'js/backend.js', 'js/expansion.js', 'js/ar-extra.js', 'manifest.webmanifest', 'icon.svg'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
/* Exact cache match first; fall back to ignoreSearch only when no exact entry
   exists, so the precached shell is an offline fallback and can never pin stale
   code over a fresher versioned runtime entry. */
const matchReq = req => caches.match(req).then(exact => exact || caches.match(req, { ignoreSearch: true }));
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
        return res;
      }).catch(() => matchReq(e.request).then(hit => hit || caches.match('./')))
    );
    return;
  }
  /* Non-navigate: stale-while-revalidate - serve cache instantly, refresh it in
     the background so a mixed deploy self-heals on the next load. NEVER fall back
     to './' here - serving HTML to a <script> tag gets blocked (nosniff). */
  e.respondWith(
    matchReq(e.request).then(hit => {
      const fresh = fetch(e.request).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
        return res;
      }).catch(() => hit);
      return hit || fresh;
    })
  );
});

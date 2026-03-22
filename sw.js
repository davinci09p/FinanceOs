const CACHE_NAME = 'financeos-v2';
const ASSETS = [
  './',
  './index.html',
  'https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
  'https://fonts.gstatic.com/s/dmmono/v14/aFTR7PB1QTsUX8KYvrGyIYSnbKX9.woff2',
  'https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQeoveD5U5oVFgHWs_qjQg6hGOmmqKGjx9XKQW3wCY7BM.woff2',
];

// INSTALL — cache all assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS.filter(u => u.startsWith('http') || u.startsWith('.')))
        .catch(() => cache.add('./index.html'))
      )
      .then(() => self.skipWaiting())
  );
});

// ACTIVATE — remove old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// FETCH — cache-first for app shell, network-first for API calls
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  // Anthropic API — always go network (no cache for AI calls)
  if (e.request.url.includes('anthropic.com')) return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      const networkFetch = fetch(e.request).then(response => {
        if (response && response.status === 200 && response.type !== 'opaque') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return response;
      });
      // Return cached immediately, update in background
      return cached || networkFetch.catch(() =>
        new Response(
          `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>FinanceOS — Offline</title>
          <style>body{font-family:sans-serif;background:#0d0d14;color:#f0f0f8;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;margin:0;text-align:center;padding:24px;}
          .icon{font-size:64px;margin-bottom:16px;}.title{font-size:22px;font-weight:800;color:#22d89a;margin-bottom:8px;}.msg{font-size:13px;color:#6c6c90;line-height:1.6;max-width:280px;}.btn{margin-top:20px;padding:12px 24px;background:#22d89a;color:#000;border:none;border-radius:12px;font-size:14px;font-weight:800;cursor:pointer;}</style></head>
          <body><div class="icon">💰</div><div class="title">You're Offline</div><div class="msg">FinanceOS is still working! Your data is saved on your device. Connect to the internet to sync.</div>
          <button class="btn" onclick="location.reload()">↺ Try Again</button></body></html>`,
          { headers: { 'Content-Type': 'text/html' } }
        )
      );
    })
  );
});

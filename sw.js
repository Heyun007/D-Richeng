self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));

self.addEventListener('push',function(e){
  const data=e.data?e.data.json():{title:'DeepSeek',body:'您有一条新消息'};
  const options={
    body:data.body||'',
    icon:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%23e8e8e8"/><text x="50" y="55" text-anchor="middle" font-size="40" fill="%23666">D</text></svg>',
    badge:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%23e8e8e8"/><text x="50" y="55" text-anchor="middle" font-size="40" fill="%23666">D</text></svg>',
    tag:'ds-schedule',
    requireInteraction:true
  };
  e.waitUntil(self.registration.showNotification(data.title,options));
});

self.addEventListener('notificationclick',function(e){
  e.notification.close();
  e.waitUntil(clients.openWindow('/'));
});
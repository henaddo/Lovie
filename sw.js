self.addEventListener('install', event => {
    console.log('Service worker installing...');
    self.skipWaiting();
  });
  
  self.addEventListener('activate', event => {
    console.log('Service worker activated.');
  });
  
  self.addEventListener('fetch', function(event) {
    // Basic cache strategy
  });
  
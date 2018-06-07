// Check if a new cache is available on page load.
window.addEventListener('load', (e) => {
  window.addEventListener('updateready', (e) => {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      // Browser downloaded a new app cache.      
      if (confirm('A new version of this site is available. Load it?')) {
        window.location.reload();
      }
    } else {
      // Manifest didn't change. Nothing new to server.
    }
  }, false);
}, false);
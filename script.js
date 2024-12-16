function checkPermission() {
  if(!('serviceWorker' in navigator)) {
    throw new Error('No support for service worker!');
  }

  if(!('Notification' in window)) {
    throw new Error('No support for notification API!');
  }
}

async function registerSW() {
  const registration = await navigator.serviceWorker.register('sw.js');
  return registration;
}

async function requestNotificationPermission() {
  const permission = await Notification.requestPermission();
  if(permission !== 'granted') {
    throw new Error('Notification Permission not granted!');
  }
}

async function fetchVapidKey() {
  try {
    const response = await fetch('/vapid-key');
    const data = await response.json();
    return data.publicKey;
  } catch (error) {
    console.error("Failed to fetch VAPID public key:", error);
    throw new Error('Could not fetch VAPID public key');
  }
}

async function main() {
  try {
    checkPermission();
    await requestNotificationPermission();
    await registerSW();
  } catch (error) {
    console.error('Error in main function:', error);
  }
}
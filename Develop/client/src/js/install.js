const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default behavior
  event.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = event;
  // Update the UI to notify the user that the app can be installed
  butInstall.hidden = false;
});

// Click event handler for the `butInstall` element
butInstall.addEventListener('click', async () => {
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  const choiceResult = await deferredPrompt.userChoice;
  if (choiceResult.outcome === 'accepted') {
    console.log('User accepted the install prompt');
  } else {
    console.log('User dismissed the install prompt');
  }
  // Reset the deferred prompt variable
  deferredPrompt = null;
  // Hide the install button
  butInstall.hidden = true;
});

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('App installed');
});


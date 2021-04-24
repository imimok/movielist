/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */
this.addEventListener('fetch', function(event) {
  // it can be empty if you just want to get rid of that error
})
workbox.core.skipWaiting()

workbox.core.clientsClaim()

importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
)

import { precacheAndRoute } from 'workbox-precaching'

precacheAndRoute(self.__WB_MANIFEST)
# 30-Minute Interval Trainer PWA

This is an installable Android Progressive Web App.

## What it does
- 30-minute interval workout
- Large countdown and elapsed time
- Current minute highlighted in the bar chart
- Start/Pause combined into one button
- Reset on the same row
- Loud long bell/chime when intensity changes low → high or high → low
- True browser fullscreen button where supported
- Screen Wake Lock support to help prevent dimming
- Offline support after first successful load
- Portrait-oriented installed PWA

## Important: how to install on Android
A PWA must be served from HTTPS (or localhost) to be installable and to use Wake Lock reliably.

### Easiest hosting options
1. Upload this folder/ZIP to Netlify Drop, Cloudflare Pages, GitHub Pages, or another HTTPS static host.
2. Open the resulting HTTPS URL in Chrome on Android.
3. Chrome should offer "Install app" or "Add to Home screen."
4. Launch it from your home screen.
5. Tap "Fullscreen" and "Keep screen awake" if your device/browser requires explicit activation.

The app manifest requests `display: fullscreen`, so when launched as an installed PWA it should already use the most immersive mode Android/Chrome allows. Device navigation controls may still appear depending on your Android configuration.

## Files
- index.html
- manifest.webmanifest
- sw.js
- icons/icon-192.png
- icons/icon-512.png

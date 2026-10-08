import {
  dn as e
} from "./D2z8HFb7.js";
var t = e({
    default: () => n
  }),
  n = `## Improvements

- Added a "Show palette numbers" option in overlay More tools to hide or show remaining pixel counts on the main palette.
- Alliance overlays now open the overlay details page.
- Members with permission to manage alliance overlays can now share a personal overlay with their alliance from its details.
- Alliance overlays now use the shared Overlay Studio pixel editor and build controls across the main canvas, headquarters, and alliance drafts.

## Fixes

- Fixed unnecessary progress refreshes and reduced lag while using large overlays.
- Overlay statistics now load over unpainted map areas and refresh when alliance artwork changes.
- Fixed pinch zoom jumping in the overlay creator on phones and tablets, including when lifting or replacing a finger during a gesture.
- Fixed intermittent screen lock and unlock failures while painting, including taps with another finger on the canvas and delayed touch clicks that could toggle the lock back.
- Fixed overlays appearing shifted by one pixel on the canvas even when progress showed 100% complete.
- Fixed overlay galleries getting stuck loading when a browser image decoder stops responding. Previews now fall back to another decoder and release stalled resources.
- Fixed blocked or interrupted local storage access leaving overlay previews loading indefinitely.
- Fixed overlay colors changing between devices with different graphics memory limits. Zoomed-out overlays now retain template colors instead of blending neighboring pixels into new colors.
- Fixed JPEG and WebP overlays with embedded color profiles importing with different colors depending on browser decoding support.
- Fixed headquarters overlays staying blank after graphics initialization failures or graphics context loss. Overlays now recover automatically while preserving their image, position, opacity, and pixel mode.
`;
export {
  t as n, n as t
};
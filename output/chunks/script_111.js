import {
  dn as e
} from "./D2z8HFb7.js";
var t = e({
    default: () => n
  }),
  n = `## Features

- Added a live minimap to preview overlay artwork while editing.
- The pixel-art editor now has an actions menu for selections, layers, undo and redo, color picking, and view controls. Open it with right-click or Shift+F10 on desktop or a long press on mobile.
- Use 1-9 to show or hide layers, counting from the top of the layer list, without changing the selected layer. Customize these keys in Keyboard shortcuts; V still toggles the selected layer.
- Alliance overlays now have pixel and layer editing, layered project imports, draft recovery, gallery search and sorting, personal tags, and duplication.
- Members who manage alliance overlays can share a personal overlay with their alliance, preserving its artwork, size, opacity, and map position while keeping the personal original.
- Headquarters and draft overlays now show live progress, incorrect and unpainted pixel highlights, remaining color counts, and personal opacity controls. Hold Alt or Option to peek at the canvas.
- Headquarters and draft placements now support exact coordinates, dimensions, undo, and redo.
- Added a saved "Show palette numbers" option in overlay More tools for the main and alliance palettes.

## Fixes

- Rotating a phone or tablet keeps overlay touch controls available and keyboard hints hidden.
- Fixed editor controls being covered by transform handles or the minimap on small screens and touch devices.
- Fixed overlay colors changing in some browsers when saving or restoring editor layers and drafts, or importing PNG layers.
- Fixed incorrect and unpainted overlay markers flickering during continuous painting or spreading onto completed pixels on devices with limited graphics memory.
- Overlay progress and markers now wait for matching results after moving an overlay or changing its image or color settings.
- Fixed pinch zoom jumping in the overlay editor when lifting or replacing a finger.
- Fixed screen lock taps being ignored or toggling twice while painting.
- Fixed overlays appearing shifted by one pixel despite showing complete progress.
- Zoomed-out overlays retain their original colors across graphics memory limits, and profiled JPEG and WebP imports use consistent color handling.
- Fixed overlay previews getting stuck when image decoding or local storage fails.
- Headquarters overlays recover from graphics initialization failures and context loss.
- Conflicting alliance artwork saves keep your editor draft available to review newer changes.
`;
export {
  t as n, n as t
};
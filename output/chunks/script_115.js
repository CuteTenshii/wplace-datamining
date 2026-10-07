import {
  dn as e
} from "./D2z8HFb7.js";
var t = e({
    default: () => n
  }),
  n = `## Additions

- Pixel-art Studio now supports cutting, copying, pasting, and duplicating selections. Pasted and duplicated pixels appear on separate layers that can be moved and resized.
- Added a text tool with multiline text, font choices, size, bold, italic, alignment, spacing, and a preview before applying. Type directly on the Pixel-art Studio canvas with a text cursor, text selection, and a live preview. Enter adds a line, Ctrl/Cmd+Enter applies, and Esc cancels. Clicking another canvas point or switching tools applies the text as pixels.
- Added linear and radial gradients with intermediate palette colors when dithering is off and two-color patterns when it is on. Start and end color options appear together above dithering. Gradients fill the current selection or the whole layer.

## Improvements

- Alliance overlay images and gallery thumbnails load faster.
- The entire paint palette, including its tools and Paint button, can now be minimized to give the canvas more room. The minimized view has a larger color swatch, a clearer color name, and shows how many pixels of that color are left when painting an overlay.
- On small phones, paint tools have larger touch targets, long labels fit within the panel, and the Paint button no longer crowds the buttons beside it. The color palette scrolls on short screens to keep every color within reach.

## Fixes

- Traveling to the next pixel of a color now centers it in the visible canvas above the paint palette, keeping it from being hidden behind the panel on mobile.
- Removed extra space below game panels when mobile browser bars already provide bottom spacing.
- Fixed the Pixel-art Studio view shifting when the canvas resizes after lifting your fingers at the end of a pinch zoom.
`;
export {
  t as n, n as t
};
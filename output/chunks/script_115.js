import {
  dn as e
} from "./D2z8HFb7.js";
var t = e({
    default: () => n
  }),
  n = `## Improvements

- Selecting the current palette color again or pressing Z while building a map overlay now smoothly moves the map to a pixel of that color that still needs painting. Travel stops once that color is complete.
- Faster progress calculations in the Overlays Gallery, especially for overlays sharing the same map area.
- Progress calculations now continue when gallery cards change sort order.

## Fixes

- Fixed alliance details getting stuck loading after returning from the gallery. Failed loads now offer a retry button.
- Removed the duplicate screen lock button when building overlays in headquarters and alliance drafts. On mobile, the progress bar now fills the available width.
- Fixed slow loading when entering paint mode with large overlays containing many colors, including dithered images.
`;
export {
  t as n, n as t
};
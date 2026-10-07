import {
  dn as e
} from "./D2z8HFb7.js";
var t = e({
    default: () => n
  }),
  n = `## Improvements

- Favorite places now support filled icons and a transparent background toggle, with a live preview while editing. Background color editing is disabled while transparency is enabled.
- Existing favorites with the default hollow yellow star and black background now use a filled yellow star on a transparent background.
- Added "Use native OS cursor" under Settings > Accessibility.
- Fully expanded paint palettes now use two rows and grow sideways on desktop and landscape screens. Portrait mobile palettes keep expanding vertically. Applies to both the world map and alliance canvases.
- Paint buttons inside palettes now stay centered at their natural width.
- Added "Legacy UI" under Settings > Accessibility to restore the previous interface style.
- Updated secondary button outlines in light mode to a softer blue-gray color (#8090A8).

## Fixes

- Improved pixel font sharpness with pixel-grid hinting and reduced font smoothing.
- Fixed the login modal showing a duplicate background and border in the pixel interface.
- Fixed selected-pixel and paint panels appearing off-screen when using Legacy UI, and kept paint palettes scrollable in both interface styles.
- Matched primary and secondary button styling, preserving outline thickness and giving shadows the same thickness as the outlines.
- Fixed color-name tooltips being clipped in the main and alliance paint palettes, especially on the top row and near the edges.
- The profile button is now round to match your profile picture.
- Fixed inconsistent styling between the Droplets and Prism balance buttons.
- Kept the favorite color picker layout stable when its contrast warning appears or disappears.
`;
export {
  t as n, n as t
};
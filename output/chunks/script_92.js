import {
  dn as e
} from "./D2z8HFb7.js";
var t = e({
    default: () => n
  }),
  n = `### New features

- Alliance headquarters now include a leaderboard of canvas contributions for today, this week, this month, and all time.
- Alliance staff with overlay management permission can now use its edit dialog to place it independently on drafts, headquarters, and the main canvas.

### Improvements

- The alliance asset studio has a refreshed layout: drafts and saved versions appear as image cards on a transparency checkerboard, each draft's manage actions are grouped into a compact menu, a new draft can be bought directly from the drafts grid at its shown Coin price, and the equipped version can be unequipped right from its card.
- Finishing an asset draft and removing a saved version now ask for confirmation first.
- Styled letters with accents in alliance descriptions now display correctly on mobile devices.
- Alliance overlays now use shared positions chosen by staff. Positioning opens the selected canvas directly, where staff can set its size and color options independently.
- Alliance overlays use the same painting-guide flow on every canvas, including pixel guide modes and selected-color filtering.
- Alliance overlays refresh after staff moves them, notify viewers about the new position, and reuse images securely after rechecking access. **Existing overlays stay hidden until staff selects and positions their locations.**

### Fixes

- Captcha verification dialogs now stay in front of other dialogs.
- Alliance overlays now open at the correct opacity.
- Alliance headquarters leaderboard bars now accurately show members with no painted pixels.
- Alliance and map overlay pixel modes now switch reliably, including on large templates.
- Alliance overlay positioning now returns staff to the overlay editor, and main-canvas placements can be resized without reopening unexpectedly.
- Main-canvas alliance overlays now render reliably when reopened after being closed.
- Alliance canvases now continue showing collaborators' pixel changes while paint mode is open without discarding unconfirmed local paint.
- Pixels placed while painting alliance canvases now show crosshairs that stay aligned while panning or zooming, until the paint session is confirmed or canceled.
- Alliance headquarters canvases now keep loaded areas visible while zooming and refresh them when needed.
- Starting paint mode now keeps the current map zoom whenever individual pixels are already visible.
- Pinch zooming on headquarters canvases now stays centered beneath your fingers on touchscreens.
`;
export {
  t as n, n as t
};
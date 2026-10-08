import {
  dn as e
} from "./D2z8HFb7.js";
var t = e({
    default: () => n
  }),
  n = `### Improvements

- **Stable alliance canvas refreshes**:
  - Picture and banner canvases now keep their pan and zoom positions while collaborator changes load.
  - Headquarters canvases fetch settled positions during movement and avoid repeating temporary connection warnings.
- **Full-screen alliance canvases**:
  - Picture, banner, and headquarters artwork can now fill the entire screen for better visibility.
  - Painting now uses the familiar main-canvas flow with an open-and-confirm Paint button and mouse-wheel-click color sampling.
  - Headquarters charges and recharge time are shown on Paint, pixel clicks open the same detailed painter card used by the main canvas, and timeout management lives in a header menu.
- **Controlled member lists**:
  - Alliance member and ban lists now load one additional page per **Load more** click instead of continuing automatically while you scroll.
- **Easier draft collaborators**:
  - Managing who can paint an alliance draft now shows the full member list with a search box and a checkbox per member.
  - Ticking a member grants access instantly, unticking removes it, and current collaborators stay visible with the date they were added.
`;
export {
  t as n, n as t
};
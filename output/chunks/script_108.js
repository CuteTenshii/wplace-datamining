import {
  dn as e
} from "./D2z8HFb7.js";
var t = e({
    default: () => n
  }),
  n = `## Improvements

- Overlay Studio now has customizable keyboard shortcuts for tools, brush size, and selected-layer visibility. Open **Keyboard shortcuts** in the sidebar to rebind or reset them; settings are saved in your browser.
- Every pixel-art editor tool now has a default shortcut, including circle brush (**C**), filled polygon (**P**), rectangle (**R**), ellipse (**O**), Bezier curve (**Q**), move (**M**), box select (**S**), contiguous select (**W**), select by color (**K**), and lasso select (**A**). Hover over a tool to see its shortcut; selection shortcuts can also be customized in the right sidebar.
- Added line, rectangle, ellipse tools and cubic Bezier curves with two control points.
- Added box, contiguous, color, and lasso selection tools to the overlay editor. Selections constrain painting and filling, with controls to clear the selection or delete selected pixels.
- Pixel editor layers can now be dragged into order and have individual opacity controls, making it easier to trace or recolor artwork against visible reference layers without changing the saved pixel colors.

## Fixes

- Fixed overlay colors changing after memory cleanup and restored color sampling for resized overlays using legacy colors.
- Fixed right-click browser gestures in Opera leaving the paint tool stuck erasing pending pixels after navigation is canceled.
- Template details now label the top-left pixel coordinates and let you view and edit them in the following format: tile X, tile Y, pixel X, pixel Y (for example, 343, 1941, 512, 589). Click the coordinates to set an exact position for placing and coordinating templates.
- The screen lock button now stays accessible when the overlay paint menu is collapsed on mobile.
- Overlay Gallery now remembers your selected sort option when you reopen it or reload the page.
- The overlay peek shortcut now identifies the Option key on Mac while continuing to use Alt on other platforms.
`;
export {
  t as n, n as t
};
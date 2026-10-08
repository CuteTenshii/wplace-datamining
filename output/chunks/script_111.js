import {
  dn as e
} from "./D2z8HFb7.js";
var t = e({
    default: () => n
  }),
  n = `## Improvements

- **PSD and OpenRaster Import:** Upload Photoshop (.psd) and OpenRaster (.ora) projects directly from the Overlay Gallery, drag and drop or import them through the \`New\` menu into the gallery, or import their layers into an existing editor project.
- **Layered Project Support:** Imported raster projects preserve layer names, order, position, visibility, and opacity. Groups are unpacked into editable layers, and projects remain layered after saving and reopening.
- **Import Compatibility:** Projects using unsupported masks, effects, or blending modes fall back to their merged image with a notice after import. PSD import supports 8-bit RGB and grayscale files.
- **Overlay Export:** Export overlays as transparent PNG images, white-background JPEG images, OpenRaster projects, or Photoshop projects. Project exports preserve editable layers when available.
- **Wplace Palette Conversion:** Imported artwork is automatically converted to the Wplace palette using the editor's existing transparency rules. Layer opacity remains a visual tracing aid and does not alter saved pixel colors.
- **Compact Paint Toolbar:** The progress and opacity controls now take up less space, leaving more of the canvas visible. Detailed pixel statistics remain available under **More tools**.
- **Customizable Paint HUD:** Added separate **Show progress panel** and **Show opacity control** options under **More tools**. These preferences are remembered across reloads and overlay changes.

## Fixes

- Fixed extra empty space below the paint palette on mobile.
- Improved the mobile screen lock placement and fixed cases where it could fail to unlock while painting.
- The palette toggle now remains accessible when the mobile paint menu is collapsed.
- Fixed headquarters overlays sometimes failing to load after switching overlays or changing preview settings.
- Fixed missing gallery thumbnails and detail previews after image memory cleanup.
- Fixed a progress refresh race that could show outdated pixels as incorrect.
- Saved overlay projects now reliably preserve layers, order, names, visibility, opacity, and locks after reloads or cache cleanup.
- Duplicating a template now also copies its editor layers, keeping the duplicate fully editable.
- Fixed an issue where users with previous web-store purchases could not delete their accounts.
`;
export {
  t as n, n as t
};
import {
  a as e,
  n as t,
  t as n
} from "./DP7ilGQK.js";
import {
  i as r,
  r as i
} from "./C12X9CaR.js";

function a(e, t) {
  return {
    links: [{
      href: i(e),
      label: t.info_how_to_play
    }, {
      href: `/guides/overlays`,
      label: t.overlay_title
    }, {
      href: `/guides/alliances`,
      label: t.alliances
    }, {
      href: `/about`,
      label: t.public_about
    }, {
      href: `/patch-notes`,
      label: t.patch_notes
    }],
    label: t.public_guides,
    mapLabel: t.go_to_map,
    relatedLabel: t.public_related,
    guidelinesLabel: t.community_guidelines
  }
}

function o() {
  return a(t(), n())
}
var s = {
  en: () => e(() => import(`./BOqPOJ_C.js`), [], import.meta.url),
  "pt-br": () => e(() => import(`./Bw46ANW8.js`), [], import.meta.url),
  es: () => e(() => import(`./CzOUM77c.js`), [], import.meta.url)
};
async function c(e) {
  let t = await s[e]();
  return a(r.find(t => t.locale === e).gameLocale, t.default)
}

function l(e, t) {
  let n = e.replace(/\/$/, ``);
  if (n === t) return `page`;
  if (t === `/patch-notes` && n.startsWith(`/patch-notes/`) || t.endsWith(`/how-to-play`) && n === `/guides/how-to-play`) return `location`
}
export {
  l as n, o as r, c as t
};
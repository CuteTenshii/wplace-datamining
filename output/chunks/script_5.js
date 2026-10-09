import {
  a as e,
  n as t
} from "./B4266N1A.js";
var n = `https://wplace.live`,
  r = `${n}/img/og-image.png`,
  i = Object.assign({
    "../../../messages/ch.json": () => e(() => import(`./BzrszSXM.js`), [], import.meta.url),
    "../../../messages/de.json": () => e(() => import(`./Bd9urm22.js`), [], import.meta.url),
    "../../../messages/en.json": () => e(() => import(`./BMoJxEuT.js`), [], import.meta.url),
    "../../../messages/es.json": () => e(() => import(`./CSnPAWAQ.js`), [], import.meta.url),
    "../../../messages/fr.json": () => e(() => import(`./UVY6Jkhu.js`), [], import.meta.url),
    "../../../messages/it.json": () => e(() => import(`./DFR_WvmE.js`), [], import.meta.url),
    "../../../messages/jp.json": () => e(() => import(`./BIgWemQN.js`), [], import.meta.url),
    "../../../messages/pl.json": () => e(() => import(`./DjJ7A03t.js`), [], import.meta.url),
    "../../../messages/pt.json": () => e(() => import(`./fBQ2Oym4.js`), [], import.meta.url),
    "../../../messages/ru.json": () => e(() => import(`./B1J1C8O9.js`), [], import.meta.url),
    "../../../messages/uk.json": () => e(() => import(`./DEXusobe.js`), [], import.meta.url),
    "../../../messages/vi.json": () => e(() => import(`./CWK4yqXA.js`), [], import.meta.url)
  });
async function a(e = t()) {
  return (await i[`../../../messages/${e}.json`]()).default
}

function o(e) {
  if (!e.startsWith(`/`) || e.startsWith(`//`) || e.includes(`\\`)) throw Error(`Metadata canonicalPath must be a site-relative path`);
  let t = new URL(e, n);
  if (t.origin !== `https://wplace.live`) throw Error(`Metadata canonicalPath must stay on the site`);
  return t.search = ``, t.hash = ``, t.pathname = t.pathname.replace(/\/+$/, ``) || `/`, t.href
}
var s = {
  "/terms/privacy": [`privacy_policy`, `seo_privacy_description`, `en`],
  "/terms/terms-of-service": [`terms_of_service`, `seo_terms_description`, `en`],
  "/terms/community-guidelines": [`community_guidelines`, `seo_guidelines_description`],
  "/terms/return": [`refund_policy`, `seo_refund_description`, `en`],
  "/terms/return/pt": [`refund_policy`, `seo_refund_description`, `pt`],
  "/patch-notes": [`patch_notes`, `seo_patch_notes_description`, `en`],
  "/join": [`alliance_invite`, `alliance_invite_confirm_description`]
};

function c(e) {
  return (e == null ? void 0 : e.replace(/\/\([^/]+\)/g, ``)) || (e ? `/` : null)
}

function l(e) {
  if (e = c(e), e === `/patch-notes/[version]`) return `en`;
  if (!(!e || !(e in s))) return s[e][2]
}
async function u(e) {
  if (e = c(e), e === `/`) {
    let e = await a();
    return {
      title: e.seo_home_title,
      description: e.seo_home_description,
      canonicalPath: `/`
    }
  }
  if (!e || !(e in s)) return null;
  let [t, n, r] = s[e], i = await a(r);
  return {
    title: `Wplace - ${i[t]}`,
    description: i[n],
    canonicalPath: e,
    language: r,
    noindex: e === `/join`,
    ...e === `/terms/return` || e === `/terms/return/pt` ? {
      alternates: [{
        language: `en`,
        path: `/terms/return`
      }, {
        language: `pt`,
        path: `/terms/return/pt`
      }]
    } : {}
  }
}
export {
  u as a, a as i, o as n, l as r, r as t
};
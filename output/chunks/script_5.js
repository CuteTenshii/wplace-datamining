import {
  a as e,
  n as t
} from "./DZOcwyrE.js";
var n = `https://wplace.live`,
  r = [{
    locale: `en`,
    lang: `en`,
    gameLocale: `en`,
    name: `English`
  }, {
    locale: `pt-br`,
    lang: `pt-BR`,
    gameLocale: `pt`,
    name: `Português (Brasil)`
  }, {
    locale: `es`,
    lang: `es`,
    gameLocale: `es`,
    name: `Español`
  }, {
    locale: `de`,
    lang: `de`,
    gameLocale: `de`,
    name: `Deutsch`
  }, {
    locale: `fr`,
    lang: `fr`,
    gameLocale: `fr`,
    name: `Français`
  }, {
    locale: `it`,
    lang: `it`,
    gameLocale: `it`,
    name: `Italiano`
  }, {
    locale: `pl`,
    lang: `pl`,
    gameLocale: `pl`,
    name: `Polski`
  }, {
    locale: `ru`,
    lang: `ru`,
    gameLocale: `ru`,
    name: `Русский`
  }, {
    locale: `uk`,
    lang: `uk`,
    gameLocale: `uk`,
    name: `Українська`
  }, {
    locale: `vi`,
    lang: `vi`,
    gameLocale: `vi`,
    name: `Tiếng Việt`
  }, {
    locale: `ja`,
    lang: `ja`,
    gameLocale: `jp`,
    name: `日本語`
  }, {
    locale: `zh-cn`,
    lang: `zh-CN`,
    gameLocale: `ch`,
    name: `简体中文`
  }],
  i = [`/how-to-play`, `/guides/overlays`, `/guides/alliances`, `/about`];

function a(e) {
  return r.some(t => t.locale === e)
}

function o(e) {
  return i.includes(e)
}

function s(e, t) {
  return t === `en` ? e : `/${t}${e}`
}

function c(e) {
  return r.find(({
    locale: t
  }) => t !== `en` && i.some(n => e === s(n, t)))
}

function l(e) {
  var t;
  return ((t = r.find(t => t.gameLocale === e)) == null ? void 0 : t.locale) ?? `en`
}
var u = `https://wplace.live`,
  d = `${u}/img/og-image.png`,
  f = Object.assign({
    "../../../messages/ch.json": () => e(() => import(`./B9NVaJDr.js`), [], import.meta.url),
    "../../../messages/de.json": () => e(() => import(`./CkJH9Hu5.js`), [], import.meta.url),
    "../../../messages/en.json": () => e(() => import(`./C5nXgrOQ.js`), [], import.meta.url),
    "../../../messages/es.json": () => e(() => import(`./z2ciHrKZ.js`), [], import.meta.url),
    "../../../messages/fr.json": () => e(() => import(`./DdTlSQ8m.js`), [], import.meta.url),
    "../../../messages/it.json": () => e(() => import(`./iUMXy-ae.js`), [], import.meta.url),
    "../../../messages/jp.json": () => e(() => import(`./CDkCJARx.js`), [], import.meta.url),
    "../../../messages/pl.json": () => e(() => import(`./zjQ1PCfj.js`), [], import.meta.url),
    "../../../messages/pt.json": () => e(() => import(`./Dhkm0rj8.js`), [], import.meta.url),
    "../../../messages/ru.json": () => e(() => import(`./Dir9BNRn.js`), [], import.meta.url),
    "../../../messages/uk.json": () => e(() => import(`./Cuqkq1wb.js`), [], import.meta.url),
    "../../../messages/vi.json": () => e(() => import(`./CzLitpZr.js`), [], import.meta.url)
  });
async function p(e = t()) {
  return (await f[`../../../messages/${e}.json`]()).default
}
var m = `${u}/#organization`;

function h(e) {
  return `<script type="application/ld+json">${JSON.stringify({"@context":`https://schema.org`,"@graph":[{"@type":`WebSite`,"@id":`${u}/#website`,name:`Wplace`,alternateName:[`wplace.live`,`Wplace Live`],url:`${u}/`,publisher:{"@id":m}},{"@type":`
  Organization`,"@id":m,name:`
  Wplace`,url:`
  $ {
    u
  }
  /`,logo:{"@type":`ImageObject`,url:`${u}/img / logo - 512 x512.png`,width:512,height:512},sameAs:[`
  https: //www.x.com/wplacelive`,`https://www.instagram.com/wplace.live/`,`https://www.youtube.com/@WplaceLive`,`https://www.tiktok.com/@wplace5`,`https://www.twitch.tv/wplacelive`,`https://www.reddit.com/r/WplaceLive/`]},{"@type":[`VideoGame`,`WebApplication`],"@id":`${u}/#game`,name:`Wplace`,url:`${u}/`,description:e,image:d,applicationCategory:`GameApplication`,operatingSystem:`Web browser`,gamePlatform:`Web browser`,playMode:`MultiPlayer`,genre:`Pixel art`,isAccessibleForFree:!0,offers:{"@type":`Offer`,price:`0`,priceCurrency:`USD`},publisher:{"@id":m}}]}).replace(/</g,`\\u003c`)}<\/script>`}function g(e){if(!e.startsWith(`/`)||e.startsWith(`//`)||e.includes(`\\`))throw Error(`Metadata canonicalPath must be a site-relative path`);let t=new URL(e,u);if(t.origin!==`https://wplace.live`)throw Error(`Metadata canonicalPath must stay on the site`);return t.search=``,t.hash=``,t.pathname=t.pathname.replace(/\/+$/,``)||`/`,t.href}var _={"/terms/privacy":[`privacy_policy`,`seo_privacy_description`,`en`],"/terms/terms-of-service":[`terms_of_service`,`seo_terms_description`,`en`],"/terms/community-guidelines":[`community_guidelines`,`seo_guidelines_description`],"/terms/return":[`refund_policy`,`seo_refund_description`,`en`],"/terms/return/pt":[`refund_policy`,`seo_refund_description`,`pt`],"/patch-notes":[`patch_notes`,`seo_patch_notes_description`,`en`],"/join":[`alliance_invite`,`alliance_invite_confirm_description`]};function v(e){return(e==null?void 0:e.replace(/\/\([^/]+\)/g,``))||(e?`/`:null)}function y(e){if(e=v(e),e===`/patch-notes/[version]`||e&&o(e))return`en`;if(!(!e||!(e in _)))return _[e][2]}async function b(e){if(e=v(e),e===`/`){let e=await p();return{title:e.seo_home_title,description:e.seo_home_description,canonicalPath:`/`}}if(!e||!(e in _))return null;let[t,n,r]=_[e],i=await p(r);return{title:`Wplace - ${i[t]}`,description:i[n],canonicalPath:e,language:r,noindex:e===`/join`,...e===`/terms/return`||e===`/terms/return/pt`?{alternates:[{language:`en`,path:`/terms/return`},{language:`pt`,path:`/terms/return/pt`}]}:{}}}export{p as a,c,s as d,i as f,h as i,o as l,r as m,g as n,b as o,l as p,y as r,n as s,d as t,a as u};
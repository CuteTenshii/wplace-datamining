import {
  a as e,
  n as t
} from "./D6rWhY4a.js";
import {
  r as n
} from "./BbWnuau8.js";
var r = `https://wplace.live`,
  i = `${r}/img/og-image.png`,
  a = Object.assign({
    "../../../messages/ch.json": () => e(() => import(`./DZoLlP46.js`), [], import.meta.url),
    "../../../messages/de.json": () => e(() => import(`./CcM-WhBY.js`), [], import.meta.url),
    "../../../messages/en.json": () => e(() => import(`./CalHVWiA.js`), [], import.meta.url),
    "../../../messages/es.json": () => e(() => import(`./2g1lchdk.js`), [], import.meta.url),
    "../../../messages/fr.json": () => e(() => import(`./4dB6C03z.js`), [], import.meta.url),
    "../../../messages/it.json": () => e(() => import(`./BN-Gv31d.js`), [], import.meta.url),
    "../../../messages/jp.json": () => e(() => import(`./BtxvXFVU.js`), [], import.meta.url),
    "../../../messages/pl.json": () => e(() => import(`./ctu5kHcL.js`), [], import.meta.url),
    "../../../messages/pt.json": () => e(() => import(`./VmDazWfe.js`), [], import.meta.url),
    "../../../messages/ru.json": () => e(() => import(`./C2rr85_9.js`), [], import.meta.url),
    "../../../messages/uk.json": () => e(() => import(`./DZtV5A4V.js`), [], import.meta.url),
    "../../../messages/vi.json": () => e(() => import(`./tBkFEPX8.js`), [], import.meta.url)
  });
async function o(e = t()) {
  return (await a[`../../../messages/${e}.json`]()).default
}
var s = `${r}/#organization`;

function c(e) {
  return `<script type="application/ld+json">${JSON.stringify({"@context":`https://schema.org`,"@graph":[{"@type":`WebSite`,"@id":`${r}/#website`,name:`Wplace`,alternateName:[`wplace.live`,`Wplace Live`],url:`${r}/`,publisher:{"@id":s}},{"@type":`
  Organization`,"@id":s,name:`
  Wplace`,url:`
  $ {
    r
  }
  /`,logo:{"@type":`ImageObject`,url:`${r}/img / logo - 512 x512.png`,width:512,height:512},sameAs:[`
  https: //www.x.com/wplacelive`,`https://www.instagram.com/wplace.live/`,`https://www.youtube.com/@WplaceLive`,`https://www.tiktok.com/@wplace5`,`https://www.twitch.tv/wplacelive`,`https://www.reddit.com/r/WplaceLive/`]},{"@type":[`VideoGame`,`WebApplication`],"@id":`${r}/#game`,name:`Wplace`,url:`${r}/`,description:e,image:i,applicationCategory:`GameApplication`,operatingSystem:`Web browser`,gamePlatform:`Web browser`,playMode:`MultiPlayer`,genre:`Pixel art`,isAccessibleForFree:!0,offers:{"@type":`Offer`,price:`0`,priceCurrency:`USD`},publisher:{"@id":s}}]}).replace(/</g,`\\u003c`)}<\/script>`}function l(e){if(!e.startsWith(`/`)||e.startsWith(`//`)||e.includes(`\\`))throw Error(`Metadata canonicalPath must be a site-relative path`);let t=new URL(e,r);if(t.origin!==`https://wplace.live`)throw Error(`Metadata canonicalPath must stay on the site`);return t.search=``,t.hash=``,t.pathname=t.pathname.replace(/\/+$/,``)||`/`,t.href}var u={"/terms/privacy":[`privacy_policy`,`seo_privacy_description`,`en`],"/terms/terms-of-service":[`terms_of_service`,`seo_terms_description`,`en`],"/terms/community-guidelines":[`community_guidelines`,`seo_guidelines_description`],"/terms/return":[`refund_policy`,`seo_refund_description`,`en`],"/terms/return/pt":[`refund_policy`,`seo_refund_description`,`pt`],"/terms/payment-help":[`payment_help`,`seo_payment_help_description`],"/patch-notes":[`patch_notes`,`seo_patch_notes_description`,`en`],"/join":[`alliance_invite`,`alliance_invite_confirm_description`]};function d(e){return(e==null?void 0:e.replace(/\/\([^/]+\)/g,``))||(e?`/`:null)}function f(e){if(e=d(e),e===`/patch-notes/[version]`||e&&n(e))return`en`;if(!(!e||!(e in u)))return u[e][2]}async function p(e){if(e=d(e),e===`/`){let e=await o();return{title:e.seo_home_title,description:e.seo_home_description,canonicalPath:`/`}}if(!e||!(e in u))return null;let[t,n,r]=u[e],i=await o(r);return{title:`Wplace - ${i[t]}`,description:i[n],canonicalPath:e,language:r,noindex:e===`/join`,...e===`/terms/return`||e===`/terms/return/pt`?{alternates:[{language:`en`,path:`/terms/return`},{language:`pt`,path:`/terms/return/pt`}]}:{}}}export{o as a,c as i,l as n,p as o,f as r,i as t};
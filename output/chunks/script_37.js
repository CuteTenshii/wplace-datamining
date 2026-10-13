const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./B4I-Hhc_.js", "./R3px7NU1.js", "./B8UK1oE5.js", "./CPflrIHb.js", "./Y0PNYP8l.js", "./CRgrjRaN.js", "./CUtBdivQ.js", "./DPq9H1d9.js", "./CRIJ4c-B.js", "./6vx7SfJF.js", "./DwR5WZeh.js", "./BoulVKof.js", "./L73Dn9nm.js", "./CXOwgfkr.js", "./MIjkXV5b.js"]))) => i.map(i => d[i]);
import {
  At as e,
  Mt as t,
  Ot as n,
  Y as r,
  at as i,
  bt as a,
  ft as o,
  lt as s,
  q as c
} from "./R3px7NU1.js";
import {
  x as l
} from "./BoulVKof.js";
import {
  a as u
} from "./Y0PNYP8l.js";
import "./CUtBdivQ.js";
import {
  t as d
} from "./CPflrIHb.js";
import {
  n as f
} from "./CRgrjRaN.js";
var p = {
  settings: [`interface`, `accessibility`, `privacy`, `sounds`, `controls`, `notifications`],
  store: [`items`, `pictures`, `frames`, `fonts`, `styles`, `flags`],
  profile: [`social`, `photo`, `frame`, `style`, `flag`, `badges`],
  info: [`how-to-play`, `rules`, `socials`],
  search: [],
  favorites: [],
  leaderboard: [`regions`, `countries`, `players`, `alliances`],
  alliances: [`settings`, `store`, `activity`, `members`, `requests`, `templates`, `headquarters`, `invites`],
  "alliance-gallery": [],
  overlays: [],
  notifications: [],
  "payment-history": [],
  droplets: [],
  prism: [],
  events: [],
  login: []
};

function m(e) {
  var t;
  let n = e.replace(/^#/, ``),
    r = n.indexOf(`?`),
    i = r < 0 ? n : n.slice(0, r),
    a = new URLSearchParams(r < 0 ? `` : n.slice(r + 1));
  if ([...a.keys()].some(e => ![`text`, `occurrence`, `period`, `country`, `region`].includes(e)) || [`text`, `occurrence`, `period`, `country`, `region`].some(e => a.getAll(e).length > 1)) return null;
  let o = (t = a.get(`text`)) == null ? void 0 : t.trim(),
    s = a.get(`occurrence`);
  if (s !== null && (!o || !/^[1-9][0-9]{0,3}$/.test(s)) || a.has(`text`) && (!o || o.length > 500 || [...o].some(e => e.charCodeAt(0) < 32 || e === `�`))) return null;
  let c;
  try {
    c = decodeURIComponent(i)
  } catch {
    return null
  }
  let l = c.split(`/`);
  if (l.length > 3 || l.some(e => !/^[a-zA-Z0-9_-]+$/.test(e))) return null;
  let [u, d, f] = l;
  if (!Object.prototype.hasOwnProperty.call(p, u)) return null;
  let m = p[u];
  if (d && !m.includes(d)) return null;
  let h = a.get(`period`),
    g = a.get(`country`),
    _ = a.get(`region`);
  return h !== null && (u !== `leaderboard` || ![`today`, `week`, `month`, `all-time`].includes(h)) || g !== null && (u !== `leaderboard` || ![`regions`, `players`].includes(d) || !/^[1-9][0-9]{0,2}$/.test(g)) || _ !== null && (u !== `leaderboard` || d !== `players` || !g || !/^[1-9][0-9]{0,9}$/.test(_) || Number(_) > 2147483647) ? null : {
    panel: u,
    section: d,
    target: f,
    ...h ? {
      period: h
    } : {},
    ...g ? {
      country: Number(g)
    } : {},
    ..._ ? {
      region: Number(_)
    } : {},
    ...o ? {
      text: o
    } : {},
    ...s ? {
      occurrence: Number(s)
    } : {}
  }
}

function h(e) {
  return [e.panel, e.section, e.target].filter(Boolean).join(`/`)
}

function g(e) {
  let t = new URLSearchParams;
  return e.period && t.set(`period`, e.period), e.country && t.set(`country`, String(e.country)), e.region && t.set(`region`, String(e.region)), e.text && (t.set(`text`, e.text), e.occurrence && t.set(`occurrence`, String(e.occurrence))), `#${h(e)}${t.size?`?${t}`:``}`
}

function _(e) {
  return e.panel === `alliances` ? !!e.section : e.panel === `settings` ? e.section === `privacy` || e.section === `notifications` && !!e.target && ![`charges`, `events`, `updates`].includes(e.target) : [`profile`, `store`, `notifications`, `payment-history`].includes(e.panel)
}
var v = `script, style, template, svg, [aria-hidden="true"]`;

function y(e) {
  let t = getComputedStyle(e);
  return e.hidden || t.display === `none` || t.visibility === `hidden` || t.visibility === `collapse`
}

function b(e) {
  return e.replace(/\s+/g, ` `).trim().toLocaleLowerCase()
}

function x(e, t) {
  let n = b(t);
  if (!n) return [];
  let r = [];

  function i(t) {
    if (t instanceof HTMLDialogElement && t !== e || t.matches(v) || y(t)) return {
      text: ``,
      matched: !1
    };
    let a = [`aria-label`, `title`, `data-tooltip`, `alt`].some(e => b(t.getAttribute(e) ?? ``).includes(n));
    if (t.matches(`input, textarea, select`)) return a && r.push(t), {
      text: ``,
      matched: a
    };
    let o = ``,
      s = !1;
    for (let e of t.childNodes)
      if (e.nodeType === Node.TEXT_NODE) o += e.textContent;
      else if (e instanceof HTMLElement) {
      let t = i(e);
      s || (s = t.matched), o += t.text
    }
    let c = s || b(o).includes(n) || a;
    return c && !s && r.push(t), {
      text: o,
      matched: c
    }
  }
  return i(e), r
}

function S(e, t, n = 1) {
  return x(e, t)[n - 1] ?? null
}

function C(e) {
  return ([`aria-label`, `data-tooltip`, `title`, `alt`].map(t => e.getAttribute(t)).find(Boolean) ?? e.textContent ?? ``).replace(/\s+/g, ` `).trim().slice(0, 500)
}

function w(e, t, n, r) {
  var i;
  if (!e.contains(n) || n.closest(`input:not([type="checkbox"]):not([type="radio"]), textarea, select, [contenteditable]:not([contenteditable="false"]), [data-game-link-copy-disabled], [popover], canvas`)) return null;
  let a = n instanceof HTMLElement ? n : (i = n.closest(`svg`)) == null ? void 0 : i.parentElement;
  if (!a) return null;
  let o = a.closest(`[data-game-link-destination], [data-game-link]`),
    s = o && e.contains(o) ? o : null,
    c = m(((s == null ? void 0 : s.dataset.gameLinkDestination) ?? (s == null ? void 0 : s.dataset.gameLink) ?? t) || t);
  if (!c || c.panel !== t) return null;
  let l = a.closest(`[data-game-link-context]`),
    u = l && e.contains(l) ? m(l.dataset.gameLinkContext ?? ``) : null;
  (u == null ? void 0 : u.panel) === `leaderboard` && c.panel === `leaderboard` && u.section === c.section && (c = {
    ...c,
    period: c.period ?? u.period,
    country: c.country ?? u.country,
    region: c.region ?? u.region
  });
  let d = r && !r.isCollapsed && r.rangeCount ? r.getRangeAt(0) : null,
    f = d && e.contains(d.startContainer) && e.contains(d.endContainer) && d.intersectsNode(a) ? r.toString().replace(/\s+/g, ` `).trim().slice(0, 500) : ``,
    p = C(a),
    h = s instanceof HTMLDetailsElement && !a.closest(`summary`);
  if (!f && (s != null && s.dataset.gameLinkDestination || c.target && !h)) return {
    link: c,
    label: p || (s ? C(s) : t)
  };
  let g = s ?? e;
  if (f) {
    let e = x(g, f).findIndex(e => d && e.contains(d.commonAncestorContainer));
    return e >= 0 ? {
      link: {
        ...c,
        text: f,
        ...e ? {
          occurrence: e + 1
        } : {}
      },
      label: f
    } : null
  }
  for (let t = a; t && t !== e; t = t.parentElement) {
    let e = C(t),
      n = e ? x(g, e).findIndex(e => e.contains(a) || a.contains(e)) : -1;
    if (n >= 0) return {
      link: {
        ...c,
        text: e,
        ...n ? {
          occurrence: n + 1
        } : {}
      },
      label: e
    };
    if (t === g) break
  }
  return null
}

function T(e, t, n) {
  let r = new URL(t),
    i = new URL(n, r.origin);
  if (r.pathname === i.pathname)
    for (let e of [`lat`, `lng`, `zoom`]) {
      let t = r.searchParams.get(e);
      t !== null && i.searchParams.set(e, t)
    }
  return i.hash = g(e), i.href
}

function E(e, t) {
  return `[${e.replace(/([\\`*_[\]<>])/g,`\\$1`)}](${t})`}var D=n({request:null}),O=`
  input: not(: disabled): not([type = "hidden"]), select: not(: disabled), textarea: not(: disabled), button: not(: disabled), summary, a[href], [tabindex] `;function k(e){for(let t=e;t;t=t.parentElement)t instanceof HTMLDetailsElement&&(t.open=!0)}function A(e){e instanceof HTMLDetailsElement&&(e=e.querySelector(`
  summary`)??e);let t=e.matches(O)?e:e.closest(`
  button, a[href], summary, label`)??e.querySelector(O)??e,n=t instanceof HTMLLabelElement?t.control??t:t,r=n.hasAttribute(`
  tabindex`);!r&&!n.matches(O)&&(n.tabIndex=-1),n.focus({preventScroll:!0}),e.scrollIntoView({block:`
  center`,behavior:`
  instant`}),e.setAttribute(`
  data - game - link - highlight`,`
  `);let i=()=>e.removeAttribute(`
  data - game - link - highlight`);return document.addEventListener(`
  pointerdown`,i,{once:!0}),document.addEventListener(`
  keydown`,i,{once:!0}),()=>{i(),!r&&n.getAttribute(`
  tabindex`)===` - 1`&&n.removeAttribute(`
  tabindex`),document.removeEventListener(`
  pointerdown`,i),document.removeEventListener(`
  keydown`,i)}}function j(r,i){let c=t(n(i));return a(()=>{r.dataset.gameLink=s(c);let e=D.request;if(!s(c)||(e==null?void 0:e.path)!==s(c))return;let t=!1,n;return o().then(async()=>{t||!r.isConnected||(k(r),await o(),!t&&!e.text&&(n=A(r)))}),()=>{t=!0,n==null||n()}}),{update:t=>{e(c,t,!0)}}}function M(p,m){let h=t(n(m));return a(()=>{let e=Array.isArray(s(h))?s(h)[0]:s(h);if(!e)return;let t,n=0,a=null,o;function m(e){n++,o==null||o(),o=void 0,t&&r(t),t=void 0,e&&a!=null&&a.isConnected&&a.focus({preventScroll:!0})}function g(r){if(r.defaultPrevented||!(r.target instanceof Element)||p instanceof HTMLDialogElement&&(!p.open||r.target.closest(`
  dialog`)!==p))return!1;let s=w(p,e,r.target,window.getSelection());if(!s)return!1;r.preventDefault(),r.stopPropagation(),m(!1),a=document.activeElement instanceof HTMLElement?document.activeElement:null;let h=n,g=r.target.getBoundingClientRect(),_=r instanceof MouseEvent&&r.clientX?r.clientX:g.left,v=r instanceof MouseEvent&&r.clientY?r.clientY:g.bottom,y=T(s.link,window.location.href,l(` / `)),b=[`
  pointerdown`,`
  keydown`,`
  blur`,`
  resize`].map(e=>i(window,e,()=>m(!1),{capture:!0}));return o=()=>b.forEach(e=>e()),u(async()=>{let{default:e}=await import(`. / B4I - Hhc_.js`);return{default:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url).then(({default:e})=>{h!==n||!p.isConnected||p instanceof HTMLDialogElement&&!p.open||(o==null||o(),o=void 0,t=c(e,{target:p,props:{x:_,y:v,url:y,label:s.label,onclose:e=>{h===n&&m(e)}}}))}).catch(()=>{h===n&&(m(!1),f.error(d.link_copy_failed()))}),!0}function _(e){e.shiftKey||g(e)}function v(e){e.key!==`
  ContextMenu`&&!(e.shiftKey&&e.key===`
  F10`)||g(e)&&e.stopPropagation()}let y=()=>m(!1);p.addEventListener(`
  close`,y);let b=i(p,`
  contextmenu`,_),x=i(p,`
  keydown`,v);return()=>{m(!1),p.removeEventListener(`
  close`,y),b(),x()}}),a(()=>{let e=D.request,t=Array.isArray(s(h))?s(h):[s(h)];if(!(e!=null&&e.text)||!t.includes(e.path.split(` / `)[0]))return;let{path:n,text:r,occurrence:i}=e,a=0,c,l=!1,u=new MutationObserver(d);function d(){!a&&!l&&(a=requestAnimationFrame(f))}function f(){if(a=0,l||!p.isConnected||y(p)||p instanceof HTMLDialogElement&&!p.open)return;let e=[...p.querySelectorAll(` [data - game - link] `)].find(e=>e.dataset.gameLink===n&&(!(p instanceof HTMLDialogElement)||e.closest(`
  dialog`)===p));if(n.split(` / `).length>1&&!e)return;let t=S(e??p,r,i);t&&(k(t),u.disconnect(),o().then(()=>{!l&&t.isConnected&&(c=A(t))}))}return u.observe(p,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:[`
  open`,`
  class `,`
  style`,`
  hidden`,`
  aria - hidden`,`
  aria - label`,`
  title`,`
  data - tooltip`,`
  alt`,`
  data - game - link`]}),d(),()=>{l=!0,u.disconnect(),cancelAnimationFrame(a),c==null||c()}}),{update:t=>{e(h,t,!0)}}}export{g as a,m as c,E as i,M as n,h as o,j as r,_ as s,D as t};
var te = t => {
  throw TypeError(t)
};
var je = (t, e, n) => e.has(t) || te("Cannot " + n);
var w = (t, e, n) => (je(t, e, "read from private field"), n ? n.call(t) : e.get(t)),
  U = (t, e, n) => e.has(t) ? te("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n);
import {
  o as ee,
  b as Ne
} from "./z9SW9obi.js";
import {
  aY as At,
  by as qe,
  e as T,
  j as I,
  i as $,
  w as pt,
  aA as ne,
  aF as De
} from "./6mH-Phwe.js";
import {
  v as Ve
} from "./Drv6UQkp.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "ed3bbe4c8b5513729863e5c0724fcbd405ffa555"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "c6a89556-6838-4c4b-ac4b-2b775c722b7c", t._sentryDebugIdIdentifier = "sentry-dbid-c6a89556-6838-4c4b-ac4b-2b775c722b7c")
  })()
} catch {}
const M = [];

function Nt(t, e = At) {
  let n = null;
  const r = new Set;

  function a(i) {
    if (qe(t, i) && (t = i, n)) {
      const c = !M.length;
      for (const l of r) l[1](), M.push(l, t);
      if (c) {
        for (let l = 0; l < M.length; l += 2) M[l][0](M[l + 1]);
        M.length = 0
      }
    }
  }

  function s(i) {
    a(i(t))
  }

  function o(i, c = At) {
    const l = [i, c];
    return r.add(l), r.size === 1 && (n = e(a, s) || At), i(t), () => {
      r.delete(l), r.size === 0 && n && (n(), n = null)
    }
  }
  return {
    set: a,
    update: s,
    subscribe: o
  }
}
class qt {
  constructor(e, n) {
    this.status = e, typeof n == "string" ? this.body = {
      message: n
    } : n ? this.body = n : this.body = {
      message: `Error: ${e}`
    }
  }
  toString() {
    return JSON.stringify(this.body)
  }
}
class Dt {
  constructor(e, n) {
    this.status = e, this.location = n
  }
}
class Vt extends Error {
  constructor(e, n, r) {
    super(r), this.status = e, this.text = n
  }
}
new URL("sveltekit-internal://");

function Be(t, e) {
  return t === "/" || e === "ignore" ? t : e === "never" ? t.endsWith("/") ? t.slice(0, -1) : t : e === "always" && !t.endsWith("/") ? t + "/" : t
}

function Ke(t) {
  return t.split("%25").map(decodeURI).join("%25")
}

function Me(t) {
  for (const e in t) t[e] = decodeURIComponent(t[e]);
  return t
}

function Ut({
  href: t
}) {
  return t.split("#")[0]
}

function Ye(...t) {
  let e = 5381;
  for (const n of t)
    if (typeof n == "string") {
      let r = n.length;
      for (; r;) e = e * 33 ^ n.charCodeAt(--r)
    } else if (ArrayBuffer.isView(n)) {
    const r = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
    let a = r.length;
    for (; a;) e = e * 33 ^ r[--a]
  } else throw new TypeError("value must be a string or TypedArray");
  return (e >>> 0).toString(36)
}
new TextEncoder;
new TextDecoder;

function Fe(t) {
  const e = atob(t),
    n = new Uint8Array(e.length);
  for (let r = 0; r < e.length; r++) n[r] = e.charCodeAt(r);
  return n
}
const ze = window.fetch;
window.fetch = (t, e) => ((t instanceof Request ? t.method : (e == null ? void 0 : e.method) || "GET") !== "GET" && W.delete(Bt(t)), ze(t, e));
const W = new Map;

function Ge(t, e) {
  const n = Bt(t, e),
    r = document.querySelector(n);
  if (r != null && r.textContent) {
    r.remove();
    let {
      body: a,
      ...s
    } = JSON.parse(r.textContent);
    const o = r.getAttribute("data-ttl");
    return o && W.set(n, {
      body: a,
      init: s,
      ttl: 1e3 * Number(o)
    }), r.getAttribute("data-b64") !== null && (a = Fe(a)), Promise.resolve(new Response(a, s))
  }
  return window.fetch(t, e)
}

function We(t, e, n) {
  if (W.size > 0) {
    const r = Bt(t, n),
      a = W.get(r);
    if (a) {
      if (performance.now() < a.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(n == null ? void 0 : n.cache)) return new Response(a.body, a.init);
      W.delete(r)
    }
  }
  return window.fetch(e, n)
}

function Bt(t, e) {
  let r = `script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;
  if (e != null && e.headers || e != null && e.body) {
    const a = [];
    e.headers && a.push([...new Headers(e.headers)].join(",")), e.body && (typeof e.body == "string" || ArrayBuffer.isView(e.body)) && a.push(e.body), r += `[data-hash="${Ye(...a)}"]`
  }
  return r
}
const He = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;

function Je(t) {
  const e = [];
  return {
    pattern: t === "/" ? /^\/$/ : new RegExp(`^${Qe(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/([^]*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return e.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const o=r.split(/\[(.+?)\](?!\])/);return"/"+o.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Tt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Tt(String.fromCharCode(...c.slice(2).split("-").map(_=>parseInt(_,16))));const d=He.exec(c),[,u,v,f,h]=d;return e.push({name:f,matcher:h,optional:!!u,rest:!!v,chained:v?l===1&&o[0]==="":!1}),v?"([^]*?)":u?"([^/]*)?":"([^/]+?)"}return Tt(c)}).join("")}).join("")}/?$`),
    params: e
  }
}

function Xe(t) {
  return t !== "" && !/^\([^)]+\)$/.test(t)
}

function Qe(t) {
  return t.slice(1).split("/").filter(Xe)
}

function Ze(t, e, n) {
  const r = {},
    a = t.slice(1),
    s = a.filter(i => i !== void 0);
  let o = 0;
  for (let i = 0; i < e.length; i += 1) {
    const c = e[i];
    let l = a[i - o];
    if (c.chained && c.rest && o && (l = a.slice(i - o, i + 1).filter(d => d).join("/"), o = 0), l === void 0) {
      c.rest && (r[c.name] = "");
      continue
    }
    if (!c.matcher || n[c.matcher](l)) {
      r[c.name] = l;
      const d = e[i + 1],
        u = a[i + 1];
      d && !d.rest && d.optional && u && c.chained && (o = 0), !d && !u && Object.keys(r).length === s.length && (o = 0);
      continue
    }
    if (c.optional && c.chained) {
      o++;
      continue
    }
    return
  }
  if (!o) return r
}

function Tt(t) {
  return t.normalize().replace(/[[\]]/g, "\\$&").replace(/%/g, "%25").replace(/\//g, "%2[Ff]").replace(/\?/g, "%3[Ff]").replace(/#/g, "%23").replace(/[.*+?^${}()|\\]/g, "\\$&")
}

function tn({
  nodes: t,
  server_loads: e,
  dictionary: n,
  matchers: r
}) {
  const a = new Set(e);
  return Object.entries(n).map(([i, [c, l, d]]) => {
    const {
      pattern: u,
      params: v
    } = Je(i), f = {
      id: i,
      exec: h => {
        const _ = u.exec(h);
        if (_) return Ze(_, v, r)
      },
      errors: [1, ...d || []].map(h => t[h]),
      layouts: [0, ...l || []].map(o),
      leaf: s(c)
    };
    return f.errors.length = f.layouts.length = Math.max(f.errors.length, f.layouts.length), f
  });

  function s(i) {
    const c = i < 0;
    return c && (i = ~i), [c, t[i]]
  }

  function o(i) {
    return i === void 0 ? i : [a.has(i), t[i]]
  }
}

function ge(t, e = JSON.parse) {
  try {
    return e(sessionStorage[t])
  } catch {}
}

function ae(t, e, n = JSON.stringify) {
  const r = n(e);
  try {
    sessionStorage[t] = r
  } catch {}
}
var fe;
const A = ((fe = globalThis.__sveltekit_qt5ket) == null ? void 0 : fe.base) ?? "";
var ue;
const en = ((ue = globalThis.__sveltekit_qt5ket) == null ? void 0 : ue.assets) ?? A ?? "",
  me = "sveltekit:snapshot",
  _e = "sveltekit:scroll",
  we = "sveltekit:states",
  nn = "sveltekit:pageurl",
  F = "sveltekit:history",
  J = "sveltekit:navigation",
  q = {
    tap: 1,
    hover: 2,
    viewport: 3,
    eager: 4,
    off: -1,
    false: -1
  },
  Et = location.origin;

function Kt(t) {
  if (t instanceof URL) return t;
  let e = document.baseURI;
  if (!e) {
    const n = document.getElementsByTagName("base");
    e = n.length ? n[0].href : document.URL
  }
  return new URL(t, e)
}

function St() {
  return {
    x: pageXOffset,
    y: pageYOffset
  }
}

function Y(t, e) {
  return t.getAttribute(`data-sveltekit-${e}`)
}
const re = {
  ...q,
  "": q.hover
};

function ye(t) {
  let e = t.assignedSlot ?? t.parentNode;
  return (e == null ? void 0 : e.nodeType) === 11 && (e = e.host), e
}

function ve(t, e) {
  for (; t && t !== e;) {
    if (t.nodeName.toUpperCase() === "A" && t.hasAttribute("href")) return t;
    t = ye(t)
  }
}

function Ot(t, e, n) {
  let r;
  try {
    if (r = new URL(t instanceof SVGAElement ? t.href.baseVal : t.href, document.baseURI), n && r.hash.match(/^#[^/]/)) {
      const i = location.hash.split("#")[1] || "/";
      r.hash = `#${i}${r.hash}`
    }
  } catch {}
  const a = t instanceof SVGAElement ? t.target.baseVal : t.target,
    s = !r || !!a || Rt(r, e, n) || (t.getAttribute("rel") || "").split(/\s+/).includes("external"),
    o = (r == null ? void 0 : r.origin) === Et && t.hasAttribute("download");
  return {
    url: r,
    external: s,
    target: a,
    download: o
  }
}

function gt(t) {
  let e = null,
    n = null,
    r = null,
    a = null,
    s = null,
    o = null,
    i = t;
  for (; i && i !== document.documentElement;) r === null && (r = Y(i, "preload-code")), a === null && (a = Y(i, "preload-data")), e === null && (e = Y(i, "keepfocus")), n === null && (n = Y(i, "noscroll")), s === null && (s = Y(i, "reload")), o === null && (o = Y(i, "replacestate")), i = ye(i);

  function c(l) {
    switch (l) {
      case "":
      case "true":
        return !0;
      case "off":
      case "false":
        return !1;
      default:
        return
    }
  }
  return {
    preload_code: re[r ?? "off"],
    preload_data: re[a ?? "off"],
    keepfocus: c(e),
    noscroll: c(n),
    reload: c(s),
    replace_state: c(o)
  }
}

function oe(t) {
  const e = Nt(t);
  let n = !0;

  function r() {
    n = !0, e.update(o => o)
  }

  function a(o) {
    n = !1, e.set(o)
  }

  function s(o) {
    let i;
    return e.subscribe(c => {
      (i === void 0 || n && c !== i) && o(i = c)
    })
  }
  return {
    notify: r,
    set: a,
    subscribe: s
  }
}
const be = {
  v: () => {}
};

function an() {
  const {
    set: t,
    subscribe: e
  } = Nt(!1);
  let n;
  async function r() {
    clearTimeout(n);
    try {
      const a = await fetch(`${en}/_app/version.json`, {
        headers: {
          pragma: "no-cache",
          "cache-control": "no-cache"
        }
      });
      if (!a.ok) return !1;
      const o = (await a.json()).version !== Ve;
      return o && (t(!0), be.v(), clearTimeout(n)), o
    } catch {
      return !1
    }
  }
  return {
    subscribe: e,
    check: r
  }
}

function Rt(t, e, n) {
  return t.origin !== Et || !t.pathname.startsWith(e) ? !0 : n ? !(t.pathname === e + "/" || t.pathname === e + "/index.html" || t.protocol === "file:" && t.pathname.replace(/\/[^/]+\.html?$/, "") === e) : !1
}

function Pn(t) {}
const ke = new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...ke];
const rn = new Set([...ke]);
[...rn];

function on(t) {
  return t.filter(e => e != null)
}

function Mt(t) {
  return t instanceof qt || t instanceof Vt ? t.status : 500
}

function sn(t) {
  return t instanceof Vt ? t.text : "Internal Error"
}
let R, X, It;
const cn = ee.toString().includes("$$") || /function \w+\(\) \{\}/.test(ee.toString());
var nt, at, rt, ot, st, it, ct, lt, de, ft, he, ut, pe;
cn ? (R = {
  data: {},
  form: null,
  error: null,
  params: {},
  route: {
    id: null
  },
  state: {},
  status: -1,
  url: new URL("https://example.com")
}, X = {
  current: null
}, It = {
  current: !1
}) : (R = new(de = class {
  constructor() {
    U(this, nt, T({}));
    U(this, at, T(null));
    U(this, rt, T(null));
    U(this, ot, T({}));
    U(this, st, T({
      id: null
    }));
    U(this, it, T({}));
    U(this, ct, T(-1));
    U(this, lt, T(new URL("https://example.com")))
  }
  get data() {
    return I(w(this, nt))
  }
  set data(e) {
    $(w(this, nt), e)
  }
  get form() {
    return I(w(this, at))
  }
  set form(e) {
    $(w(this, at), e)
  }
  get error() {
    return I(w(this, rt))
  }
  set error(e) {
    $(w(this, rt), e)
  }
  get params() {
    return I(w(this, ot))
  }
  set params(e) {
    $(w(this, ot), e)
  }
  get route() {
    return I(w(this, st))
  }
  set route(e) {
    $(w(this, st), e)
  }
  get state() {
    return I(w(this, it))
  }
  set state(e) {
    $(w(this, it), e)
  }
  get status() {
    return I(w(this, ct))
  }
  set status(e) {
    $(w(this, ct), e)
  }
  get url() {
    return I(w(this, lt))
  }
  set url(e) {
    $(w(this, lt), e)
  }
}, nt = new WeakMap, at = new WeakMap, rt = new WeakMap, ot = new WeakMap, st = new WeakMap, it = new WeakMap, ct = new WeakMap, lt = new WeakMap, de), X = new(he = class {
  constructor() {
    U(this, ft, T(null))
  }
  get current() {
    return I(w(this, ft))
  }
  set current(e) {
    $(w(this, ft), e)
  }
}, ft = new WeakMap, he), It = new(pe = class {
  constructor() {
    U(this, ut, T(!1))
  }
  get current() {
    return I(w(this, ut))
  }
  set current(e) {
    $(w(this, ut), e)
  }
}, ut = new WeakMap, pe), be.v = () => It.current = !0);

function Ee(t) {
  Object.assign(R, t)
}
const {
  onMount: ln
} = Ne, fn = new Set(["icon", "shortcut icon", "apple-touch-icon"]), V = ge(_e) ?? {}, Q = ge(me) ?? {}, N = {
  url: oe({}),
  page: oe({}),
  navigating: Nt(null),
  updated: an()
};

function Yt(t) {
  V[t] = St()
}

function un(t, e) {
  let n = t + 1;
  for (; V[n];) delete V[n], n += 1;
  for (n = e + 1; Q[n];) delete Q[n], n += 1
}

function Z(t, e = !1) {
  return e ? location.replace(t.href) : location.href = t.href, new Promise(() => {})
}
async function Se() {
  if ("serviceWorker" in navigator) {
    const t = await navigator.serviceWorker.getRegistration(A || "/");
    t && await t.update()
  }
}

function se() {}
let Ft, Pt, mt, P, Ct, b;
const _t = [],
  wt = [];
let y = null;

function Re() {
  var t;
  (t = y == null ? void 0 : y.fork) == null || t.then(e => e == null ? void 0 : e.discard()), y = null
}
const ht = new Map,
  zt = new Set,
  dn = new Set,
  H = new Set;
let m = {
    branch: [],
    error: null,
    url: null
  },
  xe = !1,
  yt = !1,
  ie = !0,
  tt = !1,
  G = !1,
  Le = !1,
  Gt = !1,
  Wt, E, L, D;
const vt = new Set,
  ce = new Map;
async function qn(t, e, n) {
  var s, o, i, c, l;
  (s = globalThis.__sveltekit_qt5ket) != null && s.data && globalThis.__sveltekit_qt5ket.data, document.URL !== location.href && (location.href = location.href), b = t, await ((i = (o = t.hooks).init) == null ? void 0 : i.call(o)), Ft = tn(t), P = document.documentElement, Ct = e, Pt = t.nodes[0], mt = t.nodes[1], Pt(), mt(), E = (c = history.state) == null ? void 0 : c[F], L = (l = history.state) == null ? void 0 : l[J], E || (E = L = Date.now(), history.replaceState({
    ...history.state,
    [F]: E,
    [J]: L
  }, ""));
  const r = V[E];

  function a() {
    r && (history.scrollRestoration = "manual", scrollTo(r.x, r.y))
  }
  n ? (a(), await xn(Ct, n)) : (await z({
    type: "enter",
    url: Kt(b.hash ? Un(new URL(location.href)) : location.href),
    replace_state: !0
  }), a()), Rn()
}

function hn() {
  _t.length = 0, Gt = !1
}

function Ae(t) {
  wt.some(e => e == null ? void 0 : e.snapshot) && (Q[t] = wt.map(e => {
    var n;
    return (n = e == null ? void 0 : e.snapshot) == null ? void 0 : n.capture()
  }))
}

function Ue(t) {
  var e;
  (e = Q[t]) == null || e.forEach((n, r) => {
    var a, s;
    (s = (a = wt[r]) == null ? void 0 : a.snapshot) == null || s.restore(n)
  })
}

function le() {
  Yt(E), ae(_e, V), Ae(L), ae(me, Q)
}
async function Te(t, e, n, r) {
  let a;
  e.invalidateAll && Re(), await z({
    type: "goto",
    url: Kt(t),
    keepfocus: e.keepFocus,
    noscroll: e.noScroll,
    replace_state: e.replaceState,
    state: e.state,
    redirect_count: n,
    nav_token: r,
    accept: () => {
      e.invalidateAll && (Gt = !0, a = [...ce.keys()]), e.invalidate && e.invalidate.forEach(Sn)
    }
  }), e.invalidateAll && pt().then(pt).then(() => {
    ce.forEach(({
      resource: s
    }, o) => {
      var i;
      a != null && a.includes(o) && ((i = s.refresh) == null || i.call(s))
    })
  })
}
async function pn(t) {
  if (t.id !== (y == null ? void 0 : y.id)) {
    const e = {};
    if (vt.add(e), y = {
        id: t.id,
        token: e,
        promise: $e({
          ...t,
          preload: e
        }).then(n => (vt.delete(e), n.type === "loaded" && n.state.error && Re(), n)),
        fork: null
      }, ne) {
      const n = y;
      n.fork = n.promise.then(r => {
        if (n === y && r.type === "loaded") try {
          return ne(() => {
            Wt.$set(r.props), Ee(r.props.page)
          })
        } catch {}
        return null
      })
    }
  }
  return y.promise
}
async function $t(t) {
  var n;
  const e = (n = await xt(t, !1)) == null ? void 0 : n.route;
  e && await Promise.all([...e.layouts, e.leaf].map(r => r == null ? void 0 : r[1]()))
}
async function Ie(t, e, n) {
  var a;
  m = t.state;
  const r = document.querySelector("style[data-sveltekit]");
  if (r && r.remove(), Object.assign(R, t.props.page), Wt = new b.root({
      target: e,
      props: {
        ...t.props,
        stores: N,
        components: wt
      },
      hydrate: n,
      sync: !1
    }), await Promise.resolve(), Ue(L), n) {
    const s = {
      from: null,
      to: {
        params: m.params,
        route: {
          id: ((a = m.route) == null ? void 0 : a.id) ?? null
        },
        url: new URL(location.href)
      },
      willUnload: !1,
      type: "enter",
      complete: Promise.resolve()
    };
    H.forEach(o => o(s))
  }
  yt = !0
}

function bt({
  url: t,
  params: e,
  branch: n,
  status: r,
  error: a,
  route: s,
  form: o
}) {
  let i = "never";
  if (A && (t.pathname === A || t.pathname === A + "/")) i = "always";
  else
    for (const f of n)(f == null ? void 0 : f.slash) !== void 0 && (i = f.slash);
  t.pathname = Be(t.pathname, i), t.search = t.search;
  const c = {
    type: "loaded",
    state: {
      url: t,
      params: e,
      branch: n,
      error: a,
      route: s
    },
    props: {
      constructors: on(n).map(f => f.node.component),
      page: Zt(R)
    }
  };
  o !== void 0 && (c.props.form = o);
  let l = {},
    d = !R,
    u = 0;
  for (let f = 0; f < Math.max(n.length, m.branch.length); f += 1) {
    const h = n[f],
      _ = m.branch[f];
    (h == null ? void 0 : h.data) !== (_ == null ? void 0 : _.data) && (d = !0), h && (l = {
      ...l,
      ...h.data
    }, d && (c.props[`data_${u}`] = l), u += 1)
  }
  return (!m.url || t.href !== m.url.href || m.error !== a || o !== void 0 && o !== R.form || d) && (c.props.page = {
    error: a,
    params: e,
    route: {
      id: (s == null ? void 0 : s.id) ?? null
    },
    state: {},
    status: r,
    url: new URL(t),
    form: o ?? null,
    data: d ? l : R.data
  }), c
}
async function Ht({
  loader: t,
  parent: e,
  url: n,
  params: r,
  route: a,
  server_data_node: s
}) {
  var l, d;
  let o = null;
  const i = {
      dependencies: new Set,
      params: new Set,
      parent: !1,
      route: !1,
      url: !1,
      search_params: new Set
    },
    c = await t();
  return {
    node: c,
    loader: t,
    server: s,
    universal: (l = c.universal) != null && l.load ? {
      type: "data",
      data: o,
      uses: i
    } : null,
    data: o ?? (s == null ? void 0 : s.data) ?? null,
    slash: ((d = c.universal) == null ? void 0 : d.trailingSlash) ?? (s == null ? void 0 : s.slash)
  }
}

function gn(t, e, n) {
  let r = t instanceof Request ? t.url : t;
  const a = new URL(r, n);
  a.origin === n.origin && (r = a.href.slice(n.origin.length));
  const s = yt ? We(r, a.href, e) : Ge(r, e);
  return {
    resolved: a,
    promise: s
  }
}

function mn(t, e, n, r, a, s) {
  if (Gt) return !0;
  if (!a) return !1;
  if (a.parent && t || a.route && e || a.url && n) return !0;
  for (const o of a.search_params)
    if (r.has(o)) return !0;
  for (const o of a.params)
    if (s[o] !== m.params[o]) return !0;
  for (const o of a.dependencies)
    if (_t.some(i => i(new URL(o)))) return !0;
  return !1
}

function Jt(t, e) {
  return (t == null ? void 0 : t.type) === "data" ? t : (t == null ? void 0 : t.type) === "skip" ? e ?? null : null
}

function _n(t, e) {
  if (!t) return new Set(e.searchParams.keys());
  const n = new Set([...t.searchParams.keys(), ...e.searchParams.keys()]);
  for (const r of n) {
    const a = t.searchParams.getAll(r),
      s = e.searchParams.getAll(r);
    a.every(o => s.includes(o)) && s.every(o => a.includes(o)) && n.delete(r)
  }
  return n
}

function wn({
  error: t,
  url: e,
  route: n,
  params: r
}) {
  return {
    type: "loaded",
    state: {
      error: t,
      url: e,
      route: n,
      params: r,
      branch: []
    },
    props: {
      page: Zt(R),
      constructors: []
    }
  }
}
async function $e({
  id: t,
  invalidating: e,
  url: n,
  params: r,
  route: a,
  preload: s
}) {
  if ((y == null ? void 0 : y.id) === t) return vt.delete(y.token), y.promise;
  const {
    errors: o,
    layouts: i,
    leaf: c
  } = a, l = [...i, c];
  o.forEach(g => g == null ? void 0 : g().catch(() => {})), l.forEach(g => g == null ? void 0 : g[1]().catch(() => {}));
  const d = m.url ? t !== kt(m.url) : !1,
    u = m.route ? a.id !== m.route.id : !1,
    v = _n(m.url, n);
  let f = !1;
  const h = l.map(async (g, p) => {
    var C;
    if (!g) return;
    const k = m.branch[p];
    return g[1] === (k == null ? void 0 : k.loader) && !mn(f, u, d, v, (C = k.universal) == null ? void 0 : C.uses, r) ? k : (f = !0, Ht({
      loader: g[1],
      url: n,
      params: r,
      route: a,
      parent: async () => {
        var dt;
        const O = {};
        for (let B = 0; B < p; B += 1) Object.assign(O, (dt = await h[B]) == null ? void 0 : dt.data);
        return O
      },
      server_data_node: Jt(g[0] ? {
        type: "skip"
      } : null, g[0] ? k == null ? void 0 : k.server : void 0)
    }))
  });
  for (const g of h) g.catch(() => {});
  const _ = [];
  for (let g = 0; g < l.length; g += 1)
    if (l[g]) try {
      _.push(await h[g])
    } catch (p) {
      if (p instanceof Dt) return {
        type: "redirect",
        location: p.location
      };
      if (vt.has(s)) return wn({
        error: await et(p, {
          params: r,
          url: n,
          route: {
            id: a.id
          }
        }),
        url: n,
        params: r,
        route: a
      });
      let k = Mt(p),
        x;
      if (p instanceof qt) x = p.body;
      else {
        if (await N.updated.check()) return await Se(), await Z(n);
        x = await et(p, {
          params: r,
          url: n,
          route: {
            id: a.id
          }
        })
      }
      const C = await yn(g, _, o);
      return C ? bt({
        url: n,
        params: r,
        branch: _.slice(0, C.idx).concat(C.node),
        status: k,
        error: x,
        route: a
      }) : await Pe(n, {
        id: a.id
      }, x, k)
    } else _.push(void 0);
  return bt({
    url: n,
    params: r,
    branch: _,
    status: 200,
    error: null,
    route: a,
    form: e ? void 0 : null
  })
}
async function yn(t, e, n) {
  for (; t--;)
    if (n[t]) {
      let r = t;
      for (; !e[r];) r -= 1;
      try {
        return {
          idx: r + 1,
          node: {
            node: await n[t](),
            loader: n[t],
            data: {},
            server: null,
            universal: null
          }
        }
      } catch {
        continue
      }
    }
}
async function Xt({
  status: t,
  error: e,
  url: n,
  route: r
}) {
  const a = {};
  let s = null;
  try {
    const o = await Ht({
        loader: Pt,
        url: n,
        params: a,
        route: r,
        parent: () => Promise.resolve({}),
        server_data_node: Jt(s)
      }),
      i = {
        node: await mt(),
        loader: mt,
        universal: null,
        server: null,
        data: null
      };
    return bt({
      url: n,
      params: a,
      branch: [o, i],
      status: t,
      error: e,
      route: null
    })
  } catch (o) {
    if (o instanceof Dt) return Te(new URL(o.location, location.href), {}, 0);
    throw o
  }
}
async function vn(t) {
  const e = t.href;
  if (ht.has(e)) return ht.get(e);
  let n;
  try {
    const r = (async () => {
      let a = await b.hooks.reroute({
        url: new URL(t),
        fetch: async (s, o) => gn(s, o, t).promise
      }) ?? t;
      if (typeof a == "string") {
        const s = new URL(t);
        b.hash ? s.hash = a : s.pathname = a, a = s
      }
      return a
    })();
    ht.set(e, r), n = await r
  } catch {
    ht.delete(e);
    return
  }
  return n
}
async function xt(t, e) {
  if (t && !Rt(t, A, b.hash)) {
    const n = await vn(t);
    if (!n) return;
    const r = bn(n);
    for (const a of Ft) {
      const s = a.exec(r);
      if (s) return {
        id: kt(t),
        invalidating: e,
        route: a,
        params: Me(s),
        url: t
      }
    }
  }
}

function bn(t) {
  return Ke(b.hash ? t.hash.replace(/^#/, "").replace(/[?#].+/, "") : t.pathname.slice(A.length)) || "/"
}

function kt(t) {
  return (b.hash ? t.hash.replace(/^#/, "") : t.pathname) + t.search
}

function Oe({
  url: t,
  type: e,
  intent: n,
  delta: r,
  event: a
}) {
  let s = !1;
  const o = Qt(m, n, t, e);
  r !== void 0 && (o.navigation.delta = r), a !== void 0 && (o.navigation.event = a);
  const i = {
    ...o.navigation,
    cancel: () => {
      s = !0, o.reject(new Error("navigation cancelled"))
    }
  };
  return tt || zt.forEach(c => c(i)), s ? null : o
}
async function z({
  type: t,
  url: e,
  popped: n,
  keepfocus: r,
  noscroll: a,
  replace_state: s,
  state: o = {},
  redirect_count: i = 0,
  nav_token: c = {},
  accept: l = se,
  block: d = se,
  event: u
}) {
  var B;
  const v = D;
  D = c;
  const f = await xt(e, !1),
    h = t === "enter" ? Qt(m, f, e, t) : Oe({
      url: e,
      type: t,
      delta: n == null ? void 0 : n.delta,
      intent: f,
      event: u
    });
  if (!h) {
    d(), D === c && (D = v);
    return
  }
  const _ = E,
    g = L;
  l(), tt = !0, yt && h.navigation.type !== "enter" && N.navigating.set(X.current = h.navigation);
  let p = f && await $e(f);
  if (!p) {
    if (Rt(e, A, b.hash)) return await Z(e, s);
    p = await Pe(e, {
      id: null
    }, await et(new Vt(404, "Not Found", `Not found: ${e.pathname}`), {
      url: e,
      params: {},
      route: {
        id: null
      }
    }), 404, s)
  }
  if (e = (f == null ? void 0 : f.url) || e, D !== c) return h.reject(new Error("navigation aborted")), !1;
  if (p.type === "redirect") {
    if (i < 20) {
      await z({
        type: t,
        url: new URL(p.location, e),
        popped: n,
        keepfocus: r,
        noscroll: a,
        replace_state: s,
        state: o,
        redirect_count: i + 1,
        nav_token: c
      }), h.fulfil(void 0);
      return
    }
    p = await Xt({
      status: 500,
      error: await et(new Error("Redirect loop"), {
        url: e,
        params: {},
        route: {
          id: null
        }
      }),
      url: e,
      route: {
        id: null
      }
    })
  } else p.props.page.status >= 400 && await N.updated.check() && (await Se(), await Z(e, s));
  if (hn(), Yt(_), Ae(g), p.props.page.url.pathname !== e.pathname && (e.pathname = p.props.page.url.pathname), o = n ? n.state : o, !n) {
    const S = s ? 0 : 1,
      K = {
        [F]: E += S,
        [J]: L += S,
        [we]: o
      };
    (s ? history.replaceState : history.pushState).call(history, K, "", e), s || un(E, L)
  }
  const k = y == null ? void 0 : y.fork;
  y = null, p.props.page.state = o;
  let x;
  if (yt) {
    const S = (await Promise.all(Array.from(dn, j => j(h.navigation)))).filter(j => typeof j == "function");
    if (S.length > 0) {
      let j = function() {
        S.forEach(Lt => {
          H.delete(Lt)
        })
      };
      S.push(j), S.forEach(Lt => {
        H.add(Lt)
      })
    }
    m = p.state, p.props.page && (p.props.page.url = e);
    const K = k && await k;
    K ? x = K.commit() : (Wt.$set(p.props), Ee(p.props.page), x = (B = De) == null ? void 0 : B()), Le = !0
  } else await Ie(p, Ct, !1);
  const {
    activeElement: C
  } = document;
  await x, await pt(), await pt();
  let O = n ? n.scroll : a ? St() : null;
  if (ie) {
    const S = e.hash && document.getElementById(Ce(e));
    if (O) scrollTo(O.x, O.y);
    else if (S) {
      S.scrollIntoView();
      const {
        top: K,
        left: j
      } = S.getBoundingClientRect();
      O = {
        x: pageXOffset + j,
        y: pageYOffset + K
      }
    } else scrollTo(0, 0)
  }
  const dt = document.activeElement !== C && document.activeElement !== document.body;
  !r && !dt && An(e, O), ie = !0, p.props.page && Object.assign(R, p.props.page), tt = !1, t === "popstate" && Ue(L), h.fulfil(void 0), H.forEach(S => S(h.navigation)), N.navigating.set(X.current = null)
}
async function Pe(t, e, n, r, a) {
  return t.origin === Et && t.pathname === location.pathname && !xe ? await Xt({
    status: r,
    error: n,
    url: t,
    route: e
  }) : await Z(t, a)
}

function kn() {
  let t, e, n;
  P.addEventListener("mousemove", i => {
    const c = i.target;
    clearTimeout(t), t = setTimeout(() => {
      s(c, q.hover)
    }, 20)
  });

  function r(i) {
    i.defaultPrevented || s(i.composedPath()[0], q.tap)
  }
  P.addEventListener("mousedown", r), P.addEventListener("touchstart", r, {
    passive: !0
  });
  const a = new IntersectionObserver(i => {
    for (const c of i) c.isIntersecting && ($t(new URL(c.target.href)), a.unobserve(c.target))
  }, {
    threshold: 0
  });
  async function s(i, c) {
    const l = ve(i, P),
      d = l === e && c >= n;
    if (!l || d) return;
    const {
      url: u,
      external: v,
      download: f
    } = Ot(l, A, b.hash);
    if (v || f) return;
    const h = gt(l),
      _ = u && kt(m.url) === kt(u);
    if (!(h.reload || _))
      if (c <= h.preload_data) {
        e = l, n = q.tap;
        const g = await xt(u, !1);
        if (!g) return;
        pn(g)
      } else c <= h.preload_code && (e = l, n = c, $t(u))
  }

  function o() {
    a.disconnect();
    for (const i of P.querySelectorAll("a")) {
      const {
        url: c,
        external: l,
        download: d
      } = Ot(i, A, b.hash);
      if (l || d) continue;
      const u = gt(i);
      u.reload || (u.preload_code === q.viewport && a.observe(i), u.preload_code === q.eager && $t(c))
    }
  }
  H.add(o), o()
}

function et(t, e) {
  if (t instanceof qt) return t.body;
  const n = Mt(t),
    r = sn(t);
  return b.hooks.handleError({
    error: t,
    event: e,
    status: n,
    message: r
  }) ?? {
    message: r
  }
}

function En(t, e) {
  ln(() => (t.add(e), () => {
    t.delete(e)
  }))
}

function Dn(t) {
  En(zt, t)
}

function Vn(t, e = {}) {
  return t = new URL(Kt(t)), t.origin !== Et ? Promise.reject(new Error("goto: invalid URL")) : Te(t, e, 0)
}

function Sn(t) {
  if (typeof t == "function") _t.push(t);
  else {
    const {
      href: e
    } = new URL(t, location.href);
    _t.push(n => n.href === e)
  }
}

function Rn() {
  var e;
  history.scrollRestoration = "manual", addEventListener("beforeunload", n => {
    let r = !1;
    if (le(), !tt) {
      const a = Qt(m, void 0, null, "leave"),
        s = {
          ...a.navigation,
          cancel: () => {
            r = !0, a.reject(new Error("navigation cancelled"))
          }
        };
      zt.forEach(o => o(s))
    }
    r ? (n.preventDefault(), n.returnValue = "") : history.scrollRestoration = "auto"
  }), addEventListener("visibilitychange", () => {
    document.visibilityState === "hidden" && le()
  }), (e = navigator.connection) != null && e.saveData || kn(), P.addEventListener("click", async n => {
    if (n.button || n.which !== 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey || n.defaultPrevented) return;
    const r = ve(n.composedPath()[0], P);
    if (!r) return;
    const {
      url: a,
      external: s,
      target: o,
      download: i
    } = Ot(r, A, b.hash);
    if (!a) return;
    if (o === "_parent" || o === "_top") {
      if (window.parent !== window) return
    } else if (o && o !== "_self") return;
    const c = gt(r);
    if (!(r instanceof SVGAElement) && a.protocol !== location.protocol && !(a.protocol === "https:" || a.protocol === "http:") || i) return;
    const [d, u] = (b.hash ? a.hash.replace(/^#/, "") : a.href).split("#"), v = d === Ut(location);
    if (s || c.reload && (!v || !u)) {
      Oe({
        url: a,
        type: "link",
        event: n
      }) ? tt = !0 : n.preventDefault();
      return
    }
    if (u !== void 0 && v) {
      const [, f] = m.url.href.split("#");
      if (f === u) {
        if (n.preventDefault(), u === "" || u === "top" && r.ownerDocument.getElementById("top") === null) scrollTo({
          top: 0
        });
        else {
          const h = r.ownerDocument.getElementById(decodeURIComponent(u));
          h && (h.scrollIntoView(), h.focus())
        }
        return
      }
      if (G = !0, Yt(E), t(a), !c.replace_state) return;
      G = !1
    }
    n.preventDefault(), await new Promise(f => {
      requestAnimationFrame(() => {
        setTimeout(f, 0)
      }), setTimeout(f, 100)
    }), await z({
      type: "link",
      url: a,
      keepfocus: c.keepfocus,
      noscroll: c.noscroll,
      replace_state: c.replace_state ?? a.href === location.href,
      event: n
    })
  }), P.addEventListener("submit", n => {
    if (n.defaultPrevented) return;
    const r = HTMLFormElement.prototype.cloneNode.call(n.target),
      a = n.submitter;
    if (((a == null ? void 0 : a.formTarget) || r.target) === "_blank" || ((a == null ? void 0 : a.formMethod) || r.method) !== "get") return;
    const i = new URL((a == null ? void 0 : a.hasAttribute("formaction")) && (a == null ? void 0 : a.formAction) || r.action);
    if (Rt(i, A, !1)) return;
    const c = n.target,
      l = gt(c);
    if (l.reload) return;
    n.preventDefault(), n.stopPropagation();
    const d = new FormData(c, a);
    i.search = new URLSearchParams(d).toString(), z({
      type: "form",
      url: i,
      keepfocus: l.keepfocus,
      noscroll: l.noscroll,
      replace_state: l.replace_state ?? i.href === location.href,
      event: n
    })
  }), addEventListener("popstate", async n => {
    var r;
    if (!jt) {
      if ((r = n.state) != null && r[F]) {
        const a = n.state[F];
        if (D = {}, a === E) return;
        const s = V[a],
          o = n.state[we] ?? {},
          i = new URL(n.state[nn] ?? location.href),
          c = n.state[J],
          l = m.url ? Ut(location) === Ut(m.url) : !1;
        if (c === L && (Le || l)) {
          o !== R.state && (R.state = o), t(i), V[E] = St(), s && scrollTo(s.x, s.y), E = a;
          return
        }
        const u = a - E;
        await z({
          type: "popstate",
          url: i,
          popped: {
            state: o,
            scroll: s,
            delta: u
          },
          accept: () => {
            E = a, L = c
          },
          block: () => {
            history.go(-u)
          },
          nav_token: D,
          event: n
        })
      } else if (!G) {
        const a = new URL(location.href);
        t(a), b.hash && location.reload()
      }
    }
  }), addEventListener("hashchange", () => {
    G && (G = !1, history.replaceState({
      ...history.state,
      [F]: ++E,
      [J]: L
    }, "", location.href))
  });
  for (const n of document.querySelectorAll("link")) fn.has(n.rel) && (n.href = n.href);
  addEventListener("pageshow", n => {
    n.persisted && N.navigating.set(X.current = null)
  });

  function t(n) {
    m.url = R.url = n, N.page.set(Zt(R)), N.page.notify()
  }
}
async function xn(t, {
  status: e = 200,
  error: n,
  node_ids: r,
  params: a,
  route: s,
  server_route: o,
  data: i,
  form: c
}) {
  xe = !0;
  const l = new URL(location.href);
  let d;
  ({
    params: a = {},
    route: s = {
      id: null
    }
  } = await xt(l, !1) || {}), d = Ft.find(({
    id: f
  }) => f === s.id);
  let u, v = !0;
  try {
    const f = r.map(async (_, g) => {
        const p = i[g];
        return p != null && p.uses && (p.uses = Ln(p.uses)), Ht({
          loader: b.nodes[_],
          url: l,
          params: a,
          route: s,
          parent: async () => {
            const k = {};
            for (let x = 0; x < g; x += 1) Object.assign(k, (await f[x]).data);
            return k
          },
          server_data_node: Jt(p)
        })
      }),
      h = await Promise.all(f);
    if (d) {
      const _ = d.layouts;
      for (let g = 0; g < _.length; g++) _[g] || h.splice(g, 0, void 0)
    }
    u = bt({
      url: l,
      params: a,
      branch: h,
      status: e,
      error: n,
      form: c,
      route: d ?? null
    })
  } catch (f) {
    if (f instanceof Dt) {
      await Z(new URL(f.location, location.href));
      return
    }
    u = await Xt({
      status: Mt(f),
      error: await et(f, {
        url: l,
        params: a,
        route: s
      }),
      url: l,
      route: s
    }), t.textContent = "", v = !1
  }
  u.props.page && (u.props.page.state = {}), await Ie(u, t, v)
}

function Ln(t) {
  return {
    dependencies: new Set((t == null ? void 0 : t.dependencies) ?? []),
    params: new Set((t == null ? void 0 : t.params) ?? []),
    parent: !!(t != null && t.parent),
    route: !!(t != null && t.route),
    url: !!(t != null && t.url),
    search_params: new Set((t == null ? void 0 : t.search_params) ?? [])
  }
}
let jt = !1;

function An(t, e = null) {
  const n = document.querySelector("[autofocus]");
  if (n) n.focus();
  else {
    const r = Ce(t);
    if (r && document.getElementById(r)) {
      const {
        x: s,
        y: o
      } = e ?? St();
      setTimeout(() => {
        const i = history.state;
        jt = !0, location.replace(`#${r}`), b.hash && location.replace(t.hash), history.replaceState(i, "", t.hash), scrollTo(s, o), jt = !1
      })
    } else {
      const s = document.body,
        o = s.getAttribute("tabindex");
      s.tabIndex = -1, s.focus({
        preventScroll: !0,
        focusVisible: !1
      }), o !== null ? s.setAttribute("tabindex", o) : s.removeAttribute("tabindex")
    }
    const a = getSelection();
    if (a && a.type !== "None") {
      const s = [];
      for (let o = 0; o < a.rangeCount; o += 1) s.push(a.getRangeAt(o));
      setTimeout(() => {
        if (a.rangeCount === s.length) {
          for (let o = 0; o < a.rangeCount; o += 1) {
            const i = s[o],
              c = a.getRangeAt(o);
            if (i.commonAncestorContainer !== c.commonAncestorContainer || i.startContainer !== c.startContainer || i.endContainer !== c.endContainer || i.startOffset !== c.startOffset || i.endOffset !== c.endOffset) return
          }
          a.removeAllRanges()
        }
      })
    }
  }
}

function Qt(t, e, n, r) {
  var c, l;
  let a, s;
  const o = new Promise((d, u) => {
    a = d, s = u
  });
  return o.catch(() => {}), {
    navigation: {
      from: {
        params: t.params,
        route: {
          id: ((c = t.route) == null ? void 0 : c.id) ?? null
        },
        url: t.url
      },
      to: n && {
        params: (e == null ? void 0 : e.params) ?? null,
        route: {
          id: ((l = e == null ? void 0 : e.route) == null ? void 0 : l.id) ?? null
        },
        url: n
      },
      willUnload: !e,
      type: r,
      complete: o
    },
    fulfil: a,
    reject: s
  }
}

function Zt(t) {
  return {
    data: t.data,
    error: t.error,
    form: t.form,
    params: t.params,
    route: t.route,
    state: t.state,
    status: t.status,
    url: t.url
  }
}

function Un(t) {
  const e = new URL(t);
  return e.hash = decodeURIComponent(t.hash), e
}

function Ce(t) {
  let e;
  if (b.hash) {
    const [, , n] = t.hash.split("#", 3);
    e = n ?? ""
  } else e = t.hash.slice(1);
  return decodeURIComponent(e)
}
export {
  qn as a, Dn as b, Vn as g, Pn as l, R as p, N as s
};
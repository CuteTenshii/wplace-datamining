var et = e => {
  throw TypeError(e)
};
var Ct = (e, t, n) => t.has(e) || et("Cannot " + n);
var w = (e, t, n) => (Ct(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
  U = (e, t, n) => t.has(e) ? et("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
import {
  o as tt,
  b as Nt
} from "./CaGBnsSj.js";
import {
  bi as Ae,
  bj as Dt,
  e as T,
  j as I,
  i as $,
  am as pe,
  aD as nt,
  aI as qt
} from "./B2OmeKf3.js";
import {
  v as Vt
} from "./D8Rj0nC0.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "70dda2bcd37c81e0ed25f634cf032d8abd8db068"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "aaebb516-3d17-494b-8a5c-feed67ed0158", e._sentryDebugIdIdentifier = "sentry-dbid-aaebb516-3d17-494b-8a5c-feed67ed0158")
  })()
} catch {}
const M = [];

function Ne(e, t = Ae) {
  let n = null;
  const r = new Set;

  function a(i) {
    if (Dt(e, i) && (e = i, n)) {
      const c = !M.length;
      for (const l of r) l[1](), M.push(l, e);
      if (c) {
        for (let l = 0; l < M.length; l += 2) M[l][0](M[l + 1]);
        M.length = 0
      }
    }
  }

  function s(i) {
    a(i(e))
  }

  function o(i, c = Ae) {
    const l = [i, c];
    return r.add(l), r.size === 1 && (n = t(a, s) || Ae), i(e), () => {
      r.delete(l), r.size === 0 && n && (n(), n = null)
    }
  }
  return {
    set: a,
    update: s,
    subscribe: o
  }
}
class De {
  constructor(t, n) {
    this.status = t, typeof n == "string" ? this.body = {
      message: n
    } : n ? this.body = n : this.body = {
      message: `Error: ${t}`
    }
  }
  toString() {
    return JSON.stringify(this.body)
  }
}
class qe {
  constructor(t, n) {
    this.status = t, this.location = n
  }
}
class Ve extends Error {
  constructor(t, n, r) {
    super(r), this.status = t, this.text = n
  }
}
new URL("sveltekit-internal://");

function Bt(e, t) {
  return e === "/" || t === "ignore" ? e : t === "never" ? e.endsWith("/") ? e.slice(0, -1) : e : t === "always" && !e.endsWith("/") ? e + "/" : e
}

function Kt(e) {
  return e.split("%25").map(decodeURI).join("%25")
}

function Mt(e) {
  for (const t in e) e[t] = decodeURIComponent(e[t]);
  return e
}

function Ue({
  href: e
}) {
  return e.split("#")[0]
}

function Yt(...e) {
  let t = 5381;
  for (const n of e)
    if (typeof n == "string") {
      let r = n.length;
      for (; r;) t = t * 33 ^ n.charCodeAt(--r)
    } else if (ArrayBuffer.isView(n)) {
    const r = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
    let a = r.length;
    for (; a;) t = t * 33 ^ r[--a]
  } else throw new TypeError("value must be a string or TypedArray");
  return (t >>> 0).toString(36)
}
new TextEncoder;
new TextDecoder;

function zt(e) {
  const t = atob(e),
    n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n
}
const Ft = window.fetch;
window.fetch = (e, t) => ((e instanceof Request ? e.method : (t == null ? void 0 : t.method) || "GET") !== "GET" && W.delete(Be(e)), Ft(e, t));
const W = new Map;

function Gt(e, t) {
  const n = Be(e, t),
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
    }), r.getAttribute("data-b64") !== null && (a = zt(a)), Promise.resolve(new Response(a, s))
  }
  return window.fetch(e, t)
}

function Wt(e, t, n) {
  if (W.size > 0) {
    const r = Be(e, n),
      a = W.get(r);
    if (a) {
      if (performance.now() < a.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(n == null ? void 0 : n.cache)) return new Response(a.body, a.init);
      W.delete(r)
    }
  }
  return window.fetch(t, n)
}

function Be(e, t) {
  let r = `script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;
  if (t != null && t.headers || t != null && t.body) {
    const a = [];
    t.headers && a.push([...new Headers(t.headers)].join(",")), t.body && (typeof t.body == "string" || ArrayBuffer.isView(t.body)) && a.push(t.body), r += `[data-hash="${Yt(...a)}"]`
  }
  return r
}
const Ht = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;

function Jt(e) {
  const t = [];
  return {
    pattern: e === "/" ? /^\/$/ : new RegExp(`^${Qt(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/([^]*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const o=r.split(/\[(.+?)\](?!\])/);return"/"+o.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Te(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Te(String.fromCharCode(...c.slice(2).split("-").map(_=>parseInt(_,16))));const d=Ht.exec(c),[,u,v,f,h]=d;return t.push({name:f,matcher:h,optional:!!u,rest:!!v,chained:v?l===1&&o[0]==="":!1}),v?"([^]*?)":u?"([^/]*)?":"([^/]+?)"}return Te(c)}).join("")}).join("")}/?$`),
    params: t
  }
}

function Xt(e) {
  return e !== "" && !/^\([^)]+\)$/.test(e)
}

function Qt(e) {
  return e.slice(1).split("/").filter(Xt)
}

function Zt(e, t, n) {
  const r = {},
    a = e.slice(1),
    s = a.filter(i => i !== void 0);
  let o = 0;
  for (let i = 0; i < t.length; i += 1) {
    const c = t[i];
    let l = a[i - o];
    if (c.chained && c.rest && o && (l = a.slice(i - o, i + 1).filter(d => d).join("/"), o = 0), l === void 0) {
      c.rest && (r[c.name] = "");
      continue
    }
    if (!c.matcher || n[c.matcher](l)) {
      r[c.name] = l;
      const d = t[i + 1],
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

function Te(e) {
  return e.normalize().replace(/[[\]]/g, "\\$&").replace(/%/g, "%25").replace(/\//g, "%2[Ff]").replace(/\?/g, "%3[Ff]").replace(/#/g, "%23").replace(/[.*+?^${}()|\\]/g, "\\$&")
}

function en({
  nodes: e,
  server_loads: t,
  dictionary: n,
  matchers: r
}) {
  const a = new Set(t);
  return Object.entries(n).map(([i, [c, l, d]]) => {
    const {
      pattern: u,
      params: v
    } = Jt(i), f = {
      id: i,
      exec: h => {
        const _ = u.exec(h);
        if (_) return Zt(_, v, r)
      },
      errors: [1, ...d || []].map(h => e[h]),
      layouts: [0, ...l || []].map(o),
      leaf: s(c)
    };
    return f.errors.length = f.layouts.length = Math.max(f.errors.length, f.layouts.length), f
  });

  function s(i) {
    const c = i < 0;
    return c && (i = ~i), [c, e[i]]
  }

  function o(i) {
    return i === void 0 ? i : [a.has(i), e[i]]
  }
}

function gt(e, t = JSON.parse) {
  try {
    return t(sessionStorage[e])
  } catch {}
}

function at(e, t, n = JSON.stringify) {
  const r = n(t);
  try {
    sessionStorage[e] = r
  } catch {}
}
var ft;
const A = ((ft = globalThis.__sveltekit_16uxdjm) == null ? void 0 : ft.base) ?? "";
var ut;
const tn = ((ut = globalThis.__sveltekit_16uxdjm) == null ? void 0 : ut.assets) ?? A ?? "",
  mt = "sveltekit:snapshot",
  _t = "sveltekit:scroll",
  wt = "sveltekit:states",
  nn = "sveltekit:pageurl",
  z = "sveltekit:history",
  J = "sveltekit:navigation",
  D = {
    tap: 1,
    hover: 2,
    viewport: 3,
    eager: 4,
    off: -1,
    false: -1
  },
  Ee = location.origin;

function Ke(e) {
  if (e instanceof URL) return e;
  let t = document.baseURI;
  if (!t) {
    const n = document.getElementsByTagName("base");
    t = n.length ? n[0].href : document.URL
  }
  return new URL(e, t)
}

function Se() {
  return {
    x: pageXOffset,
    y: pageYOffset
  }
}

function Y(e, t) {
  return e.getAttribute(`data-sveltekit-${t}`)
}
const rt = {
  ...D,
  "": D.hover
};

function yt(e) {
  let t = e.assignedSlot ?? e.parentNode;
  return (t == null ? void 0 : t.nodeType) === 11 && (t = t.host), t
}

function vt(e, t) {
  for (; e && e !== t;) {
    if (e.nodeName.toUpperCase() === "A" && e.hasAttribute("href")) return e;
    e = yt(e)
  }
}

function Oe(e, t, n) {
  let r;
  try {
    if (r = new URL(e instanceof SVGAElement ? e.href.baseVal : e.href, document.baseURI), n && r.hash.match(/^#[^/]/)) {
      const i = location.hash.split("#")[1] || "/";
      r.hash = `#${i}${r.hash}`
    }
  } catch {}
  const a = e instanceof SVGAElement ? e.target.baseVal : e.target,
    s = !r || !!a || Re(r, t, n) || (e.getAttribute("rel") || "").split(/\s+/).includes("external"),
    o = (r == null ? void 0 : r.origin) === Ee && e.hasAttribute("download");
  return {
    url: r,
    external: s,
    target: a,
    download: o
  }
}

function ge(e) {
  let t = null,
    n = null,
    r = null,
    a = null,
    s = null,
    o = null,
    i = e;
  for (; i && i !== document.documentElement;) r === null && (r = Y(i, "preload-code")), a === null && (a = Y(i, "preload-data")), t === null && (t = Y(i, "keepfocus")), n === null && (n = Y(i, "noscroll")), s === null && (s = Y(i, "reload")), o === null && (o = Y(i, "replacestate")), i = yt(i);

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
    preload_code: rt[r ?? "off"],
    preload_data: rt[a ?? "off"],
    keepfocus: c(t),
    noscroll: c(n),
    reload: c(s),
    replace_state: c(o)
  }
}

function ot(e) {
  const t = Ne(e);
  let n = !0;

  function r() {
    n = !0, t.update(o => o)
  }

  function a(o) {
    n = !1, t.set(o)
  }

  function s(o) {
    let i;
    return t.subscribe(c => {
      (i === void 0 || n && c !== i) && o(i = c)
    })
  }
  return {
    notify: r,
    set: a,
    subscribe: s
  }
}
const bt = {
  v: () => {}
};

function an() {
  const {
    set: e,
    subscribe: t
  } = Ne(!1);
  let n;
  async function r() {
    clearTimeout(n);
    try {
      const a = await fetch(`${tn}/_app/version.json`, {
        headers: {
          pragma: "no-cache",
          "cache-control": "no-cache"
        }
      });
      if (!a.ok) return !1;
      const o = (await a.json()).version !== Vt;
      return o && (e(!0), bt.v(), clearTimeout(n)), o
    } catch {
      return !1
    }
  }
  return {
    subscribe: t,
    check: r
  }
}

function Re(e, t, n) {
  return e.origin !== Ee || !e.pathname.startsWith(t) ? !0 : n ? !(e.pathname === t + "/" || e.pathname === t + "/index.html" || e.protocol === "file:" && e.pathname.replace(/\/[^/]+\.html?$/, "") === t) : !1
}

function jn(e) {}
const kt = new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...kt];
const rn = new Set([...kt]);
[...rn];

function on(e) {
  return e.filter(t => t != null)
}

function Me(e) {
  return e instanceof De || e instanceof Ve ? e.status : 500
}

function sn(e) {
  return e instanceof Ve ? e.text : "Internal Error"
}
let R, X, Ie;
const cn = tt.toString().includes("$$") || /function \w+\(\) \{\}/.test(tt.toString());
var ne, ae, re, oe, se, ie, ce, le, dt, fe, ht, ue, pt;
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
}, Ie = {
  current: !1
}) : (R = new(dt = class {
  constructor() {
    U(this, ne, T({}));
    U(this, ae, T(null));
    U(this, re, T(null));
    U(this, oe, T({}));
    U(this, se, T({
      id: null
    }));
    U(this, ie, T({}));
    U(this, ce, T(-1));
    U(this, le, T(new URL("https://example.com")))
  }
  get data() {
    return I(w(this, ne))
  }
  set data(t) {
    $(w(this, ne), t)
  }
  get form() {
    return I(w(this, ae))
  }
  set form(t) {
    $(w(this, ae), t)
  }
  get error() {
    return I(w(this, re))
  }
  set error(t) {
    $(w(this, re), t)
  }
  get params() {
    return I(w(this, oe))
  }
  set params(t) {
    $(w(this, oe), t)
  }
  get route() {
    return I(w(this, se))
  }
  set route(t) {
    $(w(this, se), t)
  }
  get state() {
    return I(w(this, ie))
  }
  set state(t) {
    $(w(this, ie), t)
  }
  get status() {
    return I(w(this, ce))
  }
  set status(t) {
    $(w(this, ce), t)
  }
  get url() {
    return I(w(this, le))
  }
  set url(t) {
    $(w(this, le), t)
  }
}, ne = new WeakMap, ae = new WeakMap, re = new WeakMap, oe = new WeakMap, se = new WeakMap, ie = new WeakMap, ce = new WeakMap, le = new WeakMap, dt), X = new(ht = class {
  constructor() {
    U(this, fe, T(null))
  }
  get current() {
    return I(w(this, fe))
  }
  set current(t) {
    $(w(this, fe), t)
  }
}, fe = new WeakMap, ht), Ie = new(pt = class {
  constructor() {
    U(this, ue, T(!1))
  }
  get current() {
    return I(w(this, ue))
  }
  set current(t) {
    $(w(this, ue), t)
  }
}, ue = new WeakMap, pt), bt.v = () => Ie.current = !0);

function Et(e) {
  Object.assign(R, e)
}
const {
  onMount: ln
} = Nt, fn = new Set(["icon", "shortcut icon", "apple-touch-icon"]), V = gt(_t) ?? {}, Q = gt(mt) ?? {}, N = {
  url: ot({}),
  page: ot({}),
  navigating: Ne(null),
  updated: an()
};

function Ye(e) {
  V[e] = Se()
}

function un(e, t) {
  let n = e + 1;
  for (; V[n];) delete V[n], n += 1;
  for (n = t + 1; Q[n];) delete Q[n], n += 1
}

function Z(e, t = !1) {
  return t ? location.replace(e.href) : location.href = e.href, new Promise(() => {})
}
async function St() {
  if ("serviceWorker" in navigator) {
    const e = await navigator.serviceWorker.getRegistration(A || "/");
    e && await e.update()
  }
}

function st() {}
let ze, je, me, j, Pe, b;
const _e = [],
  we = [];
let y = null;

function Rt() {
  var e;
  (e = y == null ? void 0 : y.fork) == null || e.then(t => t == null ? void 0 : t.discard()), y = null
}
const he = new Map,
  Fe = new Set,
  dn = new Set,
  H = new Set;
let m = {
    branch: [],
    error: null,
    url: null
  },
  xt = !1,
  ye = !1,
  it = !0,
  ee = !1,
  G = !1,
  Lt = !1,
  Ge = !1,
  We, E, L, q;
const ve = new Set,
  ct = new Map;
async function Dn(e, t, n) {
  var s, o, i, c, l;
  (s = globalThis.__sveltekit_16uxdjm) != null && s.data && globalThis.__sveltekit_16uxdjm.data, document.URL !== location.href && (location.href = location.href), b = e, await ((i = (o = e.hooks).init) == null ? void 0 : i.call(o)), ze = en(e), j = document.documentElement, Pe = t, je = e.nodes[0], me = e.nodes[1], je(), me(), E = (c = history.state) == null ? void 0 : c[z], L = (l = history.state) == null ? void 0 : l[J], E || (E = L = Date.now(), history.replaceState({
    ...history.state,
    [z]: E,
    [J]: L
  }, ""));
  const r = V[E];

  function a() {
    r && (history.scrollRestoration = "manual", scrollTo(r.x, r.y))
  }
  n ? (a(), await xn(Pe, n)) : (await F({
    type: "enter",
    url: Ke(b.hash ? Un(new URL(location.href)) : location.href),
    replace_state: !0
  }), a()), Rn()
}

function hn() {
  _e.length = 0, Ge = !1
}

function At(e) {
  we.some(t => t == null ? void 0 : t.snapshot) && (Q[e] = we.map(t => {
    var n;
    return (n = t == null ? void 0 : t.snapshot) == null ? void 0 : n.capture()
  }))
}

function Ut(e) {
  var t;
  (t = Q[e]) == null || t.forEach((n, r) => {
    var a, s;
    (s = (a = we[r]) == null ? void 0 : a.snapshot) == null || s.restore(n)
  })
}

function lt() {
  Ye(E), at(_t, V), At(L), at(mt, Q)
}
async function Tt(e, t, n, r) {
  let a;
  t.invalidateAll && Rt(), await F({
    type: "goto",
    url: Ke(e),
    keepfocus: t.keepFocus,
    noscroll: t.noScroll,
    replace_state: t.replaceState,
    state: t.state,
    redirect_count: n,
    nav_token: r,
    accept: () => {
      t.invalidateAll && (Ge = !0, a = [...ct.keys()]), t.invalidate && t.invalidate.forEach(Sn)
    }
  }), t.invalidateAll && pe().then(pe).then(() => {
    ct.forEach(({
      resource: s
    }, o) => {
      var i;
      a != null && a.includes(o) && ((i = s.refresh) == null || i.call(s))
    })
  })
}
async function pn(e) {
  if (e.id !== (y == null ? void 0 : y.id)) {
    const t = {};
    if (ve.add(t), y = {
        id: e.id,
        token: t,
        promise: $t({
          ...e,
          preload: t
        }).then(n => (ve.delete(t), n.type === "loaded" && n.state.error && Rt(), n)),
        fork: null
      }, nt) {
      const n = y;
      n.fork = n.promise.then(r => {
        if (n === y && r.type === "loaded") try {
          return nt(() => {
            We.$set(r.props), Et(r.props.page)
          })
        } catch {}
        return null
      })
    }
  }
  return y.promise
}
async function $e(e) {
  var n;
  const t = (n = await xe(e, !1)) == null ? void 0 : n.route;
  t && await Promise.all([...t.layouts, t.leaf].map(r => r == null ? void 0 : r[1]()))
}
async function It(e, t, n) {
  var a;
  m = e.state;
  const r = document.querySelector("style[data-sveltekit]");
  if (r && r.remove(), Object.assign(R, e.props.page), We = new b.root({
      target: t,
      props: {
        ...e.props,
        stores: N,
        components: we
      },
      hydrate: n,
      sync: !1
    }), await Promise.resolve(), Ut(L), n) {
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
  ye = !0
}

function be({
  url: e,
  params: t,
  branch: n,
  status: r,
  error: a,
  route: s,
  form: o
}) {
  let i = "never";
  if (A && (e.pathname === A || e.pathname === A + "/")) i = "always";
  else
    for (const f of n)(f == null ? void 0 : f.slash) !== void 0 && (i = f.slash);
  e.pathname = Bt(e.pathname, i), e.search = e.search;
  const c = {
    type: "loaded",
    state: {
      url: e,
      params: t,
      branch: n,
      error: a,
      route: s
    },
    props: {
      constructors: on(n).map(f => f.node.component),
      page: Ze(R)
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
  return (!m.url || e.href !== m.url.href || m.error !== a || o !== void 0 && o !== R.form || d) && (c.props.page = {
    error: a,
    params: t,
    route: {
      id: (s == null ? void 0 : s.id) ?? null
    },
    state: {},
    status: r,
    url: new URL(e),
    form: o ?? null,
    data: d ? l : R.data
  }), c
}
async function He({
  loader: e,
  parent: t,
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
    c = await e();
  return {
    node: c,
    loader: e,
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

function gn(e, t, n) {
  let r = e instanceof Request ? e.url : e;
  const a = new URL(r, n);
  a.origin === n.origin && (r = a.href.slice(n.origin.length));
  const s = ye ? Wt(r, a.href, t) : Gt(r, t);
  return {
    resolved: a,
    promise: s
  }
}

function mn(e, t, n, r, a, s) {
  if (Ge) return !0;
  if (!a) return !1;
  if (a.parent && e || a.route && t || a.url && n) return !0;
  for (const o of a.search_params)
    if (r.has(o)) return !0;
  for (const o of a.params)
    if (s[o] !== m.params[o]) return !0;
  for (const o of a.dependencies)
    if (_e.some(i => i(new URL(o)))) return !0;
  return !1
}

function Je(e, t) {
  return (e == null ? void 0 : e.type) === "data" ? e : (e == null ? void 0 : e.type) === "skip" ? t ?? null : null
}

function _n(e, t) {
  if (!e) return new Set(t.searchParams.keys());
  const n = new Set([...e.searchParams.keys(), ...t.searchParams.keys()]);
  for (const r of n) {
    const a = e.searchParams.getAll(r),
      s = t.searchParams.getAll(r);
    a.every(o => s.includes(o)) && s.every(o => a.includes(o)) && n.delete(r)
  }
  return n
}

function wn({
  error: e,
  url: t,
  route: n,
  params: r
}) {
  return {
    type: "loaded",
    state: {
      error: e,
      url: t,
      route: n,
      params: r,
      branch: []
    },
    props: {
      page: Ze(R),
      constructors: []
    }
  }
}
async function $t({
  id: e,
  invalidating: t,
  url: n,
  params: r,
  route: a,
  preload: s
}) {
  if ((y == null ? void 0 : y.id) === e) return ve.delete(y.token), y.promise;
  const {
    errors: o,
    layouts: i,
    leaf: c
  } = a, l = [...i, c];
  o.forEach(g => g == null ? void 0 : g().catch(() => {})), l.forEach(g => g == null ? void 0 : g[1]().catch(() => {}));
  const d = m.url ? e !== ke(m.url) : !1,
    u = m.route ? a.id !== m.route.id : !1,
    v = _n(m.url, n);
  let f = !1;
  const h = l.map(async (g, p) => {
    var P;
    if (!g) return;
    const k = m.branch[p];
    return g[1] === (k == null ? void 0 : k.loader) && !mn(f, u, d, v, (P = k.universal) == null ? void 0 : P.uses, r) ? k : (f = !0, He({
      loader: g[1],
      url: n,
      params: r,
      route: a,
      parent: async () => {
        var de;
        const O = {};
        for (let B = 0; B < p; B += 1) Object.assign(O, (de = await h[B]) == null ? void 0 : de.data);
        return O
      },
      server_data_node: Je(g[0] ? {
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
      if (p instanceof qe) return {
        type: "redirect",
        location: p.location
      };
      if (ve.has(s)) return wn({
        error: await te(p, {
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
      let k = Me(p),
        x;
      if (p instanceof De) x = p.body;
      else {
        if (await N.updated.check()) return await St(), await Z(n);
        x = await te(p, {
          params: r,
          url: n,
          route: {
            id: a.id
          }
        })
      }
      const P = await yn(g, _, o);
      return P ? be({
        url: n,
        params: r,
        branch: _.slice(0, P.idx).concat(P.node),
        status: k,
        error: x,
        route: a
      }) : await jt(n, {
        id: a.id
      }, x, k)
    } else _.push(void 0);
  return be({
    url: n,
    params: r,
    branch: _,
    status: 200,
    error: null,
    route: a,
    form: t ? void 0 : null
  })
}
async function yn(e, t, n) {
  for (; e--;)
    if (n[e]) {
      let r = e;
      for (; !t[r];) r -= 1;
      try {
        return {
          idx: r + 1,
          node: {
            node: await n[e](),
            loader: n[e],
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
async function Xe({
  status: e,
  error: t,
  url: n,
  route: r
}) {
  const a = {};
  let s = null;
  try {
    const o = await He({
        loader: je,
        url: n,
        params: a,
        route: r,
        parent: () => Promise.resolve({}),
        server_data_node: Je(s)
      }),
      i = {
        node: await me(),
        loader: me,
        universal: null,
        server: null,
        data: null
      };
    return be({
      url: n,
      params: a,
      branch: [o, i],
      status: e,
      error: t,
      route: null
    })
  } catch (o) {
    if (o instanceof qe) return Tt(new URL(o.location, location.href), {}, 0);
    throw o
  }
}
async function vn(e) {
  const t = e.href;
  if (he.has(t)) return he.get(t);
  let n;
  try {
    const r = (async () => {
      let a = await b.hooks.reroute({
        url: new URL(e),
        fetch: async (s, o) => gn(s, o, e).promise
      }) ?? e;
      if (typeof a == "string") {
        const s = new URL(e);
        b.hash ? s.hash = a : s.pathname = a, a = s
      }
      return a
    })();
    he.set(t, r), n = await r
  } catch {
    he.delete(t);
    return
  }
  return n
}
async function xe(e, t) {
  if (e && !Re(e, A, b.hash)) {
    const n = await vn(e);
    if (!n) return;
    const r = bn(n);
    for (const a of ze) {
      const s = a.exec(r);
      if (s) return {
        id: ke(e),
        invalidating: t,
        route: a,
        params: Mt(s),
        url: e
      }
    }
  }
}

function bn(e) {
  return Kt(b.hash ? e.hash.replace(/^#/, "").replace(/[?#].+/, "") : e.pathname.slice(A.length)) || "/"
}

function ke(e) {
  return (b.hash ? e.hash.replace(/^#/, "") : e.pathname) + e.search
}

function Ot({
  url: e,
  type: t,
  intent: n,
  delta: r,
  event: a
}) {
  let s = !1;
  const o = Qe(m, n, e, t);
  r !== void 0 && (o.navigation.delta = r), a !== void 0 && (o.navigation.event = a);
  const i = {
    ...o.navigation,
    cancel: () => {
      s = !0, o.reject(new Error("navigation cancelled"))
    }
  };
  return ee || Fe.forEach(c => c(i)), s ? null : o
}
async function F({
  type: e,
  url: t,
  popped: n,
  keepfocus: r,
  noscroll: a,
  replace_state: s,
  state: o = {},
  redirect_count: i = 0,
  nav_token: c = {},
  accept: l = st,
  block: d = st,
  event: u
}) {
  var B;
  const v = q;
  q = c;
  const f = await xe(t, !1),
    h = e === "enter" ? Qe(m, f, t, e) : Ot({
      url: t,
      type: e,
      delta: n == null ? void 0 : n.delta,
      intent: f,
      event: u
    });
  if (!h) {
    d(), q === c && (q = v);
    return
  }
  const _ = E,
    g = L;
  l(), ee = !0, ye && h.navigation.type !== "enter" && N.navigating.set(X.current = h.navigation);
  let p = f && await $t(f);
  if (!p) {
    if (Re(t, A, b.hash)) return await Z(t, s);
    p = await jt(t, {
      id: null
    }, await te(new Ve(404, "Not Found", `Not found: ${t.pathname}`), {
      url: t,
      params: {},
      route: {
        id: null
      }
    }), 404, s)
  }
  if (t = (f == null ? void 0 : f.url) || t, q !== c) return h.reject(new Error("navigation aborted")), !1;
  if (p.type === "redirect") {
    if (i < 20) {
      await F({
        type: e,
        url: new URL(p.location, t),
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
    p = await Xe({
      status: 500,
      error: await te(new Error("Redirect loop"), {
        url: t,
        params: {},
        route: {
          id: null
        }
      }),
      url: t,
      route: {
        id: null
      }
    })
  } else p.props.page.status >= 400 && await N.updated.check() && (await St(), await Z(t, s));
  if (hn(), Ye(_), At(g), p.props.page.url.pathname !== t.pathname && (t.pathname = p.props.page.url.pathname), o = n ? n.state : o, !n) {
    const S = s ? 0 : 1,
      K = {
        [z]: E += S,
        [J]: L += S,
        [wt]: o
      };
    (s ? history.replaceState : history.pushState).call(history, K, "", t), s || un(E, L)
  }
  const k = y == null ? void 0 : y.fork;
  y = null, p.props.page.state = o;
  let x;
  if (ye) {
    const S = (await Promise.all(Array.from(dn, C => C(h.navigation)))).filter(C => typeof C == "function");
    if (S.length > 0) {
      let C = function() {
        S.forEach(Le => {
          H.delete(Le)
        })
      };
      S.push(C), S.forEach(Le => {
        H.add(Le)
      })
    }
    m = p.state, p.props.page && (p.props.page.url = t);
    const K = k && await k;
    K ? x = K.commit() : (We.$set(p.props), Et(p.props.page), x = (B = qt) == null ? void 0 : B()), Lt = !0
  } else await It(p, Pe, !1);
  const {
    activeElement: P
  } = document;
  await x, await pe(), await pe();
  let O = n ? n.scroll : a ? Se() : null;
  if (it) {
    const S = t.hash && document.getElementById(Pt(t));
    if (O) scrollTo(O.x, O.y);
    else if (S) {
      S.scrollIntoView();
      const {
        top: K,
        left: C
      } = S.getBoundingClientRect();
      O = {
        x: pageXOffset + C,
        y: pageYOffset + K
      }
    } else scrollTo(0, 0)
  }
  const de = document.activeElement !== P && document.activeElement !== document.body;
  !r && !de && An(t, O), it = !0, p.props.page && Object.assign(R, p.props.page), ee = !1, e === "popstate" && Ut(L), h.fulfil(void 0), H.forEach(S => S(h.navigation)), N.navigating.set(X.current = null)
}
async function jt(e, t, n, r, a) {
  return e.origin === Ee && e.pathname === location.pathname && !xt ? await Xe({
    status: r,
    error: n,
    url: e,
    route: t
  }) : await Z(e, a)
}

function kn() {
  let e, t, n;
  j.addEventListener("mousemove", i => {
    const c = i.target;
    clearTimeout(e), e = setTimeout(() => {
      s(c, D.hover)
    }, 20)
  });

  function r(i) {
    i.defaultPrevented || s(i.composedPath()[0], D.tap)
  }
  j.addEventListener("mousedown", r), j.addEventListener("touchstart", r, {
    passive: !0
  });
  const a = new IntersectionObserver(i => {
    for (const c of i) c.isIntersecting && ($e(new URL(c.target.href)), a.unobserve(c.target))
  }, {
    threshold: 0
  });
  async function s(i, c) {
    const l = vt(i, j),
      d = l === t && c >= n;
    if (!l || d) return;
    const {
      url: u,
      external: v,
      download: f
    } = Oe(l, A, b.hash);
    if (v || f) return;
    const h = ge(l),
      _ = u && ke(m.url) === ke(u);
    if (!(h.reload || _))
      if (c <= h.preload_data) {
        t = l, n = D.tap;
        const g = await xe(u, !1);
        if (!g) return;
        pn(g)
      } else c <= h.preload_code && (t = l, n = c, $e(u))
  }

  function o() {
    a.disconnect();
    for (const i of j.querySelectorAll("a")) {
      const {
        url: c,
        external: l,
        download: d
      } = Oe(i, A, b.hash);
      if (l || d) continue;
      const u = ge(i);
      u.reload || (u.preload_code === D.viewport && a.observe(i), u.preload_code === D.eager && $e(c))
    }
  }
  H.add(o), o()
}

function te(e, t) {
  if (e instanceof De) return e.body;
  const n = Me(e),
    r = sn(e);
  return b.hooks.handleError({
    error: e,
    event: t,
    status: n,
    message: r
  }) ?? {
    message: r
  }
}

function En(e, t) {
  ln(() => (e.add(t), () => {
    e.delete(t)
  }))
}

function qn(e) {
  En(Fe, e)
}

function Vn(e, t = {}) {
  return e = new URL(Ke(e)), e.origin !== Ee ? Promise.reject(new Error("goto: invalid URL")) : Tt(e, t, 0)
}

function Sn(e) {
  if (typeof e == "function") _e.push(e);
  else {
    const {
      href: t
    } = new URL(e, location.href);
    _e.push(n => n.href === t)
  }
}

function Rn() {
  var t;
  history.scrollRestoration = "manual", addEventListener("beforeunload", n => {
    let r = !1;
    if (lt(), !ee) {
      const a = Qe(m, void 0, null, "leave"),
        s = {
          ...a.navigation,
          cancel: () => {
            r = !0, a.reject(new Error("navigation cancelled"))
          }
        };
      Fe.forEach(o => o(s))
    }
    r ? (n.preventDefault(), n.returnValue = "") : history.scrollRestoration = "auto"
  }), addEventListener("visibilitychange", () => {
    document.visibilityState === "hidden" && lt()
  }), (t = navigator.connection) != null && t.saveData || kn(), j.addEventListener("click", async n => {
    if (n.button || n.which !== 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey || n.defaultPrevented) return;
    const r = vt(n.composedPath()[0], j);
    if (!r) return;
    const {
      url: a,
      external: s,
      target: o,
      download: i
    } = Oe(r, A, b.hash);
    if (!a) return;
    if (o === "_parent" || o === "_top") {
      if (window.parent !== window) return
    } else if (o && o !== "_self") return;
    const c = ge(r);
    if (!(r instanceof SVGAElement) && a.protocol !== location.protocol && !(a.protocol === "https:" || a.protocol === "http:") || i) return;
    const [d, u] = (b.hash ? a.hash.replace(/^#/, "") : a.href).split("#"), v = d === Ue(location);
    if (s || c.reload && (!v || !u)) {
      Ot({
        url: a,
        type: "link",
        event: n
      }) ? ee = !0 : n.preventDefault();
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
      if (G = !0, Ye(E), e(a), !c.replace_state) return;
      G = !1
    }
    n.preventDefault(), await new Promise(f => {
      requestAnimationFrame(() => {
        setTimeout(f, 0)
      }), setTimeout(f, 100)
    }), await F({
      type: "link",
      url: a,
      keepfocus: c.keepfocus,
      noscroll: c.noscroll,
      replace_state: c.replace_state ?? a.href === location.href,
      event: n
    })
  }), j.addEventListener("submit", n => {
    if (n.defaultPrevented) return;
    const r = HTMLFormElement.prototype.cloneNode.call(n.target),
      a = n.submitter;
    if (((a == null ? void 0 : a.formTarget) || r.target) === "_blank" || ((a == null ? void 0 : a.formMethod) || r.method) !== "get") return;
    const i = new URL((a == null ? void 0 : a.hasAttribute("formaction")) && (a == null ? void 0 : a.formAction) || r.action);
    if (Re(i, A, !1)) return;
    const c = n.target,
      l = ge(c);
    if (l.reload) return;
    n.preventDefault(), n.stopPropagation();
    const d = new FormData(c, a);
    i.search = new URLSearchParams(d).toString(), F({
      type: "form",
      url: i,
      keepfocus: l.keepfocus,
      noscroll: l.noscroll,
      replace_state: l.replace_state ?? i.href === location.href,
      event: n
    })
  }), addEventListener("popstate", async n => {
    var r;
    if (!Ce) {
      if ((r = n.state) != null && r[z]) {
        const a = n.state[z];
        if (q = {}, a === E) return;
        const s = V[a],
          o = n.state[wt] ?? {},
          i = new URL(n.state[nn] ?? location.href),
          c = n.state[J],
          l = m.url ? Ue(location) === Ue(m.url) : !1;
        if (c === L && (Lt || l)) {
          o !== R.state && (R.state = o), e(i), V[E] = Se(), s && scrollTo(s.x, s.y), E = a;
          return
        }
        const u = a - E;
        await F({
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
          nav_token: q,
          event: n
        })
      } else if (!G) {
        const a = new URL(location.href);
        e(a), b.hash && location.reload()
      }
    }
  }), addEventListener("hashchange", () => {
    G && (G = !1, history.replaceState({
      ...history.state,
      [z]: ++E,
      [J]: L
    }, "", location.href))
  });
  for (const n of document.querySelectorAll("link")) fn.has(n.rel) && (n.href = n.href);
  addEventListener("pageshow", n => {
    n.persisted && N.navigating.set(X.current = null)
  });

  function e(n) {
    m.url = R.url = n, N.page.set(Ze(R)), N.page.notify()
  }
}
async function xn(e, {
  status: t = 200,
  error: n,
  node_ids: r,
  params: a,
  route: s,
  server_route: o,
  data: i,
  form: c
}) {
  xt = !0;
  const l = new URL(location.href);
  let d;
  ({
    params: a = {},
    route: s = {
      id: null
    }
  } = await xe(l, !1) || {}), d = ze.find(({
    id: f
  }) => f === s.id);
  let u, v = !0;
  try {
    const f = r.map(async (_, g) => {
        const p = i[g];
        return p != null && p.uses && (p.uses = Ln(p.uses)), He({
          loader: b.nodes[_],
          url: l,
          params: a,
          route: s,
          parent: async () => {
            const k = {};
            for (let x = 0; x < g; x += 1) Object.assign(k, (await f[x]).data);
            return k
          },
          server_data_node: Je(p)
        })
      }),
      h = await Promise.all(f);
    if (d) {
      const _ = d.layouts;
      for (let g = 0; g < _.length; g++) _[g] || h.splice(g, 0, void 0)
    }
    u = be({
      url: l,
      params: a,
      branch: h,
      status: t,
      error: n,
      form: c,
      route: d ?? null
    })
  } catch (f) {
    if (f instanceof qe) {
      await Z(new URL(f.location, location.href));
      return
    }
    u = await Xe({
      status: Me(f),
      error: await te(f, {
        url: l,
        params: a,
        route: s
      }),
      url: l,
      route: s
    }), e.textContent = "", v = !1
  }
  u.props.page && (u.props.page.state = {}), await It(u, e, v)
}

function Ln(e) {
  return {
    dependencies: new Set((e == null ? void 0 : e.dependencies) ?? []),
    params: new Set((e == null ? void 0 : e.params) ?? []),
    parent: !!(e != null && e.parent),
    route: !!(e != null && e.route),
    url: !!(e != null && e.url),
    search_params: new Set((e == null ? void 0 : e.search_params) ?? [])
  }
}
let Ce = !1;

function An(e, t = null) {
  const n = document.querySelector("[autofocus]");
  if (n) n.focus();
  else {
    const r = Pt(e);
    if (r && document.getElementById(r)) {
      const {
        x: s,
        y: o
      } = t ?? Se();
      setTimeout(() => {
        const i = history.state;
        Ce = !0, location.replace(`#${r}`), b.hash && location.replace(e.hash), history.replaceState(i, "", e.hash), scrollTo(s, o), Ce = !1
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

function Qe(e, t, n, r) {
  var c, l;
  let a, s;
  const o = new Promise((d, u) => {
    a = d, s = u
  });
  return o.catch(() => {}), {
    navigation: {
      from: {
        params: e.params,
        route: {
          id: ((c = e.route) == null ? void 0 : c.id) ?? null
        },
        url: e.url
      },
      to: n && {
        params: (t == null ? void 0 : t.params) ?? null,
        route: {
          id: ((l = t == null ? void 0 : t.route) == null ? void 0 : l.id) ?? null
        },
        url: n
      },
      willUnload: !t,
      type: r,
      complete: o
    },
    fulfil: a,
    reject: s
  }
}

function Ze(e) {
  return {
    data: e.data,
    error: e.error,
    form: e.form,
    params: e.params,
    route: e.route,
    state: e.state,
    status: e.status,
    url: e.url
  }
}

function Un(e) {
  const t = new URL(e);
  return t.hash = decodeURIComponent(e.hash), t
}

function Pt(e) {
  let t;
  if (b.hash) {
    const [, , n] = e.hash.split("#", 3);
    t = n ?? ""
  } else t = e.hash.slice(1);
  return decodeURIComponent(t)
}
export {
  Dn as a, qn as b, Vn as g, jn as l, R as p, N as s
};
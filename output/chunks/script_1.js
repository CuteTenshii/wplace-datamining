var le = t => {
  throw TypeError(t)
};
var Ge = (t, e, n) => e.has(t) || le("Cannot " + n);
var y = (t, e, n) => (Ge(t, e, "read from private field"), n ? n.call(t) : e.get(t)),
  A = (t, e, n) => e.has(t) ? le("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n);
import {
  o as fe,
  s as He
} from "./DMTZSlMJ.js";
import {
  aI as Dt,
  bI as ze,
  e as T,
  i as $,
  h as I,
  H as bt,
  G as Fe,
  B as Je
} from "./CNUayq5u.js";
const G = [];

function Ft(t, e = Dt) {
  let n = null;
  const a = new Set;

  function r(s) {
    if (ze(t, s) && (t = s, n)) {
      const c = !G.length;
      for (const l of a) l[1](), G.push(l, t);
      if (c) {
        for (let l = 0; l < G.length; l += 2) G[l][0](G[l + 1]);
        G.length = 0
      }
    }
  }

  function i(s) {
    r(s(t))
  }

  function o(s, c = Dt) {
    const l = [s, c];
    return a.add(l), a.size === 1 && (n = e(r, i) || Dt), s(t), () => {
      a.delete(l), a.size === 0 && n && (n(), n = null)
    }
  }
  return {
    set: r,
    update: i,
    subscribe: o
  }
}
class Jt {
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
class Yt {
  constructor(e, n) {
    try {
      new Headers({
        location: n
      })
    } catch {
      throw new Error(`Invalid redirect location ${JSON.stringify(n)}: this string contains characters that cannot be used in HTTP headers`)
    }
    this.status = e, this.location = n
  }
}
class Xt extends Error {
  constructor(e, n, a) {
    super(a), this.status = e, this.text = n
  }
}
new URL("sveltekit-internal://");

function Ye(t, e) {
  return t === "/" || e === "ignore" ? t : e === "never" ? t.endsWith("/") ? t.slice(0, -1) : t : e === "always" && !t.endsWith("/") ? t + "/" : t
}

function Xe(t) {
  return t.split("%25").map(decodeURI).join("%25")
}

function Qe(t) {
  for (const e in t) t[e] = decodeURIComponent(t[e]);
  return t
}

function Vt({
  href: t
}) {
  return t.split("#")[0]
}

function j() {}

function Ze(...t) {
  let e = 5381;
  for (const n of t)
    if (typeof n == "string") {
      let a = n.length;
      for (; a;) e = e * 33 ^ n.charCodeAt(--a)
    } else if (ArrayBuffer.isView(n)) {
    const a = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
    let r = a.length;
    for (; r;) e = e * 33 ^ a[--r]
  } else throw new TypeError("value must be a string or TypedArray");
  return (e >>> 0).toString(36)
}
new TextEncoder;

function tn(t) {
  const e = atob(t),
    n = new Uint8Array(e.length);
  for (let a = 0; a < e.length; a++) n[a] = e.charCodeAt(a);
  return n
}
const en = window.fetch;
window.fetch = (t, e) => ((t instanceof Request ? t.method : (e == null ? void 0 : e.method) || "GET") !== "GET" && Z.delete(Qt(t)), en(t, e));
const Z = new Map;

function nn(t, e) {
  const n = Qt(t, e),
    a = document.querySelector(n);
  if (a != null && a.textContent) {
    a.remove();
    let {
      body: r,
      ...i
    } = JSON.parse(a.textContent);
    const o = a.getAttribute("data-ttl");
    return o && Z.set(n, {
      body: r,
      init: i,
      ttl: 1e3 * Number(o)
    }), a.getAttribute("data-b64") !== null && (r = tn(r)), Promise.resolve(new Response(r, i))
  }
  return window.fetch(t, e)
}

function rn(t, e, n) {
  if (Z.size > 0) {
    const a = Qt(t, n),
      r = Z.get(a);
    if (r) {
      if (performance.now() < r.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(n == null ? void 0 : n.cache)) return new Response(r.body, r.init);
      Z.delete(a)
    }
  }
  return window.fetch(e, n)
}

function Qt(t, e) {
  let a = `script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;
  if (e != null && e.headers || e != null && e.body) {
    const r = [];
    e.headers && r.push([...new Headers(e.headers)].join(",")), e.body && (typeof e.body == "string" || ArrayBuffer.isView(e.body)) && r.push(e.body), a += `[data-hash="${Ze(...r)}"]`
  }
  return a
}
const an = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/,
  on = /^\/\((?:[^)]+)\)$/;

function sn(t) {
  const e = [];
  return {
    pattern: t === "/" || on.test(t) ? /^\/$/ : new RegExp(`^${Ee(t).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return e.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/([^]*))?";const i=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(i)return e.push({name:i[1],matcher:i[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const o=a.split(/\[(.+?)\](?!\])/);return"/"+o.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Bt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Bt(String.fromCharCode(...c.slice(2).split("-").map(m=>parseInt(m,16))));const f=an.exec(c),[,h,_,u,d]=f;return e.push({name:u,matcher:d,optional:!!h,rest:!!_,chained:_?l===1&&o[0]==="":!1}),_?"([^]*?)":h?"([^/]*)?":"([^/]+?)"}return Bt(c)}).join("")}).join("")}/?$`),
    params: e
  }
}

function cn(t) {
  return t !== "" && !/^\([^)]+\)$/.test(t)
}

function Ee(t) {
  return t.slice(1).split("/").filter(cn)
}

function ln(t, e, n) {
  const a = {},
    r = t.slice(1),
    i = r.filter(s => s !== void 0);
  let o = 0;
  for (let s = 0; s < e.length; s += 1) {
    const c = e[s];
    let l = r[s - o];
    if (c.chained && c.rest && o && (l = r.slice(s - o, s + 1).filter(f => f).join("/"), o = 0), l === void 0)
      if (c.rest) l = "";
      else continue;
    if (!c.matcher || n[c.matcher](l)) {
      a[c.name] = l;
      const f = e[s + 1],
        h = r[s + 1];
      f && !f.rest && f.optional && h && c.chained && (o = 0), !f && !h && Object.keys(a).length === i.length && (o = 0);
      continue
    }
    if (c.optional && c.chained) {
      o++;
      continue
    }
    return
  }
  if (!o) return a
}

function Bt(t) {
  return t.normalize().replace(/[[\]]/g, "\\$&").replace(/%/g, "%25").replace(/\//g, "%2[Ff]").replace(/\?/g, "%3[Ff]").replace(/#/g, "%23").replace(/[.*+?^${}()|\\]/g, "\\$&")
}
const fn = /\[(\[)?(\.\.\.)?(\w+?)(?:=(\w+))?\]\]?/g;

function Mn(t, e) {
  const n = Ee(t),
    a = t != "/" && t.endsWith("/");
  return "/" + n.map(r => r.replace(fn, (i, o, s, c) => {
    const l = e[c];
    if (!l) {
      if (o || s && l !== void 0) return "";
      throw new Error(`Missing parameter '${c}' in route ${t}`)
    }
    if (l.startsWith("/") || l.endsWith("/")) throw new Error(`Parameter '${c}' in route ${t} cannot start or end with a slash -- this would cause an invalid route like foo//bar`);
    return l
  })).filter(Boolean).join("/") + (a ? "/" : "")
}

function un({
  nodes: t,
  server_loads: e,
  dictionary: n,
  matchers: a
}) {
  const r = new Set(e);
  return Object.entries(n).map(([s, [c, l, f]]) => {
    const {
      pattern: h,
      params: _
    } = sn(s), u = {
      id: s,
      exec: d => {
        const m = h.exec(d);
        if (m) return ln(m, _, a)
      },
      errors: [1, ...f || []].map(d => t[d]),
      layouts: [0, ...l || []].map(o),
      leaf: i(c)
    };
    return u.errors.length = u.layouts.length = Math.max(u.errors.length, u.layouts.length), u
  });

  function i(s) {
    const c = s < 0;
    return c && (s = ~s), [c, t[s]]
  }

  function o(s) {
    return s === void 0 ? s : [r.has(s), t[s]]
  }
}

function Re(t, e = JSON.parse) {
  try {
    return e(sessionStorage[t])
  } catch {}
}

function ue(t, e, n = JSON.stringify) {
  const a = n(e);
  try {
    sessionStorage[t] = a
  } catch {}
}
var ve;
const U = ((ve = globalThis.__sveltekit_1yxyw43) == null ? void 0 : ve.base) ?? "";
var ye;
const dn = ((ye = globalThis.__sveltekit_1yxyw43) == null ? void 0 : ye.assets) ?? U ?? "",
  hn = "1782328666252",
  xe = "sveltekit:snapshot",
  Le = "sveltekit:scroll",
  $t = "sveltekit:states",
  Zt = "sveltekit:pageurl",
  N = "sveltekit:history",
  M = "sveltekit:navigation",
  B = {
    tap: 1,
    hover: 2,
    viewport: 3,
    eager: 4,
    off: -1,
    false: -1
  },
  It = location.origin;

function mt(t) {
  if (t instanceof URL) return t;
  let e = document.baseURI;
  if (!e) {
    const n = document.getElementsByTagName("base");
    e = n.length ? n[0].href : document.URL
  }
  return new URL(t, e)
}

function W() {
  return {
    x: pageXOffset,
    y: pageYOffset
  }
}

function H(t, e) {
  return t.getAttribute(`data-sveltekit-${e}`)
}
const de = {
  ...B,
  "": B.hover
};

function Ue(t) {
  let e = t.assignedSlot ?? t.parentNode;
  return (e == null ? void 0 : e.nodeType) === 11 && (e = e.host), e
}

function Ae(t, e) {
  for (; t && t !== e;) {
    if (t.nodeName.toUpperCase() === "A" && t.hasAttribute("href")) return t;
    t = Ue(t)
  }
}

function Kt(t, e, n) {
  let a;
  try {
    if (a = new URL(t instanceof SVGAElement ? t.href.baseVal : t.href, document.baseURI), n && a.hash.match(/^#[^/]/)) {
      const s = location.hash.split("#")[1] || "/";
      a.hash = `#${s}${a.hash}`
    }
  } catch {}
  const r = t instanceof SVGAElement ? t.target.baseVal : t.target,
    i = !a || !!r || Pt(a, e, n) || (t.getAttribute("rel") || "").split(/\s+/).includes("external"),
    o = (a == null ? void 0 : a.origin) === It && t.hasAttribute("download");
  return {
    url: a,
    external: i,
    target: r,
    download: o
  }
}

function kt(t) {
  let e = null,
    n = null,
    a = null,
    r = null,
    i = null,
    o = null,
    s = t;
  for (; s && s !== document.documentElement;) a === null && (a = H(s, "preload-code")), r === null && (r = H(s, "preload-data")), e === null && (e = H(s, "keepfocus")), n === null && (n = H(s, "noscroll")), i === null && (i = H(s, "reload")), o === null && (o = H(s, "replacestate")), s = Ue(s);

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
    preload_code: de[a ?? "off"],
    preload_data: de[r ?? "off"],
    keepfocus: c(e),
    noscroll: c(n),
    reload: c(i),
    replace_state: c(o)
  }
}

function he(t) {
  const e = Ft(t);
  let n = !0;

  function a() {
    n = !0, e.update(o => o)
  }

  function r(o) {
    n = !1, e.set(o)
  }

  function i(o) {
    let s;
    return e.subscribe(c => {
      (s === void 0 || n && c !== s) && o(s = c)
    })
  }
  return {
    notify: a,
    set: r,
    subscribe: i
  }
}
const Te = {
  v: j
};

function pn() {
  const {
    set: t,
    subscribe: e
  } = Ft(!1);
  let n;
  async function a() {
    clearTimeout(n);
    try {
      const r = await fetch(`${dn}/_app/version.json`, {
        headers: {
          pragma: "no-cache",
          "cache-control": "no-cache"
        }
      });
      if (!r.ok) return !1;
      const o = (await r.json()).version !== hn;
      return o && (t(!0), Te.v(), clearTimeout(n)), o
    } catch {
      return !1
    }
  }
  return {
    subscribe: e,
    check: a
  }
}

function Pt(t, e, n) {
  return t.origin !== It || !t.pathname.startsWith(e) ? !0 : n ? t.pathname !== location.pathname : !1
}

function Wn(t) {}
const $e = new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...$e];
const gn = new Set([...$e]);
[...gn];

function mn(t) {
  return t.filter(e => e != null)
}

function vt(t, e) {
  return t + "/" + e
}

function te(t) {
  return t instanceof Jt || t instanceof Xt ? t.status : 500
}

function _n(t) {
  return t instanceof Xt ? t.text : "Internal Error"
}
let S, et, Mt;
const wn = fe.toString().includes("$$") || /function \w+\(\) \{\}/.test(fe.toString()),
  pe = "a:";
var st, it, ct, lt, ft, ut, dt, ht, be, pt, ke, gt, Se;
wn ? (S = {
  data: {},
  form: null,
  error: null,
  params: {},
  route: {
    id: null
  },
  state: {},
  status: -1,
  url: new URL(pe)
}, et = {
  current: null
}, Mt = {
  current: !1
}) : (S = new(be = class {
  constructor() {
    A(this, st, T({}));
    A(this, it, T(null));
    A(this, ct, T(null));
    A(this, lt, T({}));
    A(this, ft, T({
      id: null
    }));
    A(this, ut, T({}));
    A(this, dt, T(-1));
    A(this, ht, T(new URL(pe)))
  }
  get data() {
    return $(y(this, st))
  }
  set data(e) {
    I(y(this, st), e)
  }
  get form() {
    return $(y(this, it))
  }
  set form(e) {
    I(y(this, it), e)
  }
  get error() {
    return $(y(this, ct))
  }
  set error(e) {
    I(y(this, ct), e)
  }
  get params() {
    return $(y(this, lt))
  }
  set params(e) {
    I(y(this, lt), e)
  }
  get route() {
    return $(y(this, ft))
  }
  set route(e) {
    I(y(this, ft), e)
  }
  get state() {
    return $(y(this, ut))
  }
  set state(e) {
    I(y(this, ut), e)
  }
  get status() {
    return $(y(this, dt))
  }
  set status(e) {
    I(y(this, dt), e)
  }
  get url() {
    return $(y(this, ht))
  }
  set url(e) {
    I(y(this, ht), e)
  }
}, st = new WeakMap, it = new WeakMap, ct = new WeakMap, lt = new WeakMap, ft = new WeakMap, ut = new WeakMap, dt = new WeakMap, ht = new WeakMap, be), et = new(ke = class {
  constructor() {
    A(this, pt, T(null))
  }
  get current() {
    return $(y(this, pt))
  }
  set current(e) {
    I(y(this, pt), e)
  }
}, pt = new WeakMap, ke), Mt = new(Se = class {
  constructor() {
    A(this, gt, T(!1))
  }
  get current() {
    return $(y(this, gt))
  }
  set current(e) {
    I(y(this, gt), e)
  }
}, gt = new WeakMap, Se), Te.v = () => Mt.current = !0);

function Ie(t) {
  Object.assign(S, t)
}
const {
  onMount: vn
} = He, Pe = Je ?? (t => t()), yn = new Set(["icon", "shortcut icon", "apple-touch-icon"]);
let X = null;
const D = Re(Le) ?? {},
  nt = Re(xe) ?? {},
  q = {
    url: he({}),
    page: he({}),
    navigating: Ft(null),
    updated: pn()
  };

function Ot(t) {
  D[t] = W()
}

function Oe(t, e) {
  let n = t + 1;
  for (; D[n];) delete D[n], n += 1;
  for (n = e + 1; nt[n];) delete nt[n], n += 1
}

function rt(t, e = !1) {
  return e ? location.replace(t.href) : location.href = t.href, new Promise(j)
}
async function Ce() {
  if ("serviceWorker" in navigator) {
    const t = await navigator.serviceWorker.getRegistration(U || "/");
    t && await t.update()
  }
}
let ee, Gt, St, P, Ht, E;
const Et = [],
  Rt = [];
let v = null;

function xt() {
  var t;
  (t = v == null ? void 0 : v.fork) == null || t.then(e => e == null ? void 0 : e.discard()), v = null, z = {
    element: void 0,
    href: void 0
  }
}
const yt = new Map,
  ne = new Set,
  bn = new Set,
  tt = new Set;
let w = {
    branch: [],
    error: null,
    url: null
  },
  je = !1,
  Lt = !1,
  ge = !0,
  at = !1,
  Q = !1,
  re = !1,
  ae = !1,
  Ct, b, R, C;
const Ut = new Set,
  me = new Map,
  _e = new Map;
async function zn(t, e, n) {
  var i, o, s, c;
  if (globalThis.__sveltekit_1yxyw43.data) {
    const {
      q: l = {},
      p: f = {},
      l: h = {},
      f: _ = {}
    } = globalThis.__sveltekit_1yxyw43.data;
    for (const u in l) l[u];
    for (const u in h) h[u];
    for (const u in _) _[u];
    for (const u in f) f[u]
  }
  document.URL !== location.href && (location.href = location.href), E = t, await ((o = (i = t.hooks).init) == null ? void 0 : o.call(i)), ee = un(t), P = document.documentElement, Ht = e, Gt = t.nodes[0], St = t.nodes[1], Gt(), St(), b = (s = history.state) == null ? void 0 : s[N], R = (c = history.state) == null ? void 0 : c[M], b || (b = R = Date.now(), history.replaceState({
    ...history.state,
    [N]: b,
    [M]: R
  }, ""));
  const a = D[b];

  function r() {
    a && (history.scrollRestoration = "manual", scrollTo(a.x, a.y))
  }
  n ? (r(), await Cn(Ht, n)) : (await F({
    type: "enter",
    url: mt(E.hash ? qn(new URL(location.href)) : location.href),
    replace_state: !0
  }), r()), On()
}

function kn() {
  Et.length = 0, ae = !1
}

function Ne(t) {
  Rt.some(e => e == null ? void 0 : e.snapshot) && (nt[t] = Rt.map(e => {
    var n;
    return (n = e == null ? void 0 : e.snapshot) == null ? void 0 : n.capture()
  }))
}

function qe(t) {
  var e;
  (e = nt[t]) == null || e.forEach((n, a) => {
    var r, i;
    (i = (r = Rt[a]) == null ? void 0 : r.snapshot) == null || i.restore(n)
  })
}

function we() {
  Ot(b), ue(Le, D), Ne(R), ue(xe, nt)
}
async function De(t, e, n, a) {
  let r, i;
  e.invalidateAll && xt(), await F({
    type: "goto",
    url: mt(t),
    keepfocus: e.keepFocus,
    noscroll: e.noScroll,
    replace_state: e.replaceState,
    state: e.state,
    redirect_count: n,
    nav_token: a,
    accept: () => {
      var o;
      if (e.invalidateAll) {
        ae = !0, r = new Set;
        for (const [s, c] of me)
          for (const [l, f] of c)(o = f.resource) == null || o.reset(), r.add(vt(s, l));
        i = new Set;
        for (const [s, c] of _e)
          for (const l of c.keys()) i.add(vt(s, l))
      }
      e.invalidate && e.invalidate.forEach(Pn)
    }
  }), e.invalidateAll && bt().then(bt).then(() => {
    for (const [o, s] of me)
      for (const [c, {
          resource: l
        }] of s) r != null && r.has(vt(o, c)) && l.start();
    for (const [o, s] of _e)
      for (const [c, {
          resource: l
        }] of s) i != null && i.has(vt(o, c)) && l.reconnect()
  })
}
async function Sn(t) {
  if (t.id !== (v == null ? void 0 : v.id)) {
    xt();
    const e = {};
    Ut.add(e), v = {
      id: t.id,
      token: e,
      promise: Be({
        ...t,
        preload: e
      }).then(n => (Ut.delete(e), n.type === "loaded" && n.state.error && xt(), n)),
      fork: null
    }
  }
  return v.promise
}
async function Wt(t) {
  var n;
  const e = (n = await jt(t, !1)) == null ? void 0 : n.route;
  e && await Promise.all([...e.layouts, e.leaf].filter(Boolean).map(a => a[1]()))
}
async function Ve(t, e, n) {
  var r;
  const a = {
    params: w.params,
    route: {
      id: ((r = w.route) == null ? void 0 : r.id) ?? null
    },
    url: new URL(location.href)
  };
  if (w = {
      ...t.state,
      nav: a
    }, Ie(t.props.page), Ct = new E.root({
      target: e,
      props: {
        ...t.props,
        stores: q,
        components: Rt
      },
      hydrate: n,
      sync: !1,
      transformError: void 0
    }), await Promise.resolve(), qe(R), n) {
    const i = {
      from: null,
      to: {
        ...a,
        scroll: D[b] ?? W()
      },
      willUnload: !1,
      type: "enter",
      complete: Promise.resolve()
    };
    tt.forEach(o => o(i))
  }
  Lt = !0
}
async function At({
  url: t,
  params: e,
  branch: n,
  errors: a,
  status: r,
  error: i,
  route: o,
  form: s
}) {
  let c = "never";
  if (U && (t.pathname === U || t.pathname === U + "/")) c = "always";
  else
    for (const d of n)(d == null ? void 0 : d.slash) !== void 0 && (c = d.slash);
  t.pathname = Ye(t.pathname, c), t.search = t.search;
  const l = {
    type: "loaded",
    state: {
      url: t,
      params: e,
      branch: n,
      error: i,
      route: o
    },
    props: {
      constructors: mn(n).map(d => d.node.component),
      page: _t(S)
    }
  };
  s !== void 0 && (l.props.form = s);
  let f = {},
    h = !S,
    _ = 0;
  for (let d = 0; d < Math.max(n.length, w.branch.length); d += 1) {
    const m = n[d],
      g = w.branch[d];
    (m == null ? void 0 : m.data) !== (g == null ? void 0 : g.data) && (h = !0), m && (f = {
      ...f,
      ...m.data
    }, h && (l.props[`data_${_}`] = f), _ += 1)
  }
  return (!w.url || t.href !== w.url.href || w.error !== i || s !== void 0 && s !== S.form || h) && (l.props.page = {
    error: i,
    params: e,
    route: {
      id: (o == null ? void 0 : o.id) ?? null
    },
    state: {},
    status: r,
    url: new URL(t),
    form: s ?? null,
    data: h ? f : S.data
  }), l
}
async function oe({
  loader: t,
  parent: e,
  url: n,
  params: a,
  route: r,
  server_data_node: i
}) {
  var l, f;
  let o = null;
  const s = {
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
    server: i,
    universal: (l = c.universal) != null && l.load ? {
      type: "data",
      data: o,
      uses: s
    } : null,
    data: o ?? (i == null ? void 0 : i.data) ?? null,
    slash: ((f = c.universal) == null ? void 0 : f.trailingSlash) ?? (i == null ? void 0 : i.slash)
  }
}

function En(t, e, n) {
  let a = t instanceof Request ? t.url : t;
  const r = new URL(a, n);
  r.origin === n.origin && (a = r.href.slice(n.origin.length));
  const i = Lt ? rn(a, r.href, e) : nn(a, e);
  return {
    resolved: r,
    promise: i
  }
}

function Rn(t, e, n, a, r, i) {
  if (ae) return !0;
  if (!r) return !1;
  if (r.parent && t || r.route && e || r.url && n) return !0;
  for (const o of r.search_params)
    if (a.has(o)) return !0;
  for (const o of r.params)
    if (i[o] !== w.params[o]) return !0;
  for (const o of r.dependencies)
    if (Et.some(s => s(new URL(o)))) return !0;
  return !1
}

function se(t, e) {
  return (t == null ? void 0 : t.type) === "data" ? t : (t == null ? void 0 : t.type) === "skip" ? e ?? null : null
}

function xn(t, e) {
  if (!t) return new Set(e.searchParams.keys());
  const n = new Set([...t.searchParams.keys(), ...e.searchParams.keys()]);
  for (const a of n) {
    const r = t.searchParams.getAll(a),
      i = e.searchParams.getAll(a);
    r.every(o => i.includes(o)) && i.every(o => r.includes(o)) && n.delete(a)
  }
  return n
}

function Ln({
  error: t,
  url: e,
  route: n,
  params: a
}) {
  return {
    type: "loaded",
    state: {
      error: t,
      url: e,
      route: n,
      params: a,
      branch: []
    },
    props: {
      page: _t(S),
      constructors: []
    }
  }
}
async function Be({
  id: t,
  invalidating: e,
  url: n,
  params: a,
  route: r,
  preload: i
}) {
  if ((v == null ? void 0 : v.id) === t) return Ut.delete(v.token), v.promise;
  const {
    errors: o,
    layouts: s,
    leaf: c
  } = r, l = [...s, c];
  o.forEach(g => g == null ? void 0 : g().catch(j)), l.forEach(g => g == null ? void 0 : g[1]().catch(j));
  const f = w.url ? t !== Tt(w.url) : !1,
    h = w.route ? r.id !== w.route.id : !1,
    _ = xn(w.url, n);
  let u = !1;
  const d = l.map(async (g, p) => {
    var O;
    if (!g) return;
    const k = w.branch[p];
    return g[1] === (k == null ? void 0 : k.loader) && !Rn(u, h, f, _, (O = k.universal) == null ? void 0 : O.uses, a) ? k : (u = !0, oe({
      loader: g[1],
      url: n,
      params: a,
      route: r,
      parent: async () => {
        var wt;
        const V = {};
        for (let K = 0; K < p; K += 1) Object.assign(V, (wt = await d[K]) == null ? void 0 : wt.data);
        return V
      },
      server_data_node: se(g[0] ? {
        type: "skip"
      } : null, g[0] ? k == null ? void 0 : k.server : void 0)
    }))
  });
  for (const g of d) g.catch(j);
  const m = [];
  for (let g = 0; g < l.length; g += 1)
    if (l[g]) try {
      m.push(await d[g])
    } catch (p) {
      if (p instanceof Yt) return {
        type: "redirect",
        location: p.location
      };
      if (Ut.has(i)) return Ln({
        error: await ot(p, {
          params: a,
          url: n,
          route: {
            id: r.id
          }
        }),
        url: n,
        params: a,
        route: r
      });
      let k = te(p),
        L;
      if (p instanceof Jt) L = p.body;
      else {
        if (await q.updated.check()) return await Ce(), await rt(n);
        L = await ot(p, {
          params: a,
          url: n,
          route: {
            id: r.id
          }
        })
      }
      const O = await Un(g, m, o);
      return O ? At({
        url: n,
        params: a,
        branch: m.slice(0, O.idx).concat(O.node),
        errors: o,
        status: k,
        error: L,
        route: r
      }) : await We(n, {
        id: r.id
      }, L, k)
    } else m.push(void 0);
  return At({
    url: n,
    params: a,
    branch: m,
    errors: o,
    status: 200,
    error: null,
    route: r,
    form: e ? void 0 : null
  })
}
async function Un(t, e, n) {
  for (; t--;)
    if (n[t]) {
      let a = t;
      for (; !e[a];) a -= 1;
      try {
        return {
          idx: a + 1,
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
async function ie({
  status: t,
  error: e,
  url: n,
  route: a
}) {
  const r = {};
  let i = null;
  try {
    const o = await oe({
        loader: Gt,
        url: n,
        params: r,
        route: a,
        parent: () => Promise.resolve({}),
        server_data_node: se(i)
      }),
      s = {
        node: await St(),
        loader: St,
        universal: null,
        server: null,
        data: null
      };
    return At({
      url: n,
      params: r,
      branch: [o, s],
      status: t,
      error: e,
      errors: [],
      route: null
    })
  } catch (o) {
    if (o instanceof Yt) return De(new URL(o.location, location.href), {}, 0);
    throw o
  }
}
async function An(t) {
  const e = t.href;
  if (yt.has(e)) return yt.get(e);
  let n;
  try {
    const a = (async () => {
      let r = await E.hooks.reroute({
        url: new URL(t),
        fetch: async (i, o) => En(i, o, t).promise
      }) ?? t;
      if (typeof r == "string") {
        const i = new URL(t);
        E.hash ? i.hash = r : i.pathname = r, r = i
      }
      return r
    })();
    yt.set(e, a), n = await a
  } catch {
    yt.delete(e);
    return
  }
  return n
}
async function jt(t, e) {
  if (t && !Pt(t, U, E.hash)) {
    const n = await An(t);
    if (!n) return;
    const a = Tn(n);
    for (const r of ee) {
      const i = r.exec(a);
      if (i) return {
        id: Tt(t),
        invalidating: e,
        route: r,
        params: Qe(i),
        url: t
      }
    }
  }
}

function Tn(t) {
  return Xe(E.hash ? t.hash.replace(/^#/, "").replace(/[?#].+/, "") : t.pathname.slice(U.length)) || "/"
}

function Tt(t) {
  return (E.hash ? t.hash.replace(/^#/, "") : t.pathname) + t.search
}

function Me({
  url: t,
  type: e,
  intent: n,
  delta: a,
  event: r,
  scroll: i
}) {
  let o = !1;
  const s = ce(w, n, t, e, i ?? null);
  a !== void 0 && (s.navigation.delta = a), r !== void 0 && (s.navigation.event = r);
  const c = {
    ...s.navigation,
    cancel: () => {
      o = !0, s.reject(new Error("navigation cancelled"))
    }
  };
  return at || ne.forEach(l => l(c)), o ? null : s
}
async function F({
  type: t,
  url: e,
  popped: n,
  keepfocus: a,
  noscroll: r,
  replace_state: i,
  state: o = {},
  redirect_count: s = 0,
  nav_token: c = {},
  accept: l = j,
  block: f = j,
  event: h
}) {
  var K;
  const _ = C;
  C = c;
  const u = await jt(e, !1),
    d = t === "enter" ? ce(w, u, e, t) : Me({
      url: e,
      type: t,
      delta: n == null ? void 0 : n.delta,
      intent: u,
      scroll: n == null ? void 0 : n.scroll,
      event: h
    });
  if (!d) {
    f(), C === c && (C = _);
    return
  }
  const m = b,
    g = R;
  l(), at = !0, Lt && d.navigation.type !== "enter" && q.navigating.set(et.current = d.navigation);
  let p = u && await Be(u);
  if (!p) {
    if (Pt(e, U, E.hash)) return await rt(e, i);
    p = await We(e, {
      id: null
    }, await ot(new Xt(404, "Not Found", `Not found: ${e.pathname}`), {
      url: e,
      params: {},
      route: {
        id: null
      }
    }), 404, i)
  }
  if (e = (u == null ? void 0 : u.url) || e, C !== c) return d.reject(new Error("navigation aborted")), !1;
  if (p.type === "redirect") {
    if (s < 20) {
      await F({
        type: t,
        url: new URL(p.location, e),
        popped: n,
        keepfocus: a,
        noscroll: r,
        replace_state: i,
        state: o,
        redirect_count: s + 1,
        nav_token: c
      }), d.fulfil(void 0);
      return
    }
    p = await ie({
      status: 500,
      error: await ot(new Error("Redirect loop"), {
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
  } else p.props.page.status >= 400 && await q.updated.check() && (await Ce(), await rt(e, i));
  if (kn(), Ot(m), Ne(g), p.props.page.url.pathname !== e.pathname && (e.pathname = p.props.page.url.pathname), o = n ? n.state : o, !n) {
    const x = i ? 0 : 1,
      J = {
        [N]: b += x,
        [M]: R += x,
        [$t]: o
      };
    (i ? history.replaceState : history.pushState).call(history, J, "", e), i || Oe(b, R)
  }
  const k = u && (v == null ? void 0 : v.id) === u.id ? v.fork : null;
  v != null && v.fork && !k ? xt() : (v = null, z = {
    element: void 0,
    href: void 0
  }), p.props.page.state = o;
  let L;
  if (Lt) {
    const x = (await Promise.all(Array.from(bn, Y => Y(d.navigation)))).filter(Y => typeof Y == "function");
    if (x.length > 0) {
      let Y = function() {
        x.forEach(qt => {
          tt.delete(qt)
        })
      };
      x.push(Y), x.forEach(qt => {
        tt.add(qt)
      })
    }
    const J = d.navigation.to;
    w = {
      ...p.state,
      nav: {
        params: J.params,
        route: J.route,
        url: J.url
      }
    }, p.props.page && (p.props.page.url = e);
    const Nt = k && await k;
    Nt ? L = Nt.commit() : (X = null, Ct.$set(p.props), X && Object.assign(p.props.page, X), Ie(p.props.page), L = (K = Fe) == null ? void 0 : K()), re = !0
  } else await Ve(p, Ht, !1);
  const {
    activeElement: O
  } = document;
  if (await L, await bt(), await bt(), C !== c) return d.reject(new Error("navigation aborted")), !1;
  p.props.page && X && Object.assign(p.props.page, X);
  let V = null;
  if (ge) {
    const x = n ? n.scroll : r ? W() : null;
    x ? scrollTo(x.x, x.y) : (V = e.hash && document.getElementById(Ke(e))) ? V.scrollIntoView() : scrollTo(0, 0)
  }
  const wt = document.activeElement !== O && document.activeElement !== document.body;
  !a && !wt && Nn(e, !V), ge = !0, at = !1, t === "popstate" && qe(R), d.fulfil(void 0), d.navigation.to && (d.navigation.to.scroll = W()), tt.forEach(x => x(d.navigation)), q.navigating.set(et.current = null)
}
async function We(t, e, n, a, r) {
  return t.origin === It && t.pathname === location.pathname && !je ? await ie({
    status: a,
    error: n,
    url: t,
    route: e
  }) : await rt(t, r)
}
let z = {
  element: void 0,
  href: void 0
};

function $n() {
  let t, e;
  P.addEventListener("mousemove", o => {
    const s = o.target;
    clearTimeout(t), t = setTimeout(() => {
      r(s, B.hover)
    }, 20)
  });

  function n(o) {
    o.defaultPrevented || r(o.composedPath()[0], B.tap)
  }
  P.addEventListener("mousedown", n), P.addEventListener("touchstart", n, {
    passive: !0
  });
  const a = new IntersectionObserver(o => {
    for (const s of o) s.isIntersecting && (Wt(new URL(s.target.href)), a.unobserve(s.target))
  }, {
    threshold: 0
  });
  async function r(o, s) {
    const c = Ae(o, P),
      l = c === z.element && (c == null ? void 0 : c.href) === z.href && s >= e;
    if (!c || l) return;
    const {
      url: f,
      external: h,
      download: _
    } = Kt(c, U, E.hash);
    if (h || _) return;
    const u = kt(c),
      d = f && Tt(w.url) === Tt(f);
    if (!(u.reload || d))
      if (s <= u.preload_data) {
        z = {
          element: c,
          href: c.href
        }, e = B.tap;
        const m = await jt(f, !1);
        if (!m) return;
        Sn(m)
      } else s <= u.preload_code && (z = {
        element: c,
        href: c.href
      }, e = s, Wt(f))
  }

  function i() {
    a.disconnect();
    for (const o of P.querySelectorAll("a")) {
      const {
        url: s,
        external: c,
        download: l
      } = Kt(o, U, E.hash);
      if (c || l) continue;
      const f = kt(o);
      f.reload || (f.preload_code === B.viewport && a.observe(o), f.preload_code === B.eager && Wt(s))
    }
  }
  tt.add(i), i()
}

function ot(t, e) {
  if (t instanceof Jt) return t.body;
  const n = te(t),
    a = _n(t);
  return E.hooks.handleError({
    error: t,
    event: e,
    status: n,
    message: a
  }) ?? {
    message: a
  }
}

function In(t, e) {
  vn(() => (t.add(e), () => {
    t.delete(e)
  }))
}

function Fn(t) {
  In(ne, t)
}

function Jn(t, e = {}) {
  return t = new URL(mt(t)), t.origin !== It ? Promise.reject(new Error("goto: invalid URL")) : De(t, e, 0)
}

function Pn(t) {
  if (typeof t == "function") Et.push(t);
  else {
    const {
      href: e
    } = new URL(t, location.href);
    Et.push(n => n.href === e)
  }
}

function Yn(t, e) {
  Ot(b);
  const n = {
    [N]: b += 1,
    [M]: R,
    [Zt]: S.url.href,
    [$t]: e
  };
  history.pushState(n, "", mt(t)), re = !0, S.state = e, Ct.$set({
    page: Pe(() => _t(S))
  }), Oe(b, R)
}

function Xn(t, e) {
  const n = {
    [N]: b,
    [M]: R,
    [Zt]: S.url.href,
    [$t]: e
  };
  history.replaceState(n, "", mt(t)), S.state = e, Ct.$set({
    page: Pe(() => _t(S))
  })
}

function On() {
  var e;
  history.scrollRestoration = "manual", addEventListener("beforeunload", n => {
    let a = !1;
    if (we(), !at) {
      const r = ce(w, void 0, null, "leave"),
        i = {
          ...r.navigation,
          cancel: () => {
            a = !0, r.reject(new Error("navigation cancelled"))
          }
        };
      ne.forEach(o => o(i))
    }
    a ? (n.preventDefault(), n.returnValue = "") : history.scrollRestoration = "auto"
  }), addEventListener("visibilitychange", () => {
    document.visibilityState === "hidden" && we()
  }), (e = navigator.connection) != null && e.saveData || $n(), P.addEventListener("click", async n => {
    if (n.button || n.which !== 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey || n.defaultPrevented) return;
    const a = Ae(n.composedPath()[0], P);
    if (!a) return;
    const {
      url: r,
      external: i,
      target: o,
      download: s
    } = Kt(a, U, E.hash);
    if (!r) return;
    if (o === "_parent" || o === "_top") {
      if (window.parent !== window) return
    } else if (o && o !== "_self") return;
    const c = kt(a);
    if (!(a instanceof SVGAElement) && r.protocol !== location.protocol && !(r.protocol === "https:" || r.protocol === "http:") || s) return;
    const [f, h] = (E.hash ? r.hash.replace(/^#/, "") : r.href).split("#"), _ = f === Vt(location);
    if (i || c.reload && (!_ || !h)) {
      Me({
        url: r,
        type: "link",
        event: n
      }) ? at = !0 : n.preventDefault();
      return
    }
    if (h !== void 0 && _) {
      const [, u] = w.url.href.split("#");
      if (u === h) {
        if (n.preventDefault(), h === "" || h === "top" && a.ownerDocument.getElementById("top") === null) scrollTo({
          top: 0
        });
        else {
          const d = a.ownerDocument.getElementById(decodeURIComponent(h));
          d && (d.scrollIntoView(), d.focus())
        }
        return
      }
      if (Q = !0, Ot(b), t(r), !c.replace_state) return;
      Q = !1
    }
    n.preventDefault(), await new Promise(u => {
      requestAnimationFrame(() => {
        setTimeout(u, 0)
      }), setTimeout(u, 100)
    }), await F({
      type: "link",
      url: r,
      keepfocus: c.keepfocus,
      noscroll: c.noscroll,
      replace_state: c.replace_state ?? r.href === location.href,
      event: n
    })
  }), P.addEventListener("submit", n => {
    if (n.defaultPrevented) return;
    const a = HTMLFormElement.prototype.cloneNode.call(n.target),
      r = n.submitter;
    if (((r == null ? void 0 : r.formTarget) || a.target) === "_blank" || ((r == null ? void 0 : r.formMethod) || a.method) !== "get") return;
    const s = new URL((r == null ? void 0 : r.hasAttribute("formaction")) && (r == null ? void 0 : r.formAction) || a.action);
    if (Pt(s, U, !1)) return;
    const c = n.target,
      l = kt(c);
    if (l.reload) return;
    n.preventDefault(), n.stopPropagation();
    const f = new FormData(c, r);
    s.search = new URLSearchParams(f).toString(), F({
      type: "form",
      url: s,
      keepfocus: l.keepfocus,
      noscroll: l.noscroll,
      replace_state: l.replace_state ?? s.href === location.href,
      event: n
    })
  }), addEventListener("popstate", async n => {
    var a;
    if (!zt) {
      if ((a = n.state) != null && a[N]) {
        const r = n.state[N];
        if (C = {}, r === b) return;
        const i = D[r],
          o = n.state[$t] ?? {},
          s = new URL(n.state[Zt] ?? location.href),
          c = n.state[M],
          l = w.url ? Vt(location) === Vt(w.url) : !1;
        if (c === R && (re || l)) {
          o !== S.state && (S.state = o), t(s), D[b] = W(), i && scrollTo(i.x, i.y), b = r;
          return
        }
        const h = r - b;
        await F({
          type: "popstate",
          url: s,
          popped: {
            state: o,
            scroll: i,
            delta: h
          },
          accept: () => {
            b = r, R = c
          },
          block: () => {
            history.go(-h)
          },
          nav_token: C,
          event: n
        })
      } else if (!Q) {
        const r = new URL(location.href);
        t(r), E.hash && location.reload()
      }
    }
  }), addEventListener("hashchange", () => {
    Q && (Q = !1, history.replaceState({
      ...history.state,
      [N]: ++b,
      [M]: R
    }, "", location.href))
  });
  for (const n of document.querySelectorAll("link")) yn.has(n.rel) && (n.href = n.href);
  addEventListener("pageshow", n => {
    n.persisted && q.navigating.set(et.current = null)
  });

  function t(n) {
    w.url = S.url = n, q.page.set(_t(S)), q.page.notify()
  }
}
async function Cn(t, {
  status: e = 200,
  error: n,
  node_ids: a,
  params: r,
  route: i,
  server_route: o,
  data: s,
  form: c
}) {
  je = !0;
  const l = new URL(location.href);
  let f;
  ({
    params: r = {},
    route: i = {
      id: null
    }
  } = await jt(l, !1) || {}), f = ee.find(({
    id: u
  }) => u === i.id);
  let h, _ = !0;
  try {
    const u = a.map(async (m, g) => {
        const p = s[g];
        return p != null && p.uses && (p.uses = jn(p.uses)), oe({
          loader: E.nodes[m],
          url: l,
          params: r,
          route: i,
          parent: async () => {
            const k = {};
            for (let L = 0; L < g; L += 1) Object.assign(k, (await u[L]).data);
            return k
          },
          server_data_node: se(p)
        })
      }),
      d = await Promise.all(u);
    if (f) {
      const m = f.layouts;
      for (let g = 0; g < m.length; g++) m[g] || d.splice(g, 0, void 0)
    }
    h = await At({
      url: l,
      params: r,
      branch: d,
      status: e,
      error: n,
      errors: f == null ? void 0 : f.errors,
      form: c,
      route: f ?? null
    })
  } catch (u) {
    if (u instanceof Yt) {
      await rt(new URL(u.location, location.href));
      return
    }
    h = await ie({
      status: te(u),
      error: await ot(u, {
        url: l,
        params: r,
        route: i
      }),
      url: l,
      route: i
    }), t.textContent = "", _ = !1
  }
  h.props.page && (h.props.page.state = {}), await Ve(h, t, _)
}

function jn(t) {
  return {
    dependencies: new Set((t == null ? void 0 : t.dependencies) ?? []),
    params: new Set((t == null ? void 0 : t.params) ?? []),
    parent: !!(t != null && t.parent),
    route: !!(t != null && t.route),
    url: !!(t != null && t.url),
    search_params: new Set((t == null ? void 0 : t.search_params) ?? [])
  }
}
let zt = !1;

function Nn(t, e = !0) {
  const n = document.querySelector("[autofocus]");
  if (n) n.focus();
  else {
    const a = Ke(t);
    if (a && document.getElementById(a)) {
      const {
        x: i,
        y: o
      } = W();
      setTimeout(() => {
        const s = history.state;
        zt = !0, location.replace(new URL(`#${a}`, location.href)), history.replaceState(s, "", t), e && scrollTo(i, o), zt = !1
      })
    } else {
      const i = document.body,
        o = i.getAttribute("tabindex");
      i.tabIndex = -1, i.focus({
        preventScroll: !0,
        focusVisible: !1
      }), o !== null ? i.setAttribute("tabindex", o) : i.removeAttribute("tabindex")
    }
    const r = getSelection();
    if (r && r.type !== "None") {
      const i = [];
      for (let o = 0; o < r.rangeCount; o += 1) i.push(r.getRangeAt(o));
      setTimeout(() => {
        if (r.rangeCount === i.length) {
          for (let o = 0; o < r.rangeCount; o += 1) {
            const s = i[o],
              c = r.getRangeAt(o);
            if (s.commonAncestorContainer !== c.commonAncestorContainer || s.startContainer !== c.startContainer || s.endContainer !== c.endContainer || s.startOffset !== c.startOffset || s.endOffset !== c.endOffset) return
          }
          r.removeAllRanges()
        }
      })
    }
  }
}

function ce(t, e, n, a, r = null) {
  var l, f;
  let i, o;
  const s = new Promise((h, _) => {
    i = h, o = _
  });
  return s.catch(j), {
    navigation: {
      from: {
        params: t.params,
        route: {
          id: ((l = t.route) == null ? void 0 : l.id) ?? null
        },
        url: t.url,
        scroll: W()
      },
      to: n && {
        params: (e == null ? void 0 : e.params) ?? null,
        route: {
          id: ((f = e == null ? void 0 : e.route) == null ? void 0 : f.id) ?? null
        },
        url: n,
        scroll: r
      },
      willUnload: !e,
      type: a,
      complete: s
    },
    fulfil: i,
    reject: o
  }
}

function _t(t) {
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

function qn(t) {
  const e = new URL(t);
  return e.hash = decodeURIComponent(t.hash), e
}

function Ke(t) {
  let e;
  if (E.hash) {
    const [, , n] = t.hash.split("#", 3);
    e = n ?? ""
  } else e = t.hash.slice(1);
  return decodeURIComponent(e)
}
export {
  Xn as a, U as b, Fn as c, Yn as d, zn as e, Jn as g, Wn as l, S as p, Mn as r, q as s, hn as v
};
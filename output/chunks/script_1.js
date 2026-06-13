var ie = t => {
  throw TypeError(t)
};
var We = (t, e, n) => e.has(t) || ie("Cannot " + n);
var y = (t, e, n) => (We(t, e, "read from private field"), n ? n.call(t) : e.get(t)),
  A = (t, e, n) => e.has(t) ? ie("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n);
import {
  o as ce,
  s as Ke
} from "./CqGGwggA.js";
import {
  aI as jt,
  bI as ze,
  e as T,
  i as $,
  h as I,
  R as vt,
  Q as Fe,
  L as Ge
} from "./CV6xI6o5.js";
const K = [];

function zt(t, e = jt) {
  let n = null;
  const a = new Set;

  function r(s) {
    if (ze(t, s) && (t = s, n)) {
      const c = !K.length;
      for (const l of a) l[1](), K.push(l, t);
      if (c) {
        for (let l = 0; l < K.length; l += 2) K[l][0](K[l + 1]);
        K.length = 0
      }
    }
  }

  function i(s) {
    r(s(t))
  }

  function o(s, c = jt) {
    const l = [s, c];
    return a.add(l), a.size === 1 && (n = e(r, i) || jt), s(t), () => {
      a.delete(l), a.size === 0 && n && (n(), n = null)
    }
  }
  return {
    set: r,
    update: i,
    subscribe: o
  }
}
class Ft {
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
class Gt {
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
class Ht extends Error {
  constructor(e, n, a) {
    super(a), this.status = e, this.text = n
  }
}
new URL("sveltekit-internal://");

function He(t, e) {
  return t === "/" || e === "ignore" ? t : e === "never" ? t.endsWith("/") ? t.slice(0, -1) : t : e === "always" && !t.endsWith("/") ? t + "/" : t
}

function Je(t) {
  return t.split("%25").map(decodeURI).join("%25")
}

function Ye(t) {
  for (const e in t) t[e] = decodeURIComponent(t[e]);
  return t
}

function Nt({
  href: t
}) {
  return t.split("#")[0]
}

function j() {}

function Xe(...t) {
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

function Qe(t) {
  const e = atob(t),
    n = new Uint8Array(e.length);
  for (let a = 0; a < e.length; a++) n[a] = e.charCodeAt(a);
  return n
}
const Ze = window.fetch;
window.fetch = (t, e) => ((t instanceof Request ? t.method : (e == null ? void 0 : e.method) || "GET") !== "GET" && Z.delete(Jt(t)), Ze(t, e));
const Z = new Map;

function tn(t, e) {
  const n = Jt(t, e),
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
    }), a.getAttribute("data-b64") !== null && (r = Qe(r)), Promise.resolve(new Response(r, i))
  }
  return window.fetch(t, e)
}

function en(t, e, n) {
  if (Z.size > 0) {
    const a = Jt(t, n),
      r = Z.get(a);
    if (r) {
      if (performance.now() < r.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(n == null ? void 0 : n.cache)) return new Response(r.body, r.init);
      Z.delete(a)
    }
  }
  return window.fetch(e, n)
}

function Jt(t, e) {
  let a = `script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;
  if (e != null && e.headers || e != null && e.body) {
    const r = [];
    e.headers && r.push([...new Headers(e.headers)].join(",")), e.body && (typeof e.body == "string" || ArrayBuffer.isView(e.body)) && r.push(e.body), a += `[data-hash="${Xe(...r)}"]`
  }
  return a
}
const nn = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/,
  rn = /^\/\((?:[^)]+)\)$/;

function an(t) {
  const e = [];
  return {
    pattern: t === "/" || rn.test(t) ? /^\/$/ : new RegExp(`^${ke(t).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return e.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/([^]*))?";const i=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(i)return e.push({name:i[1],matcher:i[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const o=a.split(/\[(.+?)\](?!\])/);return"/"+o.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return qt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return qt(String.fromCharCode(...c.slice(2).split("-").map(m=>parseInt(m,16))));const f=nn.exec(c),[,h,_,u,d]=f;return e.push({name:u,matcher:d,optional:!!h,rest:!!_,chained:_?l===1&&o[0]==="":!1}),_?"([^]*?)":h?"([^/]*)?":"([^/]+?)"}return qt(c)}).join("")}).join("")}/?$`),
    params: e
  }
}

function on(t) {
  return t !== "" && !/^\([^)]+\)$/.test(t)
}

function ke(t) {
  return t.slice(1).split("/").filter(on)
}

function sn(t, e, n) {
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

function qt(t) {
  return t.normalize().replace(/[[\]]/g, "\\$&").replace(/%/g, "%25").replace(/\//g, "%2[Ff]").replace(/\?/g, "%3[Ff]").replace(/#/g, "%23").replace(/[.*+?^${}()|\\]/g, "\\$&")
}
const cn = /\[(\[)?(\.\.\.)?(\w+?)(?:=(\w+))?\]\]?/g;

function Bn(t, e) {
  const n = ke(t),
    a = t != "/" && t.endsWith("/");
  return "/" + n.map(r => r.replace(cn, (i, o, s, c) => {
    const l = e[c];
    if (!l) {
      if (o || s && l !== void 0) return "";
      throw new Error(`Missing parameter '${c}' in route ${t}`)
    }
    if (l.startsWith("/") || l.endsWith("/")) throw new Error(`Parameter '${c}' in route ${t} cannot start or end with a slash -- this would cause an invalid route like foo//bar`);
    return l
  })).filter(Boolean).join("/") + (a ? "/" : "")
}

function ln({
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
    } = an(s), u = {
      id: s,
      exec: d => {
        const m = h.exec(d);
        if (m) return sn(m, _, a)
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

function Se(t, e = JSON.parse) {
  try {
    return e(sessionStorage[t])
  } catch {}
}

function le(t, e, n = JSON.stringify) {
  const a = n(e);
  try {
    sessionStorage[t] = a
  } catch {}
}
var _e;
const U = ((_e = globalThis.__sveltekit_vm227l) == null ? void 0 : _e.base) ?? "";
var we;
const fn = ((we = globalThis.__sveltekit_vm227l) == null ? void 0 : we.assets) ?? U ?? "",
  un = "1781373548511",
  Ee = "sveltekit:snapshot",
  Re = "sveltekit:scroll",
  Yt = "sveltekit:states",
  xe = "sveltekit:pageurl",
  M = "sveltekit:history",
  H = "sveltekit:navigation",
  V = {
    tap: 1,
    hover: 2,
    viewport: 3,
    eager: 4,
    off: -1,
    false: -1
  },
  At = location.origin;

function Tt(t) {
  if (t instanceof URL) return t;
  let e = document.baseURI;
  if (!e) {
    const n = document.getElementsByTagName("base");
    e = n.length ? n[0].href : document.URL
  }
  return new URL(t, e)
}

function B() {
  return {
    x: pageXOffset,
    y: pageYOffset
  }
}

function z(t, e) {
  return t.getAttribute(`data-sveltekit-${e}`)
}
const fe = {
  ...V,
  "": V.hover
};

function Le(t) {
  let e = t.assignedSlot ?? t.parentNode;
  return (e == null ? void 0 : e.nodeType) === 11 && (e = e.host), e
}

function Ue(t, e) {
  for (; t && t !== e;) {
    if (t.nodeName.toUpperCase() === "A" && t.hasAttribute("href")) return t;
    t = Le(t)
  }
}

function Mt(t, e, n) {
  let a;
  try {
    if (a = new URL(t instanceof SVGAElement ? t.href.baseVal : t.href, document.baseURI), n && a.hash.match(/^#[^/]/)) {
      const s = location.hash.split("#")[1] || "/";
      a.hash = `#${s}${a.hash}`
    }
  } catch {}
  const r = t instanceof SVGAElement ? t.target.baseVal : t.target,
    i = !a || !!r || $t(a, e, n) || (t.getAttribute("rel") || "").split(/\s+/).includes("external"),
    o = (a == null ? void 0 : a.origin) === At && t.hasAttribute("download");
  return {
    url: a,
    external: i,
    target: r,
    download: o
  }
}

function yt(t) {
  let e = null,
    n = null,
    a = null,
    r = null,
    i = null,
    o = null,
    s = t;
  for (; s && s !== document.documentElement;) a === null && (a = z(s, "preload-code")), r === null && (r = z(s, "preload-data")), e === null && (e = z(s, "keepfocus")), n === null && (n = z(s, "noscroll")), i === null && (i = z(s, "reload")), o === null && (o = z(s, "replacestate")), s = Le(s);

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
    preload_code: fe[a ?? "off"],
    preload_data: fe[r ?? "off"],
    keepfocus: c(e),
    noscroll: c(n),
    reload: c(i),
    replace_state: c(o)
  }
}

function ue(t) {
  const e = zt(t);
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
const Ae = {
  v: j
};

function dn() {
  const {
    set: t,
    subscribe: e
  } = zt(!1);
  let n;
  async function a() {
    clearTimeout(n);
    try {
      const r = await fetch(`${fn}/_app/version.json`, {
        headers: {
          pragma: "no-cache",
          "cache-control": "no-cache"
        }
      });
      if (!r.ok) return !1;
      const o = (await r.json()).version !== un;
      return o && (t(!0), Ae.v(), clearTimeout(n)), o
    } catch {
      return !1
    }
  }
  return {
    subscribe: e,
    check: a
  }
}

function $t(t, e, n) {
  return t.origin !== At || !t.pathname.startsWith(e) ? !0 : n ? t.pathname !== location.pathname : !1
}

function Wn(t) {}
const Te = new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...Te];
const hn = new Set([...Te]);
[...hn];

function pn(t) {
  return t.filter(e => e != null)
}

function _t(t, e) {
  return t + "/" + e
}

function Xt(t) {
  return t instanceof Ft || t instanceof Ht ? t.status : 500
}

function gn(t) {
  return t instanceof Ht ? t.text : "Internal Error"
}
let E, et, Dt;
const mn = ce.toString().includes("$$") || /function \w+\(\) \{\}/.test(ce.toString()),
  de = "a:";
var st, it, ct, lt, ft, ut, dt, ht, ve, pt, ye, gt, be;
mn ? (E = {
  data: {},
  form: null,
  error: null,
  params: {},
  route: {
    id: null
  },
  state: {},
  status: -1,
  url: new URL(de)
}, et = {
  current: null
}, Dt = {
  current: !1
}) : (E = new(ve = class {
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
    A(this, ht, T(new URL(de)))
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
}, st = new WeakMap, it = new WeakMap, ct = new WeakMap, lt = new WeakMap, ft = new WeakMap, ut = new WeakMap, dt = new WeakMap, ht = new WeakMap, ve), et = new(ye = class {
  constructor() {
    A(this, pt, T(null))
  }
  get current() {
    return $(y(this, pt))
  }
  set current(e) {
    I(y(this, pt), e)
  }
}, pt = new WeakMap, ye), Dt = new(be = class {
  constructor() {
    A(this, gt, T(!1))
  }
  get current() {
    return $(y(this, gt))
  }
  set current(e) {
    I(y(this, gt), e)
  }
}, gt = new WeakMap, be), Ae.v = () => Dt.current = !0);

function $e(t) {
  Object.assign(E, t)
}
const {
  onMount: _n
} = Ke, wn = Ge ?? (t => t()), vn = new Set(["icon", "shortcut icon", "apple-touch-icon"]);
let X = null;
const q = Se(Re) ?? {},
  nt = Se(Ee) ?? {},
  N = {
    url: ue({}),
    page: ue({}),
    navigating: zt(null),
    updated: dn()
  };

function Qt(t) {
  q[t] = B()
}

function yn(t, e) {
  let n = t + 1;
  for (; q[n];) delete q[n], n += 1;
  for (n = e + 1; nt[n];) delete nt[n], n += 1
}

function rt(t, e = !1) {
  return e ? location.replace(t.href) : location.href = t.href, new Promise(j)
}
async function Ie() {
  if ("serviceWorker" in navigator) {
    const t = await navigator.serviceWorker.getRegistration(U || "/");
    t && await t.update()
  }
}
let Zt, Bt, bt, P, Wt, S;
const kt = [],
  St = [];
let v = null;

function Et() {
  var t;
  (t = v == null ? void 0 : v.fork) == null || t.then(e => e == null ? void 0 : e.discard()), v = null, F = {
    element: void 0,
    href: void 0
  }
}
const wt = new Map,
  te = new Set,
  bn = new Set,
  tt = new Set;
let w = {
    branch: [],
    error: null,
    url: null
  },
  Pe = !1,
  Rt = !1,
  he = !0,
  at = !1,
  Q = !1,
  Oe = !1,
  ee = !1,
  ne, k, L, C;
const xt = new Set,
  pe = new Map,
  ge = new Map;
async function Gn(t, e, n) {
  var i, o, s, c;
  if (globalThis.__sveltekit_vm227l.data) {
    const {
      q: l = {},
      p: f = {},
      l: h = {},
      f: _ = {}
    } = globalThis.__sveltekit_vm227l.data;
    for (const u in l) l[u];
    for (const u in h) h[u];
    for (const u in _) _[u];
    for (const u in f) f[u]
  }
  document.URL !== location.href && (location.href = location.href), S = t, await ((o = (i = t.hooks).init) == null ? void 0 : o.call(i)), Zt = ln(t), P = document.documentElement, Wt = e, Bt = t.nodes[0], bt = t.nodes[1], Bt(), bt(), k = (s = history.state) == null ? void 0 : s[M], L = (c = history.state) == null ? void 0 : c[H], k || (k = L = Date.now(), history.replaceState({
    ...history.state,
    [M]: k,
    [H]: L
  }, ""));
  const a = q[k];

  function r() {
    a && (history.scrollRestoration = "manual", scrollTo(a.x, a.y))
  }
  n ? (r(), await Cn(Wt, n)) : (await G({
    type: "enter",
    url: Tt(S.hash ? qn(new URL(location.href)) : location.href),
    replace_state: !0
  }), r()), On()
}

function kn() {
  kt.length = 0, ee = !1
}

function Ce(t) {
  St.some(e => e == null ? void 0 : e.snapshot) && (nt[t] = St.map(e => {
    var n;
    return (n = e == null ? void 0 : e.snapshot) == null ? void 0 : n.capture()
  }))
}

function je(t) {
  var e;
  (e = nt[t]) == null || e.forEach((n, a) => {
    var r, i;
    (i = (r = St[a]) == null ? void 0 : r.snapshot) == null || i.restore(n)
  })
}

function me() {
  Qt(k), le(Re, q), Ce(L), le(Ee, nt)
}
async function Ne(t, e, n, a) {
  let r, i;
  e.invalidateAll && Et(), await G({
    type: "goto",
    url: Tt(t),
    keepfocus: e.keepFocus,
    noscroll: e.noScroll,
    replace_state: e.replaceState,
    state: e.state,
    redirect_count: n,
    nav_token: a,
    accept: () => {
      if (e.invalidateAll) {
        ee = !0, r = new Set;
        for (const [o, s] of pe)
          for (const c of s.keys()) r.add(_t(o, c));
        i = new Set;
        for (const [o, s] of ge)
          for (const c of s.keys()) i.add(_t(o, c))
      }
      e.invalidate && e.invalidate.forEach(Pn)
    }
  }), e.invalidateAll && vt().then(vt).then(() => {
    for (const [o, s] of pe)
      for (const [c, {
          resource: l
        }] of s) r != null && r.has(_t(o, c)) && l.refresh();
    for (const [o, s] of ge)
      for (const [c, {
          resource: l
        }] of s) i != null && i.has(_t(o, c)) && l.reconnect()
  })
}
async function Sn(t) {
  if (t.id !== (v == null ? void 0 : v.id)) {
    Et();
    const e = {};
    xt.add(e), v = {
      id: t.id,
      token: e,
      promise: De({
        ...t,
        preload: e
      }).then(n => (xt.delete(e), n.type === "loaded" && n.state.error && Et(), n)),
      fork: null
    }
  }
  return v.promise
}
async function Vt(t) {
  var n;
  const e = (n = await It(t, !1)) == null ? void 0 : n.route;
  e && await Promise.all([...e.layouts, e.leaf].filter(Boolean).map(a => a[1]()))
}
async function qe(t, e, n) {
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
    }, $e(t.props.page), ne = new S.root({
      target: e,
      props: {
        ...t.props,
        stores: N,
        components: St
      },
      hydrate: n,
      sync: !1,
      transformError: void 0
    }), await Promise.resolve(), je(L), n) {
    const i = {
      from: null,
      to: {
        ...a,
        scroll: q[k] ?? B()
      },
      willUnload: !1,
      type: "enter",
      complete: Promise.resolve()
    };
    tt.forEach(o => o(i))
  }
  Rt = !0
}
async function Lt({
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
  t.pathname = He(t.pathname, c), t.search = t.search;
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
      constructors: pn(n).map(d => d.node.component),
      page: Pt(E)
    }
  };
  s !== void 0 && (l.props.form = s);
  let f = {},
    h = !E,
    _ = 0;
  for (let d = 0; d < Math.max(n.length, w.branch.length); d += 1) {
    const m = n[d],
      g = w.branch[d];
    (m == null ? void 0 : m.data) !== (g == null ? void 0 : g.data) && (h = !0), m && (f = {
      ...f,
      ...m.data
    }, h && (l.props[`data_${_}`] = f), _ += 1)
  }
  return (!w.url || t.href !== w.url.href || w.error !== i || s !== void 0 && s !== E.form || h) && (l.props.page = {
    error: i,
    params: e,
    route: {
      id: (o == null ? void 0 : o.id) ?? null
    },
    state: {},
    status: r,
    url: new URL(t),
    form: s ?? null,
    data: h ? f : E.data
  }), l
}
async function re({
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
  const i = Rt ? en(a, r.href, e) : tn(a, e);
  return {
    resolved: r,
    promise: i
  }
}

function Rn(t, e, n, a, r, i) {
  if (ee) return !0;
  if (!r) return !1;
  if (r.parent && t || r.route && e || r.url && n) return !0;
  for (const o of r.search_params)
    if (a.has(o)) return !0;
  for (const o of r.params)
    if (i[o] !== w.params[o]) return !0;
  for (const o of r.dependencies)
    if (kt.some(s => s(new URL(o)))) return !0;
  return !1
}

function ae(t, e) {
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
      page: Pt(E),
      constructors: []
    }
  }
}
async function De({
  id: t,
  invalidating: e,
  url: n,
  params: a,
  route: r,
  preload: i
}) {
  if ((v == null ? void 0 : v.id) === t) return xt.delete(v.token), v.promise;
  const {
    errors: o,
    layouts: s,
    leaf: c
  } = r, l = [...s, c];
  o.forEach(g => g == null ? void 0 : g().catch(j)), l.forEach(g => g == null ? void 0 : g[1]().catch(j));
  const f = w.url ? t !== Ut(w.url) : !1,
    h = w.route ? r.id !== w.route.id : !1,
    _ = xn(w.url, n);
  let u = !1;
  const d = l.map(async (g, p) => {
    var O;
    if (!g) return;
    const b = w.branch[p];
    return g[1] === (b == null ? void 0 : b.loader) && !Rn(u, h, f, _, (O = b.universal) == null ? void 0 : O.uses, a) ? b : (u = !0, re({
      loader: g[1],
      url: n,
      params: a,
      route: r,
      parent: async () => {
        var mt;
        const D = {};
        for (let W = 0; W < p; W += 1) Object.assign(D, (mt = await d[W]) == null ? void 0 : mt.data);
        return D
      },
      server_data_node: ae(g[0] ? {
        type: "skip"
      } : null, g[0] ? b == null ? void 0 : b.server : void 0)
    }))
  });
  for (const g of d) g.catch(j);
  const m = [];
  for (let g = 0; g < l.length; g += 1)
    if (l[g]) try {
      m.push(await d[g])
    } catch (p) {
      if (p instanceof Gt) return {
        type: "redirect",
        location: p.location
      };
      if (xt.has(i)) return Ln({
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
      let b = Xt(p),
        x;
      if (p instanceof Ft) x = p.body;
      else {
        if (await N.updated.check()) return await Ie(), await rt(n);
        x = await ot(p, {
          params: a,
          url: n,
          route: {
            id: r.id
          }
        })
      }
      const O = await Un(g, m, o);
      return O ? Lt({
        url: n,
        params: a,
        branch: m.slice(0, O.idx).concat(O.node),
        errors: o,
        status: b,
        error: x,
        route: r
      }) : await Me(n, {
        id: r.id
      }, x, b)
    } else m.push(void 0);
  return Lt({
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
async function oe({
  status: t,
  error: e,
  url: n,
  route: a
}) {
  const r = {};
  let i = null;
  try {
    const o = await re({
        loader: Bt,
        url: n,
        params: r,
        route: a,
        parent: () => Promise.resolve({}),
        server_data_node: ae(i)
      }),
      s = {
        node: await bt(),
        loader: bt,
        universal: null,
        server: null,
        data: null
      };
    return Lt({
      url: n,
      params: r,
      branch: [o, s],
      status: t,
      error: e,
      errors: [],
      route: null
    })
  } catch (o) {
    if (o instanceof Gt) return Ne(new URL(o.location, location.href), {}, 0);
    throw o
  }
}
async function An(t) {
  const e = t.href;
  if (wt.has(e)) return wt.get(e);
  let n;
  try {
    const a = (async () => {
      let r = await S.hooks.reroute({
        url: new URL(t),
        fetch: async (i, o) => En(i, o, t).promise
      }) ?? t;
      if (typeof r == "string") {
        const i = new URL(t);
        S.hash ? i.hash = r : i.pathname = r, r = i
      }
      return r
    })();
    wt.set(e, a), n = await a
  } catch {
    wt.delete(e);
    return
  }
  return n
}
async function It(t, e) {
  if (t && !$t(t, U, S.hash)) {
    const n = await An(t);
    if (!n) return;
    const a = Tn(n);
    for (const r of Zt) {
      const i = r.exec(a);
      if (i) return {
        id: Ut(t),
        invalidating: e,
        route: r,
        params: Ye(i),
        url: t
      }
    }
  }
}

function Tn(t) {
  return Je(S.hash ? t.hash.replace(/^#/, "").replace(/[?#].+/, "") : t.pathname.slice(U.length)) || "/"
}

function Ut(t) {
  return (S.hash ? t.hash.replace(/^#/, "") : t.pathname) + t.search
}

function Ve({
  url: t,
  type: e,
  intent: n,
  delta: a,
  event: r,
  scroll: i
}) {
  let o = !1;
  const s = se(w, n, t, e, i ?? null);
  a !== void 0 && (s.navigation.delta = a), r !== void 0 && (s.navigation.event = r);
  const c = {
    ...s.navigation,
    cancel: () => {
      o = !0, s.reject(new Error("navigation cancelled"))
    }
  };
  return at || te.forEach(l => l(c)), o ? null : s
}
async function G({
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
  var W;
  const _ = C;
  C = c;
  const u = await It(e, !1),
    d = t === "enter" ? se(w, u, e, t) : Ve({
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
  const m = k,
    g = L;
  l(), at = !0, Rt && d.navigation.type !== "enter" && N.navigating.set(et.current = d.navigation);
  let p = u && await De(u);
  if (!p) {
    if ($t(e, U, S.hash)) return await rt(e, i);
    p = await Me(e, {
      id: null
    }, await ot(new Ht(404, "Not Found", `Not found: ${e.pathname}`), {
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
      await G({
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
    p = await oe({
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
  } else p.props.page.status >= 400 && await N.updated.check() && (await Ie(), await rt(e, i));
  if (kn(), Qt(m), Ce(g), p.props.page.url.pathname !== e.pathname && (e.pathname = p.props.page.url.pathname), o = n ? n.state : o, !n) {
    const R = i ? 0 : 1,
      J = {
        [M]: k += R,
        [H]: L += R,
        [Yt]: o
      };
    (i ? history.replaceState : history.pushState).call(history, J, "", e), i || yn(k, L)
  }
  const b = u && (v == null ? void 0 : v.id) === u.id ? v.fork : null;
  v != null && v.fork && !b ? Et() : (v = null, F = {
    element: void 0,
    href: void 0
  }), p.props.page.state = o;
  let x;
  if (Rt) {
    const R = (await Promise.all(Array.from(bn, Y => Y(d.navigation)))).filter(Y => typeof Y == "function");
    if (R.length > 0) {
      let Y = function() {
        R.forEach(Ct => {
          tt.delete(Ct)
        })
      };
      R.push(Y), R.forEach(Ct => {
        tt.add(Ct)
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
    const Ot = b && await b;
    Ot ? x = Ot.commit() : (X = null, ne.$set(p.props), X && Object.assign(p.props.page, X), $e(p.props.page), x = (W = Fe) == null ? void 0 : W()), Oe = !0
  } else await qe(p, Wt, !1);
  const {
    activeElement: O
  } = document;
  if (await x, await vt(), await vt(), C !== c) return d.reject(new Error("navigation aborted")), !1;
  p.props.page && X && Object.assign(p.props.page, X);
  let D = null;
  if (he) {
    const R = n ? n.scroll : r ? B() : null;
    R ? scrollTo(R.x, R.y) : (D = e.hash && document.getElementById(Be(e))) ? D.scrollIntoView() : scrollTo(0, 0)
  }
  const mt = document.activeElement !== O && document.activeElement !== document.body;
  !a && !mt && Nn(e, !D), he = !0, at = !1, t === "popstate" && je(L), d.fulfil(void 0), d.navigation.to && (d.navigation.to.scroll = B()), tt.forEach(R => R(d.navigation)), N.navigating.set(et.current = null)
}
async function Me(t, e, n, a, r) {
  return t.origin === At && t.pathname === location.pathname && !Pe ? await oe({
    status: a,
    error: n,
    url: t,
    route: e
  }) : await rt(t, r)
}
let F = {
  element: void 0,
  href: void 0
};

function $n() {
  let t, e;
  P.addEventListener("mousemove", o => {
    const s = o.target;
    clearTimeout(t), t = setTimeout(() => {
      r(s, V.hover)
    }, 20)
  });

  function n(o) {
    o.defaultPrevented || r(o.composedPath()[0], V.tap)
  }
  P.addEventListener("mousedown", n), P.addEventListener("touchstart", n, {
    passive: !0
  });
  const a = new IntersectionObserver(o => {
    for (const s of o) s.isIntersecting && (Vt(new URL(s.target.href)), a.unobserve(s.target))
  }, {
    threshold: 0
  });
  async function r(o, s) {
    const c = Ue(o, P),
      l = c === F.element && (c == null ? void 0 : c.href) === F.href && s >= e;
    if (!c || l) return;
    const {
      url: f,
      external: h,
      download: _
    } = Mt(c, U, S.hash);
    if (h || _) return;
    const u = yt(c),
      d = f && Ut(w.url) === Ut(f);
    if (!(u.reload || d))
      if (s <= u.preload_data) {
        F = {
          element: c,
          href: c.href
        }, e = V.tap;
        const m = await It(f, !1);
        if (!m) return;
        Sn(m)
      } else s <= u.preload_code && (F = {
        element: c,
        href: c.href
      }, e = s, Vt(f))
  }

  function i() {
    a.disconnect();
    for (const o of P.querySelectorAll("a")) {
      const {
        url: s,
        external: c,
        download: l
      } = Mt(o, U, S.hash);
      if (c || l) continue;
      const f = yt(o);
      f.reload || (f.preload_code === V.viewport && a.observe(o), f.preload_code === V.eager && Vt(s))
    }
  }
  tt.add(i), i()
}

function ot(t, e) {
  if (t instanceof Ft) return t.body;
  const n = Xt(t),
    a = gn(t);
  return S.hooks.handleError({
    error: t,
    event: e,
    status: n,
    message: a
  }) ?? {
    message: a
  }
}

function In(t, e) {
  _n(() => (t.add(e), () => {
    t.delete(e)
  }))
}

function Hn(t) {
  In(te, t)
}

function Jn(t, e = {}) {
  return t = new URL(Tt(t)), t.origin !== At ? Promise.reject(new Error("goto: invalid URL")) : Ne(t, e, 0)
}

function Pn(t) {
  if (typeof t == "function") kt.push(t);
  else {
    const {
      href: e
    } = new URL(t, location.href);
    kt.push(n => n.href === e)
  }
}

function Yn(t, e) {
  const n = {
    [M]: k,
    [H]: L,
    [xe]: E.url.href,
    [Yt]: e
  };
  history.replaceState(n, "", Tt(t)), E.state = e, ne.$set({
    page: wn(() => Pt(E))
  })
}

function On() {
  var e;
  history.scrollRestoration = "manual", addEventListener("beforeunload", n => {
    let a = !1;
    if (me(), !at) {
      const r = se(w, void 0, null, "leave"),
        i = {
          ...r.navigation,
          cancel: () => {
            a = !0, r.reject(new Error("navigation cancelled"))
          }
        };
      te.forEach(o => o(i))
    }
    a ? (n.preventDefault(), n.returnValue = "") : history.scrollRestoration = "auto"
  }), addEventListener("visibilitychange", () => {
    document.visibilityState === "hidden" && me()
  }), (e = navigator.connection) != null && e.saveData || $n(), P.addEventListener("click", async n => {
    if (n.button || n.which !== 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey || n.defaultPrevented) return;
    const a = Ue(n.composedPath()[0], P);
    if (!a) return;
    const {
      url: r,
      external: i,
      target: o,
      download: s
    } = Mt(a, U, S.hash);
    if (!r) return;
    if (o === "_parent" || o === "_top") {
      if (window.parent !== window) return
    } else if (o && o !== "_self") return;
    const c = yt(a);
    if (!(a instanceof SVGAElement) && r.protocol !== location.protocol && !(r.protocol === "https:" || r.protocol === "http:") || s) return;
    const [f, h] = (S.hash ? r.hash.replace(/^#/, "") : r.href).split("#"), _ = f === Nt(location);
    if (i || c.reload && (!_ || !h)) {
      Ve({
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
      if (Q = !0, Qt(k), t(r), !c.replace_state) return;
      Q = !1
    }
    n.preventDefault(), await new Promise(u => {
      requestAnimationFrame(() => {
        setTimeout(u, 0)
      }), setTimeout(u, 100)
    }), await G({
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
    if ($t(s, U, !1)) return;
    const c = n.target,
      l = yt(c);
    if (l.reload) return;
    n.preventDefault(), n.stopPropagation();
    const f = new FormData(c, r);
    s.search = new URLSearchParams(f).toString(), G({
      type: "form",
      url: s,
      keepfocus: l.keepfocus,
      noscroll: l.noscroll,
      replace_state: l.replace_state ?? s.href === location.href,
      event: n
    })
  }), addEventListener("popstate", async n => {
    var a;
    if (!Kt) {
      if ((a = n.state) != null && a[M]) {
        const r = n.state[M];
        if (C = {}, r === k) return;
        const i = q[r],
          o = n.state[Yt] ?? {},
          s = new URL(n.state[xe] ?? location.href),
          c = n.state[H],
          l = w.url ? Nt(location) === Nt(w.url) : !1;
        if (c === L && (Oe || l)) {
          o !== E.state && (E.state = o), t(s), q[k] = B(), i && scrollTo(i.x, i.y), k = r;
          return
        }
        const h = r - k;
        await G({
          type: "popstate",
          url: s,
          popped: {
            state: o,
            scroll: i,
            delta: h
          },
          accept: () => {
            k = r, L = c
          },
          block: () => {
            history.go(-h)
          },
          nav_token: C,
          event: n
        })
      } else if (!Q) {
        const r = new URL(location.href);
        t(r), S.hash && location.reload()
      }
    }
  }), addEventListener("hashchange", () => {
    Q && (Q = !1, history.replaceState({
      ...history.state,
      [M]: ++k,
      [H]: L
    }, "", location.href))
  });
  for (const n of document.querySelectorAll("link")) vn.has(n.rel) && (n.href = n.href);
  addEventListener("pageshow", n => {
    n.persisted && N.navigating.set(et.current = null)
  });

  function t(n) {
    w.url = E.url = n, N.page.set(Pt(E)), N.page.notify()
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
  Pe = !0;
  const l = new URL(location.href);
  let f;
  ({
    params: r = {},
    route: i = {
      id: null
    }
  } = await It(l, !1) || {}), f = Zt.find(({
    id: u
  }) => u === i.id);
  let h, _ = !0;
  try {
    const u = a.map(async (m, g) => {
        const p = s[g];
        return p != null && p.uses && (p.uses = jn(p.uses)), re({
          loader: S.nodes[m],
          url: l,
          params: r,
          route: i,
          parent: async () => {
            const b = {};
            for (let x = 0; x < g; x += 1) Object.assign(b, (await u[x]).data);
            return b
          },
          server_data_node: ae(p)
        })
      }),
      d = await Promise.all(u);
    if (f) {
      const m = f.layouts;
      for (let g = 0; g < m.length; g++) m[g] || d.splice(g, 0, void 0)
    }
    h = await Lt({
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
    if (u instanceof Gt) {
      await rt(new URL(u.location, location.href));
      return
    }
    h = await oe({
      status: Xt(u),
      error: await ot(u, {
        url: l,
        params: r,
        route: i
      }),
      url: l,
      route: i
    }), t.textContent = "", _ = !1
  }
  h.props.page && (h.props.page.state = {}), await qe(h, t, _)
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
let Kt = !1;

function Nn(t, e = !0) {
  const n = document.querySelector("[autofocus]");
  if (n) n.focus();
  else {
    const a = Be(t);
    if (a && document.getElementById(a)) {
      const {
        x: i,
        y: o
      } = B();
      setTimeout(() => {
        const s = history.state;
        Kt = !0, location.replace(new URL(`#${a}`, location.href)), history.replaceState(s, "", t), e && scrollTo(i, o), Kt = !1
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

function se(t, e, n, a, r = null) {
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
        scroll: B()
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

function Pt(t) {
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

function Be(t) {
  let e;
  if (S.hash) {
    const [, , n] = t.hash.split("#", 3);
    e = n ?? ""
  } else e = t.hash.slice(1);
  return decodeURIComponent(e)
}
export {
  Yn as a, U as b, Hn as c, Gn as d, Jn as g, Wn as l, E as p, Bn as r, N as s, un as v
};
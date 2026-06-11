var it = e => {
  throw TypeError(e)
};
var Bt = (e, t, n) => t.has(e) || it("Cannot " + n);
var y = (e, t, n) => (Bt(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
  A = (e, t, n) => t.has(e) ? it("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
import {
  o as lt,
  s as Wt
} from "./CqGGwggA.js";
import {
  aI as Ce,
  bI as Kt,
  e as T,
  i as $,
  h as I,
  R as ve,
  Q as Ft,
  L as Gt
} from "./CV6xI6o5.js";
import {
  v as Ht
} from "./D4oN6XCm.js";
const W = [];

function Ke(e, t = Ce) {
  let n = null;
  const a = new Set;

  function r(s) {
    if (Kt(e, s) && (e = s, n)) {
      const l = !W.length;
      for (const c of a) c[1](), W.push(c, e);
      if (l) {
        for (let c = 0; c < W.length; c += 2) W[c][0](W[c + 1]);
        W.length = 0
      }
    }
  }

  function i(s) {
    r(s(e))
  }

  function o(s, l = Ce) {
    const c = [s, l];
    return a.add(c), a.size === 1 && (n = t(r, i) || Ce), s(e), () => {
      a.delete(c), a.size === 0 && n && (n(), n = null)
    }
  }
  return {
    set: r,
    update: i,
    subscribe: o
  }
}
class Fe {
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
class Ge {
  constructor(t, n) {
    try {
      new Headers({
        location: n
      })
    } catch {
      throw new Error(`Invalid redirect location ${JSON.stringify(n)}: this string contains characters that cannot be used in HTTP headers`)
    }
    this.status = t, this.location = n
  }
}
class He extends Error {
  constructor(t, n, a) {
    super(a), this.status = t, this.text = n
  }
}
new URL("sveltekit-internal://");

function Jt(e, t) {
  return e === "/" || t === "ignore" ? e : t === "never" ? e.endsWith("/") ? e.slice(0, -1) : e : t === "always" && !e.endsWith("/") ? e + "/" : e
}

function Yt(e) {
  return e.split("%25").map(decodeURI).join("%25")
}

function Xt(e) {
  for (const t in e) e[t] = decodeURIComponent(e[t]);
  return e
}

function Ne({
  href: e
}) {
  return e.split("#")[0]
}

function C() {}

function Qt(...e) {
  let t = 5381;
  for (const n of e)
    if (typeof n == "string") {
      let a = n.length;
      for (; a;) t = t * 33 ^ n.charCodeAt(--a)
    } else if (ArrayBuffer.isView(n)) {
    const a = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
    let r = a.length;
    for (; r;) t = t * 33 ^ a[--r]
  } else throw new TypeError("value must be a string or TypedArray");
  return (t >>> 0).toString(36)
}
new TextEncoder;

function Zt(e) {
  const t = atob(e),
    n = new Uint8Array(t.length);
  for (let a = 0; a < t.length; a++) n[a] = t.charCodeAt(a);
  return n
}
const en = window.fetch;
window.fetch = (e, t) => ((e instanceof Request ? e.method : (t == null ? void 0 : t.method) || "GET") !== "GET" && Z.delete(Je(e)), en(e, t));
const Z = new Map;

function tn(e, t) {
  const n = Je(e, t),
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
    }), a.getAttribute("data-b64") !== null && (r = Zt(r)), Promise.resolve(new Response(r, i))
  }
  return window.fetch(e, t)
}

function nn(e, t, n) {
  if (Z.size > 0) {
    const a = Je(e, n),
      r = Z.get(a);
    if (r) {
      if (performance.now() < r.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(n == null ? void 0 : n.cache)) return new Response(r.body, r.init);
      Z.delete(a)
    }
  }
  return window.fetch(t, n)
}

function Je(e, t) {
  let a = `script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;
  if (t != null && t.headers || t != null && t.body) {
    const r = [];
    t.headers && r.push([...new Headers(t.headers)].join(",")), t.body && (typeof t.body == "string" || ArrayBuffer.isView(t.body)) && r.push(t.body), a += `[data-hash="${Qt(...r)}"]`
  }
  return a
}
const rn = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/,
  an = /^\/\((?:[^)]+)\)$/;

function on(e) {
  const t = [];
  return {
    pattern: e === "/" || an.test(e) ? /^\/$/ : new RegExp(`^${kt(e).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return t.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/([^]*))?";const i=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(i)return t.push({name:i[1],matcher:i[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const o=a.split(/\[(.+?)\](?!\])/);return"/"+o.map((l,c)=>{if(c%2){if(l.startsWith("x+"))return qe(String.fromCharCode(parseInt(l.slice(2),16)));if(l.startsWith("u+"))return qe(String.fromCharCode(...l.slice(2).split("-").map(m=>parseInt(m,16))));const f=rn.exec(l),[,h,w,d,u]=f;return t.push({name:d,matcher:u,optional:!!h,rest:!!w,chained:w?c===1&&o[0]==="":!1}),w?"([^]*?)":h?"([^/]*)?":"([^/]+?)"}return qe(l)}).join("")}).join("")}/?$`),
    params: t
  }
}

function sn(e) {
  return e !== "" && !/^\([^)]+\)$/.test(e)
}

function kt(e) {
  return e.slice(1).split("/").filter(sn)
}

function ln(e, t, n) {
  const a = {},
    r = e.slice(1),
    i = r.filter(s => s !== void 0);
  let o = 0;
  for (let s = 0; s < t.length; s += 1) {
    const l = t[s];
    let c = r[s - o];
    if (l.chained && l.rest && o && (c = r.slice(s - o, s + 1).filter(f => f).join("/"), o = 0), c === void 0)
      if (l.rest) c = "";
      else continue;
    if (!l.matcher || n[l.matcher](c)) {
      a[l.name] = c;
      const f = t[s + 1],
        h = r[s + 1];
      f && !f.rest && f.optional && h && l.chained && (o = 0), !f && !h && Object.keys(a).length === i.length && (o = 0);
      continue
    }
    if (l.optional && l.chained) {
      o++;
      continue
    }
    return
  }
  if (!o) return a
}

function qe(e) {
  return e.normalize().replace(/[[\]]/g, "\\$&").replace(/%/g, "%25").replace(/\//g, "%2[Ff]").replace(/\?/g, "%3[Ff]").replace(/#/g, "%23").replace(/[.*+?^${}()|\\]/g, "\\$&")
}
const cn = /\[(\[)?(\.\.\.)?(\w+?)(?:=(\w+))?\]\]?/g;

function Bn(e, t) {
  const n = kt(e),
    a = e != "/" && e.endsWith("/");
  return "/" + n.map(r => r.replace(cn, (i, o, s, l) => {
    const c = t[l];
    if (!c) {
      if (o || s && c !== void 0) return "";
      throw new Error(`Missing parameter '${l}' in route ${e}`)
    }
    if (c.startsWith("/") || c.endsWith("/")) throw new Error(`Parameter '${l}' in route ${e} cannot start or end with a slash -- this would cause an invalid route like foo//bar`);
    return c
  })).filter(Boolean).join("/") + (a ? "/" : "")
}

function fn({
  nodes: e,
  server_loads: t,
  dictionary: n,
  matchers: a
}) {
  const r = new Set(t);
  return Object.entries(n).map(([s, [l, c, f]]) => {
    const {
      pattern: h,
      params: w
    } = on(s), d = {
      id: s,
      exec: u => {
        const m = h.exec(u);
        if (m) return ln(m, w, a)
      },
      errors: [1, ...f || []].map(u => e[u]),
      layouts: [0, ...c || []].map(o),
      leaf: i(l)
    };
    return d.errors.length = d.layouts.length = Math.max(d.errors.length, d.layouts.length), d
  });

  function i(s) {
    const l = s < 0;
    return l && (s = ~s), [l, e[s]]
  }

  function o(s) {
    return s === void 0 ? s : [r.has(s), e[s]]
  }
}

function St(e, t = JSON.parse) {
  try {
    return t(sessionStorage[e])
  } catch {}
}

function ct(e, t, n = JSON.stringify) {
  const a = n(t);
  try {
    sessionStorage[e] = a
  } catch {}
}
var _t;
const U = ((_t = globalThis.__sveltekit_n2jz3k) == null ? void 0 : _t.base) ?? "";
var wt;
const un = ((wt = globalThis.__sveltekit_n2jz3k) == null ? void 0 : wt.assets) ?? U ?? "",
  Et = "sveltekit:snapshot",
  Rt = "sveltekit:scroll",
  Ye = "sveltekit:states",
  xt = "sveltekit:pageurl",
  V = "sveltekit:history",
  H = "sveltekit:navigation",
  z = {
    tap: 1,
    hover: 2,
    viewport: 3,
    eager: 4,
    off: -1,
    false: -1
  },
  Ae = location.origin;

function Te(e) {
  if (e instanceof URL) return e;
  let t = document.baseURI;
  if (!t) {
    const n = document.getElementsByTagName("base");
    t = n.length ? n[0].href : document.URL
  }
  return new URL(e, t)
}

function M() {
  return {
    x: pageXOffset,
    y: pageYOffset
  }
}

function K(e, t) {
  return e.getAttribute(`data-sveltekit-${t}`)
}
const ft = {
  ...z,
  "": z.hover
};

function Lt(e) {
  let t = e.assignedSlot ?? e.parentNode;
  return (t == null ? void 0 : t.nodeType) === 11 && (t = t.host), t
}

function Ut(e, t) {
  for (; e && e !== t;) {
    if (e.nodeName.toUpperCase() === "A" && e.hasAttribute("href")) return e;
    e = Lt(e)
  }
}

function Ve(e, t, n) {
  let a;
  try {
    if (a = new URL(e instanceof SVGAElement ? e.href.baseVal : e.href, document.baseURI), n && a.hash.match(/^#[^/]/)) {
      const s = location.hash.split("#")[1] || "/";
      a.hash = `#${s}${a.hash}`
    }
  } catch {}
  const r = e instanceof SVGAElement ? e.target.baseVal : e.target,
    i = !a || !!r || $e(a, t, n) || (e.getAttribute("rel") || "").split(/\s+/).includes("external"),
    o = (a == null ? void 0 : a.origin) === Ae && e.hasAttribute("download");
  return {
    url: a,
    external: i,
    target: r,
    download: o
  }
}

function ye(e) {
  let t = null,
    n = null,
    a = null,
    r = null,
    i = null,
    o = null,
    s = e;
  for (; s && s !== document.documentElement;) a === null && (a = K(s, "preload-code")), r === null && (r = K(s, "preload-data")), t === null && (t = K(s, "keepfocus")), n === null && (n = K(s, "noscroll")), i === null && (i = K(s, "reload")), o === null && (o = K(s, "replacestate")), s = Lt(s);

  function l(c) {
    switch (c) {
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
    preload_code: ft[a ?? "off"],
    preload_data: ft[r ?? "off"],
    keepfocus: l(t),
    noscroll: l(n),
    reload: l(i),
    replace_state: l(o)
  }
}

function ut(e) {
  const t = Ke(e);
  let n = !0;

  function a() {
    n = !0, t.update(o => o)
  }

  function r(o) {
    n = !1, t.set(o)
  }

  function i(o) {
    let s;
    return t.subscribe(l => {
      (s === void 0 || n && l !== s) && o(s = l)
    })
  }
  return {
    notify: a,
    set: r,
    subscribe: i
  }
}
const At = {
  v: C
};

function dn() {
  const {
    set: e,
    subscribe: t
  } = Ke(!1);
  let n;
  async function a() {
    clearTimeout(n);
    try {
      const r = await fetch(`${un}/_app/version.json`, {
        headers: {
          pragma: "no-cache",
          "cache-control": "no-cache"
        }
      });
      if (!r.ok) return !1;
      const o = (await r.json()).version !== Ht;
      return o && (e(!0), At.v(), clearTimeout(n)), o
    } catch {
      return !1
    }
  }
  return {
    subscribe: t,
    check: a
  }
}

function $e(e, t, n) {
  return e.origin !== Ae || !e.pathname.startsWith(t) ? !0 : n ? e.pathname !== location.pathname : !1
}

function Wn(e) {}
const Tt = new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...Tt];
const hn = new Set([...Tt]);
[...hn];

function pn(e) {
  return e.filter(t => t != null)
}

function _e(e, t) {
  return e + "/" + t
}

function Xe(e) {
  return e instanceof Fe || e instanceof He ? e.status : 500
}

function gn(e) {
  return e instanceof He ? e.text : "Internal Error"
}
let E, te, De;
const mn = lt.toString().includes("$$") || /function \w+\(\) \{\}/.test(lt.toString()),
  dt = "a:";
var se, ie, le, ce, fe, ue, de, he, vt, pe, yt, ge, bt;
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
  url: new URL(dt)
}, te = {
  current: null
}, De = {
  current: !1
}) : (E = new(vt = class {
  constructor() {
    A(this, se, T({}));
    A(this, ie, T(null));
    A(this, le, T(null));
    A(this, ce, T({}));
    A(this, fe, T({
      id: null
    }));
    A(this, ue, T({}));
    A(this, de, T(-1));
    A(this, he, T(new URL(dt)))
  }
  get data() {
    return $(y(this, se))
  }
  set data(t) {
    I(y(this, se), t)
  }
  get form() {
    return $(y(this, ie))
  }
  set form(t) {
    I(y(this, ie), t)
  }
  get error() {
    return $(y(this, le))
  }
  set error(t) {
    I(y(this, le), t)
  }
  get params() {
    return $(y(this, ce))
  }
  set params(t) {
    I(y(this, ce), t)
  }
  get route() {
    return $(y(this, fe))
  }
  set route(t) {
    I(y(this, fe), t)
  }
  get state() {
    return $(y(this, ue))
  }
  set state(t) {
    I(y(this, ue), t)
  }
  get status() {
    return $(y(this, de))
  }
  set status(t) {
    I(y(this, de), t)
  }
  get url() {
    return $(y(this, he))
  }
  set url(t) {
    I(y(this, he), t)
  }
}, se = new WeakMap, ie = new WeakMap, le = new WeakMap, ce = new WeakMap, fe = new WeakMap, ue = new WeakMap, de = new WeakMap, he = new WeakMap, vt), te = new(yt = class {
  constructor() {
    A(this, pe, T(null))
  }
  get current() {
    return $(y(this, pe))
  }
  set current(t) {
    I(y(this, pe), t)
  }
}, pe = new WeakMap, yt), De = new(bt = class {
  constructor() {
    A(this, ge, T(!1))
  }
  get current() {
    return $(y(this, ge))
  }
  set current(t) {
    I(y(this, ge), t)
  }
}, ge = new WeakMap, bt), At.v = () => De.current = !0);

function $t(e) {
  Object.assign(E, e)
}
const {
  onMount: _n
} = Wt, wn = Gt ?? (e => e()), vn = new Set(["icon", "shortcut icon", "apple-touch-icon"]);
let X = null;
const q = St(Rt) ?? {},
  ne = St(Et) ?? {},
  N = {
    url: ut({}),
    page: ut({}),
    navigating: Ke(null),
    updated: dn()
  };

function Qe(e) {
  q[e] = M()
}

function yn(e, t) {
  let n = e + 1;
  for (; q[n];) delete q[n], n += 1;
  for (n = t + 1; ne[n];) delete ne[n], n += 1
}

function re(e, t = !1) {
  return t ? location.replace(e.href) : location.href = e.href, new Promise(C)
}
async function It() {
  if ("serviceWorker" in navigator) {
    const e = await navigator.serviceWorker.getRegistration(U || "/");
    e && await e.update()
  }
}
let Ze, Me, be, P, Be, S;
const ke = [],
  Se = [];
let v = null;

function Ee() {
  var e;
  (e = v == null ? void 0 : v.fork) == null || e.then(t => t == null ? void 0 : t.discard()), v = null, F = {
    element: void 0,
    href: void 0
  }
}
const we = new Map,
  et = new Set,
  bn = new Set,
  ee = new Set;
let _ = {
    branch: [],
    error: null,
    url: null
  },
  Pt = !1,
  Re = !1,
  ht = !0,
  ae = !1,
  Q = !1,
  jt = !1,
  tt = !1,
  nt, k, L, O;
const xe = new Set,
  pt = new Map,
  gt = new Map;
async function Hn(e, t, n) {
  var i, o, s, l;
  globalThis.__sveltekit_n2jz3k && (globalThis.__sveltekit_n2jz3k.query, globalThis.__sveltekit_n2jz3k.prerender), document.URL !== location.href && (location.href = location.href), S = e, await ((o = (i = e.hooks).init) == null ? void 0 : o.call(i)), Ze = fn(e), P = document.documentElement, Be = t, Me = e.nodes[0], be = e.nodes[1], Me(), be(), k = (s = history.state) == null ? void 0 : s[V], L = (l = history.state) == null ? void 0 : l[H], k || (k = L = Date.now(), history.replaceState({
    ...history.state,
    [V]: k,
    [H]: L
  }, ""));
  const a = q[k];

  function r() {
    a && (history.scrollRestoration = "manual", scrollTo(a.x, a.y))
  }
  n ? (r(), await On(Be, n)) : (await G({
    type: "enter",
    url: Te(S.hash ? qn(new URL(location.href)) : location.href),
    replace_state: !0
  }), r()), jn()
}

function kn() {
  ke.length = 0, tt = !1
}

function Ot(e) {
  Se.some(t => t == null ? void 0 : t.snapshot) && (ne[e] = Se.map(t => {
    var n;
    return (n = t == null ? void 0 : t.snapshot) == null ? void 0 : n.capture()
  }))
}

function Ct(e) {
  var t;
  (t = ne[e]) == null || t.forEach((n, a) => {
    var r, i;
    (i = (r = Se[a]) == null ? void 0 : r.snapshot) == null || i.restore(n)
  })
}

function mt() {
  Qe(k), ct(Rt, q), Ot(L), ct(Et, ne)
}
async function Nt(e, t, n, a) {
  let r, i;
  t.invalidateAll && Ee(), await G({
    type: "goto",
    url: Te(e),
    keepfocus: t.keepFocus,
    noscroll: t.noScroll,
    replace_state: t.replaceState,
    state: t.state,
    redirect_count: n,
    nav_token: a,
    accept: () => {
      if (t.invalidateAll) {
        tt = !0, r = new Set;
        for (const [o, s] of pt)
          for (const l of s.keys()) r.add(_e(o, l));
        i = new Set;
        for (const [o, s] of gt)
          for (const l of s.keys()) i.add(_e(o, l))
      }
      t.invalidate && t.invalidate.forEach(Pn)
    }
  }), t.invalidateAll && ve().then(ve).then(() => {
    for (const [o, s] of pt)
      for (const [l, {
          resource: c
        }] of s) r != null && r.has(_e(o, l)) && c.refresh();
    for (const [o, s] of gt)
      for (const [l, {
          resource: c
        }] of s) i != null && i.has(_e(o, l)) && c.reconnect()
  })
}
async function Sn(e) {
  if (e.id !== (v == null ? void 0 : v.id)) {
    Ee();
    const t = {};
    xe.add(t), v = {
      id: e.id,
      token: t,
      promise: Dt({
        ...e,
        preload: t
      }).then(n => (xe.delete(t), n.type === "loaded" && n.state.error && Ee(), n)),
      fork: null
    }
  }
  return v.promise
}
async function ze(e) {
  var n;
  const t = (n = await Ie(e, !1)) == null ? void 0 : n.route;
  t && await Promise.all([...t.layouts, t.leaf].filter(Boolean).map(a => a[1]()))
}
async function qt(e, t, n) {
  var r;
  const a = {
    params: _.params,
    route: {
      id: ((r = _.route) == null ? void 0 : r.id) ?? null
    },
    url: new URL(location.href)
  };
  if (_ = {
      ...e.state,
      nav: a
    }, $t(e.props.page), nt = new S.root({
      target: t,
      props: {
        ...e.props,
        stores: N,
        components: Se
      },
      hydrate: n,
      sync: !1,
      transformError: void 0
    }), await Promise.resolve(), Ct(L), n) {
    const i = {
      from: null,
      to: {
        ...a,
        scroll: q[k] ?? M()
      },
      willUnload: !1,
      type: "enter",
      complete: Promise.resolve()
    };
    ee.forEach(o => o(i))
  }
  Re = !0
}
async function Le({
  url: e,
  params: t,
  branch: n,
  errors: a,
  status: r,
  error: i,
  route: o,
  form: s
}) {
  let l = "never";
  if (U && (e.pathname === U || e.pathname === U + "/")) l = "always";
  else
    for (const u of n)(u == null ? void 0 : u.slash) !== void 0 && (l = u.slash);
  e.pathname = Jt(e.pathname, l), e.search = e.search;
  const c = {
    type: "loaded",
    state: {
      url: e,
      params: t,
      branch: n,
      error: i,
      route: o
    },
    props: {
      constructors: pn(n).map(u => u.node.component),
      page: Pe(E)
    }
  };
  s !== void 0 && (c.props.form = s);
  let f = {},
    h = !E,
    w = 0;
  for (let u = 0; u < Math.max(n.length, _.branch.length); u += 1) {
    const m = n[u],
      p = _.branch[u];
    (m == null ? void 0 : m.data) !== (p == null ? void 0 : p.data) && (h = !0), m && (f = {
      ...f,
      ...m.data
    }, h && (c.props[`data_${w}`] = f), w += 1)
  }
  return (!_.url || e.href !== _.url.href || _.error !== i || s !== void 0 && s !== E.form || h) && (c.props.page = {
    error: i,
    params: t,
    route: {
      id: (o == null ? void 0 : o.id) ?? null
    },
    state: {},
    status: r,
    url: new URL(e),
    form: s ?? null,
    data: h ? f : E.data
  }), c
}
async function rt({
  loader: e,
  parent: t,
  url: n,
  params: a,
  route: r,
  server_data_node: i
}) {
  var c, f;
  let o = null;
  const s = {
      dependencies: new Set,
      params: new Set,
      parent: !1,
      route: !1,
      url: !1,
      search_params: new Set
    },
    l = await e();
  return {
    node: l,
    loader: e,
    server: i,
    universal: (c = l.universal) != null && c.load ? {
      type: "data",
      data: o,
      uses: s
    } : null,
    data: o ?? (i == null ? void 0 : i.data) ?? null,
    slash: ((f = l.universal) == null ? void 0 : f.trailingSlash) ?? (i == null ? void 0 : i.slash)
  }
}

function En(e, t, n) {
  let a = e instanceof Request ? e.url : e;
  const r = new URL(a, n);
  r.origin === n.origin && (a = r.href.slice(n.origin.length));
  const i = Re ? nn(a, r.href, t) : tn(a, t);
  return {
    resolved: r,
    promise: i
  }
}

function Rn(e, t, n, a, r, i) {
  if (tt) return !0;
  if (!r) return !1;
  if (r.parent && e || r.route && t || r.url && n) return !0;
  for (const o of r.search_params)
    if (a.has(o)) return !0;
  for (const o of r.params)
    if (i[o] !== _.params[o]) return !0;
  for (const o of r.dependencies)
    if (ke.some(s => s(new URL(o)))) return !0;
  return !1
}

function at(e, t) {
  return (e == null ? void 0 : e.type) === "data" ? e : (e == null ? void 0 : e.type) === "skip" ? t ?? null : null
}

function xn(e, t) {
  if (!e) return new Set(t.searchParams.keys());
  const n = new Set([...e.searchParams.keys(), ...t.searchParams.keys()]);
  for (const a of n) {
    const r = e.searchParams.getAll(a),
      i = t.searchParams.getAll(a);
    r.every(o => i.includes(o)) && i.every(o => r.includes(o)) && n.delete(a)
  }
  return n
}

function Ln({
  error: e,
  url: t,
  route: n,
  params: a
}) {
  return {
    type: "loaded",
    state: {
      error: e,
      url: t,
      route: n,
      params: a,
      branch: []
    },
    props: {
      page: Pe(E),
      constructors: []
    }
  }
}
async function Dt({
  id: e,
  invalidating: t,
  url: n,
  params: a,
  route: r,
  preload: i
}) {
  if ((v == null ? void 0 : v.id) === e) return xe.delete(v.token), v.promise;
  const {
    errors: o,
    layouts: s,
    leaf: l
  } = r, c = [...s, l];
  o.forEach(p => p == null ? void 0 : p().catch(C)), c.forEach(p => p == null ? void 0 : p[1]().catch(C));
  const f = _.url ? e !== Ue(_.url) : !1,
    h = _.route ? r.id !== _.route.id : !1,
    w = xn(_.url, n);
  let d = !1;
  const u = c.map(async (p, g) => {
    var j;
    if (!p) return;
    const b = _.branch[g];
    return p[1] === (b == null ? void 0 : b.loader) && !Rn(d, h, f, w, (j = b.universal) == null ? void 0 : j.uses, a) ? b : (d = !0, rt({
      loader: p[1],
      url: n,
      params: a,
      route: r,
      parent: async () => {
        var me;
        const D = {};
        for (let B = 0; B < g; B += 1) Object.assign(D, (me = await u[B]) == null ? void 0 : me.data);
        return D
      },
      server_data_node: at(p[0] ? {
        type: "skip"
      } : null, p[0] ? b == null ? void 0 : b.server : void 0)
    }))
  });
  for (const p of u) p.catch(C);
  const m = [];
  for (let p = 0; p < c.length; p += 1)
    if (c[p]) try {
      m.push(await u[p])
    } catch (g) {
      if (g instanceof Ge) return {
        type: "redirect",
        location: g.location
      };
      if (xe.has(i)) return Ln({
        error: await oe(g, {
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
      let b = Xe(g),
        x;
      if (g instanceof Fe) x = g.body;
      else {
        if (await N.updated.check()) return await It(), await re(n);
        x = await oe(g, {
          params: a,
          url: n,
          route: {
            id: r.id
          }
        })
      }
      const j = await Un(p, m, o);
      return j ? Le({
        url: n,
        params: a,
        branch: m.slice(0, j.idx).concat(j.node),
        errors: o,
        status: b,
        error: x,
        route: r
      }) : await Vt(n, {
        id: r.id
      }, x, b)
    } else m.push(void 0);
  return Le({
    url: n,
    params: a,
    branch: m,
    errors: o,
    status: 200,
    error: null,
    route: r,
    form: t ? void 0 : null
  })
}
async function Un(e, t, n) {
  for (; e--;)
    if (n[e]) {
      let a = e;
      for (; !t[a];) a -= 1;
      try {
        return {
          idx: a + 1,
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
async function ot({
  status: e,
  error: t,
  url: n,
  route: a
}) {
  const r = {};
  let i = null;
  try {
    const o = await rt({
        loader: Me,
        url: n,
        params: r,
        route: a,
        parent: () => Promise.resolve({}),
        server_data_node: at(i)
      }),
      s = {
        node: await be(),
        loader: be,
        universal: null,
        server: null,
        data: null
      };
    return Le({
      url: n,
      params: r,
      branch: [o, s],
      status: e,
      error: t,
      errors: [],
      route: null
    })
  } catch (o) {
    if (o instanceof Ge) return Nt(new URL(o.location, location.href), {}, 0);
    throw o
  }
}
async function An(e) {
  const t = e.href;
  if (we.has(t)) return we.get(t);
  let n;
  try {
    const a = (async () => {
      let r = await S.hooks.reroute({
        url: new URL(e),
        fetch: async (i, o) => En(i, o, e).promise
      }) ?? e;
      if (typeof r == "string") {
        const i = new URL(e);
        S.hash ? i.hash = r : i.pathname = r, r = i
      }
      return r
    })();
    we.set(t, a), n = await a
  } catch {
    we.delete(t);
    return
  }
  return n
}
async function Ie(e, t) {
  if (e && !$e(e, U, S.hash)) {
    const n = await An(e);
    if (!n) return;
    const a = Tn(n);
    for (const r of Ze) {
      const i = r.exec(a);
      if (i) return {
        id: Ue(e),
        invalidating: t,
        route: r,
        params: Xt(i),
        url: e
      }
    }
  }
}

function Tn(e) {
  return Yt(S.hash ? e.hash.replace(/^#/, "").replace(/[?#].+/, "") : e.pathname.slice(U.length)) || "/"
}

function Ue(e) {
  return (S.hash ? e.hash.replace(/^#/, "") : e.pathname) + e.search
}

function zt({
  url: e,
  type: t,
  intent: n,
  delta: a,
  event: r,
  scroll: i
}) {
  let o = !1;
  const s = st(_, n, e, t, i ?? null);
  a !== void 0 && (s.navigation.delta = a), r !== void 0 && (s.navigation.event = r);
  const l = {
    ...s.navigation,
    cancel: () => {
      o = !0, s.reject(new Error("navigation cancelled"))
    }
  };
  return ae || et.forEach(c => c(l)), o ? null : s
}
async function G({
  type: e,
  url: t,
  popped: n,
  keepfocus: a,
  noscroll: r,
  replace_state: i,
  state: o = {},
  redirect_count: s = 0,
  nav_token: l = {},
  accept: c = C,
  block: f = C,
  event: h
}) {
  var B;
  const w = O;
  O = l;
  const d = await Ie(t, !1),
    u = e === "enter" ? st(_, d, t, e) : zt({
      url: t,
      type: e,
      delta: n == null ? void 0 : n.delta,
      intent: d,
      scroll: n == null ? void 0 : n.scroll,
      event: h
    });
  if (!u) {
    f(), O === l && (O = w);
    return
  }
  const m = k,
    p = L;
  c(), ae = !0, Re && u.navigation.type !== "enter" && N.navigating.set(te.current = u.navigation);
  let g = d && await Dt(d);
  if (!g) {
    if ($e(t, U, S.hash)) return await re(t, i);
    g = await Vt(t, {
      id: null
    }, await oe(new He(404, "Not Found", `Not found: ${t.pathname}`), {
      url: t,
      params: {},
      route: {
        id: null
      }
    }), 404, i)
  }
  if (t = (d == null ? void 0 : d.url) || t, O !== l) return u.reject(new Error("navigation aborted")), !1;
  if (g.type === "redirect") {
    if (s < 20) {
      await G({
        type: e,
        url: new URL(g.location, t),
        popped: n,
        keepfocus: a,
        noscroll: r,
        replace_state: i,
        state: o,
        redirect_count: s + 1,
        nav_token: l
      }), u.fulfil(void 0);
      return
    }
    g = await ot({
      status: 500,
      error: await oe(new Error("Redirect loop"), {
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
  } else g.props.page.status >= 400 && await N.updated.check() && (await It(), await re(t, i));
  if (kn(), Qe(m), Ot(p), g.props.page.url.pathname !== t.pathname && (t.pathname = g.props.page.url.pathname), o = n ? n.state : o, !n) {
    const R = i ? 0 : 1,
      J = {
        [V]: k += R,
        [H]: L += R,
        [Ye]: o
      };
    (i ? history.replaceState : history.pushState).call(history, J, "", t), i || yn(k, L)
  }
  const b = d && (v == null ? void 0 : v.id) === d.id ? v.fork : null;
  v != null && v.fork && !b ? Ee() : (v = null, F = {
    element: void 0,
    href: void 0
  }), g.props.page.state = o;
  let x;
  if (Re) {
    const R = (await Promise.all(Array.from(bn, Y => Y(u.navigation)))).filter(Y => typeof Y == "function");
    if (R.length > 0) {
      let Y = function() {
        R.forEach(Oe => {
          ee.delete(Oe)
        })
      };
      R.push(Y), R.forEach(Oe => {
        ee.add(Oe)
      })
    }
    const J = u.navigation.to;
    _ = {
      ...g.state,
      nav: {
        params: J.params,
        route: J.route,
        url: J.url
      }
    }, g.props.page && (g.props.page.url = t);
    const je = b && await b;
    je ? x = je.commit() : (X = null, nt.$set(g.props), X && Object.assign(g.props.page, X), $t(g.props.page), x = (B = Ft) == null ? void 0 : B()), jt = !0
  } else await qt(g, Be, !1);
  const {
    activeElement: j
  } = document;
  if (await x, await ve(), await ve(), O !== l) return u.reject(new Error("navigation aborted")), !1;
  g.props.page && X && Object.assign(g.props.page, X);
  let D = null;
  if (ht) {
    const R = n ? n.scroll : r ? M() : null;
    R ? scrollTo(R.x, R.y) : (D = t.hash && document.getElementById(Mt(t))) ? D.scrollIntoView() : scrollTo(0, 0)
  }
  const me = document.activeElement !== j && document.activeElement !== document.body;
  !a && !me && Nn(t, !D), ht = !0, ae = !1, e === "popstate" && Ct(L), u.fulfil(void 0), u.navigation.to && (u.navigation.to.scroll = M()), ee.forEach(R => R(u.navigation)), N.navigating.set(te.current = null)
}
async function Vt(e, t, n, a, r) {
  return e.origin === Ae && e.pathname === location.pathname && !Pt ? await ot({
    status: a,
    error: n,
    url: e,
    route: t
  }) : await re(e, r)
}
let F = {
  element: void 0,
  href: void 0
};

function $n() {
  let e, t;
  P.addEventListener("mousemove", o => {
    const s = o.target;
    clearTimeout(e), e = setTimeout(() => {
      r(s, z.hover)
    }, 20)
  });

  function n(o) {
    o.defaultPrevented || r(o.composedPath()[0], z.tap)
  }
  P.addEventListener("mousedown", n), P.addEventListener("touchstart", n, {
    passive: !0
  });
  const a = new IntersectionObserver(o => {
    for (const s of o) s.isIntersecting && (ze(new URL(s.target.href)), a.unobserve(s.target))
  }, {
    threshold: 0
  });
  async function r(o, s) {
    const l = Ut(o, P),
      c = l === F.element && (l == null ? void 0 : l.href) === F.href && s >= t;
    if (!l || c) return;
    const {
      url: f,
      external: h,
      download: w
    } = Ve(l, U, S.hash);
    if (h || w) return;
    const d = ye(l),
      u = f && Ue(_.url) === Ue(f);
    if (!(d.reload || u))
      if (s <= d.preload_data) {
        F = {
          element: l,
          href: l.href
        }, t = z.tap;
        const m = await Ie(f, !1);
        if (!m) return;
        Sn(m)
      } else s <= d.preload_code && (F = {
        element: l,
        href: l.href
      }, t = s, ze(f))
  }

  function i() {
    a.disconnect();
    for (const o of P.querySelectorAll("a")) {
      const {
        url: s,
        external: l,
        download: c
      } = Ve(o, U, S.hash);
      if (l || c) continue;
      const f = ye(o);
      f.reload || (f.preload_code === z.viewport && a.observe(o), f.preload_code === z.eager && ze(s))
    }
  }
  ee.add(i), i()
}

function oe(e, t) {
  if (e instanceof Fe) return e.body;
  const n = Xe(e),
    a = gn(e);
  return S.hooks.handleError({
    error: e,
    event: t,
    status: n,
    message: a
  }) ?? {
    message: a
  }
}

function In(e, t) {
  _n(() => (e.add(t), () => {
    e.delete(t)
  }))
}

function Jn(e) {
  In(et, e)
}

function Yn(e, t = {}) {
  return e = new URL(Te(e)), e.origin !== Ae ? Promise.reject(new Error("goto: invalid URL")) : Nt(e, t, 0)
}

function Pn(e) {
  if (typeof e == "function") ke.push(e);
  else {
    const {
      href: t
    } = new URL(e, location.href);
    ke.push(n => n.href === t)
  }
}

function Xn(e, t) {
  const n = {
    [V]: k,
    [H]: L,
    [xt]: E.url.href,
    [Ye]: t
  };
  history.replaceState(n, "", Te(e)), E.state = t, nt.$set({
    page: wn(() => Pe(E))
  })
}

function jn() {
  var t;
  history.scrollRestoration = "manual", addEventListener("beforeunload", n => {
    let a = !1;
    if (mt(), !ae) {
      const r = st(_, void 0, null, "leave"),
        i = {
          ...r.navigation,
          cancel: () => {
            a = !0, r.reject(new Error("navigation cancelled"))
          }
        };
      et.forEach(o => o(i))
    }
    a ? (n.preventDefault(), n.returnValue = "") : history.scrollRestoration = "auto"
  }), addEventListener("visibilitychange", () => {
    document.visibilityState === "hidden" && mt()
  }), (t = navigator.connection) != null && t.saveData || $n(), P.addEventListener("click", async n => {
    if (n.button || n.which !== 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey || n.defaultPrevented) return;
    const a = Ut(n.composedPath()[0], P);
    if (!a) return;
    const {
      url: r,
      external: i,
      target: o,
      download: s
    } = Ve(a, U, S.hash);
    if (!r) return;
    if (o === "_parent" || o === "_top") {
      if (window.parent !== window) return
    } else if (o && o !== "_self") return;
    const l = ye(a);
    if (!(a instanceof SVGAElement) && r.protocol !== location.protocol && !(r.protocol === "https:" || r.protocol === "http:") || s) return;
    const [f, h] = (S.hash ? r.hash.replace(/^#/, "") : r.href).split("#"), w = f === Ne(location);
    if (i || l.reload && (!w || !h)) {
      zt({
        url: r,
        type: "link",
        event: n
      }) ? ae = !0 : n.preventDefault();
      return
    }
    if (h !== void 0 && w) {
      const [, d] = _.url.href.split("#");
      if (d === h) {
        if (n.preventDefault(), h === "" || h === "top" && a.ownerDocument.getElementById("top") === null) scrollTo({
          top: 0
        });
        else {
          const u = a.ownerDocument.getElementById(decodeURIComponent(h));
          u && (u.scrollIntoView(), u.focus())
        }
        return
      }
      if (Q = !0, Qe(k), e(r), !l.replace_state) return;
      Q = !1
    }
    n.preventDefault(), await new Promise(d => {
      requestAnimationFrame(() => {
        setTimeout(d, 0)
      }), setTimeout(d, 100)
    }), await G({
      type: "link",
      url: r,
      keepfocus: l.keepfocus,
      noscroll: l.noscroll,
      replace_state: l.replace_state ?? r.href === location.href,
      event: n
    })
  }), P.addEventListener("submit", n => {
    if (n.defaultPrevented) return;
    const a = HTMLFormElement.prototype.cloneNode.call(n.target),
      r = n.submitter;
    if (((r == null ? void 0 : r.formTarget) || a.target) === "_blank" || ((r == null ? void 0 : r.formMethod) || a.method) !== "get") return;
    const s = new URL((r == null ? void 0 : r.hasAttribute("formaction")) && (r == null ? void 0 : r.formAction) || a.action);
    if ($e(s, U, !1)) return;
    const l = n.target,
      c = ye(l);
    if (c.reload) return;
    n.preventDefault(), n.stopPropagation();
    const f = new FormData(l, r);
    s.search = new URLSearchParams(f).toString(), G({
      type: "form",
      url: s,
      keepfocus: c.keepfocus,
      noscroll: c.noscroll,
      replace_state: c.replace_state ?? s.href === location.href,
      event: n
    })
  }), addEventListener("popstate", async n => {
    var a;
    if (!We) {
      if ((a = n.state) != null && a[V]) {
        const r = n.state[V];
        if (O = {}, r === k) return;
        const i = q[r],
          o = n.state[Ye] ?? {},
          s = new URL(n.state[xt] ?? location.href),
          l = n.state[H],
          c = _.url ? Ne(location) === Ne(_.url) : !1;
        if (l === L && (jt || c)) {
          o !== E.state && (E.state = o), e(s), q[k] = M(), i && scrollTo(i.x, i.y), k = r;
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
            k = r, L = l
          },
          block: () => {
            history.go(-h)
          },
          nav_token: O,
          event: n
        })
      } else if (!Q) {
        const r = new URL(location.href);
        e(r), S.hash && location.reload()
      }
    }
  }), addEventListener("hashchange", () => {
    Q && (Q = !1, history.replaceState({
      ...history.state,
      [V]: ++k,
      [H]: L
    }, "", location.href))
  });
  for (const n of document.querySelectorAll("link")) vn.has(n.rel) && (n.href = n.href);
  addEventListener("pageshow", n => {
    n.persisted && N.navigating.set(te.current = null)
  });

  function e(n) {
    _.url = E.url = n, N.page.set(Pe(E)), N.page.notify()
  }
}
async function On(e, {
  status: t = 200,
  error: n,
  node_ids: a,
  params: r,
  route: i,
  server_route: o,
  data: s,
  form: l
}) {
  Pt = !0;
  const c = new URL(location.href);
  let f;
  ({
    params: r = {},
    route: i = {
      id: null
    }
  } = await Ie(c, !1) || {}), f = Ze.find(({
    id: d
  }) => d === i.id);
  let h, w = !0;
  try {
    const d = a.map(async (m, p) => {
        const g = s[p];
        return g != null && g.uses && (g.uses = Cn(g.uses)), rt({
          loader: S.nodes[m],
          url: c,
          params: r,
          route: i,
          parent: async () => {
            const b = {};
            for (let x = 0; x < p; x += 1) Object.assign(b, (await d[x]).data);
            return b
          },
          server_data_node: at(g)
        })
      }),
      u = await Promise.all(d);
    if (f) {
      const m = f.layouts;
      for (let p = 0; p < m.length; p++) m[p] || u.splice(p, 0, void 0)
    }
    h = await Le({
      url: c,
      params: r,
      branch: u,
      status: t,
      error: n,
      errors: f == null ? void 0 : f.errors,
      form: l,
      route: f ?? null
    })
  } catch (d) {
    if (d instanceof Ge) {
      await re(new URL(d.location, location.href));
      return
    }
    h = await ot({
      status: Xe(d),
      error: await oe(d, {
        url: c,
        params: r,
        route: i
      }),
      url: c,
      route: i
    }), e.textContent = "", w = !1
  } finally {}
  h.props.page && (h.props.page.state = {}), await qt(h, e, w)
}

function Cn(e) {
  return {
    dependencies: new Set((e == null ? void 0 : e.dependencies) ?? []),
    params: new Set((e == null ? void 0 : e.params) ?? []),
    parent: !!(e != null && e.parent),
    route: !!(e != null && e.route),
    url: !!(e != null && e.url),
    search_params: new Set((e == null ? void 0 : e.search_params) ?? [])
  }
}
let We = !1;

function Nn(e, t = !0) {
  const n = document.querySelector("[autofocus]");
  if (n) n.focus();
  else {
    const a = Mt(e);
    if (a && document.getElementById(a)) {
      const {
        x: i,
        y: o
      } = M();
      setTimeout(() => {
        const s = history.state;
        We = !0, location.replace(new URL(`#${a}`, location.href)), history.replaceState(s, "", e), t && scrollTo(i, o), We = !1
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
              l = r.getRangeAt(o);
            if (s.commonAncestorContainer !== l.commonAncestorContainer || s.startContainer !== l.startContainer || s.endContainer !== l.endContainer || s.startOffset !== l.startOffset || s.endOffset !== l.endOffset) return
          }
          r.removeAllRanges()
        }
      })
    }
  }
}

function st(e, t, n, a, r = null) {
  var c, f;
  let i, o;
  const s = new Promise((h, w) => {
    i = h, o = w
  });
  return s.catch(C), {
    navigation: {
      from: {
        params: e.params,
        route: {
          id: ((c = e.route) == null ? void 0 : c.id) ?? null
        },
        url: e.url,
        scroll: M()
      },
      to: n && {
        params: (t == null ? void 0 : t.params) ?? null,
        route: {
          id: ((f = t == null ? void 0 : t.route) == null ? void 0 : f.id) ?? null
        },
        url: n,
        scroll: r
      },
      willUnload: !t,
      type: a,
      complete: s
    },
    fulfil: i,
    reject: o
  }
}

function Pe(e) {
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

function qn(e) {
  const t = new URL(e);
  return t.hash = decodeURIComponent(e.hash), t
}

function Mt(e) {
  let t;
  if (S.hash) {
    const [, , n] = e.hash.split("#", 3);
    t = n ?? ""
  } else t = e.hash.slice(1);
  return decodeURIComponent(t)
}
export {
  Xn as a, U as b, Jn as c, Hn as d, Yn as g, Wn as l, E as p, Bn as r, N as s
};
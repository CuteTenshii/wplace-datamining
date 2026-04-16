var ee = t => {
  throw TypeError(t)
};
var De = (t, e, n) => e.has(t) || ee("Cannot " + n);
var w = (t, e, n) => (De(t, e, "read from private field"), n ? n.call(t) : e.get(t)),
  A = (t, e, n) => e.has(t) ? ee("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n);
import {
  o as ne,
  s as qe
} from "./CA8HqG-3.js";
import {
  bq as $t,
  bk as Ve,
  e as T,
  i as $,
  h as I,
  V as pt,
  Q as re,
  U as Be,
  x as Me
} from "./CP18E9YK.js";
import {
  v as We
} from "./29rwsH-q.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "6f22cff8187de3395cfbf72b619a597cbd559223"
    };
    var e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "3cd2f9fe-d891-4ac7-8880-142eb55e5b2c", t._sentryDebugIdIdentifier = "sentry-dbid-3cd2f9fe-d891-4ac7-8880-142eb55e5b2c")
  } catch {}
})();
const K = [];

function Vt(t, e = $t) {
  let n = null;
  const a = new Set;

  function r(i) {
    if (Ve(t, i) && (t = i, n)) {
      const c = !K.length;
      for (const l of a) l[1](), K.push(l, t);
      if (c) {
        for (let l = 0; l < K.length; l += 2) K[l][0](K[l + 1]);
        K.length = 0
      }
    }
  }

  function s(i) {
    r(i(t))
  }

  function o(i, c = $t) {
    const l = [i, c];
    return a.add(l), a.size === 1 && (n = e(r, s) || $t), i(t), () => {
      a.delete(l), a.size === 0 && n && (n(), n = null)
    }
  }
  return {
    set: r,
    update: s,
    subscribe: o
  }
}
class Bt {
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
class Mt {
  constructor(e, n) {
    this.status = e, this.location = n
  }
}
class Wt extends Error {
  constructor(e, n, a) {
    super(a), this.status = e, this.text = n
  }
}
new URL("sveltekit-internal://");

function Ke(t, e) {
  return t === "/" || e === "ignore" ? t : e === "never" ? t.endsWith("/") ? t.slice(0, -1) : t : e === "always" && !t.endsWith("/") ? t + "/" : t
}

function Ye(t) {
  return t.split("%25").map(decodeURI).join("%25")
}

function ze(t) {
  for (const e in t) t[e] = decodeURIComponent(t[e]);
  return t
}

function It({
  href: t
}) {
  return t.split("#")[0]
}

function Fe(...t) {
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
new TextDecoder;

function Ge(t) {
  const e = atob(t),
    n = new Uint8Array(e.length);
  for (let a = 0; a < e.length; a++) n[a] = e.charCodeAt(a);
  return n
}
const He = window.fetch;
window.fetch = (t, e) => ((t instanceof Request ? t.method : (e == null ? void 0 : e.method) || "GET") !== "GET" && H.delete(Kt(t)), He(t, e));
const H = new Map;

function Je(t, e) {
  const n = Kt(t, e),
    a = document.querySelector(n);
  if (a != null && a.textContent) {
    a.remove();
    let {
      body: r,
      ...s
    } = JSON.parse(a.textContent);
    const o = a.getAttribute("data-ttl");
    return o && H.set(n, {
      body: r,
      init: s,
      ttl: 1e3 * Number(o)
    }), a.getAttribute("data-b64") !== null && (r = Ge(r)), Promise.resolve(new Response(r, s))
  }
  return window.fetch(t, e)
}

function Xe(t, e, n) {
  if (H.size > 0) {
    const a = Kt(t, n),
      r = H.get(a);
    if (r) {
      if (performance.now() < r.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(n == null ? void 0 : n.cache)) return new Response(r.body, r.init);
      H.delete(a)
    }
  }
  return window.fetch(e, n)
}

function Kt(t, e) {
  let a = `script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;
  if (e != null && e.headers || e != null && e.body) {
    const r = [];
    e.headers && r.push([...new Headers(e.headers)].join(",")), e.body && (typeof e.body == "string" || ArrayBuffer.isView(e.body)) && r.push(e.body), a += `[data-hash="${Fe(...r)}"]`
  }
  return a
}
const Qe = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;

function Ze(t) {
  const e = [];
  return {
    pattern: t === "/" ? /^\/$/ : new RegExp(`^${me(t).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return e.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/([^]*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(s)return e.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const o=a.split(/\[(.+?)\](?!\])/);return"/"+o.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Ot(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Ot(String.fromCharCode(...c.slice(2).split("-").map(_=>parseInt(_,16))));const d=Qe.exec(c),[,u,v,f,h]=d;return e.push({name:f,matcher:h,optional:!!u,rest:!!v,chained:v?l===1&&o[0]==="":!1}),v?"([^]*?)":u?"([^/]*)?":"([^/]+?)"}return Ot(c)}).join("")}).join("")}/?$`),
    params: e
  }
}

function tn(t) {
  return t !== "" && !/^\([^)]+\)$/.test(t)
}

function me(t) {
  return t.slice(1).split("/").filter(tn)
}

function en(t, e, n) {
  const a = {},
    r = t.slice(1),
    s = r.filter(i => i !== void 0);
  let o = 0;
  for (let i = 0; i < e.length; i += 1) {
    const c = e[i];
    let l = r[i - o];
    if (c.chained && c.rest && o && (l = r.slice(i - o, i + 1).filter(d => d).join("/"), o = 0), l === void 0) {
      c.rest && (a[c.name] = "");
      continue
    }
    if (!c.matcher || n[c.matcher](l)) {
      a[c.name] = l;
      const d = e[i + 1],
        u = r[i + 1];
      d && !d.rest && d.optional && u && c.chained && (o = 0), !d && !u && Object.keys(a).length === s.length && (o = 0);
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

function Ot(t) {
  return t.normalize().replace(/[[\]]/g, "\\$&").replace(/%/g, "%25").replace(/\//g, "%2[Ff]").replace(/\?/g, "%3[Ff]").replace(/#/g, "%23").replace(/[.*+?^${}()|\\]/g, "\\$&")
}
const nn = /\[(\[)?(\.\.\.)?(\w+?)(?:=(\w+))?\]\]?/g;

function Nn(t, e) {
  const n = me(t),
    a = t != "/" && t.endsWith("/");
  return "/" + n.map(r => r.replace(nn, (s, o, i, c) => {
    const l = e[c];
    if (!l) {
      if (o || i && l !== void 0) return "";
      throw new Error(`Missing parameter '${c}' in route ${t}`)
    }
    if (l.startsWith("/") || l.endsWith("/")) throw new Error(`Parameter '${c}' in route ${t} cannot start or end with a slash -- this would cause an invalid route like foo//bar`);
    return l
  })).filter(Boolean).join("/") + (a ? "/" : "")
}

function rn({
  nodes: t,
  server_loads: e,
  dictionary: n,
  matchers: a
}) {
  const r = new Set(e);
  return Object.entries(n).map(([i, [c, l, d]]) => {
    const {
      pattern: u,
      params: v
    } = Ze(i), f = {
      id: i,
      exec: h => {
        const _ = u.exec(h);
        if (_) return en(_, v, a)
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
    return i === void 0 ? i : [r.has(i), t[i]]
  }
}

function _e(t, e = JSON.parse) {
  try {
    return e(sessionStorage[t])
  } catch {}
}

function ae(t, e, n = JSON.stringify) {
  const a = n(e);
  try {
    sessionStorage[t] = a
  } catch {}
}
var ue;
const U = ((ue = globalThis.__sveltekit_11h6hcr) == null ? void 0 : ue.base) ?? "";
var de;
const an = ((de = globalThis.__sveltekit_11h6hcr) == null ? void 0 : de.assets) ?? U ?? "",
  we = "sveltekit:snapshot",
  ye = "sveltekit:scroll",
  Yt = "sveltekit:states",
  ve = "sveltekit:pageurl",
  V = "sveltekit:history",
  F = "sveltekit:navigation",
  D = {
    tap: 1,
    hover: 2,
    viewport: 3,
    eager: 4,
    off: -1,
    false: -1
  },
  Et = location.origin;

function St(t) {
  if (t instanceof URL) return t;
  let e = document.baseURI;
  if (!e) {
    const n = document.getElementsByTagName("base");
    e = n.length ? n[0].href : document.URL
  }
  return new URL(t, e)
}

function Rt() {
  return {
    x: pageXOffset,
    y: pageYOffset
  }
}

function Y(t, e) {
  return t.getAttribute(`data-sveltekit-${e}`)
}
const oe = {
  ...D,
  "": D.hover
};

function be(t) {
  let e = t.assignedSlot ?? t.parentNode;
  return (e == null ? void 0 : e.nodeType) === 11 && (e = e.host), e
}

function ke(t, e) {
  for (; t && t !== e;) {
    if (t.nodeName.toUpperCase() === "A" && t.hasAttribute("href")) return t;
    t = be(t)
  }
}

function jt(t, e, n) {
  let a;
  try {
    if (a = new URL(t instanceof SVGAElement ? t.href.baseVal : t.href, document.baseURI), n && a.hash.match(/^#[^/]/)) {
      const i = location.hash.split("#")[1] || "/";
      a.hash = `#${i}${a.hash}`
    }
  } catch {}
  const r = t instanceof SVGAElement ? t.target.baseVal : t.target,
    s = !a || !!r || xt(a, e, n) || (t.getAttribute("rel") || "").split(/\s+/).includes("external"),
    o = (a == null ? void 0 : a.origin) === Et && t.hasAttribute("download");
  return {
    url: a,
    external: s,
    target: r,
    download: o
  }
}

function gt(t) {
  let e = null,
    n = null,
    a = null,
    r = null,
    s = null,
    o = null,
    i = t;
  for (; i && i !== document.documentElement;) a === null && (a = Y(i, "preload-code")), r === null && (r = Y(i, "preload-data")), e === null && (e = Y(i, "keepfocus")), n === null && (n = Y(i, "noscroll")), s === null && (s = Y(i, "reload")), o === null && (o = Y(i, "replacestate")), i = be(i);

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
    preload_code: oe[a ?? "off"],
    preload_data: oe[r ?? "off"],
    keepfocus: c(e),
    noscroll: c(n),
    reload: c(s),
    replace_state: c(o)
  }
}

function se(t) {
  const e = Vt(t);
  let n = !0;

  function a() {
    n = !0, e.update(o => o)
  }

  function r(o) {
    n = !1, e.set(o)
  }

  function s(o) {
    let i;
    return e.subscribe(c => {
      (i === void 0 || n && c !== i) && o(i = c)
    })
  }
  return {
    notify: a,
    set: r,
    subscribe: s
  }
}
const Ee = {
  v: () => {}
};

function on() {
  const {
    set: t,
    subscribe: e
  } = Vt(!1);
  let n;
  async function a() {
    clearTimeout(n);
    try {
      const r = await fetch(`${an}/_app/version.json`, {
        headers: {
          pragma: "no-cache",
          "cache-control": "no-cache"
        }
      });
      if (!r.ok) return !1;
      const o = (await r.json()).version !== We;
      return o && (t(!0), Ee.v(), clearTimeout(n)), o
    } catch {
      return !1
    }
  }
  return {
    subscribe: e,
    check: a
  }
}

function xt(t, e, n) {
  return t.origin !== Et || !t.pathname.startsWith(e) ? !0 : n ? !(t.pathname === e + "/" || t.pathname === e + "/index.html" || t.protocol === "file:" && t.pathname.replace(/\/[^/]+\.html?$/, "") === e) : !1
}

function Dn(t) {}
const Se = new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...Se];
const sn = new Set([...Se]);
[...sn];

function cn(t) {
  return t.filter(e => e != null)
}

function zt(t) {
  return t instanceof Bt || t instanceof Wt ? t.status : 500
}

function ln(t) {
  return t instanceof Wt ? t.text : "Internal Error"
}
let S, X, Pt;
const fn = ne.toString().includes("$$") || /function \w+\(\) \{\}/.test(ne.toString());
var nt, rt, at, ot, st, it, ct, lt, he, ft, pe, ut, ge;
fn ? (S = {
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
}, Pt = {
  current: !1
}) : (S = new(he = class {
  constructor() {
    A(this, nt, T({}));
    A(this, rt, T(null));
    A(this, at, T(null));
    A(this, ot, T({}));
    A(this, st, T({
      id: null
    }));
    A(this, it, T({}));
    A(this, ct, T(-1));
    A(this, lt, T(new URL("https://example.com")))
  }
  get data() {
    return $(w(this, nt))
  }
  set data(e) {
    I(w(this, nt), e)
  }
  get form() {
    return $(w(this, rt))
  }
  set form(e) {
    I(w(this, rt), e)
  }
  get error() {
    return $(w(this, at))
  }
  set error(e) {
    I(w(this, at), e)
  }
  get params() {
    return $(w(this, ot))
  }
  set params(e) {
    I(w(this, ot), e)
  }
  get route() {
    return $(w(this, st))
  }
  set route(e) {
    I(w(this, st), e)
  }
  get state() {
    return $(w(this, it))
  }
  set state(e) {
    I(w(this, it), e)
  }
  get status() {
    return $(w(this, ct))
  }
  set status(e) {
    I(w(this, ct), e)
  }
  get url() {
    return $(w(this, lt))
  }
  set url(e) {
    I(w(this, lt), e)
  }
}, nt = new WeakMap, rt = new WeakMap, at = new WeakMap, ot = new WeakMap, st = new WeakMap, it = new WeakMap, ct = new WeakMap, lt = new WeakMap, he), X = new(pe = class {
  constructor() {
    A(this, ft, T(null))
  }
  get current() {
    return $(w(this, ft))
  }
  set current(e) {
    I(w(this, ft), e)
  }
}, ft = new WeakMap, pe), Pt = new(ge = class {
  constructor() {
    A(this, ut, T(!1))
  }
  get current() {
    return $(w(this, ut))
  }
  set current(e) {
    I(w(this, ut), e)
  }
}, ut = new WeakMap, ge), Ee.v = () => Pt.current = !0);

function Re(t) {
  Object.assign(S, t)
}
const {
  onMount: un
} = qe, dn = Me ?? (t => t()), hn = new Set(["icon", "shortcut icon", "apple-touch-icon"]), B = _e(ye) ?? {}, Q = _e(we) ?? {}, N = {
  url: se({}),
  page: se({}),
  navigating: Vt(null),
  updated: on()
};

function Ft(t) {
  B[t] = Rt()
}

function pn(t, e) {
  let n = t + 1;
  for (; B[n];) delete B[n], n += 1;
  for (n = e + 1; Q[n];) delete Q[n], n += 1
}

function Z(t, e = !1) {
  return e ? location.replace(t.href) : location.href = t.href, new Promise(() => {})
}
async function xe() {
  if ("serviceWorker" in navigator) {
    const t = await navigator.serviceWorker.getRegistration(U || "/");
    t && await t.update()
  }
}

function ie() {}
let Gt, Nt, mt, P, Dt, b;
const _t = [],
  wt = [];
let y = null;

function Le() {
  var t;
  (t = y == null ? void 0 : y.fork) == null || t.then(e => e == null ? void 0 : e.discard()), y = null
}
const ht = new Map,
  Ht = new Set,
  gn = new Set,
  J = new Set;
let m = {
    branch: [],
    error: null,
    url: null
  },
  Ue = !1,
  yt = !1,
  ce = !0,
  tt = !1,
  G = !1,
  Ae = !1,
  Jt = !1,
  Lt, E, L, q;
const vt = new Set,
  le = new Map;
async function Mn(t, e, n) {
  var s, o, i, c, l;
  (s = globalThis.__sveltekit_11h6hcr) != null && s.data && globalThis.__sveltekit_11h6hcr.data, document.URL !== location.href && (location.href = location.href), b = t, await ((i = (o = t.hooks).init) == null ? void 0 : i.call(o)), Gt = rn(t), P = document.documentElement, Dt = e, Nt = t.nodes[0], mt = t.nodes[1], Nt(), mt(), E = (c = history.state) == null ? void 0 : c[V], L = (l = history.state) == null ? void 0 : l[F], E || (E = L = Date.now(), history.replaceState({
    ...history.state,
    [V]: E,
    [F]: L
  }, ""));
  const a = B[E];

  function r() {
    a && (history.scrollRestoration = "manual", scrollTo(a.x, a.y))
  }
  n ? (r(), await An(Dt, n)) : (await z({
    type: "enter",
    url: St(b.hash ? In(new URL(location.href)) : location.href),
    replace_state: !0
  }), r()), Un()
}

function mn() {
  _t.length = 0, Jt = !1
}

function Te(t) {
  wt.some(e => e == null ? void 0 : e.snapshot) && (Q[t] = wt.map(e => {
    var n;
    return (n = e == null ? void 0 : e.snapshot) == null ? void 0 : n.capture()
  }))
}

function $e(t) {
  var e;
  (e = Q[t]) == null || e.forEach((n, a) => {
    var r, s;
    (s = (r = wt[a]) == null ? void 0 : r.snapshot) == null || s.restore(n)
  })
}

function fe() {
  Ft(E), ae(ye, B), Te(L), ae(we, Q)
}
async function Ie(t, e, n, a) {
  let r;
  e.invalidateAll && Le(), await z({
    type: "goto",
    url: St(t),
    keepfocus: e.keepFocus,
    noscroll: e.noScroll,
    replace_state: e.replaceState,
    state: e.state,
    redirect_count: n,
    nav_token: a,
    accept: () => {
      e.invalidateAll && (Jt = !0, r = [...le.keys()]), e.invalidate && e.invalidate.forEach(Ln)
    }
  }), e.invalidateAll && pt().then(pt).then(() => {
    le.forEach(({
      resource: s
    }, o) => {
      var i;
      r != null && r.includes(o) && ((i = s.refresh) == null || i.call(s))
    })
  })
}
async function _n(t) {
  if (t.id !== (y == null ? void 0 : y.id)) {
    const e = {};
    if (vt.add(e), y = {
        id: t.id,
        token: e,
        promise: Pe({
          ...t,
          preload: e
        }).then(n => (vt.delete(e), n.type === "loaded" && n.state.error && Le(), n)),
        fork: null
      }, re) {
      const n = y;
      n.fork = n.promise.then(a => {
        if (n === y && a.type === "loaded") try {
          return re(() => {
            Lt.$set(a.props), Re(a.props.page)
          })
        } catch {}
        return null
      })
    }
  }
  return y.promise
}
async function Ct(t) {
  var n;
  const e = (n = await Ut(t, !1)) == null ? void 0 : n.route;
  e && await Promise.all([...e.layouts, e.leaf].map(a => a == null ? void 0 : a[1]()))
}
async function Oe(t, e, n) {
  var r;
  m = t.state;
  const a = document.querySelector("style[data-sveltekit]");
  if (a && a.remove(), Object.assign(S, t.props.page), Lt = new b.root({
      target: e,
      props: {
        ...t.props,
        stores: N,
        components: wt
      },
      hydrate: n,
      sync: !1
    }), await Promise.resolve(), $e(L), n) {
    const s = {
      from: null,
      to: {
        params: m.params,
        route: {
          id: ((r = m.route) == null ? void 0 : r.id) ?? null
        },
        url: new URL(location.href)
      },
      willUnload: !1,
      type: "enter",
      complete: Promise.resolve()
    };
    J.forEach(o => o(s))
  }
  yt = !0
}

function bt({
  url: t,
  params: e,
  branch: n,
  status: a,
  error: r,
  route: s,
  form: o
}) {
  let i = "never";
  if (U && (t.pathname === U || t.pathname === U + "/")) i = "always";
  else
    for (const f of n)(f == null ? void 0 : f.slash) !== void 0 && (i = f.slash);
  t.pathname = Ke(t.pathname, i), t.search = t.search;
  const c = {
    type: "loaded",
    state: {
      url: t,
      params: e,
      branch: n,
      error: r,
      route: s
    },
    props: {
      constructors: cn(n).map(f => f.node.component),
      page: At(S)
    }
  };
  o !== void 0 && (c.props.form = o);
  let l = {},
    d = !S,
    u = 0;
  for (let f = 0; f < Math.max(n.length, m.branch.length); f += 1) {
    const h = n[f],
      _ = m.branch[f];
    (h == null ? void 0 : h.data) !== (_ == null ? void 0 : _.data) && (d = !0), h && (l = {
      ...l,
      ...h.data
    }, d && (c.props[`data_${u}`] = l), u += 1)
  }
  return (!m.url || t.href !== m.url.href || m.error !== r || o !== void 0 && o !== S.form || d) && (c.props.page = {
    error: r,
    params: e,
    route: {
      id: (s == null ? void 0 : s.id) ?? null
    },
    state: {},
    status: a,
    url: new URL(t),
    form: o ?? null,
    data: d ? l : S.data
  }), c
}
async function Xt({
  loader: t,
  parent: e,
  url: n,
  params: a,
  route: r,
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

function wn(t, e, n) {
  let a = t instanceof Request ? t.url : t;
  const r = new URL(a, n);
  r.origin === n.origin && (a = r.href.slice(n.origin.length));
  const s = yt ? Xe(a, r.href, e) : Je(a, e);
  return {
    resolved: r,
    promise: s
  }
}

function yn(t, e, n, a, r, s) {
  if (Jt) return !0;
  if (!r) return !1;
  if (r.parent && t || r.route && e || r.url && n) return !0;
  for (const o of r.search_params)
    if (a.has(o)) return !0;
  for (const o of r.params)
    if (s[o] !== m.params[o]) return !0;
  for (const o of r.dependencies)
    if (_t.some(i => i(new URL(o)))) return !0;
  return !1
}

function Qt(t, e) {
  return (t == null ? void 0 : t.type) === "data" ? t : (t == null ? void 0 : t.type) === "skip" ? e ?? null : null
}

function vn(t, e) {
  if (!t) return new Set(e.searchParams.keys());
  const n = new Set([...t.searchParams.keys(), ...e.searchParams.keys()]);
  for (const a of n) {
    const r = t.searchParams.getAll(a),
      s = e.searchParams.getAll(a);
    r.every(o => s.includes(o)) && s.every(o => r.includes(o)) && n.delete(a)
  }
  return n
}

function bn({
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
      page: At(S),
      constructors: []
    }
  }
}
async function Pe({
  id: t,
  invalidating: e,
  url: n,
  params: a,
  route: r,
  preload: s
}) {
  if ((y == null ? void 0 : y.id) === t) return vt.delete(y.token), y.promise;
  const {
    errors: o,
    layouts: i,
    leaf: c
  } = r, l = [...i, c];
  o.forEach(g => g == null ? void 0 : g().catch(() => {})), l.forEach(g => g == null ? void 0 : g[1]().catch(() => {}));
  const d = m.url ? t !== kt(m.url) : !1,
    u = m.route ? r.id !== m.route.id : !1,
    v = vn(m.url, n);
  let f = !1;
  const h = l.map(async (g, p) => {
    var C;
    if (!g) return;
    const k = m.branch[p];
    return g[1] === (k == null ? void 0 : k.loader) && !yn(f, u, d, v, (C = k.universal) == null ? void 0 : C.uses, a) ? k : (f = !0, Xt({
      loader: g[1],
      url: n,
      params: a,
      route: r,
      parent: async () => {
        var dt;
        const O = {};
        for (let M = 0; M < p; M += 1) Object.assign(O, (dt = await h[M]) == null ? void 0 : dt.data);
        return O
      },
      server_data_node: Qt(g[0] ? {
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
      if (p instanceof Mt) return {
        type: "redirect",
        location: p.location
      };
      if (vt.has(s)) return bn({
        error: await et(p, {
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
      let k = zt(p),
        x;
      if (p instanceof Bt) x = p.body;
      else {
        if (await N.updated.check()) return await xe(), await Z(n);
        x = await et(p, {
          params: a,
          url: n,
          route: {
            id: r.id
          }
        })
      }
      const C = await kn(g, _, o);
      return C ? bt({
        url: n,
        params: a,
        branch: _.slice(0, C.idx).concat(C.node),
        status: k,
        error: x,
        route: r
      }) : await je(n, {
        id: r.id
      }, x, k)
    } else _.push(void 0);
  return bt({
    url: n,
    params: a,
    branch: _,
    status: 200,
    error: null,
    route: r,
    form: e ? void 0 : null
  })
}
async function kn(t, e, n) {
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
async function Zt({
  status: t,
  error: e,
  url: n,
  route: a
}) {
  const r = {};
  let s = null;
  try {
    const o = await Xt({
        loader: Nt,
        url: n,
        params: r,
        route: a,
        parent: () => Promise.resolve({}),
        server_data_node: Qt(s)
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
      params: r,
      branch: [o, i],
      status: t,
      error: e,
      route: null
    })
  } catch (o) {
    if (o instanceof Mt) return Ie(new URL(o.location, location.href), {}, 0);
    throw o
  }
}
async function En(t) {
  const e = t.href;
  if (ht.has(e)) return ht.get(e);
  let n;
  try {
    const a = (async () => {
      let r = await b.hooks.reroute({
        url: new URL(t),
        fetch: async (s, o) => wn(s, o, t).promise
      }) ?? t;
      if (typeof r == "string") {
        const s = new URL(t);
        b.hash ? s.hash = r : s.pathname = r, r = s
      }
      return r
    })();
    ht.set(e, a), n = await a
  } catch {
    ht.delete(e);
    return
  }
  return n
}
async function Ut(t, e) {
  if (t && !xt(t, U, b.hash)) {
    const n = await En(t);
    if (!n) return;
    const a = Sn(n);
    for (const r of Gt) {
      const s = r.exec(a);
      if (s) return {
        id: kt(t),
        invalidating: e,
        route: r,
        params: ze(s),
        url: t
      }
    }
  }
}

function Sn(t) {
  return Ye(b.hash ? t.hash.replace(/^#/, "").replace(/[?#].+/, "") : t.pathname.slice(U.length)) || "/"
}

function kt(t) {
  return (b.hash ? t.hash.replace(/^#/, "") : t.pathname) + t.search
}

function Ce({
  url: t,
  type: e,
  intent: n,
  delta: a,
  event: r
}) {
  let s = !1;
  const o = te(m, n, t, e);
  a !== void 0 && (o.navigation.delta = a), r !== void 0 && (o.navigation.event = r);
  const i = {
    ...o.navigation,
    cancel: () => {
      s = !0, o.reject(new Error("navigation cancelled"))
    }
  };
  return tt || Ht.forEach(c => c(i)), s ? null : o
}
async function z({
  type: t,
  url: e,
  popped: n,
  keepfocus: a,
  noscroll: r,
  replace_state: s,
  state: o = {},
  redirect_count: i = 0,
  nav_token: c = {},
  accept: l = ie,
  block: d = ie,
  event: u
}) {
  var M;
  const v = q;
  q = c;
  const f = await Ut(e, !1),
    h = t === "enter" ? te(m, f, e, t) : Ce({
      url: e,
      type: t,
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
  l(), tt = !0, yt && h.navigation.type !== "enter" && N.navigating.set(X.current = h.navigation);
  let p = f && await Pe(f);
  if (!p) {
    if (xt(e, U, b.hash)) return await Z(e, s);
    p = await je(e, {
      id: null
    }, await et(new Wt(404, "Not Found", `Not found: ${e.pathname}`), {
      url: e,
      params: {},
      route: {
        id: null
      }
    }), 404, s)
  }
  if (e = (f == null ? void 0 : f.url) || e, q !== c) return h.reject(new Error("navigation aborted")), !1;
  if (p.type === "redirect") {
    if (i < 20) {
      await z({
        type: t,
        url: new URL(p.location, e),
        popped: n,
        keepfocus: a,
        noscroll: r,
        replace_state: s,
        state: o,
        redirect_count: i + 1,
        nav_token: c
      }), h.fulfil(void 0);
      return
    }
    p = await Zt({
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
  } else p.props.page.status >= 400 && await N.updated.check() && (await xe(), await Z(e, s));
  if (mn(), Ft(_), Te(g), p.props.page.url.pathname !== e.pathname && (e.pathname = p.props.page.url.pathname), o = n ? n.state : o, !n) {
    const R = s ? 0 : 1,
      W = {
        [V]: E += R,
        [F]: L += R,
        [Yt]: o
      };
    (s ? history.replaceState : history.pushState).call(history, W, "", e), s || pn(E, L)
  }
  const k = y == null ? void 0 : y.fork;
  y = null, p.props.page.state = o;
  let x;
  if (yt) {
    const R = (await Promise.all(Array.from(gn, j => j(h.navigation)))).filter(j => typeof j == "function");
    if (R.length > 0) {
      let j = function() {
        R.forEach(Tt => {
          J.delete(Tt)
        })
      };
      R.push(j), R.forEach(Tt => {
        J.add(Tt)
      })
    }
    m = p.state, p.props.page && (p.props.page.url = e);
    const W = k && await k;
    W ? x = W.commit() : (Lt.$set(p.props), Re(p.props.page), x = (M = Be) == null ? void 0 : M()), Ae = !0
  } else await Oe(p, Dt, !1);
  const {
    activeElement: C
  } = document;
  await x, await pt(), await pt();
  let O = n ? n.scroll : r ? Rt() : null;
  if (ce) {
    const R = e.hash && document.getElementById(Ne(e));
    if (O) scrollTo(O.x, O.y);
    else if (R) {
      R.scrollIntoView();
      const {
        top: W,
        left: j
      } = R.getBoundingClientRect();
      O = {
        x: pageXOffset + j,
        y: pageYOffset + W
      }
    } else scrollTo(0, 0)
  }
  const dt = document.activeElement !== C && document.activeElement !== document.body;
  !a && !dt && $n(e, O), ce = !0, p.props.page && Object.assign(S, p.props.page), tt = !1, t === "popstate" && $e(L), h.fulfil(void 0), J.forEach(R => R(h.navigation)), N.navigating.set(X.current = null)
}
async function je(t, e, n, a, r) {
  return t.origin === Et && t.pathname === location.pathname && !Ue ? await Zt({
    status: a,
    error: n,
    url: t,
    route: e
  }) : await Z(t, r)
}

function Rn() {
  let t, e, n;
  P.addEventListener("mousemove", i => {
    const c = i.target;
    clearTimeout(t), t = setTimeout(() => {
      s(c, D.hover)
    }, 20)
  });

  function a(i) {
    i.defaultPrevented || s(i.composedPath()[0], D.tap)
  }
  P.addEventListener("mousedown", a), P.addEventListener("touchstart", a, {
    passive: !0
  });
  const r = new IntersectionObserver(i => {
    for (const c of i) c.isIntersecting && (Ct(new URL(c.target.href)), r.unobserve(c.target))
  }, {
    threshold: 0
  });
  async function s(i, c) {
    const l = ke(i, P),
      d = l === e && c >= n;
    if (!l || d) return;
    const {
      url: u,
      external: v,
      download: f
    } = jt(l, U, b.hash);
    if (v || f) return;
    const h = gt(l),
      _ = u && kt(m.url) === kt(u);
    if (!(h.reload || _))
      if (c <= h.preload_data) {
        e = l, n = D.tap;
        const g = await Ut(u, !1);
        if (!g) return;
        _n(g)
      } else c <= h.preload_code && (e = l, n = c, Ct(u))
  }

  function o() {
    r.disconnect();
    for (const i of P.querySelectorAll("a")) {
      const {
        url: c,
        external: l,
        download: d
      } = jt(i, U, b.hash);
      if (l || d) continue;
      const u = gt(i);
      u.reload || (u.preload_code === D.viewport && r.observe(i), u.preload_code === D.eager && Ct(c))
    }
  }
  J.add(o), o()
}

function et(t, e) {
  if (t instanceof Bt) return t.body;
  const n = zt(t),
    a = ln(t);
  return b.hooks.handleError({
    error: t,
    event: e,
    status: n,
    message: a
  }) ?? {
    message: a
  }
}

function xn(t, e) {
  un(() => (t.add(e), () => {
    t.delete(e)
  }))
}

function Wn(t) {
  xn(Ht, t)
}

function Kn(t, e = {}) {
  return t = new URL(St(t)), t.origin !== Et ? Promise.reject(new Error("goto: invalid URL")) : Ie(t, e, 0)
}

function Ln(t) {
  if (typeof t == "function") _t.push(t);
  else {
    const {
      href: e
    } = new URL(t, location.href);
    _t.push(n => n.href === e)
  }
}

function Yn(t, e) {
  const n = {
    [V]: E,
    [F]: L,
    [ve]: S.url.href,
    [Yt]: e
  };
  history.replaceState(n, "", St(t)), S.state = e, Lt.$set({
    page: dn(() => At(S))
  })
}

function Un() {
  var e;
  history.scrollRestoration = "manual", addEventListener("beforeunload", n => {
    let a = !1;
    if (fe(), !tt) {
      const r = te(m, void 0, null, "leave"),
        s = {
          ...r.navigation,
          cancel: () => {
            a = !0, r.reject(new Error("navigation cancelled"))
          }
        };
      Ht.forEach(o => o(s))
    }
    a ? (n.preventDefault(), n.returnValue = "") : history.scrollRestoration = "auto"
  }), addEventListener("visibilitychange", () => {
    document.visibilityState === "hidden" && fe()
  }), (e = navigator.connection) != null && e.saveData || Rn(), P.addEventListener("click", async n => {
    if (n.button || n.which !== 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey || n.defaultPrevented) return;
    const a = ke(n.composedPath()[0], P);
    if (!a) return;
    const {
      url: r,
      external: s,
      target: o,
      download: i
    } = jt(a, U, b.hash);
    if (!r) return;
    if (o === "_parent" || o === "_top") {
      if (window.parent !== window) return
    } else if (o && o !== "_self") return;
    const c = gt(a);
    if (!(a instanceof SVGAElement) && r.protocol !== location.protocol && !(r.protocol === "https:" || r.protocol === "http:") || i) return;
    const [d, u] = (b.hash ? r.hash.replace(/^#/, "") : r.href).split("#"), v = d === It(location);
    if (s || c.reload && (!v || !u)) {
      Ce({
        url: r,
        type: "link",
        event: n
      }) ? tt = !0 : n.preventDefault();
      return
    }
    if (u !== void 0 && v) {
      const [, f] = m.url.href.split("#");
      if (f === u) {
        if (n.preventDefault(), u === "" || u === "top" && a.ownerDocument.getElementById("top") === null) scrollTo({
          top: 0
        });
        else {
          const h = a.ownerDocument.getElementById(decodeURIComponent(u));
          h && (h.scrollIntoView(), h.focus())
        }
        return
      }
      if (G = !0, Ft(E), t(r), !c.replace_state) return;
      G = !1
    }
    n.preventDefault(), await new Promise(f => {
      requestAnimationFrame(() => {
        setTimeout(f, 0)
      }), setTimeout(f, 100)
    }), await z({
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
    const i = new URL((r == null ? void 0 : r.hasAttribute("formaction")) && (r == null ? void 0 : r.formAction) || a.action);
    if (xt(i, U, !1)) return;
    const c = n.target,
      l = gt(c);
    if (l.reload) return;
    n.preventDefault(), n.stopPropagation();
    const d = new FormData(c, r);
    i.search = new URLSearchParams(d).toString(), z({
      type: "form",
      url: i,
      keepfocus: l.keepfocus,
      noscroll: l.noscroll,
      replace_state: l.replace_state ?? i.href === location.href,
      event: n
    })
  }), addEventListener("popstate", async n => {
    var a;
    if (!qt) {
      if ((a = n.state) != null && a[V]) {
        const r = n.state[V];
        if (q = {}, r === E) return;
        const s = B[r],
          o = n.state[Yt] ?? {},
          i = new URL(n.state[ve] ?? location.href),
          c = n.state[F],
          l = m.url ? It(location) === It(m.url) : !1;
        if (c === L && (Ae || l)) {
          o !== S.state && (S.state = o), t(i), B[E] = Rt(), s && scrollTo(s.x, s.y), E = r;
          return
        }
        const u = r - E;
        await z({
          type: "popstate",
          url: i,
          popped: {
            state: o,
            scroll: s,
            delta: u
          },
          accept: () => {
            E = r, L = c
          },
          block: () => {
            history.go(-u)
          },
          nav_token: q,
          event: n
        })
      } else if (!G) {
        const r = new URL(location.href);
        t(r), b.hash && location.reload()
      }
    }
  }), addEventListener("hashchange", () => {
    G && (G = !1, history.replaceState({
      ...history.state,
      [V]: ++E,
      [F]: L
    }, "", location.href))
  });
  for (const n of document.querySelectorAll("link")) hn.has(n.rel) && (n.href = n.href);
  addEventListener("pageshow", n => {
    n.persisted && N.navigating.set(X.current = null)
  });

  function t(n) {
    m.url = S.url = n, N.page.set(At(S)), N.page.notify()
  }
}
async function An(t, {
  status: e = 200,
  error: n,
  node_ids: a,
  params: r,
  route: s,
  server_route: o,
  data: i,
  form: c
}) {
  Ue = !0;
  const l = new URL(location.href);
  let d;
  ({
    params: r = {},
    route: s = {
      id: null
    }
  } = await Ut(l, !1) || {}), d = Gt.find(({
    id: f
  }) => f === s.id);
  let u, v = !0;
  try {
    const f = a.map(async (_, g) => {
        const p = i[g];
        return p != null && p.uses && (p.uses = Tn(p.uses)), Xt({
          loader: b.nodes[_],
          url: l,
          params: r,
          route: s,
          parent: async () => {
            const k = {};
            for (let x = 0; x < g; x += 1) Object.assign(k, (await f[x]).data);
            return k
          },
          server_data_node: Qt(p)
        })
      }),
      h = await Promise.all(f);
    if (d) {
      const _ = d.layouts;
      for (let g = 0; g < _.length; g++) _[g] || h.splice(g, 0, void 0)
    }
    u = bt({
      url: l,
      params: r,
      branch: h,
      status: e,
      error: n,
      form: c,
      route: d ?? null
    })
  } catch (f) {
    if (f instanceof Mt) {
      await Z(new URL(f.location, location.href));
      return
    }
    u = await Zt({
      status: zt(f),
      error: await et(f, {
        url: l,
        params: r,
        route: s
      }),
      url: l,
      route: s
    }), t.textContent = "", v = !1
  }
  u.props.page && (u.props.page.state = {}), await Oe(u, t, v)
}

function Tn(t) {
  return {
    dependencies: new Set((t == null ? void 0 : t.dependencies) ?? []),
    params: new Set((t == null ? void 0 : t.params) ?? []),
    parent: !!(t != null && t.parent),
    route: !!(t != null && t.route),
    url: !!(t != null && t.url),
    search_params: new Set((t == null ? void 0 : t.search_params) ?? [])
  }
}
let qt = !1;

function $n(t, e = null) {
  const n = document.querySelector("[autofocus]");
  if (n) n.focus();
  else {
    const a = Ne(t);
    if (a && document.getElementById(a)) {
      const {
        x: s,
        y: o
      } = e ?? Rt();
      setTimeout(() => {
        const i = history.state;
        qt = !0, location.replace(`#${a}`), b.hash && location.replace(t.hash), history.replaceState(i, "", t.hash), scrollTo(s, o), qt = !1
      })
    } else {
      const s = document.body,
        o = s.getAttribute("tabindex");
      s.tabIndex = -1, s.focus({
        preventScroll: !0,
        focusVisible: !1
      }), o !== null ? s.setAttribute("tabindex", o) : s.removeAttribute("tabindex")
    }
    const r = getSelection();
    if (r && r.type !== "None") {
      const s = [];
      for (let o = 0; o < r.rangeCount; o += 1) s.push(r.getRangeAt(o));
      setTimeout(() => {
        if (r.rangeCount === s.length) {
          for (let o = 0; o < r.rangeCount; o += 1) {
            const i = s[o],
              c = r.getRangeAt(o);
            if (i.commonAncestorContainer !== c.commonAncestorContainer || i.startContainer !== c.startContainer || i.endContainer !== c.endContainer || i.startOffset !== c.startOffset || i.endOffset !== c.endOffset) return
          }
          r.removeAllRanges()
        }
      })
    }
  }
}

function te(t, e, n, a) {
  var c, l;
  let r, s;
  const o = new Promise((d, u) => {
    r = d, s = u
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
      type: a,
      complete: o
    },
    fulfil: r,
    reject: s
  }
}

function At(t) {
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

function In(t) {
  const e = new URL(t);
  return e.hash = decodeURIComponent(t.hash), e
}

function Ne(t) {
  let e;
  if (b.hash) {
    const [, , n] = t.hash.split("#", 3);
    e = n ?? ""
  } else e = t.hash.slice(1);
  return decodeURIComponent(e)
}
export {
  Nn as a, U as b, Wn as c, Mn as d, Kn as g, Dn as l, S as p, Yn as r, N as s
};
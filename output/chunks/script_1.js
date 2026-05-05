var ee = t => {
  throw TypeError(t)
};
var qe = (t, e, n) => e.has(t) || ee("Cannot " + n);
var w = (t, e, n) => (qe(t, e, "read from private field"), n ? n.call(t) : e.get(t)),
  A = (t, e, n) => e.has(t) ? ee("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n);
import {
  o as ne,
  s as De
} from "./4FZmClro.js";
import {
  aZ as $t,
  bh as Ve,
  e as T,
  i as $,
  h as I,
  S as pt,
  N as ae,
  R as Be,
  x as Me
} from "./wFsvFKKp.js";
import {
  v as We
} from "./_Xxlpaqy.js";
const K = [];

function Vt(t, e = $t) {
  let n = null;
  const r = new Set;

  function a(i) {
    if (Ve(t, i) && (t = i, n)) {
      const c = !K.length;
      for (const l of r) l[1](), K.push(l, t);
      if (c) {
        for (let l = 0; l < K.length; l += 2) K[l][0](K[l + 1]);
        K.length = 0
      }
    }
  }

  function s(i) {
    a(i(t))
  }

  function o(i, c = $t) {
    const l = [i, c];
    return r.add(l), r.size === 1 && (n = e(a, s) || $t), i(t), () => {
      r.delete(l), r.size === 0 && n && (n(), n = null)
    }
  }
  return {
    set: a,
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
  constructor(e, n, r) {
    super(r), this.status = e, this.text = n
  }
}
new URL("sveltekit-internal://");

function Ke(t, e) {
  return t === "/" || e === "ignore" ? t : e === "never" ? t.endsWith("/") ? t.slice(0, -1) : t : e === "always" && !t.endsWith("/") ? t + "/" : t
}

function ze(t) {
  return t.split("%25").map(decodeURI).join("%25")
}

function Fe(t) {
  for (const e in t) t[e] = decodeURIComponent(t[e]);
  return t
}

function It({
  href: t
}) {
  return t.split("#")[0]
}

function Ge(...t) {
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

function Ye(t) {
  const e = atob(t),
    n = new Uint8Array(e.length);
  for (let r = 0; r < e.length; r++) n[r] = e.charCodeAt(r);
  return n
}
const He = window.fetch;
window.fetch = (t, e) => ((t instanceof Request ? t.method : (e == null ? void 0 : e.method) || "GET") !== "GET" && H.delete(Kt(t)), He(t, e));
const H = new Map;

function Je(t, e) {
  const n = Kt(t, e),
    r = document.querySelector(n);
  if (r != null && r.textContent) {
    r.remove();
    let {
      body: a,
      ...s
    } = JSON.parse(r.textContent);
    const o = r.getAttribute("data-ttl");
    return o && H.set(n, {
      body: a,
      init: s,
      ttl: 1e3 * Number(o)
    }), r.getAttribute("data-b64") !== null && (a = Ye(a)), Promise.resolve(new Response(a, s))
  }
  return window.fetch(t, e)
}

function Xe(t, e, n) {
  if (H.size > 0) {
    const r = Kt(t, n),
      a = H.get(r);
    if (a) {
      if (performance.now() < a.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(n == null ? void 0 : n.cache)) return new Response(a.body, a.init);
      H.delete(r)
    }
  }
  return window.fetch(e, n)
}

function Kt(t, e) {
  let r = `script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;
  if (e != null && e.headers || e != null && e.body) {
    const a = [];
    e.headers && a.push([...new Headers(e.headers)].join(",")), e.body && (typeof e.body == "string" || ArrayBuffer.isView(e.body)) && a.push(e.body), r += `[data-hash="${Ge(...a)}"]`
  }
  return r
}
const Ze = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;

function Qe(t) {
  const e = [];
  return {
    pattern: t === "/" ? /^\/$/ : new RegExp(`^${me(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/([^]*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return e.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const o=r.split(/\[(.+?)\](?!\])/);return"/"+o.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Ot(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Ot(String.fromCharCode(...c.slice(2).split("-").map(_=>parseInt(_,16))));const d=Ze.exec(c),[,u,y,f,h]=d;return e.push({name:f,matcher:h,optional:!!u,rest:!!y,chained:y?l===1&&o[0]==="":!1}),y?"([^]*?)":u?"([^/]*)?":"([^/]+?)"}return Ot(c)}).join("")}).join("")}/?$`),
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

function Ot(t) {
  return t.normalize().replace(/[[\]]/g, "\\$&").replace(/%/g, "%25").replace(/\//g, "%2[Ff]").replace(/\?/g, "%3[Ff]").replace(/#/g, "%23").replace(/[.*+?^${}()|\\]/g, "\\$&")
}
const nn = /\[(\[)?(\.\.\.)?(\w+?)(?:=(\w+))?\]\]?/g;

function Nn(t, e) {
  const n = me(t),
    r = t != "/" && t.endsWith("/");
  return "/" + n.map(a => a.replace(nn, (s, o, i, c) => {
    const l = e[c];
    if (!l) {
      if (o || i && l !== void 0) return "";
      throw new Error(`Missing parameter '${c}' in route ${t}`)
    }
    if (l.startsWith("/") || l.endsWith("/")) throw new Error(`Parameter '${c}' in route ${t} cannot start or end with a slash -- this would cause an invalid route like foo//bar`);
    return l
  })).filter(Boolean).join("/") + (r ? "/" : "")
}

function an({
  nodes: t,
  server_loads: e,
  dictionary: n,
  matchers: r
}) {
  const a = new Set(e);
  return Object.entries(n).map(([i, [c, l, d]]) => {
    const {
      pattern: u,
      params: y
    } = Qe(i), f = {
      id: i,
      exec: h => {
        const _ = u.exec(h);
        if (_) return en(_, y, r)
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

function _e(t, e = JSON.parse) {
  try {
    return e(sessionStorage[t])
  } catch {}
}

function re(t, e, n = JSON.stringify) {
  const r = n(e);
  try {
    sessionStorage[t] = r
  } catch {}
}
var ue;
const U = ((ue = globalThis.__sveltekit_xt0p4m) == null ? void 0 : ue.base) ?? "";
var de;
const rn = ((de = globalThis.__sveltekit_xt0p4m) == null ? void 0 : de.assets) ?? U ?? "",
  we = "sveltekit:snapshot",
  ve = "sveltekit:scroll",
  zt = "sveltekit:states",
  ye = "sveltekit:pageurl",
  V = "sveltekit:history",
  G = "sveltekit:navigation",
  q = {
    tap: 1,
    hover: 2,
    viewport: 3,
    eager: 4,
    off: -1,
    false: -1
  },
  St = location.origin;

function Et(t) {
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

function z(t, e) {
  return t.getAttribute(`data-sveltekit-${e}`)
}
const oe = {
  ...q,
  "": q.hover
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
  let r;
  try {
    if (r = new URL(t instanceof SVGAElement ? t.href.baseVal : t.href, document.baseURI), n && r.hash.match(/^#[^/]/)) {
      const i = location.hash.split("#")[1] || "/";
      r.hash = `#${i}${r.hash}`
    }
  } catch {}
  const a = t instanceof SVGAElement ? t.target.baseVal : t.target,
    s = !r || !!a || xt(r, e, n) || (t.getAttribute("rel") || "").split(/\s+/).includes("external"),
    o = (r == null ? void 0 : r.origin) === St && t.hasAttribute("download");
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
  for (; i && i !== document.documentElement;) r === null && (r = z(i, "preload-code")), a === null && (a = z(i, "preload-data")), e === null && (e = z(i, "keepfocus")), n === null && (n = z(i, "noscroll")), s === null && (s = z(i, "reload")), o === null && (o = z(i, "replacestate")), i = be(i);

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
    preload_code: oe[r ?? "off"],
    preload_data: oe[a ?? "off"],
    keepfocus: c(e),
    noscroll: c(n),
    reload: c(s),
    replace_state: c(o)
  }
}

function se(t) {
  const e = Vt(t);
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
const Se = {
  v: () => {}
};

function on() {
  const {
    set: t,
    subscribe: e
  } = Vt(!1);
  let n;
  async function r() {
    clearTimeout(n);
    try {
      const a = await fetch(`${rn}/_app/version.json`, {
        headers: {
          pragma: "no-cache",
          "cache-control": "no-cache"
        }
      });
      if (!a.ok) return !1;
      const o = (await a.json()).version !== We;
      return o && (t(!0), Se.v(), clearTimeout(n)), o
    } catch {
      return !1
    }
  }
  return {
    subscribe: e,
    check: r
  }
}

function xt(t, e, n) {
  return t.origin !== St || !t.pathname.startsWith(e) ? !0 : n ? !(t.pathname === e + "/" || t.pathname === e + "/index.html" || t.protocol === "file:" && t.pathname.replace(/\/[^/]+\.html?$/, "") === e) : !1
}

function qn(t) {}
const Ee = new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...Ee];
const sn = new Set([...Ee]);
[...sn];

function cn(t) {
  return t.filter(e => e != null)
}

function Ft(t) {
  return t instanceof Bt || t instanceof Wt ? t.status : 500
}

function ln(t) {
  return t instanceof Wt ? t.text : "Internal Error"
}
let E, X, Pt;
const fn = ne.toString().includes("$$") || /function \w+\(\) \{\}/.test(ne.toString());
var nt, at, rt, ot, st, it, ct, lt, he, ft, pe, ut, ge;
fn ? (E = {
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
}) : (E = new(he = class {
  constructor() {
    A(this, nt, T({}));
    A(this, at, T(null));
    A(this, rt, T(null));
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
    return $(w(this, at))
  }
  set form(e) {
    I(w(this, at), e)
  }
  get error() {
    return $(w(this, rt))
  }
  set error(e) {
    I(w(this, rt), e)
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
}, nt = new WeakMap, at = new WeakMap, rt = new WeakMap, ot = new WeakMap, st = new WeakMap, it = new WeakMap, ct = new WeakMap, lt = new WeakMap, he), X = new(pe = class {
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
}, ut = new WeakMap, ge), Se.v = () => Pt.current = !0);

function Re(t) {
  Object.assign(E, t)
}
const {
  onMount: un
} = De, dn = Me ?? (t => t()), hn = new Set(["icon", "shortcut icon", "apple-touch-icon"]), B = _e(ve) ?? {}, Z = _e(we) ?? {}, N = {
  url: se({}),
  page: se({}),
  navigating: Vt(null),
  updated: on()
};

function Gt(t) {
  B[t] = Rt()
}

function pn(t, e) {
  let n = t + 1;
  for (; B[n];) delete B[n], n += 1;
  for (n = e + 1; Z[n];) delete Z[n], n += 1
}

function Q(t, e = !1) {
  return e ? location.replace(t.href) : location.href = t.href, new Promise(() => {})
}
async function xe() {
  if ("serviceWorker" in navigator) {
    const t = await navigator.serviceWorker.getRegistration(U || "/");
    t && await t.update()
  }
}

function ie() {}
let Yt, Nt, mt, P, qt, b;
const _t = [],
  wt = [];
let v = null;

function Le() {
  var t;
  (t = v == null ? void 0 : v.fork) == null || t.then(e => e == null ? void 0 : e.discard()), v = null
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
  vt = !1,
  ce = !0,
  tt = !1,
  Y = !1,
  Ae = !1,
  Jt = !1,
  Lt, S, L, D;
const yt = new Set,
  le = new Map;
async function Mn(t, e, n) {
  var s, o, i, c, l;
  (s = globalThis.__sveltekit_xt0p4m) != null && s.data && globalThis.__sveltekit_xt0p4m.data, document.URL !== location.href && (location.href = location.href), b = t, await ((i = (o = t.hooks).init) == null ? void 0 : i.call(o)), Yt = an(t), P = document.documentElement, qt = e, Nt = t.nodes[0], mt = t.nodes[1], Nt(), mt(), S = (c = history.state) == null ? void 0 : c[V], L = (l = history.state) == null ? void 0 : l[G], S || (S = L = Date.now(), history.replaceState({
    ...history.state,
    [V]: S,
    [G]: L
  }, ""));
  const r = B[S];

  function a() {
    r && (history.scrollRestoration = "manual", scrollTo(r.x, r.y))
  }
  n ? (a(), await An(qt, n)) : (await F({
    type: "enter",
    url: Et(b.hash ? In(new URL(location.href)) : location.href),
    replace_state: !0
  }), a()), Un()
}

function mn() {
  _t.length = 0, Jt = !1
}

function Te(t) {
  wt.some(e => e == null ? void 0 : e.snapshot) && (Z[t] = wt.map(e => {
    var n;
    return (n = e == null ? void 0 : e.snapshot) == null ? void 0 : n.capture()
  }))
}

function $e(t) {
  var e;
  (e = Z[t]) == null || e.forEach((n, r) => {
    var a, s;
    (s = (a = wt[r]) == null ? void 0 : a.snapshot) == null || s.restore(n)
  })
}

function fe() {
  Gt(S), re(ve, B), Te(L), re(we, Z)
}
async function Ie(t, e, n, r) {
  let a;
  e.invalidateAll && Le(), await F({
    type: "goto",
    url: Et(t),
    keepfocus: e.keepFocus,
    noscroll: e.noScroll,
    replace_state: e.replaceState,
    state: e.state,
    redirect_count: n,
    nav_token: r,
    accept: () => {
      e.invalidateAll && (Jt = !0, a = [...le.keys()]), e.invalidate && e.invalidate.forEach(Ln)
    }
  }), e.invalidateAll && pt().then(pt).then(() => {
    le.forEach(({
      resource: s
    }, o) => {
      var i;
      a != null && a.includes(o) && ((i = s.refresh) == null || i.call(s))
    })
  })
}
async function _n(t) {
  if (t.id !== (v == null ? void 0 : v.id)) {
    const e = {};
    if (yt.add(e), v = {
        id: t.id,
        token: e,
        promise: Pe({
          ...t,
          preload: e
        }).then(n => (yt.delete(e), n.type === "loaded" && n.state.error && Le(), n)),
        fork: null
      }, ae) {
      const n = v;
      n.fork = n.promise.then(r => {
        if (n === v && r.type === "loaded") try {
          return ae(() => {
            Lt.$set(r.props), Re(r.props.page)
          })
        } catch {}
        return null
      })
    }
  }
  return v.promise
}
async function Ct(t) {
  var n;
  const e = (n = await Ut(t, !1)) == null ? void 0 : n.route;
  e && await Promise.all([...e.layouts, e.leaf].map(r => r == null ? void 0 : r[1]()))
}
async function Oe(t, e, n) {
  var a;
  m = t.state;
  const r = document.querySelector("style[data-sveltekit]");
  if (r && r.remove(), Object.assign(E, t.props.page), Lt = new b.root({
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
          id: ((a = m.route) == null ? void 0 : a.id) ?? null
        },
        url: new URL(location.href)
      },
      willUnload: !1,
      type: "enter",
      complete: Promise.resolve()
    };
    J.forEach(o => o(s))
  }
  vt = !0
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
      error: a,
      route: s
    },
    props: {
      constructors: cn(n).map(f => f.node.component),
      page: At(E)
    }
  };
  o !== void 0 && (c.props.form = o);
  let l = {},
    d = !E,
    u = 0;
  for (let f = 0; f < Math.max(n.length, m.branch.length); f += 1) {
    const h = n[f],
      _ = m.branch[f];
    (h == null ? void 0 : h.data) !== (_ == null ? void 0 : _.data) && (d = !0), h && (l = {
      ...l,
      ...h.data
    }, d && (c.props[`data_${u}`] = l), u += 1)
  }
  return (!m.url || t.href !== m.url.href || m.error !== a || o !== void 0 && o !== E.form || d) && (c.props.page = {
    error: a,
    params: e,
    route: {
      id: (s == null ? void 0 : s.id) ?? null
    },
    state: {},
    status: r,
    url: new URL(t),
    form: o ?? null,
    data: d ? l : E.data
  }), c
}
async function Xt({
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

function wn(t, e, n) {
  let r = t instanceof Request ? t.url : t;
  const a = new URL(r, n);
  a.origin === n.origin && (r = a.href.slice(n.origin.length));
  const s = vt ? Xe(r, a.href, e) : Je(r, e);
  return {
    resolved: a,
    promise: s
  }
}

function vn(t, e, n, r, a, s) {
  if (Jt) return !0;
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

function Zt(t, e) {
  return (t == null ? void 0 : t.type) === "data" ? t : (t == null ? void 0 : t.type) === "skip" ? e ?? null : null
}

function yn(t, e) {
  if (!t) return new Set(e.searchParams.keys());
  const n = new Set([...t.searchParams.keys(), ...e.searchParams.keys()]);
  for (const r of n) {
    const a = t.searchParams.getAll(r),
      s = e.searchParams.getAll(r);
    a.every(o => s.includes(o)) && s.every(o => a.includes(o)) && n.delete(r)
  }
  return n
}

function bn({
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
      page: At(E),
      constructors: []
    }
  }
}
async function Pe({
  id: t,
  invalidating: e,
  url: n,
  params: r,
  route: a,
  preload: s
}) {
  if ((v == null ? void 0 : v.id) === t) return yt.delete(v.token), v.promise;
  const {
    errors: o,
    layouts: i,
    leaf: c
  } = a, l = [...i, c];
  o.forEach(g => g == null ? void 0 : g().catch(() => {})), l.forEach(g => g == null ? void 0 : g[1]().catch(() => {}));
  const d = m.url ? t !== kt(m.url) : !1,
    u = m.route ? a.id !== m.route.id : !1,
    y = yn(m.url, n);
  let f = !1;
  const h = l.map(async (g, p) => {
    var C;
    if (!g) return;
    const k = m.branch[p];
    return g[1] === (k == null ? void 0 : k.loader) && !vn(f, u, d, y, (C = k.universal) == null ? void 0 : C.uses, r) ? k : (f = !0, Xt({
      loader: g[1],
      url: n,
      params: r,
      route: a,
      parent: async () => {
        var dt;
        const O = {};
        for (let M = 0; M < p; M += 1) Object.assign(O, (dt = await h[M]) == null ? void 0 : dt.data);
        return O
      },
      server_data_node: Zt(g[0] ? {
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
      if (yt.has(s)) return bn({
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
      let k = Ft(p),
        x;
      if (p instanceof Bt) x = p.body;
      else {
        if (await N.updated.check()) return await xe(), await Q(n);
        x = await et(p, {
          params: r,
          url: n,
          route: {
            id: a.id
          }
        })
      }
      const C = await kn(g, _, o);
      return C ? bt({
        url: n,
        params: r,
        branch: _.slice(0, C.idx).concat(C.node),
        status: k,
        error: x,
        route: a
      }) : await je(n, {
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
async function kn(t, e, n) {
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
async function Qt({
  status: t,
  error: e,
  url: n,
  route: r
}) {
  const a = {};
  let s = null;
  try {
    const o = await Xt({
        loader: Nt,
        url: n,
        params: a,
        route: r,
        parent: () => Promise.resolve({}),
        server_data_node: Zt(s)
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
    if (o instanceof Mt) return Ie(new URL(o.location, location.href), {}, 0);
    throw o
  }
}
async function Sn(t) {
  const e = t.href;
  if (ht.has(e)) return ht.get(e);
  let n;
  try {
    const r = (async () => {
      let a = await b.hooks.reroute({
        url: new URL(t),
        fetch: async (s, o) => wn(s, o, t).promise
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
async function Ut(t, e) {
  if (t && !xt(t, U, b.hash)) {
    const n = await Sn(t);
    if (!n) return;
    const r = En(n);
    for (const a of Yt) {
      const s = a.exec(r);
      if (s) return {
        id: kt(t),
        invalidating: e,
        route: a,
        params: Fe(s),
        url: t
      }
    }
  }
}

function En(t) {
  return ze(b.hash ? t.hash.replace(/^#/, "").replace(/[?#].+/, "") : t.pathname.slice(U.length)) || "/"
}

function kt(t) {
  return (b.hash ? t.hash.replace(/^#/, "") : t.pathname) + t.search
}

function Ce({
  url: t,
  type: e,
  intent: n,
  delta: r,
  event: a
}) {
  let s = !1;
  const o = te(m, n, t, e);
  r !== void 0 && (o.navigation.delta = r), a !== void 0 && (o.navigation.event = a);
  const i = {
    ...o.navigation,
    cancel: () => {
      s = !0, o.reject(new Error("navigation cancelled"))
    }
  };
  return tt || Ht.forEach(c => c(i)), s ? null : o
}
async function F({
  type: t,
  url: e,
  popped: n,
  keepfocus: r,
  noscroll: a,
  replace_state: s,
  state: o = {},
  redirect_count: i = 0,
  nav_token: c = {},
  accept: l = ie,
  block: d = ie,
  event: u
}) {
  var M;
  const y = D;
  D = c;
  const f = await Ut(e, !1),
    h = t === "enter" ? te(m, f, e, t) : Ce({
      url: e,
      type: t,
      delta: n == null ? void 0 : n.delta,
      intent: f,
      event: u
    });
  if (!h) {
    d(), D === c && (D = y);
    return
  }
  const _ = S,
    g = L;
  l(), tt = !0, vt && h.navigation.type !== "enter" && N.navigating.set(X.current = h.navigation);
  let p = f && await Pe(f);
  if (!p) {
    if (xt(e, U, b.hash)) return await Q(e, s);
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
  if (e = (f == null ? void 0 : f.url) || e, D !== c) return h.reject(new Error("navigation aborted")), !1;
  if (p.type === "redirect") {
    if (i < 20) {
      await F({
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
    p = await Qt({
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
  } else p.props.page.status >= 400 && await N.updated.check() && (await xe(), await Q(e, s));
  if (mn(), Gt(_), Te(g), p.props.page.url.pathname !== e.pathname && (e.pathname = p.props.page.url.pathname), o = n ? n.state : o, !n) {
    const R = s ? 0 : 1,
      W = {
        [V]: S += R,
        [G]: L += R,
        [zt]: o
      };
    (s ? history.replaceState : history.pushState).call(history, W, "", e), s || pn(S, L)
  }
  const k = v == null ? void 0 : v.fork;
  v = null, p.props.page.state = o;
  let x;
  if (vt) {
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
  } else await Oe(p, qt, !1);
  const {
    activeElement: C
  } = document;
  await x, await pt(), await pt();
  let O = n ? n.scroll : a ? Rt() : null;
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
  !r && !dt && $n(e, O), ce = !0, p.props.page && Object.assign(E, p.props.page), tt = !1, t === "popstate" && $e(L), h.fulfil(void 0), J.forEach(R => R(h.navigation)), N.navigating.set(X.current = null)
}
async function je(t, e, n, r, a) {
  return t.origin === St && t.pathname === location.pathname && !Ue ? await Qt({
    status: r,
    error: n,
    url: t,
    route: e
  }) : await Q(t, a)
}

function Rn() {
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
    for (const c of i) c.isIntersecting && (Ct(new URL(c.target.href)), a.unobserve(c.target))
  }, {
    threshold: 0
  });
  async function s(i, c) {
    const l = ke(i, P),
      d = l === e && c >= n;
    if (!l || d) return;
    const {
      url: u,
      external: y,
      download: f
    } = jt(l, U, b.hash);
    if (y || f) return;
    const h = gt(l),
      _ = u && kt(m.url) === kt(u);
    if (!(h.reload || _))
      if (c <= h.preload_data) {
        e = l, n = q.tap;
        const g = await Ut(u, !1);
        if (!g) return;
        _n(g)
      } else c <= h.preload_code && (e = l, n = c, Ct(u))
  }

  function o() {
    a.disconnect();
    for (const i of P.querySelectorAll("a")) {
      const {
        url: c,
        external: l,
        download: d
      } = jt(i, U, b.hash);
      if (l || d) continue;
      const u = gt(i);
      u.reload || (u.preload_code === q.viewport && a.observe(i), u.preload_code === q.eager && Ct(c))
    }
  }
  J.add(o), o()
}

function et(t, e) {
  if (t instanceof Bt) return t.body;
  const n = Ft(t),
    r = ln(t);
  return b.hooks.handleError({
    error: t,
    event: e,
    status: n,
    message: r
  }) ?? {
    message: r
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
  return t = new URL(Et(t)), t.origin !== St ? Promise.reject(new Error("goto: invalid URL")) : Ie(t, e, 0)
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

function zn(t, e) {
  const n = {
    [V]: S,
    [G]: L,
    [ye]: E.url.href,
    [zt]: e
  };
  history.replaceState(n, "", Et(t)), E.state = e, Lt.$set({
    page: dn(() => At(E))
  })
}

function Un() {
  var e;
  history.scrollRestoration = "manual", addEventListener("beforeunload", n => {
    let r = !1;
    if (fe(), !tt) {
      const a = te(m, void 0, null, "leave"),
        s = {
          ...a.navigation,
          cancel: () => {
            r = !0, a.reject(new Error("navigation cancelled"))
          }
        };
      Ht.forEach(o => o(s))
    }
    r ? (n.preventDefault(), n.returnValue = "") : history.scrollRestoration = "auto"
  }), addEventListener("visibilitychange", () => {
    document.visibilityState === "hidden" && fe()
  }), (e = navigator.connection) != null && e.saveData || Rn(), P.addEventListener("click", async n => {
    if (n.button || n.which !== 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey || n.defaultPrevented) return;
    const r = ke(n.composedPath()[0], P);
    if (!r) return;
    const {
      url: a,
      external: s,
      target: o,
      download: i
    } = jt(r, U, b.hash);
    if (!a) return;
    if (o === "_parent" || o === "_top") {
      if (window.parent !== window) return
    } else if (o && o !== "_self") return;
    const c = gt(r);
    if (!(r instanceof SVGAElement) && a.protocol !== location.protocol && !(a.protocol === "https:" || a.protocol === "http:") || i) return;
    const [d, u] = (b.hash ? a.hash.replace(/^#/, "") : a.href).split("#"), y = d === It(location);
    if (s || c.reload && (!y || !u)) {
      Ce({
        url: a,
        type: "link",
        event: n
      }) ? tt = !0 : n.preventDefault();
      return
    }
    if (u !== void 0 && y) {
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
      if (Y = !0, Gt(S), t(a), !c.replace_state) return;
      Y = !1
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
  }), P.addEventListener("submit", n => {
    if (n.defaultPrevented) return;
    const r = HTMLFormElement.prototype.cloneNode.call(n.target),
      a = n.submitter;
    if (((a == null ? void 0 : a.formTarget) || r.target) === "_blank" || ((a == null ? void 0 : a.formMethod) || r.method) !== "get") return;
    const i = new URL((a == null ? void 0 : a.hasAttribute("formaction")) && (a == null ? void 0 : a.formAction) || r.action);
    if (xt(i, U, !1)) return;
    const c = n.target,
      l = gt(c);
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
    if (!Dt) {
      if ((r = n.state) != null && r[V]) {
        const a = n.state[V];
        if (D = {}, a === S) return;
        const s = B[a],
          o = n.state[zt] ?? {},
          i = new URL(n.state[ye] ?? location.href),
          c = n.state[G],
          l = m.url ? It(location) === It(m.url) : !1;
        if (c === L && (Ae || l)) {
          o !== E.state && (E.state = o), t(i), B[S] = Rt(), s && scrollTo(s.x, s.y), S = a;
          return
        }
        const u = a - S;
        await F({
          type: "popstate",
          url: i,
          popped: {
            state: o,
            scroll: s,
            delta: u
          },
          accept: () => {
            S = a, L = c
          },
          block: () => {
            history.go(-u)
          },
          nav_token: D,
          event: n
        })
      } else if (!Y) {
        const a = new URL(location.href);
        t(a), b.hash && location.reload()
      }
    }
  }), addEventListener("hashchange", () => {
    Y && (Y = !1, history.replaceState({
      ...history.state,
      [V]: ++S,
      [G]: L
    }, "", location.href))
  });
  for (const n of document.querySelectorAll("link")) hn.has(n.rel) && (n.href = n.href);
  addEventListener("pageshow", n => {
    n.persisted && N.navigating.set(X.current = null)
  });

  function t(n) {
    m.url = E.url = n, N.page.set(At(E)), N.page.notify()
  }
}
async function An(t, {
  status: e = 200,
  error: n,
  node_ids: r,
  params: a,
  route: s,
  server_route: o,
  data: i,
  form: c
}) {
  Ue = !0;
  const l = new URL(location.href);
  let d;
  ({
    params: a = {},
    route: s = {
      id: null
    }
  } = await Ut(l, !1) || {}), d = Yt.find(({
    id: f
  }) => f === s.id);
  let u, y = !0;
  try {
    const f = r.map(async (_, g) => {
        const p = i[g];
        return p != null && p.uses && (p.uses = Tn(p.uses)), Xt({
          loader: b.nodes[_],
          url: l,
          params: a,
          route: s,
          parent: async () => {
            const k = {};
            for (let x = 0; x < g; x += 1) Object.assign(k, (await f[x]).data);
            return k
          },
          server_data_node: Zt(p)
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
    if (f instanceof Mt) {
      await Q(new URL(f.location, location.href));
      return
    }
    u = await Qt({
      status: Ft(f),
      error: await et(f, {
        url: l,
        params: a,
        route: s
      }),
      url: l,
      route: s
    }), t.textContent = "", y = !1
  }
  u.props.page && (u.props.page.state = {}), await Oe(u, t, y)
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
let Dt = !1;

function $n(t, e = null) {
  const n = document.querySelector("[autofocus]");
  if (n) n.focus();
  else {
    const r = Ne(t);
    if (r && document.getElementById(r)) {
      const {
        x: s,
        y: o
      } = e ?? Rt();
      setTimeout(() => {
        const i = history.state;
        Dt = !0, location.replace(`#${r}`), b.hash && location.replace(t.hash), history.replaceState(i, "", t.hash), scrollTo(s, o), Dt = !1
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

function te(t, e, n, r) {
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
  Wn as a, U as b, zn as c, Mn as d, Kn as g, qn as l, E as p, Nn as r, N as s
};
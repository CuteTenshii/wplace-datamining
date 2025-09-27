var tt = e => {
  throw TypeError(e)
};
var Vt = (e, t, n) => t.has(e) || tt("Cannot " + n);
var b = (e, t, n) => (Vt(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
  P = (e, t, n) => t.has(e) ? tt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
import {
  v as qt,
  o as nt,
  a as Mt
} from "./CKDpvWIh.js";
import {
  az as Te,
  aZ as Gt,
  au as C,
  g as N,
  aw as O,
  aL as rt
} from "./D4j1m9ll.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c050fa6bdb18cd16824281f5af6d712ea849d5ba"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "be57a400-bf0a-4942-82e7-0afbedef2799", e._sentryDebugIdIdentifier = "sentry-dbid-be57a400-bf0a-4942-82e7-0afbedef2799")
  })()
} catch {}
const q = [];

function De(e, t = Te) {
  let n = null;
  const a = new Set;

  function r(o) {
    if (Gt(e, o) && (e = o, n)) {
      const c = !q.length;
      for (const l of a) l[1](), q.push(l, e);
      if (c) {
        for (let l = 0; l < q.length; l += 2) q[l][0](q[l + 1]);
        q.length = 0
      }
    }
  }

  function s(o) {
    r(o(e))
  }

  function i(o, c = Te) {
    const l = [o, c];
    return a.add(l), a.size === 1 && (n = t(r, s) || Te), o(e), () => {
      a.delete(l), a.size === 0 && n && (n(), n = null)
    }
  }
  return {
    set: r,
    update: s,
    subscribe: i
  }
}
class Ee {
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
class Fe {
  constructor(t, n) {
    this.status = t, this.location = n
  }
}
class Be extends Error {
  constructor(t, n, a) {
    super(a), this.status = t, this.text = n
  }
}
new URL("sveltekit-internal://");

function Ht(e, t) {
  return e === "/" || t === "ignore" ? e : t === "never" ? e.endsWith("/") ? e.slice(0, -1) : e : t === "always" && !e.endsWith("/") ? e + "/" : e
}

function Kt(e) {
  return e.split("%25").map(decodeURI).join("%25")
}

function Yt(e) {
  for (const t in e) e[t] = decodeURIComponent(e[t]);
  return e
}

function Ue({
  href: e
}) {
  return e.split("#")[0]
}

function zt(e, t, n, a = !1) {
  const r = new URL(e);
  Object.defineProperty(r, "searchParams", {
    value: new Proxy(r.searchParams, {
      get(i, o) {
        if (o === "get" || o === "getAll" || o === "has") return l => (n(l), i[o](l));
        t();
        const c = Reflect.get(i, o);
        return typeof c == "function" ? c.bind(i) : c
      }
    }),
    enumerable: !0,
    configurable: !0
  });
  const s = ["href", "pathname", "search", "toString", "toJSON"];
  a && s.push("hash");
  for (const i of s) Object.defineProperty(r, i, {
    get() {
      return t(), e[i]
    },
    enumerable: !0,
    configurable: !0
  });
  return r
}

function Wt(...e) {
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
const Jt = new TextDecoder;

function Xt(e) {
  const t = atob(e),
    n = new Uint8Array(t.length);
  for (let a = 0; a < t.length; a++) n[a] = t.charCodeAt(a);
  return n
}
const Zt = window.fetch;
window.fetch = (e, t) => ((e instanceof Request ? e.method : (t == null ? void 0 : t.method) || "GET") !== "GET" && z.delete(Ve(e)), Zt(e, t));
const z = new Map;

function Qt(e, t) {
  const n = Ve(e, t),
    a = document.querySelector(n);
  if (a != null && a.textContent) {
    a.remove();
    let {
      body: r,
      ...s
    } = JSON.parse(a.textContent);
    const i = a.getAttribute("data-ttl");
    return i && z.set(n, {
      body: r,
      init: s,
      ttl: 1e3 * Number(i)
    }), a.getAttribute("data-b64") !== null && (r = Xt(r)), Promise.resolve(new Response(r, s))
  }
  return window.fetch(e, t)
}

function en(e, t, n) {
  if (z.size > 0) {
    const a = Ve(e, n),
      r = z.get(a);
    if (r) {
      if (performance.now() < r.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(n == null ? void 0 : n.cache)) return new Response(r.body, r.init);
      z.delete(a)
    }
  }
  return window.fetch(t, n)
}

function Ve(e, t) {
  let a = `script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;
  if (t != null && t.headers || t != null && t.body) {
    const r = [];
    t.headers && r.push([...new Headers(t.headers)].join(",")), t.body && (typeof t.body == "string" || ArrayBuffer.isView(t.body)) && r.push(t.body), a += `[data-hash="${Wt(...r)}"]`
  }
  return a
}
const tn = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;

function nn(e) {
  const t = [];
  return {
    pattern: e === "/" ? /^\/$/ : new RegExp(`^${an(e).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return t.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/([^]*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const i=a.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return xe(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return xe(String.fromCharCode(...c.slice(2).split("-").map(u=>parseInt(u,16))));const d=tn.exec(c),[,p,y,f,m]=d;return t.push({name:f,matcher:m,optional:!!p,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"([^]*?)":p?"([^/]*)?":"([^/]+?)"}return xe(c)}).join("")}).join("")}/?$`),
    params: t
  }
}

function rn(e) {
  return e !== "" && !/^\([^)]+\)$/.test(e)
}

function an(e) {
  return e.slice(1).split("/").filter(rn)
}

function on(e, t, n) {
  const a = {},
    r = e.slice(1),
    s = r.filter(o => o !== void 0);
  let i = 0;
  for (let o = 0; o < t.length; o += 1) {
    const c = t[o];
    let l = r[o - i];
    if (c.chained && c.rest && i && (l = r.slice(o - i, o + 1).filter(d => d).join("/"), i = 0), l === void 0) {
      c.rest && (a[c.name] = "");
      continue
    }
    if (!c.matcher || n[c.matcher](l)) {
      a[c.name] = l;
      const d = t[o + 1],
        p = r[o + 1];
      d && !d.rest && d.optional && p && c.chained && (i = 0), !d && !p && Object.keys(a).length === s.length && (i = 0);
      continue
    }
    if (c.optional && c.chained) {
      i++;
      continue
    }
    return
  }
  if (!i) return a
}

function xe(e) {
  return e.normalize().replace(/[[\]]/g, "\\$&").replace(/%/g, "%25").replace(/\//g, "%2[Ff]").replace(/\?/g, "%3[Ff]").replace(/#/g, "%23").replace(/[.*+?^${}()|\\]/g, "\\$&")
}

function sn({
  nodes: e,
  server_loads: t,
  dictionary: n,
  matchers: a
}) {
  const r = new Set(t);
  return Object.entries(n).map(([o, [c, l, d]]) => {
    const {
      pattern: p,
      params: y
    } = nn(o), f = {
      id: o,
      exec: m => {
        const u = p.exec(m);
        if (u) return on(u, y, a)
      },
      errors: [1, ...d || []].map(m => e[m]),
      layouts: [0, ...l || []].map(i),
      leaf: s(c)
    };
    return f.errors.length = f.layouts.length = Math.max(f.errors.length, f.layouts.length), f
  });

  function s(o) {
    const c = o < 0;
    return c && (o = ~o), [c, e[o]]
  }

  function i(o) {
    return o === void 0 ? o : [r.has(o), e[o]]
  }
}

function vt(e, t = JSON.parse) {
  try {
    return t(sessionStorage[e])
  } catch {}
}

function at(e, t, n = JSON.stringify) {
  const a = n(t);
  try {
    sessionStorage[e] = a
  } catch {}
}
var gt;
const x = ((gt = globalThis.__sveltekit_9e99iw) == null ? void 0 : gt.base) ?? "";
var mt;
const cn = ((mt = globalThis.__sveltekit_9e99iw) == null ? void 0 : mt.assets) ?? x,
  bt = "sveltekit:snapshot",
  Et = "sveltekit:scroll",
  At = "sveltekit:states",
  ln = "sveltekit:pageurl",
  G = "sveltekit:history",
  Z = "sveltekit:navigation",
  F = {
    tap: 1,
    hover: 2,
    viewport: 3,
    eager: 4,
    off: -1,
    false: -1
  },
  de = location.origin;

function qe(e) {
  if (e instanceof URL) return e;
  let t = document.baseURI;
  if (!t) {
    const n = document.getElementsByTagName("base");
    t = n.length ? n[0].href : document.URL
  }
  return new URL(e, t)
}

function Ae() {
  return {
    x: pageXOffset,
    y: pageYOffset
  }
}

function M(e, t) {
  return e.getAttribute(`data-sveltekit-${t}`)
}
const ot = {
  ...F,
  "": F.hover
};

function kt(e) {
  let t = e.assignedSlot ?? e.parentNode;
  return (t == null ? void 0 : t.nodeType) === 11 && (t = t.host), t
}

function St(e, t) {
  for (; e && e !== t;) {
    if (e.nodeName.toUpperCase() === "A" && e.hasAttribute("href")) return e;
    e = kt(e)
  }
}

function Ne(e, t, n) {
  let a;
  try {
    if (a = new URL(e instanceof SVGAElement ? e.href.baseVal : e.href, document.baseURI), n && a.hash.match(/^#[^/]/)) {
      const o = location.hash.split("#")[1] || "/";
      a.hash = `#${o}${a.hash}`
    }
  } catch {}
  const r = e instanceof SVGAElement ? e.target.baseVal : e.target,
    s = !a || !!r || ke(a, t, n) || (e.getAttribute("rel") || "").split(/\s+/).includes("external"),
    i = (a == null ? void 0 : a.origin) === de && e.hasAttribute("download");
  return {
    url: a,
    external: s,
    target: r,
    download: i
  }
}

function pe(e) {
  let t = null,
    n = null,
    a = null,
    r = null,
    s = null,
    i = null,
    o = e;
  for (; o && o !== document.documentElement;) a === null && (a = M(o, "preload-code")), r === null && (r = M(o, "preload-data")), t === null && (t = M(o, "keepfocus")), n === null && (n = M(o, "noscroll")), s === null && (s = M(o, "reload")), i === null && (i = M(o, "replacestate")), o = kt(o);

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
    preload_code: ot[a ?? "off"],
    preload_data: ot[r ?? "off"],
    keepfocus: c(t),
    noscroll: c(n),
    reload: c(s),
    replace_state: c(i)
  }
}

function st(e) {
  const t = De(e);
  let n = !0;

  function a() {
    n = !0, t.update(i => i)
  }

  function r(i) {
    n = !1, t.set(i)
  }

  function s(i) {
    let o;
    return t.subscribe(c => {
      (o === void 0 || n && c !== o) && i(o = c)
    })
  }
  return {
    notify: a,
    set: r,
    subscribe: s
  }
}
const Rt = {
  v: () => {}
};

function fn() {
  const {
    set: e,
    subscribe: t
  } = De(!1);
  let n;
  async function a() {
    clearTimeout(n);
    try {
      const r = await fetch(`${cn}/_app/version.json`, {
        headers: {
          pragma: "no-cache",
          "cache-control": "no-cache"
        }
      });
      if (!r.ok) return !1;
      const i = (await r.json()).version !== qt;
      return i && (e(!0), Rt.v(), clearTimeout(n)), i
    } catch {
      return !1
    }
  }
  return {
    subscribe: t,
    check: a
  }
}

function ke(e, t, n) {
  return e.origin !== de || !e.pathname.startsWith(t) ? !0 : n ? !(e.pathname === t + "/" || e.pathname === t + "/index.html" || e.protocol === "file:" && e.pathname.replace(/\/[^/]+\.html?$/, "") === t) : !1
}

function Zn(e) {}

function it(e) {
  const t = dn(e),
    n = new ArrayBuffer(t.length),
    a = new DataView(n);
  for (let r = 0; r < n.byteLength; r++) a.setUint8(r, t.charCodeAt(r));
  return n
}
const un = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function dn(e) {
  e.length % 4 === 0 && (e = e.replace(/==?$/, ""));
  let t = "",
    n = 0,
    a = 0;
  for (let r = 0; r < e.length; r++) n <<= 6, n |= un.indexOf(e[r]), a += 6, a === 24 && (t += String.fromCharCode((n & 16711680) >> 16), t += String.fromCharCode((n & 65280) >> 8), t += String.fromCharCode(n & 255), n = a = 0);
  return a === 12 ? (n >>= 4, t += String.fromCharCode(n)) : a === 18 && (n >>= 2, t += String.fromCharCode((n & 65280) >> 8), t += String.fromCharCode(n & 255)), t
}
const hn = -1,
  pn = -2,
  gn = -3,
  mn = -4,
  yn = -5,
  wn = -6;

function _n(e, t) {
  if (typeof e == "number") return r(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw new Error("Invalid input");
  const n = e,
    a = Array(n.length);

  function r(s, i = !1) {
    if (s === hn) return;
    if (s === gn) return NaN;
    if (s === mn) return 1 / 0;
    if (s === yn) return -1 / 0;
    if (s === wn) return -0;
    if (i) throw new Error("Invalid input");
    if (s in a) return a[s];
    const o = n[s];
    if (!o || typeof o != "object") a[s] = o;
    else if (Array.isArray(o))
      if (typeof o[0] == "string") {
        const c = o[0],
          l = t == null ? void 0 : t[c];
        if (l) return a[s] = l(r(o[1]));
        switch (c) {
          case "Date":
            a[s] = new Date(o[1]);
            break;
          case "Set":
            const d = new Set;
            a[s] = d;
            for (let f = 1; f < o.length; f += 1) d.add(r(o[f]));
            break;
          case "Map":
            const p = new Map;
            a[s] = p;
            for (let f = 1; f < o.length; f += 2) p.set(r(o[f]), r(o[f + 1]));
            break;
          case "RegExp":
            a[s] = new RegExp(o[1], o[2]);
            break;
          case "Object":
            a[s] = Object(o[1]);
            break;
          case "BigInt":
            a[s] = BigInt(o[1]);
            break;
          case "null":
            const y = Object.create(null);
            a[s] = y;
            for (let f = 1; f < o.length; f += 2) y[o[f]] = r(o[f + 1]);
            break;
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array": {
            const f = globalThis[c],
              m = o[1],
              u = it(m),
              h = new f(u);
            a[s] = h;
            break
          }
          case "ArrayBuffer": {
            const f = o[1],
              m = it(f);
            a[s] = m;
            break
          }
          default:
            throw new Error(`Unknown type ${c}`)
        }
      } else {
        const c = new Array(o.length);
        a[s] = c;
        for (let l = 0; l < o.length; l += 1) {
          const d = o[l];
          d !== pn && (c[l] = r(d))
        }
      }
    else {
      const c = {};
      a[s] = c;
      for (const l in o) {
        const d = o[l];
        c[l] = r(d)
      }
    }
    return a[s]
  }
  return r(0)
}
const It = new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...It];
const vn = new Set([...It]);
[...vn];

function bn(e) {
  return e.filter(t => t != null)
}
const En = "x-sveltekit-invalidated",
  An = "x-sveltekit-trailing-slash";

function ge(e) {
  return e instanceof Ee || e instanceof Be ? e.status : 500
}

function kn(e) {
  return e instanceof Be ? e.text : "Internal Error"
}
let L, Q, Pe;
const Sn = nt.toString().includes("$$") || /function \w+\(\) \{\}/.test(nt.toString());
var ne, re, ae, oe, se, ie, ce, le, yt, fe, wt, ue, _t;
Sn ? (L = {
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
}, Q = {
  current: null
}, Pe = {
  current: !1
}) : (L = new(yt = class {
  constructor() {
    P(this, ne, C({}));
    P(this, re, C(null));
    P(this, ae, C(null));
    P(this, oe, C({}));
    P(this, se, C({
      id: null
    }));
    P(this, ie, C({}));
    P(this, ce, C(-1));
    P(this, le, C(new URL("https://example.com")))
  }
  get data() {
    return N(b(this, ne))
  }
  set data(t) {
    O(b(this, ne), t)
  }
  get form() {
    return N(b(this, re))
  }
  set form(t) {
    O(b(this, re), t)
  }
  get error() {
    return N(b(this, ae))
  }
  set error(t) {
    O(b(this, ae), t)
  }
  get params() {
    return N(b(this, oe))
  }
  set params(t) {
    O(b(this, oe), t)
  }
  get route() {
    return N(b(this, se))
  }
  set route(t) {
    O(b(this, se), t)
  }
  get state() {
    return N(b(this, ie))
  }
  set state(t) {
    O(b(this, ie), t)
  }
  get status() {
    return N(b(this, ce))
  }
  set status(t) {
    O(b(this, ce), t)
  }
  get url() {
    return N(b(this, le))
  }
  set url(t) {
    O(b(this, le), t)
  }
}, ne = new WeakMap, re = new WeakMap, ae = new WeakMap, oe = new WeakMap, se = new WeakMap, ie = new WeakMap, ce = new WeakMap, le = new WeakMap, yt), Q = new(wt = class {
  constructor() {
    P(this, fe, C(null))
  }
  get current() {
    return N(b(this, fe))
  }
  set current(t) {
    O(b(this, fe), t)
  }
}, fe = new WeakMap, wt), Pe = new(_t = class {
  constructor() {
    P(this, ue, C(!1))
  }
  get current() {
    return N(b(this, ue))
  }
  set current(t) {
    O(b(this, ue), t)
  }
}, ue = new WeakMap, _t), Rt.v = () => Pe.current = !0);

function Rn(e) {
  Object.assign(L, e)
}
const In = "/__data.json",
  Ln = ".html__data.json";

function Tn(e) {
  return e.endsWith(".html") ? e.replace(/\.html$/, Ln) : e.replace(/\/$/, "") + In
}
const ct = {
    spanContext() {
      return Un
    },
    setAttribute() {
      return this
    },
    setAttributes() {
      return this
    },
    addEvent() {
      return this
    },
    setStatus() {
      return this
    },
    updateName() {
      return this
    },
    end() {
      return this
    },
    isRecording() {
      return !1
    },
    recordException() {
      return this
    },
    addLink() {
      return this
    },
    addLinks() {
      return this
    }
  },
  Un = {
    traceId: "",
    spanId: "",
    traceFlags: 0
  },
  {
    onMount: xn,
    tick: Pn
  } = Mt,
  Cn = new Set(["icon", "shortcut icon", "apple-touch-icon"]),
  V = vt(Et) ?? {},
  ee = vt(bt) ?? {},
  $ = {
    url: st({}),
    page: st({}),
    navigating: De(null),
    updated: fn()
  };

function Me(e) {
  V[e] = Ae()
}

function Nn(e, t) {
  let n = e + 1;
  for (; V[n];) delete V[n], n += 1;
  for (n = t + 1; ee[n];) delete ee[n], n += 1
}

function K(e) {
  return location.href = e.href, new Promise(() => {})
}
async function Lt() {
  if ("serviceWorker" in navigator) {
    const e = await navigator.serviceWorker.getRegistration(x || "/");
    e && await e.update()
  }
}

function lt() {}
let Ge, Oe, me, j, je, E;
globalThis.__sveltekit_9e99iw.data;
const ye = [],
  we = [];
let T = null;
const he = new Map,
  He = new Set,
  On = new Set,
  W = new Set;
let _ = {
    branch: [],
    error: null,
    url: null
  },
  Ke = !1,
  _e = !1,
  ft = !0,
  te = !1,
  Y = !1,
  Tt = !1,
  Ye = !1,
  Ut, S, U, B;
const J = new Set,
  ut = new Map;
async function nr(e, t, n) {
  var s, i, o, c;
  document.URL !== location.href && (location.href = location.href), E = e, await ((i = (s = e.hooks).init) == null ? void 0 : i.call(s)), Ge = sn(e), j = document.documentElement, je = t, Oe = e.nodes[0], me = e.nodes[1], Oe(), me(), S = (o = history.state) == null ? void 0 : o[G], U = (c = history.state) == null ? void 0 : c[Z], S || (S = U = Date.now(), history.replaceState({
    ...history.state,
    [G]: S,
    [Z]: U
  }, ""));
  const a = V[S];

  function r() {
    a && (history.scrollRestoration = "manual", scrollTo(a.x, a.y))
  }
  n ? (r(), await Kn(je, n)) : (await X({
    type: "enter",
    url: qe(E.hash ? zn(new URL(location.href)) : location.href),
    replace_state: !0
  }), r()), Hn()
}

function jn() {
  ye.length = 0, Ye = !1
}

function xt(e) {
  we.some(t => t == null ? void 0 : t.snapshot) && (ee[e] = we.map(t => {
    var n;
    return (n = t == null ? void 0 : t.snapshot) == null ? void 0 : n.capture()
  }))
}

function Pt(e) {
  var t;
  (t = ee[e]) == null || t.forEach((n, a) => {
    var r, s;
    (s = (r = we[a]) == null ? void 0 : r.snapshot) == null || s.restore(n)
  })
}

function dt() {
  Me(S), at(Et, V), xt(U), at(bt, ee)
}
async function ze(e, t, n, a) {
  let r;
  const s = await X({
    type: "goto",
    url: qe(e),
    keepfocus: t.keepFocus,
    noscroll: t.noScroll,
    replace_state: t.replaceState,
    state: t.state,
    redirect_count: n,
    nav_token: a,
    accept: () => {
      t.invalidateAll && (Ye = !0, r = [...ut.keys()]), t.invalidate && t.invalidate.forEach(Gn)
    }
  });
  return t.invalidateAll && rt().then(rt).then(() => {
    ut.forEach(({
      resource: i
    }, o) => {
      var c;
      r != null && r.includes(o) && ((c = i.refresh) == null || c.call(i))
    })
  }), s
}
async function $n(e) {
  if (e.id !== (T == null ? void 0 : T.id)) {
    const t = {};
    J.add(t), T = {
      id: e.id,
      token: t,
      promise: Ot({
        ...e,
        preload: t
      }).then(n => (J.delete(t), n.type === "loaded" && n.state.error && (T = null), n))
    }
  }
  return T.promise
}
async function Ce(e) {
  var n;
  const t = (n = await Re(e, !1)) == null ? void 0 : n.route;
  t && await Promise.all([...t.layouts, t.leaf].map(a => a == null ? void 0 : a[1]()))
}

function Ct(e, t, n) {
  var r;
  _ = e.state;
  const a = document.querySelector("style[data-sveltekit]");
  if (a && a.remove(), Object.assign(L, e.props.page), Ut = new E.root({
      target: t,
      props: {
        ...e.props,
        stores: $,
        components: we
      },
      hydrate: n,
      sync: !1
    }), Pt(U), n) {
    const s = {
      from: null,
      to: {
        params: _.params,
        route: {
          id: ((r = _.route) == null ? void 0 : r.id) ?? null
        },
        url: new URL(location.href)
      },
      willUnload: !1,
      type: "enter",
      complete: Promise.resolve()
    };
    W.forEach(i => i(s))
  }
  _e = !0
}

function ve({
  url: e,
  params: t,
  branch: n,
  status: a,
  error: r,
  route: s,
  form: i
}) {
  let o = "never";
  if (x && (e.pathname === x || e.pathname === x + "/")) o = "always";
  else
    for (const f of n)(f == null ? void 0 : f.slash) !== void 0 && (o = f.slash);
  e.pathname = Ht(e.pathname, o), e.search = e.search;
  const c = {
    type: "loaded",
    state: {
      url: e,
      params: t,
      branch: n,
      error: r,
      route: s
    },
    props: {
      constructors: bn(n).map(f => f.node.component),
      page: Ze(L)
    }
  };
  i !== void 0 && (c.props.form = i);
  let l = {},
    d = !L,
    p = 0;
  for (let f = 0; f < Math.max(n.length, _.branch.length); f += 1) {
    const m = n[f],
      u = _.branch[f];
    (m == null ? void 0 : m.data) !== (u == null ? void 0 : u.data) && (d = !0), m && (l = {
      ...l,
      ...m.data
    }, d && (c.props[`data_${p}`] = l), p += 1)
  }
  return (!_.url || e.href !== _.url.href || _.error !== r || i !== void 0 && i !== L.form || d) && (c.props.page = {
    error: r,
    params: t,
    route: {
      id: (s == null ? void 0 : s.id) ?? null
    },
    state: {},
    status: a,
    url: new URL(e),
    form: i ?? null,
    data: d ? l : L.data
  }), c
}
async function We({
  loader: e,
  parent: t,
  url: n,
  params: a,
  route: r,
  server_data_node: s
}) {
  var d, p, y;
  let i = null,
    o = !0;
  const c = {
      dependencies: new Set,
      params: new Set,
      parent: !1,
      route: !1,
      url: !1,
      search_params: new Set
    },
    l = await e();
  if ((d = l.universal) != null && d.load) {
    let f = function(...u) {
      for (const h of u) {
        const {
          href: A
        } = new URL(h, n);
        c.dependencies.add(A)
      }
    };
    const m = {
      tracing: {
        enabled: !1,
        root: ct,
        current: ct
      },
      route: new Proxy(r, {
        get: (u, h) => (o && (c.route = !0), u[h])
      }),
      params: new Proxy(a, {
        get: (u, h) => (o && c.params.add(h), u[h])
      }),
      data: (s == null ? void 0 : s.data) ?? null,
      url: zt(n, () => {
        o && (c.url = !0)
      }, u => {
        o && c.search_params.add(u)
      }, E.hash),
      async fetch(u, h) {
        u instanceof Request && (h = {
          body: u.method === "GET" || u.method === "HEAD" ? void 0 : await u.blob(),
          cache: u.cache,
          credentials: u.credentials,
          headers: [...u.headers].length > 0 ? u == null ? void 0 : u.headers : void 0,
          integrity: u.integrity,
          keepalive: u.keepalive,
          method: u.method,
          mode: u.mode,
          redirect: u.redirect,
          referrer: u.referrer,
          referrerPolicy: u.referrerPolicy,
          signal: u.signal,
          ...h
        });
        const {
          resolved: A,
          promise: R
        } = Nt(u, h, n);
        return o && f(A.href), R
      },
      setHeaders: () => {},
      depends: f,
      parent() {
        return o && (c.parent = !0), t()
      },
      untrack(u) {
        o = !1;
        try {
          return u()
        } finally {
          o = !0
        }
      }
    };
    i = await l.universal.load.call(null, m) ?? null
  }
  return {
    node: l,
    loader: e,
    server: s,
    universal: (p = l.universal) != null && p.load ? {
      type: "data",
      data: i,
      uses: c
    } : null,
    data: i ?? (s == null ? void 0 : s.data) ?? null,
    slash: ((y = l.universal) == null ? void 0 : y.trailingSlash) ?? (s == null ? void 0 : s.slash)
  }
}

function Nt(e, t, n) {
  let a = e instanceof Request ? e.url : e;
  const r = new URL(a, n);
  r.origin === n.origin && (a = r.href.slice(n.origin.length));
  const s = _e ? en(a, r.href, t) : Qt(a, t);
  return {
    resolved: r,
    promise: s
  }
}

function ht(e, t, n, a, r, s) {
  if (Ye) return !0;
  if (!r) return !1;
  if (r.parent && e || r.route && t || r.url && n) return !0;
  for (const i of r.search_params)
    if (a.has(i)) return !0;
  for (const i of r.params)
    if (s[i] !== _.params[i]) return !0;
  for (const i of r.dependencies)
    if (ye.some(o => o(new URL(i)))) return !0;
  return !1
}

function Je(e, t) {
  return (e == null ? void 0 : e.type) === "data" ? e : (e == null ? void 0 : e.type) === "skip" ? t ?? null : null
}

function Dn(e, t) {
  if (!e) return new Set(t.searchParams.keys());
  const n = new Set([...e.searchParams.keys(), ...t.searchParams.keys()]);
  for (const a of n) {
    const r = e.searchParams.getAll(a),
      s = t.searchParams.getAll(a);
    r.every(i => s.includes(i)) && s.every(i => r.includes(i)) && n.delete(a)
  }
  return n
}

function pt({
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
      page: Ze(L),
      constructors: []
    }
  }
}
async function Ot({
  id: e,
  invalidating: t,
  url: n,
  params: a,
  route: r,
  preload: s
}) {
  if ((T == null ? void 0 : T.id) === e) return J.delete(T.token), T.promise;
  const {
    errors: i,
    layouts: o,
    leaf: c
  } = r, l = [...o, c];
  i.forEach(g => g == null ? void 0 : g().catch(() => {})), l.forEach(g => g == null ? void 0 : g[1]().catch(() => {}));
  let d = null;
  const p = _.url ? e !== be(_.url) : !1,
    y = _.route ? r.id !== _.route.id : !1,
    f = Dn(_.url, n);
  let m = !1;
  const u = l.map((g, w) => {
    var D;
    const v = _.branch[w],
      k = !!(g != null && g[0]) && ((v == null ? void 0 : v.loader) !== g[1] || ht(m, y, p, f, (D = v.server) == null ? void 0 : D.uses, a));
    return k && (m = !0), k
  });
  if (u.some(Boolean)) {
    try {
      d = await Dt(n, u)
    } catch (g) {
      const w = await H(g, {
        url: n,
        params: a,
        route: {
          id: e
        }
      });
      return J.has(s) ? pt({
        error: w,
        url: n,
        params: a,
        route: r
      }) : Se({
        status: ge(g),
        error: w,
        url: n,
        route: r
      })
    }
    if (d.type === "redirect") return d
  }
  const h = d == null ? void 0 : d.nodes;
  let A = !1;
  const R = l.map(async (g, w) => {
    var Ie;
    if (!g) return;
    const v = _.branch[w],
      k = h == null ? void 0 : h[w];
    if ((!k || k.type === "skip") && g[1] === (v == null ? void 0 : v.loader) && !ht(A, y, p, f, (Ie = v.universal) == null ? void 0 : Ie.uses, a)) return v;
    if (A = !0, (k == null ? void 0 : k.type) === "error") throw k;
    return We({
      loader: g[1],
      url: n,
      params: a,
      route: r,
      parent: async () => {
        var et;
        const Qe = {};
        for (let Le = 0; Le < w; Le += 1) Object.assign(Qe, (et = await R[Le]) == null ? void 0 : et.data);
        return Qe
      },
      server_data_node: Je(k === void 0 && g[0] ? {
        type: "skip"
      } : k ?? null, g[0] ? v == null ? void 0 : v.server : void 0)
    })
  });
  for (const g of R) g.catch(() => {});
  const I = [];
  for (let g = 0; g < l.length; g += 1)
    if (l[g]) try {
      I.push(await R[g])
    } catch (w) {
      if (w instanceof Fe) return {
        type: "redirect",
        location: w.location
      };
      if (J.has(s)) return pt({
        error: await H(w, {
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
      let v = ge(w),
        k;
      if (h != null && h.includes(w)) v = w.status ?? v, k = w.error;
      else if (w instanceof Ee) k = w.body;
      else {
        if (await $.updated.check()) return await Lt(), await K(n);
        k = await H(w, {
          params: a,
          url: n,
          route: {
            id: r.id
          }
        })
      }
      const D = await Fn(g, I, i);
      return D ? ve({
        url: n,
        params: a,
        branch: I.slice(0, D.idx).concat(D.node),
        status: v,
        error: k,
        route: r
      }) : await $t(n, {
        id: r.id
      }, k, v)
    } else I.push(void 0);
  return ve({
    url: n,
    params: a,
    branch: I,
    status: 200,
    error: null,
    route: r,
    form: t ? void 0 : null
  })
}
async function Fn(e, t, n) {
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
async function Se({
  status: e,
  error: t,
  url: n,
  route: a
}) {
  const r = {};
  let s = null;
  if (E.server_loads[0] === 0) try {
    const o = await Dt(n, [!0]);
    if (o.type !== "data" || o.nodes[0] && o.nodes[0].type !== "data") throw 0;
    s = o.nodes[0] ?? null
  } catch {
    (n.origin !== de || n.pathname !== location.pathname || Ke) && await K(n)
  }
  try {
    const o = await We({
        loader: Oe,
        url: n,
        params: r,
        route: a,
        parent: () => Promise.resolve({}),
        server_data_node: Je(s)
      }),
      c = {
        node: await me(),
        loader: me,
        universal: null,
        server: null,
        data: null
      };
    return ve({
      url: n,
      params: r,
      branch: [o, c],
      status: e,
      error: t,
      route: null
    })
  } catch (o) {
    if (o instanceof Fe) return ze(new URL(o.location, location.href), {}, 0);
    throw o
  }
}
async function Bn(e) {
  const t = e.href;
  if (he.has(t)) return he.get(t);
  let n;
  try {
    const a = (async () => {
      let r = await E.hooks.reroute({
        url: new URL(e),
        fetch: async (s, i) => Nt(s, i, e).promise
      }) ?? e;
      if (typeof r == "string") {
        const s = new URL(e);
        E.hash ? s.hash = r : s.pathname = r, r = s
      }
      return r
    })();
    he.set(t, a), n = await a
  } catch {
    he.delete(t);
    return
  }
  return n
}
async function Re(e, t) {
  if (e && !ke(e, x, E.hash)) {
    const n = await Bn(e);
    if (!n) return;
    const a = Vn(n);
    for (const r of Ge) {
      const s = r.exec(a);
      if (s) return {
        id: be(e),
        invalidating: t,
        route: r,
        params: Yt(s),
        url: e
      }
    }
  }
}

function Vn(e) {
  return Kt(E.hash ? e.hash.replace(/^#/, "").replace(/[?#].+/, "") : e.pathname.slice(x.length)) || "/"
}

function be(e) {
  return (E.hash ? e.hash.replace(/^#/, "") : e.pathname) + e.search
}

function jt({
  url: e,
  type: t,
  intent: n,
  delta: a
}) {
  let r = !1;
  const s = Xe(_, n, e, t);
  a !== void 0 && (s.navigation.delta = a);
  const i = {
    ...s.navigation,
    cancel: () => {
      r = !0, s.reject(new Error("navigation cancelled"))
    }
  };
  return te || He.forEach(o => o(i)), r ? null : s
}
async function X({
  type: e,
  url: t,
  popped: n,
  keepfocus: a,
  noscroll: r,
  replace_state: s,
  state: i = {},
  redirect_count: o = 0,
  nav_token: c = {},
  accept: l = lt,
  block: d = lt
}) {
  const p = B;
  B = c;
  const y = await Re(t, !1),
    f = e === "enter" ? Xe(_, y, t, e) : jt({
      url: t,
      type: e,
      delta: n == null ? void 0 : n.delta,
      intent: y
    });
  if (!f) {
    d(), B === c && (B = p);
    return
  }
  const m = S,
    u = U;
  l(), te = !0, _e && f.navigation.type !== "enter" && $.navigating.set(Q.current = f.navigation);
  let h = y && await Ot(y);
  if (!h) {
    if (ke(t, x, E.hash)) return await K(t);
    h = await $t(t, {
      id: null
    }, await H(new Be(404, "Not Found", `Not found: ${t.pathname}`), {
      url: t,
      params: {},
      route: {
        id: null
      }
    }), 404)
  }
  if (t = (y == null ? void 0 : y.url) || t, B !== c) return f.reject(new Error("navigation aborted")), !1;
  if (h.type === "redirect")
    if (o >= 20) h = await Se({
      status: 500,
      error: await H(new Error("Redirect loop"), {
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
    });
    else return await ze(new URL(h.location, t).href, {}, o + 1, c), !1;
  else h.props.page.status >= 400 && await $.updated.check() && (await Lt(), await K(t));
  if (jn(), Me(m), xt(u), h.props.page.url.pathname !== t.pathname && (t.pathname = h.props.page.url.pathname), i = n ? n.state : i, !n) {
    const g = s ? 0 : 1,
      w = {
        [G]: S += g,
        [Z]: U += g,
        [At]: i
      };
    (s ? history.replaceState : history.pushState).call(history, w, "", t), s || Nn(S, U)
  }
  if (T = null, h.props.page.state = i, _e) {
    const g = (await Promise.all(Array.from(On, w => w(f.navigation)))).filter(w => typeof w == "function");
    if (g.length > 0) {
      let w = function() {
        g.forEach(v => {
          W.delete(v)
        })
      };
      g.push(w), g.forEach(v => {
        W.add(v)
      })
    }
    _ = h.state, h.props.page && (h.props.page.url = t), Ut.$set(h.props), Rn(h.props.page), Tt = !0
  } else Ct(h, je, !1);
  const {
    activeElement: A
  } = document;
  await Pn();
  const R = n ? n.scroll : r ? Ae() : null;
  if (ft) {
    const g = t.hash && document.getElementById(Bt(t));
    R ? scrollTo(R.x, R.y) : g ? g.scrollIntoView() : scrollTo(0, 0)
  }
  const I = document.activeElement !== A && document.activeElement !== document.body;
  !a && !I && Yn(t), ft = !0, h.props.page && Object.assign(L, h.props.page), te = !1, e === "popstate" && Pt(U), f.fulfil(void 0), W.forEach(g => g(f.navigation)), $.navigating.set(Q.current = null)
}
async function $t(e, t, n, a) {
  return e.origin === de && e.pathname === location.pathname && !Ke ? await Se({
    status: a,
    error: n,
    url: e,
    route: t
  }) : await K(e)
}

function qn() {
  let e, t, n;
  j.addEventListener("mousemove", o => {
    const c = o.target;
    clearTimeout(e), e = setTimeout(() => {
      s(c, F.hover)
    }, 20)
  });

  function a(o) {
    o.defaultPrevented || s(o.composedPath()[0], F.tap)
  }
  j.addEventListener("mousedown", a), j.addEventListener("touchstart", a, {
    passive: !0
  });
  const r = new IntersectionObserver(o => {
    for (const c of o) c.isIntersecting && (Ce(new URL(c.target.href)), r.unobserve(c.target))
  }, {
    threshold: 0
  });
  async function s(o, c) {
    const l = St(o, j),
      d = l === t && c >= n;
    if (!l || d) return;
    const {
      url: p,
      external: y,
      download: f
    } = Ne(l, x, E.hash);
    if (y || f) return;
    const m = pe(l),
      u = p && be(_.url) === be(p);
    if (!(m.reload || u))
      if (c <= m.preload_data) {
        t = l, n = F.tap;
        const h = await Re(p, !1);
        if (!h) return;
        $n(h)
      } else c <= m.preload_code && (t = l, n = c, Ce(p))
  }

  function i() {
    r.disconnect();
    for (const o of j.querySelectorAll("a")) {
      const {
        url: c,
        external: l,
        download: d
      } = Ne(o, x, E.hash);
      if (l || d) continue;
      const p = pe(o);
      p.reload || (p.preload_code === F.viewport && r.observe(o), p.preload_code === F.eager && Ce(c))
    }
  }
  W.add(i), i()
}

function H(e, t) {
  if (e instanceof Ee) return e.body;
  const n = ge(e),
    a = kn(e);
  return E.hooks.handleError({
    error: e,
    event: t,
    status: n,
    message: a
  }) ?? {
    message: a
  }
}

function Mn(e, t) {
  xn(() => (e.add(t), () => {
    e.delete(t)
  }))
}

function rr(e) {
  Mn(He, e)
}

function ar(e, t = {}) {
  return e = new URL(qe(e)), e.origin !== de ? Promise.reject(new Error("goto: invalid URL")) : ze(e, t, 0)
}

function Gn(e) {
  if (typeof e == "function") ye.push(e);
  else {
    const {
      href: t
    } = new URL(e, location.href);
    ye.push(n => n.href === t)
  }
}

function Hn() {
  var t;
  history.scrollRestoration = "manual", addEventListener("beforeunload", n => {
    let a = !1;
    if (dt(), !te) {
      const r = Xe(_, void 0, null, "leave"),
        s = {
          ...r.navigation,
          cancel: () => {
            a = !0, r.reject(new Error("navigation cancelled"))
          }
        };
      He.forEach(i => i(s))
    }
    a ? (n.preventDefault(), n.returnValue = "") : history.scrollRestoration = "auto"
  }), addEventListener("visibilitychange", () => {
    document.visibilityState === "hidden" && dt()
  }), (t = navigator.connection) != null && t.saveData || qn(), j.addEventListener("click", async n => {
    if (n.button || n.which !== 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey || n.defaultPrevented) return;
    const a = St(n.composedPath()[0], j);
    if (!a) return;
    const {
      url: r,
      external: s,
      target: i,
      download: o
    } = Ne(a, x, E.hash);
    if (!r) return;
    if (i === "_parent" || i === "_top") {
      if (window.parent !== window) return
    } else if (i && i !== "_self") return;
    const c = pe(a);
    if (!(a instanceof SVGAElement) && r.protocol !== location.protocol && !(r.protocol === "https:" || r.protocol === "http:") || o) return;
    const [d, p] = (E.hash ? r.hash.replace(/^#/, "") : r.href).split("#"), y = d === Ue(location);
    if (s || c.reload && (!y || !p)) {
      jt({
        url: r,
        type: "link"
      }) ? te = !0 : n.preventDefault();
      return
    }
    if (p !== void 0 && y) {
      const [, f] = _.url.href.split("#");
      if (f === p) {
        if (n.preventDefault(), p === "" || p === "top" && a.ownerDocument.getElementById("top") === null) window.scrollTo({
          top: 0
        });
        else {
          const m = a.ownerDocument.getElementById(decodeURIComponent(p));
          m && (m.scrollIntoView(), m.focus())
        }
        return
      }
      if (Y = !0, Me(S), e(r), !c.replace_state) return;
      Y = !1
    }
    n.preventDefault(), await new Promise(f => {
      requestAnimationFrame(() => {
        setTimeout(f, 0)
      }), setTimeout(f, 100)
    }), await X({
      type: "link",
      url: r,
      keepfocus: c.keepfocus,
      noscroll: c.noscroll,
      replace_state: c.replace_state ?? r.href === location.href
    })
  }), j.addEventListener("submit", n => {
    if (n.defaultPrevented) return;
    const a = HTMLFormElement.prototype.cloneNode.call(n.target),
      r = n.submitter;
    if (((r == null ? void 0 : r.formTarget) || a.target) === "_blank" || ((r == null ? void 0 : r.formMethod) || a.method) !== "get") return;
    const o = new URL((r == null ? void 0 : r.hasAttribute("formaction")) && (r == null ? void 0 : r.formAction) || a.action);
    if (ke(o, x, !1)) return;
    const c = n.target,
      l = pe(c);
    if (l.reload) return;
    n.preventDefault(), n.stopPropagation();
    const d = new FormData(c),
      p = r == null ? void 0 : r.getAttribute("name");
    p && d.append(p, (r == null ? void 0 : r.getAttribute("value")) ?? ""), o.search = new URLSearchParams(d).toString(), X({
      type: "form",
      url: o,
      keepfocus: l.keepfocus,
      noscroll: l.noscroll,
      replace_state: l.replace_state ?? o.href === location.href
    })
  }), addEventListener("popstate", async n => {
    var a;
    if (!$e) {
      if ((a = n.state) != null && a[G]) {
        const r = n.state[G];
        if (B = {}, r === S) return;
        const s = V[r],
          i = n.state[At] ?? {},
          o = new URL(n.state[ln] ?? location.href),
          c = n.state[Z],
          l = _.url ? Ue(location) === Ue(_.url) : !1;
        if (c === U && (Tt || l)) {
          i !== L.state && (L.state = i), e(o), V[S] = Ae(), s && scrollTo(s.x, s.y), S = r;
          return
        }
        const p = r - S;
        await X({
          type: "popstate",
          url: o,
          popped: {
            state: i,
            scroll: s,
            delta: p
          },
          accept: () => {
            S = r, U = c
          },
          block: () => {
            history.go(-p)
          },
          nav_token: B
        })
      } else if (!Y) {
        const r = new URL(location.href);
        e(r), E.hash && location.reload()
      }
    }
  }), addEventListener("hashchange", () => {
    Y && (Y = !1, history.replaceState({
      ...history.state,
      [G]: ++S,
      [Z]: U
    }, "", location.href))
  });
  for (const n of document.querySelectorAll("link")) Cn.has(n.rel) && (n.href = n.href);
  addEventListener("pageshow", n => {
    n.persisted && $.navigating.set(Q.current = null)
  });

  function e(n) {
    _.url = L.url = n, $.page.set(Ze(L)), $.page.notify()
  }
}
async function Kn(e, {
  status: t = 200,
  error: n,
  node_ids: a,
  params: r,
  route: s,
  server_route: i,
  data: o,
  form: c
}) {
  Ke = !0;
  const l = new URL(location.href);
  let d;
  ({
    params: r = {},
    route: s = {
      id: null
    }
  } = await Re(l, !1) || {}), d = Ge.find(({
    id: f
  }) => f === s.id);
  let p, y = !0;
  try {
    const f = a.map(async (u, h) => {
        const A = o[h];
        return A != null && A.uses && (A.uses = Ft(A.uses)), We({
          loader: E.nodes[u],
          url: l,
          params: r,
          route: s,
          parent: async () => {
            const R = {};
            for (let I = 0; I < h; I += 1) Object.assign(R, (await f[I]).data);
            return R
          },
          server_data_node: Je(A)
        })
      }),
      m = await Promise.all(f);
    if (d) {
      const u = d.layouts;
      for (let h = 0; h < u.length; h++) u[h] || m.splice(h, 0, void 0)
    }
    p = ve({
      url: l,
      params: r,
      branch: m,
      status: t,
      error: n,
      form: c,
      route: d ?? null
    })
  } catch (f) {
    if (f instanceof Fe) {
      await K(new URL(f.location, location.href));
      return
    }
    p = await Se({
      status: ge(f),
      error: await H(f, {
        url: l,
        params: r,
        route: s
      }),
      url: l,
      route: s
    }), e.textContent = "", y = !1
  }
  p.props.page && (p.props.page.state = {}), Ct(p, e, y)
}
async function Dt(e, t) {
  var s;
  const n = new URL(e);
  n.pathname = Tn(e.pathname), e.pathname.endsWith("/") && n.searchParams.append(An, "1"), n.searchParams.append(En, t.map(i => i ? "1" : "0").join(""));
  const a = window.fetch,
    r = await a(n.href, {});
  if (!r.ok) {
    let i;
    throw (s = r.headers.get("content-type")) != null && s.includes("application/json") ? i = await r.json() : r.status === 404 ? i = "Not Found" : r.status === 500 && (i = "Internal Error"), new Ee(r.status, i)
  }
  return new Promise(async i => {
    var p;
    const o = new Map,
      c = r.body.getReader();

    function l(y) {
      return _n(y, {
        ...E.decoders,
        Promise: f => new Promise((m, u) => {
          o.set(f, {
            fulfil: m,
            reject: u
          })
        })
      })
    }
    let d = "";
    for (;;) {
      const {
        done: y,
        value: f
      } = await c.read();
      if (y && !d) break;
      for (d += !f && d ? `
` : Jt.decode(f, {
          stream: !0
        });;) {
        const m = d.indexOf(`
`);
        if (m === -1) break;
        const u = JSON.parse(d.slice(0, m));
        if (d = d.slice(m + 1), u.type === "redirect") return i(u);
        if (u.type === "data")(p = u.nodes) == null || p.forEach(h => {
          (h == null ? void 0 : h.type) === "data" && (h.uses = Ft(h.uses), h.data = l(h.data))
        }), i(u);
        else if (u.type === "chunk") {
          const {
            id: h,
            data: A,
            error: R
          } = u, I = o.get(h);
          o.delete(h), R ? I.reject(l(R)) : I.fulfil(l(A))
        }
      }
    }
  })
}

function Ft(e) {
  return {
    dependencies: new Set((e == null ? void 0 : e.dependencies) ?? []),
    params: new Set((e == null ? void 0 : e.params) ?? []),
    parent: !!(e != null && e.parent),
    route: !!(e != null && e.route),
    url: !!(e != null && e.url),
    search_params: new Set((e == null ? void 0 : e.search_params) ?? [])
  }
}
let $e = !1;

function Yn(e) {
  const t = document.querySelector("[autofocus]");
  if (t) t.focus();
  else {
    const n = Bt(e);
    if (n && document.getElementById(n)) {
      const {
        x: r,
        y: s
      } = Ae();
      setTimeout(() => {
        const i = history.state;
        $e = !0, location.replace(`#${n}`), E.hash && location.replace(e.hash), history.replaceState(i, "", e.hash), scrollTo(r, s), $e = !1
      })
    } else {
      const r = document.body,
        s = r.getAttribute("tabindex");
      r.tabIndex = -1, r.focus({
        preventScroll: !0,
        focusVisible: !1
      }), s !== null ? r.setAttribute("tabindex", s) : r.removeAttribute("tabindex")
    }
    const a = getSelection();
    if (a && a.type !== "None") {
      const r = [];
      for (let s = 0; s < a.rangeCount; s += 1) r.push(a.getRangeAt(s));
      setTimeout(() => {
        if (a.rangeCount === r.length) {
          for (let s = 0; s < a.rangeCount; s += 1) {
            const i = r[s],
              o = a.getRangeAt(s);
            if (i.commonAncestorContainer !== o.commonAncestorContainer || i.startContainer !== o.startContainer || i.endContainer !== o.endContainer || i.startOffset !== o.startOffset || i.endOffset !== o.endOffset) return
          }
          a.removeAllRanges()
        }
      })
    }
  }
}

function Xe(e, t, n, a) {
  var c, l;
  let r, s;
  const i = new Promise((d, p) => {
    r = d, s = p
  });
  return i.catch(() => {}), {
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
      type: a,
      complete: i
    },
    fulfil: r,
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

function zn(e) {
  const t = new URL(e);
  return t.hash = decodeURIComponent(e.hash), t
}

function Bt(e) {
  let t;
  if (E.hash) {
    const [, , n] = e.hash.split("#", 3);
    t = n ?? ""
  } else t = e.hash.slice(1);
  return decodeURIComponent(t)
}
export {
  nr as a, rr as b, ar as g, Zn as l, L as p, $ as s
};
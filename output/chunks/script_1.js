import {
  Bt as e,
  Kt as t,
  Lt as n,
  Nt as r,
  ft as i,
  jt as a,
  mt as o,
  pt as s,
  r as c,
  t as l,
  ut as u
} from "./D2z8HFb7.js";
var d = class {
    constructor(e, t) {
      this.status = e, this.body = typeof t == `string` ? {
        message: t
      } : t || {
        message: `Error: ${e}`
      }
    }
    toString() {
      return JSON.stringify(this.body)
    }
  },
  f = class {
    constructor(e, t) {
      try {
        new Headers({
          location: t
        })
      } catch {
        throw Error(`Invalid redirect location ${JSON.stringify(t)}: this string contains characters that cannot be used in HTTP headers`)
      }
      this.status = e, this.location = t
    }
  },
  p = class extends Error {
    constructor(e, t, n) {
      super(n), this.status = e, this.text = t
    }
  };
new URL(`sveltekit-internal://`);

function ee(e, t) {
  return e === `/` || t === `ignore` ? e : t === `never` ? e.endsWith(`/`) ? e.slice(0, -1) : e : t === `always` && !e.endsWith(`/`) ? e + `/` : e
}

function te(e) {
  return e.split(`%25`).map(decodeURI).join(`%25`)
}

function m(e) {
  for (let t in e) e[t] = decodeURIComponent(e[t]);
  return e
}

function h({
  href: e
}) {
  return e.split(`#`)[0]
}

function g(e, t, n, r = !1) {
  let i = new URL(e);
  Object.defineProperty(i, "searchParams", {
    value: new Proxy(i.searchParams, {
      get(e, r) {
        if (r === `get` || r === `getAll` || r === `has`) return (t, ...i) => (n(t), e[r](t, ...i));
        t();
        let i = Reflect.get(e, r);
        return typeof i == `function` ? i.bind(e) : i
      }
    }),
    enumerable: !0,
    configurable: !0
  });
  let a = [`href`, `pathname`, `search`, `toString`, `toJSON`];
  r && a.push(`hash`);
  for (let n of a) Object.defineProperty(i, n, {
    get() {
      return t(), e[n]
    },
    enumerable: !0,
    configurable: !0
  });
  return i
}

function _() {}

function ne(...e) {
  let t = 5381;
  for (let n of e)
    if (typeof n == `string`) {
      let e = n.length;
      for (; e;) t = t * 33 ^ n.charCodeAt(--e)
    } else if (ArrayBuffer.isView(n)) {
    let e = new Uint8Array(n.buffer, n.byteOffset, n.byteLength),
      r = e.length;
    for (; r;) t = t * 33 ^ e[--r]
  } else throw TypeError(`value must be a string or TypedArray`);
  return (t >>> 0).toString(36)
}
new TextEncoder;

function re(e) {
  let t = atob(e),
    n = new Uint8Array(t.length);
  for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
  return n
}
var v = window.fetch;
window.fetch = (e, t) => ((e instanceof Request ? e.method : (t == null ? void 0 : t.method) || `GET`) !== `GET` && y.delete(oe(e)), v(e, t));
var y = new Map;

function ie(e, t) {
  let n = oe(e, t),
    r = document.querySelector(n);
  if (r != null && r.textContent) {
    r.remove();
    let {
      body: e,
      ...t
    } = JSON.parse(r.textContent), i = r.getAttribute(`data-ttl`);
    return i && y.set(n, {
      body: e,
      init: t,
      ttl: 1e3 * Number(i)
    }), r.getAttribute(`data-b64`) !== null && (e = re(e)), Promise.resolve(new Response(e, t))
  }
  return window.fetch(e, t)
}

function ae(e, t, n) {
  if (y.size > 0) {
    let t = oe(e, n),
      r = y.get(t);
    if (r) {
      if (performance.now() < r.ttl && [`default`, `force-cache`, `only-if-cached`, void 0].includes(n == null ? void 0 : n.cache)) return new Response(r.body, r.init);
      y.delete(t)
    }
  }
  return window.fetch(t, n)
}

function oe(e, t) {
  let n = `script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;
  if (t != null && t.headers || t != null && t.body) {
    let e = [];
    t.headers && e.push([...new Headers(t.headers)].join(`,`)), t.body && (typeof t.body == `string` || ArrayBuffer.isView(t.body)) && e.push(t.body), n += `[data-hash="${ne(...e)}"]`
  }
  return n
}
var se = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/,
  ce = /^\/\((?:[^)]+)\)$/;

function le(e) {
  let t = [];
  return {
    pattern: e === `/` || ce.test(e) ? /^\/$/ : RegExp(`^${de(e).map(e=>{let n=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(e);if(n)return t.push({name:n[1],matcher:n[2],optional:!1,rest:!0,chained:!0}),`( ? : /([^]*))?`;let r=/ ^ \[\
        [(\w + )( ? : = (\w + )) ? \]\
      ] $ / .exec(e);
      if (r) return t.push({
        name: r[1],
        matcher: r[2],
        optional: !0,
        rest: !1,
        chained: !0
      }), `(?:/([^/]+))?`;
      if (!e) return;
      let i = e.split(/\[(.+?)\](?!\])/);
      return `/` + i.map((e, n) => {
        if (n % 2) {
          if (e.startsWith(`x+`)) return pe(String.fromCharCode(parseInt(e.slice(2), 16)));
          if (e.startsWith(`u+`)) return pe(String.fromCharCode(...e.slice(2).split(`-`).map(e => parseInt(e, 16))));
          let [, r, a, o, s] = se.exec(e);
          return t.push({
            name: o,
            matcher: s,
            optional: !!r,
            rest: !!a,
            chained: a ? n === 1 && i[0] === `` : !1
          }), a ? `([^]*?)` : r ? `([^/]*)?` : `([^/]+?)`
        }
        return pe(e)
      }).join(``)
    }).join(``)
  }
  /?$`),params:t}}function ue(e){return e!==``&&!/ ^ \([ ^ )] + \) $ / .test(e)
}

function de(e) {
  return e.slice(1).split(`/`).filter(ue)
}

function fe(e, t, n) {
  let r = {},
    i = e.slice(1),
    a = i.filter(e => e !== void 0),
    o = 0;
  for (let e = 0; e < t.length; e += 1) {
    let s = t[e],
      c = i[e - o];
    if (s.chained && s.rest && o && (c = i.slice(e - o, e + 1).filter(e => e).join(`/`), o = 0), c === void 0) {
      if (s.rest) c = ``;
      else continue
    }
    if (!s.matcher || n[s.matcher](c)) {
      r[s.name] = c;
      let n = t[e + 1],
        l = i[e + 1];
      n && !n.rest && n.optional && l && s.chained && (o = 0), !n && !l && Object.keys(r).length === a.length && (o = 0);
      continue
    }
    if (s.optional && s.chained) {
      o++;
      continue
    }
    return
  }
  if (!o) return r
}

function pe(e) {
  return e.normalize().replace(/[[\]]/g, `\\$&`).replace(/%/g, `%25`).replace(/\//g, `%2[Ff]`).replace(/\?/g, `%3[Ff]`).replace(/#/g, `%23`).replace(/[.*+?^${}()|\\]/g, `\\$&`)
}
var me = /\[(\[)?(\.\.\.)?(\w+?)(?:=(\w+))?\]\]?/g;

function he(e, t) {
  let n = de(e),
    r = e != `/` && e.endsWith(`/`);
  return `/` + n.map(n => n.replace(me, (n, r, i, a) => {
    let o = t[a];
    if (!o) {
      if (r || i && o !== void 0) return ``;
      throw Error(`Missing parameter '${a}' in route ${e}`)
    }
    if (o.startsWith(`/`) || o.endsWith(`/`)) throw Error(`Parameter '${a}' in route ${e} cannot start or end with a slash -- this would cause an invalid route like foo//bar`);
    return o
  })).filter(Boolean).join(`/`) + (r ? `/` : ``)
}

function ge({
  nodes: e,
  server_loads: t,
  dictionary: n,
  matchers: r
}) {
  let i = new Set(t);
  return Object.entries(n).map(([t, [n, i, s]]) => {
    let {
      pattern: c,
      params: l
    } = le(t), u = {
      id: t,
      exec: e => {
        let t = c.exec(e);
        if (t) return fe(t, l, r)
      },
      errors: [1, ...s || []].map(t => e[t]),
      layouts: [0, ...i || []].map(o),
      leaf: a(n)
    };
    return u.errors.length = u.layouts.length = Math.max(u.errors.length, u.layouts.length), u
  });

  function a(t) {
    let n = t < 0;
    return n && (t = ~t), [n, e[t]]
  }

  function o(t) {
    return t === void 0 ? t : [i.has(t), e[t]]
  }
}

function _e(e, t = JSON.parse) {
  try {
    return t(sessionStorage[e])
  } catch {}
}

function ve(e, t, n = JSON.stringify) {
  let r = n(t);
  try {
    sessionStorage[e] = r
  } catch {}
}
var ye, be, b = ((ye = globalThis.__sveltekit_1kctd24) == null ? void 0 : ye.base) ?? ``,
  xe = ((be = globalThis.__sveltekit_1kctd24) == null ? void 0 : be.assets) ?? b ?? ``;

function Se(e) {
  return (xe || b) + e
}
var Ce = ``;

function we(...e) {
  if (!e[0].startsWith(`/`)) throw Error(`Cannot use \`resolve(...)\` with a non-absolute pathname or route ID (got "${e[0]}"). \`resolve\` is only for internal pathnames and route IDs; external URLs should be used directly.`);
  return b + Ce + he(e[0], e[1])
}
var Te = `1791606013454`,
  Ee = `sveltekit:snapshot`,
  De = `sveltekit:scroll`,
  Oe = `sveltekit:states`,
  ke = `sveltekit:pageurl`,
  x = `sveltekit:history`,
  S = `sveltekit:navigation`,
  C = {
    tap: 1,
    hover: 2,
    viewport: 3,
    eager: 4,
    off: -1,
    false: -1
  },
  Ae = location.origin;

function w(e) {
  if (e instanceof URL) return e;
  let t = document.baseURI;
  if (!t) {
    let e = document.getElementsByTagName(`base`);
    t = e.length ? e[0].href : document.URL
  }
  return new URL(e, t)
}

function T() {
  return {
    x: pageXOffset,
    y: pageYOffset
  }
}

function E(e, t) {
  return e.getAttribute(`data-sveltekit-${t}`)
}
var je = {
  ...C,
  "": C.hover
};

function Me(e) {
  let t = e.assignedSlot ?? e.parentNode;
  return (t == null ? void 0 : t.nodeType) === 11 && (t = t.host), t
}

function Ne(e, t) {
  for (; e && e !== t;) {
    if (e.nodeName.toUpperCase() === `A` && e.hasAttribute(`href`)) return e;
    e = Me(e)
  }
}

function Pe(e, t, n) {
  let r;
  try {
    if (r = new URL(e instanceof SVGAElement ? e.href.baseVal : e.href, document.baseURI), n && r.hash.match(/^#[^/]/)) {
      let e = location.hash.split(`#`)[1] || `/`;
      r.hash = `#${e}${r.hash}`
    }
  } catch {}
  let i = e instanceof SVGAElement ? e.target.baseVal : e.target,
    a = !r || !!i || ze(r, t, n) || (e.getAttribute(`rel`) || ``).split(/\s+/).includes(`external`),
    o = (r == null ? void 0 : r.origin) === Ae && e.hasAttribute(`download`);
  return {
    url: r,
    external: a,
    target: i,
    download: o
  }
}

function Fe(e) {
  let t = null,
    n = null,
    r = null,
    i = null,
    a = null,
    o = null,
    s = e;
  for (; s && s !== document.documentElement;) r === null && (r = E(s, `preload-code`)), i === null && (i = E(s, `preload-data`)), t === null && (t = E(s, `keepfocus`)), n === null && (n = E(s, `noscroll`)), a === null && (a = E(s, `reload`)), o === null && (o = E(s, `replacestate`)), s = Me(s);

  function c(e) {
    switch (e) {
      case ``:
      case `true`:
        return !0;
      case `off`:
      case `false`:
        return !1;
      default:
        return
    }
  }
  return {
    preload_code: je[r ?? `off`],
    preload_data: je[i ?? `off`],
    keepfocus: c(t),
    noscroll: c(n),
    reload: c(a),
    replace_state: c(o)
  }
}

function Ie(e) {
  let n = t(e),
    r = !0;

  function i() {
    r = !0, n.update(e => e)
  }

  function a(e) {
    r = !1, n.set(e)
  }

  function o(e) {
    let t;
    return n.subscribe(n => {
      (t === void 0 || r && n !== t) && e(t = n)
    })
  }
  return {
    notify: i,
    set: a,
    subscribe: o
  }
}
var Le = {
  v: _
};

function Re() {
  let {
    set: e,
    subscribe: n
  } = t(!1), r;
  async function i() {
    clearTimeout(r);
    try {
      let t = await fetch(`${xe}/_app/version.json`, {
        headers: {
          pragma: `no-cache`,
          "cache-control": `no-cache`
        }
      });
      if (!t.ok) return !1;
      let n = (await t.json()).version !== Te;
      return n && (e(!0), Le.v(), clearTimeout(r)), n
    } catch {
      return !1
    }
  }
  return {
    subscribe: n,
    check: i
  }
}

function ze(e, t, n) {
  return e.origin !== Ae || !e.pathname.startsWith(t) ? !0 : n ? e.pathname !== location.pathname : !1
}

function Be(e) {}
var Ve;
Uint8Array.fromBase64, typeof process == `object` && ((Ve = process.versions) == null || Ve.node);
var He = new Set([`load`, `prerender`, `csr`, `ssr`, `trailingSlash`, `config`]);
[...He], [...new Set([...He])];

function Ue(e) {
  return e.filter(e => e != null)
}

function D(e, t) {
  return e + `/` + t
}

function We(e) {
  return e instanceof d || e instanceof p ? e.status : 500
}

function Ge(e) {
  return e instanceof p ? e.text : `Internal Error`
}
var O, k, Ke, qe = c.toString().includes(`$$`) || /function \w+\(\) \{\}/.test(c.toString()),
  Je = `a:`;
if (qe) O = {
  data: {},
  form: null,
  error: null,
  params: {},
  route: {
    id: null
  },
  state: {},
  status: -1,
  url: new URL(Je)
}, k = {
  current: null
}, Ke = {
  current: !1
};
else {
  var Ye, Xe, Ze, Qe, $e, et, tt, nt, rt, it;
  O = new(Ye = new WeakMap, Xe = new WeakMap, Ze = new WeakMap, Qe = new WeakMap, $e = new WeakMap, et = new WeakMap, tt = new WeakMap, nt = new WeakMap, class {
    constructor() {
      e(this, Ye, r({})), e(this, Xe, r(null)), e(this, Ze, r(null)), e(this, Qe, r({})), e(this, $e, r({
        id: null
      })), e(this, et, r({})), e(this, tt, r(-1)), e(this, nt, r(new URL(Je)))
    }
    get data() {
      return u(n(Ye, this))
    }
    set data(e) {
      a(n(Ye, this), e)
    }
    get form() {
      return u(n(Xe, this))
    }
    set form(e) {
      a(n(Xe, this), e)
    }
    get error() {
      return u(n(Ze, this))
    }
    set error(e) {
      a(n(Ze, this), e)
    }
    get params() {
      return u(n(Qe, this))
    }
    set params(e) {
      a(n(Qe, this), e)
    }
    get route() {
      return u(n($e, this))
    }
    set route(e) {
      a(n($e, this), e)
    }
    get state() {
      return u(n(et, this))
    }
    set state(e) {
      a(n(et, this), e)
    }
    get status() {
      return u(n(tt, this))
    }
    set status(e) {
      a(n(tt, this), e)
    }
    get url() {
      return u(n(nt, this))
    }
    set url(e) {
      a(n(nt, this), e)
    }
  }), k = new(rt = new WeakMap, class {
    constructor() {
      e(this, rt, r(null))
    }
    get current() {
      return u(n(rt, this))
    }
    set current(e) {
      a(n(rt, this), e)
    }
  }), Ke = new(it = new WeakMap, class {
    constructor() {
      e(this, it, r(!1))
    }
    get current() {
      return u(n(it, this))
    }
    set current(e) {
      a(n(it, this), e)
    }
  }), Le.v = () => Ke.current = !0
}

function at(e) {
  Object.assign(O, e)
}
var ot = {
    spanContext() {
      return st
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
  st = {
    traceId: ``,
    spanId: ``,
    traceFlags: 0
  },
  {
    onMount: ct,
    tick: lt
  } = l,
  ut = o ?? (e => e()),
  dt = new Set([`icon`, `shortcut icon`, `apple-touch-icon`]),
  A = null,
  j = _e(`sveltekit:scroll`) ?? {},
  M = _e(`sveltekit:snapshot`) ?? {},
  N = {
    url: Ie({}),
    page: Ie({}),
    navigating: t(null),
    updated: Re()
  };

function ft(e) {
  j[e] = T()
}

function pt(e, t) {
  let n = e + 1;
  for (; j[n];) delete j[n], n += 1;
  for (n = t + 1; M[n];) delete M[n], n += 1
}

function P(e, t = !1) {
  return t ? location.replace(e.href) : location.href = e.href, new Promise(_)
}
async function mt() {
  if (`serviceWorker` in navigator) {
    let e = await navigator.serviceWorker.getRegistration(b || `/`);
    e && await e.update()
  }
}
var ht, gt, _t, F, vt, I, yt = {},
  bt = {},
  xt = [],
  St = [],
  L = null;

function R() {
  var e;
  L == null || (e = L.fork) == null || e.then(e => e == null ? void 0 : e.discard()), L = null, Z = {
    element: void 0,
    href: void 0
  }
}
var Ct = new Map,
  wt = new Set,
  Tt = new Set,
  z = new Set,
  B = {
    branch: [],
    error: null,
    url: null,
    nav: null
  },
  Et = !1,
  V = !1,
  Dt = !0,
  Ot = !1,
  H = !1,
  U = !1,
  kt = !1,
  W = !1,
  G, K, q, J, At = new Set,
  jt, Mt = new Map,
  Nt = new Map;
async function Pt(e, t, n) {
  var r, i, a, o;
  if (globalThis.__sveltekit_1kctd24.data) {
    let {
      q: e = {},
      p: t = {},
      l: n = {},
      f: r = {}
    } = globalThis.__sveltekit_1kctd24.data;
    for (let t in e) yt[t] = e[t];
    for (let e in n) yt[e] = n[e];
    for (let e in r) yt[e] = r[e];
    for (let e in t) bt[e] = t[e]
  }
  document.URL !== location.href && (location.href = location.href), I = e, await ((r = (i = e.hooks).init) == null ? void 0 : r.call(i)), ht = ge(e), F = document.documentElement, vt = t, gt = e.nodes[0], _t = e.nodes[1], gt(), _t(), K = (a = history.state) == null ? void 0 : a[x], q = (o = history.state) == null ? void 0 : o[S], K || (K = q = Date.now(), history.replaceState({
    ...history.state,
    [x]: K,
    [S]: q
  }, ``));
  let s = j[K];

  function c() {
    s && (history.scrollRestoration = `manual`, scrollTo(s.x, s.y))
  }
  n ? (c(), await Sn(vt, n)) : (await X({
    type: `enter`,
    url: w(I.hash ? Dn(new URL(location.href)) : location.href),
    replace_state: !0
  }), c()), xn()
}
async function Ft(e = !0, t = !0) {
  if (await (jt || (jt = Promise.resolve())), !jt) return;
  jt = null;
  let n = J = {},
    r = await Y(B.url, !0);
  R();
  let i = new Map;
  if (W) {
    for (let e of Mt.values())
      for (let {
          resource: t
        }
        of e.values()) t.refresh();
    for (let [e, t] of Nt)
      for (let [n, {
          resource: r
        }] of t) {
        let t = D(e, n),
          a = r.reconnect();
        a.catch(_), i.set(t, a)
      }
  }
  if (e) {
    let e = O.state,
      i = r && await Zt(r);
    if (!i || n !== J) return;
    if (i.type === `redirect`) return Bt(new URL(i.location, B.url).href, {
      replaceState: !0
    }, 1, n);
    t || (i.props.page.state = e), at(i.props.page), B = {
      ...i.state,
      nav: B.nav
    }, It(), G.$set(i.props)
  } else It();
  let a = [];
  for (let e of Mt.values())
    for (let {
        resource: t
      }
      of e.values()) a.push(t);
  for (let [e, t] of Nt)
    for (let n of t.keys()) {
      let t = D(e, n),
        r = i.get(t);
      r && a.push(r)
    }
  await Promise.all(a).catch(_)
}

function It() {
  xt.length = 0, W = !1
}

function Lt(e) {
  St.some(e => e == null ? void 0 : e.snapshot) && (M[e] = St.map(e => {
    var t;
    return e == null || (t = e.snapshot) == null ? void 0 : t.capture()
  }))
}

function Rt(e) {
  var t;
  (t = M[e]) == null || t.forEach((e, t) => {
    var n;
    (n = St[t]) == null || (n = n.snapshot) == null || n.restore(e)
  })
}

function zt() {
  ft(K), ve(De, j), Lt(q), ve(Ee, M)
}
async function Bt(e, t, n, r) {
  let i, a;
  t.invalidateAll && R(), await X({
    type: `goto`,
    url: w(e),
    keepfocus: t.keepFocus,
    noscroll: t.noScroll,
    replace_state: t.replaceState,
    state: t.state,
    redirect_count: n,
    nav_token: r,
    accept: () => {
      if (t.invalidateAll) {
        W = !0, i = new Set;
        for (let [t, n] of Mt)
          for (let [r, a] of n) {
            var e;
            (e = a.resource) == null || e.reset(), i.add(D(t, r))
          }
        a = new Set;
        for (let [e, t] of Nt)
          for (let n of t.keys()) a.add(D(e, n))
      }
      t.invalidate && t.invalidate.forEach(mn)
    }
  }), t.invalidateAll && s().then(s).then(() => {
    for (let [e, t] of Mt)
      for (let [n, {
          resource: r
        }] of t) i != null && i.has(D(e, n)) && r.start();
    for (let [e, t] of Nt)
      for (let [n, {
          resource: r
        }] of t) a != null && a.has(D(e, n)) && r.reconnect()
  })
}
async function Vt(e) {
  if (e.id !== (L == null ? void 0 : L.id)) {
    R();
    let t = {};
    At.add(t), L = {
      id: e.id,
      token: t,
      promise: Zt({
        ...e,
        preload: t
      }).then(e => (At.delete(t), e.type === `loaded` && e.state.error && R(), e)),
      fork: null
    }
  }
  return L.promise
}
async function Ht(e) {
  var t;
  let n = (t = await Y(e, !1)) == null ? void 0 : t.route;
  n && await Promise.all([...n.layouts, n.leaf].filter(Boolean).map(e => e[1]()))
}
async function Ut(e, t, n) {
  var r;
  let i = {
    params: B.params,
    route: {
      id: ((r = B.route) == null ? void 0 : r.id) ?? null
    },
    url: new URL(location.href)
  };
  if (B = {
      ...e.state,
      nav: i
    }, at(e.props.page), G = new I.root({
      target: t,
      props: {
        ...e.props,
        stores: N,
        components: St
      },
      hydrate: n,
      sync: !1,
      transformError: void 0
    }), await Promise.resolve(), Rt(q), n) {
    let e = {
      from: null,
      to: {
        ...i,
        scroll: j[K] ?? T()
      },
      willUnload: !1,
      type: `enter`,
      complete: Promise.resolve()
    };
    z.forEach(t => t(e))
  }
  V = !0
}
async function Wt({
  url: e,
  params: t,
  branch: n,
  errors: r,
  status: i,
  error: a,
  route: o,
  form: s
}) {
  let c = `never`;
  if (b && (e.pathname === b || e.pathname === b + `/`)) c = `always`;
  else
    for (let e of n)(e == null ? void 0 : e.slash) !== void 0 && (c = e.slash);
  e.pathname = ee(e.pathname, c), e.search = e.search;
  let l = {
    type: `loaded`,
    state: {
      url: e,
      params: t,
      branch: n,
      error: a,
      route: o
    },
    props: {
      constructors: Ue(n).map(e => e.node.component),
      page: $(O)
    }
  };
  s !== void 0 && (l.props.form = s);
  let u = {},
    d = !O,
    f = 0;
  for (let e = 0; e < Math.max(n.length, B.branch.length); e += 1) {
    let t = n[e],
      r = B.branch[e];
    (t == null ? void 0 : t.data) !== (r == null ? void 0 : r.data) && (d = !0), t && (u = {
      ...u,
      ...t.data
    }, d && (l.props[`data_${f}`] = u), f += 1)
  }
  return (!B.url || e.href !== B.url.href || B.error !== a || s !== void 0 && s !== O.form || d) && (l.props.page = {
    error: a,
    params: t,
    route: {
      id: (o == null ? void 0 : o.id) ?? null
    },
    state: {},
    status: i,
    url: new URL(e),
    form: s ?? null,
    data: d ? u : O.data
  }), l
}
async function Gt({
  loader: e,
  parent: t,
  url: n,
  params: r,
  route: i,
  server_data_node: a
}) {
  var o, s, c;
  let l = null,
    u = !0,
    d = {
      dependencies: new Set,
      params: new Set,
      parent: !1,
      route: !1,
      url: !1,
      search_params: new Set
    },
    f = await e();
  if ((o = f.universal) != null && o.load) {
    function e(...e) {
      for (let t of e) {
        let {
          href: e
        } = new URL(t, n);
        d.dependencies.add(e)
      }
    }
    let o = {
      tracing: {
        enabled: !1,
        root: ot,
        current: ot
      },
      route: new Proxy(i, {
        get: (e, t) => (u && (d.route = !0), e[t])
      }),
      params: new Proxy(r, {
        get: (e, t) => (u && d.params.add(t), e[t])
      }),
      data: (a == null ? void 0 : a.data) ?? null,
      url: g(n, () => {
        u && (d.url = !0)
      }, e => {
        u && d.search_params.add(e)
      }, I.hash),
      async fetch(t, r) {
        t instanceof Request && (r = {
          body: t.method === `GET` || t.method === `HEAD` ? void 0 : await t.blob(),
          cache: t.cache,
          credentials: t.credentials,
          headers: [...t.headers].length > 0 ? t == null ? void 0 : t.headers : void 0,
          integrity: t.integrity,
          keepalive: t.keepalive,
          method: t.method,
          mode: t.mode,
          redirect: t.redirect,
          referrer: t.referrer,
          referrerPolicy: t.referrerPolicy,
          signal: t.signal,
          ...r
        });
        let {
          resolved: i,
          promise: a
        } = Kt(t, r, n);
        return u && e(i.href), a
      },
      setHeaders: _,
      depends: e,
      parent() {
        return u && (d.parent = !0), t()
      },
      untrack(e) {
        u = !1;
        try {
          return e()
        } finally {
          u = !0
        }
      }
    };
    l = await f.universal.load.call(null, o) ?? null
  }
  return {
    node: f,
    loader: e,
    server: a,
    universal: (s = f.universal) != null && s.load ? {
      type: `data`,
      data: l,
      uses: d
    } : null,
    data: l ?? (a == null ? void 0 : a.data) ?? null,
    slash: ((c = f.universal) == null ? void 0 : c.trailingSlash) ?? (a == null ? void 0 : a.slash)
  }
}

function Kt(e, t, n) {
  let r = e instanceof Request ? e.url : e,
    i = new URL(r, n);
  return i.origin === n.origin && (r = i.href.slice(n.origin.length)), {
    resolved: i,
    promise: V ? ae(r, i.href, t) : ie(r, t)
  }
}

function qt(e, t, n, r, i, a) {
  if (W) return !0;
  if (!i) return !1;
  if (i.parent && e || i.route && t || i.url && n) return !0;
  for (let e of i.search_params)
    if (r.has(e)) return !0;
  for (let e of i.params)
    if (a[e] !== B.params[e]) return !0;
  for (let e of i.dependencies)
    if (xt.some(t => t(new URL(e)))) return !0;
  return !1
}

function Jt(e, t) {
  return (e == null ? void 0 : e.type) === `data` ? e : (e == null ? void 0 : e.type) === `skip` ? t ?? null : null
}

function Yt(e, t) {
  if (!e) return new Set(t.searchParams.keys());
  let n = new Set([...e.searchParams.keys(), ...t.searchParams.keys()]);
  for (let r of n) {
    let i = e.searchParams.getAll(r),
      a = t.searchParams.getAll(r);
    i.every(e => a.includes(e)) && a.every(e => i.includes(e)) && n.delete(r)
  }
  return n
}

function Xt({
  error: e,
  url: t,
  route: n,
  params: r
}) {
  return {
    type: `loaded`,
    state: {
      error: e,
      url: t,
      route: n,
      params: r,
      branch: []
    },
    props: {
      page: $(O),
      constructors: []
    }
  }
}
async function Zt({
  id: e,
  invalidating: t,
  url: n,
  params: r,
  route: i,
  preload: a
}) {
  if ((L == null ? void 0 : L.id) === e) return At.delete(L.token), L.promise;
  let {
    errors: o,
    layouts: s,
    leaf: c
  } = i, l = [...s, c];
  o.forEach(e => e == null ? void 0 : e().catch(_)), l.forEach(e => e == null ? void 0 : e[1]().catch(_));
  let u = B.url ? e !== nn(B.url) : !1,
    p = B.route ? i.id !== B.route.id : !1,
    ee = Yt(B.url, n),
    te = !1,
    m = l.map(async (e, t) => {
      var a;
      if (!e) return;
      let o = B.branch[t];
      return e[1] === (o == null ? void 0 : o.loader) && !qt(te, p, u, ee, (a = o.universal) == null ? void 0 : a.uses, r) ? o : (te = !0, Gt({
        loader: e[1],
        url: n,
        params: r,
        route: i,
        parent: async () => {
          let e = {};
          for (let r = 0; r < t; r += 1) {
            var n;
            Object.assign(e, (n = await m[r]) == null ? void 0 : n.data)
          }
          return e
        },
        server_data_node: Jt(e[0] ? {
          type: `skip`
        } : null, e[0] ? o == null ? void 0 : o.server : void 0)
      }))
    });
  for (let e of m) e.catch(_);
  let h = [];
  for (let e = 0; e < l.length; e += 1)
    if (l[e]) try {
      h.push(await m[e])
    } catch (t) {
      if (t instanceof f) return {
        type: `redirect`,
        location: t.location
      };
      if (At.has(a)) return Xt({
        error: await Q(t, {
          params: r,
          url: n,
          route: {
            id: i.id
          }
        }),
        url: n,
        params: r,
        route: i
      });
      let s = We(t),
        c;
      if (t instanceof d) c = t.body;
      else {
        if (await N.updated.check()) return await mt(), await P(n);
        c = await Q(t, {
          params: r,
          url: n,
          route: {
            id: i.id
          }
        })
      }
      let l = await Qt(e, h, o);
      return l ? Wt({
        url: n,
        params: r,
        branch: h.slice(0, l.idx).concat(l.node),
        errors: o,
        status: s,
        error: c,
        route: i
      }) : await an(n, {
        id: i.id
      }, c, s)
    } else h.push(void 0);
  return Wt({
    url: n,
    params: r,
    branch: h,
    errors: o,
    status: 200,
    error: null,
    route: i,
    form: t ? void 0 : null
  })
}
async function Qt(e, t, n) {
  for (; e--;)
    if (n[e]) {
      let r = e;
      for (; !t[r];) --r;
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
async function $t({
  status: e,
  error: t,
  url: n,
  route: r
}) {
  let i = {};
  try {
    return Wt({
      url: n,
      params: i,
      branch: [await Gt({
        loader: gt,
        url: n,
        params: i,
        route: r,
        parent: () => Promise.resolve({}),
        server_data_node: Jt(null)
      }), {
        node: await _t(),
        loader: _t,
        universal: null,
        server: null,
        data: null
      }],
      status: e,
      error: t,
      errors: [],
      route: null
    })
  } catch (e) {
    if (e instanceof f) return Bt(new URL(e.location, location.href), {}, 0);
    throw e
  }
}
async function en(e) {
  let t = e.href;
  if (Ct.has(t)) return Ct.get(t);
  let n;
  try {
    let r = (async () => {
      let t = await I.hooks.reroute({
        url: new URL(e),
        fetch: async (t, n) => Kt(t, n, e).promise
      }) ?? e;
      if (typeof t == `string`) {
        let n = new URL(e);
        I.hash ? n.hash = t : n.pathname = t, t = n
      }
      return t
    })();
    Ct.set(t, r), n = await r
  } catch {
    Ct.delete(t);
    return
  }
  return n
}
async function Y(e, t) {
  if (e && !ze(e, b, I.hash)) {
    let n = await en(e);
    if (!n) return;
    let r = tn(n);
    for (let n of ht) {
      let i = n.exec(r);
      if (i) return {
        id: nn(e),
        invalidating: t,
        route: n,
        params: m(i),
        url: e
      }
    }
  }
}

function tn(e) {
  return te(I.hash ? e.hash.replace(/^#/, ``).replace(/[?#].+/, ``) : e.pathname.slice(b.length)) || `/`
}

function nn(e) {
  return (I.hash ? e.hash.replace(/^#/, ``) : e.pathname) + e.search
}

function rn({
  url: e,
  type: t,
  intent: n,
  delta: r,
  event: i,
  scroll: a
}) {
  let o = !1,
    s = En(B, n, e, t, a ?? null);
  r !== void 0 && (s.navigation.delta = r), i !== void 0 && (s.navigation.event = i);
  let c = {
    ...s.navigation,
    cancel: () => {
      o = !0, s.reject(Error(`navigation cancelled`))
    }
  };
  return H || wt.forEach(e => e(c)), o ? null : s
}
async function X({
  type: e,
  url: t,
  popped: n,
  keepfocus: r,
  noscroll: a,
  replace_state: o,
  state: c = {},
  redirect_count: u = 0,
  nav_token: d = {},
  accept: f = _,
  block: ee = _,
  event: te
}) {
  let m = J;
  J = d;
  let h = await Y(t, !1),
    g = e === `enter` ? En(B, h, t, e) : rn({
      url: t,
      type: e,
      delta: n == null ? void 0 : n.delta,
      intent: h,
      scroll: n == null ? void 0 : n.scroll,
      event: te
    });
  if (!g) {
    ee(), J === d && (J = m);
    return
  }
  let ne = K,
    re = q;
  f(), H = !0, V && g.navigation.type !== `enter` && N.navigating.set(k.current = g.navigation);
  let v = h && await Zt(h);
  if (!v) {
    if (ze(t, b, I.hash)) return await P(t, o);
    v = await an(t, {
      id: null
    }, await Q(new p(404, `Not Found`, `Not found: ${t.pathname}`), {
      url: t,
      params: {},
      route: {
        id: null
      }
    }), 404, o)
  }
  if (t = (h == null ? void 0 : h.url) || t, J !== d) return g.reject(Error(`navigation aborted`)), !1;
  if (v.type === `redirect`) {
    if (u < 20) {
      await X({
        type: e,
        url: new URL(v.location, t),
        popped: n,
        keepfocus: r,
        noscroll: a,
        replace_state: o,
        state: c,
        redirect_count: u + 1,
        nav_token: d
      }), g.fulfil(void 0);
      return
    }
    v = await $t({
      status: 500,
      error: await Q(Error(`Redirect loop`), {
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
  } else v.props.page.status >= 400 && await N.updated.check() && (await mt(), await P(t, o));
  if (It(), Ot = !0, ft(ne), Lt(re), v.props.page.url.pathname !== t.pathname && (t.pathname = v.props.page.url.pathname), c = n ? n.state : c, !n) {
    let e = +!o,
      n = {
        [x]: K += e,
        [S]: q += e,
        [Oe]: c
      };
    (o ? history.replaceState : history.pushState).call(history, n, ``, t), o || pt(K, q)
  }
  let y = h && (L == null ? void 0 : L.id) === h.id ? L.fork : null;
  L != null && L.fork && !y ? R() : (L = null, Z = {
    element: void 0,
    href: void 0
  }), v.props.page.state = c;
  let ie;
  if (V) {
    let e = (await Promise.all(Array.from(Tt, e => e(g.navigation)))).filter(e => typeof e == `function`);
    if (e.length > 0) {
      function t() {
        e.forEach(e => {
          z.delete(e)
        })
      }
      e.push(t), e.forEach(e => {
        z.add(e)
      })
    }
    let n = g.navigation.to;
    B = {
      ...v.state,
      nav: {
        params: n.params,
        route: n.route,
        url: n.url
      }
    }, v.props.page && (v.props.page.url = t);
    let r = y && await y;
    if (r) ie = r.commit();
    else {
      var ae;
      A = null, G.$set(v.props), A && Object.assign(v.props.page, A), at(v.props.page), ie = (ae = i) == null ? void 0 : ae.call(l)
    }
    kt = !0
  } else await Ut(v, vt, !1);
  let {
    activeElement: oe
  } = document;
  if (await ie, await s(), await s(), J !== d) return g.reject(Error(`navigation aborted`)), !1;
  v.props.page && A && Object.assign(v.props.page, A);
  let se = null;
  if (Dt) {
    let e = n ? n.scroll : a ? T() : null;
    e ? scrollTo(e.x, e.y) : (se = t.hash && document.getElementById(On(t))) ? se.scrollIntoView() : scrollTo(0, 0)
  }
  let ce = document.activeElement !== oe && document.activeElement !== document.body;
  !r && !ce && Tn(t, !se), Dt = !0, H = !1, e === `popstate` && Rt(q), g.fulfil(void 0), g.navigation.to && (g.navigation.to.scroll = T()), z.forEach(e => e(g.navigation)), N.navigating.set(k.current = null), Ot = !1
}
async function an(e, t, n, r, i) {
  return e.origin === Ae && e.pathname === location.pathname && !Et ? await $t({
    status: r,
    error: n,
    url: e,
    route: t
  }) : await P(e, i)
}
var Z = {
  element: void 0,
  href: void 0
};

function on() {
  let e, t;
  F.addEventListener(`mousemove`, t => {
    let n = t.target;
    clearTimeout(e), e = setTimeout(() => {
      i(n, C.hover)
    }, 20)
  });

  function n(e) {
    e.defaultPrevented || i(e.composedPath()[0], C.tap)
  }
  F.addEventListener(`mousedown`, n), F.addEventListener(`touchstart`, n, {
    passive: !0
  });
  let r = new IntersectionObserver(e => {
    for (let t of e) t.isIntersecting && (Ht(new URL(t.target.href)), r.unobserve(t.target))
  }, {
    threshold: 0
  });
  async function i(e, n) {
    let r = Ne(e, F),
      i = r === Z.element && (r == null ? void 0 : r.href) === Z.href && n >= t;
    if (!r || i) return;
    let {
      url: a,
      external: o,
      download: s
    } = Pe(r, b, I.hash);
    if (o || s) return;
    let c = Fe(r),
      l = a && nn(B.url) === nn(a);
    if (!(c.reload || l)) {
      if (n <= c.preload_data) {
        Z = {
          element: r,
          href: r.href
        }, t = C.tap;
        let e = await Y(a, !1);
        if (!e) return;
        Vt(e)
      } else n <= c.preload_code && (Z = {
        element: r,
        href: r.href
      }, t = n, Ht(a))
    }
  }

  function a() {
    r.disconnect();
    for (let e of F.querySelectorAll(`a`)) {
      let {
        url: t,
        external: n,
        download: i
      } = Pe(e, b, I.hash);
      if (n || i) continue;
      let a = Fe(e);
      a.reload || (a.preload_code === C.viewport && r.observe(e), a.preload_code === C.eager && Ht(t))
    }
  }
  z.add(a), a()
}

function Q(e, t) {
  if (e instanceof d) return e.body;
  let n = We(e),
    r = Ge(e);
  return I.hooks.handleError({
    error: e,
    event: t,
    status: n,
    message: r
  }) ?? {
    message: r
  }
}

function sn(e, t) {
  ct(() => (e.add(t), () => {
    e.delete(t)
  }))
}

function cn(e) {
  sn(z, e)
}

function ln(e) {
  sn(wt, e)
}

function un(e) {
  sn(Tt, e)
}

function dn() {
  (Ot || !V) && (Dt = !1)
}

function fn(e, t = {}) {
  return e = new URL(w(e)), e.origin === Ae ? Bt(e, t, 0) : Promise.reject(Error(`goto: invalid URL`))
}

function pn(e) {
  return mn(e), Ft()
}

function mn(e) {
  if (typeof e == `function`) xt.push(e);
  else {
    let {
      href: t
    } = new URL(e, location.href);
    xt.push(e => e.href === t)
  }
}

function hn() {
  return W = !0, Ft()
}

function gn({
  includeLoadFunctions: e = !0
} = {}) {
  return W = !0, Ft(e, !1)
}
async function _n(e) {
  let t = w(e),
    n = await Y(t, !1);
  if (!n) throw Error(`Attempted to preload a URL that does not belong to this app: ${t}`);
  let r = await Vt(n);
  if (r.type === `redirect`) return {
    type: r.type,
    location: r.location
  };
  let {
    status: i,
    data: a
  } = r.props.page ?? O;
  return {
    type: r.type,
    status: i,
    data: a
  }
}
async function vn(e) {
  return Ht(new URL(e, B.url))
}

function yn(e, t) {
  ft(K);
  let n = {
    [x]: K += 1,
    [S]: q,
    [ke]: O.url.href,
    [Oe]: t
  };
  history.pushState(n, ``, w(e)), kt = !0, O.state = t, G.$set({
    page: ut(() => $(O))
  }), pt(K, q)
}

function bn(e, t) {
  let n = {
    [x]: K,
    [S]: q,
    [ke]: O.url.href,
    [Oe]: t
  };
  history.replaceState(n, ``, w(e)), O.state = t, G.$set({
    page: ut(() => $(O))
  })
}

function xn() {
  var e;
  history.scrollRestoration = `manual`, addEventListener(`beforeunload`, e => {
    let t = !1;
    if (zt(), !H) {
      let e = En(B, void 0, null, `leave`),
        n = {
          ...e.navigation,
          cancel: () => {
            t = !0, e.reject(Error(`navigation cancelled`))
          }
        };
      wt.forEach(e => e(n))
    }
    t ? (e.preventDefault(), e.returnValue = ``) : history.scrollRestoration = `auto`
  }), addEventListener(`visibilitychange`, () => {
    document.visibilityState === `hidden` && zt()
  }), (e = navigator.connection) != null && e.saveData || on(), F.addEventListener(`click`, async e => {
    if (e.button || e.which !== 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.defaultPrevented) return;
    let n = Ne(e.composedPath()[0], F);
    if (!n) return;
    let {
      url: r,
      external: i,
      target: a,
      download: o
    } = Pe(n, b, I.hash);
    if (!r) return;
    if (a === `_parent` || a === `_top`) {
      if (window.parent !== window) return
    } else if (a && a !== `_self`) return;
    let s = Fe(n);
    if (!(n instanceof SVGAElement) && r.protocol !== location.protocol && r.protocol !== `https:` && r.protocol !== `http:` || o) return;
    let [c, l] = (I.hash ? r.hash.replace(/^#/, ``) : r.href).split(`#`), u = c === h(location);
    if (i || s.reload && (!u || !l)) {
      rn({
        url: r,
        type: `link`,
        event: e
      }) ? H = !0 : e.preventDefault();
      return
    }
    if (l !== void 0 && u) {
      let [, i] = B.url.href.split(`#`);
      if (i === l) {
        if (e.preventDefault(), l === `` || l === `top` && n.ownerDocument.getElementById(`top`) === null) scrollTo({
          top: 0
        });
        else {
          let e = n.ownerDocument.getElementById(decodeURIComponent(l));
          e && (e.scrollIntoView(), e.focus())
        }
        return
      }
      if (U = !0, ft(K), t(r), !s.replace_state) return;
      U = !1
    }
    e.preventDefault(), await new Promise(e => {
      requestAnimationFrame(() => {
        setTimeout(e, 0)
      }), setTimeout(e, 100)
    }), await X({
      type: `link`,
      url: r,
      keepfocus: s.keepfocus,
      noscroll: s.noscroll,
      replace_state: s.replace_state ?? r.href === location.href,
      event: e
    })
  }), F.addEventListener(`submit`, e => {
    if (e.defaultPrevented) return;
    let t = HTMLFormElement.prototype.cloneNode.call(e.target),
      n = e.submitter;
    if (((n == null ? void 0 : n.formTarget) || t.target) === `_blank` || ((n == null ? void 0 : n.formMethod) || t.method) !== `get`) return;
    let r = new URL((n == null ? void 0 : n.hasAttribute(`formaction`)) && (n == null ? void 0 : n.formAction) || t.action);
    if (ze(r, b, !1)) return;
    let i = e.target,
      a = Fe(i);
    if (a.reload) return;
    e.preventDefault(), e.stopPropagation();
    let o = new FormData(i, n);
    r.search = new URLSearchParams(o).toString(), X({
      type: `form`,
      url: r,
      keepfocus: a.keepfocus,
      noscroll: a.noscroll,
      replace_state: a.replace_state ?? r.href === location.href,
      event: e
    })
  }), addEventListener(`popstate`, async e => {
    var n;
    if (!wn) {
      if ((n = e.state) != null && n[`sveltekit:history`]) {
        let n = e.state[x];
        if (J = {}, n === K) return;
        let r = j[n],
          i = e.state[`sveltekit:states`] ?? {},
          a = new URL(e.state[`sveltekit:pageurl`] ?? location.href),
          o = e.state[S],
          s = B.url ? h(location) === h(B.url) : !1;
        if (o === q && (kt || s)) {
          i !== O.state && (O.state = i), t(a), j[K] = T(), r && scrollTo(r.x, r.y), K = n;
          return
        }
        let c = n - K;
        await X({
          type: `popstate`,
          url: a,
          popped: {
            state: i,
            scroll: r,
            delta: c
          },
          accept: () => {
            K = n, q = o
          },
          block: () => {
            history.go(-c)
          },
          nav_token: J,
          event: e
        })
      } else U || (t(new URL(location.href)), I.hash && location.reload())
    }
  }), addEventListener(`hashchange`, () => {
    U && (U = !1, history.replaceState({
      ...history.state,
      [x]: ++K,
      [S]: q
    }, ``, location.href))
  });
  for (let e of document.querySelectorAll(`link`)) dt.has(e.rel) && (e.href = e.href);
  addEventListener(`pageshow`, e => {
    e.persisted && N.navigating.set(k.current = null)
  });

  function t(e) {
    B.url = O.url = e, N.page.set($(O)), N.page.notify()
  }
}
async function Sn(e, {
  status: t = 200,
  error: n,
  node_ids: r,
  params: i,
  route: a,
  server_route: o,
  data: s,
  form: c
}) {
  Et = !0;
  let l = new URL(location.href),
    u;
  ({
    params: i = {},
    route: a = {
      id: null
    }
  } = await Y(l, !1) || {}), u = ht.find(({
    id: e
  }) => e === a.id);
  let d, p = !0;
  try {
    let e = r.map(async (t, n) => {
        let r = s[n];
        return r != null && r.uses && (r.uses = Cn(r.uses)), Gt({
          loader: I.nodes[t],
          url: l,
          params: i,
          route: a,
          parent: async () => {
            let t = {};
            for (let r = 0; r < n; r += 1) Object.assign(t, (await e[r]).data);
            return t
          },
          server_data_node: Jt(r)
        })
      }),
      o = await Promise.all(e);
    if (u) {
      let e = u.layouts;
      for (let t = 0; t < e.length; t++) e[t] || o.splice(t, 0, void 0)
    }
    d = await Wt({
      url: l,
      params: i,
      branch: o,
      status: t,
      error: n,
      errors: u == null ? void 0 : u.errors,
      form: c,
      route: u ?? null
    })
  } catch (t) {
    if (t instanceof f) {
      await P(new URL(t.location, location.href));
      return
    }
    d = await $t({
      status: We(t),
      error: await Q(t, {
        url: l,
        params: i,
        route: a
      }),
      url: l,
      route: a
    }), e.textContent = ``, p = !1
  }
  d.props.page && (d.props.page.state = {}), await Ut(d, e, p)
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
var wn = !1;

function Tn(e, t = !0) {
  let n = document.querySelector(`[autofocus]`);
  if (n) n.focus();
  else {
    let n = On(e);
    if (n && document.getElementById(n)) {
      let {
        x: r,
        y: i
      } = T();
      setTimeout(() => {
        let a = history.state;
        wn = !0, location.replace(new URL(`#${n}`, location.href)), history.replaceState(a, ``, e), t && scrollTo(r, i), wn = !1
      })
    } else {
      let e = document.body,
        t = e.getAttribute(`tabindex`);
      e.tabIndex = -1, e.focus({
        preventScroll: !0,
        focusVisible: !1
      }), t === null ? e.removeAttribute(`tabindex`) : e.setAttribute(`tabindex`, t)
    }
    let r = getSelection();
    if (r && r.type !== `None`) {
      let e = [];
      for (let t = 0; t < r.rangeCount; t += 1) e.push(r.getRangeAt(t));
      setTimeout(() => {
        if (r.rangeCount === e.length) {
          for (let t = 0; t < r.rangeCount; t += 1) {
            let n = e[t],
              i = r.getRangeAt(t);
            if (n.commonAncestorContainer !== i.commonAncestorContainer || n.startContainer !== i.startContainer || n.endContainer !== i.endContainer || n.startOffset !== i.startOffset || n.endOffset !== i.endOffset) return
          }
          r.removeAllRanges()
        }
      })
    }
  }
}

function En(e, t, n, r, i = null) {
  var a, o;
  let s, c, l = new Promise((e, t) => {
    s = e, c = t
  });
  return l.catch(_), {
    navigation: {
      from: {
        params: e.params,
        route: {
          id: ((a = e.route) == null ? void 0 : a.id) ?? null
        },
        url: e.url,
        scroll: T()
      },
      to: n && {
        params: (t == null ? void 0 : t.params) ?? null,
        route: {
          id: (t == null || (o = t.route) == null ? void 0 : o.id) ?? null
        },
        url: n,
        scroll: i
      },
      willUnload: !t,
      type: r,
      complete: l
    },
    fulfil: s,
    reject: c
  }
}

function $(e) {
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

function Dn(e) {
  let t = new URL(e);
  return t.hash = decodeURIComponent(e.hash), t
}

function On(e) {
  let t;
  if (I.hash) {
    let [, , n] = e.hash.split(`#`, 3);
    t = n ?? ``
  } else t = e.hash.slice(1);
  return decodeURIComponent(t)
}
export {
  b as C, xe as S, Ke as _, pn as a, Se as b, vn as c, gn as d, bn as f, O as g, k as h, fn as i, _n as l, N as m, ln as n, hn as o, Pt as p, dn as r, un as s, cn as t, yn as u, Be as v, d as w, we as x, Te as y
};
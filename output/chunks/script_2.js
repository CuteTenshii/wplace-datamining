import {
  m as y,
  E as g,
  B as m,
  k as h,
  l as v,
  ap as w,
  ao as x,
  C as E,
  Z as C,
  T,
  at as f,
  K as k,
  I as a,
  au as S,
  x as c,
  av as _,
  aw as A,
  a9 as D,
  ax as b,
  ay as I,
  az as R,
  aA as B,
  aB as F,
  aC as M,
  aD as N,
  aE as P,
  aF as j,
  w as z
} from "./Ds8uQKUX.js";
import {
  h as O,
  m as U,
  u as $
} from "./Dkv4e80Q.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "72535b980ce58632366910417763e3bb1f48d885"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3f8407dd-07a0-4551-8a06-101446a9e624", e._sentryDebugIdIdentifier = "sentry-dbid-3f8407dd-07a0-4551-8a06-101446a9e624")
  })()
} catch {}

function V(e, n, ...s) {
  var o = new m(e);
  y(() => {
    const t = n() ?? null;
    o.ensure(t, t && (r => t(r, ...s)))
  }, g)
}

function K(e) {
  return (n, ...s) => {
    var i;
    var o = e(...s),
      t;
    if (h) t = C, v();
    else {
      var r = o.render().trim(),
        u = w(r);
      t = T(u), n.before(t)
    }
    const l = (i = o.setup) == null ? void 0 : i.call(o, t);
    x(t, t), typeof l == "function" && E(l)
  }
}

function L() {
  var e;
  return _ === null && A(), ((e = _).ac ?? (e.ac = new AbortController)).signal
}

function p(e) {
  a === null && f(), S && a.l !== null ? d(a).m.push(e) : k(() => {
    const n = c(e);
    if (typeof n == "function") return n
  })
}

function Y(e) {
  a === null && f(), p(() => () => c(e))
}

function Z(e, n, {
  bubbles: s = !1,
  cancelable: o = !1
} = {}) {
  return new CustomEvent(e, {
    detail: n,
    bubbles: s,
    cancelable: o
  })
}

function q() {
  const e = a;
  return e === null && f(), (n, s, o) => {
    var r;
    const t = (r = e.s.$$events) == null ? void 0 : r[n];
    if (t) {
      const u = D(t) ? t.slice() : [t],
        l = Z(n, s, o);
      for (const i of u) i.call(e.x, l);
      return !l.defaultPrevented
    }
    return !0
  }
}

function G(e) {
  a === null && f(), a.l === null && b(), d(a).b.push(e)
}

function H(e) {
  a === null && f(), a.l === null && b(), d(a).a.push(e)
}

function d(e) {
  var n = e.l;
  return n.u ?? (n.u = {
    a: [],
    b: [],
    m: []
  })
}
const W = Object.freeze(Object.defineProperty({
  __proto__: null,
  afterUpdate: H,
  beforeUpdate: G,
  createContext: I,
  createEventDispatcher: q,
  createRawSnippet: K,
  flushSync: R,
  fork: B,
  getAbortSignal: L,
  getAllContexts: F,
  getContext: M,
  hasContext: N,
  hydrate: O,
  mount: U,
  onDestroy: Y,
  onMount: p,
  setContext: P,
  settled: j,
  tick: z,
  unmount: $,
  untrack: c
}, Symbol.toStringTag, {
  value: "Module"
}));
export {
  Y as a, W as b, p as o, V as s
};
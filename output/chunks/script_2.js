import {
  i as h,
  h as b,
  e as m,
  au as v,
  at as w,
  V as E,
  E as x,
  k as T,
  C,
  ai as S,
  o as p,
  a0 as k,
  aE as i,
  K as I,
  aF as _,
  aG as A,
  I as o,
  ae as D,
  aH as y,
  aI as R,
  L as u,
  aJ as N,
  aK as P,
  aL as F,
  aM as L,
  aN as M,
  aO as O,
  aP as j
} from "./CXlKQ9h7.js";
import {
  h as K,
  m as U,
  u as $
} from "./vRjjJqEH.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "3b81c531726e4eb39728af6e2ad358d2a11d8033"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "737d9174-2c48-4923-9182-3b4d518caabe", e._sentryDebugIdIdentifier = "sentry-dbid-737d9174-2c48-4923-9182-3b4d518caabe")
  })()
} catch {}

function W(e, t, ...r) {
  var a = e,
    n = C,
    s;
  h(() => {
    n !== (n = t()) && (s && (S(s), s = null), s = T(() => n(a, ...r)))
  }, x), b && (a = p)
}

function z(e) {
  return (t, ...r) => {
    var f;
    var a = e(...r),
      n;
    if (b) n = p, m();
    else {
      var s = a.render().trim(),
        c = v(s);
      n = k(c), t.before(n)
    }
    const l = (f = a.setup) == null ? void 0 : f.call(a, n);
    w(n, n), typeof l == "function" && E(l)
  }
}

function G() {
  var e;
  return _ === null && A(), ((e = _).ac ?? (e.ac = new AbortController)).signal
}

function g(e) {
  o === null && i(), R && o.l !== null ? d(o).m.push(e) : I(() => {
    const t = u(e);
    if (typeof t == "function") return t
  })
}

function H(e) {
  o === null && i(), g(() => () => u(e))
}

function J(e, t, {
  bubbles: r = !1,
  cancelable: a = !1
} = {}) {
  return new CustomEvent(e, {
    detail: t,
    bubbles: r,
    cancelable: a
  })
}

function V() {
  const e = o;
  return e === null && i(), (t, r, a) => {
    var s;
    const n = (s = e.s.$$events) == null ? void 0 : s[t];
    if (n) {
      const c = D(n) ? n.slice() : [n],
        l = J(t, r, a);
      for (const f of c) f.call(e.x, l);
      return !l.defaultPrevented
    }
    return !0
  }
}

function Y(e) {
  o === null && i(), o.l === null && y(), d(o).b.push(e)
}

function q(e) {
  o === null && i(), o.l === null && y(), d(o).a.push(e)
}

function d(e) {
  var t = e.l;
  return t.u ?? (t.u = {
    a: [],
    b: [],
    m: []
  })
}
const X = Object.freeze(Object.defineProperty({
  __proto__: null,
  afterUpdate: q,
  beforeUpdate: Y,
  createEventDispatcher: V,
  createRawSnippet: z,
  flushSync: N,
  getAbortSignal: G,
  getAllContexts: P,
  getContext: F,
  hasContext: L,
  hydrate: K,
  mount: U,
  onDestroy: H,
  onMount: g,
  setContext: M,
  settled: O,
  tick: j,
  unmount: $,
  untrack: u
}, Symbol.toStringTag, {
  value: "Module"
}));
export {
  X as a, g as o, W as s
};
import {
  i as v,
  h as b,
  e as h,
  W as m,
  U as w,
  K as E,
  E as x,
  k as T,
  az as C,
  ag as S,
  o as p,
  X as k,
  aA as l,
  y as A,
  aB as _,
  aC as D,
  w as o,
  ac as I,
  aD as y,
  aE as R,
  z as u,
  aF as z,
  aG as F,
  aH as N,
  aI as P,
  aJ as U,
  aK as j,
  aL as K
} from "./BR5XpF1A.js";
import {
  h as L,
  m as M,
  u as O
} from "./C-1uWn9D.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "123067dbd61a163d94930a4efc762fdca932af1b"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2b0dbac4-51fb-45d6-96a1-2c1f45d701cc", e._sentryDebugIdIdentifier = "sentry-dbid-2b0dbac4-51fb-45d6-96a1-2c1f45d701cc")
  })()
} catch {}

function Q(e, t, ...r) {
  var a = e,
    n = C,
    s;
  v(() => {
    n !== (n = t()) && (s && (S(s), s = null), s = T(() => n(a, ...r)))
  }, x), b && (a = p)
}

function $(e) {
  return (t, ...r) => {
    var i;
    var a = e(...r),
      n;
    if (b) n = p, h();
    else {
      var s = a.render().trim(),
        c = m(s);
      n = k(c), t.before(n)
    }
    const f = (i = a.setup) == null ? void 0 : i.call(a, n);
    w(n, n), typeof f == "function" && E(f)
  }
}

function B() {
  var e;
  return _ === null && D(), ((e = _).ac ?? (e.ac = new AbortController)).signal
}

function g(e) {
  o === null && l(), R && o.l !== null ? d(o).m.push(e) : A(() => {
    const t = u(e);
    if (typeof t == "function") return t
  })
}

function G(e) {
  o === null && l(), g(() => () => u(e))
}

function H(e, t, {
  bubbles: r = !1,
  cancelable: a = !1
} = {}) {
  return new CustomEvent(e, {
    detail: t,
    bubbles: r,
    cancelable: a
  })
}

function J() {
  const e = o;
  return e === null && l(), (t, r, a) => {
    var s;
    const n = (s = e.s.$$events) == null ? void 0 : s[t];
    if (n) {
      const c = I(n) ? n.slice() : [n],
        f = H(t, r, a);
      for (const i of c) i.call(e.x, f);
      return !f.defaultPrevented
    }
    return !0
  }
}

function W(e) {
  o === null && l(), o.l === null && y(), d(o).b.push(e)
}

function X(e) {
  o === null && l(), o.l === null && y(), d(o).a.push(e)
}

function d(e) {
  var t = e.l;
  return t.u ?? (t.u = {
    a: [],
    b: [],
    m: []
  })
}
const V = Object.freeze(Object.defineProperty({
    __proto__: null,
    afterUpdate: X,
    beforeUpdate: W,
    createEventDispatcher: J,
    createRawSnippet: $,
    flushSync: z,
    getAbortSignal: B,
    getAllContexts: F,
    getContext: N,
    hasContext: P,
    hydrate: L,
    mount: M,
    onDestroy: G,
    onMount: g,
    setContext: U,
    settled: j,
    tick: K,
    unmount: O,
    untrack: u
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Z = "1759455339534";
export {
  V as a, g as o, Q as s, Z as v
};
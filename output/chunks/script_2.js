import {
  i as h,
  h as b,
  e as v,
  ai as m,
  ah as w,
  K as E,
  E as x,
  k as T,
  az as C,
  a5 as S,
  o as p,
  O as k,
  aA as i,
  y as A,
  aB as _,
  aC as D,
  w as o,
  a1 as I,
  aD as y,
  aE as R,
  z as u,
  aF as z,
  aG as F,
  aH as N,
  aI as O,
  aJ as P,
  aK as j,
  aL as K
} from "./4_8LKkOo.js";
import {
  h as L,
  m as M,
  u as U
} from "./BorCHFAQ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "9b2648606e2bb7a01bef003b9890229599179c1c"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "55174eb0-e90c-4c30-97a7-245e11199fca", e._sentryDebugIdIdentifier = "sentry-dbid-55174eb0-e90c-4c30-97a7-245e11199fca")
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

function $(e) {
  return (t, ...r) => {
    var f;
    var a = e(...r),
      n;
    if (b) n = p, v();
    else {
      var s = a.render().trim(),
        c = m(s);
      n = k(c), t.before(n)
    }
    const l = (f = a.setup) == null ? void 0 : f.call(a, n);
    w(n, n), typeof l == "function" && E(l)
  }
}

function B() {
  var e;
  return _ === null && D(), ((e = _).ac ?? (e.ac = new AbortController)).signal
}

function g(e) {
  o === null && i(), R && o.l !== null ? d(o).m.push(e) : A(() => {
    const t = u(e);
    if (typeof t == "function") return t
  })
}

function G(e) {
  o === null && i(), g(() => () => u(e))
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
  return e === null && i(), (t, r, a) => {
    var s;
    const n = (s = e.s.$$events) == null ? void 0 : s[t];
    if (n) {
      const c = I(n) ? n.slice() : [n],
        l = H(t, r, a);
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
    createEventDispatcher: J,
    createRawSnippet: $,
    flushSync: z,
    getAbortSignal: B,
    getAllContexts: F,
    getContext: N,
    hasContext: O,
    hydrate: L,
    mount: M,
    onDestroy: G,
    onMount: g,
    setContext: P,
    settled: j,
    tick: K,
    unmount: U,
    untrack: u
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Z = "1759434592118";
export {
  X as a, g as o, W as s, Z as v
};
import {
  i as v,
  h as b,
  e as h,
  aq as m,
  ap as w,
  R as E,
  E as x,
  k as T,
  aA as C,
  ac as D,
  o as p,
  V as S,
  aB as i,
  G as k,
  aC as _,
  aD as A,
  D as o,
  a8 as I,
  aE as y,
  aF as R,
  H as u,
  aG as F,
  aH as M,
  aI as N,
  aJ as P,
  aK as j,
  aL as G,
  aM as H
} from "./DUWZzbWe.js";
import {
  h as L,
  m as O,
  u as U
} from "./B_aSMPcR.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b1e181cfc86240e13a14599ec441e9d2cad6cdd7"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bcdb3ad5-833b-42d2-bea6-19a35e065d6d", e._sentryDebugIdIdentifier = "sentry-dbid-bcdb3ad5-833b-42d2-bea6-19a35e065d6d")
  })()
} catch {}

function W(e, t, ...r) {
  var a = e,
    n = C,
    s;
  v(() => {
    n !== (n = t()) && (s && (D(s), s = null), s = T(() => n(a, ...r)))
  }, x), b && (a = p)
}

function $(e) {
  return (t, ...r) => {
    var f;
    var a = e(...r),
      n;
    if (b) n = p, h();
    else {
      var s = a.render().trim(),
        c = m(s);
      n = S(c), t.before(n)
    }
    const l = (f = a.setup) == null ? void 0 : f.call(a, n);
    w(n, n), typeof l == "function" && E(l)
  }
}

function q() {
  var e;
  return _ === null && A(), ((e = _).ac ?? (e.ac = new AbortController)).signal
}

function g(e) {
  o === null && i(), R && o.l !== null ? d(o).m.push(e) : k(() => {
    const t = u(e);
    if (typeof t == "function") return t
  })
}

function z(e) {
  o === null && i(), g(() => () => u(e))
}

function B(e, t, {
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
        l = B(t, r, a);
      for (const f of c) f.call(e.x, l);
      return !l.defaultPrevented
    }
    return !0
  }
}

function K(e) {
  o === null && i(), o.l === null && y(), d(o).b.push(e)
}

function V(e) {
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
    afterUpdate: V,
    beforeUpdate: K,
    createEventDispatcher: J,
    createRawSnippet: $,
    flushSync: F,
    getAbortSignal: q,
    getAllContexts: M,
    getContext: N,
    hasContext: P,
    hydrate: L,
    mount: O,
    onDestroy: z,
    onMount: g,
    setContext: j,
    settled: G,
    tick: H,
    unmount: U,
    untrack: u
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Z = "1760721945445";
export {
  X as a, g as o, W as s, Z as v
};
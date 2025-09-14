import {
  i as h,
  h as b,
  e as v,
  ai as m,
  ah as w,
  K as E,
  E as x,
  k as T,
  ay as C,
  a7 as S,
  o as p,
  P as k,
  az as l,
  y as A,
  aA as _,
  aB as D,
  w as o,
  a3 as I,
  aC as y,
  aD as R,
  z as u,
  aE as P,
  aF as z,
  aG as F,
  aH as N,
  aI as j,
  aJ as K,
  aK as M
} from "./Bxl1hTLp.js";
import {
  h as O,
  m as U,
  u as $
} from "./Co4t3jAo.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "672e85eb3631872fd08d4c9c3edf522c2ebd7ca9"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "93e1f31e-9cfe-42aa-b0ab-c1919f54f32a", e._sentryDebugIdIdentifier = "sentry-dbid-93e1f31e-9cfe-42aa-b0ab-c1919f54f32a")
  })()
} catch {}

function W(e, t, ...f) {
  var a = e,
    n = C,
    s;
  h(() => {
    n !== (n = t()) && (s && (S(s), s = null), s = T(() => n(a, ...f)))
  }, x), b && (a = p)
}

function B(e) {
  return (t, ...f) => {
    var i;
    var a = e(...f),
      n;
    if (b) n = p, v();
    else {
      var s = a.render().trim(),
        c = m(s);
      n = k(c), t.before(n)
    }
    const r = (i = a.setup) == null ? void 0 : i.call(a, n);
    w(n, n), typeof r == "function" && E(r)
  }
}

function G() {
  var e;
  return _ === null && D(), ((e = _).ac ?? (e.ac = new AbortController)).signal
}

function g(e) {
  o === null && l(), R && o.l !== null ? d(o).m.push(e) : A(() => {
    const t = u(e);
    if (typeof t == "function") return t
  })
}

function H(e) {
  o === null && l(), g(() => () => u(e))
}

function J(e, t, {
  bubbles: f = !1,
  cancelable: a = !1
} = {}) {
  return new CustomEvent(e, {
    detail: t,
    bubbles: f,
    cancelable: a
  })
}

function L() {
  const e = o;
  return e === null && l(), (t, f, a) => {
    var s;
    const n = (s = e.s.$$events) == null ? void 0 : s[t];
    if (n) {
      const c = I(n) ? n.slice() : [n],
        r = J(t, f, a);
      for (const i of c) i.call(e.x, r);
      return !r.defaultPrevented
    }
    return !0
  }
}

function Y(e) {
  o === null && l(), o.l === null && y(), d(o).b.push(e)
}

function q(e) {
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
const X = Object.freeze(Object.defineProperty({
    __proto__: null,
    afterUpdate: q,
    beforeUpdate: Y,
    createEventDispatcher: L,
    createRawSnippet: B,
    flushSync: P,
    getAbortSignal: G,
    getAllContexts: z,
    getContext: F,
    hasContext: N,
    hydrate: O,
    mount: U,
    onDestroy: H,
    onMount: g,
    setContext: j,
    settled: K,
    tick: M,
    unmount: $,
    untrack: u
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Z = "1757806636007";
export {
  X as a, g as o, W as s, Z as v
};
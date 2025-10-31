import {
  k as v,
  i as p,
  j as m,
  au as h,
  at as w,
  V as E,
  E as T,
  m as x,
  C as S,
  ai as C,
  v as b,
  a0 as k,
  aL as i,
  K as A,
  aM as _,
  aN as D,
  I as o,
  ae as I,
  aO as y,
  aP as R,
  L as u,
  aQ as N,
  aR as P,
  aS as j,
  aT as L,
  aU as M,
  aV as O,
  aW as U
} from "./DRybHg5Z.js";
import {
  h as F,
  m as V,
  u as $
} from "./D2YHGc7S.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "52c32908d40da7633c03ed8a85ce90814a387626"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "10a980e9-b5c8-43e7-a045-5aebd5c651e3", e._sentryDebugIdIdentifier = "sentry-dbid-10a980e9-b5c8-43e7-a045-5aebd5c651e3")
  })()
} catch {}

function J(e, t, ...r) {
  var a = e,
    n = S,
    s;
  v(() => {
    n !== (n = t()) && (s && (C(s), s = null), s = x(() => n(a, ...r)))
  }, T), p && (a = b)
}

function z(e) {
  return (t, ...r) => {
    var f;
    var a = e(...r),
      n;
    if (p) n = b, m();
    else {
      var s = a.render().trim(),
        c = h(s);
      n = k(c), t.before(n)
    }
    const l = (f = a.setup) == null ? void 0 : f.call(a, n);
    w(n, n), typeof l == "function" && E(l)
  }
}

function K() {
  var e;
  return _ === null && D(), ((e = _).ac ?? (e.ac = new AbortController)).signal
}

function g(e) {
  o === null && i(), R && o.l !== null ? d(o).m.push(e) : A(() => {
    const t = u(e);
    if (typeof t == "function") return t
  })
}

function Q(e) {
  o === null && i(), g(() => () => u(e))
}

function W(e, t, {
  bubbles: r = !1,
  cancelable: a = !1
} = {}) {
  return new CustomEvent(e, {
    detail: t,
    bubbles: r,
    cancelable: a
  })
}

function Y() {
  const e = o;
  return e === null && i(), (t, r, a) => {
    var s;
    const n = (s = e.s.$$events) == null ? void 0 : s[t];
    if (n) {
      const c = I(n) ? n.slice() : [n],
        l = W(t, r, a);
      for (const f of c) f.call(e.x, l);
      return !l.defaultPrevented
    }
    return !0
  }
}

function q(e) {
  o === null && i(), o.l === null && y(), d(o).b.push(e)
}

function B(e) {
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
    afterUpdate: B,
    beforeUpdate: q,
    createEventDispatcher: Y,
    createRawSnippet: z,
    flushSync: N,
    getAbortSignal: K,
    getAllContexts: P,
    getContext: j,
    hasContext: L,
    hydrate: F,
    mount: V,
    onDestroy: Q,
    onMount: g,
    setContext: M,
    settled: O,
    tick: U,
    unmount: $,
    untrack: u
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Z = "1761877406694";
export {
  Q as a, X as b, g as o, J as s, Z as v
};
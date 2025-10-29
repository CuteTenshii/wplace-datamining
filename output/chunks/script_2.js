import {
  k as v,
  i as b,
  j as m,
  au as h,
  at as w,
  V as E,
  E as T,
  m as x,
  C as S,
  ai as C,
  v as p,
  a0 as k,
  aL as l,
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
} from "./DzYLfSyw.js";
import {
  h as F,
  m as V,
  u as $
} from "./ClRfM3LT.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "274e4e697c621b0b0021d13ee96b23137b8f2a87"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b4d87dbf-fd24-44ae-83b6-707f86ac5f0c", e._sentryDebugIdIdentifier = "sentry-dbid-b4d87dbf-fd24-44ae-83b6-707f86ac5f0c")
  })()
} catch {}

function J(e, t, ...r) {
  var a = e,
    n = S,
    s;
  v(() => {
    n !== (n = t()) && (s && (C(s), s = null), s = x(() => n(a, ...r)))
  }, T), b && (a = p)
}

function z(e) {
  return (t, ...r) => {
    var i;
    var a = e(...r),
      n;
    if (b) n = p, m();
    else {
      var s = a.render().trim(),
        c = h(s);
      n = k(c), t.before(n)
    }
    const f = (i = a.setup) == null ? void 0 : i.call(a, n);
    w(n, n), typeof f == "function" && E(f)
  }
}

function K() {
  var e;
  return _ === null && D(), ((e = _).ac ?? (e.ac = new AbortController)).signal
}

function g(e) {
  o === null && l(), R && o.l !== null ? d(o).m.push(e) : A(() => {
    const t = u(e);
    if (typeof t == "function") return t
  })
}

function Q(e) {
  o === null && l(), g(() => () => u(e))
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
  return e === null && l(), (t, r, a) => {
    var s;
    const n = (s = e.s.$$events) == null ? void 0 : s[t];
    if (n) {
      const c = I(n) ? n.slice() : [n],
        f = W(t, r, a);
      for (const i of c) i.call(e.x, f);
      return !f.defaultPrevented
    }
    return !0
  }
}

function q(e) {
  o === null && l(), o.l === null && y(), d(o).b.push(e)
}

function B(e) {
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
  Z = "1761738963956";
export {
  X as a, g as o, J as s, Z as v
};
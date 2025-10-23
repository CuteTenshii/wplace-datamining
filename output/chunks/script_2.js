import {
  i as v,
  h as _,
  e as h,
  au as m,
  at as w,
  V as E,
  E as T,
  k as x,
  C as S,
  ai as C,
  o as p,
  a0 as k,
  aL as i,
  K as A,
  aM as b,
  aN as D,
  I as o,
  ae as I,
  aO as y,
  aP as R,
  L as u,
  aQ as N,
  aR as P,
  aS as L,
  aT as M,
  aU as O,
  aV as U,
  aW as j
} from "./Vo-uc5TQ.js";
import {
  h as F,
  m as V,
  u as $
} from "./DfhHzZuZ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e1bb3bb6ac619eae9d90b3c0ac59135bee8cefab"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6076d7cc-4388-4b07-bcbc-56a1767f1bd9", e._sentryDebugIdIdentifier = "sentry-dbid-6076d7cc-4388-4b07-bcbc-56a1767f1bd9")
  })()
} catch {}

function J(e, t, ...r) {
  var a = e,
    n = S,
    s;
  v(() => {
    n !== (n = t()) && (s && (C(s), s = null), s = x(() => n(a, ...r)))
  }, T), _ && (a = p)
}

function z(e) {
  return (t, ...r) => {
    var c;
    var a = e(...r),
      n;
    if (_) n = p, h();
    else {
      var s = a.render().trim(),
        f = m(s);
      n = k(f), t.before(n)
    }
    const l = (c = a.setup) == null ? void 0 : c.call(a, n);
    w(n, n), typeof l == "function" && E(l)
  }
}

function K() {
  var e;
  return b === null && D(), ((e = b).ac ?? (e.ac = new AbortController)).signal
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
      const f = I(n) ? n.slice() : [n],
        l = W(t, r, a);
      for (const c of f) c.call(e.x, l);
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
    getContext: L,
    hasContext: M,
    hydrate: F,
    mount: V,
    onDestroy: Q,
    onMount: g,
    setContext: O,
    settled: U,
    tick: j,
    unmount: $,
    untrack: u
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Z = "1761226665488";
export {
  X as a, g as o, J as s, Z as v
};
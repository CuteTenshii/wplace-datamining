import {
  i as v,
  h as b,
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
  aS as L,
  aT as M,
  aU as O,
  aV as U,
  aW as j
} from "./CjHooIZx.js";
import {
  h as F,
  m as V,
  u as $
} from "./LBM8zJgF.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c5b6f4008280188b6965f20aa04502030e013ff2"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5026941b-fcd8-4ba5-af22-e575c7b97f8a", e._sentryDebugIdIdentifier = "sentry-dbid-5026941b-fcd8-4ba5-af22-e575c7b97f8a")
  })()
} catch {}

function J(e, t, ...f) {
  var a = e,
    n = S,
    s;
  v(() => {
    n !== (n = t()) && (s && (C(s), s = null), s = x(() => n(a, ...f)))
  }, T), b && (a = p)
}

function z(e) {
  return (t, ...f) => {
    var i;
    var a = e(...f),
      n;
    if (b) n = p, h();
    else {
      var s = a.render().trim(),
        c = m(s);
      n = k(c), t.before(n)
    }
    const r = (i = a.setup) == null ? void 0 : i.call(a, n);
    w(n, n), typeof r == "function" && E(r)
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
  bubbles: f = !1,
  cancelable: a = !1
} = {}) {
  return new CustomEvent(e, {
    detail: t,
    bubbles: f,
    cancelable: a
  })
}

function Y() {
  const e = o;
  return e === null && l(), (t, f, a) => {
    var s;
    const n = (s = e.s.$$events) == null ? void 0 : s[t];
    if (n) {
      const c = I(n) ? n.slice() : [n],
        r = W(t, f, a);
      for (const i of c) i.call(e.x, r);
      return !r.defaultPrevented
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
  Z = "1761579419868";
export {
  X as a, g as o, J as s, Z as v
};
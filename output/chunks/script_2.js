import {
  m as y,
  E as g,
  k as m,
  l as h,
  au as v,
  at as w,
  ap as E,
  J as x,
  W as C,
  aw as f,
  v as T,
  ae as a,
  ax as k,
  y as u,
  ay as _,
  az as S,
  a5 as A,
  aA as b,
  aB as D,
  aC as I,
  aD as R,
  aE as B,
  aF as F,
  aG as M,
  aH as N,
  aI as P,
  am as j
} from "./BX08WKHH.js";
import {
  h as z,
  m as O,
  u as U
} from "./BuYVmOfq.js";
import {
  B as $
} from "./BOruZFU3.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7643ba5d2918c38f2d3e1507dfee87cd2c0bfa50"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1d5bf726-e76c-454e-8cfc-46014b41b1df", e._sentryDebugIdIdentifier = "sentry-dbid-1d5bf726-e76c-454e-8cfc-46014b41b1df")
  })()
} catch {}

function X(e, t, ...s) {
  var o = new $(e);
  y(() => {
    const n = t() ?? null;
    o.ensure(n, n && (r => n(r, ...s)))
  }, g)
}

function G(e) {
  return (t, ...s) => {
    var c;
    var o = e(...s),
      n;
    if (m) n = x, h();
    else {
      var r = o.render().trim(),
        i = v(r);
      n = C(i), t.before(n)
    }
    const l = (c = o.setup) == null ? void 0 : c.call(o, n);
    w(n, n), typeof l == "function" && E(l)
  }
}

function H() {
  var e;
  return _ === null && S(), ((e = _).ac ?? (e.ac = new AbortController)).signal
}

function p(e) {
  a === null && f(), k && a.l !== null ? d(a).m.push(e) : T(() => {
    const t = u(e);
    if (typeof t == "function") return t
  })
}

function J(e) {
  a === null && f(), p(() => () => u(e))
}

function L(e, t, {
  bubbles: s = !1,
  cancelable: o = !1
} = {}) {
  return new CustomEvent(e, {
    detail: t,
    bubbles: s,
    cancelable: o
  })
}

function W() {
  const e = a;
  return e === null && f(), (t, s, o) => {
    var r;
    const n = (r = e.s.$$events) == null ? void 0 : r[t];
    if (n) {
      const i = A(n) ? n.slice() : [n],
        l = L(t, s, o);
      for (const c of i) c.call(e.x, l);
      return !l.defaultPrevented
    }
    return !0
  }
}

function Y(e) {
  a === null && f(), a.l === null && b(), d(a).b.push(e)
}

function q(e) {
  a === null && f(), a.l === null && b(), d(a).a.push(e)
}

function d(e) {
  var t = e.l;
  return t.u ?? (t.u = {
    a: [],
    b: [],
    m: []
  })
}
const Z = Object.freeze(Object.defineProperty({
  __proto__: null,
  afterUpdate: q,
  beforeUpdate: Y,
  createContext: D,
  createEventDispatcher: W,
  createRawSnippet: G,
  flushSync: I,
  fork: R,
  getAbortSignal: H,
  getAllContexts: B,
  getContext: F,
  hasContext: M,
  hydrate: z,
  mount: O,
  onDestroy: J,
  onMount: p,
  setContext: N,
  settled: P,
  tick: j,
  unmount: U,
  untrack: u
}, Symbol.toStringTag, {
  value: "Module"
}));
export {
  J as a, Z as b, p as o, X as s
};
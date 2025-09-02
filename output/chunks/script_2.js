import {
  i as g,
  h as d,
  e as h,
  al as b,
  ak as x,
  M as C,
  E as k,
  k as E,
  ax as A,
  aa as S,
  o as m,
  R as w,
  ay as c,
  B as R,
  az as p,
  aA as T,
  z as s,
  a6 as z,
  aB as v,
  aC as D,
  C as f,
  aD as F,
  aE as M,
  aF as P,
  aG as j,
  aH as B,
  aI as N,
  aJ as O
} from "./DDWIi-vs.js";
import {
  h as U,
  m as $,
  u as G
} from "./Ob_J7Gis.js";

function X(e, t, ...r) {
  var n = e,
    a = A,
    o;
  g(() => {
    a !== (a = t()) && (o && (S(o), o = null), o = E(() => a(n, ...r)))
  }, k), d && (n = m)
}

function H(e) {
  return (t, ...r) => {
    var i;
    var n = e(...r),
      a;
    if (d) a = m, h();
    else {
      var o = n.render().trim(),
        u = b(o);
      a = w(u), t.before(a)
    }
    const l = (i = n.setup) == null ? void 0 : i.call(n, a);
    x(a, a), typeof l == "function" && C(l)
  }
}

function I() {
  var e;
  return p === null && T(), ((e = p).ac ?? (e.ac = new AbortController)).signal
}

function y(e) {
  s === null && c(), D && s.l !== null ? _(s).m.push(e) : R(() => {
    const t = f(e);
    if (typeof t == "function") return t
  })
}

function J(e) {
  s === null && c(), y(() => () => f(e))
}

function q(e, t, {
  bubbles: r = !1,
  cancelable: n = !1
} = {}) {
  return new CustomEvent(e, {
    detail: t,
    bubbles: r,
    cancelable: n
  })
}

function K() {
  const e = s;
  return e === null && c(), (t, r, n) => {
    var o;
    const a = (o = e.s.$$events) == null ? void 0 : o[t];
    if (a) {
      const u = z(a) ? a.slice() : [a],
        l = q(t, r, n);
      for (const i of u) i.call(e.x, l);
      return !l.defaultPrevented
    }
    return !0
  }
}

function L(e) {
  s === null && c(), s.l === null && v(), _(s).b.push(e)
}

function Q(e) {
  s === null && c(), s.l === null && v(), _(s).a.push(e)
}

function _(e) {
  var t = e.l;
  return t.u ?? (t.u = {
    a: [],
    b: [],
    m: []
  })
}
const Y = Object.freeze(Object.defineProperty({
  __proto__: null,
  afterUpdate: Q,
  beforeUpdate: L,
  createEventDispatcher: K,
  createRawSnippet: H,
  flushSync: F,
  getAbortSignal: I,
  getAllContexts: M,
  getContext: P,
  hasContext: j,
  hydrate: U,
  mount: $,
  onDestroy: J,
  onMount: y,
  setContext: B,
  settled: N,
  tick: O,
  unmount: G,
  untrack: f
}, Symbol.toStringTag, {
  value: "Module"
}));
export {
  Y as a, y as o, X as s
};
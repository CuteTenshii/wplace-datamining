import {
  i as h,
  h as d,
  e as g,
  ai as b,
  ah as x,
  K as C,
  E,
  k,
  au as w,
  a7 as A,
  o as m,
  P as S,
  av as c,
  y as P,
  aw as p,
  ax as T,
  w as s,
  a3 as z,
  ay as v,
  az as D,
  z as f,
  aA as F,
  aB as R,
  aC as j,
  aD as M,
  aE as N,
  aF as O,
  aG as U
} from "./apxRKl0u.js";
import {
  h as $,
  m as B,
  u as G
} from "./B9SWw7yZ.js";

function X(e, t, ...r) {
  var n = e,
    a = w,
    o;
  h(() => {
    a !== (a = t()) && (o && (A(o), o = null), o = k(() => a(n, ...r)))
  }, E), d && (n = m)
}

function K(e) {
  return (t, ...r) => {
    var i;
    var n = e(...r),
      a;
    if (d) a = m, g();
    else {
      var o = n.render().trim(),
        u = b(o);
      a = S(u), t.before(a)
    }
    const l = (i = n.setup) == null ? void 0 : i.call(n, a);
    x(a, a), typeof l == "function" && C(l)
  }
}

function q() {
  var e;
  return p === null && T(), ((e = p).ac ?? (e.ac = new AbortController)).signal
}

function y(e) {
  s === null && c(), D && s.l !== null ? _(s).m.push(e) : P(() => {
    const t = f(e);
    if (typeof t == "function") return t
  })
}

function H(e) {
  s === null && c(), y(() => () => f(e))
}

function I(e, t, {
  bubbles: r = !1,
  cancelable: n = !1
} = {}) {
  return new CustomEvent(e, {
    detail: t,
    bubbles: r,
    cancelable: n
  })
}

function J() {
  const e = s;
  return e === null && c(), (t, r, n) => {
    var o;
    const a = (o = e.s.$$events) == null ? void 0 : o[t];
    if (a) {
      const u = z(a) ? a.slice() : [a],
        l = I(t, r, n);
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
  createEventDispatcher: J,
  createRawSnippet: K,
  flushSync: F,
  getAbortSignal: q,
  getAllContexts: R,
  getContext: j,
  hasContext: M,
  hydrate: $,
  mount: B,
  onDestroy: H,
  onMount: y,
  setContext: N,
  settled: O,
  tick: U,
  unmount: G,
  untrack: f
}, Symbol.toStringTag, {
  value: "Module"
}));
export {
  Y as a, y as o, X as s
};
import {
  g as y,
  h as m,
  e as h,
  a9 as b,
  a8 as x,
  an as C,
  E as S,
  j as A,
  ao as E,
  X as k,
  m as d,
  D as w,
  ap as c,
  q as T,
  aq as p,
  ar as j,
  o as s,
  S as D,
  as as v,
  at as P,
  v as f,
  au as R,
  av as q,
  aw as z,
  ax as F,
  ay as M,
  az as N,
  aA as O
} from "./BUjsOn5w.js";
import {
  h as U,
  m as $,
  u as X
} from "./tlM6Zgdz.js";

function W(e, t, ...r) {
  var a = e,
    n = E,
    o;
  y(() => {
    n !== (n = t()) && (o && (k(o), o = null), o = A(() => n(a, ...r)))
  }, S), m && (a = d)
}

function B(e) {
  return (t, ...r) => {
    var i;
    var a = e(...r),
      n;
    if (m) n = d, h();
    else {
      var o = a.render().trim(),
        u = b(o);
      n = w(u), t.before(n)
    }
    const l = (i = a.setup) == null ? void 0 : i.call(a, n);
    x(n, n), typeof l == "function" && C(l)
  }
}

function G() {
  var e;
  return p === null && j(), ((e = p).ac ?? (e.ac = new AbortController)).signal
}

function g(e) {
  s === null && c(), P && s.l !== null ? _(s).m.push(e) : T(() => {
    const t = f(e);
    if (typeof t == "function") return t
  })
}

function H(e) {
  s === null && c(), g(() => () => f(e))
}

function I(e, t, {
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
  const e = s;
  return e === null && c(), (t, r, a) => {
    var o;
    const n = (o = e.s.$$events) == null ? void 0 : o[t];
    if (n) {
      const u = D(n) ? n.slice() : [n],
        l = I(t, r, a);
      for (const i of u) i.call(e.x, l);
      return !l.defaultPrevented
    }
    return !0
  }
}

function K(e) {
  s === null && c(), s.l === null && v(), _(s).b.push(e)
}

function L(e) {
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
  afterUpdate: L,
  beforeUpdate: K,
  createEventDispatcher: J,
  createRawSnippet: B,
  flushSync: R,
  getAbortSignal: G,
  getAllContexts: q,
  getContext: z,
  hasContext: F,
  hydrate: U,
  mount: $,
  onDestroy: H,
  onMount: g,
  setContext: M,
  settled: N,
  tick: O,
  unmount: X,
  untrack: f
}, Symbol.toStringTag, {
  value: "Module"
}));
export {
  Y as a, g as o, W as s
};
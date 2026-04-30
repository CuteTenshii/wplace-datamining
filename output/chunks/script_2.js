import {
  M as a,
  q as u,
  N as o,
  O as l,
  A as n,
  P as c,
  Q as r,
  R as f,
  S as i,
  T as m,
  U as _,
  V as p
} from "./BC180BoF.js";
import {
  h as y,
  m as d,
  u as b
} from "./CpsyGtAr.js";

function s(t) {
  o === null && a(), l && o.l !== null ? h(o).m.push(t) : u(() => {
    const e = n(t);
    if (typeof e == "function") return e
  })
}

function g(t) {
  o === null && a(), s(() => () => n(t))
}

function h(t) {
  var e = t.l;
  return e.u ?? (e.u = {
    a: [],
    b: [],
    m: []
  })
}
const S = Object.freeze(Object.defineProperty({
  __proto__: null,
  flushSync: c,
  fork: r,
  getContext: f,
  hasContext: i,
  hydrate: y,
  mount: d,
  onDestroy: g,
  onMount: s,
  setContext: m,
  settled: _,
  tick: p,
  unmount: b,
  untrack: n
}, Symbol.toStringTag, {
  value: "Module"
}));
export {
  g as a, s as o, S as s
};
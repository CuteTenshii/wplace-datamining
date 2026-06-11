import {
  G as a,
  I as u,
  J as n,
  K as l,
  L as o,
  M as c,
  N as r,
  O as f,
  P as i,
  Q as m,
  R as _
} from "./CV6xI6o5.js";
import {
  h as p,
  m as y,
  u as d
} from "./hBdZmm-r.js";

function s(t) {
  n === null && a(), l && n.l !== null ? g(n).m.push(t) : u(() => {
    const e = o(t);
    if (typeof e == "function") return e
  })
}

function b(t) {
  n === null && a(), s(() => () => o(t))
}

function g(t) {
  var e = t.l;
  return e.u ?? (e.u = {
    a: [],
    b: [],
    m: []
  })
}
const k = Object.freeze(Object.defineProperty({
  __proto__: null,
  flushSync: c,
  getContext: r,
  hasContext: f,
  hydrate: p,
  mount: y,
  onDestroy: b,
  onMount: s,
  setContext: i,
  settled: m,
  tick: _,
  unmount: d,
  untrack: o
}, Symbol.toStringTag, {
  value: "Module"
}));
export {
  b as a, s as o, k as s
};
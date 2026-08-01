import {
  x as s,
  y as l,
  z as n,
  A as u,
  B as o,
  C as c,
  D as r,
  E as f,
  F as i,
  G as m,
  H as _,
  I as p
} from "./DUZ_qUVk.js";
import {
  h as y,
  m as d,
  u as x
} from "./DtUyTUmd.js";

function a(t) {
  n === null && s(), u && n.l !== null ? b(n).m.push(t) : l(() => {
    const e = o(t);
    if (typeof e == "function") return e
  })
}

function g(t) {
  n === null && s(), a(() => () => o(t))
}

function b(t) {
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
  getAllContexts: r,
  getContext: f,
  hasContext: i,
  hydrate: y,
  mount: d,
  onDestroy: g,
  onMount: a,
  setContext: m,
  settled: _,
  tick: p,
  unmount: x,
  untrack: o
}, Symbol.toStringTag, {
  value: "Module"
}));
export {
  g as a, a as o, k as s
};
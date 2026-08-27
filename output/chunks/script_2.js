import {
  B as s,
  y as l,
  C as n,
  D as u,
  E as o,
  F as c,
  G as r,
  H as f,
  I as i,
  J as m,
  K as _,
  L as p
} from "./D5GL_E7i.js";
import {
  h as y,
  m as d,
  u as g
} from "./BATewRf7.js";

function a(t) {
  n === null && s(), u && n.l !== null ? b(n).m.push(t) : l(() => {
    const e = o(t);
    if (typeof e == "function") return e
  })
}

function x(t) {
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
  onDestroy: x,
  onMount: a,
  setContext: m,
  settled: _,
  tick: p,
  unmount: g,
  untrack: o
}, Symbol.toStringTag, {
  value: "Module"
}));
export {
  x as a, a as o, k as s
};
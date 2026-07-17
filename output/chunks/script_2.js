import {
  x as a,
  y as u,
  z as n,
  A as l,
  B as o,
  C as c,
  D as r,
  E as f,
  F as i,
  G as m,
  H as _
} from "./BKnGt6Ki.js";
import {
  h as p,
  m as y,
  u as d
} from "./DbGfTWgr.js";

function s(t) {
  n === null && a(), l && n.l !== null ? b(n).m.push(t) : u(() => {
    const e = o(t);
    if (typeof e == "function") return e
  })
}

function x(t) {
  n === null && a(), s(() => () => o(t))
}

function b(t) {
  var e = t.l;
  return e.u ?? (e.u = {
    a: [],
    b: [],
    m: []
  })
}
const C = Object.freeze(Object.defineProperty({
  __proto__: null,
  flushSync: c,
  getContext: r,
  hasContext: f,
  hydrate: p,
  mount: y,
  onDestroy: x,
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
  x as a, s as o, C as s
};
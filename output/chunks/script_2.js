import {
  C as a,
  D as u,
  F as o,
  G as l,
  I as n,
  J as c,
  K as r,
  L as f,
  M as i,
  N as m,
  O as _,
  P as p
} from "./5zj5-rPA.js";
import {
  h as y,
  m as d,
  u as b
} from "./DDRNvPA5.js";

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
const C = Object.freeze(Object.defineProperty({
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
  g as a, s as o, C as s
};
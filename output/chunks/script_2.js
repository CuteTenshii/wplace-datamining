import {
  J as a,
  m as u,
  K as o,
  L as l,
  x as n,
  M as c,
  N as r,
  O as f,
  P as i,
  Q as m,
  R as _,
  S as p
} from "./wFsvFKKp.js";
import {
  h as y,
  m as d,
  u as x
} from "./B_EGJrw5.js";

function s(t) {
  o === null && a(), l && o.l !== null ? g(o).m.push(t) : u(() => {
    const e = n(t);
    if (typeof e == "function") return e
  })
}

function b(t) {
  o === null && a(), s(() => () => n(t))
}

function g(t) {
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
  onDestroy: b,
  onMount: s,
  setContext: m,
  settled: _,
  tick: p,
  unmount: x,
  untrack: n
}, Symbol.toStringTag, {
  value: "Module"
}));
export {
  b as a, s as o, S as s
};
import {
  L as a,
  C as f,
  M as n,
  N as u,
  I as o,
  O as l,
  P as r,
  Q as d,
  R as i,
  S as c,
  T as b,
  U as y
} from "./C3nPqK5x.js";
import {
  h as _,
  m as p,
  u as g
} from "./BFSLG3Mv.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "4dec865342b25be0d3f9a4de40183446fa2d5c45"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c4b39973-72d5-4075-a6bf-b08b2122a24e", e._sentryDebugIdIdentifier = "sentry-dbid-c4b39973-72d5-4075-a6bf-b08b2122a24e")
  } catch {}
})();

function s(e) {
  n === null && a(), u && n.l !== null ? h(n).m.push(e) : f(() => {
    const t = o(e);
    if (typeof t == "function") return t
  })
}

function m(e) {
  n === null && a(), s(() => () => o(e))
}

function h(e) {
  var t = e.l;
  return t.u ?? (t.u = {
    a: [],
    b: [],
    m: []
  })
}
const v = Object.freeze(Object.defineProperty({
  __proto__: null,
  flushSync: l,
  fork: r,
  getContext: d,
  hasContext: i,
  hydrate: _,
  mount: p,
  onDestroy: m,
  onMount: s,
  setContext: c,
  settled: b,
  tick: y,
  unmount: g,
  untrack: o
}, Symbol.toStringTag, {
  value: "Module"
}));
export {
  m as a, s as o, v as s
};
import {
  L as a,
  q as f,
  M as n,
  N as u,
  x as o,
  O as l,
  P as d,
  Q as r,
  R as i,
  S as c,
  T as b,
  U as y
} from "./Dcbzw1se.js";
import {
  h as _,
  m as p,
  u as g
} from "./70B2o-Hg.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cdbcf7fbe78b739ecf1b47eab1739b136749bbb3"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a464b4d3-5e41-4f17-8fff-a3b3694e2ded", e._sentryDebugIdIdentifier = "sentry-dbid-a464b4d3-5e41-4f17-8fff-a3b3694e2ded")
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
  fork: d,
  getContext: r,
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
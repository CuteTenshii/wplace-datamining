import {
  L as o,
  q as f,
  M as n,
  N as d,
  x as a,
  O as u,
  P as l,
  Q as r,
  R as i,
  S as c,
  T as b,
  U as y
} from "./BBqfZ3Cy.js";
import {
  h as _,
  m as p,
  u as g
} from "./5lanIsRv.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d953af0a076c6a8d855924dd3acfc556014e27c6"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a464b4d3-5e41-4f17-8fff-a3b3694e2ded", e._sentryDebugIdIdentifier = "sentry-dbid-a464b4d3-5e41-4f17-8fff-a3b3694e2ded")
  } catch {}
})();

function s(e) {
  n === null && o(), d && n.l !== null ? h(n).m.push(e) : f(() => {
    const t = a(e);
    if (typeof t == "function") return t
  })
}

function m(e) {
  n === null && o(), s(() => () => a(e))
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
  flushSync: u,
  fork: l,
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
  untrack: a
}, Symbol.toStringTag, {
  value: "Module"
}));
export {
  m as a, s as o, v as s
};
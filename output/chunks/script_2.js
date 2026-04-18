import {
  L as a,
  q as f,
  M as n,
  N as u,
  x as o,
  O as l,
  P as r,
  Q as d,
  R as i,
  S as c,
  T as b,
  U as y
} from "./BYTf-X4W.js";
import {
  h as _,
  m as p,
  u as g
} from "./C8z7QA18.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e6c43a335491af110c902083fb644fb71e659308"
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
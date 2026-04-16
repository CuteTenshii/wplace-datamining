import {
  M as a,
  q as f,
  N as n,
  O as d,
  x as o,
  P as u,
  Q as l,
  R as c,
  S as r,
  T as i,
  U as b,
  V as y
} from "./BZHD_3xD.js";
import {
  h as _,
  m as p,
  u as g
} from "./B1_hNthJ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "804fae10c9a96a4658fed8df64d864b17b400aa1"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5cf1f8d3-4561-44ce-ab4b-db97b9fc3b9d", e._sentryDebugIdIdentifier = "sentry-dbid-5cf1f8d3-4561-44ce-ab4b-db97b9fc3b9d")
  } catch {}
})();

function s(e) {
  n === null && a(), d && n.l !== null ? h(n).m.push(e) : f(() => {
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
  flushSync: u,
  fork: l,
  getContext: c,
  hasContext: r,
  hydrate: _,
  mount: p,
  onDestroy: m,
  onMount: s,
  setContext: i,
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
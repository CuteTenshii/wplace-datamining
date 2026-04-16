import {
  M as s,
  q as f,
  N as n,
  O as d,
  x as o,
  P as u,
  Q as c,
  R as l,
  S as r,
  T as i,
  U as b,
  V as y
} from "./CJNfechn.js";
import {
  h as _,
  m as p,
  u as g
} from "./s5v90nM5.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "bd6ed46249e1ed5fe7432cfb3a9b80dcfb887d57"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5cf1f8d3-4561-44ce-ab4b-db97b9fc3b9d", e._sentryDebugIdIdentifier = "sentry-dbid-5cf1f8d3-4561-44ce-ab4b-db97b9fc3b9d")
  } catch {}
})();

function a(e) {
  n === null && s(), d && n.l !== null ? h(n).m.push(e) : f(() => {
    const t = o(e);
    if (typeof t == "function") return t
  })
}

function m(e) {
  n === null && s(), a(() => () => o(e))
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
  fork: c,
  getContext: l,
  hasContext: r,
  hydrate: _,
  mount: p,
  onDestroy: m,
  onMount: a,
  setContext: i,
  settled: b,
  tick: y,
  unmount: g,
  untrack: o
}, Symbol.toStringTag, {
  value: "Module"
}));
export {
  m as a, a as o, v as s
};
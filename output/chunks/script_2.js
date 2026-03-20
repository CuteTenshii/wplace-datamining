import {
  N as s,
  C as f,
  O as n,
  P as u,
  G as o,
  Q as d,
  R as l,
  S as r,
  T as c,
  U as i,
  V as b,
  W as y
} from "./CqOPxJme.js";
import {
  h as _,
  m as p,
  u as g
} from "./CiXa5Qgx.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "405d9b08e89656e997bc9e3c862de93d5b969d8c"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0af837b9-b56b-4ff8-97e7-ac17d47d2564", e._sentryDebugIdIdentifier = "sentry-dbid-0af837b9-b56b-4ff8-97e7-ac17d47d2564")
  } catch {}
})();

function a(e) {
  n === null && s(), u && n.l !== null ? h(n).m.push(e) : f(() => {
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
const w = Object.freeze(Object.defineProperty({
  __proto__: null,
  flushSync: d,
  fork: l,
  getContext: r,
  hasContext: c,
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
  m as a, a as o, w as s
};
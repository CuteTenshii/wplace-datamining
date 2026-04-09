import {
  N as o,
  C as f,
  O as n,
  P as d,
  G as a,
  Q as u,
  R as l,
  S as r,
  T as i,
  U as c,
  V as b,
  W as y
} from "./Cu0FD5l7.js";
import {
  h as _,
  m as p,
  u as g
} from "./Cp1uLEad.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "72fbd38af17dae1ddf2de413da161ffaa3b3b729"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0af837b9-b56b-4ff8-97e7-ac17d47d2564", e._sentryDebugIdIdentifier = "sentry-dbid-0af837b9-b56b-4ff8-97e7-ac17d47d2564")
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
const w = Object.freeze(Object.defineProperty({
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
  m as a, s as o, w as s
};
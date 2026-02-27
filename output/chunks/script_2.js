import {
  L as a,
  C as u,
  M as n,
  N as f,
  I as o,
  O as l,
  P as d,
  Q as r,
  R as i,
  S as c,
  T as b,
  U as y
} from "./BGZizgo7.js";
import {
  h as _,
  m as p,
  u as g
} from "./BYUo2UjJ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dd0db09d87e18c857d845e6560045af9b8610366"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c4b39973-72d5-4075-a6bf-b08b2122a24e", e._sentryDebugIdIdentifier = "sentry-dbid-c4b39973-72d5-4075-a6bf-b08b2122a24e")
  } catch {}
})();

function s(e) {
  n === null && a(), f && n.l !== null ? h(n).m.push(e) : u(() => {
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
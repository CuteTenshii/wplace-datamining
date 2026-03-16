import {
  N as a,
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
} from "./Df0Hz134.js";
import {
  h as _,
  m as p,
  u as g
} from "./BXg7_WfL.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6c9b69506cfe19dc0f0d9bebc0491abdbf11db02"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0af837b9-b56b-4ff8-97e7-ac17d47d2564", e._sentryDebugIdIdentifier = "sentry-dbid-0af837b9-b56b-4ff8-97e7-ac17d47d2564")
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
const w = Object.freeze(Object.defineProperty({
  __proto__: null,
  flushSync: d,
  fork: l,
  getContext: r,
  hasContext: c,
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
  m as a, s as o, w as s
};
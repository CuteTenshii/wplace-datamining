import {
  N as a,
  C as f,
  O as n,
  P as u,
  G as o,
  Q as c,
  R as l,
  S as r,
  T as i,
  U as d,
  V as b,
  W as y
} from "./G_TaGb8Z.js";
import {
  h as _,
  m as p,
  u as g
} from "./SdvYsWW1.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a1c3c518b70a92c25ec2b85baf48e9981ce90ce8"
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
  flushSync: c,
  fork: l,
  getContext: r,
  hasContext: i,
  hydrate: _,
  mount: p,
  onDestroy: m,
  onMount: s,
  setContext: d,
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
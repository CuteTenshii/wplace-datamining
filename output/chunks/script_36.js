import {
  D as b,
  F as y,
  G as _,
  i as g,
  h as l,
  e as h,
  j as p,
  k as v,
  l as m,
  m as w,
  o as I,
  U as k,
  q as D
} from "./CjHooIZx.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c5b6f4008280188b6965f20aa04502030e013ff2"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "97470109-a95d-4c7d-b05e-671bd5c0b965", e._sentryDebugIdIdentifier = "sentry-dbid-97470109-a95d-4c7d-b05e-671bd5c0b965")
  })()
} catch {}

function T(e, n, c) {
  l && h();
  var f = e,
    t = k,
    d, o, a = null,
    u = b() ? y : _;

  function s() {
    d && D(d), a !== null && (a.lastChild.remove(), f.before(a), a = null), d = o
  }
  g(() => {
    if (u(t, t = n())) {
      var i = f,
        r = w();
      r && (a = document.createDocumentFragment(), a.append(i = p())), o = v(() => c(i)), r ? m.add_callback(s) : s()
    }
  }), l && (f = I)
}
export {
  T as k
};
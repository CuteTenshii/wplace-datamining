import {
  D as u,
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
} from "./BlTsffte.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cf70b86b5c91cdc18d318e8e942fc55d8b1d0f41"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "97470109-a95d-4c7d-b05e-671bd5c0b965", e._sentryDebugIdIdentifier = "sentry-dbid-97470109-a95d-4c7d-b05e-671bd5c0b965")
  })()
} catch {}

function T(e, a, c) {
  l && h();
  var d = e,
    t = k,
    f, o, n = null,
    b = u() ? y : _;

  function s() {
    f && D(f), n !== null && (n.lastChild.remove(), d.before(n), n = null), f = o
  }
  g(() => {
    if (b(t, t = a())) {
      var i = d,
        r = w();
      r && (n = document.createDocumentFragment(), n.append(i = p())), o = v(() => c(i)), r ? m.add_callback(s) : s()
    }
  }), l && (d = I)
}
export {
  T as k
};
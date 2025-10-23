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
} from "./Vo-uc5TQ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e1bb3bb6ac619eae9d90b3c0ac59135bee8cefab"
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
  var d = e,
    t = k,
    f, o, a = null,
    b = u() ? y : _;

  function s() {
    f && D(f), a !== null && (a.lastChild.remove(), d.before(a), a = null), f = o
  }
  g(() => {
    if (b(t, t = n())) {
      var i = d,
        r = w();
      r && (a = document.createDocumentFragment(), a.append(i = p())), o = v(() => c(i)), r ? m.add_callback(s) : s()
    }
  }), l && (d = I)
}
export {
  T as k
};
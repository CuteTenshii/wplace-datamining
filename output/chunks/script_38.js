import {
  D as u,
  F as y,
  G as _,
  i as g,
  h as c,
  e as h,
  j as p,
  k as v,
  l as m,
  m as w,
  o as I,
  U as k,
  q as D
} from "./B2p_ornx.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7467695e43643d993d60a0d9c62083c1cee57cdf"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1c8f7b8c-ebfb-4b32-a3c5-252867ab6df8", e._sentryDebugIdIdentifier = "sentry-dbid-1c8f7b8c-ebfb-4b32-a3c5-252867ab6df8")
  })()
} catch {}

function T(e, n, l) {
  c && h();
  var f = e,
    t = k,
    d, o, a = null,
    b = u() ? y : _;

  function s() {
    d && D(d), a !== null && (a.lastChild.remove(), f.before(a), a = null), d = o
  }
  g(() => {
    if (b(t, t = n())) {
      var i = f,
        r = w();
      r && (a = document.createDocumentFragment(), a.append(i = p())), o = v(() => l(i)), r ? m.add_callback(s) : s()
    }
  }), c && (f = I)
}
export {
  T as k
};
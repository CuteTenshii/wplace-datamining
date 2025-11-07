import {
  D as u,
  F as y,
  G as _,
  i as g,
  h as r,
  e as h,
  j as p,
  k as v,
  l as m,
  m as w,
  o as I,
  U as k,
  q as D
} from "./WB2K_T_Y.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "80747ca6680cc53dedf6ebd5efc0d97ede3ccece"
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
  r && h();
  var f = e,
    t = k,
    d, o, a = null,
    b = u() ? y : _;

  function c() {
    d && D(d), a !== null && (a.lastChild.remove(), f.before(a), a = null), d = o
  }
  g(() => {
    if (b(t, t = n())) {
      var s = f,
        i = w();
      i && (a = document.createDocumentFragment(), a.append(s = p())), o = v(() => l(s)), i ? m.add_callback(c) : c()
    }
  }), r && (f = I)
}
export {
  T as k
};
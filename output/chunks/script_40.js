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
} from "./CgVbUwWD.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5699240c8856da05e48f188a8f5094ebed5a4fea"
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

function T(e, n, c) {
  l && h();
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
      r && (a = document.createDocumentFragment(), a.append(i = p())), o = v(() => c(i)), r ? m.add_callback(s) : s()
    }
  }), l && (f = I)
}
export {
  T as k
};
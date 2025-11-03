import {
  D as b,
  F as y,
  G as _,
  k as g,
  i as c,
  j as p,
  l as h,
  m as v,
  o as m,
  q as w,
  v as I,
  U as k,
  w as D
} from "./KRt5sQSh.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "fccd346089ef1c0c20bf6dbcc60efaf285af3b07"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "88840b48-a2a6-4901-8c15-98b68606a57c", e._sentryDebugIdIdentifier = "sentry-dbid-88840b48-a2a6-4901-8c15-98b68606a57c")
  })()
} catch {}

function T(e, n, l) {
  c && p();
  var f = e,
    d = k,
    t, o, a = null,
    u = b() ? y : _;

  function s() {
    t && D(t), a !== null && (a.lastChild.remove(), f.before(a), a = null), t = o
  }
  g(() => {
    if (u(d, d = n())) {
      var i = f,
        r = w();
      r && (a = document.createDocumentFragment(), a.append(i = h())), o = v(() => l(i)), r ? m.add_callback(s) : s()
    }
  }), c && (f = I)
}
export {
  T as k
};
import {
  D as u,
  F as y,
  G as _,
  k as g,
  i as l,
  j as p,
  l as h,
  m as v,
  o as m,
  q as w,
  v as I,
  U as k,
  w as D
} from "./WvGh61NJ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dd4f8190f88bd342b0302e9b73d1fd999bcdb862"
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

function T(e, n, c) {
  l && p();
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
      r && (a = document.createDocumentFragment(), a.append(i = h())), o = v(() => c(i)), r ? m.add_callback(s) : s()
    }
  }), l && (d = I)
}
export {
  T as k
};
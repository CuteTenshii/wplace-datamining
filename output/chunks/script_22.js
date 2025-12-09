import {
  P as r,
  m as y,
  aq as u,
  k as n,
  T as g,
  _ as c,
  ag as l,
  Y as f,
  R as s,
  Z as p
} from "./8QS50H2t.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e56bf90e2bb69bf6dd1cbc6ce0cb1afca52af8e3"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6d55e75e-97ba-49c7-909d-0d34e96960bd", e._sentryDebugIdIdentifier = "sentry-dbid-6d55e75e-97ba-49c7-909d-0d34e96960bd")
  })()
} catch {}

function w(e, t) {
  let i = null,
    o = n;
  var a;
  if (n) {
    i = p;
    for (var d = g(document.head); d !== null && (d.nodeType !== c || d.data !== e);) d = l(d);
    if (d === null) f(!1);
    else {
      var b = l(d);
      d.remove(), s(b)
    }
  }
  n || (a = document.head.appendChild(r()));
  try {
    y(() => t(a), u)
  } finally {
    o && (f(!0), s(i))
  }
}
export {
  w as h
};
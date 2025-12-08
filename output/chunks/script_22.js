import {
  P as y,
  m as b,
  aq as u,
  k as n,
  T as g,
  _ as p,
  ag as a,
  Y as s,
  R as f,
  Z as _
} from "./BnnwGbo9.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e76e01713b9f24724b47470026b2b700ac9e05af"
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

function c(e, t) {
  let i = null,
    o = n;
  var l;
  if (n) {
    i = _;
    for (var d = g(document.head); d !== null && (d.nodeType !== p || d.data !== e);) d = a(d);
    if (d === null) s(!1);
    else {
      var r = a(d);
      d.remove(), f(r)
    }
  }
  n || (l = document.head.appendChild(y()));
  try {
    b(() => t(l), u)
  } finally {
    o && (s(!0), f(i))
  }
}
export {
  c as h
};
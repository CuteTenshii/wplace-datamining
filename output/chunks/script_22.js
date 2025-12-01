import {
  P as b,
  m as y,
  aq as u,
  k as n,
  T as g,
  _ as p,
  ag as l,
  Y as f,
  R as s,
  Z as _
} from "./C2eLZfbI.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c498731282e2bfa2154b3f8dba9ff6bac18e13ab"
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
    i = _;
    for (var d = g(document.head); d !== null && (d.nodeType !== p || d.data !== e);) d = l(d);
    if (d === null) f(!1);
    else {
      var r = l(d);
      d.remove(), s(r)
    }
  }
  n || (a = document.head.appendChild(b()));
  try {
    y(() => t(a), u)
  } finally {
    o && (f(!0), s(i))
  }
}
export {
  w as h
};
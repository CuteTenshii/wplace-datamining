import {
  P as r,
  m as y,
  aq as u,
  k as n,
  T as g,
  _ as p,
  ag as s,
  Y as a,
  R as f,
  Z as _
} from "./DHzwV35n.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dfb4bddd9fb2b4748eaf19466331b7b547c362b7"
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
    for (var d = g(document.head); d !== null && (d.nodeType !== p || d.data !== e);) d = s(d);
    if (d === null) a(!1);
    else {
      var b = s(d);
      d.remove(), f(b)
    }
  }
  n || (l = document.head.appendChild(r()));
  try {
    y(() => t(l), u)
  } finally {
    o && (a(!0), f(i))
  }
}
export {
  c as h
};
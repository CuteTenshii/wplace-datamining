import {
  P as r,
  m as y,
  aq as u,
  k as n,
  T as g,
  _ as p,
  ag as a,
  Y as f,
  R as s,
  Z as _
} from "./CjkM38R6.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "51633bbb0f20b0f5578caf566ba6bc15f3497cdd"
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
  var l;
  if (n) {
    i = _;
    for (var d = g(document.head); d !== null && (d.nodeType !== p || d.data !== e);) d = a(d);
    if (d === null) f(!1);
    else {
      var b = a(d);
      d.remove(), s(b)
    }
  }
  n || (l = document.head.appendChild(r()));
  try {
    y(() => t(l), u)
  } finally {
    o && (f(!0), s(i))
  }
}
export {
  w as h
};
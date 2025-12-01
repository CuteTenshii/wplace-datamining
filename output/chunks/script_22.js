import {
  P as y,
  m as u,
  aq as b,
  k as n,
  T as g,
  _ as p,
  ag as l,
  Y as s,
  R as f,
  Z as _
} from "./Deky9TbN.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "81e0d27a89a6ed71e59e16e2f2fe2aa899a3b379"
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

function E(e, t) {
  let a = null,
    o = n;
  var i;
  if (n) {
    a = _;
    for (var d = g(document.head); d !== null && (d.nodeType !== p || d.data !== e);) d = l(d);
    if (d === null) s(!1);
    else {
      var r = l(d);
      d.remove(), f(r)
    }
  }
  n || (i = document.head.appendChild(y()));
  try {
    u(() => t(i), b)
  } finally {
    o && (s(!0), f(a))
  }
}
export {
  E as h
};
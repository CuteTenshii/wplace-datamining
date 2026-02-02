import {
  H as b,
  m as y,
  ak as u,
  k as n,
  V as g,
  X as p,
  a8 as l,
  Q as s,
  P as a,
  J as _
} from "./Pvk3sEWX.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "79d1d83bf3d0a0f1d4fd38112e69555e6d7fe1e9"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5f1759db-c9bb-487f-99d8-98ce17302b48", e._sentryDebugIdIdentifier = "sentry-dbid-5f1759db-c9bb-487f-99d8-98ce17302b48")
  })()
} catch {}

function w(e, t) {
  let f = null,
    o = n;
  var i;
  if (n) {
    f = _;
    for (var d = g(document.head); d !== null && (d.nodeType !== p || d.data !== e);) d = l(d);
    if (d === null) s(!1);
    else {
      var r = l(d);
      d.remove(), a(r)
    }
  }
  n || (i = document.head.appendChild(b()));
  try {
    y(() => t(i), u)
  } finally {
    o && (s(!0), a(f))
  }
}
export {
  w as h
};
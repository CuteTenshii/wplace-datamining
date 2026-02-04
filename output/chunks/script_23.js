import {
  H as r,
  m as y,
  ak as u,
  k as n,
  V as g,
  X as p,
  a8 as l,
  Q as s,
  P as a,
  J as _
} from "./BxNCv_Ey.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "393d80b8e89856a8eed8a9424bbd25f96eb3752b"
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
  let i = null,
    o = n;
  var f;
  if (n) {
    i = _;
    for (var d = g(document.head); d !== null && (d.nodeType !== p || d.data !== e);) d = l(d);
    if (d === null) s(!1);
    else {
      var b = l(d);
      d.remove(), a(b)
    }
  }
  n || (f = document.head.appendChild(r()));
  try {
    y(() => t(f), u)
  } finally {
    o && (s(!0), a(i))
  }
}
export {
  w as h
};
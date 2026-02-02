import {
  H as y,
  m as b,
  ak as u,
  k as n,
  V as g,
  X as c,
  a8 as l,
  Q as s,
  P as a,
  J as p
} from "./BrDbkhPu.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "29e4431f574f09d587efe1de5f4cdc3c0249ff76"
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
    f = p;
    for (var d = g(document.head); d !== null && (d.nodeType !== c || d.data !== e);) d = l(d);
    if (d === null) s(!1);
    else {
      var r = l(d);
      d.remove(), a(r)
    }
  }
  n || (i = document.head.appendChild(y()));
  try {
    b(() => t(i), u)
  } finally {
    o && (s(!0), a(f))
  }
}
export {
  w as h
};
import {
  P as r,
  m as y,
  aq as u,
  k as n,
  T as g,
  _ as p,
  ag as f,
  Y as s,
  R as a,
  Z as _
} from "./DjohHawT.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "43095d4f05ba46dbb6f54b9ec680b6ad581b5a8e"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "7401be3d-9105-44bc-961f-2327c1b61700", e._sentryDebugIdIdentifier = "sentry-dbid-7401be3d-9105-44bc-961f-2327c1b61700")
  })()
} catch {}

function w(e, d) {
  let i = null,
    o = n;
  var l;
  if (n) {
    i = _;
    for (var t = g(document.head); t !== null && (t.nodeType !== p || t.data !== e);) t = f(t);
    if (t === null) s(!1);
    else {
      var b = f(t);
      t.remove(), a(b)
    }
  }
  n || (l = document.head.appendChild(r()));
  try {
    y(() => d(l), u)
  } finally {
    o && (s(!0), a(i))
  }
}
export {
  w as h
};
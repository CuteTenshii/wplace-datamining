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
} from "./7dqXbHhh.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "845cd245f9645ae957e3eeb4920045ede245aa3a"
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
    for (var t = g(document.head); t !== null && (t.nodeType !== p || t.data !== e);) t = a(t);
    if (t === null) s(!1);
    else {
      var r = a(t);
      t.remove(), f(r)
    }
  }
  n || (l = document.head.appendChild(y()));
  try {
    b(() => d(l), u)
  } finally {
    o && (s(!0), f(i))
  }
}
export {
  w as h
};
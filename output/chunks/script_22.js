import {
  P as y,
  m as b,
  aq as u,
  k as n,
  T as g,
  _ as p,
  ag as l,
  Y as s,
  R as a,
  Z as _
} from "./DuPBYAm5.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "f4e63ff6847082fed878819138982e523bd7482d"
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
  var f;
  if (n) {
    i = _;
    for (var t = g(document.head); t !== null && (t.nodeType !== p || t.data !== e);) t = l(t);
    if (t === null) s(!1);
    else {
      var r = l(t);
      t.remove(), a(r)
    }
  }
  n || (f = document.head.appendChild(y()));
  try {
    b(() => d(f), u)
  } finally {
    o && (s(!0), a(i))
  }
}
export {
  w as h
};
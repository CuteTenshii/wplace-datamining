import {
  P as y,
  m as b,
  aq as u,
  k as n,
  T as g,
  _ as c,
  ag as l,
  Y as s,
  R as f,
  Z as p
} from "./DpwlbZC_.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "2d93caab31ad43e5d9e57c08634e0a6280bfa30c"
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
  var a;
  if (n) {
    i = p;
    for (var t = g(document.head); t !== null && (t.nodeType !== c || t.data !== e);) t = l(t);
    if (t === null) s(!1);
    else {
      var r = l(t);
      t.remove(), f(r)
    }
  }
  n || (a = document.head.appendChild(y()));
  try {
    b(() => d(a), u)
  } finally {
    o && (s(!0), f(i))
  }
}
export {
  w as h
};
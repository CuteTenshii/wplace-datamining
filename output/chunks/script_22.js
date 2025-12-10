import {
  P as y,
  m as b,
  aq as u,
  k as n,
  T as g,
  _ as c,
  ag as f,
  Y as s,
  R as a,
  Z as p
} from "./HtHXdD60.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "3555dcfd10153d679a83fc3bd1544987e233c7a6"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7401be3d-9105-44bc-961f-2327c1b61700", e._sentryDebugIdIdentifier = "sentry-dbid-7401be3d-9105-44bc-961f-2327c1b61700")
  })()
} catch {}

function w(e, t) {
  let i = null,
    o = n;
  var l;
  if (n) {
    i = p;
    for (var d = g(document.head); d !== null && (d.nodeType !== c || d.data !== e);) d = f(d);
    if (d === null) s(!1);
    else {
      var r = f(d);
      d.remove(), a(r)
    }
  }
  n || (l = document.head.appendChild(y()));
  try {
    b(() => t(l), u)
  } finally {
    o && (s(!0), a(i))
  }
}
export {
  w as h
};
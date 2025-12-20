import {
  P as b,
  m as y,
  aq as u,
  k as n,
  T as g,
  _ as c,
  ag as l,
  Y as s,
  R as a,
  Z as p
} from "./CniRY7QL.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "10c5dbe739336528c9b18a68ad9bf5dfd745fca4"
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
  var f;
  if (n) {
    i = p;
    for (var d = g(document.head); d !== null && (d.nodeType !== c || d.data !== e);) d = l(d);
    if (d === null) s(!1);
    else {
      var r = l(d);
      d.remove(), a(r)
    }
  }
  n || (f = document.head.appendChild(b()));
  try {
    y(() => t(f), u)
  } finally {
    o && (s(!0), a(i))
  }
}
export {
  w as h
};
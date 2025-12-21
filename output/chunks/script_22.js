import {
  P as y,
  m as b,
  aq as u,
  k as n,
  T as g,
  _ as c,
  ag as s,
  Y as f,
  R as a,
  Z as p
} from "./BsKihL7x.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "93f384388d5e7c5014b7c7528c87cda732169ee9"
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
    i = p;
    for (var t = g(document.head); t !== null && (t.nodeType !== c || t.data !== e);) t = s(t);
    if (t === null) f(!1);
    else {
      var r = s(t);
      t.remove(), a(r)
    }
  }
  n || (l = document.head.appendChild(y()));
  try {
    b(() => d(l), u)
  } finally {
    o && (f(!0), a(i))
  }
}
export {
  w as h
};
import {
  P as r,
  m as y,
  aq as u,
  k as d,
  T as g,
  _ as c,
  ag as f,
  Y as s,
  R as a,
  Z as p
} from "./lghyzkeh.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "50c680b400b1bbcc8448fbf904e79ce0ac9a7ba9"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7401be3d-9105-44bc-961f-2327c1b61700", e._sentryDebugIdIdentifier = "sentry-dbid-7401be3d-9105-44bc-961f-2327c1b61700")
  })()
} catch {}

function w(e, n) {
  let i = null,
    o = d;
  var l;
  if (d) {
    i = p;
    for (var t = g(document.head); t !== null && (t.nodeType !== c || t.data !== e);) t = f(t);
    if (t === null) s(!1);
    else {
      var b = f(t);
      t.remove(), a(b)
    }
  }
  d || (l = document.head.appendChild(r()));
  try {
    y(() => n(l), u)
  } finally {
    o && (s(!0), a(i))
  }
}
export {
  w as h
};
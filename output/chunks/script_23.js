import {
  H as y,
  m as b,
  ak as u,
  k as n,
  V as g,
  X as p,
  a8 as l,
  Q as a,
  P as s,
  J as c
} from "./BBaHVBJx.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a2d67f85c31e3fef075f7f6dde31a8af3e9f3dda"
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
    f = c;
    for (var d = g(document.head); d !== null && (d.nodeType !== p || d.data !== e);) d = l(d);
    if (d === null) a(!1);
    else {
      var r = l(d);
      d.remove(), s(r)
    }
  }
  n || (i = document.head.appendChild(y()));
  try {
    b(() => t(i), u)
  } finally {
    o && (a(!0), s(f))
  }
}
export {
  w as h
};
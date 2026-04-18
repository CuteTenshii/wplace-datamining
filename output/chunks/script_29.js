import {
  a2 as y,
  C as u,
  aw as c,
  ax as b,
  A as s,
  aa as E,
  ar as n,
  H as f,
  G as l,
  J as g,
  a9 as _
} from "./BYTf-X4W.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e6c43a335491af110c902083fb644fb71e659308"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8b24fdd1-53ac-426d-9cc6-075c2f2ac094", e._sentryDebugIdIdentifier = "sentry-dbid-8b24fdd1-53ac-426d-9cc6-075c2f2ac094")
  } catch {}
})();

function w(e, t) {
  let d = null,
    r = s;
  var i;
  if (s) {
    d = g;
    for (var a = _(document.head); a !== null && (a.nodeType !== E || a.data !== e);) a = n(a);
    if (a === null) f(!1);
    else {
      var o = n(a);
      a.remove(), l(o)
    }
  }
  s || (i = document.head.appendChild(y()));
  try {
    u(() => t(i), c | b)
  } finally {
    r && (f(!0), l(d))
  }
}
export {
  w as h
};
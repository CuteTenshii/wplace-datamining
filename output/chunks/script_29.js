import {
  a2 as y,
  C as u,
  aw as c,
  ax as E,
  A as s,
  aa as b,
  ar as n,
  H as f,
  G as l,
  J as g,
  a9 as _
} from "./CRmpufpB.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "454dd064a649ff0efc297a38e6aed3cfb6597516"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "8b24fdd1-53ac-426d-9cc6-075c2f2ac094", e._sentryDebugIdIdentifier = "sentry-dbid-8b24fdd1-53ac-426d-9cc6-075c2f2ac094")
  } catch {}
})();

function w(e, d) {
  let t = null,
    r = s;
  var i;
  if (s) {
    t = g;
    for (var a = _(document.head); a !== null && (a.nodeType !== b || a.data !== e);) a = n(a);
    if (a === null) f(!1);
    else {
      var o = n(a);
      a.remove(), l(o)
    }
  }
  s || (i = document.head.appendChild(y()));
  try {
    u(() => d(i), c | E)
  } finally {
    r && (f(!0), l(t))
  }
}
export {
  w as h
};
import {
  a2 as y,
  C as c,
  aw as u,
  ax as b,
  A as s,
  aa as E,
  ar as n,
  H as f,
  G as l,
  J as g,
  a9 as _
} from "./ButFgnm2.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e00cf9360a6b375b0d5f70104e81f621ce41927c"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8b24fdd1-53ac-426d-9cc6-075c2f2ac094", e._sentryDebugIdIdentifier = "sentry-dbid-8b24fdd1-53ac-426d-9cc6-075c2f2ac094")
  } catch {}
})();

function w(e, a) {
  let d = null,
    r = s;
  var i;
  if (s) {
    d = g;
    for (var t = _(document.head); t !== null && (t.nodeType !== E || t.data !== e);) t = n(t);
    if (t === null) f(!1);
    else {
      var o = n(t);
      t.remove(), l(o)
    }
  }
  s || (i = document.head.appendChild(y()));
  try {
    c(() => a(i), u | b)
  } finally {
    r && (f(!0), l(d))
  }
}
export {
  w as h
};
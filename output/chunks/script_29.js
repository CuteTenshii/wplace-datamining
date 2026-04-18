import {
  a2 as o,
  C as y,
  aw as b,
  ax as u,
  A as s,
  aa as E,
  ar as n,
  H as f,
  G as l,
  J as g,
  a9 as _
} from "./Bpkf4F49.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8cde383e539e83c9bf370a8bc3de0b358fbc04c8"
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
      var c = n(t);
      t.remove(), l(c)
    }
  }
  s || (i = document.head.appendChild(o()));
  try {
    y(() => a(i), b | u)
  } finally {
    r && (f(!0), l(d))
  }
}
export {
  w as h
};
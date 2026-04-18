import {
  a2 as y,
  C as c,
  aw as u,
  ax as E,
  A as s,
  aa as b,
  ar as n,
  H as f,
  G as l,
  J as g,
  a9 as _
} from "./Cp19uF2I.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "f2a47ca0cf31d67c069828387c1df370b5604651"
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
    for (var a = _(document.head); a !== null && (a.nodeType !== b || a.data !== e);) a = n(a);
    if (a === null) f(!1);
    else {
      var o = n(a);
      a.remove(), l(o)
    }
  }
  s || (i = document.head.appendChild(y()));
  try {
    c(() => t(i), u | E)
  } finally {
    r && (f(!0), l(d))
  }
}
export {
  w as h
};
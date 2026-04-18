import {
  a2 as y,
  C as b,
  aw as u,
  ax as c,
  A as s,
  aa as E,
  ar as n,
  H as l,
  G as f,
  J as g,
  a9 as _
} from "./BldsY2Le.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "adbd784807892a96485bba09dcce4d69b0904804"
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
    for (var a = _(document.head); a !== null && (a.nodeType !== E || a.data !== e);) a = n(a);
    if (a === null) l(!1);
    else {
      var o = n(a);
      a.remove(), f(o)
    }
  }
  s || (i = document.head.appendChild(y()));
  try {
    b(() => d(i), u | c)
  } finally {
    r && (l(!0), f(t))
  }
}
export {
  w as h
};
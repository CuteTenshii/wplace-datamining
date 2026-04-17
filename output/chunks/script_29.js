import {
  a2 as y,
  C as b,
  aw as c,
  ax as u,
  A as s,
  aa as E,
  ar as n,
  H as f,
  G as l,
  J as g,
  a9 as _
} from "./BnI0KJSr.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "fcddd0f6e36106ba60797dbbda80e38f1cbe4c75"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8b24fdd1-53ac-426d-9cc6-075c2f2ac094", e._sentryDebugIdIdentifier = "sentry-dbid-8b24fdd1-53ac-426d-9cc6-075c2f2ac094")
  } catch {}
})();

function w(e, a) {
  let t = null,
    r = s;
  var i;
  if (s) {
    t = g;
    for (var d = _(document.head); d !== null && (d.nodeType !== E || d.data !== e);) d = n(d);
    if (d === null) f(!1);
    else {
      var o = n(d);
      d.remove(), l(o)
    }
  }
  s || (i = document.head.appendChild(y()));
  try {
    b(() => a(i), c | u)
  } finally {
    r && (f(!0), l(t))
  }
}
export {
  w as h
};
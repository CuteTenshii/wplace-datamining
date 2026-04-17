import {
  a2 as y,
  C as c,
  aw as u,
  ax as E,
  A as s,
  aa as b,
  ar as n,
  H as l,
  G as f,
  J as g,
  a9 as _
} from "./C0_5AQd4.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dc0186d26e0c2d626ef1b4331d86a985eea98c24"
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
    for (var d = _(document.head); d !== null && (d.nodeType !== b || d.data !== e);) d = n(d);
    if (d === null) l(!1);
    else {
      var o = n(d);
      d.remove(), f(o)
    }
  }
  s || (i = document.head.appendChild(y()));
  try {
    c(() => a(i), u | E)
  } finally {
    r && (l(!0), f(t))
  }
}
export {
  w as h
};
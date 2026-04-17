import {
  a2 as y,
  C as u,
  aw as c,
  ax as E,
  A as s,
  aa as g,
  ar as n,
  H as l,
  G as f,
  J as b,
  a9 as _
} from "./CdM0B1iz.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "906017252e1c5d4ea3d1148202cf14a58456747a"
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
    d = b;
    for (var a = _(document.head); a !== null && (a.nodeType !== g || a.data !== e);) a = n(a);
    if (a === null) l(!1);
    else {
      var o = n(a);
      a.remove(), f(o)
    }
  }
  s || (i = document.head.appendChild(y()));
  try {
    u(() => t(i), c | E)
  } finally {
    r && (l(!0), f(d))
  }
}
export {
  w as h
};
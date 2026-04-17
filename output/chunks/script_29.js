import {
  a2 as y,
  C as c,
  aw as u,
  ax as b,
  A as s,
  aa as E,
  ar as n,
  H as l,
  G as f,
  J as g,
  a9 as _
} from "./Nz8BX01A.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cfc28652dbc454b56a914780051d7c5b69184636"
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
    if (t === null) l(!1);
    else {
      var o = n(t);
      t.remove(), f(o)
    }
  }
  s || (i = document.head.appendChild(y()));
  try {
    c(() => a(i), u | b)
  } finally {
    r && (l(!0), f(d))
  }
}
export {
  w as h
};
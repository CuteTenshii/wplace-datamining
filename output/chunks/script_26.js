import {
  a4 as y,
  m as o,
  ax as u,
  ay as E,
  k as s,
  ab as c,
  ar as n,
  v as f,
  q as l,
  w as g,
  aa as _
} from "./G_TaGb8Z.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a1c3c518b70a92c25ec2b85baf48e9981ce90ce8"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f10464c4-2af2-49b9-b77f-166ca89d49db", e._sentryDebugIdIdentifier = "sentry-dbid-f10464c4-2af2-49b9-b77f-166ca89d49db")
  } catch {}
})();

function v(e, t) {
  let d = null,
    r = s;
  var i;
  if (s) {
    d = g;
    for (var a = _(document.head); a !== null && (a.nodeType !== c || a.data !== e);) a = n(a);
    if (a === null) f(!1);
    else {
      var b = n(a);
      a.remove(), l(b)
    }
  }
  s || (i = document.head.appendChild(y()));
  try {
    o(() => t(i), u | E)
  } finally {
    r && (f(!0), l(d))
  }
}
export {
  v as h
};
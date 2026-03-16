import {
  a4 as y,
  m as o,
  ax as u,
  ay as E,
  k as s,
  ab as g,
  ar as n,
  v as f,
  q as l,
  w as _,
  aa as c
} from "./BpkiS5AT.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8b4ab28972d63cbdad1764e9fac2da360f24ece0"
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
    d = _;
    for (var a = c(document.head); a !== null && (a.nodeType !== g || a.data !== e);) a = n(a);
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
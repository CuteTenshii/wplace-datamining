import {
  a4 as y,
  m as o,
  ax as u,
  ay as E,
  k as s,
  ab as g,
  ar as i,
  v as n,
  q as l,
  w as _,
  aa as p
} from "./Bg2fLyAp.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1e0e8686272f8ab69a6b4937a8dffbb2f245b796"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f10464c4-2af2-49b9-b77f-166ca89d49db", e._sentryDebugIdIdentifier = "sentry-dbid-f10464c4-2af2-49b9-b77f-166ca89d49db")
  } catch {}
})();

function v(e, t) {
  let d = null,
    r = s;
  var f;
  if (s) {
    d = _;
    for (var a = p(document.head); a !== null && (a.nodeType !== g || a.data !== e);) a = i(a);
    if (a === null) n(!1);
    else {
      var b = i(a);
      a.remove(), l(b)
    }
  }
  s || (f = document.head.appendChild(y()));
  try {
    o(() => t(f), u | E)
  } finally {
    r && (n(!0), l(d))
  }
}
export {
  v as h
};
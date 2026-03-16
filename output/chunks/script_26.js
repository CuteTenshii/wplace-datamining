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
} from "./DBVFc_3b.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d07d8848ea889a09465db794dc92b79d5c096c7e"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "f10464c4-2af2-49b9-b77f-166ca89d49db", e._sentryDebugIdIdentifier = "sentry-dbid-f10464c4-2af2-49b9-b77f-166ca89d49db")
  } catch {}
})();

function v(e, d) {
  let t = null,
    r = s;
  var i;
  if (s) {
    t = _;
    for (var a = c(document.head); a !== null && (a.nodeType !== g || a.data !== e);) a = n(a);
    if (a === null) f(!1);
    else {
      var b = n(a);
      a.remove(), l(b)
    }
  }
  s || (i = document.head.appendChild(y()));
  try {
    o(() => d(i), u | E)
  } finally {
    r && (f(!0), l(t))
  }
}
export {
  v as h
};
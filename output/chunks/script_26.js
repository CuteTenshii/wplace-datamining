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
} from "./Cu0FD5l7.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "72fbd38af17dae1ddf2de413da161ffaa3b3b729"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "f10464c4-2af2-49b9-b77f-166ca89d49db", e._sentryDebugIdIdentifier = "sentry-dbid-f10464c4-2af2-49b9-b77f-166ca89d49db")
  } catch {}
})();

function v(e, d) {
  let t = null,
    r = s;
  var f;
  if (s) {
    t = _;
    for (var a = p(document.head); a !== null && (a.nodeType !== g || a.data !== e);) a = i(a);
    if (a === null) n(!1);
    else {
      var b = i(a);
      a.remove(), l(b)
    }
  }
  s || (f = document.head.appendChild(y()));
  try {
    o(() => d(f), u | E)
  } finally {
    r && (n(!0), l(t))
  }
}
export {
  v as h
};
import {
  a3 as y,
  D as u,
  aw as E,
  ax as b,
  B as d,
  ab as g,
  ar as n,
  I as f,
  H as l,
  K as _,
  aa as c
} from "./CaCjFaGC.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cfa0387f7130e8b16c3d20b0694a74c32ca6dc49"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "217f4660-039c-4904-92fe-0891161aaf25", e._sentryDebugIdIdentifier = "sentry-dbid-217f4660-039c-4904-92fe-0891161aaf25")
  } catch {}
})();

function w(e, t) {
  let s = null,
    r = d;
  var i;
  if (d) {
    s = _;
    for (var a = c(document.head); a !== null && (a.nodeType !== g || a.data !== e);) a = n(a);
    if (a === null) f(!1);
    else {
      var o = n(a);
      a.remove(), l(o)
    }
  }
  d || (i = document.head.appendChild(y()));
  try {
    u(() => t(i), E | b)
  } finally {
    r && (f(!0), l(s))
  }
}
export {
  w as h
};
import {
  a3 as y,
  D as b,
  aw as u,
  ax as E,
  B as s,
  ab as g,
  ar as n,
  I as f,
  H as l,
  K as _,
  aa as c
} from "./aONqeBJ4.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c82b8b5d8deacdc21b4154b9417a43b8fc75f478"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "217f4660-039c-4904-92fe-0891161aaf25", e._sentryDebugIdIdentifier = "sentry-dbid-217f4660-039c-4904-92fe-0891161aaf25")
  } catch {}
})();

function w(e, t) {
  let d = null,
    r = s;
  var i;
  if (s) {
    d = _;
    for (var a = c(document.head); a !== null && (a.nodeType !== g || a.data !== e);) a = n(a);
    if (a === null) f(!1);
    else {
      var o = n(a);
      a.remove(), l(o)
    }
  }
  s || (i = document.head.appendChild(y()));
  try {
    b(() => t(i), u | E)
  } finally {
    r && (f(!0), l(d))
  }
}
export {
  w as h
};
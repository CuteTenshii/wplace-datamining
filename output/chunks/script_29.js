import {
  a3 as y,
  D as u,
  aw as E,
  ax as b,
  B as s,
  ab as g,
  ar as n,
  I as f,
  H as l,
  K as _,
  aa as c
} from "./CsHGdBfZ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c68723346dc53cede4c33166e0b3070fd4fa2ccb"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "217f4660-039c-4904-92fe-0891161aaf25", e._sentryDebugIdIdentifier = "sentry-dbid-217f4660-039c-4904-92fe-0891161aaf25")
  } catch {}
})();

function w(e, a) {
  let d = null,
    r = s;
  var i;
  if (s) {
    d = _;
    for (var t = c(document.head); t !== null && (t.nodeType !== g || t.data !== e);) t = n(t);
    if (t === null) f(!1);
    else {
      var o = n(t);
      t.remove(), l(o)
    }
  }
  s || (i = document.head.appendChild(y()));
  try {
    u(() => a(i), E | b)
  } finally {
    r && (f(!0), l(d))
  }
}
export {
  w as h
};
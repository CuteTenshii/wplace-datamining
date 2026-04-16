import {
  a3 as y,
  D as u,
  aw as E,
  ax as b,
  B as s,
  ab as g,
  ar as i,
  I as n,
  H as l,
  K as _,
  aa as p
} from "./BZHD_3xD.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "804fae10c9a96a4658fed8df64d864b17b400aa1"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "217f4660-039c-4904-92fe-0891161aaf25", e._sentryDebugIdIdentifier = "sentry-dbid-217f4660-039c-4904-92fe-0891161aaf25")
  } catch {}
})();

function D(e, t) {
  let d = null,
    r = s;
  var f;
  if (s) {
    d = _;
    for (var a = p(document.head); a !== null && (a.nodeType !== g || a.data !== e);) a = i(a);
    if (a === null) n(!1);
    else {
      var o = i(a);
      a.remove(), l(o)
    }
  }
  s || (f = document.head.appendChild(y()));
  try {
    u(() => t(f), E | b)
  } finally {
    r && (n(!0), l(d))
  }
}
export {
  D as h
};
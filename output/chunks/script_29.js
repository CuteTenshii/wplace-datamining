import {
  a3 as y,
  D as u,
  aw as b,
  ax as E,
  B as s,
  ab as g,
  ar as i,
  I as n,
  H as l,
  K as _,
  aa as p
} from "./CJNfechn.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "bd6ed46249e1ed5fe7432cfb3a9b80dcfb887d57"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "217f4660-039c-4904-92fe-0891161aaf25", e._sentryDebugIdIdentifier = "sentry-dbid-217f4660-039c-4904-92fe-0891161aaf25")
  } catch {}
})();

function w(e, a) {
  let d = null,
    r = s;
  var f;
  if (s) {
    d = _;
    for (var t = p(document.head); t !== null && (t.nodeType !== g || t.data !== e);) t = i(t);
    if (t === null) n(!1);
    else {
      var o = i(t);
      t.remove(), l(o)
    }
  }
  s || (f = document.head.appendChild(y()));
  try {
    u(() => a(f), b | E)
  } finally {
    r && (n(!0), l(d))
  }
}
export {
  w as h
};
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
} from "./DjeFwfzX.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "209576268ed2d55d78b1f313fb4db5f4a92290b5"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "217f4660-039c-4904-92fe-0891161aaf25", e._sentryDebugIdIdentifier = "sentry-dbid-217f4660-039c-4904-92fe-0891161aaf25")
  } catch {}
})();

function D(e, a) {
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
  D as h
};
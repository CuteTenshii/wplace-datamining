import {
  a3 as y,
  D as u,
  aw as b,
  ax as E,
  B as d,
  ab as g,
  ar as i,
  I as n,
  H as l,
  K as _,
  aa as p
} from "./CP18E9YK.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6f22cff8187de3395cfbf72b619a597cbd559223"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "217f4660-039c-4904-92fe-0891161aaf25", e._sentryDebugIdIdentifier = "sentry-dbid-217f4660-039c-4904-92fe-0891161aaf25")
  } catch {}
})();

function w(e, a) {
  let s = null,
    r = d;
  var f;
  if (d) {
    s = _;
    for (var t = p(document.head); t !== null && (t.nodeType !== g || t.data !== e);) t = i(t);
    if (t === null) n(!1);
    else {
      var o = i(t);
      t.remove(), l(o)
    }
  }
  d || (f = document.head.appendChild(y()));
  try {
    u(() => a(f), b | E)
  } finally {
    r && (n(!0), l(s))
  }
}
export {
  w as h
};
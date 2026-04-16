import {
  a3 as y,
  D as u,
  aw as E,
  ax as g,
  B as d,
  ab as _,
  ar as i,
  I as n,
  H as l,
  K as b,
  aa as p
} from "./B8NcJmf7.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1f8643ac63030331424d23f5f462150829277f89"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "217f4660-039c-4904-92fe-0891161aaf25", e._sentryDebugIdIdentifier = "sentry-dbid-217f4660-039c-4904-92fe-0891161aaf25")
  } catch {}
})();

function D(e, a) {
  let s = null,
    r = d;
  var f;
  if (d) {
    s = b;
    for (var t = p(document.head); t !== null && (t.nodeType !== _ || t.data !== e);) t = i(t);
    if (t === null) n(!1);
    else {
      var o = i(t);
      t.remove(), l(o)
    }
  }
  d || (f = document.head.appendChild(y()));
  try {
    u(() => a(f), E | g)
  } finally {
    r && (n(!0), l(s))
  }
}
export {
  D as h
};
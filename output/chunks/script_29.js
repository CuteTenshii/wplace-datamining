import {
  a3 as y,
  D as u,
  aw as E,
  ax as g,
  B as s,
  ab as b,
  ar as i,
  I as n,
  H as l,
  K as _,
  aa as c
} from "./jMNCXwTX.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d92995df349756f69cfad78cc6651ba9aa7c7814"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "217f4660-039c-4904-92fe-0891161aaf25", e._sentryDebugIdIdentifier = "sentry-dbid-217f4660-039c-4904-92fe-0891161aaf25")
  } catch {}
})();

function w(e, t) {
  let d = null,
    r = s;
  var f;
  if (s) {
    d = _;
    for (var a = c(document.head); a !== null && (a.nodeType !== b || a.data !== e);) a = i(a);
    if (a === null) n(!1);
    else {
      var o = i(a);
      a.remove(), l(o)
    }
  }
  s || (f = document.head.appendChild(y()));
  try {
    u(() => t(f), E | g)
  } finally {
    r && (n(!0), l(d))
  }
}
export {
  w as h
};
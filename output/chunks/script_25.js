import {
  a2 as y,
  m as b,
  aw as u,
  ax as E,
  k as f,
  a9 as g,
  aq as i,
  v as n,
  q as l,
  w as _,
  a8 as c
} from "./C3nPqK5x.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "4dec865342b25be0d3f9a4de40183446fa2d5c45"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ff3be7bf-5c05-430e-9aff-721c9a1873d7", e._sentryDebugIdIdentifier = "sentry-dbid-ff3be7bf-5c05-430e-9aff-721c9a1873d7")
  } catch {}
})();

function w(e, a) {
  let d = null,
    r = f;
  var s;
  if (f) {
    d = _;
    for (var t = c(document.head); t !== null && (t.nodeType !== g || t.data !== e);) t = i(t);
    if (t === null) n(!1);
    else {
      var o = i(t);
      t.remove(), l(o)
    }
  }
  f || (s = document.head.appendChild(y()));
  try {
    b(() => a(s), u | E)
  } finally {
    r && (n(!0), l(d))
  }
}
export {
  w as h
};
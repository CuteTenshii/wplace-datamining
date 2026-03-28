import {
  a4 as y,
  m as o,
  ax as u,
  ay as E,
  k as s,
  ab as g,
  ar as n,
  v as f,
  q as l,
  w as _,
  aa as c
} from "./DAkfeAd4.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5b6c982e9643479451e4387b2e009c10939a1316"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f10464c4-2af2-49b9-b77f-166ca89d49db", e._sentryDebugIdIdentifier = "sentry-dbid-f10464c4-2af2-49b9-b77f-166ca89d49db")
  } catch {}
})();

function v(e, a) {
  let d = null,
    r = s;
  var i;
  if (s) {
    d = _;
    for (var t = c(document.head); t !== null && (t.nodeType !== g || t.data !== e);) t = n(t);
    if (t === null) f(!1);
    else {
      var b = n(t);
      t.remove(), l(b)
    }
  }
  s || (i = document.head.appendChild(y()));
  try {
    o(() => a(i), u | E)
  } finally {
    r && (f(!0), l(d))
  }
}
export {
  v as h
};
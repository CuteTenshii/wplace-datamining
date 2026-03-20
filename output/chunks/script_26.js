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
} from "./CqOPxJme.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "405d9b08e89656e997bc9e3c862de93d5b969d8c"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "f10464c4-2af2-49b9-b77f-166ca89d49db", e._sentryDebugIdIdentifier = "sentry-dbid-f10464c4-2af2-49b9-b77f-166ca89d49db")
  } catch {}
})();

function v(e, d) {
  let a = null,
    r = s;
  var i;
  if (s) {
    a = _;
    for (var t = c(document.head); t !== null && (t.nodeType !== g || t.data !== e);) t = n(t);
    if (t === null) f(!1);
    else {
      var b = n(t);
      t.remove(), l(b)
    }
  }
  s || (i = document.head.appendChild(y()));
  try {
    o(() => d(i), u | E)
  } finally {
    r && (f(!0), l(a))
  }
}
export {
  v as h
};
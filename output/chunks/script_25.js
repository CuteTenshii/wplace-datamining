import {
  H as y,
  m as b,
  ak as u,
  k as n,
  W as g,
  Y as p,
  a9 as l,
  Q as s,
  P as a,
  J as c
} from "./BX08WKHH.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7643ba5d2918c38f2d3e1507dfee87cd2c0bfa50"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "f0c577ee-84b0-4562-92be-4fb4280e6011", e._sentryDebugIdIdentifier = "sentry-dbid-f0c577ee-84b0-4562-92be-4fb4280e6011")
  })()
} catch {}

function w(e, d) {
  let f = null,
    o = n;
  var i;
  if (n) {
    f = c;
    for (var t = g(document.head); t !== null && (t.nodeType !== p || t.data !== e);) t = l(t);
    if (t === null) s(!1);
    else {
      var r = l(t);
      t.remove(), a(r)
    }
  }
  n || (i = document.head.appendChild(y()));
  try {
    b(() => d(i), u)
  } finally {
    o && (s(!0), a(f))
  }
}
export {
  w as h
};
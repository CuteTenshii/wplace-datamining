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
} from "./C_uavZQJ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "448b4ed83dade10ecee1f50ce15a9606b232dc90"
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
  let i = null,
    o = n;
  var f;
  if (n) {
    i = c;
    for (var t = g(document.head); t !== null && (t.nodeType !== p || t.data !== e);) t = l(t);
    if (t === null) s(!1);
    else {
      var r = l(t);
      t.remove(), a(r)
    }
  }
  n || (f = document.head.appendChild(y()));
  try {
    b(() => d(f), u)
  } finally {
    o && (s(!0), a(i))
  }
}
export {
  w as h
};
import {
  a2 as y,
  m as u,
  as as b,
  k as d,
  R as g,
  K as p,
  L as i,
  a8 as l,
  P as s,
  J as _
} from "./DcuED2r1.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "358b627090e665fa84c80454e90310d86dcaf84d"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f267f2ea-f695-4983-ba83-b49407a34689", e._sentryDebugIdIdentifier = "sentry-dbid-f267f2ea-f695-4983-ba83-b49407a34689")
  })()
} catch {}

function E(e, n) {
  let a = null,
    o = d;
  var f;
  if (d) {
    a = _;
    for (var t = g(document.head); t !== null && (t.nodeType !== p || t.data !== e);) t = i(t);
    if (t === null) l(!1);
    else {
      var r = i(t);
      t.remove(), s(r)
    }
  }
  d || (f = document.head.appendChild(y()));
  try {
    u(() => n(f), b)
  } finally {
    o && (l(!0), s(a))
  }
}
export {
  E as h
};
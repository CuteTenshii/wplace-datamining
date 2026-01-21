import {
  T as y,
  m as u,
  ak as g,
  k as n,
  V as b,
  Y as p,
  af as i,
  P as l,
  O as s,
  X as _
} from "./8X9bXL-a.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "0e0f1d9d12a0c5d9ef5f263afa770640948e8e71"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "13730e65-8e41-476f-9e1a-a2660d750021", e._sentryDebugIdIdentifier = "sentry-dbid-13730e65-8e41-476f-9e1a-a2660d750021")
  })()
} catch {}

function E(e, d) {
  let a = null,
    o = n;
  var f;
  if (n) {
    a = _;
    for (var t = b(document.head); t !== null && (t.nodeType !== p || t.data !== e);) t = i(t);
    if (t === null) l(!1);
    else {
      var r = i(t);
      t.remove(), s(r)
    }
  }
  n || (f = document.head.appendChild(y()));
  try {
    u(() => d(f), g)
  } finally {
    o && (l(!0), s(a))
  }
}
export {
  E as h
};
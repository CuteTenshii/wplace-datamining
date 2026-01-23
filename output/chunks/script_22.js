import {
  T as y,
  m as u,
  ak as g,
  k as d,
  V as b,
  Y as p,
  af as a,
  P as l,
  O as s,
  X as _
} from "./CYj7RoHR.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "57f41670f2805f713b0da8f3636738eb734a70e1"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "13730e65-8e41-476f-9e1a-a2660d750021", e._sentryDebugIdIdentifier = "sentry-dbid-13730e65-8e41-476f-9e1a-a2660d750021")
  })()
} catch {}

function E(e, n) {
  let f = null,
    o = d;
  var i;
  if (d) {
    f = _;
    for (var t = b(document.head); t !== null && (t.nodeType !== p || t.data !== e);) t = a(t);
    if (t === null) l(!1);
    else {
      var r = a(t);
      t.remove(), s(r)
    }
  }
  d || (i = document.head.appendChild(y()));
  try {
    u(() => n(i), g)
  } finally {
    o && (l(!0), s(f))
  }
}
export {
  E as h
};
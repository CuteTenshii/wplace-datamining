import {
  H as b,
  m as y,
  ak as u,
  k as n,
  V as g,
  X as c,
  a8 as l,
  Q as a,
  P as s,
  J as p
} from "./ik5_Egbm.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1ff68788c5989e2fec5a9c9b2aaa5ef268601fd5"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "5f1759db-c9bb-487f-99d8-98ce17302b48", e._sentryDebugIdIdentifier = "sentry-dbid-5f1759db-c9bb-487f-99d8-98ce17302b48")
  })()
} catch {}

function w(e, d) {
  let f = null,
    o = n;
  var i;
  if (n) {
    f = p;
    for (var t = g(document.head); t !== null && (t.nodeType !== c || t.data !== e);) t = l(t);
    if (t === null) a(!1);
    else {
      var r = l(t);
      t.remove(), s(r)
    }
  }
  n || (i = document.head.appendChild(b()));
  try {
    y(() => d(i), u)
  } finally {
    o && (a(!0), s(f))
  }
}
export {
  w as h
};
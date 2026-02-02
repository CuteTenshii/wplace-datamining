import {
  H as r,
  m as y,
  ak as u,
  k as n,
  V as g,
  X as p,
  a8 as f,
  Q as s,
  P as a,
  J as c
} from "./0lw74TdK.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1be1930440b8b07ce70b7b458d3e953490a5a011"
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
  let i = null,
    o = n;
  var l;
  if (n) {
    i = c;
    for (var t = g(document.head); t !== null && (t.nodeType !== p || t.data !== e);) t = f(t);
    if (t === null) s(!1);
    else {
      var b = f(t);
      t.remove(), a(b)
    }
  }
  n || (l = document.head.appendChild(r()));
  try {
    y(() => d(l), u)
  } finally {
    o && (s(!0), a(i))
  }
}
export {
  w as h
};
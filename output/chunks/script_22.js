import {
  P as y,
  m as b,
  aq as u,
  k as d,
  T as g,
  _ as p,
  ag as l,
  Y as s,
  R as a,
  Z as c
} from "./CRdf5mx2.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "65f7af1ca1d715ef20a4159507e8f6b55052c932"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7401be3d-9105-44bc-961f-2327c1b61700", e._sentryDebugIdIdentifier = "sentry-dbid-7401be3d-9105-44bc-961f-2327c1b61700")
  })()
} catch {}

function w(e, n) {
  let i = null,
    o = d;
  var f;
  if (d) {
    i = c;
    for (var t = g(document.head); t !== null && (t.nodeType !== p || t.data !== e);) t = l(t);
    if (t === null) s(!1);
    else {
      var r = l(t);
      t.remove(), a(r)
    }
  }
  d || (f = document.head.appendChild(y()));
  try {
    b(() => n(f), u)
  } finally {
    o && (s(!0), a(i))
  }
}
export {
  w as h
};
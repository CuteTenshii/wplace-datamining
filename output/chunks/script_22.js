import {
  P as y,
  m as b,
  aq as u,
  k as d,
  T as g,
  _ as c,
  ag as l,
  Y as s,
  R as a,
  Z as p
} from "./B2A4K7wt.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6bc8c324ce1f230e3a6c17fd8c71ebea9f521c24"
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
    i = p;
    for (var t = g(document.head); t !== null && (t.nodeType !== c || t.data !== e);) t = l(t);
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
import {
  P as b,
  m as y,
  aq as u,
  k as d,
  T as g,
  _ as p,
  ag as s,
  Y as f,
  R as a,
  Z as _
} from "./DAiWoJQM.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "718929eb34b39115ade64201f12b715208957752"
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
  var l;
  if (d) {
    i = _;
    for (var t = g(document.head); t !== null && (t.nodeType !== p || t.data !== e);) t = s(t);
    if (t === null) f(!1);
    else {
      var r = s(t);
      t.remove(), a(r)
    }
  }
  d || (l = document.head.appendChild(b()));
  try {
    y(() => n(l), u)
  } finally {
    o && (f(!0), a(i))
  }
}
export {
  w as h
};
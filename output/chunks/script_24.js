import {
  T as y,
  j as u,
  au as b,
  h as n,
  W as g,
  a2 as p,
  aj as l,
  a0 as s,
  V as f,
  a1 as _
} from "./Cj4a6Kf2.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "05e3477bd6a9a14e4165d1dc469ad2945d0197f4"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8bbfe94a-7035-43d5-ad8e-5558ddd8b6ec", e._sentryDebugIdIdentifier = "sentry-dbid-8bbfe94a-7035-43d5-ad8e-5558ddd8b6ec")
  })()
} catch {}

function c(e, t) {
  let a = null,
    o = n;
  var i;
  if (n) {
    a = _;
    for (var d = g(document.head); d !== null && (d.nodeType !== p || d.data !== e);) d = l(d);
    if (d === null) s(!1);
    else {
      var r = l(d);
      d.remove(), f(r)
    }
  }
  n || (i = document.head.appendChild(y()));
  try {
    u(() => t(i), b)
  } finally {
    o && (s(!0), f(a))
  }
}
export {
  c as h
};
import {
  T as r,
  j as y,
  au as u,
  h as n,
  W as g,
  a2 as p,
  aj as f,
  a0 as l,
  V as s,
  a1 as _
} from "./CgLM89MT.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "2f23e3a8f8ea879ac9c94b9f80bbe3f77b879d5a"
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

function w(e, t) {
  let a = null,
    o = n;
  var i;
  if (n) {
    a = _;
    for (var d = g(document.head); d !== null && (d.nodeType !== p || d.data !== e);) d = f(d);
    if (d === null) l(!1);
    else {
      var b = f(d);
      d.remove(), s(b)
    }
  }
  n || (i = document.head.appendChild(r()));
  try {
    y(() => t(i), u)
  } finally {
    o && (l(!0), s(a))
  }
}
export {
  w as h
};
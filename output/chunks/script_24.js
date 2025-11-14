import {
  T as y,
  j as u,
  au as b,
  h as n,
  W as g,
  a2 as p,
  aj as l,
  a0 as f,
  V as s,
  a1 as c
} from "./Dk_dXCV0.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "02a79a68c9311df3cb3141310cf8d650e49567ec"
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
    a = c;
    for (var d = g(document.head); d !== null && (d.nodeType !== p || d.data !== e);) d = l(d);
    if (d === null) f(!1);
    else {
      var r = l(d);
      d.remove(), s(r)
    }
  }
  n || (i = document.head.appendChild(y()));
  try {
    u(() => t(i), b)
  } finally {
    o && (f(!0), s(a))
  }
}
export {
  w as h
};
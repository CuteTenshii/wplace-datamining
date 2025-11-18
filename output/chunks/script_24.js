import {
  T as r,
  j as y,
  au as u,
  h as n,
  W as g,
  a2 as c,
  aj as l,
  a0 as f,
  V as s,
  a1 as p
} from "./DnEjpmVm.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dcafbf70eeb3b56ec7077bb04087bc09c7e58c55"
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
    a = p;
    for (var d = g(document.head); d !== null && (d.nodeType !== c || d.data !== e);) d = l(d);
    if (d === null) f(!1);
    else {
      var b = l(d);
      d.remove(), s(b)
    }
  }
  n || (i = document.head.appendChild(r()));
  try {
    y(() => t(i), u)
  } finally {
    o && (f(!0), s(a))
  }
}
export {
  w as h
};
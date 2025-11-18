import {
  T as y,
  j as b,
  au as u,
  h as n,
  W as g,
  a2 as c,
  aj as f,
  a0 as l,
  V as s,
  a1 as p
} from "./DXiHgRqS.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "2df914dd371fba2112b2cd92c4cdc7ac8c5482fe"
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
    for (var d = g(document.head); d !== null && (d.nodeType !== c || d.data !== e);) d = f(d);
    if (d === null) l(!1);
    else {
      var r = f(d);
      d.remove(), s(r)
    }
  }
  n || (i = document.head.appendChild(y()));
  try {
    b(() => t(i), u)
  } finally {
    o && (l(!0), s(a))
  }
}
export {
  w as h
};
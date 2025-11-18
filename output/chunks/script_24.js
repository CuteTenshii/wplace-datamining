import {
  T as y,
  j as b,
  au as u,
  h as a,
  W as g,
  a2 as p,
  aj as f,
  a0 as l,
  V as s,
  a1 as c
} from "./h0AjwZJZ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1ec3fee10a39ac222b6aa79fae966fd9b93c3dd3"
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
  let n = null,
    o = a;
  var i;
  if (a) {
    n = c;
    for (var d = g(document.head); d !== null && (d.nodeType !== p || d.data !== e);) d = f(d);
    if (d === null) l(!1);
    else {
      var r = f(d);
      d.remove(), s(r)
    }
  }
  a || (i = document.head.appendChild(y()));
  try {
    b(() => t(i), u)
  } finally {
    o && (l(!0), s(n))
  }
}
export {
  w as h
};
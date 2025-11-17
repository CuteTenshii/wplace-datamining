import {
  T as b,
  j as y,
  au as u,
  h as n,
  W as g,
  a2 as c,
  aj as f,
  a0 as l,
  V as s,
  a1 as p
} from "./_uPdD6ej.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8ca9d5bb8d7e9609a9f3fa05a0fcc401dd1cd4cb"
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
  n || (i = document.head.appendChild(b()));
  try {
    y(() => t(i), u)
  } finally {
    o && (l(!0), s(a))
  }
}
export {
  w as h
};
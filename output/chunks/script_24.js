import {
  U as r,
  j as y,
  au as u,
  h as n,
  X as g,
  a3 as p,
  ak as i,
  a1 as l,
  W as s,
  a2 as c
} from "./CYmALYaf.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6d992b625daae7fbeceb4c3bf7e8ebe3eb30a19f"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3f40d75a-e78c-4b30-abc4-26df5e918d47", e._sentryDebugIdIdentifier = "sentry-dbid-3f40d75a-e78c-4b30-abc4-26df5e918d47")
  })()
} catch {}

function w(e, t) {
  let a = null,
    o = n;
  var f;
  if (n) {
    a = c;
    for (var d = g(document.head); d !== null && (d.nodeType !== p || d.data !== e);) d = i(d);
    if (d === null) l(!1);
    else {
      var b = i(d);
      d.remove(), s(b)
    }
  }
  n || (f = document.head.appendChild(r()));
  try {
    y(() => t(f), u)
  } finally {
    o && (l(!0), s(a))
  }
}
export {
  w as h
};
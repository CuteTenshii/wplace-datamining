import {
  U as y,
  j as b,
  au as u,
  h as n,
  X as g,
  a3 as p,
  ak as f,
  a1 as l,
  W as s,
  a2 as c
} from "./C-9Y3fPa.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "fe5b293b0b58eb9d702fd066546411c50747d7aa"
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
  var i;
  if (n) {
    a = c;
    for (var d = g(document.head); d !== null && (d.nodeType !== p || d.data !== e);) d = f(d);
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
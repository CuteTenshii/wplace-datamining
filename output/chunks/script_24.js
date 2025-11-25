import {
  U as y,
  j as u,
  au as b,
  h as a,
  X as g,
  a3 as p,
  ak as i,
  a1 as l,
  W as s,
  a2 as c
} from "./BAiyaAMH.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ac7618a676a9d262ff8724cf2a3a13f62011007a"
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
  let n = null,
    o = a;
  var f;
  if (a) {
    n = c;
    for (var d = g(document.head); d !== null && (d.nodeType !== p || d.data !== e);) d = i(d);
    if (d === null) l(!1);
    else {
      var r = i(d);
      d.remove(), s(r)
    }
  }
  a || (f = document.head.appendChild(y()));
  try {
    u(() => t(f), b)
  } finally {
    o && (l(!0), s(n))
  }
}
export {
  w as h
};
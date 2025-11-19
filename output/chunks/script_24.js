import {
  U as y,
  j as u,
  au as b,
  h as n,
  X as g,
  a3 as c,
  ak as i,
  a1 as l,
  W as s,
  a2 as p
} from "./DKMpf0HC.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "399bc8c4e783d71b221f731ebe74f832c15927f3"
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
    a = p;
    for (var d = g(document.head); d !== null && (d.nodeType !== c || d.data !== e);) d = i(d);
    if (d === null) l(!1);
    else {
      var r = i(d);
      d.remove(), s(r)
    }
  }
  n || (f = document.head.appendChild(y()));
  try {
    u(() => t(f), b)
  } finally {
    o && (l(!0), s(a))
  }
}
export {
  w as h
};
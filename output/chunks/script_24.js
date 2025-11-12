import {
  T as y,
  j as u,
  au as b,
  h as n,
  W as g,
  a2 as p,
  aj as i,
  a0 as l,
  V as s,
  a1 as _
} from "./BYknGsrl.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "deff0df3054d4e17d810032708dfa15d941dfa1b"
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

function E(e, t) {
  let a = null,
    o = n;
  var f;
  if (n) {
    a = _;
    for (var d = g(document.head); d !== null && (d.nodeType !== p || d.data !== e);) d = i(d);
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
  E as h
};
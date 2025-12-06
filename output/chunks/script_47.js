import {
  G as t,
  m as i,
  k as b,
  l as s,
  B as r
} from "./BJ2w7gDG.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "3e986a58fcb30a2298358520e06507a40603fbb7"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "bc956d75-f05c-4b81-9beb-3f898c1c507c", e._sentryDebugIdIdentifier = "sentry-dbid-bc956d75-f05c-4b81-9beb-3f898c1c507c")
  })()
} catch {}

function c(e, n, a) {
  b && s();
  var d = new r(e),
    o = !t();
  i(() => {
    var f = n();
    o && f !== null && typeof f == "object" && (f = {}), d.ensure(f, a)
  })
}
export {
  c as k
};
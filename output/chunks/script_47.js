import {
  G as t,
  m as b,
  k as i,
  l as s,
  B as r
} from "./BnnwGbo9.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e76e01713b9f24724b47470026b2b700ac9e05af"
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

function c(e, n, d) {
  i && s();
  var a = new r(e),
    o = !t();
  b(() => {
    var f = n();
    o && f !== null && typeof f == "object" && (f = {}), a.ensure(f, d)
  })
}
export {
  c as k
};
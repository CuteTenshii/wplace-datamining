import {
  G as t,
  m as i,
  k as s,
  l as r,
  B as b
} from "./CyCWtGop.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ee257193e76342130137aa6a9befade083ce2002"
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
  s && r();
  var f = new b(e),
    o = !t();
  i(() => {
    var a = n();
    o && a !== null && typeof a == "object" && (a = {}), f.ensure(a, d)
  })
}
export {
  c as k
};
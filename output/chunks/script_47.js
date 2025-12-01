import {
  G as t,
  m as i,
  k as s,
  l as b,
  B as r
} from "./Bcwk37oG.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1d9793ba3d4a0f1311910be29f6f7ac9e32576a2"
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
  s && b();
  var a = new r(e),
    o = !t();
  i(() => {
    var f = n();
    o && f !== null && typeof f == "object" && (f = {}), a.ensure(f, d)
  })
}
export {
  c as k
};
import {
  G as t,
  m as i,
  k as b,
  l as s,
  B as r
} from "./Ds8uQKUX.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "72535b980ce58632366910417763e3bb1f48d885"
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

function c(e, n, f) {
  b && s();
  var o = new r(e),
    a = !t();
  i(() => {
    var d = n();
    a && d !== null && typeof d == "object" && (d = {}), o.ensure(d, f)
  })
}
export {
  c as k
};
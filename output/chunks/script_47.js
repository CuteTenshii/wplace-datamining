import {
  G as t,
  m as i,
  k as s,
  l as r,
  B as l
} from "./I4j7of_K.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5f26df466977fd01d18eb1a4a8743e0ce83f1b4f"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c9647df8-bd9c-4145-bf02-da66d8c3eb53", e._sentryDebugIdIdentifier = "sentry-dbid-c9647df8-bd9c-4145-bf02-da66d8c3eb53")
  })()
} catch {}

function y(e, n, f) {
  s && r();
  var a = new l(e),
    o = !t();
  i(() => {
    var d = n();
    o && d !== null && typeof d == "object" && (d = {}), a.ensure(d, f)
  })
}
export {
  y as k
};
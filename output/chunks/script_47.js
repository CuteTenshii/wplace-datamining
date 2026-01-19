import {
  v as t,
  m as i,
  k as s,
  l as r,
  B as l
} from "./DcuED2r1.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "358b627090e665fa84c80454e90310d86dcaf84d"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c372d1f7-4204-46ee-8fe8-5990fa35114d", e._sentryDebugIdIdentifier = "sentry-dbid-c372d1f7-4204-46ee-8fe8-5990fa35114d")
  })()
} catch {}

function u(e, n, f) {
  s && r();
  var a = new l(e),
    o = !t();
  i(() => {
    var d = n();
    o && d !== null && typeof d == "object" && (d = {}), a.ensure(d, f)
  })
}
export {
  u as k
};
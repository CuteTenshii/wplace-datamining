import {
  C as n,
  Q as a,
  x as t,
  R as b,
  S as y
} from "./8X9bXL-a.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "0e0f1d9d12a0c5d9ef5f263afa770640948e8e71"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      i = new f.Error().stack;
    i && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[i] = "1fb37f78-6f5a-472e-98c1-873a0925b1f3", f._sentryDebugIdIdentifier = "sentry-dbid-1fb37f78-6f5a-472e-98c1-873a0925b1f3")
  })()
} catch {}

function r(f, i) {
  return f === i || (f == null ? void 0 : f[y]) === i
}

function g(f = {}, i, d, l) {
  return n(() => {
    var s, e;
    return a(() => {
      s = e, e = [], t(() => {
        f !== d(...e) && (i(f, ...e), s && r(d(...s), f) && i(null, ...s))
      })
    }), () => {
      b(() => {
        e && r(d(...e), f) && i(null, ...e)
      })
    }
  }), f
}
export {
  g as b
};
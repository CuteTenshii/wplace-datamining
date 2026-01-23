import {
  C as n,
  Q as t,
  x as a,
  R as b,
  S as y
} from "./CYj7RoHR.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "57f41670f2805f713b0da8f3636738eb734a70e1"
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

function o(f = {}, i, d, l) {
  return n(() => {
    var e, s;
    return t(() => {
      e = s, s = [], a(() => {
        f !== d(...s) && (i(f, ...s), e && r(d(...e), f) && i(null, ...e))
      })
    }), () => {
      b(() => {
        s && r(d(...s), f) && i(null, ...s)
      })
    }
  }), f
}
export {
  o as b
};
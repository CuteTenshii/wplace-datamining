import {
  X as n,
  R as t,
  L as a,
  W as y,
  Y as b
} from "./CBd9NCKG.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "251f3ef5bc14649f46f335286261e6c964681eae"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new f.Error().stack;
    e && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[e] = "dbfe9422-1784-4a09-90ed-4f4714eac9e8", f._sentryDebugIdIdentifier = "sentry-dbid-dbfe9422-1784-4a09-90ed-4f4714eac9e8")
  })()
} catch {}

function r(f, e) {
  return f === e || (f == null ? void 0 : f[b]) === e
}

function g(f = {}, e, d, l) {
  return n(() => {
    var s, i;
    return t(() => {
      s = i, i = [], a(() => {
        f !== d(...i) && (e(f, ...i), s && r(d(...s), f) && e(null, ...s))
      })
    }), () => {
      y(() => {
        i && r(d(...i), f) && e(null, ...i)
      })
    }
  }), f
}
export {
  g as b
};
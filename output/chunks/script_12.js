import {
  X as n,
  R as t,
  L as a,
  W as b,
  Y as y
} from "./CX26CINy.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "55773afae0bc9cd8753b3f88c13d41d45dcd2072"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new f.Error().stack;
    d && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[d] = "dbfe9422-1784-4a09-90ed-4f4714eac9e8", f._sentryDebugIdIdentifier = "sentry-dbid-dbfe9422-1784-4a09-90ed-4f4714eac9e8")
  })()
} catch {}

function r(f, d) {
  return f === d || (f == null ? void 0 : f[y]) === d
}

function g(f = {}, d, s, c) {
  return n(() => {
    var i, e;
    return t(() => {
      i = e, e = [], a(() => {
        f !== s(...e) && (d(f, ...e), i && r(s(...i), f) && d(null, ...i))
      })
    }), () => {
      b(() => {
        e && r(s(...e), f) && d(null, ...e)
      })
    }
  }), f
}
export {
  g as b
};
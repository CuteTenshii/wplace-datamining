import {
  T as r,
  O as n,
  H as t,
  S as b,
  U as y
} from "./Bry4mTdq.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "1464f4d4be7ab2460627d08ee13d2df2a352bcb2"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new f.Error().stack;
    d && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[d] = "00274d2a-2c42-4d50-ba96-a40ae11555e3", f._sentryDebugIdIdentifier = "sentry-dbid-00274d2a-2c42-4d50-ba96-a40ae11555e3")
  })()
} catch {}

function a(f, d) {
  return f === d || (f == null ? void 0 : f[y]) === d
}

function g(f = {}, d, s, l) {
  return r(() => {
    var e, i;
    return n(() => {
      e = i, i = [], t(() => {
        f !== s(...i) && (d(f, ...i), e && a(s(...e), f) && d(null, ...e))
      })
    }), () => {
      b(() => {
        i && a(s(...i), f) && d(null, ...i)
      })
    }
  }), f
}
export {
  g as b
};
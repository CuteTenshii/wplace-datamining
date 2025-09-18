import {
  M as r,
  H as n,
  z as t,
  L as b,
  S as c
} from "./tW_JiZAP.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "64a827f251b09c64d2dcef6cfc561f774a8ba67c"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      i = new f.Error().stack;
    i && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[i] = "0a83b900-5c2a-4019-a40f-97673dfb9566", f._sentryDebugIdIdentifier = "sentry-dbid-0a83b900-5c2a-4019-a40f-97673dfb9566")
  })()
} catch {}

function e(f, i) {
  return f === i || (f == null ? void 0 : f[c]) === i
}

function g(f = {}, i, a, y) {
  return r(() => {
    var d, s;
    return n(() => {
      d = s, s = [], t(() => {
        f !== a(...s) && (i(f, ...s), d && e(a(...d), f) && i(null, ...d))
      })
    }), () => {
      b(() => {
        s && e(a(...s), f) && i(null, ...s)
      })
    }
  }), f
}
export {
  g as b
};
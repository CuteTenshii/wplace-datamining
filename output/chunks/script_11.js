import {
  M as r,
  H as n,
  z as t,
  L as b,
  S as y
} from "./CkE8vTi-.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "224624400a67b064cf33057a07336c317101aecf"
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
  return f === i || (f == null ? void 0 : f[y]) === i
}

function g(f = {}, i, a, c) {
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
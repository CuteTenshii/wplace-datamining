import {
  M as r,
  H as n,
  z as t,
  L as b,
  S as c
} from "./JMoIuhVR.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "4097d37663b9a72f9231b790868cce52a6a81192"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      i = new f.Error().stack;
    i && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[i] = "bdc26971-940c-4cc3-ab4a-b154b55c8a52", f._sentryDebugIdIdentifier = "sentry-dbid-bdc26971-940c-4cc3-ab4a-b154b55c8a52")
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
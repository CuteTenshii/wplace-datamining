import {
  X as r,
  R as n,
  L as t,
  W as b,
  Y as y
} from "./CoAY_RIV.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "a684b76bda26a353b92d069a016aee15159248aa"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      i = new f.Error().stack;
    i && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[i] = "3332b1aa-64c5-4482-9671-3e9278d9a7de", f._sentryDebugIdIdentifier = "sentry-dbid-3332b1aa-64c5-4482-9671-3e9278d9a7de")
  })()
} catch {}

function s(f, i) {
  return f === i || (f == null ? void 0 : f[y]) === i
}

function o(f = {}, i, a, l) {
  return r(() => {
    var e, d;
    return n(() => {
      e = d, d = [], t(() => {
        f !== a(...d) && (i(f, ...d), e && s(a(...e), f) && i(null, ...e))
      })
    }), () => {
      b(() => {
        d && s(a(...d), f) && i(null, ...d)
      })
    }
  }), f
}
export {
  o as b
};
import {
  M as r,
  H as n,
  z as t,
  L as b,
  S as y
} from "./29bc7E1V.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "08e863ad0717da163bc2a8f4fbd2a2e653d7b37d"
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

function g(f = {}, i, a, l) {
  return r(() => {
    var s, d;
    return n(() => {
      s = d, d = [], t(() => {
        f !== a(...d) && (i(f, ...d), s && e(a(...s), f) && i(null, ...s))
      })
    }), () => {
      b(() => {
        d && e(a(...d), f) && i(null, ...d)
      })
    }
  }), f
}
export {
  g as b
};
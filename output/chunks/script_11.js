import {
  M as r,
  H as n,
  z as t,
  L as b,
  S as c
} from "./7UbPguYr.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "2a2853da5197f1e8876a5229454a4e7ee1aa190e"
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

function d(f, i) {
  return f === i || (f == null ? void 0 : f[c]) === i
}

function g(f = {}, i, a, y) {
  return r(() => {
    var s, e;
    return n(() => {
      s = e, e = [], t(() => {
        f !== a(...e) && (i(f, ...e), s && d(a(...s), f) && i(null, ...s))
      })
    }), () => {
      b(() => {
        e && d(a(...e), f) && i(null, ...e)
      })
    }
  }), f
}
export {
  g as b
};
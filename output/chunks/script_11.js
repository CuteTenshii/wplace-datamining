import {
  M as r,
  H as n,
  z as t,
  L as c,
  S as b
} from "./NO1IpA65.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "a08aaa4cc3329c16d583f3f519629bce2e5a6410"
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
  return f === i || (f == null ? void 0 : f[b]) === i
}

function g(f = {}, i, d, y) {
  return r(() => {
    var a, s;
    return n(() => {
      a = s, s = [], t(() => {
        f !== d(...s) && (i(f, ...s), a && e(d(...a), f) && i(null, ...a))
      })
    }), () => {
      c(() => {
        s && e(d(...s), f) && i(null, ...s)
      })
    }
  }), f
}
export {
  g as b
};
import {
  M as r,
  H as n,
  z as t,
  L as a,
  S as y
} from "./BhjnkBaE.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "ab54e7d2bb082741522faef467264167f3245873"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      i = new f.Error().stack;
    i && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[i] = "7d1c19be-3de6-41f6-990a-b1fbb8a6b4db", f._sentryDebugIdIdentifier = "sentry-dbid-7d1c19be-3de6-41f6-990a-b1fbb8a6b4db")
  })()
} catch {}

function b(f, i) {
  return f === i || (f == null ? void 0 : f[y]) === i
}

function o(f = {}, i, s, l) {
  return r(() => {
    var e, d;
    return n(() => {
      e = d, d = [], t(() => {
        f !== s(...d) && (i(f, ...d), e && b(s(...e), f) && i(null, ...e))
      })
    }), () => {
      a(() => {
        d && b(s(...d), f) && i(null, ...d)
      })
    }
  }), f
}
export {
  o as b
};
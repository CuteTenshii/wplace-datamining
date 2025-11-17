import {
  e as n,
  N as t,
  F as a,
  R as b,
  S as y
} from "./DCl-iuFc.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "17a00565e2756c20c4608d1274a59935337b90b7"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      i = new f.Error().stack;
    i && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[i] = "87249c32-a1b1-43c3-84bb-485be2695d75", f._sentryDebugIdIdentifier = "sentry-dbid-87249c32-a1b1-43c3-84bb-485be2695d75")
  })()
} catch {}

function r(f, i) {
  return f === i || (f == null ? void 0 : f[y]) === i
}

function g(f = {}, i, d, c) {
  return n(() => {
    var e, s;
    return t(() => {
      e = s, s = [], a(() => {
        f !== d(...s) && (i(f, ...s), e && r(d(...e), f) && i(null, ...e))
      })
    }), () => {
      b(() => {
        s && r(d(...s), f) && i(null, ...s)
      })
    }
  }), f
}
export {
  g as b
};
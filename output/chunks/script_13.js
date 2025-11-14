import {
  e as n,
  N as t,
  F as a,
  R as b,
  S as c
} from "./Dk_dXCV0.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "02a79a68c9311df3cb3141310cf8d650e49567ec"
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
  return f === i || (f == null ? void 0 : f[c]) === i
}

function g(f = {}, i, d, y) {
  return n(() => {
    var s, e;
    return t(() => {
      s = e, e = [], a(() => {
        f !== d(...e) && (i(f, ...e), s && r(d(...s), f) && i(null, ...s))
      })
    }), () => {
      b(() => {
        e && r(d(...e), f) && i(null, ...e)
      })
    }
  }), f
}
export {
  g as b
};
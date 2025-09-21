import {
  M as r,
  H as n,
  z as t,
  L as b,
  S as y
} from "./DHJsk1zj.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "825bee11b3c7e8e1af0343e9a8e19271ca51e2c2"
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

function a(f, i) {
  return f === i || (f == null ? void 0 : f[y]) === i
}

function g(f = {}, i, d, c) {
  return r(() => {
    var s, e;
    return n(() => {
      s = e, e = [], t(() => {
        f !== d(...e) && (i(f, ...e), s && a(d(...s), f) && i(null, ...s))
      })
    }), () => {
      b(() => {
        e && a(d(...e), f) && i(null, ...e)
      })
    }
  }), f
}
export {
  g as b
};
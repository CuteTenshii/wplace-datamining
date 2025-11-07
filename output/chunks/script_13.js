import {
  X as r,
  R as n,
  L as t,
  W as b,
  Y as y
} from "./BiT_a_NB.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "219ea57e7890a3172dffa4aa889d8e60b8db06d9"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new f.Error().stack;
    d && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[d] = "3332b1aa-64c5-4482-9671-3e9278d9a7de", f._sentryDebugIdIdentifier = "sentry-dbid-3332b1aa-64c5-4482-9671-3e9278d9a7de")
  })()
} catch {}

function a(f, d) {
  return f === d || (f == null ? void 0 : f[y]) === d
}

function o(f = {}, d, s, l) {
  return r(() => {
    var e, i;
    return n(() => {
      e = i, i = [], t(() => {
        f !== s(...i) && (d(f, ...i), e && a(s(...e), f) && d(null, ...e))
      })
    }), () => {
      b(() => {
        i && a(s(...i), f) && d(null, ...i)
      })
    }
  }), f
}
export {
  o as b
};
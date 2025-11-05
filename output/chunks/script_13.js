import {
  X as n,
  R as a,
  L as t,
  W as y,
  Y as b
} from "./LdQOE0HW.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "34cc512744102387f2427379e854c2ea08067337"
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

function r(f, i) {
  return f === i || (f == null ? void 0 : f[b]) === i
}

function g(f = {}, i, d, c) {
  return n(() => {
    var s, e;
    return a(() => {
      s = e, e = [], t(() => {
        f !== d(...e) && (i(f, ...e), s && r(d(...s), f) && i(null, ...s))
      })
    }), () => {
      y(() => {
        e && r(d(...e), f) && i(null, ...e)
      })
    }
  }), f
}
export {
  g as b
};
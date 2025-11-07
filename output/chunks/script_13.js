import {
  X as r,
  R as n,
  L as t,
  W as b,
  Y as y
} from "./t6Scptgh.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "30982d7718bbc4a833ef39834f2cfbbfa1f546ae"
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

function a(f, i) {
  return f === i || (f == null ? void 0 : f[y]) === i
}

function g(f = {}, i, s, l) {
  return r(() => {
    var d, e;
    return n(() => {
      d = e, e = [], t(() => {
        f !== s(...e) && (i(f, ...e), d && a(s(...d), f) && i(null, ...d))
      })
    }), () => {
      b(() => {
        e && a(s(...e), f) && i(null, ...e)
      })
    }
  }), f
}
export {
  g as b
};
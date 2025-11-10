import {
  X as r,
  R as n,
  L as t,
  W as y,
  Y as b
} from "./CgVbUwWD.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "5699240c8856da05e48f188a8f5094ebed5a4fea"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new f.Error().stack;
    e && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[e] = "3332b1aa-64c5-4482-9671-3e9278d9a7de", f._sentryDebugIdIdentifier = "sentry-dbid-3332b1aa-64c5-4482-9671-3e9278d9a7de")
  })()
} catch {}

function a(f, e) {
  return f === e || (f == null ? void 0 : f[b]) === e
}

function g(f = {}, e, s, l) {
  return r(() => {
    var d, i;
    return n(() => {
      d = i, i = [], t(() => {
        f !== s(...i) && (e(f, ...i), d && a(s(...d), f) && e(null, ...d))
      })
    }), () => {
      y(() => {
        i && a(s(...i), f) && e(null, ...i)
      })
    }
  }), f
}
export {
  g as b
};
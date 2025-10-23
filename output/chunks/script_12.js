import {
  X as a,
  R as n,
  L as t,
  W as b,
  Y as y
} from "./D28PF2-5.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "a8e86ea7c5dac5456cbf3520a3090956fd737b8f"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new f.Error().stack;
    e && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[e] = "dbfe9422-1784-4a09-90ed-4f4714eac9e8", f._sentryDebugIdIdentifier = "sentry-dbid-dbfe9422-1784-4a09-90ed-4f4714eac9e8")
  })()
} catch {}

function r(f, e) {
  return f === e || (f == null ? void 0 : f[y]) === e
}

function g(f = {}, e, s, c) {
  return a(() => {
    var d, i;
    return n(() => {
      d = i, i = [], t(() => {
        f !== s(...i) && (e(f, ...i), d && r(s(...d), f) && e(null, ...d))
      })
    }), () => {
      b(() => {
        i && r(s(...i), f) && e(null, ...i)
      })
    }
  }), f
}
export {
  g as b
};
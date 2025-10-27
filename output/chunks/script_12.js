import {
  X as n,
  R as t,
  L as a,
  W as b,
  Y as y
} from "./CjHooIZx.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "c5b6f4008280188b6965f20aa04502030e013ff2"
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

function g(f = {}, e, d, l) {
  return n(() => {
    var s, i;
    return t(() => {
      s = i, i = [], a(() => {
        f !== d(...i) && (e(f, ...i), s && r(d(...s), f) && e(null, ...s))
      })
    }), () => {
      b(() => {
        i && r(d(...i), f) && e(null, ...i)
      })
    }
  }), f
}
export {
  g as b
};
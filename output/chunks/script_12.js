import {
  X as n,
  R as t,
  L as a,
  W as y,
  Y as b
} from "./BDq-HR17.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "0f5526c28af3fe231e905447f161f05590c76727"
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
  return f === e || (f == null ? void 0 : f[b]) === e
}

function g(f = {}, e, d, l) {
  return n(() => {
    var s, i;
    return t(() => {
      s = i, i = [], a(() => {
        f !== d(...i) && (e(f, ...i), s && r(d(...s), f) && e(null, ...s))
      })
    }), () => {
      y(() => {
        i && r(d(...i), f) && e(null, ...i)
      })
    }
  }), f
}
export {
  g as b
};
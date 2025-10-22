import {
  X as n,
  R as a,
  L as t,
  W as y,
  Y as b
} from "./CYjwBiB9.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "216ad21ec8568455da3c6d18d6f039f12382ac60"
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

function g(f = {}, e, s, c) {
  return n(() => {
    var i, d;
    return a(() => {
      i = d, d = [], t(() => {
        f !== s(...d) && (e(f, ...d), i && r(s(...i), f) && e(null, ...i))
      })
    }), () => {
      y(() => {
        d && r(s(...d), f) && e(null, ...d)
      })
    }
  }), f
}
export {
  g as b
};
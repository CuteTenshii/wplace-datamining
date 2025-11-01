import {
  X as n,
  R as t,
  L as a,
  W as b,
  Y as y
} from "./NLGz-70w.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "41ce59a02f0ef4fd076afbbc4021177761c67304"
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
  return n(() => {
    var d, i;
    return t(() => {
      d = i, i = [], a(() => {
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
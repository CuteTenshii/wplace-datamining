import {
  M as n,
  H as t,
  z as a,
  L as b,
  S as y
} from "./TyfPWVbD.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "6fe71e2aef866a931e2568b1d6f6762fddc1f62d"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new f.Error().stack;
    e && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[e] = "ffab2ed1-a75e-4289-9303-46e6dc6bb67c", f._sentryDebugIdIdentifier = "sentry-dbid-ffab2ed1-a75e-4289-9303-46e6dc6bb67c")
  })()
} catch {}

function r(f, e) {
  return f === e || (f == null ? void 0 : f[y]) === e
}

function g(f = {}, e, s, c) {
  return n(() => {
    var i, d;
    return t(() => {
      i = d, d = [], a(() => {
        f !== s(...d) && (e(f, ...d), i && r(s(...i), f) && e(null, ...i))
      })
    }), () => {
      b(() => {
        d && r(s(...d), f) && e(null, ...d)
      })
    }
  }), f
}
export {
  g as b
};
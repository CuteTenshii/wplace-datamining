import {
  F as n,
  y as a,
  x as t,
  D as b,
  S as c
} from "./C0b57ARY.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "e61b7999f3615b75da925cd12f2c77d312c3e072"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new f.Error().stack;
    e && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[e] = "fe9de44d-f84e-40ca-b571-e5c3cab41da7", f._sentryDebugIdIdentifier = "sentry-dbid-fe9de44d-f84e-40ca-b571-e5c3cab41da7")
  })()
} catch {}

function r(f, e) {
  return f === e || (f == null ? void 0 : f[c]) === e
}

function g(f = {}, e, s, y) {
  return n(() => {
    var i, d;
    return a(() => {
      i = d, d = [], t(() => {
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
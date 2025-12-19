import {
  F as n,
  y as a,
  x as t,
  D as b,
  S as c
} from "./BdPk12sv.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "19c3537dbd7586a0b5506248246feedd8f873fcf"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new f.Error().stack;
    d && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[d] = "fe9de44d-f84e-40ca-b571-e5c3cab41da7", f._sentryDebugIdIdentifier = "sentry-dbid-fe9de44d-f84e-40ca-b571-e5c3cab41da7")
  })()
} catch {}

function r(f, d) {
  return f === d || (f == null ? void 0 : f[c]) === d
}

function g(f = {}, d, s, y) {
  return n(() => {
    var i, e;
    return a(() => {
      i = e, e = [], t(() => {
        f !== s(...e) && (d(f, ...e), i && r(s(...i), f) && d(null, ...i))
      })
    }), () => {
      b(() => {
        e && r(s(...e), f) && d(null, ...e)
      })
    }
  }), f
}
export {
  g as b
};
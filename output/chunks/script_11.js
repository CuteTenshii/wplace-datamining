import {
  F as r,
  y as n,
  x as t,
  D as b,
  S as c
} from "./Doh7472n.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "38af963429a32dfcd0b04890bc625a0716dd4620"
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

function a(f, d) {
  return f === d || (f == null ? void 0 : f[c]) === d
}

function g(f = {}, d, s, y) {
  return r(() => {
    var i, e;
    return n(() => {
      i = e, e = [], t(() => {
        f !== s(...e) && (d(f, ...e), i && a(s(...i), f) && d(null, ...i))
      })
    }), () => {
      b(() => {
        e && a(s(...e), f) && d(null, ...e)
      })
    }
  }), f
}
export {
  g as b
};
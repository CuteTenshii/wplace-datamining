import {
  F as r,
  y as n,
  x as t,
  D as b,
  S as c
} from "./CRdf5mx2.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "65f7af1ca1d715ef20a4159507e8f6b55052c932"
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

function a(f, e) {
  return f === e || (f == null ? void 0 : f[c]) === e
}

function g(f = {}, e, s, y) {
  return r(() => {
    var d, i;
    return n(() => {
      d = i, i = [], t(() => {
        f !== s(...i) && (e(f, ...i), d && a(s(...d), f) && e(null, ...d))
      })
    }), () => {
      b(() => {
        i && a(s(...i), f) && e(null, ...i)
      })
    }
  }), f
}
export {
  g as b
};
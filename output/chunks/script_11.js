import {
  F as r,
  y as n,
  x as t,
  D as b,
  S as c
} from "./D6bzUFXP.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "c74d55667ae34a0f1e0fb08ba8f2c36320dfa773"
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
    var i, d;
    return n(() => {
      i = d, d = [], t(() => {
        f !== s(...d) && (e(f, ...d), i && a(s(...i), f) && e(null, ...i))
      })
    }), () => {
      b(() => {
        d && a(s(...d), f) && e(null, ...d)
      })
    }
  }), f
}
export {
  g as b
};
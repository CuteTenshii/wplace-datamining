import {
  F as n,
  y as t,
  x as b,
  D as a,
  S as c
} from "./ZybFQ5qV.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "1dc76760b5957a0899b63650345eafb40d771701"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      i = new f.Error().stack;
    i && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[i] = "c50fdf4e-0dc9-41cc-b2e0-71bb62ef3727", f._sentryDebugIdIdentifier = "sentry-dbid-c50fdf4e-0dc9-41cc-b2e0-71bb62ef3727")
  })()
} catch {}

function r(f, i) {
  return f === i || (f == null ? void 0 : f[c]) === i
}

function g(f = {}, i, s, y) {
  return n(() => {
    var d, e;
    return t(() => {
      d = e, e = [], b(() => {
        f !== s(...e) && (i(f, ...e), d && r(s(...d), f) && i(null, ...d))
      })
    }), () => {
      a(() => {
        e && r(s(...e), f) && i(null, ...e)
      })
    }
  }), f
}
export {
  g as b
};
import {
  F as n,
  y as t,
  x as b,
  D as c,
  S as a
} from "./BNGAEk_0.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "3a8d7c66397947b49ed2868fcbd9febd8dcf5eb4"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new f.Error().stack;
    d && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[d] = "c50fdf4e-0dc9-41cc-b2e0-71bb62ef3727", f._sentryDebugIdIdentifier = "sentry-dbid-c50fdf4e-0dc9-41cc-b2e0-71bb62ef3727")
  })()
} catch {}

function r(f, d) {
  return f === d || (f == null ? void 0 : f[a]) === d
}

function g(f = {}, d, s, y) {
  return n(() => {
    var i, e;
    return t(() => {
      i = e, e = [], b(() => {
        f !== s(...e) && (d(f, ...e), i && r(s(...i), f) && d(null, ...i))
      })
    }), () => {
      c(() => {
        e && r(s(...e), f) && d(null, ...e)
      })
    }
  }), f
}
export {
  g as b
};
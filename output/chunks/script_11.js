import {
  F as n,
  y as b,
  x as t,
  D as a,
  S as c
} from "./DHzwV35n.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "dfb4bddd9fb2b4748eaf19466331b7b547c362b7"
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
  return f === d || (f == null ? void 0 : f[c]) === d
}

function g(f = {}, d, s, y) {
  return n(() => {
    var e, i;
    return b(() => {
      e = i, i = [], t(() => {
        f !== s(...i) && (d(f, ...i), e && r(s(...e), f) && d(null, ...e))
      })
    }), () => {
      a(() => {
        i && r(s(...i), f) && d(null, ...i)
      })
    }
  }), f
}
export {
  g as b
};
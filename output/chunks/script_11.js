import {
  F as n,
  y as t,
  x as a,
  D as c,
  S as b
} from "./KxHJurs6.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "d750dbde4bb0382aeca7acd55c05ffdf7a87fc2c"
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
  return f === d || (f == null ? void 0 : f[b]) === d
}

function g(f = {}, d, s, y) {
  return n(() => {
    var i, e;
    return t(() => {
      i = e, e = [], a(() => {
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
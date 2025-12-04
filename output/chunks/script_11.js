import {
  F as n,
  y as a,
  x as t,
  D as b,
  S as c
} from "./BW4WXvX9.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "ada152f6c93ea91d04a55442a56d263a5f091eaf"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new f.Error().stack;
    e && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[e] = "c50fdf4e-0dc9-41cc-b2e0-71bb62ef3727", f._sentryDebugIdIdentifier = "sentry-dbid-c50fdf4e-0dc9-41cc-b2e0-71bb62ef3727")
  })()
} catch {}

function r(f, e) {
  return f === e || (f == null ? void 0 : f[c]) === e
}

function g(f = {}, e, s, y) {
  return n(() => {
    var d, i;
    return a(() => {
      d = i, i = [], t(() => {
        f !== s(...i) && (e(f, ...i), d && r(s(...d), f) && e(null, ...d))
      })
    }), () => {
      b(() => {
        i && r(s(...i), f) && e(null, ...i)
      })
    }
  }), f
}
export {
  g as b
};
import {
  ak as a,
  O as n,
  H as t,
  S as c,
  al as y
} from "./DUWZzbWe.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "b1e181cfc86240e13a14599ec441e9d2cad6cdd7"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new f.Error().stack;
    e && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[e] = "016e7b7f-9c1a-4674-99c2-ef61ce08451a", f._sentryDebugIdIdentifier = "sentry-dbid-016e7b7f-9c1a-4674-99c2-ef61ce08451a")
  })()
} catch {}

function r(f, e) {
  return f === e || (f == null ? void 0 : f[y]) === e
}

function g(f = {}, e, d, b) {
  return a(() => {
    var s, i;
    return n(() => {
      s = i, i = [], t(() => {
        f !== d(...i) && (e(f, ...i), s && r(d(...s), f) && e(null, ...s))
      })
    }), () => {
      c(() => {
        i && r(d(...i), f) && e(null, ...i)
      })
    }
  }), f
}
export {
  g as b
};
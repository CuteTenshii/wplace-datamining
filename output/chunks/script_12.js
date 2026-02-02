import {
  B as n,
  R as t,
  y as a,
  S as b,
  T as y
} from "./CJKTONAG.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "aa4c5126665948c178117465fb480b1b818fb90b"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new f.Error().stack;
    e && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[e] = "8a5e6863-9f09-4d72-82d0-1eefe694b958", f._sentryDebugIdIdentifier = "sentry-dbid-8a5e6863-9f09-4d72-82d0-1eefe694b958")
  })()
} catch {}

function r(f, e) {
  return f === e || (f == null ? void 0 : f[y]) === e
}

function o(f = {}, e, d, l) {
  return n(() => {
    var s, i;
    return t(() => {
      s = i, i = [], a(() => {
        f !== d(...i) && (e(f, ...i), s && r(d(...s), f) && e(null, ...s))
      })
    }), () => {
      b(() => {
        i && r(d(...i), f) && e(null, ...i)
      })
    }
  }), f
}
export {
  o as b
};
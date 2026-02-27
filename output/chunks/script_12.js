import {
  B as n,
  R as t,
  y as a,
  S as y,
  T as b
} from "./BX08WKHH.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "7643ba5d2918c38f2d3e1507dfee87cd2c0bfa50"
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
  return f === e || (f == null ? void 0 : f[b]) === e
}

function g(f = {}, e, s, l) {
  return n(() => {
    var i, d;
    return t(() => {
      i = d, d = [], a(() => {
        f !== s(...d) && (e(f, ...d), i && r(s(...i), f) && e(null, ...i))
      })
    }), () => {
      y(() => {
        d && r(s(...d), f) && e(null, ...d)
      })
    }
  }), f
}
export {
  g as b
};
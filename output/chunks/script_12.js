import {
  B as n,
  R as t,
  y as a,
  S as y,
  T as b
} from "./DDHVoadr.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "af4d0c48dcaddf93c9bc56ee907626a523833bd3"
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
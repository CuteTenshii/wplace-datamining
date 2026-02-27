import {
  B as n,
  R as t,
  y as a,
  S as y,
  T as b
} from "./C_uavZQJ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "448b4ed83dade10ecee1f50ce15a9606b232dc90"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "8a5e6863-9f09-4d72-82d0-1eefe694b958", e._sentryDebugIdIdentifier = "sentry-dbid-8a5e6863-9f09-4d72-82d0-1eefe694b958")
  })()
} catch {}

function r(e, f) {
  return e === f || (e == null ? void 0 : e[b]) === f
}

function g(e = {}, f, s, l) {
  return n(() => {
    var i, d;
    return t(() => {
      i = d, d = [], a(() => {
        e !== s(...d) && (f(e, ...d), i && r(s(...i), e) && f(null, ...i))
      })
    }), () => {
      y(() => {
        d && r(s(...d), e) && f(null, ...d)
      })
    }
  }), e
}
export {
  g as b
};
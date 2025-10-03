import {
  M as a,
  H as n,
  z as t,
  L as b,
  S as y
} from "./BR5XpF1A.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "123067dbd61a163d94930a4efc762fdca932af1b"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new f.Error().stack;
    d && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[d] = "ffab2ed1-a75e-4289-9303-46e6dc6bb67c", f._sentryDebugIdIdentifier = "sentry-dbid-ffab2ed1-a75e-4289-9303-46e6dc6bb67c")
  })()
} catch {}

function r(f, d) {
  return f === d || (f == null ? void 0 : f[y]) === d
}

function g(f = {}, d, s, c) {
  return a(() => {
    var e, i;
    return n(() => {
      e = i, i = [], t(() => {
        f !== s(...i) && (d(f, ...i), e && r(s(...e), f) && d(null, ...e))
      })
    }), () => {
      b(() => {
        i && r(s(...i), f) && d(null, ...i)
      })
    }
  }), f
}
export {
  g as b
};
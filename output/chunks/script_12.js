import {
  M as a,
  H as n,
  z as t,
  L as b,
  S as c
} from "./W5rmRnnG.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "ff343a05e6db78c3f87c013111bf250a2c453aa7"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      i = new f.Error().stack;
    i && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[i] = "ffab2ed1-a75e-4289-9303-46e6dc6bb67c", f._sentryDebugIdIdentifier = "sentry-dbid-ffab2ed1-a75e-4289-9303-46e6dc6bb67c")
  })()
} catch {}

function r(f, i) {
  return f === i || (f == null ? void 0 : f[c]) === i
}

function g(f = {}, i, s, y) {
  return a(() => {
    var d, e;
    return n(() => {
      d = e, e = [], t(() => {
        f !== s(...e) && (i(f, ...e), d && r(s(...d), f) && i(null, ...d))
      })
    }), () => {
      b(() => {
        e && r(s(...e), f) && i(null, ...e)
      })
    }
  }), f
}
export {
  g as b
};
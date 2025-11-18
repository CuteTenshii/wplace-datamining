import {
  e as n,
  N as t,
  F as a,
  R as y,
  S as c
} from "./Dff7lKDG.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "5e7c9fd5f328559866810f75338456562566478c"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      i = new f.Error().stack;
    i && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[i] = "3d51bfd9-7302-40c5-8502-77ef53ae12c4", f._sentryDebugIdIdentifier = "sentry-dbid-3d51bfd9-7302-40c5-8502-77ef53ae12c4")
  })()
} catch {}

function r(f, i) {
  return f === i || (f == null ? void 0 : f[c]) === i
}

function g(f = {}, i, s, b) {
  return n(() => {
    var d, e;
    return t(() => {
      d = e, e = [], a(() => {
        f !== s(...e) && (i(f, ...e), d && r(s(...d), f) && i(null, ...d))
      })
    }), () => {
      y(() => {
        e && r(s(...e), f) && i(null, ...e)
      })
    }
  }), f
}
export {
  g as b
};
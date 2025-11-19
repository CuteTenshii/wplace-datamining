import {
  e as n,
  N as t,
  F as a,
  R as b,
  S as y
} from "./C-9Y3fPa.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "fe5b293b0b58eb9d702fd066546411c50747d7aa"
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
  return f === i || (f == null ? void 0 : f[y]) === i
}

function g(f = {}, i, s, c) {
  return n(() => {
    var e, d;
    return t(() => {
      e = d, d = [], a(() => {
        f !== s(...d) && (i(f, ...d), e && r(s(...e), f) && i(null, ...e))
      })
    }), () => {
      b(() => {
        d && r(s(...d), f) && i(null, ...d)
      })
    }
  }), f
}
export {
  g as b
};
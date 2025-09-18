import {
  M as n,
  H as a,
  z as t,
  L as b,
  S as y
} from "./DUey02Nl.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "3c9334ae758047b148030b2b1b11409cfc37ff31"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      i = new f.Error().stack;
    i && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[i] = "0a83b900-5c2a-4019-a40f-97673dfb9566", f._sentryDebugIdIdentifier = "sentry-dbid-0a83b900-5c2a-4019-a40f-97673dfb9566")
  })()
} catch {}

function r(f, i) {
  return f === i || (f == null ? void 0 : f[y]) === i
}

function g(f = {}, i, e, c) {
  return n(() => {
    var d, s;
    return a(() => {
      d = s, s = [], t(() => {
        f !== e(...s) && (i(f, ...s), d && r(e(...d), f) && i(null, ...d))
      })
    }), () => {
      b(() => {
        s && r(e(...s), f) && i(null, ...s)
      })
    }
  }), f
}
export {
  g as b
};
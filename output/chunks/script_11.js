import {
  M as a,
  H as n,
  z as t,
  L as b,
  S as y
} from "./ByyQE5Km.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "3652c86e8d7e6101a7b8eb8b8b3693725ba4cc26"
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
  return a(() => {
    var d, s;
    return n(() => {
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
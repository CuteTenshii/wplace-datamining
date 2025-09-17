import {
  M as n,
  H as a,
  z as t,
  L as b,
  S as y
} from "./7GDDwXAz.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "7717d06f815fd9b38aee4f2cbbcd5d44b5e4fc77"
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
    var s, d;
    return a(() => {
      s = d, d = [], t(() => {
        f !== e(...d) && (i(f, ...d), s && r(e(...s), f) && i(null, ...s))
      })
    }), () => {
      b(() => {
        d && r(e(...d), f) && i(null, ...d)
      })
    }
  }), f
}
export {
  g as b
};
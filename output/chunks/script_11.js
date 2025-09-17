import {
  M as r,
  H as n,
  z as t,
  L as b,
  S as y
} from "./CGRAleE5.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "4e903134a8e52eb1a8da35c90648b14dbd2e6388"
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

function a(f, i) {
  return f === i || (f == null ? void 0 : f[y]) === i
}

function g(f = {}, i, e, l) {
  return r(() => {
    var s, d;
    return n(() => {
      s = d, d = [], t(() => {
        f !== e(...d) && (i(f, ...d), s && a(e(...s), f) && i(null, ...s))
      })
    }), () => {
      b(() => {
        d && a(e(...d), f) && i(null, ...d)
      })
    }
  }), f
}
export {
  g as b
};
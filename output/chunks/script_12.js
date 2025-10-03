import {
  ac as r,
  H as n,
  z as t,
  L as b,
  ad as y
} from "./ByX6hzNF.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "271525ca33b9062741a3aa9359d1b5202c5b5a4b"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      i = new f.Error().stack;
    i && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[i] = "554e06f2-a09e-496d-9df0-84ac5f964ff6", f._sentryDebugIdIdentifier = "sentry-dbid-554e06f2-a09e-496d-9df0-84ac5f964ff6")
  })()
} catch {}

function a(f, i) {
  return f === i || (f == null ? void 0 : f[y]) === i
}

function g(f = {}, i, e, c) {
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
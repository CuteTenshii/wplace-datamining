import {
  ac as n,
  H as a,
  z as t,
  L as y,
  ad as b
} from "./CbNWXa9F.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "c52930fdf8854b5f9bae5ed78e18571583cf0fb7"
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

function r(f, i) {
  return f === i || (f == null ? void 0 : f[b]) === i
}

function g(f = {}, i, s, c) {
  return n(() => {
    var e, d;
    return a(() => {
      e = d, d = [], t(() => {
        f !== s(...d) && (i(f, ...d), e && r(s(...e), f) && i(null, ...e))
      })
    }), () => {
      y(() => {
        d && r(s(...d), f) && i(null, ...d)
      })
    }
  }), f
}
export {
  g as b
};
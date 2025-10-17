import {
  T as n,
  O as t,
  H as c,
  S as a,
  U as b
} from "./CuEZ6s8g.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "987f325885ec99eb8c0fc190246a664bf2e822ff"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      i = new f.Error().stack;
    i && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[i] = "670f945d-7c8c-4d2b-899d-c5c33308be17", f._sentryDebugIdIdentifier = "sentry-dbid-670f945d-7c8c-4d2b-899d-c5c33308be17")
  })()
} catch {}

function r(f, i) {
  return f === i || (f == null ? void 0 : f[b]) === i
}

function g(f = {}, i, s, y) {
  return n(() => {
    var e, d;
    return t(() => {
      e = d, d = [], c(() => {
        f !== s(...d) && (i(f, ...d), e && r(s(...e), f) && i(null, ...e))
      })
    }), () => {
      a(() => {
        d && r(s(...d), f) && i(null, ...d)
      })
    }
  }), f
}
export {
  g as b
};
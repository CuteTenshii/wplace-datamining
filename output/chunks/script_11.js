import {
  M as r,
  H as n,
  z as c,
  L as t,
  S as b
} from "./C-DfkL0W.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "20acfd88f8d7c9ea7803ba9b0c3c2cc1012eb498"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      i = new f.Error().stack;
    i && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[i] = "bdc26971-940c-4cc3-ab4a-b154b55c8a52", f._sentryDebugIdIdentifier = "sentry-dbid-bdc26971-940c-4cc3-ab4a-b154b55c8a52")
  })()
} catch {}

function a(f, i) {
  return f === i || (f == null ? void 0 : f[b]) === i
}

function g(f = {}, i, e, y) {
  return r(() => {
    var d, s;
    return n(() => {
      d = s, s = [], c(() => {
        f !== e(...s) && (i(f, ...s), d && a(e(...d), f) && i(null, ...d))
      })
    }), () => {
      t(() => {
        s && a(e(...s), f) && i(null, ...s)
      })
    }
  }), f
}
export {
  g as b
};
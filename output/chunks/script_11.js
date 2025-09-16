import {
  M as r,
  H as n,
  z as b,
  L as t,
  S as c
} from "./CS1SYnzj.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "cbd3f879a261fb0bdaced237db78a13f344d32ba"
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

function e(f, i) {
  return f === i || (f == null ? void 0 : f[c]) === i
}

function g(f = {}, i, a, y) {
  return r(() => {
    var s, d;
    return n(() => {
      s = d, d = [], b(() => {
        f !== a(...d) && (i(f, ...d), s && e(a(...s), f) && i(null, ...s))
      })
    }), () => {
      t(() => {
        d && e(a(...d), f) && i(null, ...d)
      })
    }
  }), f
}
export {
  g as b
};
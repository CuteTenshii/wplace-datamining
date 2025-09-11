import {
  M as n,
  H as a,
  z as t,
  L as c,
  S as b
} from "./CU1IDgoR.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "db50de114564c1615b532cc812ac881318d7283e"
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

function r(f, i) {
  return f === i || (f == null ? void 0 : f[b]) === i
}

function g(f = {}, i, e, y) {
  return n(() => {
    var s, d;
    return a(() => {
      s = d, d = [], t(() => {
        f !== e(...d) && (i(f, ...d), s && r(e(...s), f) && i(null, ...s))
      })
    }), () => {
      c(() => {
        d && r(e(...d), f) && i(null, ...d)
      })
    }
  }), f
}
export {
  g as b
};
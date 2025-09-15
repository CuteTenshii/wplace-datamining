import {
  M as n,
  H as a,
  z as t,
  L as b,
  S as c
} from "./Cvl6ittZ.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "b5b27c83ae3760cb72717576498367b1362fdc48"
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
  return f === i || (f == null ? void 0 : f[c]) === i
}

function g(f = {}, i, e, y) {
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
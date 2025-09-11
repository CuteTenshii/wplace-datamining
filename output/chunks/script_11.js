import {
  M as a,
  H as n,
  z as t,
  L as b,
  S as c
} from "./DeRLOp5b.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "9e594f39530defa0eea34168198e146d1118d931"
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

function g(f = {}, i, s, y) {
  return a(() => {
    var e, d;
    return n(() => {
      e = d, d = [], t(() => {
        f !== s(...d) && (i(f, ...d), e && r(s(...e), f) && i(null, ...e))
      })
    }), () => {
      b(() => {
        d && r(s(...d), f) && i(null, ...d)
      })
    }
  }), f
}
export {
  g as b
};
import {
  M as a,
  H as n,
  z as b,
  L as t,
  S as c
} from "./o3Mx0h7z.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "8664226c36b3dea53924eb4a5f34f4b7e9db6bc7"
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
  return a(() => {
    var d, s;
    return n(() => {
      d = s, s = [], b(() => {
        f !== e(...s) && (i(f, ...s), d && r(e(...d), f) && i(null, ...d))
      })
    }), () => {
      t(() => {
        s && r(e(...s), f) && i(null, ...s)
      })
    }
  }), f
}
export {
  g as b
};
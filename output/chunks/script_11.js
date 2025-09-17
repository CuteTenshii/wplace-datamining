import {
  M as b,
  H as n,
  z as t,
  L as a,
  S as y
} from "./CmkSLWfN.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "7278ed977b90641928943db9499ca73f82620c56"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new f.Error().stack;
    d && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[d] = "7d1c19be-3de6-41f6-990a-b1fbb8a6b4db", f._sentryDebugIdIdentifier = "sentry-dbid-7d1c19be-3de6-41f6-990a-b1fbb8a6b4db")
  })()
} catch {}

function r(f, d) {
  return f === d || (f == null ? void 0 : f[y]) === d
}

function g(f = {}, d, s, l) {
  return b(() => {
    var e, i;
    return n(() => {
      e = i, i = [], t(() => {
        f !== s(...i) && (d(f, ...i), e && r(s(...e), f) && d(null, ...e))
      })
    }), () => {
      a(() => {
        i && r(s(...i), f) && d(null, ...i)
      })
    }
  }), f
}
export {
  g as b
};
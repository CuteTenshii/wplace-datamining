import {
  M as n,
  H as a,
  z as t,
  L as b,
  S as c
} from "./DlWygu_S.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "48232197bdcdfc2a880dd0de2ffd5bc2075b51d0"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new f.Error().stack;
    d && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[d] = "bdc26971-940c-4cc3-ab4a-b154b55c8a52", f._sentryDebugIdIdentifier = "sentry-dbid-bdc26971-940c-4cc3-ab4a-b154b55c8a52")
  })()
} catch {}

function r(f, d) {
  return f === d || (f == null ? void 0 : f[c]) === d
}

function g(f = {}, d, e, y) {
  return n(() => {
    var s, i;
    return a(() => {
      s = i, i = [], t(() => {
        f !== e(...i) && (d(f, ...i), s && r(e(...s), f) && d(null, ...s))
      })
    }), () => {
      b(() => {
        i && r(e(...i), f) && d(null, ...i)
      })
    }
  }), f
}
export {
  g as b
};
import {
  T as n,
  O as t,
  H as b,
  S as a,
  U as c
} from "./BI2n3g5M.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "396734e5db96c8d18b29022abf53bbd030e61152"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new f.Error().stack;
    d && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[d] = "670f945d-7c8c-4d2b-899d-c5c33308be17", f._sentryDebugIdIdentifier = "sentry-dbid-670f945d-7c8c-4d2b-899d-c5c33308be17")
  })()
} catch {}

function r(f, d) {
  return f === d || (f == null ? void 0 : f[c]) === d
}

function g(f = {}, d, e, y) {
  return n(() => {
    var s, i;
    return t(() => {
      s = i, i = [], b(() => {
        f !== e(...i) && (d(f, ...i), s && r(e(...s), f) && d(null, ...s))
      })
    }), () => {
      a(() => {
        i && r(e(...i), f) && d(null, ...i)
      })
    }
  }), f
}
export {
  g as b
};
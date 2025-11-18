import {
  e as b,
  N as n,
  F as t,
  R as a,
  S as c
} from "./DnEjpmVm.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "dcafbf70eeb3b56ec7077bb04087bc09c7e58c55"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      i = new f.Error().stack;
    i && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[i] = "87249c32-a1b1-43c3-84bb-485be2695d75", f._sentryDebugIdIdentifier = "sentry-dbid-87249c32-a1b1-43c3-84bb-485be2695d75")
  })()
} catch {}

function r(f, i) {
  return f === i || (f == null ? void 0 : f[c]) === i
}

function g(f = {}, i, d, y) {
  return b(() => {
    var s, e;
    return n(() => {
      s = e, e = [], t(() => {
        f !== d(...e) && (i(f, ...e), s && r(d(...s), f) && i(null, ...s))
      })
    }), () => {
      a(() => {
        e && r(d(...e), f) && i(null, ...e)
      })
    }
  }), f
}
export {
  g as b
};
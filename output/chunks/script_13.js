import {
  e as n,
  N as t,
  F as a,
  R as b,
  S as c
} from "./ckrD_byn.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "c7db87af384652c1dc5fbd166ad20d68993159f9"
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

function g(f = {}, i, e, y) {
  return n(() => {
    var s, d;
    return t(() => {
      s = d, d = [], a(() => {
        f !== e(...d) && (i(f, ...d), s && r(e(...s), f) && i(null, ...s))
      })
    }), () => {
      b(() => {
        d && r(e(...d), f) && i(null, ...d)
      })
    }
  }), f
}
export {
  g as b
};
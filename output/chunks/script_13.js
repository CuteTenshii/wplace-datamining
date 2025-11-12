import {
  e as n,
  N as t,
  F as a,
  R as b,
  S as y
} from "./BYknGsrl.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "deff0df3054d4e17d810032708dfa15d941dfa1b"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new f.Error().stack;
    d && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[d] = "87249c32-a1b1-43c3-84bb-485be2695d75", f._sentryDebugIdIdentifier = "sentry-dbid-87249c32-a1b1-43c3-84bb-485be2695d75")
  })()
} catch {}

function r(f, d) {
  return f === d || (f == null ? void 0 : f[y]) === d
}

function g(f = {}, d, s, l) {
  return n(() => {
    var e, i;
    return t(() => {
      e = i, i = [], a(() => {
        f !== s(...i) && (d(f, ...i), e && r(s(...e), f) && d(null, ...e))
      })
    }), () => {
      b(() => {
        i && r(s(...i), f) && d(null, ...i)
      })
    }
  }), f
}
export {
  g as b
};
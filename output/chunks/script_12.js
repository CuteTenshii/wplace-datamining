import {
  X as a,
  R as n,
  L as t,
  W as b,
  Y as y
} from "./Vo-uc5TQ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e1bb3bb6ac619eae9d90b3c0ac59135bee8cefab"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "dbfe9422-1784-4a09-90ed-4f4714eac9e8", e._sentryDebugIdIdentifier = "sentry-dbid-dbfe9422-1784-4a09-90ed-4f4714eac9e8")
  })()
} catch {}

function r(e, f) {
  return e === f || (e == null ? void 0 : e[y]) === f
}

function g(e = {}, f, s, c) {
  return a(() => {
    var d, i;
    return n(() => {
      d = i, i = [], t(() => {
        e !== s(...i) && (f(e, ...i), d && r(s(...d), e) && f(null, ...d))
      })
    }), () => {
      b(() => {
        i && r(s(...i), e) && f(null, ...i)
      })
    }
  }), e
}
export {
  g as b
};
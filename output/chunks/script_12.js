import {
  X as n,
  R as t,
  L as a,
  W as b,
  Y as y
} from "./DlUXbix6.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a284527cbd407023d7d6ce22d7062bdeed40257e"
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

function g(e = {}, f, s, l) {
  return n(() => {
    var i, d;
    return t(() => {
      i = d, d = [], a(() => {
        e !== s(...d) && (f(e, ...d), i && r(s(...i), e) && f(null, ...i))
      })
    }), () => {
      b(() => {
        d && r(s(...d), e) && f(null, ...d)
      })
    }
  }), e
}
export {
  g as b
};
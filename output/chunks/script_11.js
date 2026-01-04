import {
  F as r,
  y as n,
  x as t,
  D as b,
  S as y
} from "./7dqXbHhh.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "845cd245f9645ae957e3eeb4920045ede245aa3a"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "fe9de44d-f84e-40ca-b571-e5c3cab41da7", e._sentryDebugIdIdentifier = "sentry-dbid-fe9de44d-f84e-40ca-b571-e5c3cab41da7")
  })()
} catch {}

function a(e, f) {
  return e === f || (e == null ? void 0 : e[y]) === f
}

function g(e = {}, f, s, c) {
  return r(() => {
    var i, d;
    return n(() => {
      i = d, d = [], t(() => {
        e !== s(...d) && (f(e, ...d), i && a(s(...i), e) && f(null, ...i))
      })
    }), () => {
      b(() => {
        d && a(s(...d), e) && f(null, ...d)
      })
    }
  }), e
}
export {
  g as b
};
import {
  X as n,
  R as a,
  L as t,
  W as c,
  Y as y
} from "./WB2K_T_Y.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "80747ca6680cc53dedf6ebd5efc0d97ede3ccece"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "3332b1aa-64c5-4482-9671-3e9278d9a7de", e._sentryDebugIdIdentifier = "sentry-dbid-3332b1aa-64c5-4482-9671-3e9278d9a7de")
  })()
} catch {}

function r(e, f) {
  return e === f || (e == null ? void 0 : e[y]) === f
}

function g(e = {}, f, s, b) {
  return n(() => {
    var i, d;
    return a(() => {
      i = d, d = [], t(() => {
        e !== s(...d) && (f(e, ...d), i && r(s(...i), e) && f(null, ...i))
      })
    }), () => {
      c(() => {
        d && r(s(...d), e) && f(null, ...d)
      })
    }
  }), e
}
export {
  g as b
};
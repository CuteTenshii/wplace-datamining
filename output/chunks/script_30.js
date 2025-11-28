import {
  g as d
} from "./Bb_g4xm1.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "bb5d5d7c8d5938b4a51a8b309833405bb5c12631"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c1b0c6dc-e60b-4192-a15d-7cdf40816c8b", e._sentryDebugIdIdentifier = "sentry-dbid-c1b0c6dc-e60b-4192-a15d-7cdf40816c8b")
  })()
} catch {}

function t() {
  return d()
}

function f() {
  return `/terms/return${t()==="pt"?"/pt":""}`
}

function o() {
  return `/terms/terms-of-service${t()==="pt"?"/pt":""}`
}
export {
  t as g, f as r, o as t
};
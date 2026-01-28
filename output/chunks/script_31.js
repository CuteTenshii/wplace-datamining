import {
  g as t
} from "./C_a06lyj.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a2d67f85c31e3fef075f7f6dde31a8af3e9f3dda"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "861b2fac-78cb-4dac-97f5-3669527e949c", e._sentryDebugIdIdentifier = "sentry-dbid-861b2fac-78cb-4dac-97f5-3669527e949c")
  })()
} catch {}

function f() {
  return t()
}

function r() {
  return `/terms/return${f()==="pt"?"/pt":""}`
}

function o() {
  return `/terms/terms-of-service${f()==="pt"?"/pt":""}`
}
export {
  f as g, r, o as t
};
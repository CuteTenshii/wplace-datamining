import {
  g as d
} from "./BsHwvxn8.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e76e01713b9f24724b47470026b2b700ac9e05af"
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

function r() {
  return `/terms/return${t()==="pt"?"/pt":""}`
}

function o() {
  return `/terms/terms-of-service${t()==="pt"?"/pt":""}`
}
export {
  t as g, r, o as t
};
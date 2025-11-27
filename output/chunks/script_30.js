import {
  g as d
} from "./BOfBLWG1.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1dee92bf582c1a78c458cd2ea7a5f29a8123460e"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d71cd3eb-aea2-499e-9d06-1813a7be9561", e._sentryDebugIdIdentifier = "sentry-dbid-d71cd3eb-aea2-499e-9d06-1813a7be9561")
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
  f as r, o as t
};
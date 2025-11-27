import {
  g as d
} from "./DBHcKzVK.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a3ac030b39e1c69cc580b4434d12301a02e465ee"
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

function o() {
  return `/terms/return${t()==="pt"?"/pt":""}`
}

function f() {
  return `/terms/terms-of-service${t()==="pt"?"/pt":""}`
}
export {
  o as r, f as t
};
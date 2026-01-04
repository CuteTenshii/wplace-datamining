import {
  g as f
} from "./CCwyOsrP.js";
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
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "00f2a0d8-0b86-42f2-afd9-20fd88ce701b", e._sentryDebugIdIdentifier = "sentry-dbid-00f2a0d8-0b86-42f2-afd9-20fd88ce701b")
  })()
} catch {}

function t() {
  return f()
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
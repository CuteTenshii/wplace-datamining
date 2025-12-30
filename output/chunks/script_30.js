import {
  g as t
} from "./JcMV53SJ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5f26df466977fd01d18eb1a4a8743e0ce83f1b4f"
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
import {
  g as f
} from "./DSNL03G2.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "29e4431f574f09d587efe1de5f4cdc3c0249ff76"
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
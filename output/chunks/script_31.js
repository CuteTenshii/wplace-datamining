import {
  g as f
} from "./B4ScQ8O8.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1be1930440b8b07ce70b7b458d3e953490a5a011"
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

function d() {
  return `/terms/return${t()==="pt"?"/pt":""}`
}

function o() {
  return `/terms/terms-of-service${t()==="pt"?"/pt":""}`
}
export {
  t as g, d as r, o as t
};
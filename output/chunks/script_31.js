import {
  g as t
} from "./DaUp8CSR.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "52f7dd52d370e3cd3a68b7bd4fba1dfc255f8526"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "51044a4c-f3fe-4463-9d8f-6cdf5fa96774", e._sentryDebugIdIdentifier = "sentry-dbid-51044a4c-f3fe-4463-9d8f-6cdf5fa96774")
  })()
} catch {}

function n() {
  return t()
}

function r() {
  return `/terms/return${n()==="pt"?"/pt":""}`
}

function o() {
  return `/terms/terms-of-service${n()==="pt"?"/pt":""}`
}
export {
  r,
  o as t
};
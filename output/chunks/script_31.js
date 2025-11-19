import {
  g as f
} from "./BwmEGhSN.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6d97a8a46c0eab54dca8573924bccbc5e0735b3d"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "51044a4c-f3fe-4463-9d8f-6cdf5fa96774", e._sentryDebugIdIdentifier = "sentry-dbid-51044a4c-f3fe-4463-9d8f-6cdf5fa96774")
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
  r,
  o as t
};
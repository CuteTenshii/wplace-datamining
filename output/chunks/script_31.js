import {
  g as t
} from "./DJY_xlKf.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "41710f7ccc2fafb6890924daac86ac6566913848"
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
  r,
  o as t
};
import {
  g as t
} from "./DCTOo5lo.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "98e9f0a798d14aeefb12d06ee236fbfeb3f778fb"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "00f2a0d8-0b86-42f2-afd9-20fd88ce701b", e._sentryDebugIdIdentifier = "sentry-dbid-00f2a0d8-0b86-42f2-afd9-20fd88ce701b")
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
  n as g, r, o as t
};
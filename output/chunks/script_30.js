import {
  g as t
} from "./CMw04vg4.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8706a848567fc83422d651908aa77f13fdf383e3"
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
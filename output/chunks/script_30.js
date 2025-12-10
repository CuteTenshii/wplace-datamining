import {
  g as f
} from "./CUHA8AfX.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "2d93caab31ad43e5d9e57c08634e0a6280bfa30c"
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
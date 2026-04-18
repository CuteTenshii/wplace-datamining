import {
  g as n
} from "./C33D4ipC.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "f2a47ca0cf31d67c069828387c1df370b5604651"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a555abbb-acd0-48ad-9a29-01d10546e727", e._sentryDebugIdIdentifier = "sentry-dbid-a555abbb-acd0-48ad-9a29-01d10546e727")
  } catch {}
})();

function r() {
  return n()
}

function f() {
  return `/terms/return${r()==="pt"?"/pt":""}`
}

function s() {
  return `/terms/terms-of-service${r()==="pt"?"/pt":""}`
}
export {
  r as g, f as r, s as t
};
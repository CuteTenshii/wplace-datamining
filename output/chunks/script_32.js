import {
  g as n
} from "./DwxruM8H.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c68723346dc53cede4c33166e0b3070fd4fa2ccb"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a555abbb-acd0-48ad-9a29-01d10546e727", e._sentryDebugIdIdentifier = "sentry-dbid-a555abbb-acd0-48ad-9a29-01d10546e727")
  } catch {}
})();

function r() {
  return n()
}

function s() {
  return `/terms/return${r()==="pt"?"/pt":""}`
}

function f() {
  return `/terms/terms-of-service${r()==="pt"?"/pt":""}`
}
export {
  r as g, s as r, f as t
};
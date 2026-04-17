import {
  g as n
} from "./DhZUX4Dk.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cdbcf7fbe78b739ecf1b47eab1739b136749bbb3"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a555abbb-acd0-48ad-9a29-01d10546e727", e._sentryDebugIdIdentifier = "sentry-dbid-a555abbb-acd0-48ad-9a29-01d10546e727")
  } catch {}
})();

function r() {
  return n()
}

function b() {
  return `/terms/return${r()==="pt"?"/pt":""}`
}

function f() {
  return `/terms/terms-of-service${r()==="pt"?"/pt":""}`
}
export {
  r as g, b as r, f as t
};
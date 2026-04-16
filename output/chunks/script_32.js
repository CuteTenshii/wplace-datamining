import {
  g as n
} from "./C6AhFN09.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1f8643ac63030331424d23f5f462150829277f89"
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
import {
  g as n
} from "./B5qsSgN7.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "13a4af59f5d722706755b32f23a5d4b27cdb64ce"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ec311c48-704d-4d83-9057-a66cf103fa2c", e._sentryDebugIdIdentifier = "sentry-dbid-ec311c48-704d-4d83-9057-a66cf103fa2c")
  } catch {}
})();

function r() {
  return n()
}

function s() {
  return `/terms/return${r()==="pt"?"/pt":""}`
}

function a() {
  return `/terms/terms-of-service${r()==="pt"?"/pt":""}`
}
export {
  r as g, s as r, a as t
};
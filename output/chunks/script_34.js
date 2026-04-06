import {
  g as n
} from "./rBENuJnv.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1df086015dcad95f71ef916d3761e849d40d98a2"
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
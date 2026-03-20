import {
  g as n
} from "./B1qPfvhw.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8982ef6b1b489154c6458cf227ee17f00e1038fe"
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

function c() {
  return `/terms/terms-of-service${r()==="pt"?"/pt":""}`
}
export {
  r as g, s as r, c as t
};
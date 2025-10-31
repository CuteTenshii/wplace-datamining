import {
  g as f
} from "./F0L6VCAb.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7a02c591f9910da893b84f71aa7268f0a0b264cd"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7af0aa88-6a65-4204-abd8-fb1fc7e8d27c", e._sentryDebugIdIdentifier = "sentry-dbid-7af0aa88-6a65-4204-abd8-fb1fc7e8d27c")
  })()
} catch {}
const o = () => "Confirm",
  a = () => "Confirmar",
  i = (e = {}, n = {}) => (n.locale ?? f()) === "en" ? o() : a();
export {
  i as c
};
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f34a6819-208e-49fe-945f-f47a3fc0ea38", e._sentryDebugIdIdentifier = "sentry-dbid-f34a6819-208e-49fe-945f-f47a3fc0ea38")
  })()
} catch {}
const t = () => "Refresh",
  o = () => "Atualizar",
  d = (e = {}, n = {}) => (n.locale ?? f()) === "en" ? t() : o();
export {
  d as r
};
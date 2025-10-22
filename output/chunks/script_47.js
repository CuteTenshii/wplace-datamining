import {
  g as f
} from "./BDq3RVkQ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a284527cbd407023d7d6ce22d7062bdeed40257e"
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
  d = () => "Atualizar",
  a = (e = {}, n = {}) => (n.locale ?? f()) === "en" ? t() : d();
export {
  a as r
};
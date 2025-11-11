import {
  g as f
} from "./DDgw7Diq.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b24cfafde051e0f3170b4fca69cc198662dd9646"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ccbcb242-a46e-40d3-b66f-926d15b2df4f", e._sentryDebugIdIdentifier = "sentry-dbid-ccbcb242-a46e-40d3-b66f-926d15b2df4f")
  })()
} catch {}
const o = () => "Confirm",
  d = () => "Confirmar",
  r = (e = {}, n = {}) => (n.locale ?? f()) === "en" ? o() : d();
export {
  r as c
};
import {
  g as f
} from "./BrQ-nIYg.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "93ce353ea66c24fd9b67d84d4d5dac764dc78ea8"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7f7948f0-6927-4528-b225-c8550146f5f0", e._sentryDebugIdIdentifier = "sentry-dbid-7f7948f0-6927-4528-b225-c8550146f5f0")
  })()
} catch {}
const o = () => "Confirm",
  d = () => "Confirmar",
  r = (e = {}, n = {}) => (n.locale ?? f()) === "en" ? o() : d();
export {
  r as c
};